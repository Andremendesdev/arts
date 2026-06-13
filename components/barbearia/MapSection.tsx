"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  getMapEmbedUrl,
  isMapConfigured,
  locationLabel,
  siteName,
} from "@/lib/site/env";

export default function MapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mapEmbedUrl = getMapEmbedUrl();

  return (
    <section
      id="mapsection"
      className="px-6 pb-0"
      style={{ background: "#080808" }}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="h-px w-full mb-16"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(56,189,248,0.25), transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 block mb-4">
            Onde estamos
          </span>
          <h2 className="font-serif text-3xl font-bold">
            Nos <span className="gold-glow">Encontre</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-2">{locationLabel}</p>
        </motion.div>

        {isMapConfigured && mapEmbedUrl ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl"
            style={{
              border: "1px solid rgba(56,189,248,0.15)",
              boxShadow: "0 0 40px rgba(56,189,248,0.06)",
            }}
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="380"
              style={{
                border: 0,
                display: "block",
                filter: "grayscale(80%) invert(90%) contrast(90%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização de ${siteName}`}
            />
          </motion.div>
        ) : (
          <p className="text-center text-sm text-zinc-600 pb-12">
            Configure NEXT_PUBLIC_MAP_LAT e NEXT_PUBLIC_MAP_LNG no .env.local
            para exibir o mapa.
          </p>
        )}
      </div>
    </section>
  );
}
