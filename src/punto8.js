import { useState } from "react";
import './estilosCSS/punto3.css';
import 'bootstrap/dist/css/bootstrap.css'

const Punto8 = () => {
    var arregloprincipal = new Array()
    var arregloDividido = new Array()
    var numero;

    const LlenarArreglo = () => {
        for(let i=0; i <= 10; i++){
            arregloprincipal[i] = Math.floor(Math.random()*100)
        }
        return(arregloprincipal)
    }

    const DividirPorValor = (a) => {
        if(a <= 10 && a> -1) {
            numero = arregloprincipal[a]
            for(let j=0; j < arregloprincipal.length; j++){
                arregloDividido[j] = (arregloprincipal[j] / numero).toFixed(4)
            }
            return (arregloDividido)
        } else {
            alert("El valor Digitado debe ser un valor entre 0 y 9")
            setDivision("El valor Digitado debe ser un valor entre 0 y 9")
            return("El valor Digitado debe ser un valor entre 0 y 9")

        }

        

    }
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
        
    

    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState("En esta linea veras la lista aleatoria")
    const [arrayOperado, setDivision] = useState("En esta linea veras la lista operada")

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = () => {
        setArregloCompleto(LlenarArreglo())
        setDivision(DividirPorValor(valor))
       
    }

   
   
    return(
    <>
    <div className="contenedorPunto3">
        <div className="form-group">
    <h1 className="h1punto3">Lista aleatorio y dividir cada elemento</h1>
    <br/>
    <p for="usr" className="ppunto3">Digita la posición del valor en la lista:</p>
    <input className="form-control" id="usr" type="number" value={valor} onChange={(event) => obtenerValor(event) }/>
    <br/>
    <button onClick={() => Arreglo(valor)} className="btn-2">Generar Lista aleatoria y divida</button>
    <br/>
    <p className="ppunto3"> Lista de numeros aleatorios: {arregloCompleto.toString()}</p>
    <p className="ppunto3" for="usr"> Divididos por el puesto {valor}: {arrayOperado.toString()} </p>
    
        </div>
    </div>
    </>
    
    )
    
}

    
export default Punto8;