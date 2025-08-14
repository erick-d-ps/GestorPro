"use client";

import { createContext, ReactNode, useState } from "react";
import { TicketProps } from "@/utils/ticket.type";
import { CustumerProps } from "@/utils/custumer.type";
import { Modalticket } from "@/components/modal"

interface ModalContextData {
  visible: boolean;
  handleModalVisible: () => void;
  ticket: TickInfo | undefined;
  setDetailTicket: (detail: TickInfo) => void;
}

interface TickInfo{
  ticket: TicketProps;
  custumer: CustumerProps | null
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState<TickInfo>()

  function handleModalVisible() {
    setVisible(!visible);
  }

  function setDetailTicket(detail: TickInfo){
    console.log(detail)
    setTicket(detail)
  }

  return (
    <ModalContext.Provider value={{ visible, handleModalVisible, ticket, setDetailTicket }}>
      {visible && <Modalticket />}
      {children}
    </ModalContext.Provider>
  );
};
