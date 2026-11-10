// Perguntas do guia "Remédio caseiro para unha encravada". Cada página trata de um produto ou ideia diferente.
const R = 'remedio-caseiro-unha-encravada';

export const spokesProdutos = [
  // ---------- Pomadas e sprays ----------
  {
    slug: 'qual-pomada-unha-inflamada',
    hub: R,
    group: 'Pomadas e sprays',
    short: 'Pomada',
    h1: 'Qual pomada usar na *unha inflamada?*',
    lead: 'Pomada não é uma coisa só: antibiótica, corticoide, cicatrizante e antifúngica tratam problemas diferentes. Sem saber a causa, escolher uma é adivinhar.',
    teaser: 'Os tipos de pomada e por que a escolha depende do diagnóstico.',
    sections: [
      {
        h: 'Pomada *para quê?*',
        p: [
          'Pomadas antibióticas atuam sobre bactérias. As com corticoide reduzem sinais de inflamação. As cicatrizantes e hidratantes protegem a pele. As antifúngicas combatem fungos. Cada uma tem indicação, contraindicação e risco de reação.',
          'Uma unha inflamada pode ser causada por pressão, trauma, infecção por bactérias ou por fungos, e a pomada certa para uma situação pode ser errada para outra.',
        ],
      },
      {
        h: 'O risco de *acertar por sorte*',
        p: [
          'Usar a pomada errada pode irritar a pele, provocar alergia e esconder sinais que o médico ou a podóloga precisam ver. E nenhuma pomada tira a borda da unha de dentro da pele.',
          'O caminho seguro: avaliar a causa primeiro e, quando houver indicação de medicamento, seguir a prescrição médica.',
        ],
      },
    ],
    faz: ['Descrever a unha e a dor a um profissional', 'Pedir orientação a médico ou farmacêutico', 'Agendar avaliação podológica'],
    evita: ['Usar pomada que sobrou de outro tratamento', 'Misturar produtos diferentes na mesma região', 'Passar pomada para “fechar” uma ferida sem saber a causa'],
    lena: 'A Lena avalia a unha, a pele e os sinais de infecção. Faz o cuidado podológico que cabe e, se a situação pede prescrição, indica o médico. Você deixa de adivinhar a pomada e passa a entender o que está acontecendo.',
    next: [
      ['pomada-antiinflamatoria-unha-inflamada', 'Se a sua dúvida é sobre pomada anti-inflamatória'],
      ['spray-unha-encravada', 'Se você pensa em usar um spray'],
    ],
    faq: [
      { q: 'Qual é a melhor pomada para unha inflamada?', a: 'Não existe uma melhor para todos. Depende da causa e deve ser definida por profissional de saúde.' },
      { q: 'Pomada resolve unha encravada?', a: 'Não remove a borda da unha que machuca a pele. Pode, no máximo, ter papel de apoio se prescrita por médico.' },
    ],
  },
  {
    slug: 'pomada-antiinflamatoria-unha-inflamada',
    hub: R,
    group: 'Pomadas e sprays',
    short: 'Pomada anti-inflamatória',
    h1: 'Qual pomada anti-inflamatória é indicada para *unhas inflamadas?*',
    lead: 'Pomadas com corticoide podem reduzir a vermelhidão sem tratar a causa e até esconder uma infecção. Uso em pele machucada deve ser decidido por médico.',
    teaser: 'O que uma pomada com corticoide faz, e por que ela pode esconder o problema.',
    sections: [
      {
        h: 'O que uma pomada *anti-inflamatória* faz',
        p: [
          'Pomadas anti-inflamatórias costumam conter corticoide. Elas reduzem a vermelhidão e o inchaço da pele, mas não removem a causa da inflamação: se a unha continua pressionando, o problema persiste.',
        ],
      },
      {
        h: 'Quando o *alívio* atrapalha',
        p: [
          'Ao diminuir os sinais visíveis, a pomada pode dar a impressão de que o quadro está resolvido enquanto uma infecção segue evoluindo por baixo. Em pele machucada ou infeccionada, corticoide também pode ser contraindicado.',
          'Por isso a decisão deve ser médica, com base no diagnóstico, e não numa busca por “a pomada indicada”.',
        ],
      },
    ],
    faz: ['Priorizar a identificação da causa', 'Consultar médico antes de usar corticoide', 'Ler a bula e respeitar contraindicações'],
    evita: ['Aplicar corticoide em ferida aberta ou com secreção', 'Prolongar o uso sem acompanhamento', 'Usar a pomada de outra pessoa'],
    lena: 'A Lena cuida da causa física da inflamação com atendimento podológico e orienta o encaminhamento médico quando o quadro sugere necessidade de prescrição. Assim você não precisa depender de uma pomada para disfarçar o problema.',
    next: [
      ['qual-pomada-unha-inflamada', 'Para ver os outros tipos de pomada'],
      ['qual-antiinflamatorio-unha-inflamada', 'Para o anti-inflamatório por via oral'],
    ],
    faq: [
      { q: 'Pomada com corticoide pode mascarar infecção?', a: 'Pode reduzir a vermelhidão e o inchaço e dar falsa sensação de melhora. O uso deve ser orientado por médico.' },
      { q: 'Posso usar pomada anti-inflamatória no dedo?', a: 'Isso depende do diagnóstico e deve ser decidido por médico, principalmente em pele machucada.' },
    ],
  },
  {
    slug: 'spray-unha-encravada',
    hub: R,
    group: 'Pomadas e sprays',
    short: 'Spray',
    h1: 'Qual spray é bom para *unha encravada?*',
    lead: 'Spray dá impressão de solução rápida, mas não afasta a unha da pele. Antissépticos, cicatrizantes e anestésicos têm funções diferentes e podem irritar.',
    teaser: 'O que cada tipo de spray promete e o que não faz pela unha encravada.',
    sections: [
      {
        h: 'O que os sprays *prometem*',
        p: [
          'Há sprays antissépticos, cicatrizantes, anestésicos tópicos e até produtos vendidos como “específicos para unha encravada”. A embalagem sugere alívio, mas cada tipo tem uma função e nenhum retira a borda da unha de dentro da pele.',
        ],
      },
      {
        h: 'Riscos que *ninguém* menciona',
        p: [
          'Em pele machucada, alguns sprays ardem, ressecam e podem causar alergia. Um anestésico tópico pode aliviar por um tempo e fazer a pessoa ignorar um quadro que avança. Já um antisséptico usado repetidamente pode irritar.',
          'Se a dor ou a vermelhidão persistem, o spray não substitui a avaliação.',
        ],
      },
    ],
    faz: ['Perguntar a um farmacêutico sobre o produto antes de usar', 'Proteger o dedo do atrito', 'Agendar avaliação se não houver melhora'],
    evita: ['Aplicar o spray várias vezes ao dia por conta própria', 'Usar anestésico para “aguentar” o calçado', 'Confiar em produto vendido como solução definitiva'],
    lena: 'A Lena cuida da causa física da unha encravada e do estado da pele. Se o quadro precisar de produto específico, ela explica a indicação dentro da sua atuação ou encaminha ao médico.',
    next: [
      ['qual-pomada-unha-inflamada', 'Se você pensa em pomada em vez de spray'],
      ['vinagre-na-unha-encravada', 'Se pensa em soluções caseiras'],
    ],
    faq: [
      { q: 'Spray resolve unha encravada?', a: 'Não. A borda da unha continua pressionando a pele. Spray pode ter papel de apoio, mas não substitui a avaliação.' },
      { q: 'Qual a diferença entre antisséptico e cicatrizante?', a: 'O antisséptico reduz microrganismos na pele; o cicatrizante apoia a cicatrização. A escolha depende da situação da pele.' },
    ],
  },
  // ---------- Comprimidos e anti-inflamatórios ----------
  {
    slug: 'qual-comprimido-tomar-unha-inflamada',
    hub: R,
    group: 'Comprimidos e anti-inflamatórios',
    short: 'Comprimido',
    h1: 'Qual comprimido tomar para *unha inflamada?*',
    lead: 'Analgésico, anti-inflamatório e antibiótico atuam em coisas diferentes: dor, inflamação e bactérias. Qual (se algum) é indicado é decisão médica.',
    teaser: 'O mapa das três classes de comprimido e por que não existe “o comprimido da unha”.',
    sections: [
      {
        h: 'Três classes, *três problemas*',
        p: [
          'Analgésicos aliviam a dor. Anti-inflamatórios reduzem a inflamação. Antibióticos combatem bactérias e só fazem sentido quando há infecção. Tomar um por dor, por inflamação ou por medo de infecção é confundir qual problema se está tratando.',
        ],
      },
      {
        h: 'O que o comprimido *não faz*',
        p: [
          'Nenhum comprimido afasta uma borda de unha que pressiona a pele. Ele pode aliviar o sintoma e, ao mesmo tempo, atrasar a busca pela causa. Além disso, cada medicamento tem contraindicações e interações.',
          'Por isso, a escolha deve ser feita por médico, que conhece o seu histórico, alergias e medicamentos em uso.',
        ],
      },
    ],
    faz: ['Informar alergias e remédios de uso contínuo ao médico', 'Distinguir dor, inflamação e infecção ao descrever o quadro', 'Agendar avaliação podológica da causa'],
    evita: ['Tomar o que “sobrou” de outro tratamento', 'Combinar remédios sem orientação', 'Usar o comprimido como única medida'],
    lena: 'A Lena identifica a causa física do desconforto e faz o cuidado podológico. Quando percebe sinais que justificam avaliação médica, ela orienta o encaminhamento, e a decisão sobre o comprimido fica com o médico.',
    next: [
      ['ibuprofeno-unha-inflamada', 'Para o caso específico do ibuprofeno'],
      ['qual-antibiotico-unha-encravada', 'Para entender o papel do antibiótico'],
    ],
    faq: [
      { q: 'Qual comprimido é indicado para unha inflamada?', a: 'Nenhum é indicado a todos. A escolha depende do diagnóstico e deve ser feita por médico.' },
      { q: 'Comprimido substitui o atendimento podológico?', a: 'Não. Medicamentos não removem a causa física da pressão na unha.' },
    ],
  },
  {
    slug: 'ibuprofeno-unha-inflamada',
    hub: R,
    group: 'Comprimidos e anti-inflamatórios',
    short: 'Ibuprofeno',
    h1: 'O ibuprofeno serve para *unha inflamada?*',
    lead: 'O ibuprofeno é um anti-inflamatório que pode ter restrições (estômago, rins, gestação, alergia). Mesmo quando alivia, não remove a causa da unha inflamada.',
    teaser: 'Quem não deve tomar sem orientação e por que alívio não é solução.',
    sections: [
      {
        h: 'O que o ibuprofeno *faz e não faz*',
        p: [
          'O ibuprofeno é um anti-inflamatório não esteroide, usado em muitas situações. Ele pode reduzir dor e inflamação, mas não remove a unha que pressiona a pele nem trata uma infecção por bactérias.',
        ],
      },
      {
        h: 'Quando é *preciso cautela*',
        p: [
          'Pessoas com problemas gástricos, renais, hipertensão, gestantes, alérgicos a anti-inflamatórios ou que tomam outros medicamentos precisam de orientação antes. Sem ela, o risco pode superar o benefício.',
          'Um alívio rápido também pode atrasar o cuidado: a dor diminui e a causa continua. Siga a orientação do médico ou do farmacêutico e a bula.',
        ],
      },
    ],
    faz: ['Perguntar a médico ou farmacêutico se pode usar', 'Informar problemas gástricos, renais e alergias', 'Cuidar da causa da dor com avaliação podológica'],
    evita: ['Tomar sem ler a bula ou consultar profissional', 'Usar ibuprofeno e outros anti-inflamatórios juntos', 'Considerar “curado” quando a dor diminuir'],
    lena: 'A Lena não prescreve medicamentos. O que ela faz é tratar a causa física do desconforto e orientar quando o caso precisa de médico. Isso complementa o que o médico decidir.',
    next: [
      ['qual-antiinflamatorio-unha-inflamada', 'Para entender os tipos de anti-inflamatório'],
      ['posso-pingar-dipirona-na-unha-inflamada', 'Se você viu dicas de aplicar remédio na unha'],
    ],
    faq: [
      { q: 'Posso tomar ibuprofeno com dor na unha?', a: 'Isso depende da sua saúde e de outros medicamentos. Pergunte a médico ou farmacêutico.' },
      { q: 'O ibuprofeno desinflama a unha encravada?', a: 'Pode reduzir sintomas, mas não remove a borda da unha. A causa precisa ser avaliada.' },
    ],
  },
  {
    slug: 'qual-antiinflamatorio-unha-inflamada',
    hub: R,
    group: 'Comprimidos e anti-inflamatórios',
    short: 'Anti-inflamatório',
    h1: 'Qual anti-inflamatório é bom para *unha inflamada?*',
    lead: 'Existem anti-inflamatórios não esteroides e corticoides, com indicações e riscos diferentes. Quem escolhe é o médico, depois do diagnóstico.',
    teaser: 'Os dois grandes tipos de anti-inflamatório e quem decide qual usar.',
    sections: [
      {
        h: 'Dois grandes *grupos*',
        p: [
          'Os anti-inflamatórios não esteroides (como o ibuprofeno) e os corticoides atuam de formas diferentes e têm riscos próprios. Podem ser em comprimido, injeção, pomada ou spray, e cada via tem indicação específica.',
        ],
      },
      {
        h: 'Por que a escolha é *médica*',
        p: [
          'A decisão considera a causa, a intensidade, doenças como diabetes ou problemas gástricos, alergias e outros remédios em uso. “Qual é bom” não tem resposta genérica, porque muda de pessoa para pessoa.',
          'Também é preciso decidir se há infecção, caso em que o anti-inflamatório sozinho pode não ser o caminho.',
        ],
      },
    ],
    faz: ['Marcar consulta médica para decidir o remédio', 'Levar a lista de remédios que você usa', 'Tratar a causa física com atendimento podológico'],
    evita: ['Escolher o anti-inflamatório pelo que “funcionou” em outra pessoa', 'Misturar anti-inflamatórios', 'Usar por vários dias sem avaliação'],
    lena: 'A Lena não indica medicamentos. Ela cuida da parte podológica, observa sinais que pedem médico e orienta o encaminhamento. Assim o médico decide o remédio e a podologia trata a causa.',
    next: [
      ['ibuprofeno-unha-inflamada', 'Para o caso específico do ibuprofeno'],
      ['pomada-antiinflamatoria-unha-inflamada', 'Para a versão em pomada'],
    ],
    faq: [
      { q: 'Quem pode indicar o anti-inflamatório?', a: 'O médico, após avaliar o seu caso. A podóloga não prescreve medicamentos.' },
      { q: 'Anti-inflamatório cura a unha encravada?', a: 'Não remove a causa física. Pode reduzir sintomas, se indicado.' },
    ],
  },
  {
    slug: 'posso-pingar-dipirona-na-unha-inflamada',
    hub: R,
    group: 'Comprimidos e anti-inflamatórios',
    short: 'Dipirona',
    h1: 'Posso pingar dipirona na *unha inflamada?*',
    lead: 'Não. Dipirona em gotas é um analgésico para uso oral; pingar na unha é uma dica de internet sem indicação, que pode irritar a pele e esconder sinais.',
    teaser: 'Por que uma dica popular de internet não é uma forma de uso indicada.',
    sections: [
      {
        h: 'De onde vem essa *dica*',
        p: [
          'A ideia de pingar dipirona na unha circula em vídeos e mensagens como “truque” para aliviar a dor. Mas a dipirona em gotas foi desenvolvida para uso por via oral. Aplicar sobre a pele machucada não é uma indicação da bula.',
        ],
      },
      {
        h: 'O que pode *dar errado*',
        p: [
          'O produto pode irritar a pele, provocar alergia e passar a falsa impressão de melhora. Se houver ferida, infecção ou dor forte, a aplicação pode atrasar o cuidado adequado.',
          'Também não existe vantagem comprovada em aplicar medicamento oral diretamente na unha. A dor precisa de explicação, não de truque.',
        ],
      },
    ],
    faz: ['Procurar a causa da dor', 'Perguntar a farmacêutico ou médico sobre uso oral, se for o caso', 'Agendar avaliação'],
    evita: ['Pingar dipirona ou outros remédios orais na unha', 'Seguir “truques” sem fonte confiável', 'Esconder a dor para continuar usando o mesmo calçado'],
    lena: 'A Lena investiga por que a unha dói e trata a causa física, sem “truques”. Se houver necessidade de medicamento, orienta que o médico decida e prescreva.',
    next: [
      ['qual-comprimido-tomar-unha-inflamada', 'Para entender o uso correto de comprimidos'],
      ['vinagre-na-unha-encravada', 'Para outro “truque” popular: o vinagre'],
    ],
    faq: [
      { q: 'Dipirona na unha alivia a dor?', a: 'Não há indicação para esse uso. Pode irritar a pele e atrasar o cuidado adequado.' },
      { q: 'Posso tomar dipirona por via oral?', a: 'Dipirona oral é decisão do médico ou do farmacêutico, considerando alergias e outros medicamentos.' },
    ],
  },
  // ---------- Antibióticos ----------
  {
    slug: 'qual-antibiotico-unha-encravada',
    hub: R,
    group: 'Antibióticos',
    short: 'Antibiótico',
    h1: 'Qual antibiótico é bom para desinflamar *unha encravada?*',
    lead: 'Nenhum, por conta própria. Antibiótico só faz sentido quando há infecção e é prescrito por médico, que avalia sinais, alergias e histórico.',
    teaser: 'Como o médico decide se antibiótico é necessário e qual o papel do atendimento podológico.',
    sections: [
      {
        h: 'Quando antibiótico *entra* na conversa',
        p: [
          'Unha encravada nem sempre tem infecção. Antibiótico é considerado quando há sinais como pus, mau cheiro, dor crescente, calor, vermelhidão que se espalha ou febre. A decisão é médica e leva em conta o seu histórico.',
        ],
      },
      {
        h: 'O que *a podologia* faz nesse cenário',
        p: [
          'A podóloga realiza os cuidados podológicos, como remover a pressão da borda da unha e fazer curativo, e reconhece os sinais que pedem médico. Antibiótico e podologia não se substituem: o primeiro trata bactérias, o segundo cuida da causa física.',
          'Sem esse cuidado, a unha continua machucando a pele e a infecção pode voltar.',
        ],
      },
    ],
    faz: ['Procurar médico diante de pus, febre ou dor crescente', 'Informar alergias a antibióticos', 'Fazer o cuidado podológico da unha'],
    evita: ['Tomar antibiótico sem prescrição', 'Interromper o tratamento por conta própria', 'Esperar o antibiótico resolver sem tratar a unha'],
    lena: 'Quando há infecção, a Lena realiza o cuidado corretivo (graus I a III) e orienta a procurar o médico para decidir sobre antibiótico. O objetivo é tratar a causa física e trabalhar junto ao médico.',
    next: [
      ['amoxicilina-unha-inflamada', 'Para o caso da amoxicilina'],
      ['inflamacao-na-unha-e-perigosa', 'Para conhecer os sinais de gravidade'],
    ],
    faq: [
      { q: 'Quem prescreve antibiótico?', a: 'Médico, depois de examinar o quadro. A podóloga não prescreve medicamentos.' },
      { q: 'Antibiótico cura unha encravada?', a: 'Pode tratar uma infecção, mas não remove a borda da unha que machuca a pele.' },
    ],
  },
  {
    slug: 'amoxicilina-unha-inflamada',
    hub: R,
    group: 'Antibióticos',
    short: 'Amoxicilina',
    h1: 'É bom colocar amoxicilina na *unha inflamada?*',
    lead: 'Não. Amoxicilina é um antibiótico oral que exige prescrição; abrir a cápsula sobre a unha ou usar sobras pode causar alergia e resistência bacteriana.',
    teaser: 'Alergia à penicilina, sobras de caixa e resistência: os riscos do uso por conta própria.',
    sections: [
      {
        h: 'Por que *não colocar* na unha',
        p: [
          'A amoxicilina é uma penicilina, indicada para uso oral e sob prescrição. Abrir a cápsula e colocá-la sobre a pele não tem respaldo de bula, pode causar reação alérgica e não alcança a causa da inflamação.',
        ],
      },
      {
        h: 'Os riscos de *usar sobras*',
        p: [
          'Alergia a penicilinas pode ser grave. Usar o antibiótico em doses e tempo inadequados favorece bactérias resistentes, que dificultam tratamentos futuros. E uma sobra de caixa pode estar vencida ou não ser adequada ao quadro atual.',
          'Se há sinais de infecção, o médico define se antibiótico é necessário, qual e por quanto tempo.',
        ],
      },
    ],
    faz: ['Descartar sobras em locais apropriados, conforme orientação da farmácia', 'Procurar médico diante de pus, febre ou dor crescente', 'Informar alergias a penicilinas'],
    evita: ['Abrir cápsula sobre a unha ou a pele', 'Tomar por conta própria ou usar sobras', 'Interromper o tratamento prescrito antes da hora'],
    lena: 'A Lena cuida da unha e da pele com atendimento podológico e, diante de sinais de infecção, orienta a ida ao médico. A prescrição fica sempre com o profissional habilitado.',
    next: [
      ['qual-antibiotico-unha-encravada', 'Para entender como o médico decide pelo antibiótico'],
      ['nebacetin-unha-inflamada', 'Para o antibiótico em pomada: Nebacetin'],
    ],
    faq: [
      { q: 'Posso tomar amoxicilina que tenho em casa?', a: 'Não é indicado. O uso deve ser prescrito por médico, com dose e duração adequadas.' },
      { q: 'Amoxicilina em pó na unha ajuda?', a: 'Não há indicação para esse uso e pode causar alergia ou irritação.' },
    ],
  },
  {
    slug: 'nebacetin-unha-inflamada',
    hub: R,
    group: 'Antibióticos',
    short: 'Nebacetin',
    h1: 'O que o Nebacetin faz na *unha encravada?*',
    lead: 'Nebacetin é uma pomada antibiótica com indicação específica. Em pele inflamada, pode causar alergia e não remove a borda da unha que machuca.',
    teaser: 'O que a pomada antibiótica faz, o risco de alergia e por que não substitui a avaliação.',
    sections: [
      {
        h: 'O que é o Nebacetin',
        p: [
          'O Nebacetin é uma pomada com antibióticos (neomicina e bacitracina). Tem indicação para certas infecções de pele e deve seguir a bula e a orientação de profissional. Não é um “cicatrizante” genérico.',
        ],
      },
      {
        h: 'O que ele *não resolve*',
        p: [
          'Nem toda unha inflamada tem infecção por bactérias. Se a inflamação vem de pressão, o antibiótico não ajuda. E mesmo havendo infecção, a unha encravada continua machucando a pele enquanto não for tratada.',
          'A neomicina pode causar reação alérgica em algumas pessoas, o que piora a vermelhidão e atrapalha a leitura do quadro.',
        ],
      },
    ],
    faz: ['Confirmar com médico se há indicação de antibiótico', 'Observar vermelhidão e coceira após qualquer produto', 'Tratar a causa física da unha'],
    evita: ['Passar a pomada de forma contínua e sem indicação', 'Usar em ferida extensa sem orientação', 'Combinar com outros produtos sem saber'],
    lena: 'A Lena identifica a causa da inflamação e faz o cuidado podológico indicado. Se houver sinais de infecção, orienta o encaminhamento ao médico, que decide sobre pomada ou outro tratamento.',
    next: [
      ['amoxicilina-unha-inflamada', 'Para o antibiótico por via oral: amoxicilina'],
      ['qual-pomada-unha-inflamada', 'Para os outros tipos de pomada'],
    ],
    faq: [
      { q: 'Nebacetin cura unha encravada?', a: 'Não. A borda da unha continua machucando a pele. A pomada tem indicação específica para infecção e deve ser orientada.' },
      { q: 'Posso usar Nebacetin em qualquer ferida do dedo?', a: 'Depende da indicação. Procure orientação de médico ou farmacêutico.' },
    ],
  },
  // ---------- Caseiro e cuidados ----------
  {
    slug: 'vinagre-na-unha-encravada',
    hub: R,
    group: 'Remédios caseiros e cuidados em casa',
    short: 'Vinagre',
    h1: 'O que o vinagre faz na *unha encravada?*',
    lead: 'O vinagre é ácido: em pele machucada, arde e pode irritar. Não afasta a unha da pele nem trata a causa da dor.',
    teaser: 'O que o vinagre faz na pele e por que não resolve a causa.',
    sections: [
      {
        h: 'Por que o vinagre *virou* receita',
        p: [
          'O vinagre é usado em receitas populares por ser ácido e ter ação sobre alguns microrganismos. Isso dá a impressão de que ajudaria uma unha que dói. Mas pele machucada é frágil e uma substância ácida pode causar ardor, vermelhidão e piorar a irritação.',
        ],
      },
      {
        h: 'O que ele *não resolve*',
        p: [
          'A dor da unha encravada vem de uma borda que pressiona a pele. Nenhum líquido tira essa borda de lá. Se a unha está inflamada, o vinagre pode ainda dificultar a leitura do quadro, porque irrita a pele e muda a aparência da região.',
        ],
      },
    ],
    faz: ['Proteger o dedo e reduzir a pressão', 'Manter a região limpa e seca', 'Agendar avaliação em vez de testar receitas'],
    evita: ['Mergulhar o dedo ferido em vinagre', 'Usar misturas com vinagre, sal ou álcool', 'Insistir se houver ardor ou piora'],
    lena: 'A Lena trata a causa física da unha encravada com técnica e material adequados. Se a pele estiver inflamada ou infeccionada, adapta o cuidado e orienta quando o médico deve entrar.',
    next: [
      ['o-que-amolece-unha-encravada', 'Para outra ideia comum: amolecer a unha'],
      ['como-desinflamar-unha-encravada-em-casa', 'Para o que dá para fazer em casa com segurança'],
    ],
    faq: [
      { q: 'Vinagre mata fungo ou bactéria da unha?', a: 'Pode ter alguma ação, mas não há garantia de eficácia em unha encravada e a pele machucada pode se irritar.' },
      { q: 'Posso misturar vinagre com água morna?', a: 'Não há comprovação de benefício. Evite em pele machucada.' },
    ],
  },
  {
    slug: 'o-que-amolece-unha-encravada',
    hub: R,
    group: 'Remédios caseiros e cuidados em casa',
    short: 'Amolecer a unha',
    h1: 'O que amolece *uma unha encravada?*',
    lead: 'Banhos podem amolecer unha e pele, mas amolecer não resolve: pele macerada se machuca mais e a unha amolecida é mais fácil de ser cortada de forma errada.',
    teaser: 'Escalda-pés e amolecer a unha: por que a ideia parece boa e não resolve.',
    sections: [
      {
        h: 'Por que *amolecer* parece lógico',
        p: [
          'A lógica é: se a unha ficar mole, fica mais fácil de cortar ou de afastar da pele. Banhos mornos de pés (escalda-pés) são comuns nessa receita. De fato, a água pode amolecer a unha e a pele.',
        ],
      },
      {
        h: 'Onde isso *dá errado*',
        p: [
          'Pele que fica macerada pela água rompe com mais facilidade, e cortar a unha amolecida em casa aumenta o risco de ferida e de deixar uma ponta que volta a encravar. A dificuldade da unha encravada não é “dureza”, é a direção em que a borda cresce e a pressão que faz.',
        ],
      },
    ],
    faz: ['Manter o pé limpo e seco entre uma higiene e outra', 'Deixar o corte para o profissional', 'Agendar avaliação'],
    evita: ['Longos banhos seguidos de corte em casa', 'Usar produtos para “amolecer” a unha', 'Puxar ou levantar a lateral da unha'],
    lena: 'A Lena usa técnica e instrumentos adequados para cuidar da borda da unha, sem depender de amolecer a unha em casa. Ela explica o que fazer e como evitar que a unha volte a encravar.',
    next: [
      ['como-tirar-unha-encravada-sozinho', 'Para saber por que cortar sozinho é arriscado'],
      ['vinagre-na-unha-encravada', 'Para outra receita caseira: vinagre'],
    ],
    faq: [
      { q: 'Escalda-pés ajuda unha encravada?', a: 'Pode dar sensação de conforto, mas não resolve a causa e a pele macerada se machuca mais fácil.' },
      { q: 'Por que a unha encrava?', a: 'Corte inadequado, calçado apertado, formato da unha e traumas são fatores comuns. A avaliação identifica o seu.' },
    ],
  },
  {
    slug: 'como-desinflamar-unha-encravada-em-casa',
    hub: R,
    group: 'Remédios caseiros e cuidados em casa',
    short: 'Em casa',
    h1: 'Como desinflamar a unha encravada *em casa?*',
    lead: 'Em casa só dá para proteger: reduzir a pressão, manter o pé limpo e seco e observar. Desinflamar de verdade exige tratar a causa com um profissional.',
    teaser: 'A rotina segura em casa e o que deixar para o consultório.',
    sections: [
      {
        h: 'A rotina *segura* em casa',
        p: [
          'Use calçados folgados ou abertos, evite meias apertadas, lave o pé com água e sabão e seque bem, principalmente entre os dedos. Observe diariamente se a dor, a vermelhidão ou o inchaço aumentam ou diminuem.',
          'Esses hábitos reduzem a irritação e ajudam a não piorar, mas são medidas de proteção, não tratamento.',
        ],
      },
      {
        h: 'O que fica para o *consultório*',
        p: [
          'Remover a borda que machuca, cuidar de pele inflamada e orientar o corte e o calçado são tarefas para um profissional. Tentar fazê-las em casa é a causa mais comum de piora.',
          'Se houver pus, febre ou dor intensa, procure avaliação médica sem esperar.',
        ],
      },
    ],
    faz: ['Usar calçado folgado e meias macias', 'Lavar e secar bem o pé', 'Observar diariamente e agendar avaliação'],
    evita: ['Cortar ou cavar a lateral da unha', 'Usar produtos “desinflamantes” sem orientação', 'Continuar com o calçado que aperta'],
    lena: 'A Lena completa o que não dá para fazer em casa: remove a causa física, cuida da pele e orienta a rotina que você deve manter. Você sai com um plano, e não com mais uma receita para testar.',
    next: [
      ['o-que-fazer-pe-da-unha-inflamado', 'Para ver o que é bom no consultório'],
      ['qual-remedio-desinflamar-unha-encravada', 'Para entender quem pode indicar remédio'],
    ],
    faq: [
      { q: 'Dá para curar unha encravada em casa?', a: 'Casos leves podem melhorar com a remoção da pressão, mas não há garantia. A avaliação define o cuidado.' },
      { q: 'Posso usar algodão sob a unha?', a: 'Evite introduzir materiais sob a unha sem orientação profissional. Pode machucar ou infeccionar.' },
    ],
  },
  {
    slug: 'qual-remedio-desinflamar-unha-encravada',
    hub: R,
    group: 'Remédios caseiros e cuidados em casa',
    short: 'Quem indica remédio',
    h1: 'Qual remédio desinflama *unha encravada?*',
    lead: 'Não há um remédio único. A podóloga trata a causa física; o médico decide sobre medicamentos; o farmacêutico informa sobre o uso. Cada um tem seu papel.',
    teaser: 'Quem faz o quê: podóloga, médico e farmacêutico.',
    sections: [
      {
        h: 'Quem faz *o quê*',
        p: [
          'A podóloga avalia a unha e a pele, realiza o cuidado podológico e reconhece sinais que exigem médico. O médico diagnostica e prescreve medicamentos quando necessários. O farmacêutico orienta o uso correto e as interações.',
        ],
      },
      {
        h: 'Por que *“qual remédio”* é a pergunta errada',
        p: [
          'A pergunta mais útil é “o que está causando a inflamação?”. Se a causa é uma borda que pressiona a pele, nenhum remédio a remove. Se há infecção, o médico indica o tratamento. Sem essa resposta, qualquer remédio é uma aposta.',
        ],
      },
    ],
    faz: ['Avaliar a causa antes do remédio', 'Procurar médico se houver pus, febre ou dor crescente', 'Perguntar ao farmacêutico sobre interações'],
    evita: ['Pedir indicação de remédio por rede social', 'Usar o remédio de outra pessoa', 'Considerar o remédio como substituto do cuidado podológico'],
    lena: 'A Lena cuida da parte podológica e orienta o encaminhamento ao médico quando o quadro pede. Assim você sabe a quem procurar, em vez de testar remédios sem direção.',
    next: [
      ['qual-comprimido-tomar-unha-inflamada', 'Para entender as classes de comprimidos'],
      ['qual-pomada-unha-inflamada', 'Para entender os tipos de pomada'],
    ],
    faq: [
      { q: 'Podóloga pode receitar remédio?', a: 'Não. A prescrição de medicamentos é feita por médico (ou outro profissional habilitado).' },
      { q: 'Quando devo procurar médico?', a: 'Diante de pus, febre, dor intensa, vermelhidão que se espalha ou se você tem diabetes ou má circulação.' },
    ],
  },
];
