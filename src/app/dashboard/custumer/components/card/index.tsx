import { CustumerPrps } from "@/utils/custumer.type"

export function CardCustumer({custumer}: {custumer: CustumerPrps}){
    return(
      <article className="flex flex-col gap-2 p-2 bg-gray-100 border-1 border-gray-300 rounded-lg hover:scale-102 duration-300">
        <h2>
           <a className="font-bold ">Nome: </a>{custumer.name}
        </h2>
        <p><a className="font-bold">Email: </a>{custumer.email}</p>
        <p><a className="font-bold">Telefone: </a>{custumer.phone}</p>
        <button className="bg-red-500 px-4 rounded text-white mt-2 self-start mb-1 ">
            Deletar
        </button>
      </article>  
    )
}