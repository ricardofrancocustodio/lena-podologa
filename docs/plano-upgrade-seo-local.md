# Plano de upgrade: SEO local de Lena Podóloga

## Objetivo

Fazer da página inicial a resposta mais clara e confiável para buscas como **"podóloga Taguatinga"**, sem perder a linguagem acolhedora da marca e priorizando agendamentos pelo WhatsApp.

## Diagnóstico de partida — 9 de novembro de 2026

Base: duas sequências de prints da busca `podologa taguatinga` (uma logada, outra anônima em outra conta) e leitura do site publicado.

- A página do Facebook de Lena Santos aparece entre os resultados orgânicos nas duas sessões, mas a posição varia: 3º lugar na sessão logada e abaixo do bloco "As pessoas também perguntam" na anônima. Há relevância de marca e localidade, porém **o domínio do site não apareceu na página 1 em nenhuma das duas**. A sessão logada tende a superestimar a posição real.
- O Perfil da Empresa aparece no mapa (pin bem posicionado no centro de Taguatinga), mas fora dos três resultados do pacote local, que nas duas sessões foi: Podolux (5,0 · 16 avaliações), CTP (4,9 · 409) e Plena Podologia (4,9 · 74).
- A home tem bom conteúdo para conversão, avaliações, endereço e CTA; porém, antes da etapa 1, title, meta description, H1 e dados estruturados não comunicavam de forma suficiente a localidade principal.
- A concorrência no Maps é reforçada por volume de avaliações, histórico e proximidade. A meta inicial é ganhar presença qualificada em Taguatinga e nas buscas por serviço + localidade, não prometer uma posição fixa no top 3.

### O que os prints mostram sobre a concorrência

- **Termo feminino "podóloga":** quase todos disputam "podologia" ou "podólogo". A única que o usa de forma explícita é a Neila (equipepodologiabrasilia.com.br), que também **paga anúncio** para a busca, com variações de anúncio nas duas sessões. Isso indica demanda real e uma lacuna orgânica.
- **Resultados orgânicos da página 1:** perfis sociais (Instagram do Instituto dos Pés e da CTP), diretório (Trinks) e poucos sites próprios (Instituto dos Pés, Neila, Planta do Pé). Doctor Feet é uma rede de Brasília, não de Taguatinga. É um conjunto superável por um site local bem otimizado.
- **Podolux entra no top 3 do mapa com apenas 16 avaliações.** Volume ajuda, mas não é a única barreira: relevância da categoria, serviços, fotos e texto das avaliações também pesam.
- **Anúncios:** Neila, Podólogo Braga e Andressa Reis aparecem como patrocinados na busca anônima. Anúncio local para "podóloga taguatinga" é uma alavanca opcional, a avaliar depois do orgânico.
- **Perguntas frequentes do Google ("As pessoas também perguntam"):** valor da consulta, o que a podóloga faz na primeira consulta, quando procurar, valor do trabalho de uma podóloga.
- **Buscas relacionadas:** Taguatinga Sul, Centro, Praça do Bicalho, Shopping, Alameda Shopping, Samambaia, Ceilândia, CTP.

## Métricas de referência

Registrar antes de cada etapa, no Google Search Console e Perfil da Empresa:

- impressões, cliques, CTR e posição média para `podóloga taguatinga`, `podologo taguatinga` e variações sem acento;
- cliques em WhatsApp e em rotas, via GA4/Google Ads;
- visualizações do Perfil da Empresa, ligações, pedidos de rota e cliques no site;
- número e frequência de novas avaliações;
- páginas indexadas e erros de cobertura;
- **linha de base de concorrentes:** a cada mês, repetir a busca em janela anônima, sem login, e anotar o top 3 do mapa e os orgânicos da página 1. Print isolado não é medida; a série mensal é.

## Etapas

### 0. Pré-requisitos de medição — fazer antes de publicar

