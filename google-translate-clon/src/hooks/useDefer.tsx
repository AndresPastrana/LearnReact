import { useEffect, useState } from "react"


export const useDefer = (value:any, delay :number) => {
    
  const [deferValue, setDeferValue] = useState(value)
  
useEffect(() => {
 let idtimer: NodeJS.Timeout;
 idtimer = setTimeout(()=>setDeferValue(value),delay)
  return () =>  clearTimeout(idtimer)

}, [value])

         

    return deferValue
}

