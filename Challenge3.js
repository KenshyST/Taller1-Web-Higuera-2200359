import { useState } from "react";

export const Challenge3Hooks = () => {
    const [Listacategorias, SetListaCategoria] = useState(['Primera'])
    const [categoria, SetCategoria] = useState('')

    const añadirNuevaCategoria = () => {
        SetListaCategoria( list => [...list, categoria])
        SetCategoria('')
    }

    const obtenerCategoria = (evt) => {
        SetCategoria (evt.target.value)
    }

    return(
        <>
        <h1>Challenge 3</h1>
        <h2>Lista de categorias y añadirlas</h2>
        <input type='text' value={categoria} onChange={(event) => obtenerCategoria(event)}/>
        <button onClick={() => añadirNuevaCategoria()}>Añadir Nueva Categoria</button>

        <ol>
            {
                Listacategorias.map(
                    (categoria, key) => 
                    {
                        return <li key={key}> {categoria} </li>
                    }
                )
            }
        </ol>
        </>
    )
        }
