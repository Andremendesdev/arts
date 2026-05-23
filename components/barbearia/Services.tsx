"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const WHATSAPP_BASE = "https://wa.me/5514997216010?text="

const services = [
  {
    id: "corte",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7 7-7-7 7-4.5-4.5L3 3m11 11L7 7" />
        <circle cx="6.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
    title: "Corte Clássico",
    description:
      "Corte na tesoura ou máquina, com acabamento impecável, finalização com pomada.",
    price: "R$ 40",
    whatsappMsg:
      "Olá! Gostaria de saber se o serviço de Corte Clássico está disponível hoje na Barbearia Na Garage.",
  },
  {
    id: "barba",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
    title: "Barba Terapia",
    description:
      "Alinhamento dos fios com produtos premium para hidratar e nutrir a pele.",
    price: "R$ 40",
    whatsappMsg:
      "Olá! Gostaria de saber se o serviço de Barba Terapia está disponível hoje na Barbearia Na Garage.",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const handleClick = () => {
    const url = `${WHATSAPP_BASE}${encodeURIComponent(service.whatsappMsg)}`
    window.open(url, "_blank")
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className="group relative rounded-2xl border border-zinc-800 bg-card p-8 cursor-pointer transition-all duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{ background: "#111111" }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={(e) => {
        ;(e.target as HTMLElement)
          .closest("article")
          ?.style.setProperty("border-color", "#ffea00")
        ;(e.target as HTMLElement)
          .closest("article")
          ?.style.setProperty("box-shadow", "0 16px 48px rgba(255,234,0,0.12)")
      }}
      onHoverEnd={(e) => {
        ;(e.target as HTMLElement)
          .closest("article")
          ?.style.setProperty("border-color", "rgb(39 39 42)")
        ;(e.target as HTMLElement)
          .closest("article")
          ?.style.setProperty("box-shadow", "none")
      }}
    >
      {/* Icon */}
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300"
        style={{ background: "rgba(255,234,0,0.08)", color: "#ffea00" }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="font-serif text-2xl font-bold mb-3"
        style={{ color: "#ffea00" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-8">{service.description}</p>

      {/* Footer row */}
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-white">{service.price}</span>
        <span
          className="text-xs tracking-widest uppercase transition-all duration-300"
          style={{ color: "#ffea00", opacity: 0.7 }}
        >
          Consultar via WhatsApp →
        </span>
      </div>
    </motion.article>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" })

  return (
    <section className="py-28 px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 32 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 block mb-4">
            O que oferecemos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-wide">
            Nossos{" "}
            <span className="gold-glow">Serviços</span>
          </h2>
          <div
            className="mx-auto mt-6 h-px w-16"
            style={{ background: "linear-gradient(to right, transparent, #ffea00, transparent)" }}
          />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
