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
    <nav className="sticky top-0 left-0 w-full h-16 bg-gray-100 ">
      <div className="w-full h-full flex items-center justify-between px-10">
        {
            links?.map((link)=>(

                <Link className="border rounded-xl p-2" href={link.link} key={link.id}>{link.name}</Link>
            ))
}
      </div>
    </nav>
  );
}
