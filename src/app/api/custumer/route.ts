import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import  PrismaClient  from "@/lib/prisma";

export async function DELETE(request: Request){
  const session = await getServerSession(authOptions)

  if(!session || !session.user){
    return NextResponse.json({ error: "Not authorized"}, { status: 401 })
  }
//Pegando da url o parametro 
  const { searchParams } = new URL (request.url)

  //pedindo para que pegue o id como parametro 
  const userId = searchParams.get("id")

  if(!userId){
    return NextResponse.json({ error: "Custumer not found"}, { status: 400 })
  }

  
  try{
    await PrismaClient.custumer.delete({
      where: {
        id: userId as string
      }
    })

    return NextResponse.json({message: "Cliente deletado com sucesso!"})

  }catch(err){
    console.log(err)
    return NextResponse.json({ error: "Faild Delete custumer"}, { status: 400 })
  }

}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if(!session || !session.user){
    return NextResponse.json({ error: "Not authorized"}, { status: 401 })
  }

  const { name, email, phone, address, userId } = await request.json();

  try{
    await PrismaClient.custumer.create({
        data:{
          name,
          email,
          phone,
          address: address ? address : "",
          userId  
        }
    })

    return NextResponse.json({message: "Cliente cadastrado com sucesso!"})

  }catch(err){
    return NextResponse.json({ error: "Failed crete new custumer"}, { status: 400 })
  }

}
