import Link from "next/link";
import React from "react";

export default function NavBar() {
  const links = [
    {
      name: "inicio",
      link: "/dashboard",
      id: 1,
    },
    {
      name: "alumnos",
      link: "/dashboard/alumnos",
      id: 2,
    },
    {
      name: "cobranzas",
      link: "/dashboard/cobranzas",
      id: 3,
    },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full h-16 bg--100 shadow-md shadow-gray-200/50 flex items-center justify-evenly">
      <div className="w-1/3 flex flex-col items-center justify-normal">
        <h2 className="text- font-bold text-primary-700">RamiroCode</h2>
        <span className="text-xs text-primary-300">DeveloperWeb</span>
      </div>
      <div className="md:w-1/2 h-full flex items-center justify-between px-10">
        {
            links?.map((link)=>(

                <Link className="border rounded-xl p-2 text-xs text-gray-800  font-light" href={link.link} key={link.id}>{link.name}</Link>
            ))
}
      </div>
    </nav>
  );
}
