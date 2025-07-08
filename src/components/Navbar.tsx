'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="w-full bg-white shadow fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <span className="text-xl font-bold text-blue-600">EG Service Web</span>

        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-600">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6 text-blue-600" /> : <Menu className="h-6 w-6 text-blue-600" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
