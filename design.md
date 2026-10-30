# Prof. Claudiney Ferreira — Design

Landing page (front-end only) de vendas para os cursos online de farmacologia e perícia judicial do Prof. Claudiney Ferreira. Plataforma: **web**. Direção visual: **escuro premium científico** — grafite profundo, camadas azul-petróleo, acento ciano-turquesa usado com parcimônia (nunca "neon em excesso"), tipografia grande e confiante, muitas animações de scroll. Objetivo: transmitir autoridade técnica (farmácia/perícia) e levar o visitante ao botão de compra na Hotmart.

## Brand & Colors

Tokens em `packages/web/src/web/styles.css` (site é dark-only, sem tema claro).

| Token | Valor | Uso |
|-------|-------|-----|
| `--ink` | `#070A0F` | Fundo base (quase preto azulado) |
| `--ink-2` | `#0B111A` | Fundo de seções alternadas |
| `--surface` | `#101A24` | Cards, superfícies |
| `--surface-2` | `#16222F` | Card hover, inputs |
| `--line` | `rgba(255,255,255,.08)` | Hairlines, bordas de card |
| `--fg` | `#EAF2F7` | Texto principal |
| `--fg-muted` | `#8FA3B3` | Texto secundário |
| `--accent` | `#2FE3C4` | Acento principal (turquesa) — CTA, números, ícones |
| `--accent-2` | `#38BDF8` | Acento secundário (azul) — gradientes, linhas |
| `--accent-warm` | `#F5C24B` | Acento raro (selo, estrelas de review) |

Regra de acento: só em CTA, números, hairlines ativas, ícones e hover. Nunca em blocos grandes de fundo. Glow sempre com opacidade baixa (`/10` a `/25`).

## Typography

- **Display**: `Sora` (600/700/800) — títulos, números, nav.
- **Body**: `Poppins` (300/400/500) — parágrafos, labels.
- Carregadas via Google Fonts no `index.html`.
- Títulos: `clamp()` fluido, `tracking-tight`, line-height 0.95–1.1. Corpo: line-height 1.7, `--fg-muted`.
- Eyebrow/label: Poppins 500, `uppercase`, `tracking-[0.2em]`, 11–12px, cor `--accent`.

## Motion

Biblioteca: `motion` (Framer Motion). Estilo inspirado em skiper-ui / originkit.

- `Reveal` — fade + translateY(28px) com `whileInView`, `viewport={{ once: true, margin: "-12%" }}`, stagger por índice.
- `SplitText` — headline do hero revelada palavra por palavra com blur + y.
- `Marquee` — faixa infinita de credenciais/temas em CSS puro.
- `Parallax` — `useScroll` + `useTransform` nas imagens de curso e no retrato do "Sobre".
- `Counter` — números animados com `animate()` ao entrar em viewport.
- `StickyCards` — seção de cursos com cards que fazem scale/opacity conforme o scroll.
- Cards: tilt 3D leve no mouse + spotlight radial que segue o cursor.
- Header: encolhe e ganha blur/borda após 40px de scroll.
- Barra de progresso de scroll no topo (`useScroll` + `scaleX`).
- `prefers-reduced-motion`: animações reduzidas a fade simples.

## Pages & Sections

**Web — Home** (`packages/web/src/web/pages/index.tsx`) — página única, âncoras.

1. `components/site-header.tsx` — logo tipográfico + nav âncora + CTA.
2. `components/hero.tsx` — headline em split reveal, foto do professor (lab), badges, CTA duplo, glow molecular.
3. `components/marquee-strip.tsx` — faixa de temas.
4. `components/stats.tsx` — 4 números animados.
5. `components/courses.tsx` — 6 cards (dados em `data/courses.ts`), imagem + preço + CTA Hotmart (`href="#"`).
6. `components/about.tsx` — retrato + bio + credenciais, parallax.
7. `components/testimonials.tsx` — depoimentos em grid/carrossel com estrelas.
8. `components/faq.tsx` — accordion animado.
9. `components/contact.tsx` — formulário visual (sem envio real) + canais diretos.
10. `components/site-footer.tsx` — redes sociais, links, aviso legal.

Componentes de animação compartilhados em `components/ui/motion-primitives.tsx`.

## Key User Flows

1. Visitante chega → hero explica o posicionamento → CTA rola até os cursos.
2. Explora os 6 cursos → clica "Quero me inscrever" → (link Hotmart a ser colado pelo cliente).
3. Dúvidas → FAQ / WhatsApp no footer e na seção de contato.

## Architecture

Somente front-end. Sem chamadas de API, sem banco, sem checkout — os botões de compra usam `href="#"` marcado com `data-hotmart` para o cliente substituir pelo link real da Hotmart.
