export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,234,0,0.08)",
      }}
    >
      <p
        className="font-serif text-2xl font-bold mb-1"
        style={{ color: "#ffea00" }}
      >
        NA GARAGE
      </p>
      <p className="text-zinc-600 text-xs tracking-widest uppercase mb-6">
        Barbearia · Piraju, SP
      </p>
      <div
        className="h-px w-16 mx-auto mb-6"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,234,0,0.3), transparent)",
        }}
      />
      <p className="text-zinc-600 text-xs">
        Since 2019 · Pior Barbearia de Piraju.
      </p>
    </footer>
  );
}
