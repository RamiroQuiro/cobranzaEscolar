
export default function BodyTableEstadoCiclo({periodos,totales,datos}) {
    const suma = (a, b) => {
        if (a === undefined) {
          a = 0;
        }
        if (b === undefined) {
          b = 0;
        }
        return Number(a) + Number(b);
      };
  return (
    <tbody className="divide-y divide-gray-200 my-3">
    {periodos.map((period, index) => {
      let isPay = datos?.find(
        (pago) => pago.periodo.toLowerCase() == period.toLowerCase()
      );
      return (
        <tr
          key={index}
          className="odd:bg-primary-300/50 cursor-pointer text-sm hover:bg-gray-200/80 duration-200 animate-[aparecer_.2s]"
        >
          <td className="whitespace-nowrap px-2 py-0.5 font-medium text-primary-text">
            {period}
          </td>
          <td
            className={`border px-2 py-0.5 font-medium text-xs ${
              isPay ? "text-green-500" : "text-red-500"
            }`}
          >
            $ {isPay ? isPay.montoPagado : "0"}
          </td>
          <td
            className={`border px-2 py-0.5 font-medium text-xs ${
              !isPay?.montoAgregado ? "text-green-500" : "text-red-500"
            }`}
          >
            $ {isPay?.montoAgregado ? isPay?.montoAgregado : "0"}
          </td>
          <td className="border px-2 py-0.5">
            {" "}
            ${" "}
            {isPay ? suma(isPay?.montoPagado, isPay?.montoAgregado) : "0"}
          </td>
        </tr>
      );
    })}
    <tr className="bg-primary-700/80  cursor-pointer text font-medium hover:bg-gray-200/80 duration-200 animate-[aparecer_.2s] text-primary-400">
      <td className="whitespace-nowrap px-2 py-0.5  ">{"Totales"}</td>
      <td className="border px-2 py-0.5">${totales?.totalMontoPagado}</td>
      <td className="border px-2 py-0.5">
        {" "}
        ${totales?.totalMontoAgregado}
      </td>
      <td className="border px-2 py-0.5">${totales?.totalMontoTotal}</td>
    </tr>
  </tbody>
  )
}
