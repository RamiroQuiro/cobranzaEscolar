"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BotonLink({link}) {
    const pantallaActiva=usePathname()

  return (
    <Link className={`${pantallaActiva==link.link? 'border-primary-200 bg-white rounded-full duration-200 ':''}`+ `rounded-full border p-2 cursor-pointer hover:bg-white :text-primary-800 hover:border-primary-200 duration-200 text-xs`} href={link.link} >{link.name}</Link>
  )
}
