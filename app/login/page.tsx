import { Suspense } from "react"
import LoginForm from "@/components/auth/LoginForm"

function LoginFallback() {
  return (
    <div className="flex items-center gap-3 text-[#888]">
      <span className="size-5 animate-pulse rounded-full bg-[#ffea00]" />
      Carregando...
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginForm />
    </Suspense>
  )
}
