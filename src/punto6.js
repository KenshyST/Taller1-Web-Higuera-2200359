import { useState } from "react";
import './estilosCSS/punto5.css';
import 'bootstrap/dist/css/bootstrap.css'

const Punto6 = () => {
    var arregloprincipal = new Array()
    var arregloImpar = new Array()

    const llenarArreglo = (a) => {
        for(let i=0; i <= a; i++){
            arregloprincipal[i] = i
        
        }
        return(arregloprincipal)
    }

    const identificarImpares = () => {   
        for(let j=0; j <= arregloprincipal.length - 1; j++){
            if(arregloprincipal[j] % 2 != 0){
                arregloImpar[j] = j
            }
        }
        return (arregloImpar)
        }
    

    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState("En esta linea veras la succesión numerica completa")
    const [todosLosimpares, setArregloimpares] = useState("En esta linea veras la succesión numerica de impares")

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = (a) => {
        setArregloCompleto(llenarArreglo(a))
        setArregloimpares(identificarImpares())
        
    }
   
   
    return(
    <>
    <div className="col-sm-7">
    <h1 className="h1punto5">Obtener lista de impares</h1>
    <p className="ppunto5">Hasta que valor quieres que llegue el arreglo:</p>
    <input type="number" value={valor} onChange={(event) => obtenerValor(event) }/>
    <button onClick={() => Arreglo(valor)} className="btn btn-primary btn-block" id="botoncito">Mostrar Impares</button>
    <p className="ppunto5"> {arregloCompleto.toString()}</p>
    <p className="ppunto5"> {todosLosimpares.toString()} </p>
    
    </div>
    </>
    
    )
    }

    
export default Punto6;