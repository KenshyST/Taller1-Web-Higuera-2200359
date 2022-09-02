import { useState } from "react";
import './estilosCSS/punto2.css';
import 'bootstrap/dist/css/bootstrap.css'

const Punto2 = () => {
    var tarifa = 100
    const calcularTarifa = (segundos) => {
        let i = 0
        let minutos = segundos / 60
        Math.round(minutos)
        if (minutos <= 3){
            tarifa = 100;
        } else{
            let minutosAdicionales = minutos - 3
            while(i < minutosAdicionales){
            tarifa += 50
            i += 1
            }
    
        }

        return (tarifa)
        }

    const [tiempoensegundos, setTiempo] = useState(0);
    const [valorPagar, setValorPagar] = useState(20)


    const obtenerSegundos = (evt) => {
        setTiempo(evt.target.value)
        

    }

    const calcularTiempo = () => {
        setValorPagar(calcularTarifa(tiempoensegundos))
        setTiempo(0)
    }
   
    return (
    <>
    <div className="col-sm-5">
    <div>
    <h1 className="h1punto2">Calculador de Tarifa Movil</h1>
    <input type="number" className="form-control" value={tiempoensegundos} onChange={(event) => obtenerSegundos(event) }/>
    <button className="btn btn-info" onClick={() => calcularTiempo(tiempoensegundos)}>Calcular</button>
    <p className="ppunto2"> El costo de la llamada son de: {valorPagar} pesos mi rey</p>
    </div>
    </div>
    </>
    )

    }

    

export default Punto2;