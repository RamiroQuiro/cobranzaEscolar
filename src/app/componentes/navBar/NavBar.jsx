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
    <nav className="sticky top-0 left-0 w-full h-16 bg--100 shadow-md shadow-gray-200/50 flex items-center justify-between">
      <div className="w-1/3">logo</div>
      <div className="w-full h-full flex items-center justify-between px-10">
        {
            links?.map((link)=>(

                <Link className="border rounded-xl p-2 text-xs text-gray-800  font-light" href={link.link} key={link.id}>{link.name}</Link>
            ))
}
      </div>
    </nav>
  );
}
