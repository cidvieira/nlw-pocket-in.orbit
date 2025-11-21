# NLW Pocket in.orbit - Server

Projeto desenvolvido para gerenciamento de metas, onde o usuário cadastra, registra e visualiza suas metas semanais e pode controlar em tempo real.

## 🚀 Tecnologias

- **Node.js** com TypeScript nativo (experimental strip types)
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL** com extensão **pgvector** para vetores
- **Drizzle ORM** - Type-safe database operations
- **Zod** - Schema validation
- **Docker** - Containerização do banco de dados
- **Biome** - Linting e formatação de código
- **Cuid2** - Gerador de identificadores únicos (IDs)
- **Day.js** - Formatar datas e horas em navegadores modernos
- **Fastify Type Provider Zod** - Plugin para o framework web Fastify

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular com:

- **Separação de responsabilidades** entre rotas, schemas e conexão com banco
- **Validação de schemas** com Zod para type safety
- **ORM type-safe** com Drizzle para operações de banco de dados
- **Validação de variáveis de ambiente** centralizadas

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js (versão com suporte a `--experimental-strip-types`)
- Docker e Docker Compose

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd server
```

### 2. Configure o banco de dados

```bash
docker-compose up -d
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/inorbit
```

### 4. Instale as dependências

```bash
npm install
```

### 5. Execute as migrações do banco

```bash
npx drizzle-kit migrate
```

### 6. (Opcional) Popule o banco com dados de exemplo

```bash
npm run db:seed
```

### 7. Execute o projeto

**Desenvolvimento:**

```bash
npm run dev
```

**Produção:**

```bash
npm start
```

## 📚 Scripts Disponíveis

- `npm run dev` - Executa o servidor em modo de desenvolvimento com hot reload
- `npm start` - Executa o servidor em modo de produção
- `npm run db:seed` - Popula o banco de dados com dados de exemplo

## 🌐 Endpoints

A API estará disponível em `http://localhost:3333`

- `POST /goals` - Cadastrar meta
- `POST /completions` - Registra meta completa
- `GET /pending-goals` - Listar metas pendentes
- `GET /summary` - Listar resumo de metas da semana

---