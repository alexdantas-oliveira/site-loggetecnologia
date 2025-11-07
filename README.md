# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/34b3fbd2-d99f-4c11-9b2c-9220c7284342

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/34b3fbd2-d99f-4c11-9b2c-9220c7284342) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/34b3fbd2-d99f-4c11-9b2c-9220c7284342) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

---

## 📌 Checklist de Documentação

- [x] Revisar estrutura e contexto do projeto
- [x] Seguir padrão de markdown do README existente
- [x] Documentar arquitetura e tecnologias
- [x] Incluir guia de desenvolvimento e manutenção
- [x] Validar inserção e formatação

---

## 🧾 Documentação Técnica

### Arquitetura do Projeto

Este projeto adota uma arquitetura modular baseada em React com TypeScript, utilizando o padrão de componentes reutilizáveis e design system consistente. A estrutura segue as melhores práticas de desenvolvimento frontend moderno.

**Principais características:**
- Single Page Application (SPA) com React Router
- Design System baseado em Tailwind CSS e shadcn-ui
- Componentes organizados por responsabilidade
- Hooks customizados para lógica reutilizável
- Estilização com tokens semânticos

### Tecnologias Principais

- **React 18.3.1** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server otimizado
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn-ui** - Componentes UI acessíveis e customizáveis
- **React Router DOM** - Roteamento client-side
- **React Hook Form + Zod** - Gerenciamento e validação de formulários
- **Lucide React** - Ícones SVG otimizados

### Estrutura de Pastas

```
src/
├── assets/              # Imagens, logos e recursos estáticos
├── components/          # Componentes React
│   ├── ui/             # Componentes base do design system
│   ├── Hero.tsx        # Seção Hero da página inicial
│   ├── Solutions.tsx   # Seção de soluções
│   ├── Differentials.tsx # Seção de diferenciais
│   ├── CallToAction.tsx  # Seção de CTA
│   ├── ContactForm.tsx   # Formulário de contato
│   ├── Navbar.tsx      # Barra de navegação
│   └── Footer.tsx      # Rodapé
├── hooks/              # Hooks customizados
│   ├── use-mobile.tsx  # Detecção de dispositivos móveis
│   ├── use-toast.ts    # Sistema de notificações
│   └── useScrollReveal.ts # Animações de scroll
├── lib/                # Utilitários e helpers
│   └── utils.ts        # Funções auxiliares
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página inicial
│   ├── SolucoesEmpresas.tsx # Página de soluções para empresas
│   ├── SolucoesMunicipios.tsx # Página de soluções para municípios
│   └── NotFound.tsx    # Página 404
├── index.css           # Estilos globais e design tokens
├── App.tsx             # Componente principal
└── main.tsx            # Entry point da aplicação
```

### Componentes Principais

#### Layout e Navegação
- **Navbar**: Barra de navegação responsiva com menu mobile
- **Footer**: Rodapé com informações da empresa e links

#### Seções da Página Inicial
- **Hero**: Banner principal com título, descrição e CTAs
- **Solutions**: Cards de soluções oferecidas
- **Differentials**: Diferenciais competitivos da empresa
- **CallToAction**: Seção de conversão com call-to-action
- **ContactForm**: Formulário de captura de leads

#### UI Components (shadcn-ui)
Componentes base customizáveis localizados em `src/components/ui/`:
- Buttons, Cards, Forms, Dialogs
- Toast notifications, Tooltips
- Tabs, Accordions, Modals
- E mais de 50 componentes prontos

### Scripts Disponíveis

```sh
# Iniciar servidor de desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Visualizar build de produção localmente
npm run preview

# Executar linter
npm run lint

# Type checking
npm run type-check
```

### Design System

O projeto utiliza um design system consistente baseado em tokens semânticos:

**Tokens de Cores** (definidos em `src/index.css`):
- `--background` / `--foreground`
- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--muted` / `--muted-foreground`
- `--accent` / `--accent-foreground`
- `--destructive` / `--destructive-foreground`
- `--border` / `--input` / `--ring`

**Uso correto:**
```tsx
// ✅ Correto - usando tokens semânticos
<div className="bg-primary text-primary-foreground">

// ❌ Incorreto - cores hardcoded
<div className="bg-blue-500 text-white">
```

### Guia de Desenvolvimento

#### Criando Novos Componentes

1. Crie o componente em `src/components/` ou `src/components/ui/`
2. Use TypeScript com interfaces bem definidas
3. Aplique tokens semânticos do design system
4. Adicione responsividade com breakpoints Tailwind
5. Documente props e uso no código

```tsx
interface MyComponentProps {
  title: string;
  description?: string;
}

export const MyComponent = ({ title, description }: MyComponentProps) => {
  return (
    <div className="bg-background text-foreground p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
};
```

#### Adicionando Novas Páginas

1. Crie o componente da página em `src/pages/`
2. Adicione a rota em `src/App.tsx`:

```tsx
import { NewPage } from "./pages/NewPage";

// Adicione no Routes
<Route path="/nova-pagina" element={<NewPage />} />
```

#### Customizando Componentes UI

Os componentes shadcn-ui em `src/components/ui/` podem ser customizados:

```tsx
// Exemplo: Adicionando variante ao Button
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        // ... variantes existentes
        custom: "bg-gradient-to-r from-primary to-accent",
      }
    }
  }
)
```

### Boas Práticas

- **Sempre use tokens semânticos** para cores, espaçamentos e tipografia
- **Componentes pequenos e focados** em vez de componentes grandes
- **Hooks customizados** para lógica reutilizável
- **TypeScript** para todas as interfaces e tipos
- **Responsividade mobile-first** com breakpoints Tailwind
- **Acessibilidade** com atributos ARIA e HTML semântico
- **SEO** com meta tags, alt text e structured data

### Performance

O projeto está otimizado para performance:
- Code splitting automático via Vite
- Lazy loading de rotas
- Assets otimizados (WebP para imagens)
- CSS purging em produção
- Bundle size otimizado

### Manutenção

Para manter o projeto atualizado:

```sh
# Verificar dependências desatualizadas
npm outdated

# Atualizar dependências (use com cautela)
npm update

# Verificar vulnerabilidades
npm audit
```

### Suporte e Recursos

- **Documentação Oficial**: [Lovable Docs](https://docs.lovable.dev/)
- **Discord Community**: [Lovable Discord](https://discord.com/channels/1119885301872070706/1280461670979993613)
- **Tailwind Docs**: [tailwindcss.com](https://tailwindcss.com/docs)
- **shadcn-ui Docs**: [ui.shadcn.com](https://ui.shadcn.com/)
- **React Docs**: [react.dev](https://react.dev/)

---

✅ **Validação**: Conteúdo inserido corretamente após a linha 69 do README.md original.
