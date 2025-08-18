"use client";

import { useState } from "react";
import { Input } from "@/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiSearch, FiX} from "react-icons/fi";
import { FormTicket } from "./components/formTicket";

const schema = z.object({
  email: z
    .email("Digite o email do cliente para localizar.")
    .min(1, "O email é obrigatório."),
});

type FormData = z.infer<typeof schema>;

interface CustumerDataInfo {
  id: string;
  name: string;
}

export default function openTickt() {
  const [custumer, setCustumer] = useState<CustumerDataInfo | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function handleClearCustumer(){
    setCustumer(null)
    setValue("email", "")
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-2 ">
      <h1 className="font-bold text-3xl text-center mt-24">Abrir chamado</h1>

      <main className="flex flex-col mt-4 mb-2">
        {custumer ? (
          <div className="bg-slate-100 py-6 px-4 rounded border-2 border-slate-300 flex items-center justify-between">
            <p className="text-lg"><strong>Cliente selecionado: </strong>{custumer.name}</p>
            <button onClick={handleClearCustumer} className="h-11 px-2 flex items-center justify-center">
              <FiX size={30} color="#ff2929"/> 
            </button>
          </div>
        ) : (
          <form className="bg-slate-100 py-6 px-2 rounded border-2 border-slate-300">
            <div className="flex flex-col gap-3">
              <Input
                name="email"
                placeholder="Digite o email do cliente..."
                type="text"
                error={errors.email?.message}
                register={register}
              />
              <button className="bg-blue-500 font-bold text-white flex flex-row gap-3 px-2 h-11 items-center justify-center rounded">
                Procurar cliente
                <FiSearch size={24} color="#FFF" />
              </button>
            </div>
          </form>
        )}

        {custumer !== null && <FormTicket />}
        
      </main>
    </div>
  );
}
