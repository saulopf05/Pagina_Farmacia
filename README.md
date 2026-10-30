# Site do Prof. Claudiney Ferreira

Site institucional e páginas informativas dos cursos do Prof. Claudiney Ferreira. O projeto usa React, TypeScript, Vite e Tailwind CSS.

## Executar localmente

Requisitos: Node.js 20.19+ (ou 22.12+) e npm 10+.

```bash
npm ci
npm run dev
```

O Vite informa no terminal o endereço local para abrir no navegador.

## Scripts

```bash
npm run dev        # servidor de desenvolvimento
npm run typecheck  # verifica os tipos TypeScript
npm run build      # gera a versão de produção
npm run preview    # prévia local da versão gerada
```

O site é compilado em `packages/web/dist`. As páginas incluem a inicial, `/farmacologia-no-esporte/`, `/portaria-344` e `/mentoria-slls`.

## Estrutura

- `packages/web/src/web`: componentes, páginas e estilos
- `packages/web/public`: imagens e arquivos estáticos usados pelo site
- `packages/web`: configuração do Vite e scripts da aplicação
- `GUIA_EDICAO.md`: orientação para atualizar o conteúdo

## Publicação

Para publicar na HostGator, gere a versão de produção com `npm run build` e envie todo o conteúdo de `packages/web/dist` para a raiz do domínio. O arquivo `.htaccess` incluído no build configura as URLs das páginas de curso. Não é necessário enviar `node_modules`.
