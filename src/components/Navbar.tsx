"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Serviços", href: "#servicos" },
  { name: "Resultados", href: "#resultados" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex items-center">
            <img 
              src="/brand/logotype.png" 
              alt="KJS Consultoria" 
              className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </div>
          <div className="hidden sm:flex flex-col border-l border-white/10 pl-4 py-1">
            <span className="text-[11px] text-primary font-bold tracking-[0.3em] uppercase">Estratégia e Crescimento</span>
            <span className="text-[9px] text-white/40 font-medium tracking-widest uppercase mt-0.5">Kamillo Santos</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contato"
            className="btn-primary"
          >
            Agendar Consultoria
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 lg:hidden"
        >
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contato"
              className="btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Consultoria
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
