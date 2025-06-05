import Image from "next/image"

export default function Portfolio() {
  // Array of essential oil products with real images
  const products = [
    {
      src: "/images/lavanda.png",
      alt: "Óleo Essencial de Lavanda",
      name: "Óleo de Lavanda",
      description: "Relaxante e calmante, ideal para reduzir o estresse e melhorar o sono.",
    },
    {
      src: "/images/eucalipto.png",
      alt: "Óleo Essencial de Eucalipto",
      name: "Óleo de Eucalipto",
      description: "Refrescante e revigorante, ajuda a limpar as vias respiratórias.",
    },
    {
      src: "/images/tea-tree.png",
      alt: "Óleo Essencial de Tea Tree",
      name: "Óleo de Tea Tree",
      description: "Antisséptico natural, excelente para problemas de pele.",
    },
    {
      src: "/images/hortela-pimenta.png",
      alt: "Óleo Essencial de Hortelã-Pimenta",
      name: "Óleo de Hortelã-Pimenta",
      description: "Energizante e refrescante, alivia dores de cabeça e melhora a concentração.",
    },
    {
      src: "/images/limao.png",
      alt: "Óleo Essencial de Limão",
      name: "Óleo de Limão",
      description: "Purificante e revigorante, eleva o humor e limpa o ambiente.",
    },
    {
      src: "/images/laranja.png",
      alt: "Óleo Essencial de Laranja",
      name: "Óleo de Laranja",
      description: "Alegre e estimulante, reduz a ansiedade e promove bem-estar.",
    },
    {
      src: "/images/alecrim.png",
      alt: "Óleo Essencial de Alecrim",
      name: "Óleo de Alecrim",
      description: "Estimulante mental, melhora a memória e a clareza mental.",
    },
    {
      src: "/images/camomila.png",
      alt: "Óleo Essencial de Camomila",
      name: "Óleo de Camomila",
      description: "Suave e calmante, ideal para relaxamento e sono tranquilo.",
    },
    {
      src: "/images/ylang-ylang.png",
      alt: "Óleo Essencial de Ylang Ylang",
      name: "Óleo de Ylang Ylang",
      description: "Floral e exótico, reduz a tensão e promove sentimentos positivos.",
    },
    {
      src: "/images/bergamota.png",
      alt: "Óleo Essencial de Bergamota",
      name: "Óleo de Bergamota",
      description: "Cítrico e refrescante, equilibra as emoções e reduz o estresse.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6b6a9] to-[#dca89a] flex flex-col items-center pt-20">
      <section className="bg-white max-w-6xl w-[90vw] md:w-[80vw] lg:w-[70vw] p-6 md:p-10">
        <h2 className="text-3xl font-normal text-gray-800 mb-6">Portfólio de Produtos</h2>
        <p className="text-gray-500 mb-10 leading-relaxed text-lg">
          Experimente o poder da natureza com nossa seleção premium de óleos essenciais 100% puros. Cuidadosamente
          extraídos de botânicos ao redor do mundo, cada óleo oferece benefícios únicos para a mente, o corpo e o lar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.src || "/placeholder.svg"}
                  alt={product.alt}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-sm font-medium leading-relaxed">{product.description}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-amber-600 font-medium">100% Natural</span>
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-amber-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L8 6h8l-4 4V2z"></path>
                      <path d="M8 12l-4 4h8l4-4H8z"></path>
                      <path d="M16 12l-4 4v4l4-4v-4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-amber-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4"></path>
                <path d="M20 12v3c0 1.1-.9 2-2 2h-4"></path>
                <path d="M15 7v5"></path>
                <path d="M9 7v5"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">✨ Qualidade Premium</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Todos os nossos óleos essenciais são 100% puros, extraídos através de destilação a vapor ou prensagem a
                frio, mantendo todas as propriedades terapêuticas naturais. Cada frasco é cuidadosamente testado para
                garantir a máxima qualidade e potência.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
