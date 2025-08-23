"use client"

import { Input } from "@/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/lib/api";
import { CustumerDataInfo } from "../../page"
import toast from "react-hot-toast"

const schema = z.object({
   name: z.string().min(1, "O nome do chamado é obrigatório"),
   description: z.string().min(1, "É obrigatório descrever o problema...")
})

type FormData = z.infer<typeof schema>

interface FormTicketProps{
  custumer: CustumerDataInfo
}

export function FormTicket({custumer}: FormTicketProps) {
  const {register, handleSubmit, setValue, formState: {errors}} = useForm({
    resolver: zodResolver(schema)
  })

  async function handleRegisterTicket(data: FormData){
    await api.post("/api/ticket", {
      name: data.name,
      description: data.description,
      custumerId: custumer.id
    })

    toast.success("cliente cadstrado com sucesso!")
    setValue("name", "");
    setValue("description", "")
  }
    

  return (
    <form className="bg-slate-100 py-6 px-2 rounded border-2 border-slate-300 my-1" onSubmit={ handleSubmit(handleRegisterTicket)}>
      <label className="font-medium text-lg">Nome do chamado</label>
      <Input 
        register={register}
        type="text"
        placeholder="Digite o nome do chamado..."
        name="name"
        error={errors.name?.message}
      /> 
      <label className="font-medium text-lg">Descreva o problema</label>
      <textarea
        className="w-full border-2 border-slate-400 rounded-md h-28 px-2 resize-none"
        placeholder="Descreva o seu problema..."
        id="description"
        {...register("description")}
      >
      </textarea>
      {errors.description?.message && <p className="text-red-500 my-1">{errors.description?.message}</p>}
      <button 
        type="submit"
        className="bg-blue-500 rounded-md w-full h-11 mb-1 mt-4 text-white font-bold px-2"
      >
        Cadastrar
      </button>
    </form>
  );
}
