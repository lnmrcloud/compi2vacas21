"use strict";
class entregable {
    constructor() {
        this.arbol = new Objeto("0", "", 0, 0, [], []);
        this.lcondi = [];
        this.reporte_gramatical = "";
        this.tabla_errores = new Tabla_errores();
        this.tabla_simbolos = new Tabla_simbolos();
    }
    //public arbol:{[id:number] : Objeto}={};
    //public lcondi:{[id:number] : Array<Atributo>}={};
    CrearTabla() {
        this.visitar(this.arbol, 0);
    }
    visitar(nodo, padre) {
        //guardo mi simbolo
        var simbolo = new Simbolo(nodo.identificador, Tipo.OBJETO, nodo.texto, nodo.linea, nodo.columna, padre);
        this.tabla_simbolos.agregar(simbolo);
        var id = this.tabla_simbolos.num_registro;
        for (let atri of nodo.listaAtributos) {
            var simbolo = new Simbolo(atri.identificador, Tipo.ATRIBUTO, atri.valor, atri.linea, atri.columna, id);
            this.tabla_simbolos.agregar(simbolo);
        }
        for (let obj of nodo.listaObjetos) {
            this.visitar(obj, id);
        }
    }
}
//exports.entregable=entregable;
