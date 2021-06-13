import { Simbolo } from "../AST/Simbolo";
import { Tabla_errores } from "../AST/Tabla_errores";
import { Tabla_simbolos } from "../AST/Tabla_simbolos";
import { Tipo } from "../AST/Tipo";
import { Atributo } from "./Atributo";
import { Objeto } from "./Objeto";

export class entregable{
    public arbol: Objeto=new Objeto("0","",0,0,[],[]);            
    public lcondi: Array<Atributo>=[];
    public reporte_gramatical:string="";
    public tabla_errores:Tabla_errores=new Tabla_errores();
    public tabla_simbolos:Tabla_simbolos=new Tabla_simbolos();
    //public arbol:{[id:number] : Objeto}={};
    //public lcondi:{[id:number] : Array<Atributo>}={};
    public CrearTabla()
    {     
        this.visitar(this.arbol,0);
    }
    public visitar(nodo:Objeto,padre:number)
    {
        //guardo mi simbolo
        var simbolo = new Simbolo(nodo.identificador,Tipo.OBJETO,nodo.texto,nodo.linea,nodo.columna,padre);
        this.tabla_simbolos.agregar(simbolo);
        var id:number=this.tabla_simbolos.num_registro;

        for (let atri of nodo.listaAtributos){
            var simbolo = new Simbolo(atri.identificador,Tipo.ATRIBUTO,atri.valor,atri.linea,atri.columna,id);
            this.tabla_simbolos.agregar(simbolo);
        }
        for (let obj of nodo.listaObjetos){
            this.visitar(obj,id);
        }
    }
}
exports.entregable=entregable;