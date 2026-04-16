'use client'
import { BarChart, Scooter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Dashlayout = ({children}) => {
    const path=usePathname();

      const menuItems = [
    {
      name: "Sales Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart size={20} />,
    },
    {
      name: "Delivery Tracking",
      href: "/dashboard/producttrack",
      icon: <Scooter size={20} />,
    },
  ];
    return (
<div className="flex min-h-screen">

    
      <div className="bg-gray-900 text-white flex flex-col items-center lg:items-start 
                      w-16 lg:w-64 py-4 space-y-4">

    

        {/* MENU */}
        <ul className="w-full mt-2 space-y-2">

          {menuItems.map((item, i) => (
            <li key={i} className="relative group">

              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg 
                ${path === item.href ? "bg-cyan-700" : "hover:bg-gray-800"}`}
              >
                {/* ICON */}
                {item.icon}

                {/* TEXT (desktop only) */}
                <span className="hidden lg:block">
                  {item.name}
                </span>
              </Link>

              
              <span className="absolute left-16 top-1/2 -translate-y-1/2 
                               bg-black text-white text-sm px-2 py-1 rounded 
                               opacity-0 group-hover:opacity-100 transition 
                               whitespace-nowrap lg:hidden z-50">
                {item.name}
              </span>

            </li>
          ))}

        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 bg-black text-white flex items-center justify-center">
        {children}
      </div>

    </div>
    );
};

export default Dashlayout;