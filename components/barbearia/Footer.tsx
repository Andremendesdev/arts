import { address, siteName } from "@/lib/site/env";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(56,189,248,0.08)",
      }}
    >
      <p
        className="font-serif text-2xl font-bold mb-1"
        style={{ color: "#38bdf8" }}
      >
        {siteName.toUpperCase()}
      </p>
      <p className="mx-auto mb-6 max-w-md text-xs leading-relaxed tracking-wide text-zinc-500 sm:text-sm">
        {address}
      </p>
      <div
        className="h-px w-16 mx-auto mb-6"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(56,189,248,0.3), transparent)",
        }}
      />
      <p className="text-zinc-600 text-xs" suppressHydrationWarning>
        © {new Date().getFullYear()} · {siteName}
      </p>
    </footer>
  );
}
