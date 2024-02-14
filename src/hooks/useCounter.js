import { useState } from "react"

export const useCounter = (initialValue=1) =>{

    const [counter, setcounter] = useState(initialValue);

    // const agregar=(value=1)=>{
    //     setcounter(counter+value);
    // }

    const agregar=()=>{
        setcounter(counter+1);
        
    }
    const resetear=()=>{
        setcounter(initialValue);
    }
    const eliminar=()=>{
        if (counter > 1){
        setcounter(counter-1);
        }
    }

    return{
        counter,
        agregar,
        resetear,
        eliminar
    }
}