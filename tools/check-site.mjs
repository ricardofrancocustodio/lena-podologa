// Verifica links internos, títulos e descrições duplicados nas páginas publicadas.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skip = new Set(['.git', '.vercel', '.qodo', 'node_modules', 'tools', 'docs', 'assets']);
const files = [];
(function walk(d) {
  for (const f of readdirSync(d, { withFileTypes: true })) {
    if (skip.has(f.name)) continue;
    const p = join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name === 'index.html') files.push(p);
  }
})(root);

let issues = 0;
const seen = { title: new Map(), desc: new Map() };
for (const f of files) {
  const h = readFileSync(f, 'utf8');
  for (const m of h.matchAll(/href="(\/[^"#?]*)/g)) {
    const t = m[1];
    if (t === '/' || /\.[a-z0-9]+$/i.test(t)) continue;
    if (!existsSync(join(root, t, 'index.html'))) { issues++; console.log('LINK QUEBRADO', f.replace(root, ''), t); }
  }
  const title = (h.match(/<title>(.*?)<\/title>/) || [])[1];
  const desc = (h.match(/name="description" content="(.*?)"/) || [])[1];
  for (const [k, v] of [['title', title], ['desc', desc]]) {
    if (!v) continue;
    if (seen[k].has(v)) { issues++; console.log(`${k} DUPLICADO`, f.replace(root, ''), seen[k].get(v)); }
    seen[k].set(v, f.replace(root, ''));
  }
  if (title && title.length > 70) { issues++; console.log('TITLE LONGO', f.replace(root, ''), title.length); }
  if (desc && desc.length > 175) { issues++; console.log('DESC LONGA', f.replace(root, ''), desc.length); }
}
console.log(`${files.length} páginas verificadas, ${issues} problema(s)`);
process.exit(issues ? 1 : 0);