- Confirmar que `lenapodologa.com.br` está verificada no Search Console (o arquivo `googlea01ec5852a55bced.html` indica que sim) e que o sitemap foi enviado.
- Verificar indexação com `site:lenapodologa.com.br`. Se a home não aparecer, tratar isso antes de qualquer outra etapa.
- Anotar a posição atual das consultas-alvo no Search Console como linha de base, antes da publicação da etapa 1.
- Conferir os eventos de conversão do WhatsApp no GA4/Google Ads (o `script.js` já dispara o evento nos links `data-conversion="whatsapp"`).

### 1. Sinais locais da página inicial — concluída

Implementação em `index.html`:

- title e meta description focados em "podóloga em Taguatinga, DF";
- H1 e texto de abertura com a localização, de maneira legível e natural;
- dados estruturados `MedicalBusiness` completos com telefone, endereço, área atendida, faixa de preço e mapa;
- canonical já existente foi preservada.

**Complemento em 9 de novembro de 2026:**

- meta `robots` com `max-image-preview:large` e tags Open Graph/Twitter para melhorar o compartilhamento em WhatsApp e redes sociais;
- duas novas perguntas no FAQ, visíveis na página e no schema `FAQPage`, alinhadas às perguntas que o Google já exibe: **valor da consulta** e **primeira consulta**. O texto de preço usa os valores da tabela 2026 da própria página;
- o rótulo da seção "Como chegar" agora cita "Podóloga em Taguatinga".

**Validação:** publicar, solicitar indexação da URL canônica no Search Console e validar o JSON-LD no Rich Results Test / Schema Markup Validator. Conferir o texto da pergunta "primeira consulta" com a Lena, para refletir o que ela realmente faz.

> Observação: não adicionar `aggregateRating` ao schema com as avaliações do Google. O Google não exibe estrelas para avaliações "próprias" de um negócio sobre si mesmo, e o dado pode ficar desatualizado. As avaliações seguem visíveis na página.

### 2. Consistência da entidade local — próxima etapa

- Conferir o NAP (nome, endereço e telefone) no site, Perfil da Empresa, Facebook, Instagram e diretórios.
- Usar sempre a mesma grafia do nome comercial e o telefone `+55 61 98542-0649`.
- Adicionar links de redes sociais ao schema (`sameAs`) somente depois de confirmar as URLs oficiais do Facebook, Instagram e Perfil da Empresa.
- Adicionar horário de funcionamento (`openingHoursSpecification`) ao schema somente depois de confirmá-lo com a Lena e replicá-lo no Perfil da Empresa.
- Adicionar `geo` (latitude e longitude) ao schema com as coordenadas exatas do Perfil da Empresa.
- Colocar o **endereço como texto também no rodapé**, com link para a rota, para reforçar o NAP em todas as páginas.
- No Facebook e no Instagram: mesmo nome, mesmo telefone, **link para o site na bio** e, na descrição, "podóloga em Taguatinga". O Facebook já rankeia; ele deve apontar para o site.

### 3. Conteúdo de alta intenção — próxima etapa de site

Criar páginas realmente úteis, com conteúdo próprio, indicação de quando procurar atendimento, limites de atuação, FAQ e CTA:

1. `unha-encravada-taguatinga`;
2. `calosidades-podologa-taguatinga`;
3. `cuidados-pes-diabeticos-taguatinga`.

Cada página deve apontar para a home, para o agendamento e para serviços relacionados. Não criar páginas quase idênticas para bairros diferentes.

**Diretrizes para cada página:**

- title e H1 com o serviço e "podóloga em Taguatinga"; usar "podóloga" no texto, além de "podologia";
- 600 a 900 palavras próprias, com sinais de alerta e quando procurar um médico (sem promessas de cura);
- link para a linha correspondente da tabela de valores da home e CTA de WhatsApp;
- schema próprio (`Service` ou `WebPage` com `FAQPage` quando houver perguntas visíveis) e inclusão no `sitemap.xml`;
- links internos a partir da home (seção de serviços) e entre as três páginas;
- fotos reais do consultório, não imagens de banco.

**Páginas que respondem às buscas relacionadas, a avaliar depois:** uma página sobre "Atendimento em Taguatinga e região" que explique como chegar a partir de Taguatinga Sul, Centro, Águas Claras, Samambaia e Ceilândia. Só publicar se o conteúdo for útil (distância, estacionamento, metrô) e sem repetir texto.

