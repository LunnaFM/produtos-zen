// Guide for setting up real images in your project

console.log(`
🌿 GUIA PARA ADICIONAR IMAGENS REAIS - PRODUTOS ZEN

📁 ESTRUTURA DE PASTAS:
Crie a seguinte estrutura no seu projeto:

public/
  images/
    lavender-oil.jpg
    eucalyptus-oil.jpg
    tea-tree-oil.jpg
    peppermint-oil.jpg
    lemon-oil.jpg
    orange-oil.jpg
    rosemary-oil.jpg
    chamomile-oil.jpg
    ylang-ylang-oil.jpg
    bergamot-oil.jpg
    hero-image.jpg

🔍 ONDE ENCONTRAR IMAGENS GRATUITAS:
1. Unsplash.com - Pesquise por "essential oils"
2. Pexels.com - Pesquise por "aromatherapy"
3. Pixabay.com - Pesquise por "natural oils"

📝 TERMOS DE BUSCA RECOMENDADOS:
- "lavender essential oil bottle"
- "eucalyptus oil aromatherapy"
- "tea tree oil natural"
- "peppermint oil bottle"
- "citrus essential oils"
- "rosemary oil herbs"
- "chamomile oil flowers"
- "ylang ylang essential oil"
- "bergamot oil citrus"

💻 COMO ATUALIZAR O CÓDIGO:
Depois de baixar as imagens, atualize o array 'products' em app/portfolio/page.tsx:

const products = [
  {
    src: "/images/lavender-oil.jpg",
    alt: "Óleo Essencial de Lavanda",
    name: "Óleo de Lavanda",
  },
  // ... continue para os outros produtos
]

E atualize a imagem principal em app/page.tsx:

<Image
  src="/images/hero-image.jpg"
  alt="Óleo Essencial"
  // ... outras props
/>

✅ DICAS IMPORTANTES:
- Use imagens com pelo menos 300x300 pixels
- Prefira formato JPG para fotos
- Otimize as imagens para web (máximo 500KB cada)
- Mantenha nomes de arquivo consistentes
- Verifique se todas as imagens têm boa qualidade

🚀 RESULTADO:
Após seguir estes passos, seu site terá imagens profissionais de óleos essenciais!
`)
