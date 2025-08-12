import { CustumerProps } from "@/utils/custumer.type";
import { TicketProps } from "@/utils/ticket.type";
import { FiTrash2, FiFile } from "react-icons/fi";

interface TicketItemProps {
  ticket: TicketProps;
  custumer: CustumerProps | null;
}

export function TicketItem({ custumer, ticket }: TicketItemProps) {
  return (
    <>
      <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-50 hover:bg-gray-200 duration-300 ">
        <td className="text-left pl-1">{custumer?.name}</td>
        <td className="text-left hidden sm:table-cell">{ticket.created_at?.toLocaleDateString("pt-br")}</td>
        <td className="text-left ">
          <span className="bg-green-500 px-2 py-1 rounded-lg">{ticket.status}</span>
        </td>
        <td className="text-left">
          <button className="mr-2">
            <FiTrash2 size={24} color="#EF4444" />
          </button>
          <button>
            <FiFile size={24} color="#3b82f6" />
          </button>
        </td>
      </tr>
    </>
  );
}
