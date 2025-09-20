# Guia de Deploy - Logge Tecnologia

## 🚀 Estratégias de Deploy

Esta aplicação foi otimizada para deploy em múltiplas plataformas, com foco em performance e facilidade de manutenção.

## 🏗️ Processo de Build

### Build de Produção

```bash
# Gerar build otimizada
npm run build

# Arquivos gerados em /dist:
dist/
├── index.html          # HTML principal
├── assets/
│   ├── index-[hash].js  # JavaScript otimizado
│   ├── index-[hash].css # CSS compilado
│   └── favicon.ico      # Ícone da aplicação
└── ...                  # Outros assets estáticos
```

### Otimizações Automáticas

- **Tree Shaking**: Remoção de código não utilizado
- **Code Splitting**: Divisão automática de bundles
- **Asset Optimization**: Minificação de CSS/JS
- **Hash Naming**: Cache busting automático

## 🌐 Plataformas de Deploy

### 1. Lovable Platform (Padrão)

**Vantagens:**
- Deploy automático via Git
- CDN global integrado
- SSL/HTTPS automático
- Zero configuração necessária

**Processo:**
```bash
# Push para repositório principal
git push origin main

# Deploy acontece automaticamente
# URL: [projeto].lovable.app
```

### 2. Netlify

**Configuração:**

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Deploy via CLI:**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### 3. Vercel

**Configuração:**

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

**Deploy via CLI:**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 4. GitHub Pages

**Configuração:**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## ⚙️ Configurações de Ambiente

### Variáveis de Ambiente

```bash
# .env.production (se necessário)
VITE_API_URL=https://api.logge.com.br
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_ENVIRONMENT=production
```

### Vite Configuration

```typescript
// vite.config.ts para produção
export default defineConfig({
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog']
        }
      }
    }
  },
  server: {
    host: true,
    port: 8080
  }
});
```

## 🎯 Performance Optimization

### Bundle Analysis

```bash
# Analisar tamanho do bundle
npm install -g vite-bundle-analyzer
npx vite-bundle-analyzer

# Ou usar webpack-bundle-analyzer
npm run build
npx serve -s dist
```

### Métricas Alvo

| Métrica | Valor Alvo | Atual |
|---------|------------|--------|
| First Contentful Paint | < 1.5s | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| Time to Interactive | < 3.0s | ✅ |
| Bundle Size (Gzipped) | < 500KB | ✅ |

### Otimizações Implementadas

1. **Code Splitting**:
   ```typescript
   // Lazy loading de rotas
   const About = lazy(() => import('./pages/About'));
   ```

2. **Image Optimization**:
   ```html
   <!-- WebP com fallback -->
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="Description" loading="lazy">
   </picture>
   ```

3. **Font Optimization**:
   ```html
   <!-- Preload critical fonts -->
   <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
   ```

## 🔒 Segurança

### Headers de Segurança

```javascript
// Headers recomendados (configurar no servidor)
{
  "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' googleapis.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com;",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
}
```

### HTTPS Configuration

- **SSL Certificate**: Automático nas plataformas recomendadas
- **HSTS**: Configurar no servidor web
- **Redirect HTTP → HTTPS**: Automático

## 📊 Monitoramento

### Analytics Integration

```typescript
// Google Analytics 4
import { gtag } from 'gtag';

// Tracking de conversões
gtag('event', 'conversion', {
  send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
  value: 1.0,
  currency: 'BRL'
});
```

### Error Tracking

```typescript
// Sentry (recomendado)
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.VITE_ENVIRONMENT
});
```

### Performance Monitoring

```typescript
// Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🔄 CI/CD Pipeline

### GitHub Actions (Completo)

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Lint
        run: npm run lint
        
      - name: Type check
        run: npx tsc --noEmit
        
      - name: Build
        run: npm run build
        
      - name: Test bundle size
        run: npx bundlesize

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Production
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        run: |
          npm install -g netlify-cli
          netlify deploy --prod --dir=dist
```

## 🌍 Custom Domain

### DNS Configuration

```dns
# A Records
@     A     104.198.14.52
www   CNAME your-app.netlify.app.

# Para Cloudflare (recomendado)
@     A     104.198.14.52   # Proxy status: Proxied
www   CNAME your-app.netlify.app.   # Proxy status: Proxied
```

### SSL Certificate

```bash
# Automático nas plataformas suportadas
# Ou via Let's Encrypt
certbot --nginx -d loggetecnologia.com.br -d www.loggetecnologia.com.br
```

## 📱 PWA Configuration (Opcional)

### Manifest.json

```json
{
  "name": "Logge Tecnologia",
  "short_name": "Logge",
  "description": "Consultoria especializada em tecnologia",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0E76A8",
  "theme_color": "#1EAEDB",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Service Worker

```javascript
// sw.js (básico)
const CACHE_NAME = 'logge-v1.0.0';
const urlsToCache = [
  '/',
  '/assets/index.js',
  '/assets/index.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
```

## 🚨 Troubleshooting

### Problemas Comuns

| Problema | Solução |
|----------|---------|
| Build falha | Verificar versão do Node.js >= 18 |
| 404 em rotas SPA | Configurar redirect para index.html |
| Assets não carregam | Verificar `base` no vite.config.ts |
| Performance baixa | Analisar bundle com webpack-bundle-analyzer |

### Logs de Deploy

```bash
# Verificar logs do build
npm run build > build.log 2>&1

# Verificar tamanho dos assets
ls -la dist/assets/

# Testar build localmente
npm run preview
```

## 📞 Suporte

### Checklist Pré-Deploy

- [ ] ✅ Build executa sem erros
- [ ] ✅ Todos os assets são carregados
- [ ] ✅ Navegação funciona (SPA routing)
- [ ] ✅ Formulários funcionam
- [ ] ✅ Performance está adequada
- [ ] ✅ SEO tags estão corretas
- [ ] ✅ Analytics configurado
- [ ] ✅ Certificado SSL ativo

### Contatos de Suporte

- **Técnico**: Equipe de desenvolvimento
- **Infraestrutura**: DevOps team
- **Domínio/DNS**: Administrador de sistemas

---

*Este guia garante deploys consistentes e seguros da aplicação Logge Tecnologia* 🚀