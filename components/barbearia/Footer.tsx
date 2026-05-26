export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,234,0,0.08)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-[22px] h-[22px] flex top-0"
      >
        <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1S160.5 371.2 224.1 371.2 339.2 319.7 339.2 256.1 287.7 141 224.1 141zm0 189.6c-41.1 0-74.5-33.4-74.5-74.5s33.4-74.5 74.5-74.5 74.5 33.4 74.5 74.5-33.4 74.5-74.5 74.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9zM398.8 80c-22.1-22.1-51.3-34.2-82.6-34.2H131.8c-64.4 0-116.8 52.4-116.8 116.8v184.3c0 31.3 12.2 60.5 34.2 82.6 22.1 22.1 51.3 34.2 82.6 34.2h184.3c64.4 0 116.8-52.4 116.8-116.8V162.6c0-31.3-12.1-60.5-34.1-82.6zM398 346.9c0 45.2-36.7 81.9-81.9 81.9H131.8c-21.9 0-42.4-8.5-57.9-24-15.5-15.5-24-36-24-57.9V162.6c0-45.2 36.7-81.9 81.9-81.9h184.3c21.9 0 42.4 8.5 57.9 24 15.5 15.5 24 36 24 57.9v184.3z" />
      </svg>
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
        @ Since 2019 · Pior Barbearia de Piraju.
      </p>
    </footer>
  );
}
