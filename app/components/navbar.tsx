"use client"
 
 const navigation = [
  { name: "About", href: "/about" },
  { name: "Monitor", href: "/monitor" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
 ]
 

import Link from "next/link"
import React from "react"
 
 const Navbar = () => {
   return (
   <nav className="sticky top-0 z-30 border-b border-white/10 bg-sky-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-2xl font-bold text-white">
            CADET
          </Link>
          <span className="hidden rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sky-100 ring-1 ring-white/20 sm:inline-flex">
            Climate + Disaster Early-warning
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold text-sky-100">
          {navigation.map((item) => (
            <Link
               key={item.name}
               href={item.href}
              className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white"
             >
              {item.name}
            </Link>
           ))}
          <Link
            href="/products"
            className="hidden rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            Explore
          </Link>
         </div>
       </div>
     </nav>
   )
 }
 
 export default Navbar

