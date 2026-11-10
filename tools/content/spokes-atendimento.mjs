// Perguntas dos guias de atendimento (desencravar, primeira consulta) e de valores.
const C = 'desencravar-unha-doi';
const P1 = 'primeira-consulta-podologia';
const P2 = 'quanto-custa-consulta-podologia';

const priceTable = `<div class="sp-table-wrap"><table class="sp-table"><thead><tr><th scope="col">Atendimento</th><th scope="col">Tempo</th><th scope="col">Valor</th></tr></thead><tbody>
<tr><td>Higienização completa dos pés</td><td>40 min</td><td><strong>R$ 165,00</strong></td></tr>
<tr><td>Higienização completa com lâmina encravada</td><td>1h10</td><td><strong>R$ 185,00</strong></td></tr>
<tr><td>Higienização completa infantil (sem infecção)</td><td>20 min</td><td><strong>R$ 100,00</strong></td></tr>
<tr><td>Desbaste de calosidade (M e G)</td><td>20 min</td><td><strong>R$ 140,00</strong></td></tr>
<tr><td>Onicoabrasão (até 3 lâminas)</td><td>20 min</td><td><strong>R$ 35,00</strong></td></tr>
<tr><td>Hidratação para os pés</td><td>20 min</td><td><strong>R$ 130,00</strong></td></tr>
<tr><td>Massagem relaxante</td><td>30 min</td><td><strong>R$ 120,00</strong></td></tr>
<tr><td>Infecção I, II ou III (por lado da unha)</td><td>30 min</td><td><strong>R$ 300,00 a R$ 540,00</strong></td></tr>
<tr><td>Curativo (por dedo)</td><td>10 min</td><td><strong>R$ 50,00</strong></td></tr>
<tr><td>Combo: higienização completa + hidratação</td><td>60 min</td><td><strong>R$ 270,00</strong></td></tr>
</tbody></table></div><p class="sp-table-note">Valores de referência de 2026, sujeitos a atualização. A tabela completa, com órteses, próteses, fototerapia e combos, está na <a href="/#precos">página inicial</a>.</p>`;

