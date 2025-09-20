# Guia de Componentes - Logge Tecnologia

## 🧩 Visão Geral dos Componentes

Este guia documenta todos os componentes da aplicação, suas APIs, propriedades e exemplos de uso.

## 📂 Estrutura de Componentes

```
src/components/
├── ui/                    # Componentes base (shadcn/ui)
│   ├── button.tsx         # Sistema de botões
│   ├── input.tsx          # Campos de entrada
│   ├── card.tsx           # Sistema de cards
│   ├── toast.tsx          # Notificações
│   └── ...                # Outros componentes UI
├── Navbar.tsx             # Navegação principal
├── Hero.tsx               # Seção hero
├── Solutions.tsx          # Apresentação de soluções
├── Differentials.tsx      # Diferenciais competitivos
├── CallToAction.tsx       # Chamadas para ação
├── ContactForm.tsx        # Formulário de contato
└── Footer.tsx             # Rodapé
```

---

## 🎯 Componentes Principais

### Navbar Component

**Localização**: `src/components/Navbar.tsx`

**Responsabilidades**:
- Navegação principal da aplicação
- Menu responsivo para dispositivos móveis
- Efeitos de scroll (padding dinâmico)
- Links de navegação suave (smooth scroll)

**Estados Internos**:
```typescript
interface NavbarState {
  isMenuOpen: boolean;    // Controla menu mobile
  isScrolled: boolean;    // Detecta scroll para efeitos
}
```

**Funcionalidades**:
- ✅ Navegação fixa no topo
- ✅ Auto-hide padding ao scroll
- ✅ Menu hamburger responsivo
- ✅ Smooth scroll para âncoras
- ✅ Logo com destaque da marca

**Breakpoints**:
- **Mobile** (< 768px): Menu hamburger overlay
- **Desktop** (≥ 768px): Navegação horizontal

**Exemplo de Uso**:
```typescript
// Uso simples
<Navbar />

// Integração com layout
<div className="min-h-screen">
  <Navbar />
  <main>
    {/* Conteúdo da página */}
  </main>
</div>
```

---

### Hero Component

**Localização**: `src/components/Hero.tsx`

**Responsabilidades**:
- Primeira impressão visual da marca
- Apresentação da proposta de valor
- Call-to-actions primários
- Animações de entrada (scroll reveal)

**Dependências**:
```typescript
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
```

**Animações**:
```typescript
// Três elementos com delays escalonados
const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollReveal();

// Delays aplicados via CSS inline
style={{ transitionDelay: '200ms' }}  // Subtitle
style={{ transitionDelay: '400ms' }}  // Buttons
```

**Elementos Visuais**:
- Background gradiente personalizado (`.gradient-bg`)
- Tipografia responsiva (3xl → 6xl)
- Botões com microinterações
- Layout centralizado com container

**CTAs Implementados**:
1. **Primário**: "Conheça Nossas Soluções" → Scroll para #solucoes
2. **Secundário**: "Fale com um Especialista" → Scroll para #contato

---

### Solutions Component

**Localização**: `src/components/Solutions.tsx`

**Responsabilidades**:
- Apresentar soluções oferecidas pela empresa
- Cards informativos com hover effects
- Grid responsivo
- Animações de entrada escalonadas

**Estrutura de Dados**:
```typescript
interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    icon: Building,
    title: "Consultoria Empresarial",
    description: "Análise e otimização de processos..."
  },
  // ... outras soluções
];
```

**Layout Responsivo**:
- **Mobile**: 1 coluna (grid-cols-1)
- **Tablet**: 2 colunas (md:grid-cols-2)
- **Desktop**: 3 colunas (lg:grid-cols-3)

**Animações Aplicadas**:
- Scroll reveal para título e subtítulo
- Stagger delay nos cards (100ms progressivo)
- Hover effects com transformações

---

### Differentials Component

**Localização**: `src/components/Differentials.tsx`

**Responsabilidades**:
- Destacar vantagens competitivas
- Construir confiança e autoridade
- Apresentação visual impactante
- Números e estatísticas (quando aplicável)

**Padrão de Design**:
```typescript
// Estrutura típica
<section id="diferenciais" className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="scroll-reveal">
      <h2 className="section-title">Nossos Diferenciais</h2>
      <p className="section-subtitle">Por que escolher a Logge?</p>
    </div>
    <div className="grid">
      {differentials.map((item, index) => (
        <DifferentialCard key={index} {...item} />
      ))}
    </div>
  </div>
</section>
```

---

### CallToAction Component

**Localização**: `src/components/CallToAction.tsx`

**Responsabilidades**:
- Conversão de leads
- Direcionamento para formulário de contato
- Reforço da proposta de valor
- Senso de urgência/oportunidade

