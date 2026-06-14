"use client";

import { M } from "./safe-motion";
import {
  sectionTransition,
  sectionViewport,
} from "./sectionAnimations";
import {
  address,
  getMapEmbedUrl,
  isMapAvailable,
  siteName,
} from "@/lib/site/env";

export default function MapSection() {
  const mapEmbedUrl = getMapEmbedUrl();

  return (
    <section
      id="mapsection"
      className="px-6 pb-0"
      style={{ background: "#080808" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="h-px w-full mb-16"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(56,189,248,0.25), transparent)",
          }}
        />

        <M.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition()}
          className="text-center mb-10"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 block mb-4">
            Onde estamos
          </span>
          <h2 className="font-serif text-3xl font-bold">
            Nos <span className="gold-glow">Encontre</span>
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
            {address}
          </p>
        </M.div>

        {isMapAvailable && mapEmbedUrl ? (
          <M.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={sectionViewport}
            transition={sectionTransition(0.15)}
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
          </M.div>
        ) : (
          <p className="text-center text-sm text-zinc-600 pb-12">
            Endereço indisponível no momento.
          </p>
        )}
      </div>
    </section>
  );
}
