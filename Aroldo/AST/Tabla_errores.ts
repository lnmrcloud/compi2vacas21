import { Error } from "./Error";


export class Tabla_errores{
    
    public registros:{[id:number] : Error}={};
    private num_registro:number=0;
    
    agregar(error:Error){                
        this.num_registro=this.num_registro+1;    
        this.registros[this.num_registro] = error;
    }
    

    eliminar(num_registro:number):boolean{                   
            const value = this.registros[num_registro];
            if (value!==undefined)
            {
                delete this.registros[num_registro];
                return true;
            }
        
        return false;
    }

    existe(num_registro:number):boolean{                
            const value = this.registros[num_registro];
            if (value!==undefined)
            {
                return true;
            }        
        return false;
    }
    getSimbolo(num_registro:number):any{
        
        
            if (this.registros[num_registro]!==undefined)
            {
                return this.registros[num_registro];
            }        
        return null;
    }

    reemplazar(num_registro:number, nuevoValor:Error){                
            const value = this.registros[num_registro];
            if (value!==undefined)
            {
                this.registros[num_registro] = nuevoValor;
            }        
    }

}