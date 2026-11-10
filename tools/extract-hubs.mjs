// One-off: snapshot the long-form copy of the hub articles before the generator rewrites them.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const hubs = [
  'unha-inflamada-o-que-fazer',
  'dedo-inflamado-unha-encravada',
  'remedio-caseiro-unha-encravada',
  'desencravar-unha-doi',
  'primeira-consulta-podologia',
  'quanto-custa-consulta-podologia',
];

const out = {};
for (const slug of hubs) {
  const html = readFileSync(join(root, 'blog', slug, 'index.html'), 'utf8');
  const start = html.indexOf('<div class="article-body">') + '<div class="article-body">'.length;
  const end = html.indexOf('<section class="article-faq">');
  const body = html.slice(start, end).trim();
  const faq = [...html.matchAll(/<summary>(.*?)<span[^>]*>.*?<\/span><\/summary><p>(.*?)<\/p>/gs)].map((m) => ({ q: m[1], a: m[2] }));
  out[slug] = { body, faq };
}

mkdirSync(join(root, 'tools', 'content'), { recursive: true });
writeFileSync(join(root, 'tools', 'content', 'hubs-legacy.json'), JSON.stringify(out, null, 2));
console.log(Object.entries(out).map(([k, v]) => `${k}: ${v.body.length} chars, ${v.faq.length} faq`).join('\n'));
