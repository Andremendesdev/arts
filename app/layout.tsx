import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { DEFAULT_SITE_NAME, siteName } from "@/lib/site/env";

const displayName = siteName || DEFAULT_SITE_NAME;

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${displayName} | Barbearia`,

  description:
    `${displayName}. Cortes modernos, barba e estilo com qualidade. Atendimento de respeito, sem frescura.`,

  keywords: [
    "barbearia",
    "corte de cabelo",
    "barba",
    "estilo masculino",
    "barbearia premium",
    "cuidados masculinos",
  ],

  authors: [{ name: displayName }],

  openGraph: {
    title: `${displayName} | Barbearia`,
    description: "Descubra a experiência da nossa barbearia.",
    type: "website",
    locale: "pt_BR",
  },

  // remove qualquer favicon padrão
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans antialiased">
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
