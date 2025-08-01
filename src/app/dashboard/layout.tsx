import { DasboardHeader } from "@/app/dashboard/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DasboardHeader/>
      {children}
    </>
  );
}
