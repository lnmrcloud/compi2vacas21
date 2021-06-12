import { AST } from "./AST/AST";
import { Entorno } from "./AST/Entorno";
import { Instruccion } from "./Interfaces/Instruccion";

const gramatica = require('../Gramatica/gramatica');

function ejecutarCodigo(entrada:string){
    const objetos = gramatica.parse(entrada);
    console.log(objetos[0].valor);
    const entornoGlobal:Entorno = new Entorno(null);
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