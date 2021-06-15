
const gramatica = require('./Gramatica/gramatica');

function ejecutarCodigo(entrada:string){
    const objetos = gramatica.parse(entrada);
    objetos.CrearTabla();
    console.log(objetos.reporte_gramatical);
    
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
  <body>Dont forget me this weekend!</body>
</note>
`);