// Gera as páginas do blog (hubs + perguntas), o índice do blog e o sitemap a partir de tools/content.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { clusters, offers, SITE, DATE, PHONE } from './content/meta.mjs';
import { hubs } from './content/hubs.mjs';
import { spokesSintomas } from './content/spokes-sintomas.mjs';
import { spokesProdutos } from './content/spokes-produtos.mjs';
import { spokesAtendimento } from './content/spokes-atendimento.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const legacy = JSON.parse(readFileSync(join(root, 'tools', 'content', 'hubs-legacy.json'), 'utf8'));

const spokes = [...spokesSintomas, ...spokesProdutos, ...spokesAtendimento];
const pages = [...hubs, ...spokes];
const bySlug = new Map(pages.map((p) => [p.slug, p]));

// ---------- helpers ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');
const plain = (s) => s.replace(/\*/g, '');
const href = (slug) => (slug.startsWith('/') ? slug : `/blog/${slug}/`);
const fmt = (s) =>
  esc(s)
    .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (_, slug, text) => `<a href="${href(slug)}">${text}</a>`)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
const wa = (text) => `https://api.whatsapp.com/send/?phone=${PHONE}&amp;text=${encodeURIComponent(text)}&amp;type=phone_number&amp;app_absent=0`;
const waLink = (text, label, cls = 'button button-primary') =>
  `<a class="${cls}" data-conversion="whatsapp" href="${wa(text)}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">→</span></a>`;
