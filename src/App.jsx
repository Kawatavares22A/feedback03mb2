
import { useState } from "react"
import { CardInicial } from "./components/Cardinicial"
import { CardFinal } from "./components/CardFinal"
 
export function App(){
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleMudarNotaAvaliacao(nota){
    setNotaAvaliacao(nota)
   
  
  }
  
  function handleSubmit(){
    notaAvaliacao !== 0 ?  (setSubmited(true)) : (setSubmited(false), alert("Please, chose a note!")) 
  
  }

   return(
    submited === false ? (
      <CardInicial handleMudarNotaAvaliacao={handleMudarNotaAvaliacao} handleSubmit={handleSubmit}/>
        ) :  (
          <CardFinal notaAvaliacao={notaAvaliacao}/>
 
      )
   )

 }