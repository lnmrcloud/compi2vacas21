"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = void 0;
class Objeto {
    constructor(id, texto, linea, columna, listaAtributos, listaO) {
        this.identificador = id;
        this.texto = texto;
        this.linea = linea;
        this.columna = columna;
        this.listaAtributos = listaAtributos;
        this.listaObjetos = listaO;
    }
}
exports.Objeto = Objeto;
