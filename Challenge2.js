import { useState } from "react"

export const ContadorChallenge2 = ({valor}) => {

    const valor = 1

    const [contador, setContador] = useState(valor);

    const incremento = () => {
        setContador(contador + 1)
    } 

    const sustratoDePotasio = () => {
        setContador(contador - 1)
    }

    const resetearValorInicial = () => {
        setContador(valor)
    }

    return(
        <>
        <h1> --- CHALLENGE 2! --- </h1>
        <h1> Contador: <span>{contador}</span> </h1> 
        <button onClick={ () => incremento() }> Incrementa el contador por +1 </button>
        <button onClick={ () => sustratoDePotasio()}> Restale el contador por -1</button>
        <button onClick={ () => resetearValorInicial()}> Resetear a valor predeterminado</button>

        
        </>
    )


}