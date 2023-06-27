"use client";
import { contextData } from "@/context/contextData";

export default function BodyTablaAlumnos() {
  const { legajos } = contextData((state) => ({
    legajos: state.legajos,
  }));
  const capturarLegajo = contextData((state) => state.capturarLegajo);
  const captaruid = (uid) => {
    capturarLegajo(uid);
  };
  return (
    <tbody className="divide-y divide-gray-200">
      {legajos
        ?.filter((leg) => leg.activo == "true")
        ?.map((leg) => (
          <tr
            onClick={() => captaruid(leg.uid)}
            key={leg.id}
            className="odd:bg-primary-300/50 cursor-pointer hover:bg-gray-200/80 duration-200"
          >
            <td className="whitespace-nowrap px-4 py-2 font-medium text-primary-text">
              {leg.nombreLegajo}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {leg.legajo}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-primary-text">
              {leg.dniLegajo}
            </td>
            <td className="whitespace-nowrap px-1 py-2 text-primary-text">
              <p
                className={
                  leg.activo == "true"
                    ? " bg-green-300/50 shadow-sm p-1 shadow-green-300 text-green-600 rounded-lg text-xs mx-auto text-center"
                    : " bg-red-300/50 shadow-sm p-1 shadow-red-300 text-red-600 rounded-lg text-xs mx-auto text-center"
                }
              >
                {leg.activo == "true" ? "activo" : "inaCtivo"}
              </p>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
