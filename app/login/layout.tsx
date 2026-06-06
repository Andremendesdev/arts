import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | Na Garage",
  description: "Acesso administrativo",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4">
      {children}
    </div>
  )
}
