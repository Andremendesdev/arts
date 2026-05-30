"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { urlForImage } from "../../sanity/lib/image";

export type PhotoType = {
  _id: string;
  image: any;
  alt: string;
  span?: string;
};

function GalleryItem({
  photo,
  index,
}: {
  photo: PhotoType;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [isActive, setIsActive] = useState(false);
  const imageUrl = photo.image ? urlForImage(photo.image)?.url() : "";

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${photo.span || ""}`}
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
      onClick={() => setIsActive(!isActive)}
    >
      {imageUrl && (
        <motion.img
          src={imageUrl}
          alt={photo.alt}
          className="w-full h-full object-cover absolute inset-0 bg-zinc-800"
          animate={{
            scale: isActive ? 1.12 : 1,
            filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

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

export default function Gallery({ photos = [] }: { photos?: PhotoType[] }) {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  // Fallback se não houver fotos cadastradas ainda
  const displayPhotos = photos.length > 0 ? photos : [];

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
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ height: "auto" }}
        >
          {displayPhotos.map((photo, i) => (
            <GalleryItem key={photo._id || i} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
