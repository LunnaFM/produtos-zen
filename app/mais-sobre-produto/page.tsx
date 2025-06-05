export default function MaisSobreProduto() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2d6c3] to-[#dba89d] flex flex-col items-center pt-20">
      <main className="max-w-3xl mx-auto bg-white p-8 mt-8 w-[90%]">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Benefícios dos Óleos Essenciais</h1>
        <p className="text-gray-600 leading-relaxed">
          Os óleos essenciais são substâncias naturais altamente concentradas extraídas de plantas. Eles possuem
          propriedades terapêuticas reconhecidas por seu poder de estimular a mente, equilibrar emoções e cuidar do
          corpo.
          <br />
          <br />
          Entre seus principais benefícios estão:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>Redução do estresse e da ansiedade</li>
          <li>Melhora da qualidade do sono</li>
          <li>Alívio de dores musculares</li>
          <li>Estimulação do sistema imunológico</li>
          <li>Ação antisséptica e anti-inflamatória</li>
        </ul>
      </main>
    </div>
  )
}
