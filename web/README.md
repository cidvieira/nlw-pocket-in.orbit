# NLW Pocket in.orbit - Web

Interface web para o projeto NLW Pocket, uma plataforma para criar, registrar e visualizar metas.

## ✨ Funcionalidades

- **Criação de metas**: Usuários podem criar novas metas.
- **Registro/Marcação de Metas**: Permite ao usuário marcar (ou desmarcar) uma meta como completa para um dia específico.
- **Visualização de progresso semanal**: O usuário pode visualizar o progresso de suas metas em um calendário/sumário semanal.

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

## 📂 Padrões de Projeto

- **Component-based Architecture** - Arquitetura baseada em componentes React
- **Server State Management** - Gerenciamento de estado servidor com React Query
- **Variant-based Components** - Componentes com variantes usando CVA
- **Composition Pattern** - Padrão de composição com Radix Slot
- **Path Aliasing** - Alias de caminhos (`@/` aponta para `src/`)

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

### Backend

O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.

## 🛠️ Estrutura do Projeto

```
src/
├── components/   # Componentes reutilizáveis
├── components/ui/   # Componentes primitivos (Radix/Tailwind)
├── http/            # Funções de requisição e query hooks
└── app.tsx          # Componente raiz
```