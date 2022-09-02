import { useState } from "react";
import './estilosCSS/punto3.css';
import 'bootstrap/dist/css/bootstrap.css'
import './estilosCSS/punto7.css';

const Punto7 = () => {
    var Salarios = []
    var SalariosAumento = []

    const ajusteSalarios = (Salarios) => {
        for(let j=0; j <= Salarios.length - 1; j++){
            let valor = Salarios[j]
            let ajuste8 = valor * (8/100) 
            SalariosAumento[j] = (+valor) + (+ajuste8)
            }
        return (SalariosAumento)
    }
    
    const [valor, setValor] = useState(0);
    const [ArraySalarios, setArregloCompleto] = useState(Salarios)
    const [salariosAumento, setSalariosAumento] = useState("En esta linea veras los salarios con aumento del 8%")

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = (a) => {
        if(ArraySalarios.length >= 10){
            alert("El arreglo solo acepta 10 valores maximo")
        } else {
            if(a == 0 || a < 0){
                alert("No puedes ingresar datos negativos")
            }else{
                setArregloCompleto(ArraySalarios.concat(a))
            }
        
        }
    }

    const EliminarArreglo = (a) =>{
        Salarios = []
        setArregloCompleto(Salarios)
        setSalariosAumento(Salarios)
    }

    const ArregloSalarios = (a) => {   
        if(ArraySalarios.length != 10){
            alert("Para realizar el ajuste debes registrar 10 salarios")
        } else{
            setSalariosAumento(ajusteSalarios(a))
        }
        
    }
   
    return(
    <>
    <div className="contenedorPunto3">
    <div className="form-group">
    <h1 className="h1punto3">Programa para registrar y ajustar salarios</h1>
    <p for="usr2" className="ppunto3">Ingresa un salario:</p>
    <input className="form-control" id="usr2" type="number" value={valor} onChange={(event) => obtenerValor(event) }/>
    <button className="btn btn-primary btn-block" id="botonArreglo1" onClick={() => Arreglo(valor)}>Añadir Salario</button> 
    <button className="btn btn-primary btn-block" id="botonArreglo1"onClick={() => EliminarArreglo(Salarios)}>Vaciar Arreglo</button>
    <p for="usr" className="ppunto3"> Lista de Salarios: {ArraySalarios.toString()}</p>
    <button className="btn btn-primary btn-block" onClick={() => ArregloSalarios(ArraySalarios)}>Realizar Ajuste de 8%</button>
    <p for="usr" className="ppunto3"> Lista de Salarios con ajuste de 8% más: {salariosAumento.toString()} </p>
    
    </div>
    </div>
    </>
    
    )
    }

    export default Punto7;