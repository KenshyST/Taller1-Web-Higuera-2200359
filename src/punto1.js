import { useState } from "react";
import './estilosCSS/punto1.css';
import 'bootstrap/dist/css/bootstrap.css'

const Punto1 = () => {
    var horas = 0
    var minutos = 0
    const calcularSegundos = (segundos) => {
        let residuoSegundos
        horas = segundos / (60 * 60)
        Math.round(horas);
        residuoSegundos = segundos % (60 * 60)
    
        minutos = residuoSegundos / 60
        Math.round(minutos)
        
    
        residuoSegundos = residuoSegundos % (60)
        Math.round(residuoSegundos)
    
        setMensajeHora('El tiempo corresponde a: '+  Math.round(horas) + ' Horas ' + ',' 
        + Math.round(minutos) + ' Minutos ' + ', ' + Math.round(residuoSegundos) + ' segundos ')
    
    }
        
    const [tiempoensegundos, setTiempo] = useState(18000);
    const [mensaje, setMensajeHora] = useState("0 horas, 0 minutos, 0 segundos Mi rey" )

    const obtenerSegundos = (evt) => {
        setTiempo(evt.target.value)    
    }

    const calcularTiempo = () => {
        calcularSegundos(tiempoensegundos)
    }
   
    return (
    <>
    <div className="page-header" >
        <div className="well well-lg">
    <h1 className="h1punto1"> -------- Stiven Higuera Abadia 2200359 Taller 1 --------</h1>
    </div>
        </div>
        <div className="col-sm-7">
    <div className="contenedorPunto1" >
    
    <h1 className="h1punto1">Calculador de Tiempo en Segundos</h1> <span class="glyphicon glyphicon-time"></span>
        <div className="container">
        <input className="form-control" type="number" value={tiempoensegundos} onChange={(event) => obtenerSegundos(event) }/>
        <button onClick={() => calcularTiempo(tiempoensegundos)} className="btn btn-primary btn-block">Calcular</button>
        <p className="ppunto1">{mensaje}</p>
        </div>
        </div>
    
    </div>
    </>
    )

    }


export default Punto1;