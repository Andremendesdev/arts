"use client";
import { useState, useEffect } from "react";
import { Scissors, Guitar, Zap, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* h-20 garante altura para centralizar tudo verticalmente */}
        <div className="flex justify-between items-center h-16 text-white">
          {/* Lado Esquerdo: Ícones (alinhados ao centro) */}
          <div className="flex items-center gap-6 text-yellow-500">
            <Scissors size={20} />
            <Guitar size={20} />
            <Zap size={20} />
          </div>

          {/* Lado Direito Desktop: Links + StatusBadge */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 font-medium text-sm uppercase tracking-wide">
              <a
                href="/gallery"
                className="hover:text-yellow-500 transition-colors"
              >
                Galeria
              </a>
              <a
                href="/services"
                className="hover:text-yellow-500 transition-colors"
              >
                Serviços
              </a>
              <a
                href="/location"
                className="hover:text-yellow-500 transition-colors"
              >
                Localização
              </a>
            </div>

            {/* StatusBadge centralizado na altura da linha */}
            <StatusBadge />
          </div>

          {/* Mobile: Alinhado e com espaço correto */}
          <div className="flex items-center gap-4 md:hidden">
            <StatusBadge inline />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Corrigido */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 text-white border-t border-gray-800"
        >
          <div className="flex flex-col p-6 gap-6 text-center text-lg">
            <a href="/gallery" onClick={() => setIsOpen(false)}>
              Galeria
            </a>
            <a href="/services" onClick={() => setIsOpen(false)}>
              Serviços
            </a>
            <a href="/location" onClick={() => setIsOpen(false)}>
              Localização
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
