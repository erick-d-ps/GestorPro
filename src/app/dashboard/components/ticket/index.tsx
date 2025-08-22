"use client";

import { useContext } from "react";
import { CustumerProps } from "@/utils/custumer.type";
import { TicketProps } from "@/utils/ticket.type";
import { FiCheckSquare, FiFile, FiLoader } from "react-icons/fi";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { ModalContext } from "@/providers/modal";
import { useSession } from "next-auth/react";

interface TicketItemProps {
  ticket: TicketProps;
  custumer: CustumerProps | null;
}

export function TicketItem({ custumer, ticket }: TicketItemProps) {
  const { status, data } = useSession();
  const router = useRouter();
  const { handleModalVisible, setDetailTicket } = useContext(ModalContext);

  async function handleChangeStatus() {
    try {
      await api.patch("/api/ticket", {
        id: ticket.id,
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  }

  function handleOpenModal() {
    handleModalVisible();
    setDetailTicket({
      custumer: custumer,
      ticket: ticket,
    });
  }

  return (
    <>
      <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-50 hover:bg-gray-200 duration-300 ">
        <td className="text-left pl-1">{custumer?.name}</td>
        <td className="text-left hidden sm:table-cell">
          {ticket.created_at?.toLocaleDateString("pt-br")}
        </td>
        <td className="text-left ">
          <span className="bg-green-500 px-2 py-1 rounded-lg">
            {ticket.status}
          </span>
        </td>
        <td className="text-left">
          {status === "authenticated" && (
            <button className="mr-3" onClick={handleChangeStatus}>
              <FiCheckSquare size={24} color="#44ef44" />
            </button>
          )}
          {status === "loading" && (
            <button className="animate-spin">
              <FiLoader size={26} color="#4b5563" />
            </button>
          )}
          <button onClick={handleOpenModal}>
            <FiFile size={24} color="#3b82f6" />
          </button>
        </td>
      </tr>
    </>
  );
}
