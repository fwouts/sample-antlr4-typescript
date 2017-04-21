// Generated from C3PO.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class C3POParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly NAME=4;
	public static readonly STRING=5;
	public static readonly WS=6;
	public static readonly RULE_expression = 0;
	public static readonly RULE_methodCall = 1;
	public static readonly RULE_methodName = 2;
	public static readonly RULE_methodCallArguments = 3;
	public static readonly RULE_singleMethodCallArgument = 4;
	public static readonly ruleNames: string[] = [
		"expression", "methodCall", "methodName", "methodCallArguments", "singleMethodCallArgument"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'('", "')'", "','"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, "NAME", "STRING", "WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(C3POParser._LITERAL_NAMES, C3POParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return C3POParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "C3PO.g4"; }

	@Override
	public get ruleNames(): string[] { return C3POParser.ruleNames; }

	@Override
	public get serializedATN(): string { return C3POParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(C3POParser._ATN, this);
	}
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, C3POParser.RULE_expression);
		try {
			this.state = 12;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case C3POParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 10;
				this.methodCall();
				}
				break;
			case C3POParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 11;
				this.match(C3POParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, C3POParser.RULE_methodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this.methodName();
			this.state = 15;
			this.match(C3POParser.T__0);
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===C3POParser.NAME || _la===C3POParser.STRING) {
				{
				this.state = 16;
				this.methodCallArguments(0);
				}
			}

			this.state = 19;
			this.match(C3POParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, C3POParser.RULE_methodName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this.match(C3POParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public methodCallArguments(): MethodCallArgumentsContext;
	public methodCallArguments(_p: number): MethodCallArgumentsContext;
	@RuleVersion(0)
	public methodCallArguments(_p?: number): MethodCallArgumentsContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MethodCallArgumentsContext = new MethodCallArgumentsContext(this._ctx, _parentState);
		let _prevctx: MethodCallArgumentsContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, C3POParser.RULE_methodCallArguments, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 24;
			this.singleMethodCallArgument();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 31;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new MethodCallArgumentsContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, C3POParser.RULE_methodCallArguments);
					this.state = 26;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 27;
					this.match(C3POParser.T__2);
					this.state = 28;
					this.singleMethodCallArgument();
					}
					} 
				}
				this.state = 33;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public singleMethodCallArgument(): SingleMethodCallArgumentContext {
		let _localctx: SingleMethodCallArgumentContext = new SingleMethodCallArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, C3POParser.RULE_singleMethodCallArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.methodCallArguments_sempred(_localctx as MethodCallArgumentsContext, predIndex);
		}
		return true;
	}
	private methodCallArguments_sempred(_localctx: MethodCallArgumentsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\b\'\x04\x02\t"+
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x03"+
		"\x02\x05\x02\x0F\n\x02\x03\x03\x03\x03\x03\x03\x05\x03\x14\n\x03\x03\x03"+
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05"+
		"\x07\x05 \n\x05\f\x05\x0E\x05#\v\x05\x03\x06\x03\x06\x03\x06\x02\x02\x03"+
		"\b\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02$\x02\x0E\x03\x02\x02"+
		"\x02\x04\x10\x03\x02\x02\x02\x06\x17\x03\x02\x02\x02\b\x19\x03\x02\x02"+
		"\x02\n$\x03\x02\x02\x02\f\x0F\x05\x04\x03\x02\r\x0F\x07\x07\x02\x02\x0E"+
		"\f\x03\x02\x02\x02\x0E\r\x03\x02\x02\x02\x0F\x03\x03\x02\x02\x02\x10\x11"+
		"\x05\x06\x04\x02\x11\x13\x07\x03\x02\x02\x12\x14\x05\b\x05\x02\x13\x12"+
		"\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x16"+
		"\x07\x04\x02\x02\x16\x05\x03\x02\x02\x02\x17\x18\x07\x06\x02\x02\x18\x07"+
		"\x03\x02\x02\x02\x19\x1A\b\x05\x01\x02\x1A\x1B\x05\n\x06\x02\x1B!\x03"+
		"\x02\x02\x02\x1C\x1D\f\x03\x02\x02\x1D\x1E\x07\x05\x02\x02\x1E \x05\n"+
		"\x06\x02\x1F\x1C\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02"+
		"!\"\x03\x02\x02\x02\"\t\x03\x02\x02\x02#!\x03\x02\x02\x02$%\x05\x02\x02"+
		"\x02%\v\x03\x02\x02\x02\x05\x0E\x13!";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!C3POParser.__ATN) {
			C3POParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(C3POParser._serializedATN));
		}

		return C3POParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(C3POParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return C3POParser.RULE_expression; }
}


export class MethodCallContext extends ParserRuleContext {
	public methodName(): MethodNameContext {
		return this.getRuleContext(0, MethodNameContext);
	}
	public methodCallArguments(): MethodCallArgumentsContext | undefined {
		return this.tryGetRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return C3POParser.RULE_methodCall; }
}


export class MethodNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(C3POParser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return C3POParser.RULE_methodName; }
}


export class MethodCallArgumentsContext extends ParserRuleContext {
	public singleMethodCallArgument(): SingleMethodCallArgumentContext {
		return this.getRuleContext(0, SingleMethodCallArgumentContext);
	}
	public methodCallArguments(): MethodCallArgumentsContext | undefined {
		return this.tryGetRuleContext(0, MethodCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return C3POParser.RULE_methodCallArguments; }
}


export class SingleMethodCallArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return C3POParser.RULE_singleMethodCallArgument; }
}


