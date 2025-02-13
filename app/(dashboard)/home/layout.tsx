import Link from "next/link";
import SideNav from "./sidenav";
import ListTrial from "./listTrial"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="relative">
        <SideNav />
      </div>
      <div>
        <header>
        </header>
        <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4">
          {children}
        </main>
      </div>
    </main>
  );
}