const json = (o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;

const problems = [];
const check = (cond, msg) => cond || problems.push(msg);

pages.forEach((p) => {
  check(p.lead && p.lead.length <= 175, `${p.slug}: lead > 175 (${p.lead?.length})`);
  (p.next || []).forEach(([s]) => check(bySlug.has(s) || s.startsWith('/'), `${p.slug}: next inválido ${s}`));
  if (p.hub) check(bySlug.has(p.hub), `${p.slug}: hub inválido ${p.hub}`);
});
check(new Set(pages.map((p) => plain(p.h1))).size === pages.length, 'H1 duplicado');
check(new Set(pages.map((p) => p.slug)).size === pages.length, 'slug duplicado');

const alertDefault = [
  'Dor intensa ou que aumenta, principalmente se pulsa ou impede de caminhar',
  'Secreção, pus, mau cheiro ou ferida aberta',
  'Febre, calor local, inchaço importante ou vermelhidão que se espalha',
  'Diabetes, má circulação ou perda de sensibilidade nos pés: qualquer alteração já justifica avaliação médica',
];

// ---------- blocos ----------
const header = (rel) => `<a class="skip-link" href="#conteudo">Pular para o conteúdo</a><header class="topbar"><a class="brand" href="/" aria-label="Lena Santos — início"><img src="${rel}assets/logo-lena-santos.webp" alt="Lena Santos Podóloga" width="172" height="57" /></a><nav class="nav sp-nav" aria-label="Navegação principal"><a href="/blog/">Blog</a><a href="/unha-encravada-taguatinga/">Unha encravada</a><a href="/#precos">Valores</a><a href="/#localizacao">Como chegar</a><a class="nav-cta" data-conversion="whatsapp" href="${wa('Olá, Lena! Vim pelo blog e gostaria de agendar uma avaliação.')}" target="_blank" rel="noopener noreferrer">Agendar avaliação <span aria-hidden="true">↗</span></a></nav></header>`;

const footer = (rel) => `<footer><div class="footer-identity"><a class="brand footer-brand" href="/"><img src="${rel}assets/logo-lena-santos.webp" alt="Lena Santos Podóloga" width="172" height="57" /></a><address>St. Qi QI 17, Centro Comercial, Sala 09 · Taguatinga, Brasília — DF · CEP 72135-170<br />Seg a sex, 08h–19h · Sáb, 08h–16h30<br /><a href="tel:+5561985420649">(61) 98542-0649</a></address></div><p>© 2026 Lena Santos. Conteúdo educativo, sem substituir avaliação individual.</p><a href="#conteudo">Voltar ao topo ↑</a></footer>`;

const favicons = '<link rel="icon" href="/favicon.ico" sizes="any" /><link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png" /><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" /><link rel="manifest" href="/site.webmanifest" />';
const social = `<meta property="og:image" content="${SITE}/assets/og-image.jpg" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="Lena Santos, podóloga em Taguatinga, DF" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:image" content="${SITE}/assets/og-image.jpg" />`;

const head = (p, rel, schema) => {
  const url = `${SITE}/blog/${p.slug}/`;
  const title = p.title || `${plain(p.h1)} | Lena Santos`;
  const desc = p.lead;
  return `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="theme-color" content="#3d7f82" /><meta name="description" content="${attr(desc)}" /><link rel="canonical" href="${url}" /><meta name="robots" content="index, follow, max-image-preview:large" /><meta property="og:type" content="article" /><meta property="og:locale" content="pt_BR" /><meta property="og:site_name" content="Lena Santos | Podóloga" /><meta property="og:title" content="${attr(plain(p.h1))}" /><meta property="og:description" content="${attr(desc)}" /><meta property="og:url" content="${url}" />${social}<title>${esc(title)}</title>${favicons}<script async src="https://www.googletagmanager.com/gtag/js?id=AW-869329821"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-869329821');gtag('config','G-ZGC6S633VD');</script><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" /><link rel="stylesheet" href="${rel}styles.css" /><link rel="stylesheet" href="${rel}blog.css" />${schema}</head>`;
};

const offerCards = (keys) =>
  keys
    .map((k) => {
      const o = offers[k];
      return `<li class="sp-price"><span class="sp-price-name">${esc(o.name)}</span><strong>${esc(o.price)}</strong><span class="sp-price-meta">${esc(o.time)}${o.note ? ` · ${esc(o.note)}` : ''}</span></li>`;
    })
    .join('');

const render = (p) => {
  const rel = '../../';
  const isHub = !p.hub;
  const hub = isHub ? null : bySlug.get(p.hub);
  const cluster = clusters.find((c) => c.id === (isHub ? p.cluster : hub.cluster));
  const url = `${SITE}/blog/${p.slug}/`;
  const msg = p.wa || `Olá, Lena! Li "${plain(p.h1)}" no blog e gostaria de agendar uma avaliação.`;
  const offerKeys = p.offers || cluster.offers;

  // FAQ
  let faq = (p.faq || []).map((f) => ({ q: esc(f.q), a: esc(f.a) }));
  if (isHub) {
    const l = legacy[p.slug];
    const seen = new Set(faq.map((f) => f.q));
    faq = [...faq, ...l.faq.filter((f) => !seen.has(f.q))];
  }

  // próximos passos: hub primeiro (spokes), depois complementos
  const next = [];
  if (hub) next.push([hub.slug, 'Guia completo: visão geral do tema']);
  (p.next || []).forEach((n) => next.push(n));

  const crumbs = [
    ['Início', '/'],
    ['Blog', '/blog/'],
  ];
  if (hub) crumbs.push([hub.short, `/blog/${hub.slug}/`]);
  crumbs.push([p.short || plain(p.h1), null]);

  const schema =
    json({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: plain(p.h1),
      description: p.lead,
      datePublished: DATE,
      dateModified: DATE,
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Lena Santos', jobTitle: 'Podóloga' },
      publisher: { '@id': `${SITE}/#podologa` },
      mainEntityOfPage: url,
    }) +
    json({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map(([name, path], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: path ? `${SITE}${path}` : url,
      })),
    }) +
    (faq.length
      ? json({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((f) => ({ '@type': 'Question', name: plain(f.q.replace(/<[^>]+>/g, '')), acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
        })
      : '');

  const crumbHtml = crumbs.map(([n, h], i) => (h ? `<a href="${h}">${esc(n)}</a><span>/</span>` : esc(n))).join('');

  // conteúdo principal
  let body = '';
  if (isHub) {
    body += `<div class="sp-legacy">${legacy[p.slug].body}</div>`;
  }
  (p.sections || []).forEach((s) => {
    body += `<h2>${fmt(s.h)}</h2>${s.p.map((t) => `<p>${fmt(t)}</p>`).join('')}`;
  });
  body += p.extraHtml || '';

  let spokeIndex = '';
  if (isHub) {
    const kids = spokes.filter((s) => s.hub === p.slug);
    const groups = [...new Set(kids.map((k) => k.group || 'Perguntas relacionadas'))];
    spokeIndex = `<section class="sp-index" aria-labelledby="indice"><p class="eyebrow"><span></span> Um assunto complementa o outro</p><h2 id="indice">Cada dúvida <em>tem sua resposta.</em></h2><p class="sp-index-intro">Este guia reúne o essencial. Para a pergunta exata que você pesquisou, escolha abaixo: cada página aprofunda um ponto diferente e leva ao mesmo cuidado seguro.</p>${groups
      .map(
        (g) =>
          `<h3>${esc(g)}</h3><ul class="sp-index-list">${kids
            .filter((k) => (k.group || 'Perguntas relacionadas') === g)
            .map((k) => `<li><a href="/blog/${k.slug}/"><strong>${esc(plain(k.h1))}</strong><span>${esc(k.teaser)}</span></a></li>`)
            .join('')}</ul>`,
      )
      .join('')}</section>`;
  }

  const doDont = `<section class="sp-dodont" aria-label="O que fazer e o que evitar"><div class="sp-do"><h3>${esc(p.fazTitle || 'O que ajuda agora')}</h3><ul>${p.faz.map((t) => `<li>${fmt(t)}</li>`).join('')}</ul></div><div class="sp-dont"><h3>${esc(p.evitaTitle || 'O que evitar')}</h3><ul>${p.evita.map((t) => `<li>${fmt(t)}</li>`).join('')}</ul></div></section>`;

  const alertBox = `<aside class="sp-alert" aria-label="Sinais de alerta"><h3>Procure avaliação médica sem esperar se houver:</h3><ul>${[...alertDefault, ...(p.alertExtra ? [p.alertExtra] : [])].map((t) => `<li>${fmt(t)}</li>`).join('')}</ul></aside>`;

  const offer = `<section class="sp-offer" id="atendimento" aria-labelledby="atendimento-h"><div class="sp-offer-copy"><p class="eyebrow"><span></span> Atendimento com a Lena</p><h2 id="atendimento-h">${fmt(p.offerTitle || 'Como a Lena cuida *desse caso.*')}</h2><p>${fmt(p.lena)}</p><ul class="sp-points"><li>Hora marcada, sem fila de espera</li><li>Avaliação individual antes de qualquer conduta</li><li>Encaminhamento médico quando o quadro pede</li><li><a href="/#avaliacoes">5,0 no Google · 40 avaliações</a></li></ul></div><div class="sp-offer-prices"><p class="sp-offer-label">Valores de referência 2026</p><ul>${offerCards(offerKeys)}</ul><p class="sp-offer-note">A indicação é definida na avaliação e os valores são confirmados no agendamento. <a href="/#precos">Ver tabela completa</a></p>${waLink(msg, 'Agendar pelo WhatsApp', 'button button-light')}</div></section>`;

  const nextHtml = `<section class="sp-next" aria-labelledby="continue"><p class="eyebrow"><span></span> Continue por aqui</p><h2 id="continue">O próximo passo <em>da sua dúvida.</em></h2><div class="sp-next-grid">${next
    .map(([s, why]) => {
      const t = bySlug.get(s);
      const target = t ? plain(t.h1) : why;
      const link = t ? `/blog/${s}/` : s;
      return `<a class="sp-next-card" href="${link}"><span class="sp-next-why">${esc(why)}</span><strong>${esc(target)}</strong><span class="sp-next-go">Ler →</span></a>`;
    })
    .join('')}<a class="sp-next-card sp-next-main" href="/unha-encravada-taguatinga/"><span class="sp-next-why">Atendimento</span><strong>Unha encravada em Taguatinga</strong><span class="sp-next-go">Ver como funciona →</span></a></div></section>`;

  const faqHtml = faq.length
    ? `<section class="sp-faq" aria-labelledby="faq-h"><p class="eyebrow"><span></span> Perguntas frequentes</p><h2 id="faq-h">Respostas <em>diretas.</em></h2><div class="faq-list">${faq
        .map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${f.q}<span aria-hidden="true">+</span></summary><p>${f.a}</p></details>`)
        .join('')}</div></section>`
    : '';

  const final = `<section class="sp-final"><div><p class="eyebrow"><span></span> Taguatinga, Brasília — DF</p><h2>${fmt(p.finalTitle || 'Não deixe a dor *decidir por você.*')}</h2><p>${esc(p.finalText || 'Conte à Lena o que está sentindo e confirme horário e valor pelo WhatsApp. A avaliação vem antes de qualquer conduta.')}</p></div>${waLink(msg, 'Quero agendar uma avaliação', 'button button-light')}</section>`;

  return `${head(p, rel, schema)}<body class="sp-page">${header(rel)}<main id="conteudo"><section class="sp-hero"><div class="sp-hero-copy"><p class="article-breadcrumb">${crumbHtml}</p><p class="eyebrow"><span></span> ${esc(p.kicker || cluster.label)}</p><h1>${fmt(p.h1)}</h1><p class="sp-lead">${fmt(p.lead)}</p><div class="sp-actions">${waLink(msg, 'Agendar avaliação em Taguatinga')}<a class="text-link" href="#atendimento">Ver valores de referência <span aria-hidden="true">↓</span></a></div><ul class="sp-trust"><li>Podóloga em Taguatinga</li><li>Hora marcada</li><li>Sem automedicação</li></ul><p class="article-meta">Por Lena Santos, podóloga · Atualizado em 9 de novembro de 2026 · Conteúdo educativo</p></div><aside class="sp-card" aria-label="Atendimento em Taguatinga"><p class="sp-card-eyebrow">Atendimento presencial</p><p class="sp-card-title">${fmt(p.cardTitle || 'Receba uma orientação *antes de tentar sozinho.*')}</p><ul><li>St. Qi QI 17, Centro Comercial, Sala 09</li><li>Seg a sex, 08h–19h · Sáb, 08h–16h30</li><li>Valor de referência: <strong>${esc(offers[offerKeys[0]].price)}</strong></li></ul>${waLink(msg, 'Falar com a Lena', 'button button-primary')}</aside></section><article class="sp-content"><div class="sp-article">${body}${spokeIndex}${doDont}${alertBox}</div></article>${offer}${nextHtml}${faqHtml}${final}</main>${footer(rel)}<div class="sp-sticky">${waLink(msg, 'Agendar avaliação no WhatsApp')}</div><script src="${rel}script.js"></script></body></html>`;
};

if (problems.length) {
  console.error('PROBLEMAS:\n' + problems.join('\n'));
  process.exit(1);
}

pages.forEach((p) => {
  const dir = join(root, 'blog', p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), render(p));
});

// ---------- índice do blog ----------
const hubCard = (h) => {
  const kids = spokes.filter((s) => s.hub === h.slug);
  return `<article class="hub-block"><div class="hub-main"><p class="article-kicker">Guia · ${kids.length} perguntas respondidas</p><h3>${fmt(h.h1)}</h3><p>${esc(h.teaser)}</p><a href="/blog/${h.slug}/">Ler o guia completo →</a></div><ul class="hub-list">${kids.map((k) => `<li><a href="/blog/${k.slug}/">${esc(plain(k.h1))}</a></li>`).join('')}</ul></article>`;
};

const indexSections = clusters
  .map(
    (c) =>
      `<div id="${c.id}" class="blog-silo"><div class="blog-silo-head"><div><p class="eyebrow"><span></span> ${esc(c.label)}</p><h2>${fmt(c.title)}</h2></div><p>${esc(c.desc)}</p></div><div class="hub-grid">${hubs.filter((h) => h.cluster === c.id).map(hubCard).join('')}</div></div>`,
  )
  .join('');

const indexHtml = `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="theme-color" content="#3d7f82" /><meta name="description" content="Perguntas reais sobre unha inflamada, unha encravada, remédios, consulta e valores de podologia, respondidas por Lena Santos, podóloga em Taguatinga." /><link rel="canonical" href="${SITE}/blog/" /><meta name="robots" content="index, follow, max-image-preview:large" /><meta property="og:type" content="website" /><meta property="og:locale" content="pt_BR" /><meta property="og:site_name" content="Lena Santos | Podóloga" /><meta property="og:title" content="Blog de Podologia em Taguatinga | Lena Santos" /><meta property="og:description" content="Perguntas reais sobre unha inflamada, unha encravada, remédios, consulta e valores de podologia, respondidas por Lena Santos, podóloga em Taguatinga." /><meta property="og:url" content="${SITE}/blog/" />${social}<title>Blog de Podologia em Taguatinga | Lena Santos</title>${favicons}<script async src="https://www.googletagmanager.com/gtag/js?id=AW-869329821"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-869329821');gtag('config','G-ZGC6S633VD');</script><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" /><link rel="stylesheet" href="../styles.css" /><link rel="stylesheet" href="../blog.css" />${json({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Blog de Podologia em Taguatinga', url: `${SITE}/blog/`, publisher: { '@id': `${SITE}/#podologa` } })}</head><body>${header('../')}<main id="conteudo"><section class="blog-hero"><div><p class="eyebrow"><span></span> Blog Lena Santos</p><h1>Perguntas reais,<br><em>orientações claras.</em></h1></div><p class="blog-hero-copy">${pages.length} respostas organizadas em ${hubs.length} guias. Cada página trata de um ponto diferente da mesma jornada: entender, evitar o erro e buscar o cuidado certo.<br><a class="blog-author-link" href="/blog/sobre-lena-santos/">Sobre Lena Santos e o blog <span aria-hidden="true">→</span></a></p></section><div class="blog-layout"><aside class="blog-silo-nav" aria-label="Categorias do blog"><p>Navegue por tópico</p>${clusters.map((c) => `<a href="#${c.id}">${esc(c.nav)}</a>`).join('')}</aside><section class="blog-silos">${indexSections}</section></div><section class="sp-final"><div><p class="eyebrow"><span></span> Taguatinga, Brasília — DF</p><h2>Prefere falar <em>direto com a Lena?</em></h2><p>Conte o que está sentindo e confirme horário e valor pelo WhatsApp.</p></div>${waLink('Olá, Lena! Vim pelo blog e gostaria de agendar uma avaliação.', 'Agendar avaliação', 'button button-light')}</section></main>${footer('../')}<script src="../script.js"></script></body></html>`;
writeFileSync(join(root, 'blog', 'index.html'), indexHtml);

// ---------- sitemap ----------
const url = (loc, freq, pr) => `  <url><loc>${SITE}${loc}</loc><lastmod>${DATE}</lastmod><changefreq>${freq}</changefreq><priority>${pr}</priority></url>`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
  url('/', 'monthly', '1.0'),
  url('/unha-encravada-taguatinga/', 'monthly', '0.8'),
  url('/blog/', 'weekly', '0.9'),
  ...hubs.map((h) => url(`/blog/${h.slug}/`, 'monthly', '0.8')),
  ...spokes.map((s) => url(`/blog/${s.slug}/`, 'monthly', '0.6')),
  url('/blog/sobre-lena-santos/', 'monthly', '0.5'),
].join('\n')}\n</urlset>\n`;
writeFileSync(join(root, 'sitemap.xml'), sitemap);

console.log(`${pages.length} páginas (${hubs.length} hubs, ${spokes.length} perguntas)`);
if (problems.length) {
  console.error('PROBLEMAS:\n' + problems.join('\n'));
  process.exit(1);
}
