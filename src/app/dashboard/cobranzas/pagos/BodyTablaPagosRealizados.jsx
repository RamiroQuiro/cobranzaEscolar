import BotonEmoji from "@/app/componentes/BotonEmoji";
import { contextCobranzas } from "@/context/contextCobranzas";
import { contextOrdenar } from "@/context/contextData";
import React from "react";
import { shallow } from "zustand/shallow";

export default function BodyTablaPagosRealizados() {
  const { pagosEfectuados } = contextCobranzas((state) => ({
    pagosEfectuados: state.pagosEfectuados,
  }));
  const order = contextOrdenar((state) => state.ordenarPor, shallow);
  return (
    <tbody className="divide-y divide-gray-200 my-3">
      {pagosEfectuados
        ?.sort((a, b) => {
          if (order == "nombreLegajo") {
            if (a.nombreLegajo < b.nombreLegajo) return -1;
            if (a.nombreLegajo > b.nombreLegajo) return 1;
          }
          if (order == "legajo") return a.legajo - b.legajo;
          if (order == "dniLegajo") return a.dniLegajo - b.dniLegajo;
          if (order == "activo") if (a.activo > b.activo) return -1;
        })
        ?.map((pagos) => (
          <tr
            onClick={(e) => captaruid(e, pagos.uid)}
            key={pagos.uid}
            className="odd:bg-primary-300/50 cursor-pointer hover:bg-gray-200/80 duration-200"
          >
            <td className="whitespace-nowrap px-4 py-2 font-medium text-primary-text">
              {pagos.tipoComprobante}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {pagos.numeroComprobante}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {pagos.legajo}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text"></td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {pagos.legajo}
            </td>
            <td className="whitespace-nowrap  text-primary-text flex gap-2 items-center mx-auto justify-center">
              <BotonEmoji>🔽</BotonEmoji>
              <BotonEmoji>🖨️</BotonEmoji>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
