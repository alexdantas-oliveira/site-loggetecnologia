# Guia de Contribuição - Logge Tecnologia

## 🚀 Como Contribuir

Este guia fornece diretrizes para contribuir com o projeto da Logge Tecnologia de forma eficiente e consistente.

## 📋 Pré-requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git configurado
- Editor com suporte TypeScript (VS Code recomendado)

## 🔧 Setup do Ambiente

```bash
# 1. Clone o repositório
git clone [repository-url]
cd logge-tecnologia

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Acesse http://localhost:8080
```

## 📝 Padrões de Código

### TypeScript

```typescript
// ✅ Bom: Interface definida
interface ComponentProps {
  title: string;
  isVisible?: boolean;
  onAction: () => void;
}

// ✅ Bom: Componente tipado
const Component: React.FC<ComponentProps> = ({ title, isVisible = false, onAction }) => {
  return <div>{title}</div>;
};

// ❌ Evitar: any types
const Component = (props: any) => { ... };
```

### Naming Conventions

```typescript
// Componentes: PascalCase
const HeroSection = () => { ... };

// Hooks: camelCase com prefixo 'use'
const useScrollReveal = () => { ... };

// Variáveis e funções: camelCase
const isVisible = true;
const handleClick = () => { ... };

// Constantes: SCREAMING_SNAKE_CASE
const API_ENDPOINT = 'https://api.example.com';

// Arquivos: kebab-case ou PascalCase para componentes
hero-section.tsx
HeroSection.tsx
```

### Estrutura de Componentes

```typescript
// Estrutura padrão recomendada
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
}

const ComponentName: React.FC<ComponentNameProps> = ({ 
  className, 
  children,
  ...props 
}) => {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {children}
    </div>
  );
};

export default ComponentName;
```

### CSS e Styling

```typescript
// ✅ Bom: Use tokens do design system
className="bg-logge-light-blue text-primary-foreground"

// ✅ Bom: Use classes do sistema
className="section-title gradient-bg card-hover"

// ❌ Evitar: Cores hardcoded
className="bg-blue-500 text-white"

// ❌ Evitar: Styles inline desnecessários
style={{ backgroundColor: '#1EAEDB' }}
```

## 🎨 Design System

### Tokens Obrigatórios

```css
/* Use apenas estes tokens de cor */
--logge-light-blue: #1EAEDB
--logge-dark-blue: #0E76A8
--logge-gray-100: #F6F6F7
--logge-gray-400: #403E43

/* Ou variáveis semânticas */
var(--primary)
var(--secondary)
var(--background)
```

### Classes Utilitárias

```css
/* Classes obrigatórias para consistência */
.section-title     /* Títulos de seção */
.section-subtitle  /* Subtítulos de seção */
.btn-primary       /* Botão primário */
.btn-secondary     /* Botão secundário */
.card-hover        /* Efeito hover em cards */
.scroll-reveal     /* Animação de scroll */
```

## 📂 Organização de Arquivos

### Estrutura de Componentes

```
src/components/
├── ui/              # Componentes base (shadcn/ui)
│   ├── button.tsx
│   ├── input.tsx
│   └── ...
├── layout/          # Componentes de layout
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── sections/        # Seções da landing page
│   ├── Hero.tsx
│   ├── Solutions.tsx
│   └── ...
└── forms/           # Componentes de formulário
    └── ContactForm.tsx
```

### Hooks Customizados

```typescript
// src/hooks/useFeatureName.ts
import { useState, useEffect } from 'react';

export const useFeatureName = (param?: string) => {
  const [state, setState] = useState(false);
  
  useEffect(() => {
    // Logic here
  }, [param]);
  
  return { state, setState };
};
```

## 🔄 Fluxo de Trabalho

### 1. Branches

```bash
# Feature branch
git checkout -b feature/nova-funcionalidade

# Bug fix
git checkout -b fix/correcao-importante

# Hotfix
git checkout -b hotfix/correcao-critica
```

### 2. Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Features
git commit -m "feat: adiciona animação scroll reveal ao hero"

# Bug fixes
git commit -m "fix: corrige responsividade do formulário mobile"

# Documentation
git commit -m "docs: atualiza documentação de componentes"

# Styles
git commit -m "style: ajusta espaçamento dos cards de soluções"

# Refactoring
git commit -m "refactor: extrai hook useScrollReveal"