**Elementos de Conversão**:
```typescript
// CTA otimizado para conversão
<Button 
  className="bg-logge-light-blue hover:bg-logge-dark-blue 
            hover:scale-105 hover:-translate-y-1 
            text-white font-semibold 
            shadow-medium hover:shadow-strong"
  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
>
  <span className="text-center whitespace-normal sm:whitespace-nowrap">
    Agendar Consultoria Gratuita
  </span>
  <ArrowRight className="ml-1 h-4 w-4 transition-transform hover:translate-x-1" />
</Button>
```

**Microinterações**:
- Hover scale (105%)
- Vertical lift (-translate-y-1)
- Shadow elevation
- Icon animation (translate-x-1)

---

### ContactForm Component

**Localização**: `src/components/ContactForm.tsx`

**Responsabilidades**:
- Captura de leads qualificados
- Validação de entrada em tempo real
- Feedback visual para usuário
- Integração com sistema de notificações

**Estrutura de Formulário**:
```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}
```

**Validações Implementadas**:
- Campos obrigatórios (name, email, message)
- Formato de email válido
- Comprimento mínimo para mensagem
- Sanitização automática via React

**Estados do Formulário**:
```typescript
const [formData, setFormData] = useState<ContactFormData>(initialState);
const [isSubmitting, setIsSubmitting] = useState(false);
const [errors, setErrors] = useState<Record<string, string>>({});
```

**Feedback do Usuário**:
- Loading state durante submit
- Toast notifications para sucesso/erro
- Validação em tempo real
- Clear form após sucesso

---

### Footer Component

**Localização**: `src/components/Footer.tsx`

**Responsabilidades**:
- Informações de contato da empresa
- Links secundários e legais
- Credibilidade e profissionalismo
- Informações de copyright

**Seções Típicas**:
1. **Informações da Empresa**
2. **Links Rápidos**
3. **Contato**
4. **Copyright e Legal**

---

## 🎨 Componentes UI (shadcn/ui)

### Button Component

**Localização**: `src/components/ui/button.tsx`

**Variants Disponíveis**:
```typescript
const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground",
    outline: "border border-input bg-background hover:bg-accent",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }
}
```

**Exemplos de Uso**:
```typescript
// Botão padrão
<Button>Clique aqui</Button>

// Botão com variant e size
<Button variant="outline" size="lg">
  Botão grande com borda
</Button>

// Botão com ícone
<Button variant="ghost" size="icon">
  <ArrowRight className="h-4 w-4" />
</Button>

// Botão como link
<Button asChild>
  <a href="/contato">Ir para contato</a>
</Button>
```

### Card Component

**Localização**: `src/components/ui/card.tsx`

**Composição**:
```typescript
// Estrutura compound component
<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição opcional</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo principal do card</p>
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

**Classes de Hover**:
```typescript
// Card com hover effect
<Card className="card-hover">
  {/* Conteúdo */}
</Card>

// Card com hover sutil
<Card className="card-hover-subtle">
  {/* Conteúdo */}
</Card>
```

### Input Component

**Localização**: `src/components/ui/input.tsx`

**Props Interface**:
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}
```

**Exemplo de Uso**:
```typescript
// Input básico
<Input 
  type="email" 
  placeholder="seu@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Input com label e erro
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email"
    type="email" 
    error={errors.email}
    className={cn(errors.email && "border-destructive")}
  />
  {errors.email && (
    <p className="text-sm text-destructive">{errors.email}</p>
  )}
</div>
```

### Toast Component

**Localização**: `src/components/ui/toast.tsx`

**Sistema de Notificações**:
```typescript
import { useToast } from "@/hooks/use-toast";

const Component = () => {
  const { toast } = useToast();

  const handleSuccess = () => {
    toast({
      title: "Sucesso!",
      description: "Operação realizada com sucesso.",
      variant: "default",
    });
  };

  const handleError = () => {
    toast({
      title: "Erro",
      description: "Algo deu errado. Tente novamente.",
      variant: "destructive",
    });
  };
};
```

---

## 🎣 Hooks Customizados

### useScrollReveal

**Localização**: `src/hooks/useScrollReveal.ts`

**Propósito**: Implementa animações baseadas na Intersection Observer API

**API**:
```typescript
interface UseScrollRevealOptions {
  threshold?: number;           // Padrão: 0.1
  rootMargin?: string;         // Padrão: '0px 0px -50px 0px'
}

interface UseScrollRevealReturn {
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
}

const useScrollReveal = (
  threshold?: number, 
  rootMargin?: string
): UseScrollRevealReturn;
```

**Exemplo de Uso**:
```typescript
const Component = () => {
  const { ref, isVisible } = useScrollReveal(0.1, '0px 0px -50px 0px');

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
    >
      <h2>Conteúdo animado</h2>
    </div>
  );
};
```

**Características**:
- Observer é removido após primeira ativação (performance)
- Threshold configurável para diferentes sensibilidades
- RootMargin para ajustar área de trigger
- TypeScript compliant

### use-mobile

**Localização**: `src/hooks/use-mobile.tsx`

**Propósito**: Detecta se o usuário está em dispositivo móvel

