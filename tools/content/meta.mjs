export const SITE = 'https://lenapodologa.com.br';
export const DATE = '2026-11-09';
export const PHONE = '5561985420649';

// Valores copiados da tabela 2026 da página inicial.
export const offers = {
  higienizacao: { name: 'Higienização completa dos pés', price: 'R$ 165,00', time: '40 min', note: 'Atendimento preventivo' },
  lamina: { name: 'Higienização completa com lâmina encravada', price: 'R$ 185,00', time: '1h10', note: 'Para unha encravada' },
  infeccao: { name: 'Cuidado corretivo para unha com infecção', price: 'R$ 300,00 a R$ 540,00', time: '30 min', note: 'Graus I a III, por lado da unha' },
  curativo: { name: 'Curativo', price: 'R$ 50,00', time: '10 min', note: 'Por dedo' },
  combo: { name: 'Higienização completa + hidratação', price: 'R$ 270,00', time: '60 min', note: 'Combo (avulso: R$ 295,00)' },
};

export const clusters = [
  {
    id: 'sintomas',
    nav: 'Dor e inflamação',
    label: 'Unhas e desconfortos',
    title: 'Dor, inflamação *e o que observar.*',
    desc: 'Dois guias para entender o que sua unha está dizendo e quando não esperar.',
    offers: ['lamina', 'infeccao'],
  },
  {
    id: 'produtos',
    nav: 'Remédios e produtos',
    label: 'Remédios e produtos',
    title: 'O que passar, tomar *ou evitar.*',
    desc: 'Pomadas, comprimidos, antibióticos e receitas caseiras: o que cada um faz e por que a escolha começa na avaliação.',
    offers: ['lamina', 'infeccao', 'curativo'],
  },
  {
    id: 'atendimento',
    nav: 'Atendimento',
    label: 'Atendimento e consulta',
    title: 'Como é *o atendimento.*',
    desc: 'O que acontece na consulta, o que dói (ou não) e como agir depois.',
    offers: ['lamina', 'higienizacao'],
  },
  {
    id: 'valores',
    nav: 'Valores e acesso',
    label: 'Valores e acesso',
    title: 'Valores, tabela *e acesso.*',
    desc: 'Quanto custa, quanto tempo leva e como acessar atendimento.',
    offers: ['higienizacao', 'lamina', 'infeccao'],
  },
];
