import SvgComponent from "@/app/componentes/SVGComponent";
import React, { useState } from "react";

export default function PeriodosCiclosCarga({periodos,handleCheckPeriodo,checked}) {

  return (
    <div className="w-11/12 flex items-center my-5 justify-between mx-auto gap-2">
      {periodos?.map((periodo) => (
        <label
          htmlFor={periodo.label}
          key={periodo.id}
          className="rounded h-10 cursor-pointer border-primary-100 text-xs border flex items-center justify-between flex-col flex-auto"
        >
          <span className="w-full bg-primary-100 text-white mx-auto text-center">
            {periodo.label}
          </span>
          <input
            type="checkbox"
            name={periodo.label}
            id={periodo.label}
            defaultChecked={true}
            onChange={() => handleCheckPeriodo(periodo.label)}
            className="hidden peer"
          />
          <SvgComponent checked={checked[periodo.label]} />
        </label>
      ))}
    </div>
  );
}
