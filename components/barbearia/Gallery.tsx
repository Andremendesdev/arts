"use client";

import { Gem, Shirt, ShoppingBag, Sparkles } from "lucide-react";
import { M } from "./safe-motion";
import {
  fadeUpContainer,
  fadeUpItem,
  sectionViewportWide,
} from "./sectionAnimations";

const HIGHLIGHTS = [
  { label: "Marcas selecionadas", icon: Sparkles },
  { label: "Roupas & streetwear", icon: Shirt },
  { label: "Acessórios premium", icon: Gem },
] as const;

export default function Gallery() {
  const scrollToCollection = () => {
    document
      .getElementById("clube-dos-canalhas")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="gallery"
      className="relative min-h-[520px] overflow-hidden sm:min-h-[560px] md:min-h-[620px]"
    >
      <div
        className="absolute inset-0 scale-105 bg-[url('/cta.png')] bg-cover bg-[center_45%] bg-no-repeat md:bg-[center_35%] lg:bg-right"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/78 to-[#0a0a0a]/25 md:via-[#0a0a0a]/55 md:to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-transparent to-[#0a0a0a]/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.12),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-5 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <M.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportWide}
          variants={fadeUpContainer}
          className="w-full max-w-xl rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-md sm:max-w-lg sm:p-8 md:max-w-xl md:border-white/5 md:bg-black/20 lg:max-w-2xl"
        >
          <M.span
            variants={fadeUpItem}
            className="hero-badge-neon mb-4 inline-block rounded-full border px-3.5 py-1.5 text-[9px] uppercase tracking-[0.22em] sm:text-[10px]"
          >
            Loja física
          </M.span>

          <M.h2
            variants={fadeUpItem}
            className="font-serif text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]"
          >
            Venha conhecer a{" "}
            <span className="text-sky-200 [text-shadow:0_0_12px_rgba(56,189,248,0.45)]">
              coleção
            </span>{" "}
            disponível na loja.
          </M.h2>

          <M.p
            variants={fadeUpItem}
            className="mt-4 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base"
          >
            Peças premium, marcas renomadas e estilo que combina com o seu
            corte. Passe na loja e monte o visual completo.
          </M.p>

          <M.ul variants={fadeUpItem} className="mt-6 flex flex-wrap gap-2">
            {HIGHLIGHTS.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-black/35 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-300 sm:text-[11px]"
              >
                <Icon className="size-3 shrink-0 text-sky-400/80" aria-hidden="true" />
                {label}
              </li>
            ))}
          </M.ul>

          <M.div variants={fadeUpItem} className="mt-8">
            <M.button
              type="button"
              onClick={scrollToCollection}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] sm:w-auto sm:min-w-[220px] md:text-sm"
              style={{
                border: "2px solid #38bdf8",
                color: "#38bdf8",
                background: "transparent",
                boxShadow:
                  "0 0 14px rgba(56,189,248,0.25), inset 0 0 14px rgba(56,189,248,0.05)",
                textShadow: "0 0 10px rgba(56,189,248,0.35)",
              }}
            >
              <ShoppingBag className="size-4 shrink-0" aria-hidden="true" />
              Ver coleção
            </M.button>
          </M.div>
        </M.div>
      </div>

      <M.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={sectionViewportWide}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 right-5 hidden text-right md:block lg:right-10"
        aria-hidden="true"
      >
        <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
          Drop selecionado
        </p>
        <p className="mt-1 font-serif text-lg text-white/80">Estilo exclusivo</p>
      </M.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(56,189,248,0.45), transparent)",
        }}
      />
    </section>
  );
}
