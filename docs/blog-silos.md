# Arquitetura SEO do blog

## Objetivo

Transformar perguntas reais de pesquisa ("As pessoas também perguntam", registradas em `key-questions-for-articles.md`) em páginas que respondem, orientam com segurança e levam ao agendamento no WhatsApp.

## Problema resolvido: canibalização e páginas finas

Antes, 36 páginas tinham ~100 palavras, o mesmo veredito ("não use, procure avaliação") e nenhum cabeçalho, CTA ou medição. Para o Google, eram quase duplicadas e disputavam as mesmas consultas.

Regras que passam a valer:

1. **Cada página tem uma intenção própria.** A pergunta exata é o H1; o ângulo (o que a página acrescenta) está nas tabelas abaixo.
2. **Um guia (hub) por assunto.** O hub é dono da consulta ampla; as perguntas são donas da consulta exata e linkam de volta ao hub.
3. **Cada pergunta complementa outra.** Os cartões "Continue por aqui" dizem *por que* ler a próxima ("Se a dor pulsa", "Para o antibiótico por via oral"), sempre com o hub primeiro.
4. **Toda página é de venda.** CTA acima da dobra, valores de referência da tabela 2026, bloco "Como a Lena cuida desse caso", sinais de alerta, FAQ e CTA final. No celular há barra fixa de WhatsApp.
5. **Sem recomendação de medicamentos, antibióticos ou procedimentos caseiros.** Preços só os da tabela 2026 da home.

## Mapa de intenções

### Guia 1 — `unha-inflamada-o-que-fazer` (Unha inflamada)

| Página | Ângulo exclusivo |
|---|---|
| `unha-do-pe-inflamada-o-que-fazer` | calçado, meia e rotina do pé |
| `unha-encravada-dedao-inflamada-o-que-fazer` | por que o dedão sofre mais; tratamento com lâmina encravada (R$ 185) |
| `dor-unha-dedao-o-que-fazer` | dor sem inflamação visível; mini-diário para a consulta |
| `dedo-da-unha-inflamado-o-que-fazer` | não manipular: o que parar de fazer |
| `o-que-fazer-pe-da-unha-inflamado` | o que é "bom": casa x consultório |
| `quando-unha-fica-dolorida-o-que-fazer` | semáforo de decisão (observar, agendar, médico) |
| `quanto-tempo-dura-unha-inflamada` | marcos de evolução, sem prazo fixo |
| `inflamacao-na-unha-e-perigosa` | inflamação x infecção; grupos de risco |
| `e-perigoso-deixar-unha-encravada` | custo de adiar (R$ 185 x R$ 300 a R$ 540) |

### Guia 2 — `dedo-inflamado-unha-encravada` (Dedo inflamado)

| Página | Ângulo exclusivo |
|---|---|
| `unha-inflamada-latejando` | o que o pulsar significa |
| `como-aliviar-dedo-latejando` | as primeiras horas: proteger o dedo |
| `o-que-passar-unha-inflamada-latejando` | por que produto na superfície não alcança a dor |
| `o-que-passar-unha-inflamada-parar-dor` | alívio que dura x alívio que disfarça |
| `o-que-colocar-dedo-parar-de-doer` | dor no dedo: localizar a origem (unha, calo, batida) |
| `por-que-unha-doi-por-dentro` | causas anatômicas da dor sob a unha |

### Guia 3 — `remedio-caseiro-unha-encravada` (Remédios e produtos)

| Página | Ângulo exclusivo |
|---|---|
| `qual-pomada-unha-inflamada` | tipos de pomada e por que a escolha é difícil |
| `pomada-antiinflamatoria-unha-inflamada` | corticoide tópico pode mascarar infecção |
| `spray-unha-encravada` | o que cada spray promete e riscos |
| `qual-comprimido-tomar-unha-inflamada` | mapa: analgésico x anti-inflamatório x antibiótico |
| `ibuprofeno-unha-inflamada` | restrições do ibuprofeno; alívio não é solução |
| `qual-antiinflamatorio-unha-inflamada` | tipos de anti-inflamatório e quem decide |
| `posso-pingar-dipirona-na-unha-inflamada` | dica viral sem indicação |
| `qual-antibiotico-unha-encravada` | como o médico decide; papel da podologia |
| `amoxicilina-unha-inflamada` | alergia, sobras e resistência |
| `nebacetin-unha-inflamada` | pomada antibiótica e reação alérgica |
| `vinagre-na-unha-encravada` | ácido em pele machucada |
| `o-que-amolece-unha-encravada` | escalda-pés e pele macerada |
| `como-desinflamar-unha-encravada-em-casa` | rotina segura em casa x consultório |
| `qual-remedio-desinflamar-unha-encravada` | quem faz o quê: podóloga, médico, farmacêutico |

### Guia 4 — `desencravar-unha-doi` (Atendimento)

| Página | Ângulo exclusivo |
|---|---|
| `anestesia-para-desencravar-unha` | conforto e o que perguntar antes de agendar |
| `como-tirar-unha-encravada-sozinho` | riscos de cortar em casa e o que fazer enquanto não há consulta |

### Guia 5 — `primeira-consulta-podologia` (Primeira consulta)

| Página | Ângulo exclusivo |
|---|---|
| `qual-pomada-podologa-usa` | o que se usa no consultório e por que não copiar em casa |
| `dedo-inflamado-apos-podologo` | pós-atendimento: avisar, descrever e sinais de alerta |

### Guia 6 — `quanto-custa-consulta-podologia` (Valores)

| Página | Ângulo exclusivo |
|---|---|
| `tabela-precos-podologia-2026` | tabela resumida com valores reais |
| `quanto-custa-sessao-podologa` | duração, combos e frequência |
| `tem-atendimento-podologia-pelo-sus` | como buscar no SUS e alternativa particular |

## Como editar

O HTML dos guias e das perguntas é gerado. Não edite os `index.html` de `blog/` à mão.

- Conteúdo: `tools/content/` (`hubs.mjs`, `spokes-*.mjs`, `meta.mjs` para clusters e valores).
- Template, índice do blog e `sitemap.xml`: `tools/build-blog.mjs`.
- Estilos: bloco "Páginas de venda do blog" no final de `blog.css`.
- Corpo longo dos 6 guias: `tools/content/hubs-legacy.json` (texto original preservado).

```bash
node tools/build-blog.mjs   # regenera páginas, índice e sitemap
node tools/check-site.mjs   # links quebrados, títulos e descrições duplicados
```

Ao adicionar uma pergunta nova: escolha o guia, defina o ângulo exclusivo (se já houver página com o mesmo ângulo, melhore a existente em vez de criar outra) e inclua `next` com o motivo de cada link.

## Regras editoriais

- H1 = pergunta do Google; `lead` = resposta direta (até 175 caracteres, vira meta description).
- FAQ só com pergunta e resposta visíveis na página; o schema é gerado a partir delas.
- Indicar limites do conteúdo e sinais que justificam avaliação médica.
- Revisar preços, horários e orientação clínica antes de cada atualização.
- Medir no Search Console impressões, consultas, CTR e cliques no WhatsApp por página.

## Como saber se funcionou

Depois de 28 dias de dados: páginas indexadas (Cobertura), consultas em que mais de uma URL aparece (canibalização remanescente), CTR por guia e eventos de conversão do WhatsApp (GA4/Ads, agora disparados também no blog). Se duas páginas ainda disputarem a mesma consulta, una a mais fraca à mais forte e redirecione (301).