# Performance
git commit -m "perf: otimiza carregamento de imagens"
```

### 3. Pull Requests

#### Template de PR

```markdown
## 📋 Descrição
Breve descrição das mudanças implementadas.

## 🔧 Tipo de Mudança
- [ ] Bug fix (correção que resolve um problema)
- [ ] Nova feature (mudança que adiciona funcionalidade)
- [ ] Breaking change (mudança que quebra compatibilidade)
- [ ] Documentação

## ✅ Checklist
- [ ] Código segue os padrões estabelecidos
- [ ] Componentes são responsivos
- [ ] Tokens do design system foram utilizados
- [ ] Código foi testado em diferentes dispositivos
- [ ] Documentação foi atualizada (se necessário)

## 📱 Screenshots
[Adicione screenshots das mudanças visuais]

## 🧪 Como Testar
1. Execute `npm run dev`
2. Navegue para [seção/página]
3. Verifique [comportamento específico]
```

## 🧪 Testes

### Testes Manuais Obrigatórios

1. **Responsividade**:
   ```bash
   # Teste em diferentes tamanhos
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1024px+)
   ```

2. **Navegação**:
   ```bash
   # Teste todos os links
   - Menu desktop
   - Menu mobile
   - Smooth scroll
   - CTAs funcionais
   ```

3. **Formulários**:
   ```bash
   # Teste validações
   - Campos obrigatórios
   - Formato de email
   - Mensagens de erro
   - Submit success
   ```

### Comandos de Verificação

```bash
# Lint do código
npm run lint

# Build de produção
npm run build

# Preview da build
npm run preview
```

## 🚨 Code Review

### Checklist do Reviewer

- [ ] **Funcionalidade**: A feature funciona conforme especificado?
- [ ] **Design**: Segue o design system estabelecido?
- [ ] **Performance**: Não introduz problemas de performance?
- [ ] **Responsividade**: Funciona em todos os breakpoints?
- [ ] **Acessibilidade**: Mantém padrões de acessibilidade?
- [ ] **Código**: Está limpo, legível e bem estruturado?
- [ ] **TypeScript**: Tipagem adequada sem `any`?

### Feedback Construtivo

```markdown
# ✅ Bom feedback
"Sugiro extrair essa lógica para um hook customizado para melhor reutilização"

# ❌ Feedback não construtivo
"Esse código está ruim"
```

## 🎯 Boas Práticas

### Performance

```typescript
// ✅ Bom: Lazy loading de componentes
const ContactForm = lazy(() => import('./ContactForm'));

// ✅ Bom: useMemo para cálculos pesados
const expensiveValue = useMemo(() => 
  heavyCalculation(data), [data]
);

// ✅ Bom: useCallback para funções
const handleClick = useCallback(() => {
  // logic
}, [dependency]);
```

### Acessibilidade

```typescript
// ✅ Bom: Sempre adicione alt text
<img src="hero.jpg" alt="Equipe Logge trabalhando em soluções" />

// ✅ Bom: Use labels apropriados
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ✅ Bom: Estados de foco visíveis
className="focus:outline-none focus:ring-2 focus:ring-primary"
```

### SEO

```typescript
// ✅ Bom: Meta tags otimizadas
<title>Logge Tecnologia - Consultoria em Tecnologia</title>
<meta name="description" content="Especialistas em soluções tecnológicas..." />

// ✅ Bom: Estrutura semântica
<main>
  <section>
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
  </section>
</main>
```

## 🐛 Debugging

### Ferramentas Recomendadas

1. **React DevTools**: Para debug de componentes
2. **Browser DevTools**: Para performance e network
3. **Lighthouse**: Para auditoria de performance
4. **axe DevTools**: Para acessibilidade

### Problemas Comuns

| Problema | Solução |
|----------|---------|
| Hidration mismatch | Verificar renderização servidor vs cliente |
| Performance lenta | Usar React Profiler |
| Bundle muito grande | Analisar com `npm run build` |
| CSS não aplicado | Verificar ordem de importação |

## 📞 Suporte

### Dúvidas Técnicas
- Consulte a documentação principal em `/docs/README.md`
- Verifique issues abertas no repositório
- Entre em contato com a equipe de desenvolvimento

### Recursos Úteis
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Lembre-se**: Código bem escrito é código que outros desenvolvedores conseguem entender e manter facilmente! 🚀