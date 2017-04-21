import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as lexer from './C3POLexer';
import * as parser from './C3POParser';

let code = `print(concat("Hello ", "World"))`;

// This is the scary part that you don't need to worry about.
let inputStream = new ANTLRInputStream(code);
let l = new lexer.C3POLexer(inputStream);
let tokenStream = new CommonTokenStream(l);
let p = new parser.C3POParser(tokenStream);

// Parse the input.
let result = p.expression();
if (result.methodCall()) {
  // It's a method call.
  let methodCall: parser.MethodCallContext = result.methodCall()!;
  let methodName = methodCall.methodName().text;
  console.log(`The root method name is ${methodName}`);
  // methodName is "print".
}
