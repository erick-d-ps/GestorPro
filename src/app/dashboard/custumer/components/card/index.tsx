
export function CardCustumer(){
    return(
      <article className="flex flex-col gap-2 p-2 bg-gray-100 border-1 border-gray-300 rounded-lg hover:scale-102 duration-300">
        <h2>
           <a className="font-bold ">Nome: </a>mercado costa
        </h2>
        <p><a className="font-bold">Email: </a>modelo@modelo.com</p>
        <p><a className="font-bold">Telefone: </a>999999999999</p>
        <button className="bg-red-500 px-4 rounded text-white mt-2 self-start mb-1 ">
            Deletar
        </button>
      </article>  
    )
}