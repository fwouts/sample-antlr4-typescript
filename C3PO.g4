// Our grammar is called C3PO.
grammar C3PO;
// We define expression to be either a method call or a string.
expression
    : methodCall
    | STRING
    ;
// We define methodCall to be a method name followed by an opening paren, an optional list of arguments, and a closing paren.
methodCall
    : methodName '(' methodCallArguments? ')'
    ;
// We define methodName to be a name.
methodName
    : NAME
    ;
// We define methodCallArguments to be a list of arguments separated by commas.
methodCallArguments
    : singleMethodCallArgument (',' singleMethodCallArgument)*
    ;
// We define singleMethodCallArgument to be an expression.
singleMethodCallArgument
    : expression
    ;
// NAME represents any variable or method name.
// The regular expression we use basically means "starts with a letter and may follow with any number of alphanumerical characters".
NAME
    : [a-zA-Z][a-zA-Z0-9]*
    ;
// STRING represents a string value, for example "abc".
// Note that for simplicity, we don't allow escaping double quotes.
STRING
    : '"' ~('"')* '"'
    ;
// WS represents a whitespace, which is ignored entirely by skip.
WS
    : [ \t\u000C\r\n]+ -> skip
    ;
