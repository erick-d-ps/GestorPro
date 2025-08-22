"use client"

import { CustumerProps } from "@/utils/custumer.type"
import { api } from "@/lib/api"
import { useRouter } from "next/navigation"

export function CardCustumer({custumer}: {custumer: CustumerProps}){
  const router = useRouter();

  async function handleDeletCustumer(){
    try{
      const response = await api.delete("/api/custumer", {
        params:
        {
          id: custumer.id
        }
      })
      router.refresh();
      console.log(response.data)
    }catch(err: any){
      if(err.response && err.response.data && err.response.data.error){
        console.log(err.response.data.error)
      }else{
        console.log("Erro ao deletar o cliente:", err)
        alert("Ocorreu um erro ao tentar deletar.")
      }
       
    }
  } 

    return(
      <article className="flex flex-col gap-2 p-2 bg-gray-100 border-1 border-gray-300 rounded-lg hover:scale-102 duration-300">
        <h2>
           <a className="font-bold ">Nome: </a>{custumer.name}
        </h2>
        <p><a className="font-bold">Email: </a>{custumer.email}</p>
        <p><a className="font-bold">Telefone: </a>{custumer.phone}</p>
        <button 
        className="bg-red-500 px-4 rounded text-white mt-2 self-start mb-1 "
        onClick={handleDeletCustumer}
        >
            Deletar
        </button>
      </article>  
    )
}