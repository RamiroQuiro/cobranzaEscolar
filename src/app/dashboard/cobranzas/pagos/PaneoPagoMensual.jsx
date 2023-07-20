import SvgComponent from "@/app/componentes/SVGComponent";

export default function PaneoPagoMensual({periodos,datos}) {
  return (
    <div className="w-11/12 mx-auto rounded flex items-center justify-between px-2 gap-3 my-10 animate-aparecer">
    {periodos?.map((period,index)=>{
        let isPay = datos?.find(
          (pago) => pago?.periodo?.toLowerCase() == period.toLowerCase()
        );

      return(
        <div
        key={index}
        className={`rounded h-10 cursor-pointer border-primary-100 text-xs border flex items-center justify-between flex-col flex-auto ${isPay?.montoPagado?"bg-green-200/80":"bg-red-200/80"}`}
        >
        <span className="w-full bg-primary-100 text-white mx-auto text-center">{period}</span>
            <SvgComponent checked={ isPay?.montoPagado}/> 
        </div>
      )
    })}

  </div>
  )
}
