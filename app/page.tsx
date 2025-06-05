import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#dba89d] to-[#dba89d] min-h-screen flex flex-col justify-center items-center relative">
      <div className="flex flex-col md:flex-row w-full max-w-[600px] bg-white shadow-lg mt-4 mx-4 md:mx-0">
        <div className="flex flex-col justify-center px-8 md:px-12 py-12 md:py-16 w-full md:w-3/5 relative">
          <h2 className="text-2xl text-gray-900 font-normal">Produtos Zen</h2>
          <p className="text-gray-400 mt-2 text-lg font-light">Os melhores Óleos Essenciais!</p>
          <Link href="/portfolio" className="mt-6 text-sm text-gray-500 hover:text-gray-700 underline">
            Ver nossos produtos
          </Link>
          <div className="absolute -top-5 left-1/3 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-white hidden md:block"></div>
        </div>
        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
          <Image
            src="/images/hero-image.jpg"
            alt="Óleos Essenciais Produtos Zen - Frascos de âmbar com lavanda e ervas naturais"
            className="object-cover h-full w-full"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </div>
  )
}
