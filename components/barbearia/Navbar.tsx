"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Kaushan_Script } from "next/font/google";
import { M } from "./safe-motion";
import StatusBadge from "./StatusBadge";
import { siteName } from "@/lib/site/env";

const brandScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Navbar({ statusOverride = "auto" }: { statusOverride?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <M.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adicionado 'relative' aqui para ancorar o menu centralizado */}
        <div className="relative grid grid-cols-3 items-center h-16 text-white">
          {/* Esquerda: menu mobile / links desktop */}
          <div className="flex items-center justify-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wide">
              <button
                type="button"
                className="hover:text-sky-500 transition-colors cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Galeria
              </button>

              <button
                type="button"
                className="hover:text-sky-500 transition-colors cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Serviços
              </button>

              <button
                type="button"
                className="hover:text-sky-500 transition-colors cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("mapsection")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Localização
              </button>
            </div>
          </div>

          {/* Centro: nome */}
          <div className="flex items-center justify-center">
            <span
              className={`${brandScript.className} text-xl sm:text-2xl leading-none text-white normal-case tracking-normal text-center`}
            >
              {siteName}
            </span>
          </div>

          {/* Direita: status */}
          <div className="flex items-center justify-end">
            <StatusBadge inline statusOverride={statusOverride} />
          </div>
        </div>
      </div>

      {/* Menu Mobile Corrigido */}
      {isOpen && (
        <M.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 text-white border-t border-gray-800"
        >
          <div className="flex flex-col p-6 gap-6 text-center text-lg">
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" });

                setIsOpen(false);
              }}
            >
              Galeria
            </button>

            <button
              type="button"
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });

                setIsOpen(false);
              }}
            >
              Serviços
            </button>

            <button
              type="button"
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("mapsection")
                  ?.scrollIntoView({ behavior: "smooth" });

                setIsOpen(false);
              }}
            >
              Localização
            </button>
          </div>
        </M.div>
      )}
    </M.nav>
  );
}
