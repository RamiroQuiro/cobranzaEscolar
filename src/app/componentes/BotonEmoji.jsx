"use client"

export default function BotonEmoji({children,onClick,status}) {
  return (
    <button 
     onClick={onClick}
    className={`${status?"bg-primary-300":"bg-primary-800"} hover:bg-primary-300 duration-300 rounded-full p-1`}>
        {children}</button>
  )
}
