"use client";

import { motion } from "framer-motion";
import {
  googleReviewUrl,
  isGoogleReviewConfigured,
  siteName,
} from "@/lib/site/env";

const reviews = [
  {
    name: "Cliente A",
    text: "Exemplo de depoimento — substitua pelos reviews reais do seu negócio.",
  },
  {
    name: "Cliente B",
    text: "Atendimento de qualidade. Configure NEXT_PUBLIC_GOOGLE_REVIEW_URL para o link real.",
  },
  {
    name: "Cliente C",
    text: "Ambiente agradável e profissionais atenciosos.",
  },
];

export default function Preview() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.05),transparent_60%)]" />

      <div className="relative z-10 text-center px-5 mb-14">
        <span className="inline-block text-[10px] tracking-[0.35em] uppercase text-zinc-500 border border-zinc-800 rounded-full px-4 py-1.5 mb-5">
          Google Reviews
        </span>

        <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">
          O que falam da{" "}
          <span className="text-sky-400 gold-glow">{siteName.toUpperCase()}</span>
        </h2>

        <p className="text-zinc-400 mt-5 max-w-xl mx-auto text-sm md:text-base">
          Quem passa por aqui percebe a diferença no atendimento.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 min-w-max px-6"
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="relative w-[320px] shrink-0 rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl p-6"
              style={{
                boxShadow:
                  "0 0 20px rgba(56,189,248,0.08), inset 0 0 20px rgba(56,189,248,0.03)",
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 576 512"
                    className="w-4 h-4 fill-sky-400"
                  >
                    <path d="M287.9 17.8L354 150.2 499.2 171.5C522 174.8 531.7 202.8 515.2 218.7L410 312.3 434.8 457.5C438.3 480.2 414.2 497.5 393.4 486.7L288 439.6 182.6 486.7C161.8 497.5 137.7 480.2 141.2 457.5L166 312.3 60.8 218.7C44.3 202.8 54 174.8 76.8 171.5L222 150.2 288.1 17.8C298.3-3.3 329.7-3.3 339.9 17.8H287.9z" />
                  </svg>
                ))}
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                “{review.text}”
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">
                    {review.name}
                  </p>
                  <span className="text-zinc-500 text-xs">
                    Depoimento de exemplo
                  </span>
                </div>

                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(56,189,248,0.25)",
                    background: "rgba(56,189,248,0.05)",
                  }}
                >
                  <svg
                    viewBox="0 0 488 512"
                    className="w-4 h-4 fill-sky-400"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 122.3 24.5 165 64.9l-67 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.2 156.6 153.7 156.6 98.2 0 135.1-70.5 140.8-107H248v-85.8h236.1c2.3 12.7 3.9 24.9 3.9 42z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {isGoogleReviewConfigured && (
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 mt-20">
          <p className="text-zinc-400 text-sm md:text-base mb-6">
            Curtiu o atendimento?
            <span className="block text-zinc-200 mt-1">
              Nos avalie no Google.
            </span>
          </p>

          <motion.a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-xs md:text-sm font-semibold uppercase tracking-[0.2em]"
            style={{
              border: "2px solid #38bdf8",
              color: "#38bdf8",
              background: "transparent",
              boxShadow:
                "0 0 14px rgba(56,189,248,0.25), inset 0 0 14px rgba(56,189,248,0.05)",
              textShadow: "0 0 10px #38bdf8",
            }}
          >
            <svg viewBox="0 0 488 512" className="w-4 h-4 fill-current">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 122.3 24.5 165 64.9l-67 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.2 156.6 153.7 156.6 98.2 0 135.1-70.5 140.8-107H248v-85.8h236.1c2.3 12.7 3.9 24.9 3.9 42z" />
            </svg>
            Avaliar no Google
          </motion.a>
        </div>
      )}

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
