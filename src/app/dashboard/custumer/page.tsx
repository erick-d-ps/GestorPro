import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { CardCustumer } from "@/app/dashboard/custumer/components/card"
import prismaClient from "@/lib/prisma"

export default async function Custumer() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const custumers = await prismaClient.custumer.findMany({
    where:{
      userId: session.user.id
    }
  })


  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className=" flex items-center justify-between">
          <h1 className="text-3xl font-bold">Meus clientes</h1>
          <Link href="/dashboard/custumer/register" className="bg-blue-500 px-4 py-1 text-white font-medium rounded">
            Novo cliente
          </Link>
        </div>
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 mt-3">
          {custumers.map( custumer => (
            <CardCustumer 
              key={custumer.id} 
              custumer={custumer}
            />
          ))}

          {custumers.length === 0 && (
            <h1 className="text-black font-medium">Você ainda não possui cliente cadastrado!</h1>
          )}

        </section>
      </main>
    </Container>
  );
}
