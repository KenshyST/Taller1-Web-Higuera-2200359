import { useState } from "react";
import './estilosCSS/punto3.css';
import 'bootstrap/dist/css/bootstrap.css'

const Punto3 = () => {
    var Mensaje = ""
    const calcularHora = (hora) => {
        let mensaje;
        let verdaderaHora = Math.abs(hora)
        verdaderaHora = Math.round(verdaderaHora)
        
        if (verdaderaHora < 12 || verdaderaHora == 0 || verdaderaHora == 24){
            mensaje = "Buenas Dias"
        } else if ((12 < verdaderaHora) && (verdaderaHora < 18) || (verdaderaHora == 12)){
            mensaje = "Buenas Tardes"
        } else if ((18 < verdaderaHora) && (verdaderaHora <= 23)){
            mensaje = "Buenas Noches"
        } else{
            mensaje = "El valor ingresado puede no ser en formato 24 horas"
        }
        return (mensaje)
        }

    const [horas, setTiempo] = useState(0);
    const [mensajeCaballeroso, setMensaje] = useState("Por favor, ingresar la hora en formato de 24 horas")
    const [nombre, setNombre] = useState("Dolores Delano Gomez")


    const obtenerSegundos = (evt) => {
        setTiempo(evt.target.value)
    }
    const obtenernombre = (evt) => {
        setNombre(evt.target.value)
    }

    const calcularTiempo = () => {
        setMensaje(calcularHora(horas))
        setTiempo(0)
    }
   
    return (
    <>
    <div className="contenedorPunto3">
    <h1 className="h1punto3">Saludos dependiendo de la hora UwU</h1>
    <div className="form-group">
    <p for="usr" className="ppunto3">Digita tu nombre</p>
    <input type="text" className="form-control" id="usr" value={nombre} onChange={(event) => obtenernombre(event) }/>
    </div>
    <br/>
    <div className="form-group">
    <p for="usr" className="ppunto3">Digita la hora</p>
    <input className="form-control" id="usr" type="number" value={horas} onChange={(event) => obtenerSegundos(event) }/> 
    <br/>
    <button onClick={() => calcularTiempo(horas)} className="btn-2">Realizar Saludo</button>
    <br/>
    <br/>
    <p className="ppunto3"> {mensajeCaballeroso} {nombre}</p>
    </div>
    </div>
    </>
    )

    }

    

export default Punto3;