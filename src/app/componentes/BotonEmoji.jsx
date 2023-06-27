"use client"

export default function BotonEmoji({children,onClick}) {
  return (
    <button 
     onClick={onClick}
    className="bg-primary-800 hover:bg-primary-300 duration-300 rounded-full p-1">
        {children}</button>
  )
}
