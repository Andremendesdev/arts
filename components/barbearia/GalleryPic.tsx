"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { M } from "./safe-motion";
import {
  sectionTransition,
  sectionViewport,
} from "./sectionAnimations";
import { urlForImage } from "../../sanity/lib/image";
import {
  galleryImageClass,
  galleryImageMotion,
  galleryImageTransition,
  galleryItemSurfaceClass,
  galleryModalImageClass,
  galleryModalItemSurfaceClass,
  galleryOverlayMotion,
  galleryOverlayTransition,
} from "./galleryStyles";

export type CanalhaPhotoType = {
  _id: string;
  image: any;
  alt: string;
};

const GALLERYPIC_PREVIEW_LIMIT = 6;

function GalleryItem({
  photo,
  index,
}: {
  photo: CanalhaPhotoType;
  index: number;
}) {
  const [isActive, setIsActive] = useState(false);
  const imageUrl = photo.image ? urlForImage(photo.image)?.url() : "";

  return (
    <M.div
      className={galleryItemSurfaceClass}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={sectionViewport}
      transition={sectionTransition(index * 0.1)}
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      {imageUrl && (
        <M.img
          src={imageUrl}
          alt={photo.alt}
          className={galleryImageClass}
          animate={
            isActive ? galleryImageMotion.active : galleryImageMotion.rest
          }
          transition={galleryImageTransition}
        />
      )}
      <M.div
        className="absolute inset-0"
        animate={
          isActive ? galleryOverlayMotion.active : galleryOverlayMotion.rest
        }
        transition={galleryOverlayTransition}
      />
      <M.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isActive
            ? "inset 0 0 0 2px rgba(56,189,248,0.5)"
            : "inset 0 0 0 0px rgba(56,189,248,0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </M.div>
  );
}

export default function GalleryPic({ photos = [] }: { photos?: CanalhaPhotoType[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Travar o scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const displayedPhotos = photos.slice(0, GALLERYPIC_PREVIEW_LIMIT);
  const hasMorePhotos = photos.length > GALLERYPIC_PREVIEW_LIMIT;

  return (
    <section
      id="clube-dos-canalhas"
      className="py-28 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-5xl mx-auto">
        <M.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition()}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            Estilo Vai{" "}
            <span
              style={{
                color: "#38bdf8",
                textShadow: "0 0 10px rgba(56,189,248,0.3)",
              }}
            >
              Além do Corte
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md px-1 text-xs leading-relaxed text-zinc-500 sm:max-w-xl sm:text-sm md:max-w-2xl md:text-base">
            Complete seu visual com peças premium e acessórios selecionados.
            Marcas renomadas, caimento impecável e identidade própria.
          </p>
          <div
            className="mx-auto mt-6 h-px w-16"
            style={{
              background:
                "linear-gradient(to right, transparent, #38bdf8, transparent)",
            }}
          />
        </M.div>

        {photos.length === 0 ? (
          <M.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={sectionViewport}
            transition={sectionTransition()}
            className="text-center py-20 border border-zinc-800 rounded-2xl bg-zinc-900/30"
          >
            <p className="text-zinc-400 text-lg sm:text-xl uppercase tracking-widest font-serif">
              Em breve fotos dos Canalhas
            </p>
          </M.div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {displayedPhotos.map((photo, i) => (
                <GalleryItem key={photo._id || i} photo={photo} index={i} />
              ))}
            </div>

            {hasMorePhotos && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-3 rounded-full border border-[#38bdf8] text-[#38bdf8] uppercase tracking-widest text-xs font-bold hover:bg-[#38bdf8] hover:text-white transition-all duration-300"
                >
                  Ver Mais
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal / Menu tela inteira com as fotos */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#080808] flex flex-col"
          >
            {/* Header do Modal */}
            <div className="p-6 flex justify-between items-center bg-[#0a0a0a] border-b border-zinc-800 sticky top-0 z-10">
              <h3 className="font-serif text-2xl uppercase tracking-wide text-white">
                Clube dos <span className="text-[#38bdf8]">Canalhas</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-zinc-400 hover:text-[#38bdf8] transition-colors"
              >
                <X size={28} />
              </button>
            </div>
            
            {/* Grid de fotos no modal: 3 colunas desktop, 1 coluna mobile */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {photos.map((photo, i) => (
                    <div
                      key={photo._id || i}
                      className={`group ${galleryModalItemSurfaceClass}`}
                    >
                      {photo.image && (
                        <img
                          src={urlForImage(photo.image)?.url() || ""}
                          alt={photo.alt}
                          className={galleryModalImageClass}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-0 rounded-2xl pointer-events-none box-border border-2 border-transparent group-hover:border-[#38bdf8]/50 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

