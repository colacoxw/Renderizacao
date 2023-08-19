import { useEffect, useState } from "react"

export default function Estatico1(){
    const [num, setNum] = useState()
    
    //Se não utilizar o useState() e o useEffect, neste caso iria ocorrer um erro no browser 
    useEffect(() => {
        setNum(Math.random())
    }, [])
    
    return (
        <div>
            <h1>Estatico #01</h1>
            <h2>{num}</h2>
        </div>
    )
}