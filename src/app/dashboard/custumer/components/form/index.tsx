"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatorio"),
  email: z.email("Digite um email valido").min(1, "O email é obrigatório."),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{9}$/.test(value)
      );
    },
    {
      message: "O numero de telefone deve estar (DD) 999999999",
    }
  ),
  address: z.string(),
});

type FormData = z.infer<typeof schema>;

export function NewCustumerForm({ userId }: { userId: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  async function handleRegisterCustumer(data: FormData) {
    await api.post("/api/custumer", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      userId: userId,
      address: data.address,
    });

    router.refresh()
    router.replace("/dashboard/custumer");
  }

  return (
    <form
      className="flex flex-col mt-6"
      onSubmit={handleSubmit(handleRegisterCustumer)}
    >
      <label className="mb-1 text-lg font-bold">Nome completo</label>
      <Input
        type="text"
        name="name"
        placeholder="Digite o nome completo..."
        error={errors.name?.message}
        register={register}
      />
      <section className="flex flex-col sm:flex-row gap-4 my-2">
        <div className="flex-1">
          <label className="mb-1 text-lg font-bold">Telefone</label>
          <Input
            type="text"
            name="phone"
            placeholder="Exemplo: (DD) 913223232"
            error={errors.phone?.message}
            register={register}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 text-lg font-bold">Email</label>
          <Input
            type="text"
            name="email"
            placeholder="Digite o email..."
            error={errors.email?.message}
            register={register}
          />
        </div>
      </section>
      <label className="mb-1 text-lg font-bold">Endereço</label>
      <Input
        type="text"
        name="address"
        placeholder="Digite o endereço do cliente..."
        error={errors.address?.message}
        register={register}
      />
      <button
        type="submit"
        className="bg-blue-500 my-4 px-2 h-11 text-white font-bold rounded "
      >
        Cadastrar
      </button>
    </form>
  );
}
