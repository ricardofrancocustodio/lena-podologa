# CLAUDE.md

Site estático da podóloga Lena Santos (https://lenapodologa.com.br), Taguatinga, DF. HTML/CSS/JS puro, sem build, hospedado na Vercel (`vercel.json`).

## Estrutura

- `index.html`: home (serviços, tabela de valores 2026, antes e depois, avaliações, FAQ, localização).
- `unha-encravada-taguatinga/`: página de serviço (pilar do silo de unhas).
- `blog/index.html` e `blog/<slug>/index.html`: blog por pergunta de busca (silos em `docs/blog-silos.md`). Gerados por `node tools/build-blog.mjs` a partir de `tools/content/`; edite o gerador ou o conteúdo, não o HTML (exceto `blog/sobre-lena-santos/`, que é manual).
- `styles.css` (global), `blog.css` (blog), `service-page.css` (página de serviço), `script.js` (menu, carrossel, conversão WhatsApp, ano do rodapé).
- `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `favicon.ico`, `vercel.json`.
- `assets/`: logo, favicons, `og-image.jpg` (1200x630), fotos em `.webp`. Mantenha o `.webp` como arquivo servido.

## Regras de conteúdo

- Idioma pt-BR. Sem emojis, sem promessas de cura, sem recomendar medicamento, antibiótico ou procedimento caseiro.
- Todo artigo de saúde indica sinais de alerta e quando procurar avaliação médica.
- Dados do negócio devem ser idênticos em todo lugar (NAP): St. Qi QI 17, Centro Comercial, Sala 09, Taguatinga, Brasília, DF, CEP 72135-170; telefone +55 61 98542-0649; seg a sex 08:00-19:00, sáb 08:00-16:30.
- Não adicionar `aggregateRating` ao schema com as avaliações do Google.
- Preços vêm da tabela da home (`#precos`); ao mudar a tabela, revisar FAQ da home, schema `FAQPage` e artigos de valores.

## Checklist ao criar ou editar uma página

1. `<title>` único, meta description, `canonical` com barra final, `robots` com `max-image-preview:large`.
2. Open Graph e Twitter (`summary_large_image`) usando `https://lenapodologa.com.br/assets/og-image.jpg`.
3. Favicons + `site.webmanifest`, tag do Google (GA4 `G-ZGC6S633VD` e Ads `AW-869329821`).
4. JSON-LD: `Article` + `BreadcrumbList` nos artigos; `FAQPage` somente se as perguntas estiverem visíveis na página.
5. Estrutura: skip-link, `header.topbar`, `<main id="conteudo">`, um único `h1`, breadcrumb, CTA de WhatsApp com `data-conversion="whatsapp"`, `footer` com `<address>` e `<span id="year">`.
6. Imagens com `alt`, `width`, `height` e `loading="lazy"` (exceto acima da dobra).
7. Adicionar a URL ao `sitemap.xml` (com `lastmod`) e ao índice do blog (`blog/index.html`).
8. Links internos descritivos: artigo para o pilar `/unha-encravada-taguatinga/`, para artigos do mesmo silo e para o agendamento.

## Deploy

Push na `main` publica na Vercel. Após publicar: abrir a URL, conferir console sem erros, validar JSON-LD no Rich Results Test e solicitar indexação de URLs novas no Search Console.
