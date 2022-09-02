import { useState } from "react";
import './estilosCSS/punto9.css';
import './estilosCSS/punto3.css';
import 'bootstrap/dist/css/bootstrap.css'


const Punto9 = () => {

   

    const LlenarTabla = (cantidadFilas, cantidadColumnas) => {
        var Table = document.getElementById("tblDatos");
        Table.innerHTML = "";
        if(cantidadFilas < 0|| cantidadColumnas < 0){
            alert("La cantidad de filas y columnas no debe ser negativo")
        } else{
        if (filas > 0 || columnas > 0){
           for(let i = 0; i < cantidadFilas; i++) {
            let filaActual = document.getElementById('tblDatos').insertRow(i);
            for(let j = 0; j < cantidadColumnas; j++){
                let celda = filaActual.insertCell(j);

                celda.innerHTML = `Fila: ${i} - Columna: ${j}`;
            }

           }
        }
           

        }
        
        
    }
        
    const [filas, setFilas] = useState(0);
    const [columnas, setColumnas] = useState(0);
    
    /*
        let arregloSoporte = arregloprincipal 
        let puestoSeleccionado = a - 1
        if(a <= 10){
            let numero = arregloSoporte[puestoSeleccionado]   
            for(let j=0; j <= arreglo.length - 1; j++){
                arregloDividido[j] = (arregloprincipal[j] / numero) 
            }
            return (arregloDividido)
            }else{
                alert("El numero que digito debe ser un numero entre 1 y 10")

            }
        }
        */
   
    const obtenerFilas = (evt) => {
        setFilas(evt.target.value)
    }
    const obtenerColumnas = (evt) => {
        setColumnas(evt.target.value)
    }
   
    return(
    <>
    <div className="contenedorPunto9">
    <h1 className="h1punto3">Creador de Tablas HTML</h1>
    <p for="usr" className="ppunto3">Digita la cantidad de filas:</p>
    <input className="form-control" id="usr" type="number" value={filas} onChange={(event) => obtenerFilas(event) }/>
    <br/>
    <p for="usr" className="ppunto3">Digita la cantidad de Columnas:</p>
    <input className="form-control" id="usr" type="number" value={columnas} onChange={(event) => obtenerColumnas(event) }/>
    <br/>
    <button onClick={() => LlenarTabla(filas,columnas)} className="btn btn-primary">Crear Tabla</button>
    <br/>
    <div className="container">
    <br/> 
    <table id="tblDatos" className="table table-condensed" border={1}>
    </table>
    </div>
    
    </div>
    </>
    
    )
    
}

    
export default Punto9;