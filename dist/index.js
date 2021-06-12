"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entorno_1 = require("./AST/Entorno");
const gramatica = require('../Gramatica/gramatica');
function ejecutarCodigo(entrada) {
    const objetos = gramatica.parse(entrada);
    console.log(objetos[0].valor);
    const entornoGlobal = new Entorno_1.Entorno(null);
    //const ast:AST = new AST(instrucciones);
    //instrucciones.forEach((element:Instruccion) => {
    //    element.ejecutar(entornoGlobal,ast);
    //});
}
ejecutarCodigo(`
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
`);
