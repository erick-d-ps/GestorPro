import { Container } from "@/components/container";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prismaClient from "@/lib/prisma";
import { FormButton } from "../components/formButton";
import { Suspense } from "react";

export default async function NeWTicket() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const custumers = await prismaClient.custumer.findMany({
    where: {
      userId: session.user.id,
    },
  });

  async function handleRegisteTicket(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const description = formData.get("description");
    const custumerId = formData.get("custumer");

    if (!name || !description || !custumerId) {
      return;
    }

    await prismaClient.ticket.create({
      data: {
        name: name as string,
        description: description as string,
        custumerId: custumerId as string,
        status: "ABERTO",
        userid: session?.user.id,
      },
    });
    redirect("/dashboard");
  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            className="bg-gray-900 px-4 py-1 text-white rounded "
            href="/dashboard"
          >
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo chamdo</h1>
        </div>

        <form className="flex flex-col mt-6" action={handleRegisteTicket}>
          <label className="mb-1 font-medium text-lg">Nome do chamado</label>
          <input
            className="w-full border-2 border-gray-400 rounded-md px-2 mb-2 h-11"
            type="text"
            placeholder="Digite o nome do chamado..."
            required
            name="name"
          />

          <label className="mb-1 font-medium text-lg">
            Descreva o problema
          </label>
          <textarea
            className="w-full border-2 border-gray-400 rounded-md px-2 mb-2 h-24 resize-none"
            placeholder="Descreva o problema..."
            required
            name="description"
          ></textarea>

          {custumers.length !== 0 && (
            <>
              <label className="mb-1 font-medium text-lg">
                Selecione o cliente
              </label>
              <select
                className="w-full border-2 border-gray-400 rounded-md px-2 mb-2 h-11"
                name="custumer"
              >
                {custumers.map((custumer) => (
                  <option key={custumer.id} value={custumer.id}>
                    {custumer.name}
                  </option>
                ))}
              </select>
            </>
          )}
          {custumers.length === 0 && (
            <Link className="my-2" href="/dashboard/custumer/register">
              Você ainda não tem clientes cadastrados!{" "}
              <span className="text-indigo-700 font-medium">
                Cadastrar cliente
              </span>
            </Link>
          )}

          <Suspense
            fallback={
              <button
                disabled
                className="bg-slate-400 my-4 px-2 h-11 text-white font-bold rounded"
              >
                Carregando...
              </button>
            }
          >
            <FormButton />
          </Suspense>
        </form>
      </main>
    </Container>
  );
}
