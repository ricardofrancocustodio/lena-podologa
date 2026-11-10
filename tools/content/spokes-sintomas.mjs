// Perguntas dos guias "Unha inflamada" (U) e "Dedo inflamado" (D). Cada página tem um ângulo próprio.
const U = 'unha-inflamada-o-que-fazer';
const D = 'dedo-inflamado-unha-encravada';

export const spokesSintomas = [
  // ---------- Guia U: por região e sintoma ----------
  {
    slug: 'unha-do-pe-inflamada-o-que-fazer',
    hub: U,
    group: 'Por região e sintoma',
    short: 'Unha do pé',
    h1: 'Tenho a unha do pé inflamada: *o que devo fazer?*',
    lead: 'Alivie a pressão do calçado, mantenha o pé limpo e seco e não mexa na unha. Se a dor persistir, a avaliação mostra se é encravada, trauma ou outra causa.',
    teaser: 'Calçado, meia e corte: o que ajustar na rotina para a unha parar de inflamar.',
    sections: [
      {
        h: 'Por que a unha do *pé* inflama tanto',
        p: [
          'Os pés passam o dia dentro de sapatos, abafados e sob pressão. Calçados estreitos, meias apertadas, cortes muito curtos ou arredondados e pequenas batidas deixam a pele ao redor da unha vermelha, quente e sensível. Por isso a unha do pé inflama com mais frequência que a da mão.',
          'A causa muda o cuidado. Uma unha que pressiona a lateral do dedo é diferente de uma unha machucada por uma batida ou de uma pele irritada por atrito. Só olhar a aparência não basta para saber qual é a sua.',
        ],
      },
      {
        h: 'O que dá para ajustar *já na rotina*',
        p: [
          'Prefira calçados de bico largo que não encostem na unha, troque meias úmidas e seque bem entre os dedos. Evite passar horas seguidas com o mesmo calçado fechado.',
          'Esses ajustes reduzem a pressão, mas não resolvem a causa. Se a vermelhidão volta, a dor aumenta ou a unha muda de formato, o próximo passo é avaliar, não insistir.',
        ],
      },
    ],
    faz: ['Usar calçado de bico largo e meias secas', 'Secar bem entre os dedos depois do banho', 'Observar se a dor aparece só ao calçar o sapato'],
    evita: ['Cavar ou cortar o canto da unha em casa', 'Passar pomada, álcool ou mistura sem orientação', 'Insistir no calçado que aperta'],
    lena: 'A Lena examina a unha do pé, a pele ao redor e os pontos de pressão do calçado. Se a borda da unha está machucando a pele, realiza o cuidado podológico indicado e explica como evitar que volte. Se há sinais de infecção, orienta o encaminhamento médico.',
    next: [
      ['unha-encravada-dedao-inflamada-o-que-fazer', 'Se o problema é no dedão'],
      ['dor-unha-dedao-o-que-fazer', 'Se dói sem estar vermelho nem inchado'],
    ],
    faq: [
      { q: 'Por que a unha do pé inflama com frequência?', a: 'Pressão de calçados, meias úmidas, cortes inadequados e pequenos traumas irritam a pele ao redor. Quando o problema se repete, vale avaliar a causa em vez de tratar só o sintoma.' },
      { q: 'Posso continuar usando o mesmo sapato?', a: 'Se o calçado pressiona o dedo, ele tende a manter a inflamação. Prefira um modelo mais largo ou aberto até a avaliação.' },
    ],
  },
  {
    slug: 'unha-encravada-dedao-inflamada-o-que-fazer',
    hub: U,
    group: 'Por região e sintoma',
    short: 'Dedão encravado',
    h1: 'Unha encravada no dedão inflamada: *o que fazer?*',
    lead: 'No dedão a pressão é maior. Não corte nem cave a lateral: proteja o dedo e procure avaliação podológica para unha encravada em Taguatinga.',
    teaser: 'Por que o dedão sofre mais e como a lâmina encravada é tratada no consultório.',
    sections: [
      {
        h: 'Por que o *dedão* sofre mais',
        p: [
          'O dedão carrega boa parte do peso a cada passo e é o mais exposto ao bico do sapato. Quando a borda da unha pressiona a pele da lateral, cada passada reforça a dor, a vermelhidão e o inchaço.',
          'Esse ciclo explica por que cortar “só um pedacinho” em casa raramente resolve: a lateral volta a pressionar e a pele, já machucada, fica ainda mais sensível.',
        ],
      },
      {
        h: 'Como o cuidado é feito *no consultório*',
        p: [
          'Na tabela 2026, a higienização completa com lâmina encravada leva em média 1h10 e tem valor de referência de R$ 185,00. Se a avaliação identificar infecção, existe uma etapa corretiva (graus I a III), com valores e tempos próprios.',
          'A Lena explica o que vai fazer antes de começar e depois orienta calçado, corte e sinais de retorno. Cada caso é individual e nenhum resultado é prometido antes da avaliação.',
        ],
      },
    ],
    faz: ['Usar calçado largo ou aberto, sem pressionar o dedão', 'Evitar caminhadas longas e esportes até a avaliação', 'Anotar vermelhidão, calor ou secreção'],
    evita: ['Cortar em V ou cavar a lateral', 'Introduzir algodão, palito ou objetos sob a unha', 'Esperar semanas na esperança de que passe'],
    lena: 'A Lena avalia o ângulo da unha, a pele inflamada e o calçado que você usa. Ela executa o cuidado podológico para a unha encravada, orienta como evitar a recidiva e encaminha ao médico se houver sinais de infecção importante.',
    offers: ['lamina', 'infeccao', 'curativo'],
    next: [
      ['e-perigoso-deixar-unha-encravada', 'Se você pensa em esperar para ver se passa'],
      ['desencravar-unha-doi', 'Se a dúvida é se o atendimento dói'],
    ],
    faq: [
      { q: 'Quanto tempo leva o atendimento no dedão?', a: 'Na tabela 2026, a higienização completa com lâmina encravada leva em média 1h10. O tempo real depende da avaliação.' },
      { q: 'Preciso ir ao médico?', a: 'Se houver secreção, febre, dor intensa ou vermelhidão que se espalha, sim. A Lena orienta o encaminhamento quando necessário.' },
    ],
  },
  {
    slug: 'dor-unha-dedao-o-que-fazer',
    hub: U,
    group: 'Por região e sintoma',
    short: 'Dor no dedão',
    h1: 'Tenho dor na unha do dedão do pé: *o que devo fazer?*',
    lead: 'Nem toda dor na unha é encravada: pressão, batida e calçado também doem. Observe quando a dor aparece, reduza o atrito e agende avaliação se ela voltar.',
    teaser: 'Dor sem vermelhidão: pressão, batida, calçado esportivo ou unha escurecida.',
    sections: [
      {
        h: 'Dor *sem* inchaço também conta',
        p: [
          'Quem sente dor na unha do dedão nem sempre vê vermelhidão ou inchaço. A dor pode vir da pressão do bico do calçado, de batidas repetidas (corrida, futebol, academia), de uma unha que engrossou ou de um pequeno hematoma sob a unha.',
          'Perceber o padrão ajuda: dói só ao calçar? Dói ao tocar? Aparece depois de atividade física? Essas respostas orientam a avaliação mais do que a aparência da unha.',
        ],
      },
      {
        h: 'Um mini-diário que *ajuda na consulta*',
        p: [
          'Antes de agendar, anote há quanto tempo a dor existe, o que a piora, o calçado usado e se houve batida recente. Essas informações tornam a conversa objetiva, em vez de “dói de vez em quando”.',
          'Se a unha escureceu depois de uma pancada ou a dor é forte e pulsante, não espere: procure avaliação com prioridade.',
        ],
      },
    ],
    faz: ['Anotar quando a dor aparece e o que a piora', 'Testar calçado mais largo por alguns dias', 'Proteger o dedo de novas batidas'],
    evita: ['Furar a unha escurecida para “aliviar”', 'Testar vários produtos até acertar', 'Ignorar uma dor que volta toda semana'],
    lena: 'A Lena observa a unha, a pele e a forma como você pisa e calça. Quando a dor vem de pressão ou de alteração na unha, orienta o cuidado e a mudança de hábitos; quando há sinal de lesão que exige médico, indica o encaminhamento.',
    next: [
      ['por-que-unha-doi-por-dentro', 'Para entender as causas possíveis da dor'],
      ['quando-unha-fica-dolorida-o-que-fazer', 'Se a dor vai e volta'],
    ],
    faq: [
      { q: 'Dor na unha do dedão é sempre unha encravada?', a: 'Não. Pode ser pressão, batida, alteração na unha ou inflamação da pele. Só a avaliação confirma a causa.' },
      { q: 'A unha escureceu depois de uma batida. E agora?', a: 'Procure avaliação, principalmente se há dor forte. Não fure nem tente drenar a região em casa.' },
    ],
  },
  {
    slug: 'dedo-da-unha-inflamado-o-que-fazer',
    hub: U,
    group: 'Por região e sintoma',
    short: 'Dedo da unha',
    h1: 'O que fazer quando o dedo da unha está *inflamado?*',
    lead: 'Antes de tudo, pare de mexer: apertar, espremer ou cavar a pele pode transformar irritação em ferida. Proteja o dedo e procure avaliação.',
    teaser: 'A regra de ouro: não manipular. O que parar de fazer hoje.',
    sections: [
      {
        h: 'Por que *mexer* piora',
        p: [
          'Quando a pele ao redor da unha está inflamada, ela está sensível e se machuca com facilidade. Cada tentativa de espremer, puxar a pele ou “soltar” a unha cria pequenas lesões e pode levar bactérias para uma região já irritada.',
          'É um impulso comum: dói, então queremos resolver na hora. O cuidado mais útil agora é o oposto: reduzir o contato e a pressão.',
        ],
      },
      {
        h: 'Pele, unha ou *os dois?*',
        p: [
          'A inflamação pode estar na pele ao redor (por atrito, corte de cutícula, trauma) ou na própria unha que pressiona a lateral. Por fora, é difícil diferenciar. É isso que a avaliação presencial faz: observar com técnica e entender o que gera a dor.',
          'Se o dedo está quente, muito inchado ou com secreção, não é caso de esperar nem de resolver em casa.',
        ],
      },
    ],
    faz: ['Deixar o dedo em repouso, sem apertar', 'Lavar as mãos antes de tocar na região', 'Proteger do atrito do calçado'],
    evita: ['Espremer ou “estourar” a região', 'Retirar cutícula ou pele solta', 'Usar alicate, palito ou lâmina'],
    lena: 'A Lena avalia se a inflamação vem da pele ou da unha, remove a causa de pressão dentro da sua atuação e orienta o que fazer nos dias seguintes. Sinais de infecção importante são encaminhados ao médico.',
    next: [
      ['o-que-fazer-pe-da-unha-inflamado', 'Depois de parar de mexer: o que realmente ajuda'],
      ['inflamacao-na-unha-e-perigosa', 'Para saber quando é sinal de alerta'],
    ],
    faq: [
      { q: 'Posso estourar a bolinha ou a região com pus?', a: 'Não. Drenar em casa pode agravar a infecção. Procure avaliação médica.' },
      { q: 'Quanto tempo devo esperar antes de agendar?', a: 'Não há prazo único. Se não houver melhora clara, se piorar ou se houver sinais de alerta, procure avaliação.' },
    ],
  },
  {
    slug: 'o-que-fazer-pe-da-unha-inflamado',
    hub: U,
    group: 'Por região e sintoma',
    short: 'Desinflamar',
    h1: 'O que é bom para desinflamar o *pé da unha?*',
    lead: 'O que realmente desinflama é remover a causa: pressão, lâmina encravada ou trauma. Em casa só dá para proteger; o cuidado que resolve é o profissional.',
    teaser: 'O que é cuidado de verdade: o que se faz em casa e o que só o profissional faz.',
    sections: [
      {
        h: 'O que é bom *em casa*',
        p: [
          'Em casa, “bom” significa não piorar: reduzir a pressão, usar calçado confortável, manter o pé limpo e seco e observar a evolução. São medidas de proteção que ajudam o corpo e a avaliação, mas não removem o que está causando a inflamação.',
        ],
      },
      {
        h: 'O que é bom *no consultório*',
        p: [
          'A inflamação costuma ter um motivo físico: uma borda de unha que machuca, pele sob pressão, um canto mal cortado. Tratar esse motivo é o que dá alívio duradouro. A podóloga avalia, executa os cuidados podológicos indicados e orienta o seguimento.',
          'Quando há sinais de infecção, o cuidado corretivo e, se necessário, a avaliação médica entram no plano. Por isso a pergunta “o que é bom” só tem resposta depois de olhar o seu pé.',
        ],
      },
    ],
    faz: ['Proteger o dedo de pressão e atrito', 'Manter o pé limpo e seco', 'Agendar avaliação para tratar a causa'],
    evita: ['Procurar “o produto certo” em vez da causa', 'Aplicar substâncias que ardem ou queimam', 'Usar de novo o calçado que causou o problema'],
    lena: 'Na avaliação, a Lena identifica a causa física da inflamação e realiza o cuidado podológico que cabe ao caso. Depois orienta calçado, corte e hábitos, para que a inflamação não volte pelo mesmo motivo.',
    next: [
      ['como-desinflamar-unha-encravada-em-casa', 'Para ver a rotina de cuidados em casa'],
      ['remedio-caseiro-unha-encravada', 'Se você pensa em usar algum produto'],
    ],
    faq: [
      { q: 'Existe algo que desinflame sozinho?', a: 'Dependendo da causa, a inflamação pode melhorar quando a pressão é removida. Se continua ou piora, é preciso avaliar.' },
      { q: 'Preciso de remédio?', a: 'Isso é decisão médica. A podóloga cuida da parte podológica e orienta o encaminhamento quando necessário.' },
    ],
  },
  // ---------- Guia U: quando preocupar ----------
  {
    slug: 'quando-unha-fica-dolorida-o-que-fazer',
    hub: U,
    group: 'Quando se preocupar',
    short: 'Unha dolorida',
    h1: 'Quando a unha fica dolorida, *o que fazer?*',
    lead: 'Observe a dor: se melhora ao tirar a pressão, acompanhe; se volta, piora ou limita o caminhar, agende avaliação. Sinais de alerta não esperam.',
    teaser: 'Um guia de decisão: quando observar, quando agendar e quando ir ao médico.',
    sections: [
      {
        h: 'Um semáforo *simples* para decidir',
        p: [
          'Verde: dor leve, só com um calçado específico, que some ao tirá-lo. Troque o calçado e acompanhe.',
          'Amarelo: a dor volta, piora, incomoda ao caminhar, a pele fica vermelha ou a unha muda de forma ou cor. Agende avaliação.',
          'Vermelho: dor intensa, secreção, febre, calor, inchaço importante, ou diabetes e circulação comprometida. Procure avaliação médica sem esperar.',
        ],
      },
      {
        h: 'Como se preparar para a *consulta*',
        p: [
          'Anote quando a dor começou, o que a piora, o calçado que você usa e se já aconteceu antes. Se possível, leve o calçado que mais usa. A conversa fica mais objetiva e o cuidado, mais certeiro.',
        ],
      },
    ],
    faz: ['Tirar a pressão: calçado folgado e repouso do pé', 'Registrar a evolução: melhora, igual ou pior', 'Agendar se a dor não for embora'],
    evita: ['Esperar indefinidamente “para ver se passa”', 'Tentar várias soluções ao mesmo tempo', 'Ignorar sinais de alerta'],
    lena: 'A Lena ouve seu histórico, observa a unha e a pele e define se o caso é de cuidado podológico, de mudança de hábito ou de encaminhamento médico. Você sai sabendo o que fazer em cada situação.',
    next: [
      ['quanto-tempo-dura-unha-inflamada', 'Se você quer saber por quanto tempo esperar'],
      ['dor-unha-dedao-o-que-fazer', 'Se a dor é no dedão e sem inchaço'],
    ],
    faq: [
      { q: 'Posso esperar a dor passar?', a: 'Dor leve, ligada a um calçado e que melhora ao removê-lo, pode ser observada. Se persistir, voltar ou piorar, agende avaliação.' },
      { q: 'Preciso levar algum exame?', a: 'Não é necessário. Leve suas dúvidas e informe condições de saúde, como diabetes, e medicamentos de uso contínuo.' },
    ],
  },
  {
    slug: 'quanto-tempo-dura-unha-inflamada',
    hub: U,
    group: 'Quando se preocupar',
    short: 'Quanto dura',
    h1: 'Quanto tempo dura *uma unha inflamada?*',
    lead: 'Não há prazo único: depende da causa. O que importa é a direção. Se melhora ao tirar a pressão, acompanhe; se estaciona, volta ou piora, não espere mais.',
    teaser: 'Por que não existe prazo fixo e quais marcos indicam a hora de agendar.',
    sections: [
      {
        h: 'Por que o prazo *varia tanto*',
        p: [
          'Uma irritação por calçado pode melhorar quando a pressão é retirada. Uma borda de unha encravada continua machucando a pele enquanto estiver ali. Um trauma tem seu próprio tempo. Por isso a mesma “unha inflamada” pode durar pouco ou se arrastar por semanas.',
        ],
      },
      {
        h: 'Três marcos para *decidir*',
        p: [
          'Melhorando: dor e vermelhidão diminuem com repouso e calçado confortável. Acompanhe.',
          'Parada ou intermitente: não melhora de forma clara ou volta sempre. É hora de agendar avaliação.',
          'Piorando: a dor aumenta, aparecem calor, inchaço ou secreção. Procure avaliação médica sem esperar.',
        ],
      },
    ],
    faz: ['Anotar a data de início e a evolução', 'Reduzir a pressão no dedo desde o primeiro dia', 'Agendar se não houver melhora clara'],
    evita: ['Contar dias esperando que passe sozinho', 'Voltar ao mesmo calçado ao primeiro alívio', 'Esperar piorar para procurar ajuda'],
    lena: 'A Lena avalia a causa e estima, caso a caso, o que esperar do cuidado e do acompanhamento. Você não precisa adivinhar o prazo: a avaliação mostra se é um quadro para observar ou para tratar agora.',
    next: [
      ['quando-unha-fica-dolorida-o-que-fazer', 'Para um guia de decisão passo a passo'],
      ['e-perigoso-deixar-unha-encravada', 'Para entender o risco de adiar'],
    ],
    faq: [
      { q: 'Quantos dias esperar antes de procurar ajuda?', a: 'Não há número que sirva para todos. Se a dor não melhora de forma clara, volta ou piora, agende avaliação. Sinais de alerta não esperam.' },
      { q: 'Por que a inflamação volta?', a: 'Se a causa de pressão continua, a inflamação tende a voltar. A avaliação ajuda a identificar e remover essa causa.' },
    ],
  },
  {
    slug: 'inflamacao-na-unha-e-perigosa',
    hub: U,
    group: 'Quando se preocupar',
    short: 'É perigosa?',
    h1: 'A inflamação na unha é *perigosa?*',
    lead: 'Nem toda inflamação é grave, mas não deve ser ignorada. O risco aumenta com pus, febre, vermelhidão que avança ou em quem tem diabetes ou má circulação.',
    teaser: 'Quais sinais indicam gravidade e quem precisa de atenção redobrada.',
    sections: [
      {
        h: 'Inflamação *simples* ou sinal de infecção?',
        p: [
          'Inflamação é a reação do corpo a pressão, trauma ou irritação: aparece como dor, calor, vermelhidão e inchaço leves. Quando bactérias entram na pele machucada, o quadro pode evoluir para infecção, com mais dor, secreção e piora rápida.',
          'Em casa não é possível distinguir uma da outra com certeza. Por isso, sinais que avançam merecem avaliação.',
        ],
      },
      {
        h: 'Quem precisa de *mais cuidado*',
        p: [
          'Pessoas com diabetes, circulação comprometida, perda de sensibilidade nos pés ou imunidade baixa têm mais risco de complicações e podem sentir menos dor. Para esse grupo, qualquer alteração na unha ou na pele dos pés merece avaliação médica sem demora.',
        ],
      },
    ],
    faz: ['Observar a evolução da vermelhidão e do calor', 'Registrar febre ou mal-estar', 'Procurar avaliação cedo se faz parte do grupo de risco'],
    evita: ['Drenar ou perfurar a região em casa', 'Esperar a “infecção estourar”', 'Usar antibiótico guardado de outro tratamento'],
    lena: 'A Lena reconhece os sinais que permitem cuidado podológico e os que exigem médico. Quando há infecção, o atendimento corretivo da tabela 2026 entra no plano; quando o quadro é maior do que a podologia cobre, ela encaminha.',
    next: [
      ['e-perigoso-deixar-unha-encravada', 'Para ver o que acontece quando se adia'],
      ['qual-antibiotico-unha-encravada', 'Para entender quando antibiótico entra no tratamento'],
    ],
    faq: [
      { q: 'Como saber se a unha está infeccionada?', a: 'Pus, mau cheiro, dor crescente, calor, vermelhidão que avança e febre sugerem infecção. Procure avaliação médica.' },
      { q: 'Diabético pode esperar?', a: 'Não. Pessoas com diabetes devem procurar avaliação médica diante de qualquer alteração nos pés.' },
    ],
  },
  {
    slug: 'e-perigoso-deixar-unha-encravada',
    hub: U,
    group: 'Quando se preocupar',
    short: 'Deixar encravada',
    h1: 'É perigoso deixar *a unha encravada?*',
    lead: 'Adiar costuma prolongar a dor e aumentar o risco de inflamação e infecção. Na tabela 2026, o cuidado cedo (R$ 185,00) custa menos que o corretivo (a partir de R$ 300,00).',
    teaser: 'O custo de adiar: mais dor, mais pressão e um cuidado mais complexo.',
    sections: [
      {
        h: 'O que acontece quando se *espera*',
        p: [
          'Enquanto a borda da unha continua pressionando a pele, cada passo repete a lesão. A região tende a ficar mais sensível, a pele pode se romper e o risco de infecção cresce. Também é comum o calçado passar a doer, e a pessoa a mudar o jeito de andar para compensar.',
          'Nem sempre a unha encravada piora, mas é impossível saber de antemão. Por isso a espera é uma aposta; a avaliação, não.',
        ],
      },
      {
        h: 'Cuidar *cedo* costuma ser mais simples',
        p: [
          'Na tabela 2026, a higienização completa com lâmina encravada tem valor de referência de R$ 185,00 e leva cerca de 1h10. Já o cuidado corretivo para unha com infecção começa em R$ 300,00 (um lado, grau I) e chega a R$ 540,00 (dois lados, grau III).',
          'O dinheiro não é o principal argumento: a diferença de valor reflete um atendimento mais complexo, que provavelmente também é mais incômodo para você.',
        ],
      },
    ],
    faz: ['Agendar assim que a dor se repetir', 'Usar calçado que não pressione o dedo', 'Informar diabetes ou má circulação'],
    evita: ['Tentar “segurar” até não aguentar mais', 'Mudar o jeito de andar para fugir da dor', 'Cortar profundamente a lateral em casa'],
    lena: 'A Lena avalia a unha encravada ainda no início, quando o cuidado costuma ser mais simples e confortável. Mesmo em casos mais avançados, ela realiza o cuidado corretivo indicado ou orienta o médico, se for o caso.',
    offers: ['lamina', 'infeccao'],
    next: [
      ['inflamacao-na-unha-e-perigosa', 'Para conhecer os sinais de gravidade'],
      ['desencravar-unha-doi', 'Se o medo é da dor do atendimento'],
    ],
    faq: [
      { q: 'A unha encravada pode sumir sozinha?', a: 'Algumas situações melhoram quando a pressão é removida, mas não há como garantir. Se a dor volta ou aumenta, avalie.' },
      { q: 'Quanto custa cuidar cedo?', a: 'Na tabela 2026, a higienização completa com lâmina encravada tem valor de referência de R$ 185,00. A indicação é confirmada na avaliação.' },
    ],
  },

  // ---------- Guia D: dor pulsante ----------
  {
    slug: 'unha-inflamada-latejando',
    hub: D,
    group: 'Dor pulsante',
    short: 'Latejando',
    h1: 'Unha inflamada latejando: *o que fazer?*',
    lead: 'O latejar indica pressão ou inflamação em profundidade. Reduza o atrito, sem apertar nem mexer, e agende avaliação se pulsar com frequência ou à noite.',
    teaser: 'O que o pulsar significa e quando ele deixa de ser “normal”.',
    sections: [
      {
        h: 'O que o *latejar* quer dizer',
        p: [
          'A sensação de pulsar costuma aparecer quando há pressão ou inflamação em uma região cheia de pequenos vasos e terminações nervosas, como a ponta do dedo. A dor acompanha a pulsação, por isso parece “bater” junto com o coração.',
          'O latejar não diz qual é a causa. Pode ser unha encravada, uma batida recente ou irritação da pele. É um sinal de que o dedo está sob estresse.',
        ],
      },
      {
        h: 'Quando o pulsar *preocupa mais*',
        p: [
          'Dor que pulsa à noite, que impede dormir, que vem com calor, inchaço ou secreção merece avaliação com prioridade. O mesmo vale para quem tem diabetes ou circulação comprometida.',
          'Se o pulsar é leve e some ao tirar a pressão do calçado, vale observar, mas sem deixar de agendar caso volte.',
        ],
      },
    ],
    faz: ['Soltar o dedo do calçado fechado', 'Notar se pulsa mais à noite ou ao pisar', 'Anotar se há calor ou inchaço'],
    evita: ['Apertar o dedo para “parar o latejar”', 'Introduzir objetos sob a unha', 'Tomar decisões de medicamento sem orientação'],
    lena: 'A Lena identifica de onde vem a pressão que faz o dedo pulsar e trata a causa dentro do que cabe à podologia. Se o quadro sugere infecção ou exige médico, ela explica o motivo e orienta a ida.',
    next: [
      ['como-aliviar-dedo-latejando', 'Para ver o que fazer nas próximas horas'],
      ['o-que-passar-unha-inflamada-latejando', 'Se você pensa em passar algo na unha'],
    ],
    faq: [
      { q: 'Unha latejando é sinal de infecção?', a: 'Pode ser, mas não necessariamente. Latejar com calor, inchaço, secreção ou febre exige avaliação médica.' },
      { q: 'Por que o latejar piora à noite?', a: 'Sem distrações, a dor tende a ser mais percebida. Se ela atrapalha o sono, procure avaliação.' },
    ],
  },
  {
    slug: 'como-aliviar-dedo-latejando',
    hub: D,
    group: 'Dor pulsante',
    short: 'Aliviar latejar',
    h1: 'Como aliviar um *dedo latejando?*',
    lead: 'Tire a pressão do dedo: calçado aberto ou folgado, pé em repouso e sem manipular a unha. É proteção, não tratamento; se persistir, agende avaliação.',
    teaser: 'O que fazer nas próximas horas, enquanto não há consulta.',
    sections: [
      {
        h: 'As *primeiras horas*',
        p: [
          'Se o dedo começou a latejar, o melhor movimento é diminuir o estresse sobre ele: tire o calçado fechado, use algo aberto ou folgado, evite caminhadas e esportes e não aperte nem pressione a região.',
          'Mantenha o pé limpo e seco. Se for tocar na região para lavar, use as mãos limpas e sem força.',
        ],
      },
      {
        h: 'O que *isso não resolve*',
        p: [
          'Proteger o dedo ajuda a não piorar, mas não remove a causa. Se a dor foi embora e volta no dia seguinte, é sinal de que a pressão continua em algum lugar.',
          'Ao amanhecer, se a dor persiste, aumenta ou surgem calor, inchaço ou secreção, procure avaliação.',
        ],
      },
    ],
    fazTitle: 'Para as próximas horas',
    faz: ['Usar calçado aberto ou folgado', 'Evitar caminhar muito e praticar esportes', 'Manter o pé limpo e seco'],
    evita: ['Apertar ou massagear a região dolorida', 'Furar, espremer ou introduzir objetos', 'Aplicar produtos “para aliviar na hora”'],
    lena: 'Na avaliação, a Lena encontra a origem da pressão e faz o cuidado podológico que cabe. A ideia é que você não dependa de “aliviar” toda noite, e sim resolver a causa do latejar.',
    next: [
      ['unha-inflamada-latejando', 'Para entender o que o latejar significa'],
      ['quando-unha-fica-dolorida-o-que-fazer', 'Para decidir se espera ou agenda'],
    ],
    faq: [
      { q: 'Posso tomar algo para a dor?', a: 'Isso deve ser orientado por médico ou farmacêutico, considerando alergias e outros medicamentos. A podóloga não prescreve.' },
      { q: 'Gelo ou água morna ajudam?', a: 'Não há resposta única. Evite improvisar em pele machucada e peça orientação na avaliação.' },
    ],
  },
  {
    slug: 'o-que-passar-unha-inflamada-latejando',
    hub: D,
    group: 'Dor pulsante',
    short: 'Passar na unha',
    h1: 'O que passar na unha inflamada *latejando?*',
    lead: 'Não há um produto indicado para dor que pulsa. O latejar vem de pressão em profundidade, que uma pomada na superfície não alcança. Trate a causa.',
    teaser: 'Por que “passar algo” raramente alcança a origem da dor que pulsa.',
    sections: [
      {
        h: 'Por que passar algo *na superfície* não chega',
        p: [
          'A dor que pulsa geralmente vem da pressão ou da inflamação mais fundas, na pele sob e ao lado da unha. Um produto aplicado por cima da pele dificilmente chega lá, e a pele machucada pode reagir mal ao que se coloca nela.',
          'Por isso é comum a pessoa testar um produto atrás do outro, sem alívio, e ainda ganhar irritação.',
        ],
      },
      {
        h: 'O que *vale* a pena fazer',
        p: [
          'Investigar a causa: o calçado aperta? A borda da unha está machucando? Houve batida? A resposta indica o cuidado. A podologia atua na causa física; medicamentos, quando necessários, são decisão médica.',
          'Enquanto isso, proteja o dedo e evite qualquer manipulação.',
        ],
      },
    ],
    faz: ['Descobrir o que está pressionando o dedo', 'Pedir orientação a médico ou farmacêutico sobre medicamentos', 'Agendar avaliação podológica'],
    evita: ['Experimentar um produto após o outro', 'Aplicar álcool, vinagre ou pomadas sem saber a causa', 'Cobrir com curativo apertado'],
    lena: 'A Lena foca na causa do latejar: se a borda da unha machuca, se há pressão do calçado ou inflamação da pele. Depois do cuidado podológico, orienta a rotina para o problema não voltar.',
    next: [
      ['qual-pomada-unha-inflamada', 'Para entender os tipos de pomada e por que a escolha é difícil'],
      ['o-que-passar-unha-inflamada-parar-dor', 'Se o que você quer é fazer a dor parar'],
    ],
    faq: [
      { q: 'Posso passar pomada de assadura ou antibiótico guardado?', a: 'Não é indicado. Sem saber a causa, pode irritar, causar alergia e esconder sinais importantes.' },
      { q: 'O que a podóloga passa na unha?', a: 'A escolha de produtos no consultório faz parte do atendimento e depende do caso. Não existe lista universal para uso em casa.' },
    ],
  },
  {
    slug: 'o-que-passar-unha-inflamada-parar-dor',
    hub: D,
    group: 'Dor pulsante',
    short: 'Parar a dor',
    h1: 'O que passar na unha inflamada *para parar de doer?*',
    lead: 'A dor para quando a causa é removida. Alívio imediato sem avaliação costuma durar pouco e pode esconder sinais. Proteja o dedo e agende o cuidado.',
    teaser: 'A dor para quando a causa para: o que alivia de verdade e o que apenas disfarça.',
    sections: [
      {
        h: 'Alívio *rápido* não é o mesmo que solução',
        p: [
          'Quem procura “o que passar para parar de doer” quer, com razão, voltar a caminhar sem dor. O problema é que alguns recursos apenas reduzem a sensação por algumas horas, enquanto a causa continua ali. A dor volta e, às vezes, o quadro avança sem que a pessoa perceba.',
        ],
      },
      {
        h: 'O que costuma *aliviar de verdade*',
        p: [
          'Retirar a pressão que mantém a dor: calçado adequado, repouso do pé e, principalmente, cuidado podológico que elimine a borda da unha ou a fonte de atrito. É aí que a dor tende a diminuir de forma duradoura.',
          'Quando a dor é forte, há sinais de infecção ou condições como diabetes, o caminho é médico. Alívio sem diagnóstico não é seguro nesses casos.',
        ],
      },
    ],
    faz: ['Remover a pressão: calçado folgado ou aberto', 'Buscar a origem da dor em vez de mascará-la', 'Agendar avaliação se a dor voltar'],
    evita: ['Aplicar anestésico ou analgésico tópico por conta própria', 'Considerar “passou” e voltar ao mesmo calçado', 'Ignorar dor forte ou crescente'],
    lena: 'A Lena trata a fonte da dor dentro da podologia e orienta você sobre o que fazer em casa e sobre quando buscar o médico. O objetivo é alívio que dure, não alívio que disfarce.',
    next: [
      ['o-que-passar-unha-inflamada-latejando', 'Se a dor é pulsante e você pensa em passar algo'],
      ['qual-comprimido-tomar-unha-inflamada', 'Se você pensa em tomar um comprimido'],
    ],
    faq: [
      { q: 'Por que a dor volta depois de passar algo?', a: 'Porque a causa continua. Produtos podem aliviar temporariamente, mas não removem pressão nem lâmina encravada.' },
      { q: 'Existe algo seguro para uso imediato?', a: 'Proteger o dedo e reduzir pressão. Para medicamentos, peça orientação a médico ou farmacêutico.' },
    ],
  },
  {
    slug: 'o-que-colocar-dedo-parar-de-doer',
    hub: D,
    group: 'Dor e causa',
    short: 'Dedo dolorido',
    h1: 'O que colocar no dedo para *parar de doer?*',
    lead: 'Antes de colocar algo, descubra de onde vem a dor: unha, pele, batida ou calo. Dor no dedo tem várias origens e cada uma pede um cuidado diferente.',
    teaser: 'Dor no dedo nem sempre é da unha: como identificar a origem.',
    sections: [
      {
        h: 'Dói a *unha* ou o dedo?',
        p: [
          'Nem toda dor no dedo vem da unha. Calos, calosidades, atrito do calçado, uma batida ou problemas na pele também causam dor. Colocar um produto sem saber onde dói pode irritar uma pele que nem era o problema.',
        ],
      },
      {
        h: 'Perguntas que *ajudam a localizar*',
        p: [
          'A dor é na lateral da unha, na ponta ou entre os dedos? Aparece ao pisar ou ao tocar? Há mancha, calo ou pele rachada? Quanto mais precisa a descrição, mais direta fica a avaliação.',
          'Dor intensa, febre, secreção ou inchaço importante pedem avaliação médica sem demora.',
        ],
      },
    ],
    faz: ['Localizar exatamente onde dói', 'Reduzir atrito: calçado folgado, meia sem costura', 'Agendar avaliação se a dor continuar'],
    evita: ['Cobrir o dedo com produtos sem saber a causa', 'Usar objetos para afastar a unha', 'Cortar calos ou pele por conta própria'],
    lena: 'A Lena examina o dedo todo, não só a unha: pele, calosidades, pontos de pressão e a forma como você pisa. Isso evita tratar a região errada e define o cuidado adequado.',
    offers: ['higienizacao', 'lamina', 'infeccao'],
    next: [
      ['por-que-unha-doi-por-dentro', 'Se a dor parece vir de baixo da unha'],
      ['como-aliviar-dedo-latejando', 'Se a dor pulsa'],
    ],
    faq: [
      { q: 'A dor no dedo pode ser calo?', a: 'Sim. Calos e calosidades causam dor por pressão. Só a avaliação diferencia de unha encravada.' },
      { q: 'Posso aplicar algo enquanto espero a consulta?', a: 'Evite produtos sem orientação. Proteja o dedo do atrito e mantenha limpo e seco.' },
    ],
  },
  {
    slug: 'por-que-unha-doi-por-dentro',
    hub: D,
    group: 'Dor e causa',
    short: 'Dói por dentro',
    h1: 'Por que minha unha está doendo *por dentro?*',
    lead: 'Dor “por dentro” costuma vir da pele sob ou ao lado da unha: pressão, batida, borda encravada ou inflamação. Só a avaliação confirma a sua causa.',
    teaser: 'As causas mais comuns de dor sob ou ao lado da unha.',
    sections: [
      {
        h: 'O que existe *por baixo* da unha',
        p: [
          'A unha parece uma peça dura e isolada, mas apoia sobre o leito ungueal, uma pele muito sensível, e é cercada por pregas de pele nas laterais. Quando algo pressiona essas áreas, a dor parece vir de “dentro” da unha.',
        ],
      },
      {
        h: 'Causas *mais comuns*',
        p: [
          'Pressão do calçado, uma pancada que gerou hematoma (mancha roxa ou escura), a borda da unha penetrando a pele lateral e inflamação da pele ao redor são situações frequentes.',
          'Cada uma pede uma conduta diferente: uma dor forte depois de pancada, com unha escurecida, não é igual a uma dor lateral que aparece ao calçar sapato fechado.',
        ],
      },
    ],
    faz: ['Observar se há mancha escura sob a unha', 'Notar se a dor é na ponta, no meio ou na lateral', 'Tirar a pressão do calçado'],
    evita: ['Furar a unha para “soltar” a dor', 'Cortar por baixo da unha', 'Aplicar produtos irritantes'],
    lena: 'A Lena observa a unha, o leito, as laterais e os pontos de pressão. Com isso, define se o cuidado é podológico, se é preciso mudar hábitos ou se a situação pede avaliação médica.',
    next: [
      ['unha-inflamada-latejando', 'Se a dor pulsa'],
      ['dor-unha-dedao-o-que-fazer', 'Se a dor é no dedão do pé'],
    ],
    faq: [
      { q: 'Unha roxa ou escura dói por quê?', a: 'Um hematoma sob a unha, geralmente após batida, pode causar pressão e dor. Procure avaliação e não fure em casa.' },
      { q: 'Dor por dentro é sempre unha encravada?', a: 'Não. Pressão, trauma e inflamação da pele também causam. A avaliação identifica a origem.' },
    ],
  },
];
