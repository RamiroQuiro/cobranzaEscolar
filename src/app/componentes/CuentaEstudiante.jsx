import React from "react";
import THTabla from "./THTabla";

export default function CuentaEstudiante({ datos,idLegajo }) {
  const cabeceras = [
    {
      name: "Periodo",
      key: "1",
      id: "periodoPagado",
    },
    {
      name: "Pagado",
      key: 2,
      id: "montoPagado",
      //sortable : true,
    },
    {
      name: "Intereses",
      key: 3,
      id: "intereses",
      //sortable : true,
    },
    {
      name: "Totales",
      key: 7,
      id: "totalPeriodo",
      //sortable : true,
    },
  ];
  const periodos = [
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
  ];
  
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-800 text-sm rounded relative">
      <thead className="text-left ltr:text-left rtl:text-right bg-primary-600 rounded py-2 sticky top-0 left-0">
        <tr>
          {cabeceras?.map((item, i) => (
            <THTabla key={item.key} id={item.id} label={item.name} />
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 my-3">
        {periodos.map((period, index) => {
            let isPay=datos?.find(pago=>pago.periodo==period.toLowerCase())
          return (<tr
            key={index}
            className="odd:bg-primary-300/50 cursor-pointer text-sm hover:bg-gray-200/80 duration-200 animate-[aparecer_.2s]"
          >
            <td className="whitespace-nowrap px-2 py-0.5 font-medium text-primary-text">
              {period}
            </td>
            <td className={`border px-2 py-0.5 font-medium text-xs ${isPay?"text-green-500":"text-red-500"}`}>
              $ { isPay? isPay.montoPagado : "0"}
            </td>
            <td className={`border px-2 py-0.5 font-medium text-xs ${!isPay?.montoAgregado?"text-green-500":"text-red-500"}`}>
              $ { isPay?.montoAgregado? isPay?.montoAgregado : "0"}
            </td>
            <td className="border px-2 py-0.5">{"$5000"}</td>
          </tr>
)})}
        <tr
            className="bg-primary-700/80  cursor-pointer text font-bold hover:bg-gray-200/80 duration-200 animate-[aparecer_.2s] text-primary-400"
          >
            <td className="whitespace-nowrap px-2 py-0.5  ">
              {"Totales"}
            </td>
            <td className="border px-2 py-0.5">
              $6500
            </td>
            <td className="border px-2 py-0.5">{"$4500"}</td>
            <td className="border px-2 py-0.5">{"$5000"}</td>
          </tr>
      </tbody>
    </table>
  );
}