**API**:
```typescript
const useMobile = (): boolean;
```

**Implementação**:
```typescript
const Component = () => {
  const isMobile = useMobile();

  return (
    <div>
      {isMobile ? (
        <MobileNavigation />
      ) : (
        <DesktopNavigation />
      )}
    </div>
  );
};
```

### use-toast

**Localização**: `src/hooks/use-toast.ts`

**Propósito**: Sistema de notificações toast centralizadas

**API**:
```typescript
interface ToastOptions {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  action?: React.ReactNode;
  duration?: number;
}

interface UseToastReturn {
  toast: (options: ToastOptions) => void;
  toasts: Toast[];
  dismiss: (toastId?: string) => void;
}

const useToast = (): UseToastReturn;
```

---

## 🎨 Sistema de Classes CSS

### Classes de Animação

```css
/* Scroll Reveal System */
.scroll-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: all 0.7s ease-out;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger Delays */
.scroll-reveal-stagger:nth-child(1) { transition-delay: 0ms; }
.scroll-reveal-stagger:nth-child(2) { transition-delay: 100ms; }
.scroll-reveal-stagger:nth-child(3) { transition-delay: 200ms; }
.scroll-reveal-stagger:nth-child(4) { transition-delay: 300ms; }
```

### Classes de Hover

```css
/* Card Hover Effects */
.card-hover {
  transition: all 0.3s ease-out;
}

.card-hover:hover {
  transform: scale(1.05) translateY(-8px);
  box-shadow: 0 12px 40px -12px rgba(30, 174, 219, 0.2);
}

.card-hover-subtle {
  transition: all 0.3s ease-out;
}

.card-hover-subtle:hover {
  transform: scale(1.02) translateY(-4px);
  box-shadow: 0 8px 30px -8px rgba(30, 174, 219, 0.15);
}
```

### Classes Utilitárias

```css
/* Button System */
.btn-primary {
  background-color: var(--logge-light-blue);
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px -8px rgba(30, 174, 219, 0.15);
}

.btn-primary:hover {
  background-color: var(--logge-dark-blue);
  transform: scale(1.05) translateY(-4px);
  box-shadow: 0 12px 40px -12px rgba(30, 174, 219, 0.2);
}

/* Section Styles */
.section-title {
  font-size: clamp(1.875rem, 4vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--logge-dark-blue);
  text-wrap: balance;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--logge-gray-400);
  max-width: 48rem;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}
```

---

## 📱 Responsividade

### Breakpoint Strategy

| Dispositivo | Breakpoint | Grid Cols | Spacing |
|-------------|------------|-----------|---------|
| **Mobile** | < 640px | 1 | gap-4 |
| **Mobile L** | 640px | 1-2 | gap-6 |
| **Tablet** | 768px | 2 | gap-6 |
| **Desktop** | 1024px | 3 | gap-8 |
| **Large** | 1280px+ | 3-4 | gap-12 |

### Responsive Patterns

```typescript
// Grid responsivo típico
<div className="
  grid grid-cols-1 gap-4
  sm:grid-cols-2 sm:gap-6
  lg:grid-cols-3 lg:gap-8
">
  {items.map(item => <Card key={item.id} />)}
</div>

// Typography responsiva
<h1 className="
  text-3xl leading-tight
  sm:text-4xl
  md:text-5xl
  lg:text-6xl
  lg:leading-none
">
  Título Responsivo
</h1>

// Padding responsivo
<section className="
  py-12 px-4
  sm:py-16 sm:px-6
  md:py-20
  lg:py-24
">
  Content
</section>
```

---

## 🧪 Testes de Componentes

### Testing Strategy (Recomendado)

```typescript
// Exemplo de teste para Button component
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct variant classes', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByText('Outline Button');
    expect(button).toHaveClass('border');
  });
});
```

### Visual Testing (Storybook - Recomendado)

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};
```

---

## 🔧 Manutenção e Evolução

### Adicionando Novos Componentes

1. **Criar estrutura base**:
```typescript
// src/components/NewComponent.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface NewComponentProps {
  className?: string;
  children?: React.ReactNode;
}

const NewComponent: React.FC<NewComponentProps> = ({ 
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

export default NewComponent;
```

2. **Aplicar padrões estabelecidos**:
   - Use tokens do design system
   - Implemente responsividade
   - Adicione TypeScript interfaces
   - Considere acessibilidade

3. **Documentar o componente**:
   - Adicionar ao Storybook
   - Criar exemplos de uso
   - Documentar props e variants

### Refatoração de Componentes

```typescript
// ❌ Antes: Componente monolítico
const LandingPage = () => {
  return (
    <div>
      {/* 500+ linhas de JSX */}
    </div>
  );
};

// ✅ Depois: Componentes focados
const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Solutions />
      <Differentials />
      <CallToAction />
      <ContactForm />
    </div>
  );
};
```

---

*Este guia garante consistência e qualidade na implementação e manutenção dos componentes da aplicação* 🧩