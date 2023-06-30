"use client"

export default function BotonBorderRedondos({children,onClick,className,id}) {
  return (
    <button id={id} onClick={onClick}   className={`rounded-full border p-2 cursor-pointer hover:bg-white text-sm :text-primary-800 hover:border-primary-200 duration-200`}>{children}</button>
  )
}
