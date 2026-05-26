"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const photos = [
  {
    src: "/interior.jpeg",
    alt: "Interior da barbearia",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: "/cadeira.jpeg", alt: "Cadeira da barbearia", span: "" },
  { src: "/fachada.jpeg", alt: "Fachada da Na Garage Barbearia", span: "" },
  { src: "/cafe.jpeg", alt: "Café da barbearia", span: "md:col-span-2" },
];

function GalleryItem({
  photo,
  index,
}: {
  photo: (typeof photos)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Usamos isActive para lidar tanto com o hover do mouse quanto com o clique (mobile)
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      ref={ref}
      // O 'overflow-hidden' garante que a foto cresça internamente sem vazar ou aumentar a div
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${photo.span}`}
      style={{ minHeight: 280 }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)} // Adicionado para funcionar perfeitamente ao clicar
    >
      <motion.img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover absolute inset-0"
        animate={{
          scale: isActive ? 1.12 : 1, // Aumenta a foto internamente
          filter: isActive ? "grayscale(0%)" : "grayscale(100%)", // Tira o cinza e volta a cor original
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay Escurecido */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isActive
            ? "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)"
            : "rgba(10,10,10,0.3)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Borda dourada ativada no hover/clique */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isActive
            ? "inset 0 0 0 2px rgba(255,234,0,0.5)"
            : "inset 0 0 0 0px rgba(255,234,0,0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function Gallery() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="gallery"
      className="py-28 px-6"
      style={{ background: "#080808" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 32 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 block mb-4">
            Conheça o espaço
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white">
            A{" "}
            <span
              style={{
                color: "#ffea00",
                textShadow: "0 0 10px rgba(255,234,0,0.3)",
              }}
            >
              Barbearia
            </span>
          </h2>
          <div
            className="mx-auto mt-6 h-px w-16"
            style={{
              background:
                "linear-gradient(to right, transparent, #ffea00, transparent)",
            }}
          />
        </motion.div>

        {/* Masonry-style grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4"
          style={{ height: "auto" }}
        >
          {photos.map((photo, i) => (
            <GalleryItem key={photo.src} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
