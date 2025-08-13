import { redirect } from "next/navigation"
import { Container } from "@/components/container"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prismaClient from "@/lib/prisma"
import Link from "next/link";
import { TicketItem } from "./components/ticket";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if(!session || !session.user){
    redirect("/")
  }
 
  const tickets = await prismaClient.ticket.findMany({
    where: {
      userid: session.user.id,
      status: "ABERTO",
    },
    include: {
      custumer: true
    }
  })

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Chamados</h1>
          <Link href="/dashboard/new" className="bg-blue-500 px-4 py-1 text-white font-medium rounded ">
            Novo chamado
          </Link>
        </div>

        <table className="min-w-full my-2">
          <thead>
            <tr>
              <th className="font-medium text-left pl-1">CLIENTE</th>
              <th className="font-medium text-left hidden sm:block">DATA CADASTRO</th>
              <th className="font-medium text-left">STATUS</th>
              <th className="font-medium text-left">#</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map( ticket => (
              <TicketItem 
              key={ticket.id} 
              ticket={ticket}
              custumer={ticket.custumer}          
              
              />
            ))}
          </tbody>
        </table>
        {tickets.length === 0 && (
          <h1 className="mt-4 mx-2 text-gray-600">Nenhum chamado em aberto foi encontrado!</h1>
        )}
      </main>
    </Container>
  );
}
