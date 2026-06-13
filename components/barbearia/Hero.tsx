"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import {
  getWhatsAppUrl,
  instagramUrl,
  isInstagramConfigured,
  locationLabel,
  siteName,
} from "@/lib/site/env";

const HERO_WHATSAPP_MSG =
  "Olá! Vocês estão atendendo hoje? Tô pensando em passar aí — é por ordem de chegada?";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export default function Hero() {
  const whatsappLink = getWhatsAppUrl(HERO_WHATSAPP_MSG);

  return (
    <section
      className="relative pt-40 flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.78) 100%), url('/fundo.png') center/cover no-repeat",
      }}
    >
      {isInstagramConfigured && (
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-20 right-5 md:top-24 md:right-8 z-20 flex items-center justify-center rounded-full w-14 h-14"
          style={{
            border: "1.5px solid #38bdf8",
            color: "#38bdf8",
            background: "rgba(10,10,10,0.45)",
            boxShadow:
              "0 0 10px rgba(56,189,248,0.25), inset 0 0 10px rgba(56,189,248,0.05)",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "#38bdf8";
            el.style.color = "#0a0a0a";
            el.style.boxShadow = "0 0 25px rgba(56,189,248,0.55)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(10,10,10,0.45)";
            el.style.color = "#38bdf8";
            el.style.boxShadow =
              "0 0 10px rgba(56,189,248,0.25), inset 0 0 10px rgba(56,189,248,0.05)";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-[22px] h-[22px] fill-current"
          >
            <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1S160.5 371.2 224.1 371.2 339.2 319.7 339.2 256.1 287.7 141 224.1 141zm0 189.6c-41.1 0-74.5-33.4-74.5-74.5s33.4-74.5 74.5-74.5 74.5 33.4 74.5 74.5-33.4 74.5-74.5 74.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9zM398.8 80c-22.1-22.1-51.3-34.2-82.6-34.2H131.8c-64.4 0-116.8 52.4-116.8 116.8v184.3c0 31.3 12.2 60.5 34.2 82.6 22.1 22.1 51.3 34.2 82.6 34.2h184.3c64.4 0 116.8-52.4 116.8-116.8V162.6c0-31.3-12.1-60.5-34.1-82.6zM398 346.9c0 45.2-36.7 81.9-81.9 81.9H131.8c-21.9 0-42.4-8.5-57.9-24-15.5-15.5-24-36-24-57.9V162.6c0-45.2 36.7-81.9 81.9-81.9h184.3c21.9 0 42.4 8.5 57.9 24 15.5 15.5 24 36 24 57.9v184.3z" />
          </svg>
        </motion.a>
      )}

      <div className="flex flex-col items-center justify-center text-center px-5 pt-8 pb-16 md:min-h-screen md:items-start md:justify-start md:text-left w-full">
        <div className="w-full max-w-7xl mx-auto md:px-8 lg:px-12 md:pt-5 lg:pt-6 md:pb-20">
          <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left lg:max-w-2xl">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="inline-block text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.35em] uppercase text-zinc-400 mb-4 md:mb-5 border border-zinc-700 rounded-full px-4 py-1.5"
            >
              Barbearia · {locationLabel}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
              className="font-serif text-[2.5rem] sm:text-[3.5rem] lg:text-7xl font-bold leading-[0.95] tracking-tight mb-4 md:mb-5"
            >
              {siteName.toUpperCase()}{" "}
              <span className="gold-glow block">
                Barber <span className="font-sans font-normal">&amp;</span> Shop
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="font-serif italic text-zinc-400 text-sm sm:text-base mb-7 md:mb-8"
            >
              💈Barbearia, loja de roupas e acessórios 🔥🚀
            </motion.p>
          </div>

          <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-3 md:mx-0 md:w-fit md:max-w-none md:flex-row md:items-stretch md:gap-3">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="hero-wa-btn w-full md:w-auto shrink-0 md:self-stretch"
              style={{ opacity: whatsappLink ? 1 : 0.55 }}
            >
              <span className="hero-wa-btn__beam" aria-hidden="true" />
              <motion.a
                href={whatsappLink ?? "#"}
                target={whatsappLink ? "_blank" : undefined}
                rel={whatsappLink ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!whatsappLink) e.preventDefault();
                }}
                className="hero-wa-btn__link relative z-10 flex h-full min-h-12 w-full items-center justify-center gap-2.5 rounded-[11px] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest md:min-h-[3.25rem] md:px-7 md:py-0 md:text-sm"
              >
              <svg
                viewBox="0 0 448 512"
                className="w-4 h-4 shrink-0 fill-current"
                aria-hidden="true"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-221.7 99.3-221.7 221.7 0 39.1 10.2 77.3 29.6 111L0 480l118.7-30.9c32.6 17.8 69.5 27.2 107.2 27.2h.1c122.4 0 221.7-99.3 221.7-221.7 0-59.3-23.1-115-65-157zM223.9 438.6c-33.5 0-66.2-9-94.7-26l-6.8-4-70.4 18.3 18.8-68.6-4.4-7c-18.6-29.6-28.4-63.7-28.4-98.6 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.9 34.9 54.1 81.2 54.1 130.4 0 101.7-82.8 184.5-184.5 184.5zm101.3-138.2c-5.5-2.8-32.5-16-37.6-17.8-5.1-1.9-8.8-2.8-12.6 2.8-3.7 5.5-14.4 17.8-17.7 21.5-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-53.9-29.1-75.4-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.6-30.4-17.3-41.6-4.5-10.8-9.1-9.3-12.6-9.5-3.2-.1-6.9-.1-10.6-.1s-9.7 1.4-14.8 6.9c-5.1 5.5-19.5 19-19.5 46.3s20 53.8 22.8 57.5c2.8 3.7 39.4 60.2 95.5 84.4 13.4 5.8 23.9 9.3 32 11.9 13.4 4.3 25.6 3.7 35.3 2.2 10.8-1.6 32.5-13.3 37.1-26.2 4.6-12.9 4.6-24 3.2-26.2-1.3-2.3-5-3.7-10.5-6.5z" />
              </svg>
              Chamar no Whatsapp
            </motion.a>
          </motion.div>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            href="#gallery"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs font-medium tracking-wide transition-all duration-300 md:min-h-[3.25rem] md:w-auto md:px-7 md:py-0 shrink-0 text-zinc-400 hover:text-zinc-200"
            style={{
              border: "1px solid rgba(56,189,248,0.2)",
              background: "rgba(10,10,10,0.35)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(56,189,248,0.45)";
              el.style.background = "rgba(56,189,248,0.06)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(56,189,248,0.2)";
              el.style.background = "rgba(10,10,10,0.35)";
            }}
          >
            <ShoppingBag className="size-3.5 shrink-0" aria-hidden="true" />
            Ver Coleção
          </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest text-zinc-600 uppercase">
          Rolar
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(56,189,248,0.4), transparent)",
        }}
      />
    </section>
  );
}
