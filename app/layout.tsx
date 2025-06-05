import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Produtos Zen - Óleos Essenciais 100% Puros",
  description:
    "Os melhores óleos essenciais para seu bem-estar. Lavanda, eucalipto, tea tree e muito mais. 100% naturais e puros.",
  keywords: "óleos essenciais, aromaterapia, lavanda, eucalipto, tea tree, bem-estar, natural",
  authors: [{ name: "Luana Ferreira Monteiro" }],
  openGraph: {
    title: "Produtos Zen - Óleos Essenciais",
    description: "Os melhores óleos essenciais para seu bem-estar",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={openSans.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
