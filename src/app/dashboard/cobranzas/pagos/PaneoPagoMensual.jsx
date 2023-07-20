
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
        className={`border border-primary-100/50 flex flex-col  items-center justify-stretch  rounded text-sm flex-grow ${isPay?.montoPagado?"bg-green-200/80":"bg-red-200/80"}`}
        >
          <h3 className='bg-primary-100 w-full text-center text-primary-400'>{period}</h3>
         <p className="py-1">{
          isPay?.montoPagado ? "👌🏼" :"🚫"
           }</p>
        </div>
      )
    })}

  </div>
  )
}
