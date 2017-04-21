import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as lexer from './C3POLexer';
import * as parser from './C3POParser';

let code = `print(concat("Hello ", "World"))`;

// This is the scary part that you don't need to worry about.
let inputStream = new ANTLRInputStream(code);
let l = new lexer.C3POLexer(inputStream);
let tokenStream = new CommonTokenStream(l);
let p = new parser.C3POParser(tokenStream);

// Parse and execute the code.
let result = p.expression();
evaluateExpression(result);

type ExpressionValue = string | null;

function evaluateExpression(e: parser.ExpressionContext): ExpressionValue {
  if (e.methodCall()) {
    return evaluateMethodCall(e.methodCall()!);
  } else {
    // Our grammar is super simple, it's always a string between double quotes.
    let stringExpression = e.text;
    return stringExpression.substr(1, stringExpression.length - 2);
  }
}

function evaluateMethodCall(m: parser.MethodCallContext): ExpressionValue {
  let methodName = m.methodName().text;
  let methodArguments = m.methodCallArguments().expression()
      .map(expression => evaluateExpression(expression));
  switch (methodName) {
    case 'print':
      console.log.apply(null, methodArguments);
      return null;
    case 'concat':
      return methodArguments.join('');
    default:
      throw new Error('Unknown method ' + methodName);
  }
}