### 4. Perfil da Empresa e reputação — ação operacional

- Preencher serviços, descrição, fotos atuais, link da home e categorias adequadas no Perfil da Empresa. Categoria principal: "Podólogo", com secundárias relevantes.
- Usar um **link de agendamento** (WhatsApp) e o link do site com parâmetros UTM (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`) para separar o tráfego do perfil no GA4.
- Adicionar o atributo "atendimento com hora marcada" e o horário real.
- Publicar uma postagem no perfil por semana ou quinzena (dica de cuidado, novidade, horário especial), sempre com foto real.
- Pedir avaliações reais e recentes após cada atendimento, sem sugerir texto ou condicionar benefício. Usar o **link curto de avaliação** do perfil em um cartão no consultório e na mensagem de agradecimento pelo WhatsApp.
- Meta de ritmo: pelo menos 4 a 6 avaliações novas por mês, de forma natural. A recência pesa tanto quanto o total.
- Responder todas as avaliações com atenção e, quando natural, mencionar o atendimento em Taguatinga e o serviço realizado.
- Os depoimentos usados no site devem ter autorização dos autores.

### 5. Desempenho e experiência — paralelo às demais etapas

**Feito em 9 de novembro de 2026:** todas as imagens usadas na página foram convertidas para WebP (14,0 MB → 2,0 MB), com as fotos de antes e depois limitadas a 720 px de largura e o logotipo em 600 px, com `width`/`height` no HTML. Os arquivos PNG/JPEG originais continuam na pasta; o PNG do logotipo segue em uso no Open Graph e no schema, que não dependem de WebP. Falta medir no PageSpeed Insights (mobile) e avaliar `srcset` e AVIF.

- As imagens da seção "Trajetória" são PNGs de até 1,1 MB cada, e a pasta `assets` pesa 14 MB. Converter para WebP/AVIF, redimensionar para a largura exibida e manter `loading="lazy"`. Isso melhora o LCP em celular, que é onde a maioria das buscas locais acontece.
- Adicionar `width` e `height` nas imagens para evitar mudança de layout.
- Revisar o texto `alt` das imagens de antes e depois (hoje "Antes do atendimento, caso 1") para descrever o tratamento, sem expor dados do paciente.
- Medir no PageSpeed Insights (mobile) antes e depois, e acompanhar os Core Web Vitals no Search Console.

### 6. Autoridade e acompanhamento — recorrente

- Corrigir ou reivindicar citações em diretórios que apresentem dados divergentes (Trinks, Doctoralia, guias locais do DF).
- Publicar conteúdo educativo que responda dúvidas reais de pacientes; evitar alegações médicas não revisadas.
- Buscar menções e links de fontes locais: associações e cursos de podologia dos quais a Lena participou (CBRAPES etc.), parceiros e eventos de Taguatinga.
- Revisar mensalmente Search Console, Perfil da Empresa e conversões do WhatsApp; atualizar páginas conforme consultas que estejam gerando impressões.
- **Opcional:** avaliar uma campanha pequena no Google Ads para "podóloga taguatinga", com orçamento diário baixo, já que a concorrente direta anuncia. Só depois de a home e o Perfil da Empresa estarem ajustados, para não pagar por tráfego que não converte.

## Informações pendentes (necessárias para concluir a etapa 2)

| Item | Para quê |
|---|---|
| Horário de atendimento | schema, Perfil da Empresa e rodapé |
| URLs oficiais do Facebook, Instagram e Perfil da Empresa | `sameAs` no schema e links no site |
| Coordenadas do Perfil da Empresa | `geo` no schema |
| Confirmação do texto da "primeira consulta" | FAQ visível e schema |
| Link curto de avaliação do Google | cartão no consultório e mensagens |

## Critério para avançar

Após cada publicação, aguardar indexação e ao menos 28 dias de dados antes de atribuir ganhos ou perdas à etapa. Posições locais variam conforme localização, dispositivo, histórico e concorrência; avaliar tendência, não um único print.
