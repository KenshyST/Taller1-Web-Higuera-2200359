import { useState } from "react";
import './estilosCSS/punto5.css';
import './estilosCSS/punto12.css';
import 'bootstrap/dist/css/bootstrap.css'


const Punto12 = () => {
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

    const [nombre, setNombre] = useState("Dario Gomez");
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [Estudiante,setEstudiante] = useState()
    const [listaEstudiantes,setListaEstudiante] = useState([])


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
        setListaEstudiante(listaEstudiantes.concat(estudiante))
    }

    const mostrarObjeto = (objstudiante) => {
        let mensaje;
        mensaje = objstudiante.nombre + ", Nota 1: " + objstudiante.Nota1 + ", Nota 2: " + objstudiante.Nota2 + ", Nota 3: " + objstudiante.Nota3 + ", Estado: " + objstudiante.estado 
        return(mensaje)
    }
   
    return (
    <>
    <div className="col-sm-7" id="EspacioPunto12">
    <div>
    <h1 className="h1punto5">Estudiantes Pero metidos en listas :D</h1>
    <p className="ppunto5">Digita el nombre</p>
    <input type="text" value={nombre} onChange={(event) => obtenerNombre(event) }/>
    <p className="ppunto5">Primera Nota</p>
    <input type="number" step="0.01" value={nota1} onChange={(event) => obtenerValor1(event) }/>
    <p className="ppunto5">Segunda Nota</p> 
    <input type="number" step="0.01" value={nota2} onChange={(event) => obtenerValor2(event) }/>
    <p className="ppunto5">Tercera Nota</p>
    <input type="number" step="0.01" value={nota3} onChange={(event) => obtenerValor3(event) }/>
    <button onClick={() => crearEstudiante(nombre,nota1,nota2,nota3)}>Añadir Estudiante</button>
    <div className="container">
    <div className="espacioLista">
    <ol>
    
        {
            listaEstudiantes.map(
                (Estudiante, key) =>
                {
                    
                    return (
                    <li  key={key}>{mostrarObjeto(listaEstudiantes[key])}</li>
                    )
                }
            )
        }
    </ol>
    </div>
    </div>
    </div>
    </div>
    </>
    )

    }



    

export default Punto12;