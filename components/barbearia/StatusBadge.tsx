"use client";

import { useEffect, useState } from "react";

interface StatusInfo {
  open: boolean;
  label: string;
}

function getStatus(): StatusInfo {
  const now = new Date();
  const day = now.getDay(); // 0=Dom, 1=Seg...6=Sab
  const hour = now.getHours();

  const open =
    (day >= 1 && day <= 5 && hour >= 8 && hour < 19) ||
    (day === 6 && hour >= 8 && hour < 16);

  return {
    open,
    label: open ? "Aberto" : "Fechado",
  };
}

interface StatusBadgeProps {
  /** Quando true, renderiza sem posicionamento absolute (para uso inline no mobile) */
  inline?: boolean;
}

export default function StatusBadge({ inline = false }: StatusBadgeProps) {
  const [status, setStatus] = useState<StatusInfo>({
    open: false,
    label: "Verificando...",
  });

  useEffect(() => {
    setStatus(getStatus());
    const interval = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const positionClass = inline
    ? "rounded-xl border px-3 py-2 backdrop-blur-md"
    : "absolute top-4 right-4 md:top-6 md:right-6 z-20 rounded-xl border px-4 py-3 backdrop-blur-md";

  return (
    <div
      className={`${positionClass} transition-all duration-500`}
      style={{
        borderColor: status.open ? "#4ade80" : "#f87171",
        boxShadow: status.open
          ? "0 0 16px rgba(34,197,94,0.25)"
          : "0 0 16px rgba(248,113,113,0.25)",
        background: "rgba(10,10,10,0.75)",
      }}
    >
      <span
        className="block text-[9px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: status.open ? "#4ade80" : "#f87171" }}
      >
        {status.label}
      </span>
    </div>
  );
}
