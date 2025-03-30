import iconStar from "./assets/icon-star.svg"
import { useState } from "react"
import illustrationThankYou from "./assets/illustration-thank-you.svg"
 
export function App(){
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleMudarNotaVavaliacao(nota){
    setNotaAvaliacao(nota)
   
  
  }
  
  function handleSubmit(){
    notaAvaliacao !== 0 ?  (setSubmited(true)) : (setSubmited(false), alert("Please, chose a note!")) 
  
  }

   return(
    submited === false ? (
      <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass" >
      <div className="bg-dark-blue w-fit p-4 rounded-full mb-4 font-overpass"  >
        <img src={iconStar} alt="Icon_Star" />
      </div>

        <h1 className="text-2xl font-bold mb-2.5 "> How did we do? </h1>
 
        <p className="text-medium-grey text-sm mb-6 leading-1">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
 
        <div className="flex justify-between mb-6" >
        <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white  " onClick={() => handleMudarNotaVavaliacao(1)}   /> 
           
           <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white "  onClick={() => handleMudarNotaVavaliacao(2)}/>
 
           <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white "  onClick={() => handleMudarNotaVavaliacao(3)}/>
 
           <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white "  onClick={() => handleMudarNotaVavaliacao(4)}/>
 
           <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white "  onClick={() => handleMudarNotaVavaliacao(5)}/>
         </div>
 
         <button className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3" onClick={handleSubmit}>Submit</button>
         
         </div>
        ) :  (
          <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass" >
          <img className="mx-auto mb-6" src={illustrationThankYou} alt="ThankYou" />
  
          <p className="text-center  text-orange bg-dark-blue 
           px-3 py-1.25 rounded-3xl mb-6 ">You selected {notaAvaliacao} out of 5</p>
          <h1 className="text-2xl font-bold mb-2.5 text-center "> Thank you! </h1>
          <p  className="text-medium-grey text-sm mb-6 leading-1 text-center " >We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
         </div>
 
      )
   )

 }