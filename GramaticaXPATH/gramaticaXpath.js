/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramaticaXpath = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,8],$V2=[1,9],$V3=[5,6],$V4=[1,16],$V5=[5,6,11,18,20,23,26,27,28,29,30,32,33,34,35,36,37,38,39],$V6=[1,20],$V7=[1,26],$V8=[1,31],$V9=[1,29],$Va=[1,30],$Vb=[1,32],$Vc=[5,6,11,18],$Vd=[1,35],$Ve=[1,34],$Vf=[1,37],$Vg=[1,38],$Vh=[1,39],$Vi=[1,43],$Vj=[1,48],$Vk=[1,52],$Vl=[1,50],$Vm=[1,51],$Vn=[1,53],$Vo=[1,54],$Vp=[1,55],$Vq=[1,56],$Vr=[1,57],$Vs=[1,58],$Vt=[1,59],$Vu=[1,60],$Vv=[1,61],$Vw=[1,62],$Vx=[20,23,26,27,28,29,30,32,33,34,35,36,37,38,39],$Vy=[20,23,27,28,32,33,34,35,36,37,38,39],$Vz=[20,23,32,33,34,35,36,37,38,39];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"BASE":4,"EOF":5,"concat":6,"INST":7,"AXIS":8,"LIST_PREDICATE":9,"SELECTION":10,"slash":11,"ELEMENT":12,"point":13,"ATRIBUTO":14,"id":15,"atr":16,"PREDICATE":17,"lcor":18,"EXPRESION":19,"rcor":20,"SELECTOR":21,"lpar":22,"rpar":23,"rnode":24,"rtext":25,"aster":26,"plus":27,"min":28,"div":29,"mod":30,"minus":31,"may":32,"men":33,"mayque":34,"menque":35,"eq":36,"dif":37,"and":38,"or":39,"entero":40,"cadena":41,"rlast":42,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"concat",11:"slash",13:"point",15:"id",16:"atr",18:"lcor",20:"rcor",22:"lpar",23:"rpar",24:"rnode",25:"rtext",26:"aster",27:"plus",28:"min",29:"div",30:"mod",31:"minus",32:"may",33:"men",34:"mayque",35:"menque",36:"eq",37:"dif",38:"and",39:"or",40:"entero",41:"cadena",42:"rlast"},
productions_: [0,[3,2],[4,3],[4,1],[7,3],[7,2],[7,2],[7,1],[8,4],[8,4],[8,3],[8,3],[8,2],[8,3],[8,1],[12,1],[12,1],[14,2],[9,2],[9,1],[17,3],[10,5],[10,4],[21,1],[21,1],[21,2],[21,1],[19,3],[19,3],[19,3],[19,3],[19,3],[19,2],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,1],[19,1],[19,1],[19,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,7:3,8:4,11:$V0,12:6,14:7,15:$V1,16:$V2},{1:[3]},{5:[1,10],6:[1,11]},o($V3,[2,3]),o($V3,[2,7],{9:12,10:13,17:15,11:[1,14],18:$V4}),{11:[1,17],12:18,13:[1,19],14:7,15:$V1,16:$V2},o($V5,[2,14]),o($V5,[2,15]),o($V5,[2,16]),{15:$V6},{1:[2,1]},{7:21,8:4,11:$V0,12:6,14:7,15:$V1,16:$V2},o($V3,[2,5],{10:22,17:23,11:[1,24],18:$V4}),o($V3,[2,6]),{11:[1,25],12:27,13:$V7,14:7,15:$V1,16:$V8,21:28,24:$V9,25:$Va,26:$Vb},o($Vc,[2,19]),{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:33,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{12:40,14:7,15:$V1,16:$V2},o($V5,[2,12]),{13:[1,41]},o($V5,[2,17]),o($V3,[2,2]),o($V3,[2,4]),o($Vc,[2,18]),{11:[1,42],16:$Vi,21:28,24:$V9,25:$Va,26:$Vb},{12:44,14:7,15:$V1,16:$V8,21:45,24:$V9,25:$Va,26:$Vb},{13:[1,46]},o($V5,[2,10]),{22:[1,47]},{22:[2,23]},{22:[2,24]},{15:$V6,26:$Vj},{22:[2,26]},{20:[1,49],26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:63,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:64,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},o($Vx,[2,42],{11:[1,65]}),o($Vx,[2,43]),o($Vx,[2,44]),{22:[1,66]},o($V5,[2,11]),o($V5,[2,13]),{16:$Vi,21:45,24:$V9,25:$Va,26:$Vb},{26:$Vj},o($V5,[2,8]),{22:[1,67]},o($V5,[2,9]),{23:[1,68]},{22:[2,25]},o($Vc,[2,20]),{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:69,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:70,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:71,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:72,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:73,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:74,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:75,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:76,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:77,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:78,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:79,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:80,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},{8:36,11:$V0,12:6,14:7,15:$V1,16:$V2,19:81,22:$Vd,31:$Ve,40:$Vf,41:$Vg,42:$Vh},o($Vx,[2,32]),{23:[1,82],26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv,39:$Vw},{11:[1,83],12:27,13:$V7,14:7,15:$V1,16:$V2},{23:[1,84]},{23:[1,85]},o($V3,[2,22]),o($Vy,[2,27],{26:$Vk,29:$Vn,30:$Vo}),o($Vy,[2,28],{26:$Vk,29:$Vn,30:$Vo}),o($Vx,[2,29]),o($Vx,[2,30]),o($Vx,[2,31]),o($Vz,[2,33],{26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo}),o($Vz,[2,34],{26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo}),o($Vz,[2,35],{26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo}),o($Vz,[2,36],{26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo}),o($Vz,[2,37],{26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo}),o($Vz,[2,38],{26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo}),o([20,23,38,39],[2,39],{26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu}),o([20,23,39],[2,40],{26:$Vk,27:$Vl,28:$Vm,29:$Vn,30:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt,37:$Vu,38:$Vv}),o($Vx,[2,41]),{12:44,14:7,15:$V1,16:$V2},o($Vx,[2,45]),o($V3,[2,21])],
defaultActions: {10:[2,1],29:[2,23],30:[2,24],32:[2,26],48:[2,25]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 11;
break;
case 1:return 16;
break;
case 2:return 13;
break;
case 3:return 'dpoint';
break;
case 4:return 6;
break;
case 5:return 22;
break;
case 6:return 23;
break;
case 7:return 18;
break;
case 8:return 20;
break;
case 9:return 27;
break;
case 10:return 28;
break;
case 11:return 26;
break;
case 12:return 29;
break;
case 13:return 30;
break;
case 14:return 36;
break;
case 15:return 37;
break;
case 16:return 32;
break;
case 17:return 33;
break;
case 18:return 'mayeq';
break;
case 19:return 'meneq';
break;
case 20:return 38;  
break;
case 21:return 39;
break;
case 22:return 25;
break;
case 23:return 42;
break;
case 24:return 24;
break;
case 25:
break;
case 26:
break;
case 27:return 'decimal';
break;
case 28:return 40;
break;
case 29:return 15;
break;
case 30: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 41; 
break;
case 31: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 41; 
break;
case 32: console.error('Error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
case 33:return 5;
break;
}
},
rules: [/^(?:\/)/i,/^(?:@)/i,/^(?:\.)/i,/^(?::)/i,/^(?:\|)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:div\b)/i,/^(?:mod\b)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:>)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:<=)/i,/^(?:and\b)/i,/^(?:or\b)/i,/^(?:text\b)/i,/^(?:last\b)/i,/^(?:node\b)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:(([0-9]+\.[0-9]*)|(\.[0-9]+)))/i,/^(?:[0-9]+)/i,/^(?:[a-zA-Z_][a-zA-Z0-9_ñÑ]*)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']*')/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramaticaXpath;
exports.Parser = gramaticaXpath.Parser;
exports.parse = function () { return gramaticaXpath.parse.apply(gramaticaXpath, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}