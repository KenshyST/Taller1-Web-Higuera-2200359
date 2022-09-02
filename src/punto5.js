import { useState } from "react";
import './estilosCSS/punto5.css';
import 'bootstrap/dist/css/bootstrap.css'

const Punto5 = () => {

    const [valor, setValor] = useState(0);
    const [ArrayNumerosDesordenado, setArrayDesornado] = useState([])
    const [ArrayNumerosOrdenados, setArrayOrdenado] = useState([])

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = (a) => {
        setArrayDesornado(ArrayNumerosDesordenado.concat(a))
    }

    const ordenarArreglo = () =>{
        if(ArrayNumerosDesordenado.length < 1){
            alert("No existe una lista que ordenar")
        } else{
            setArrayOrdenado(ArrayNumerosDesordenado.sort())
        }
        
    }

   
    return(
    <>
    <div className="col-sm-7">
    <h1 className="h1punto5">Programa para registrar y ordenar numeritos</h1>
    <p className="ppunto5">Ingresa un numero:</p>
    <input type="number" value={valor} onChange={(event) => obtenerValor(event) }/>
    <button onClick={() => Arreglo(valor)} className="btn btn-primary btn-block" id="botoncito2">Añadir Numero</button > <button  className="btn btn-primary btn-block" id="botoncito3" onClick={() => ordenarArreglo() } >Ordenar Lista</button>
    <br />
    
    <p className="ppunto5"> Lista de numeros Desordenados: {ArrayNumerosDesordenado.toString()}  </p> 
    
    <p className="ppunto5"> Lista de numeros Ordenados de menor a mayor OwO: {ArrayNumerosOrdenados.toString()} </p>
    
    </div>
    </>
    
    )

}
export default Punto5;