export const spokesAtendimento = [
  // ---------- Guia C: desencravar ----------
  {
    slug: 'anestesia-para-desencravar-unha',
    hub: C,
    group: 'Conforto e preparo',
    short: 'Anestesia',
    h1: 'É necessária anestesia para *desencravar uma unha?*',
    lead: 'Depende do quadro, da técnica e de quem pode indicá-la. Pergunte no agendamento: a Lena explica o que faz no atendimento e o que exige encaminhamento.',
    teaser: 'O que influencia o conforto no atendimento e o que perguntar antes.',
    sections: [
      {
        h: 'O que *decide* a necessidade',
        p: [
          'Dor intensa, inflamação, ferida, sensibilidade pessoal e o tipo de procedimento influenciam o conforto. Em muitos casos, o cuidado podológico é feito com técnica cuidadosa e sem necessidade de anestesia. Em outros, a conduta indicada pode ser diferente.',
          'Quem pode indicar ou aplicar anestesia depende do tipo de anestesia e do enquadramento profissional. Por isso a resposta exige avaliação do caso, não uma regra geral.',
        ],
      },
      {
        h: 'O que *perguntar* antes de agendar',
        p: [
          'Conte se a dor é intensa, se há secreção ou inchaço e se você tem algum medo ou histórico de reação a anestésicos. Pergunte o que será feito, como o conforto será cuidado e quando o caso precisa de médico.',
          'Durante o atendimento, avise sempre que algo incomodar. Isso faz parte do cuidado.',
        ],
      },
    ],
    faz: ['Informar histórico de reação a anestésicos', 'Contar o nível de dor antes do atendimento', 'Avisar durante o atendimento se algo incomodar'],
    evita: ['Aplicar anestésico por conta própria antes de ir', 'Esconder a dor por vergonha ou medo', 'Cancelar por medo sem tirar a dúvida'],
    lena: 'A Lena explica, antes de começar, o que vai fazer e como está atenta ao seu conforto. Se o seu caso exige conduta médica, ela orienta o encaminhamento em vez de insistir em um cuidado que não cabe à podologia.',
    next: [
      ['como-tirar-unha-encravada-sozinho', 'Para saber por que tirar sozinho é arriscado'],
      ['primeira-consulta-podologia', 'Para ver como é a primeira consulta'],
    ],
    faq: [
      { q: 'Desencravar unha com a podóloga dói?', a: 'Cada caso tem um nível de sensibilidade. Você pode relatar qualquer desconforto durante o atendimento.' },
      { q: 'Posso passar anestésico antes de ir?', a: 'Evite. Converse com a Lena antes: usar produtos por conta própria pode irritar a pele e dificultar a avaliação.' },
    ],
  },
  {
    slug: 'como-tirar-unha-encravada-sozinho',
    hub: C,
    group: 'Conforto e preparo',
    short: 'Tirar sozinho',
    h1: 'Como tirar unha encravada do dedão do pé *sozinho?*',
    lead: 'Não é recomendado. Tesoura, alicate e lâmina em casa costumam abrir ferida, deixar uma ponta que volta a encravar e infeccionar a região.',
    teaser: 'Os riscos de cortar em casa e o que fazer enquanto não consegue consulta.',
    sections: [
      {
        h: 'O que acontece quando se *corta em casa*',
        p: [
          'A tentativa mais comum é cortar o canto da unha em V ou afundar o instrumento na lateral. Em pele já inflamada, isso pode abrir ferida, e, se sobrar uma ponta, a unha volta a pressionar. Ferramentas sem esterilização também podem levar bactérias para a ferida.',
        ],
      },
      {
        h: 'Enquanto *você não consegue* consulta',
        p: [
          'Reduza a pressão com calçado folgado ou aberto, mantenha o pé limpo e seco e não use instrumentos na lateral da unha. Se a dor aumentar ou houver secreção, febre ou inchaço, procure avaliação médica.',
          'Quando conseguir um horário, avise ao agendar que a dor é forte, para que a consulta seja organizada de acordo.',
        ],
      },
    ],
    faz: ['Reduzir a pressão com calçado aberto ou folgado', 'Manter o pé limpo e seco', 'Avisar a dor ao agendar'],
    evita: ['Cortar o canto em V ou aprofundar a lateral', 'Usar instrumentos sem esterilização', 'Puxar a unha para “soltar”'],
    lena: 'A Lena faz o cuidado com instrumentos adequados e técnica profissional, tratando a borda da unha sem abrir ferida. Depois, orienta calçado e corte para a unha não encravar de novo.',
    offers: ['lamina', 'infeccao', 'curativo'],
    next: [
      ['o-que-amolece-unha-encravada', 'Se você pensa em amolecer a unha antes de cortar'],
      ['anestesia-para-desencravar-unha', 'Se o medo é da dor do atendimento'],
    ],
    faq: [
      { q: 'Posso cortar um pouquinho do canto?', a: 'Evite cortes profundos ou em V. Podem deixar uma ponta que volta a encravar e abrir ferida.' },
      { q: 'E se não houver consulta hoje?', a: 'Reduza a pressão do calçado, mantenha o pé limpo e seco e agende o quanto antes. Sinais de alerta pedem avaliação médica.' },
    ],
  },

  // ---------- Guia P1: primeira consulta ----------
  {
    slug: 'qual-pomada-podologa-usa',
    hub: P1,
    group: 'No consultório e depois',
    short: 'Pomada da podóloga',
    h1: 'Qual pomada as podólogas usam?',
    lead: 'Não existe uma pomada única: a escolha de produtos no consultório depende do caso e faz parte do protocolo. Não é uma lista para comprar e usar em casa.',
    teaser: 'O que a podóloga usa no consultório e por que não vale copiar em casa.',
    sections: [
      {
        h: 'O que acontece *no consultório*',
        p: [
          'No atendimento, a podóloga avalia a unha e a pele, usa instrumentos e materiais adequados e, quando indicado, aplica produtos dentro da sua atuação. A escolha depende do que a pele precisa naquele momento: limpeza, proteção, hidratação ou curativo.',
        ],
      },
      {
        h: 'Por que *não vale copiar* em casa',
        p: [
          'O produto certo no consultório está ligado à avaliação, à técnica e ao acompanhamento. Fora desse contexto, o mesmo produto pode irritar, não ter indicação ou esconder sinais importantes. Medicamentos com prescrição, como antibióticos e corticoides, são decisão médica.',
        ],
      },
    ],
    faz: ['Perguntar à podóloga o que será usado e por quê', 'Seguir as orientações de cuidado pós-atendimento', 'Procurar médico se houver sinais que exijam prescrição'],
    evita: ['Pedir “a pomada da podóloga” sem avaliação', 'Usar sobras de produtos em casa', 'Aplicar produto sem saber a indicação'],
    lena: 'Na avaliação com a Lena, você vê o que será feito, o que será usado e por quê. Ela explica o que fazer em casa e o que não fazer, e indica o médico se houver necessidade de prescrição.',
    next: [
      ['qual-pomada-unha-inflamada', 'Para entender os tipos de pomada em geral'],
      ['primeira-consulta-podologia', 'Para ver o passo a passo da primeira consulta'],
    ],
    faq: [
      { q: 'A podóloga receita pomada?', a: 'Ela pode usar produtos dentro de sua atuação durante o atendimento. Medicamentos com prescrição são decisão médica.' },
      { q: 'Posso pedir o nome do produto?', a: 'Pode perguntar. Mas o uso em casa deve seguir a orientação dada para o seu caso.' },
    ],
  },
  {
    slug: 'dedo-inflamado-apos-podologo',
    hub: P1,
    group: 'No consultório e depois',
    short: 'Inflamou após a podóloga',
    h1: 'Fui ao podólogo e meu dedo inflamou. *O que pode ser?*',
    lead: 'Avise o profissional que atendeu, descreva quando começou e como evoluiu. Dor intensa, secreção, febre ou piora rápida pedem avaliação médica sem esperar.',
    teaser: 'O que fazer quando o dedo incomoda depois do atendimento.',
    sections: [
      {
        h: 'O que fazer *primeiro*',
        p: [
          'Entre em contato com o profissional que realizou o atendimento e descreva: quando os sintomas começaram, se há dor, mudança de cor, inchaço, secreção ou dificuldade para caminhar, e como evoluíram. Quanto mais precisa a informação, mais objetiva a orientação.',
        ],
      },
      {
        h: 'O que *pode estar acontecendo*',
        p: [
          'Depois de qualquer cuidado na região da unha, o dedo pode ficar sensível. Mas dor crescente, calor, vermelhidão que se espalha, secreção ou febre não devem ser aguardados: procure avaliação médica.',
          'Evite cortar, espremer ou aplicar produtos por conta própria até conversar com o profissional.',
        ],
      },
    ],
    faz: ['Contar ao profissional o que está sentindo', 'Anotar quando e como começou', 'Procurar médico se houver sinais de alerta'],
    evita: ['Mexer na região para “corrigir”', 'Aplicar produtos sem orientação', 'Esperar piorar antes de avisar'],
    lena: 'Se você foi atendida pela Lena, o contato direto pelo WhatsApp é o caminho: ela avalia, orienta e, se necessário, encaminha ao médico. Se foi atendida por outro profissional, o ideal é avisá-lo primeiro; a Lena pode avaliar o quadro em uma nova consulta.',
    offers: ['curativo', 'infeccao'],
    wa: 'Olá, Lena! Fiz um atendimento recentemente e o dedo ficou inflamado. Podemos conversar?',
    next: [
      ['inflamacao-na-unha-e-perigosa', 'Para conhecer os sinais de gravidade'],
      ['dedo-inflamado-unha-encravada', 'Para entender dor e pressão no dedo'],
    ],
    faq: [
      { q: 'É normal o dedo ficar sensível após o atendimento?', a: 'Pode haver sensibilidade, dependendo do procedimento. Se piorar ou surgirem sinais de alerta, entre em contato e procure avaliação.' },
      { q: 'Devo tirar o curativo?', a: 'Siga a orientação do profissional que fez o curativo e avise-o sobre qualquer mudança.' },
    ],
  },

  // ---------- Guia P2: valores ----------
  {
    slug: 'tabela-precos-podologia-2026',
    hub: P2,
    group: 'Valores e acesso',
    short: 'Tabela 2026',
    h1: 'Qual é a tabela de preços *da podologia para 2026?*',
    lead: 'Higienização completa dos pés a R$ 165,00, com lâmina encravada a R$ 185,00 e cuidado corretivo de R$ 300,00 a R$ 540,00. Veja o resumo da tabela 2026.',
    teaser: 'A tabela 2026 resumida, com os valores dos atendimentos mais procurados.',
    sections: [
      {
        h: 'Resumo da *tabela 2026*',
        p: [
          'Estes são os valores de referência dos atendimentos mais procurados. A Lena os mantém na página inicial com o tempo médio de cada um, para você comparar antes de marcar.',
        ],
      },
    ],
    extraHtml: priceTable,
    faz: ['Descrever a queixa para indicar o atendimento certo', 'Confirmar o valor e o horário pelo WhatsApp', 'Consultar a tabela completa antes de agendar'],
    evita: ['Escolher só pelo menor valor sem entender o que está incluso', 'Presumir que o valor de um caso vale para o seu', 'Adiar até o quadro exigir um cuidado mais complexo'],
    lena: 'A Lena confirma o atendimento indicado para a sua queixa e o valor antes do horário. Não há surpresa: o que está na tabela é a referência, e qualquer mudança é conversada antes.',
    offers: ['higienizacao', 'lamina', 'combo'],
    next: [
      ['quanto-custa-sessao-podologa', 'Para saber quanto dura e como se organiza uma sessão'],
      ['primeira-consulta-podologia', 'Para ver o que a primeira consulta inclui'],
    ],
    faq: [
      { q: 'Os valores mudam?', a: 'Os valores são de 2026 e podem ser atualizados. Confirme pelo WhatsApp.' },
      { q: 'Onde vejo a tabela completa?', a: 'Na página inicial, com órteses, próteses, fototerapia e combos.' },
    ],
  },
  {
    slug: 'quanto-custa-sessao-podologa',
    hub: P2,
    group: 'Valores e acesso',
    short: 'Quanto custa a sessão',
    h1: 'Quanto custa uma sessão *na podóloga?*',
    lead: 'Depende do tempo e do cuidado: de R$ 165,00 (higienização completa, 40 min) a R$ 270,00 no combo com hidratação (60 min). Veja como a sessão se organiza.',
    teaser: 'Duração, o que influencia o valor e como os combos funcionam.',
    sections: [
      {
        h: 'O que *entra* no valor da sessão',
        p: [
          'O valor reflete o tempo e a complexidade do cuidado: uma higienização completa leva em média 40 minutos; com lâmina encravada, 1h10; um curativo, 10 minutos. Cuidados corretivos para unha com infecção têm valores próprios, por grau e por lado.',
        ],
      },
      {
        h: 'Combos e *frequência*',
        p: [
          'Alguns atendimentos podem ser combinados. Higienização completa e hidratação, por exemplo, somam R$ 295,00 avulsos e saem por R$ 270,00 no combo de 60 minutos.',
          'Não existe frequência igual para todos: depende do que foi observado na avaliação e do seu objetivo. A Lena combina com você o intervalo que faz sentido.',
        ],
      },
    ],
    faz: ['Informar a queixa para indicar a sessão certa', 'Perguntar sobre combos quando fizer sentido', 'Confirmar tempo e valor ao agendar'],
    evita: ['Comparar sessões de tempos e finalidades diferentes', 'Marcar vários atendimentos sem avaliação', 'Pular o acompanhamento recomendado'],
    lena: 'A Lena explica quanto tempo a sua sessão deve levar, o que será feito e quanto custa antes de agendar. Se um combo fizer sentido, ela apresenta a economia; se não, indica só o necessário.',
    offers: ['higienizacao', 'combo', 'lamina'],
    next: [
      ['tabela-precos-podologia-2026', 'Para ver a tabela resumida de 2026'],
      ['tem-atendimento-podologia-pelo-sus', 'Se você também quer saber sobre o SUS'],
    ],
    faq: [
      { q: 'Quanto tempo dura uma sessão?', a: 'Na tabela 2026, de 10 minutos (curativo) a 1h10 (higienização com lâmina encravada), conforme o atendimento.' },
      { q: 'Preciso de várias sessões?', a: 'Depende da avaliação. Não existe número único para todos os casos.' },
    ],
  },
  {
    slug: 'tem-atendimento-podologia-pelo-sus',
    hub: P2,
    group: 'Valores e acesso',
    short: 'SUS',
    h1: 'Tem atendimento de podologia *pelo SUS?*',
    lead: 'A oferta varia por rede, unidade e necessidade clínica. Procure a UBS de referência ou a Secretaria de Saúde. Em Taguatinga há atendimento particular com hora marcada.',
    teaser: 'Como buscar informação no SUS e a alternativa de atendimento particular.',
    sections: [
      {
        h: 'Como buscar *no SUS*',
        p: [
          'A disponibilidade de cuidados com os pés varia conforme o município, a unidade e a necessidade clínica. Não é possível afirmar pela internet que um serviço específico exista em determinada unidade.',
          'O caminho é procurar a Unidade Básica de Saúde (UBS) de referência ou os canais oficiais da Secretaria de Saúde, explicar a queixa e perguntar pelo fluxo adequado. Quem tem diabetes deve perguntar na UBS sobre o acompanhamento dos pés.',
        ],
      },
      {
        h: 'Quando o *particular* faz sentido',
        p: [
          'Se você precisa de um horário marcado, quer evitar espera ou tem uma queixa pontual como unha encravada, o atendimento particular em Taguatinga é uma alternativa. A Lena informa a tabela 2026 com antecedência e confirma tempo e valor pelo WhatsApp.',
          'Em qualquer caso, dor intensa, secreção, febre ou piora rápida pedem avaliação médica sem demora.',
        ],
      },
    ],
    faz: ['Procurar a UBS de referência e descrever a queixa', 'Comparar tempo de espera e urgência do seu caso', 'Buscar atendimento médico se houver sinais de alerta'],
    evita: ['Esperar meses com dor forte por falta de vaga', 'Presumir que o serviço existe em todas as unidades', 'Ignorar sinais de infecção'],
    lena: 'Se você optar pelo atendimento particular, a Lena atende com hora marcada em Taguatinga, informa os valores antes e orienta quando o caso precisa de médico ou do serviço público.',
    offers: ['higienizacao', 'lamina'],
    next: [
      ['quanto-custa-sessao-podologa', 'Para saber quanto custa e quanto dura uma sessão'],
      ['tabela-precos-podologia-2026', 'Para ver a tabela 2026'],
    ],
    faq: [
      { q: 'O SUS faz podologia?', a: 'A oferta varia por unidade e necessidade clínica. Confirme na UBS de referência ou na Secretaria de Saúde.' },
      { q: 'Onde é o atendimento particular da Lena?', a: 'Na St. Qi QI 17, Centro Comercial, Sala 09, em Taguatinga, Brasília — DF, com hora marcada.' },
    ],
  },
];
