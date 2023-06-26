import React from "react";

export default function Alumnos() {
  return (
    <div className="w-11/12 mx-auto flex pt-10   items-stretch justify-between container gap-4 h-full text-primary-text">
      <div className="bg-primary-400 overflow-hidden rounded-lg flex flex-col items-center justify-between w-1/3 flex-auto">
        <div className="bg-primary-700 w-full p-2">
          <h2 className="text-medium text-lg text-primary-100">
            Buscar alumno
          </h2>
        </div>
        filtrado
      </div>
      <div className="bg-primary-400  rounded-lg flex flex-col items-center justify-between w-2/3 flex-auto">
        tabla de alumnos
      </div>
    </div>
  );
}
