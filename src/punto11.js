import { useState } from "react";
import './estilosCSS/punto11.css';
import './estilosCSS/punto4.css';
import 'bootstrap/dist/css/bootstrap.css'

const Punto11 = () => {
    const PailaCalculadora = (a,b,c) => {
        let not1 = +a
        let not2 = +b
        let not3 = +c
        if(a < 0 || b < 0 || c < 0){
            alert("Las notas no pueden ser negativas")
        } else{
            var mensaje;
            var suma = (not1 + not2 + not3)
            console.log(suma)
            var promedio = (suma / 3)
            console.log(promedio)
        
            if (promedio >= 3){
                mensaje = "Gano la Materia"
            } else{
                mensaje = "Perdona mi rey, perdiste la Materia"
            }
            return (mensaje)

        }
        
        }

    const EstudiantetoString = (estudiante) => {
        return "Nombre:" + estudiante.nombre + "- Nota1: " + estudiante.Nota1 + "- Nota2: " + estudiante.Nota2 + "- Nota3: " + estudiante.Nota3 + "- Estado: " + estudiante.estado;
    }


    const [nombre, setNombre] = useState("Dario Gomez");
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [estadoFinal, setMensaje] = useState("Aqui mostrara el estudiante")
    const [estudianteFinal,setEstudiante] = useState()


    const obtenerNombre = (evt) => {
        setNombre(evt.target.value)
    }
    const obtenerValor1 = (evt) => {
        setNota1(evt.target.value)
    }
    const obtenerValor2 = (evt) => {
        setNota2(evt.target.value)
    }
    const obtenerValor3 = (evt) => {
        setNota3(evt.target.value)
    }

    const crearEstudiante = (nombre,a,b,c) => {
        const estudiante = {
            nombre: nombre,
            Nota1: a,
            Nota2: b,
            Nota3: c,
            estado: "Ya valio",
        }
        estudiante.estado = PailaCalculadora(nota1,nota2,nota3)
        setEstudiante(estudiante)
        alert("Se creo el estudiante mi rey")
    }

    const mostrarEstudiante = (estudiante) => {
        setMensaje(EstudiantetoString(estudiante))
    }
   
    return (
    <>
    <div className="col-sm-5" id="espaciopunto11">
    
    <h1 className="h1punto4">Estudiantes</h1>
    <p className="ppunto4">Digita el nombre</p>
    <input type="text" value={nombre} onChange={(event) => obtenerNombre(event) }/>
    <p className="ppunto4">Primera Nota</p>
    <input type="number" step="0.01" value={nota1} onChange={(event) => obtenerValor1(event) }/>
    <p className="ppunto4">Segunda Nota <button id="botonpunto11" className="btn btn-primary btn-block" onClick={() => crearEstudiante(nombre,nota1,nota2,nota3)}>Crear Estudiante</button>
    <button id="botonpunto11_2" className="btn btn-primary btn-block" onClick={() => mostrarEstudiante(estudianteFinal)}>Mostrar Estudiante</button></p> 
    <input type="number" step="0.01" value={nota2} onChange={(event) => obtenerValor2(event) }/>
    <p className="ppunto4">Tercera Nota</p>
    <input type="number" step="0.01" value={nota3} onChange={(event) => obtenerValor3(event) }/>
    
    <p className="ppunto4">{estadoFinal}</p>
    
    </div>
    </>
    )

    }

    

export default Punto11;