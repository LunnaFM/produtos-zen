import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="flex justify-center space-x-4 md:space-x-10 text-white text-lg md:text-xl py-6">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/portfolio" className="hover:underline">
        Portfólio
      </Link>
      <Link href="/quem-somos" className="hover:underline">
        Quem Somos
      </Link>
      <Link href="/trabalhe-conosco" className="hover:underline">
        Trabalhe Conosco
      </Link>
      <Link href="/mais-sobre-produto" className="hover:underline">
        Mais sobre o Produto
      </Link>
    </nav>
  )
}
