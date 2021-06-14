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
    GraficarAST(dotData) {
        //dotData += "0[label=\"Tove\"];" ;
        var padre = 1;
        dotData += padre + "[label=\"" + this.arbol.identificador + "\";color=\"red\"];";
        //enviar al primer padre de todo
        dotData += this.recorrerArbolTabla(dotData, this.arbol, padre);
        return dotData;
    }
    recorrerArbolTabla(dotData, nodo, padre) {
        // en el dotData agregaremos las cadenas
        // en el nodo traemos al nodo padre
        // en el padre traemos el id del padre de sus hijos
        // en el hijo traemos el contador 
        // es padre?
        // si
        if (nodo.listaObjetos != null) {
            //unir padres con hijos
            var hijoactual = 2;
            for (let obj of nodo.listaObjetos) {
                dotData += padre + "" + hijoactual + "[label=\"" + obj.identificador + "\";color=\"blue\"];";
                dotData += padre + "->" + padre + "" + hijoactual + '[arrowhead="none"];';
                hijoactual++;
            }
            //ir al siguiente hijo
            var hijoactual = 2;
            for (let obj of nodo.listaObjetos) {
                dotData += this.recorrerArbolTabla(dotData, obj, parseInt(padre + "" + hijoactual));
                hijoactual++;
            }
            return dotData;
        }
        else {
            dotData += padre + "[label=\"" + nodo.identificador + "\";color=\"blue\"];";
            //return dotData;
        }
    }
}
//crear el nodo hijo, amarrarlo con el padre, incrementar el id numero del hijo
//dotData += hijo+"[label=\""+ obj.identificador  +"\";color=\"blue\"];";
// += padre+'->'+hijo+';';
// hijo++;
//exports.entregable=entregable;
