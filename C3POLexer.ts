// Generated from C3PO.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class C3POLexer extends Lexer {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly NAME=4;
	public static readonly STRING=5;
	public static readonly WS=6;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "NAME", "STRING", "WS"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'('", "')'", "','"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, "NAME", "STRING", "WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(C3POLexer._LITERAL_NAMES, C3POLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return C3POLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(C3POLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "C3PO.g4"; }

	@Override
	public get ruleNames(): string[] { return C3POLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return C3POLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return C3POLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\b,\b\x01\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03"+
		"\x05\x07\x05\x18\n\x05\f\x05\x0E\x05\x1B\v\x05\x03\x06\x03\x06\x07\x06"+
		"\x1F\n\x06\f\x06\x0E\x06\"\v\x06\x03\x06\x03\x06\x03\x07\x06\x07\'\n\x07"+
		"\r\x07\x0E\x07(\x03\x07\x03\x07\x02\x02\x02\b\x03\x02\x03\x05\x02\x04"+
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x03\x02\x06\x04\x02C\\c|\x05"+
		"\x022;C\\c|\x03\x02$$\x05\x02\v\f\x0E\x0F\"\".\x02\x03\x03\x02\x02\x02"+
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02"+
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x03\x0F\x03\x02\x02\x02\x05"+
		"\x11\x03\x02\x02\x02\x07\x13\x03\x02\x02\x02\t\x15\x03\x02\x02\x02\v\x1C"+
		"\x03\x02\x02\x02\r&\x03\x02\x02\x02\x0F\x10\x07*\x02\x02\x10\x04\x03\x02"+
		"\x02\x02\x11\x12\x07+\x02\x02\x12\x06\x03\x02\x02\x02\x13\x14\x07.\x02"+
		"\x02\x14\b\x03\x02\x02\x02\x15\x19\t\x02\x02\x02\x16\x18\t\x03\x02\x02"+
		"\x17\x16\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02"+
		"\x19\x1A\x03\x02\x02\x02\x1A\n\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02"+
		"\x1C \x07$\x02\x02\x1D\x1F\n\x04\x02\x02\x1E\x1D\x03\x02\x02\x02\x1F\""+
		"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!#\x03\x02\x02"+
		"\x02\" \x03\x02\x02\x02#$\x07$\x02\x02$\f\x03\x02\x02\x02%\'\t\x05\x02"+
		"\x02&%\x03\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02"+
		"\x02\x02)*\x03\x02\x02\x02*+\b\x07\x02\x02+\x0E\x03\x02\x02\x02\x06\x02"+
		"\x19 (\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!C3POLexer.__ATN) {
			C3POLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(C3POLexer._serializedATN));
		}

		return C3POLexer.__ATN;
	}

}

