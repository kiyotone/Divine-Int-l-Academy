"use client"

import Link from "next/link"

type NavProps = {
    name: string
    link?: string
}


export default function NavLink ({name}:NavProps) {
  return (
    // {

    //     link ? <Link href={"/works"}>{name}</Link> :<Link href={"/works"}>{name}</Link>

    // }
    
    <Link href={"/works"}>{name}</Link>
  
    )

}
