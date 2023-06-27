import React from "react";
import BodyTablaAlumnos from "./BodyTablaAlumnos";

export default function TablaAlumnos() {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-800 text-sm rounded">
      <thead className="text-left ltr:text-left rtl:text-right bg-primary-600 rounded py-2">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-primary-800">
            Nombre y Apellido
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-primary-800">
            N°Legajo
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-primary-800">
            DNI
          </th>
          <th className="whitespace-nowrap px-1 py-2 font-medium text-primary-800">
            Estado
          </th>
        </tr>
      </thead>

      <BodyTablaAlumnos/>
    </table>
  );
}
