import SvgComponent from "@/app/componentes/SVGComponent";
import React, { useState } from "react";

export default function PeriodosCiclosCarga({setForm,periodosForm}) {
  const periodos = [
    // { label: "Enero", id: 1 },
    { label: "Febrero", id: 2 },
    { label: "Marzo", id: 3 },
    { label: "Abril", id: 4 },
    { label: "Mayo", id: 5 },
    { label: "Junio", id: 6 },
    { label: "Julio", id: 7 },
    { label: "Agosto", id: 8 },
    { label: "Septiembre", id: 9 },
    { label: "Octubre", id: 10 },
    { label: "Noviembre", id: 11 },
    // { label: "Diciembre", id: 12 },
  ];
  const [check, setCheck] = useState(periodos.reduce((acc, periodo) => ({ ...acc, [periodo.label]: true }), {}));

  const handleCheck = (label) => {
    setCheck((check) => ({
      ...check,
      [label]: !check[label],
    }));
    setForm((state)=>({...state,periodos:{...state.periodos, [label]: !check[label]}}))
  };
  
  return (
    <div className="w-11/12 flex items-center my-5 justify-between mx-auto gap-2">
      {periodos?.map((periodo) => {
console.log(periodosForm)
return(
        <label
          htmlFor={periodo.label}
          key={periodo.id}
          className="rounded h-10 cursor-pointer border-primary-100 text-xs border flex items-center justify-between flex-col flex-auto"
        >
          <span className="w-full bg-primary-100 text-white mx-auto text-center">
            {periodo.label}
          </span>
          <input
          value={periodosForm[periodo.label]}
            type="checkbox"  
            name={periodo.label}
            id={periodo.label}
            defaultChecked={true}
            onChange={() => handleCheck(periodo.label)}
            className="hidden peer"
          />
          <SvgComponent checked={!periodosForm?check[periodo.label]:periodosForm[periodo.label]} />
        </label>
       )} )}
    </div>
  );
}
