import { useState } from "react";
import './estilosCSS/punto4.css';
import 'bootstrap/dist/css/bootstrap.css'

const Punto4 = () => {
    var Mensaje = ""
    const identificarRepetidos = (a,b,c) => {
        let mensaje;
        if ((a == b) && (a == c)){
            mensaje = "Los tres numeros estan repetidos"
        } else if ((a == b) && (a != c) || (a == c) && (a != b) || (b == c) && (b != a)){
            mensaje = "Son dos numeros repetidos en total"
        } else{
            mensaje = "Ningun numero de los tres esta repetido mi rey"
        }
        return (mensaje)
        }

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(1);
    const [valor3, setValor3] = useState(2);
    const [mensajeCantidadRepetidos, setMensaje] = useState("Ingresa 3 numeros cualesquiera, el sistema detectara cuantos hay repetidos")

    const obtenerValor1 = (evt) => {
        setValor1(evt.target.value)
    }
    const obtenerValor2 = (evt) => {
        setValor2(evt.target.value)
    }
    const obtenerValor3 = (evt) => {
        setValor3(evt.target.value)
    }

    const calcularRepetidos = (a,b,c) => {
        setMensaje(identificarRepetidos(a,b,c))
        setValor1()
        setValor2()
        setValor3()
    }
   
    return (
    <>
    <div className="col-sm-5" id="espaciado4">
    <br/>
    <h1 className="h1punto4">Contador de repetidos</h1>
    <br/>
    <p className="ppunto4">Primer valor</p>
    <input type="number" value={valor1} onChange={(event) => obtenerValor1(event) }/>
    <br/>
    <p className="ppunto4">Segundo valor</p>
    <input type="number" value={valor2} onChange={(event) => obtenerValor2(event) }/> <button className="btn btn-primary btn-block" id="botoncito" onClick={() => calcularRepetidos(valor1,valor2,valor3)}>Analizar Repetidos</button>
    <br/>
    <p className="ppunto4">Tercer Valor</p> 
    <input type="number" value={valor3} onChange={(event) => obtenerValor3(event) }/>
    <br/>
    <br/>
    <p className="ppunto4"> {mensajeCantidadRepetidos}</p>
    
    </div>
    </>
    )

    }

    

export default Punto4;