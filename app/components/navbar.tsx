"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [["Home", "/"], ["About", "/about"], ["Projects", "/projects"], ["Explore", "/explore"], ["Join Us", "/apply"]] as const;

export default function Navbar() {
  const path = usePathname(); const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll=()=>setScrolled(window.scrollY>20); onScroll(); window.addEventListener("scroll",onScroll,{passive:true}); return()=>window.removeEventListener("scroll",onScroll); }, []);
  return <header className={`nav-shell ${scrolled ? "scrolled" : ""}`}><div className="nav-inner">
    <Link href="/" aria-label="NeuroTech at UCSB home" onClick={()=>setOpen(false)}><Image src="/neurotech-ucsb-white.png" alt="NeuroTech at UCSB" width={1280} height={1280} priority className="nav-logo" /></Link>
    <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary navigation">{links.map(([label,href])=><Link key={href} href={href} className={path===href?"active":""} onClick={()=>setOpen(false)}>{label}</Link>)}<Link href="/apply" className="nav-apply" onClick={()=>setOpen(false)}>Apply</Link></nav>
    <button className="menu-button" onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation" aria-expanded={open}><span/><span/><span/></button>
  </div></header>;
}
