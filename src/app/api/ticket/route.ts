import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaCliente from "@/lib/prisma";

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not aoutorized" }, { status: 401 });
  }

  const { id } = await request.json();

  const findticket = await prismaCliente.ticket.findFirst({
    where: {
      id: id as string,
    },
  });

  if(!findticket){
    return NextResponse.json({error: "filed update ticket"}, {status: 400})
  }
  
  try{
    await prismaCliente.ticket.update({
      where:{
        id: id as string
      },
      data:{
        status: "FECHADO"
      }
    })
    return NextResponse.json({message: "Chamado atualizado com sucesso!"})
  }catch(err){
    return NextResponse.json({error: "filed update ticket"}, {status: 400})
  }
}
