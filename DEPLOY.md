# 🚀 Guia de Deploy para GitHub Pages

## Pré-requisitos

1. Conta no GitHub
2. Node.js instalado (versão 18 ou superior)
3. Git instalado

## Passo a Passo para Deploy

### 1. Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Nome do repositório: \`produtos-zen\`
4. Marque como "Public"
5. Clique em "Create repository"

### 2. Fazer Upload do Código

\`\`\`bash
# Clone ou baixe este projeto
git clone <url-do-projeto>
cd produtos-zen

# Inicialize o git (se necessário)
git init

# Adicione o repositório remoto
git remote add origin https://github.com/SEU-USUARIO/produtos-zen.git

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Initial commit: Produtos Zen website"

# Envie para o GitHub
git push -u origin main
\`\`\`

### 3. Configurar GitHub Pages

1. No seu repositório GitHub, vá em **Settings**
2. Role até **Pages** no menu lateral
3. Em **Source**, selecione **GitHub Actions**
4. O deploy será automático a partir do próximo push

### 4. Acessar o Site

Após o deploy (2-5 minutos), seu site estará disponível em:
\`\`\`
https://SEU-USUARIO.github.io/produtos-zen/
\`\`\`

## 🔧 Configurações Importantes

### Atualizando o basePath

Se o nome do seu repositório for diferente de \`produtos-zen\`, atualize o \`next.config.mjs\`:

\`\`\`javascript
basePath: process.env.NODE_ENV === 'production' ? '/SEU-NOME-REPOSITORIO' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/SEU-NOME-REPOSITORIO' : '',
\`\`\`

### Domínio Customizado (Opcional)

Para usar um domínio próprio:

1. Crie um arquivo \`CNAME\` na pasta \`public/\` com seu domínio:
\`\`\`
www.produtoszen.com
\`\`\`

2. Configure o DNS do seu domínio para apontar para:
\`\`\`
SEU-USUARIO.github.io
\`\`\`

## 🔄 Atualizações

Para atualizar o site:

\`\`\`bash
# Faça suas alterações
git add .
git commit -m "Descrição das alterações"
git push origin main
\`\`\`

O GitHub Actions fará o deploy automaticamente!

## 🐛 Solução de Problemas

### Build Falha
- Verifique se todas as dependências estão no \`package.json\`
- Confirme que não há erros de TypeScript
- Verifique os logs no GitHub Actions

### Imagens Não Carregam
- Confirme que as imagens estão na pasta \`public/images/\`
- Verifique se os caminhos estão corretos no código
- Lembre-se que GitHub Pages é case-sensitive

### Site Não Atualiza
- Aguarde alguns minutos (cache do GitHub)
- Force refresh com Ctrl+F5
- Verifique se o deploy foi bem-sucedido no GitHub Actions

## 📞 Suporte

Se encontrar problemas, verifique:
1. GitHub Actions logs
2. Console do navegador para erros
3. Configurações do repositório

---

✅ **Pronto!** Seu site Produtos Zen estará online no GitHub Pages!
\`\`\`
