# NLW Pocket in.orbit - Web Demo (Standalone)

Versão de demonstração (Standalone) do projeto NLW Pocket in.orbit. Esta versão foi adaptada para rodar inteiramente no navegador, **sem necessidade de backend**, utilizando **Local Storage** para simular um banco de dados e persistir as metas do usuário.

🔗 **[Acesse o Deploy Online aqui](https://cidvieira.github.io/nlw-pocket-in.orbit/)**

## ✨ Funcionalidades

- **Criação de metas**: Usuários podem criar novas metas (salvas localmente).
- **Registro/Marcação de Metas**: Permite ao usuário marcar (ou desmarcar) uma meta como completa para um dia específico.
- **Visualização de progresso semanal**: O usuário pode visualizar o progresso de suas metas em um calendário/sumário semanal.
- **Persistência de Dados**: Todos os dados são salvos no navegador do usuário e permanecem disponíveis mesmo após recarregar a página.

## 🎨 Visualização

<table>
  <tr>
    <td align="center"><strong>Tela Inicial - Cadastrar Metas</strong></td>
    <td align="center"><strong>Registro e Visualização de Metas</strong></td>
    <td align="center"><strong>Formulário de Cadastro de Metas</strong></td>
  </tr>
  <tr>
    <td><img src="/assets/nlw-pocket-inOrbit-1.png" alt="Tela Inicial - Cadastrar Metas" width="400"/></td>
    <td><img src="/assets/nlw-pocket-inOrbit-2.png" alt="Registro e Visualização de Metas" width="400"/></td>
    <td><img src="/assets/nlw-pocket-inOrbit-3.png" alt="Formulário de Cadastro de Metas" width="400"/></td>
  </tr>
</table>

## 🚀 Tecnologias

- **React 19.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.9** - Superset JavaScript com tipagem estática
- **Vite 7.0** - Build tool e servidor de desenvolvimento
- **Biome 2.3** - Formatar e analisar (linting) códigos de projetos web
- **TailwindCSS 4.1** - Framework CSS utility-first
- **TanStack React Query 5.8** - Gerenciamento de estado servidor e cache
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Biblioteca de ícones
- **Day.js** - Formatar datas e horas em navegadores modernos
- **React Hook Form e HookForm Resolvers** - Formulário de alto desempenho
- **Zod** - Schema validation
- **Local Storage API** - Utilizado para simular o banco de dados (substituindo PostgreSQL)
- **NanoID** - Geração de IDs únicos no frontend
- **GitHub Pages** - Hospedagem estática

## 📂 Arquitetura da Demo

Diferente do projeto original, esta pasta não consome a API externa.
- **Mocking Strategy**: As chamadas HTTP originais (`src/http`) foram substituídas por funções que leem e escrevem diretamente no `localStorage` do navegador.
- **Adapter Pattern**: A estrutura das funções e os tipos de dados (Zod Schemas) foram mantidos idênticos aos da API real, garantindo que os componentes visuais não precisassem de alteração.

## ⚙️ Como Rodar Localmente

Como esta é uma versão standalone, você não precisa de Docker ou backend rodando.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Entre na pasta da demo:
   ```bash
   cd demo   
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação em `http://localhost:5173`

## 🌍 Deploy (GitHub Pages)

Este projeto está configurado para deploy automático no GitHub Pages.

Para atualizar a versão online:

1. Certifique-se de que todas as alterações estão commitadas.

2. Execute o comando de deploy:

   ```bash
   npm run deploy
   ```
   Isso irá gerar o build de produção e enviá-lo para a branch `gh-pages`

## 🛠️ Estrutura do Projeto

```
src/
├── components/      # Componentes reutilizáveis
├── http/            # Lógica de Mock e persistência no LocalStorage
│   ├── storage.ts   # Gerenciador do "Banco de Dados" local
│   └── ...          # Funções adaptadas (create-goal, get-summary, etc.)
└── app.tsx          # Componente raiz 
```