/* Definición Léxica */
%lex

%options case-sensitive


numero                             [0-9]


BSL                                 "\\".
%s                                  comment
%%

"//".*                              /* skip comments */
"<!--"                                this.begin('comment');
<comment>"-->"                       this.popState();
<comment>.                          /* skip comment content*/
\s+                                 /* skip whitespace */

"<?xml"                     return 'inicio';
"version"                   return 'versi';
"?>"                        return 'fin';

"xml"                       return 'Pal_xml';
"encoding"                  return 'encoding';
"standalone"                return 'standalone';
"&lt;"                       return 'lt';
"&gt;"                       return 'gt';
"&amp;"                       return 'amp';
"&apos;"                       return 'apos';
"&quot;"                       return 'quot';


"<"                         return 'abre';
"/"                         return 'diagonal';
">"                         return 'cierra';

"="                         return 'igual';

/* Number literals */

[a-zA-Z_][a-zA-Z0-9_ñÑ\-\.]*                                    return 'etiqueta';
[^\r\t\na-zA-ZñÑ0-9_><\"\'&]                                    return 'etiqueta2'

(\"[^\"]*\")|(\'[^\']*\')                                       return 'string';      


[\r|\t|\n]+                             {/**/}

//error lexico
.                                   {
                                        console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                    }

<<EOF>>                     return 'EOF'

/lex

//SECCION DE IMPORTS
%{    
    //const {Objeto} = require("../Expresiones/Objeto");
    //const {Atributo} = require("../Expresiones/Atributo");
%}

// DEFINIMOS PRESEDENCIA DE OPERADORES

// DEFINIMOS PRODUCCIÓN INICIAL
%start START

%%







/* Definición de la gramática */
START : XML_INI EOF         { $$ = $1; return $$; }
;

XML_INI : inicio ATIS fin OBJ      {$$=$4 }
    |OBJ                                 {$$ = $1;}
;

ATIS : VERSION CODI DEPEN               {$1.push($2);$1.push($3); $$ = $1;}
;

VERSION : versi igual string            {$$ = [new Atributo($1, $3, @1.first_line, @1.first_column)];}
;
CODI : encoding igual string            {$$ = new Atributo($1, $3, @1.first_line, @1.first_column);}
    |                                   {}
;
DEPEN : standalone igual string         {$$ = new Atributo($1, $3, @1.first_line, @1.first_column);}
        |                               {}
;

OBJ : abre etiqueta LATRIS cierra OBJS abre diagonal etiqueta cierra           {$$ = new Objeto($2,'',@1.first_line, @1.first_column,$3,$5);}
        |abre etiqueta LATRIS cierra DATS abre diagonal etiqueta cierra        {$$ = new Objeto($2,$5,@1.first_line, @1.first_column,$3,[]);}
        |abre etiqueta LATRIS diagonal cierra                                   {$$ = new Objeto($2,'',@1.first_line, @1.first_column,$3,[]);}
;
DATS : DATS DAT                          {$1=$1+' '+$2;$$ =$1 ;}
        |DAT                          {$$ = $1;}
;
DAT :
        etiqueta                        {$$ = $1;}                
        |etiqueta2                        {$$ = $1;}                
        |lt                             {$$ = $1;}        
        |amp                            {$$ = $1;}
        |quot                           {$$ = $1;}
        |apos                           {$$ = $1;}
        |gt                             {$$ = $1;}        
;

LATRIS : ATRIS                          {$$ = [$1];}
        |                               {$$ = [];}
;
ATRIS : ATRIS ATRI                      {$1.push($2); $$ = $1;}
        |ATRI                           {$$ = [$1];}
;

ATRI : etiqueta igual string            {$$ = new Atributo($1, $3, @1.first_line, @1.first_column);}
;

OBJS : OBJS OBJ                         { $1.push($2); $$ = $1;}
        |OBJ                            { $$ = [$1];}
;




