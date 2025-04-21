import Menu from "@/components/Menu";
import Link from "next/link";
import Navbar from "@/components/Navbar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
      <div className="h-screen flex">
        {/* Left Sidebar */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          {/* Add Logo */}
          <img src="/logo.png" alt="Logo" width={32} height={32} />
          {/* Add App Name on Logo? */}
          <span className="hidden lg:block text-xl font-bold">Next School</span>
          </Link>
          {/* Add Menu */}
          <Menu/>
        </div>

        {/* Main Content Area */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] p-4 bg-[F7F8FA] overflow-scroll">
          <Navbar/>
          {children}
        </div>
      </div>   
  );
}
 