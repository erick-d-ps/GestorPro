
export interface TicketProps{
   id: string; 
   name: string;
   description: string;
   status: string;
   created_at: Date | null;
   Updated_at: Date | null;
   custumerId: string | null
   userid: string | null;
}