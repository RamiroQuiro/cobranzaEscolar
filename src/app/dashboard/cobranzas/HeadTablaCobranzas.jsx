"use client";

import THTabla from "@/app/componentes/THTabla";
import { contextOrdenar } from "@/context/contextData";

export default function HeadTablaCobranzas() {
  const cambiarOrden = contextOrdenar((state) => state.cambiarOrden);
  const ordenarPor = contextOrdenar((state) => state.ordenarPor);

  const handleClick = (e) => {
    cambiarOrden(e.target.id);
  };
  const cabeceras = [
    {
      name: "Comprobante",
      key: "1",
      id: "tipoComprobante",
    },
    {
      name: "N°",
      key: 2,
      id: "numeroComprobante",
      //sortable : true,
    },
    {
      name: "Legajo",
      key: 3,
      id: "legajo",
      //sortable : true,
    },
    {
      name: "Nombre Alumno",
      key: 5,
      id: "nombreLegajo",
      //sortable : true,
    },
    {
      name: "Fecha Pago",
      key: 6,
      id: "fecha",
      //sortable : true,
    },
    {
      name: "Monto",
      key: 7,
      id: "montoPagado",
      //sortable : true,
    },
  ];

  return (
    <thead className="text-left ltr:text-left rtl:text-right bg-primary-600 rounded py-2 sticky top-0 left-0">
      <tr>
        {cabeceras?.map((item, i) => (
          <THTabla
            key={item.key}
            handleClick={handleClick}
            id={item.id}
            label={item.name}
            order={ordenarPor}
          />
        ))}

        <th
          id="acciones"
          className="whitespace-nowrap px-1 py-2 font-medium text-primary-800 cursor-pointer  hover:bg-primary-300/20 duration-200"
        >
          Acciones{" "}
          <span className="duration-200">
            {" "}
            {ordenarPor == "activo" && "⬇️"}
          </span>
        </th>
      </tr>
    </thead>
  );
}
