export function InputButton ({setNotaAvaliacao, value}){
    function handleMudarNotaAvaliacao(nota){
        setNotaAvaliacao(nota)
       //A variavél "nota" recebe o valor da nota do onclick e armazena isto na variável nota
      
      }
    return (
        <input type="button" value={value} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer"  onClick={() => handleMudarNotaAvaliacao(value)}/>
    )
}