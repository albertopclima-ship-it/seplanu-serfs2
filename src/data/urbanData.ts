export interface QuestionOptionVote {
  id: number;
  question: string;
  option: string;
  padrePrudencio: number;
  camposSales: number;
  seteSetembro: number;
  avenidaPortugal: number;
  total: number;
}

export type LocationFilter = 'TODAS' | 'PADRE_PRUDENCIO' | 'CAMPOS_SALES' | 'SETE_SETEMBRO' | 'AV_PORTUGAL';

// Base oficial dos Painéis Interativos (2.595 votos) conforme Nota Técnica SEPLANU/SEINFRA Nº XX/2026
// Coletada em 26 de setembro de 2026, das 9h às 12h, em 4 pontos da Rua 13 de Maio, Campina, Belém (PA)
export const RAW_PANEL_DATA: QuestionOptionVote[] = [
  // 1. Você está aqui como? (P1, N=325)
  { id: 1, question: '1. VOCÊ ESTÁ AQUI COMO?', option: 'COMPRADOR', padrePrudencio: 53, camposSales: 57, seteSetembro: 68, avenidaPortugal: 48, total: 226 },
  { id: 1, question: '1. VOCÊ ESTÁ AQUI COMO?', option: 'PASSANDO', padrePrudencio: 20, camposSales: 14, seteSetembro: 12, avenidaPortugal: 11, total: 57 },
  { id: 1, question: '1. VOCÊ ESTÁ AQUI COMO?', option: 'FUNCIONÁRIO', padrePrudencio: 4, camposSales: 5, seteSetembro: 5, avenidaPortugal: 6, total: 20 },
  { id: 1, question: '1. VOCÊ ESTÁ AQUI COMO?', option: 'LOJISTA', padrePrudencio: 4, camposSales: 6, seteSetembro: 0, avenidaPortugal: 2, total: 12 },
  { id: 1, question: '1. VOCÊ ESTÁ AQUI COMO?', option: 'AMBULANTE', padrePrudencio: 0, camposSales: 3, seteSetembro: 5, avenidaPortugal: 2, total: 10 },

  // 2. Qual sua faixa etária? (P2, N=326)
  { id: 2, question: '2. QUAL SUA FAIXA ETÁRIA?', option: 'ATÉ 17', padrePrudencio: 10, camposSales: 4, seteSetembro: 8, avenidaPortugal: 4, total: 26 },
  { id: 2, question: '2. QUAL SUA FAIXA ETÁRIA?', option: '18 A 24', padrePrudencio: 8, camposSales: 16, seteSetembro: 13, avenidaPortugal: 7, total: 44 },
  { id: 2, question: '2. QUAL SUA FAIXA ETÁRIA?', option: '25 A 34', padrePrudencio: 16, camposSales: 18, seteSetembro: 15, avenidaPortugal: 10, total: 59 },
  { id: 2, question: '2. QUAL SUA FAIXA ETÁRIA?', option: '35 A 44', padrePrudencio: 16, camposSales: 13, seteSetembro: 17, avenidaPortugal: 9, total: 55 },
  { id: 2, question: '2. QUAL SUA FAIXA ETÁRIA?', option: '45 A 59', padrePrudencio: 18, camposSales: 22, seteSetembro: 19, avenidaPortugal: 20, total: 79 },
  { id: 2, question: '2. QUAL SUA FAIXA ETÁRIA?', option: '60 OU MAIS', padrePrudencio: 14, camposSales: 11, seteSetembro: 19, avenidaPortugal: 19, total: 63 },

  // 3. Como você chegou aqui? (P3, N=326)
  { id: 3, question: '3. COMO VOCÊ CHEGOU AQUI?', option: 'MOTO / CARRO', padrePrudencio: 32, camposSales: 35, seteSetembro: 39, avenidaPortugal: 30, total: 136 },
  { id: 3, question: '3. COMO VOCÊ CHEGOU AQUI?', option: 'ÔNIBUS', padrePrudencio: 26, camposSales: 31, seteSetembro: 26, avenidaPortugal: 29, total: 112 },
  { id: 3, question: '3. COMO VOCÊ CHEGOU AQUI?', option: 'APP / TÁXI', padrePrudencio: 11, camposSales: 14, seteSetembro: 11, avenidaPortugal: 6, total: 42 },
  { id: 3, question: '3. COMO VOCÊ CHEGOU AQUI?', option: 'A PÉ', padrePrudencio: 10, camposSales: 5, seteSetembro: 13, avenidaPortugal: 3, total: 31 },
  { id: 3, question: '3. COMO VOCÊ CHEGOU AQUI?', option: 'BICICLETA / PATINETE', padrePrudencio: 1, camposSales: 0, seteSetembro: 0, avenidaPortugal: 2, total: 3 },
  { id: 3, question: '3. COMO VOCÊ CHEGOU AQUI?', option: 'BARCO', padrePrudencio: 0, camposSales: 0, seteSetembro: 2, avenidaPortugal: 0, total: 2 },

  // 4. Como é caminhar aqui? (P4, N=318)
  { id: 4, question: '4. COMO É CAMINHAR AQUI?', option: 'MUITO RUIM', padrePrudencio: 34, camposSales: 28, seteSetembro: 43, avenidaPortugal: 31, total: 136 },
  { id: 4, question: '4. COMO É CAMINHAR AQUI?', option: 'RUIM', padrePrudencio: 17, camposSales: 18, seteSetembro: 21, avenidaPortugal: 15, total: 71 },
  { id: 4, question: '4. COMO É CAMINHAR AQUI?', option: 'REGULAR', padrePrudencio: 23, camposSales: 24, seteSetembro: 22, avenidaPortugal: 17, total: 86 },
  { id: 4, question: '4. COMO É CAMINHAR AQUI?', option: 'BOM', padrePrudencio: 3, camposSales: 9, seteSetembro: 4, avenidaPortugal: 3, total: 19 },
  { id: 4, question: '4. COMO É CAMINHAR AQUI?', option: 'MUITO BOM', padrePrudencio: 0, camposSales: 4, seteSetembro: 0, avenidaPortugal: 2, total: 6 },

  // 5. Pensando nos carros e motos, como é caminhar aqui? (P5, N=319)
  { id: 5, question: '5. PENSANDO NOS CARROS E MOTOS, COMO É CAMINHAR AQUI?', option: 'MUITO INSEGURO', padrePrudencio: 34, camposSales: 39, seteSetembro: 60, avenidaPortugal: 37, total: 170 },
  { id: 5, question: '5. PENSANDO NOS CARROS E MOTOS, COMO É CAMINHAR AQUI?', option: 'INSEGURO', padrePrudencio: 35, camposSales: 31, seteSetembro: 21, avenidaPortugal: 18, total: 105 },
  { id: 5, question: '5. PENSANDO NOS CARROS E MOTOS, COMO É CAMINHAR AQUI?', option: 'REGULAR', padrePrudencio: 9, camposSales: 9, seteSetembro: 10, avenidaPortugal: 9, total: 37 },
  { id: 5, question: '5. PENSANDO NOS CARROS E MOTOS, COMO É CAMINHAR AQUI?', option: 'SEGURO', padrePrudencio: 1, camposSales: 3, seteSetembro: 0, avenidaPortugal: 1, total: 5 },
  { id: 5, question: '5. PENSANDO NOS CARROS E MOTOS, COMO É CAMINHAR AQUI?', option: 'MUITO SEGURO', padrePrudencio: 0, camposSales: 0, seteSetembro: 0, avenidaPortugal: 2, total: 2 },

  // 6. O que mais atrapalha aqui? (P6, N=334)
  { id: 6, question: '6. O QUE MAIS ATRAPALHA AQUI?', option: 'CALÇADAS', padrePrudencio: 41, camposSales: 16, seteSetembro: 16, avenidaPortugal: 21, total: 94 },
  { id: 6, question: '6. O QUE MAIS ATRAPALHA AQUI?', option: 'DESORGANIZAÇÃO', padrePrudencio: 13, camposSales: 31, seteSetembro: 26, avenidaPortugal: 21, total: 91 },
  { id: 6, question: '6. O QUE MAIS ATRAPALHA AQUI?', option: 'CARROS E MOTOS', padrePrudencio: 10, camposSales: 20, seteSetembro: 34, avenidaPortugal: 14, total: 78 },
  { id: 6, question: '6. O QUE MAIS ATRAPALHA AQUI?', option: 'FALTA DE ESPAÇO', padrePrudencio: 7, camposSales: 9, seteSetembro: 11, avenidaPortugal: 7, total: 34 },
  { id: 6, question: '6. O QUE MAIS ATRAPALHA AQUI?', option: 'FALTA DE ESTACIONAMENTO', padrePrudencio: 5, camposSales: 6, seteSetembro: 1, avenidaPortugal: 7, total: 19 },
  { id: 6, question: '6. O QUE MAIS ATRAPALHA AQUI?', option: 'CALOR / FALTA DE SOMBRA', padrePrudencio: 4, camposSales: 4, seteSetembro: 10, avenidaPortugal: 0, total: 18 },

  // 7. O que deveria melhorar primeiro? (P7, N=323)
  { id: 7, question: '7. O QUE DEVERIA MELHORAR PRIMEIRO?', option: 'ORGANIZAÇÃO DO COMÉRCIO', padrePrudencio: 18, camposSales: 41, seteSetembro: 10, avenidaPortugal: 31, total: 100 },
  { id: 7, question: '7. O QUE DEVERIA MELHORAR PRIMEIRO?', option: 'CALÇADAS', padrePrudencio: 31, camposSales: 21, seteSetembro: 22, avenidaPortugal: 17, total: 91 },
  { id: 7, question: '7. O QUE DEVERIA MELHORAR PRIMEIRO?', option: 'MAIS ESPAÇO PARA PEDESTRES', padrePrudencio: 13, camposSales: 10, seteSetembro: 38, avenidaPortugal: 10, total: 71 },
  { id: 7, question: '7. O QUE DEVERIA MELHORAR PRIMEIRO?', option: 'MENOS CARROS E MOTOS', padrePrudencio: 12, camposSales: 9, seteSetembro: 15, avenidaPortugal: 6, total: 42 },
  { id: 7, question: '7. O QUE DEVERIA MELHORAR PRIMEIRO?', option: 'MAIS SOMBRA E CONFORTO', padrePrudencio: 2, camposSales: 2, seteSetembro: 4, avenidaPortugal: 2, total: 10 },
  { id: 7, question: '7. O QUE DEVERIA MELHORAR PRIMEIRO?', option: 'MAIS ESTACIONAMENTO', padrePrudencio: 2, camposSales: 1, seteSetembro: 3, avenidaPortugal: 2, total: 8 },
  { id: 7, question: '7. O QUE DEVERIA MELHORAR PRIMEIRO?', option: 'MELHOR TRANSPORTE PÚBLICO', padrePrudencio: 0, camposSales: 1, seteSetembro: 0, avenidaPortugal: 0, total: 1 },

  // 8. Como você prefere a circulação de veículos? (P8, N=324)
  { id: 8, question: '8. COMO VOCÊ PREFERE A CIRCULAÇÃO DE VEÍCULOS?', option: 'SEM CARROS E MOTOS', padrePrudencio: 41, camposSales: 38, seteSetembro: 67, avenidaPortugal: 34, total: 180 },
  { id: 8, question: '8. COMO VOCÊ PREFERE A CIRCULAÇÃO DE VEÍCULOS?', option: 'ACESSO CONTROLADO', padrePrudencio: 29, camposSales: 27, seteSetembro: 14, avenidaPortugal: 29, total: 99 },
  { id: 8, question: '8. COMO VOCÊ PREFERE A CIRCULAÇÃO DE VEÍCULOS?', option: 'MENOS CARROS E MOTOS', padrePrudencio: 7, camposSales: 16, seteSetembro: 9, avenidaPortugal: 4, total: 36 },
  { id: 8, question: '8. COMO VOCÊ PREFERE A CIRCULAÇÃO DE VEÍCULOS?', option: 'COMO ESTÁ HOJE', padrePrudencio: 2, camposSales: 3, seteSetembro: 1, avenidaPortugal: 3, total: 9 },
];

export const LOCATION_OPTIONS = [
  { value: 'TODAS', label: 'Toda a Rua 13 de Maio (Consolidado)', desc: '2.595 votos · 4 pontos de coleta' },
  { value: 'PADRE_PRUDENCIO', label: 'Rua Padre Prudêncio', desc: '674 votos registrados' },
  { value: 'CAMPOS_SALES', label: 'Rua Campos Sales', desc: '659 votos registrados' },
  { value: 'SETE_SETEMBRO', label: 'Rua 7 de Setembro', desc: '685 votos registrados' },
  { value: 'AV_PORTUGAL', label: 'Avenida Portugal', desc: '577 votos registrados' },
] as const;

// Dados reais do Questionário Complementar (N=63 IDs com respostas específicas para Lojistas, Ambulantes e Trabalhadores)
// Conforme páginas 11 a 14 da Nota Técnica SEPLANU/SEINFRA
export const COMPLEMENTARY_SURVEY_DATA = {
  lojistas: {
    total: 27,
    movimentoAposMudanca: {
      menorOuMuitoMenor: 27, // 100%
      percentual: 100.0,
    },
    expectativaVendasComMenosCarros: [
      { name: 'Aumentaria as vendas', votes: 17, percentage: 63.0, color: '#55BA5E' },
      { name: 'Diminuiria as vendas', votes: 6, percentage: 22.2, color: '#FAA954' },
      { name: 'Não mudaria', votes: 3, percentage: 11.1, color: '#3B5C8B' },
      { name: 'Não sabe / sem resposta', votes: 1, percentage: 3.7, color: '#A7C4D2' },
    ],
    prioridadesOperacionais: [
      { name: 'Estacionamento próximo', votes: 9 },
      { name: 'Embarque e desembarque', votes: 7 },
      { name: 'Acesso de clientes', votes: 5 },
      { name: 'Organização dos ambulantes', votes: 4 },
    ],
  },
  ambulantesFixos: {
    total: 20, // 20 de ponto fixo (e 3 móveis adicionais)
    carrosMotosAtrapalhamAtividade: [
      { name: 'Não atrapalham', votes: 15, percentage: 75.0, color: '#3B5C8B' },
      { name: 'Atrapalham muito', votes: 4, percentage: 20.0, color: '#FAA954' },
      { name: 'Um pouco', votes: 1, percentage: 5.0, color: '#A7C4D2' },
    ],
    principalDificuldade: [
      { name: 'Calor / falta de sombra', votes: 10, percentage: 50.0, color: '#FAA954' },
      { name: 'Calçadas / obstáculos', votes: 4, percentage: 20.0, color: '#263868' },
      { name: 'Carros e motos', votes: 3, percentage: 15.0, color: '#113B78' },
      { name: 'Falta de espaço', votes: 2, percentage: 10.0, color: '#3B5C8B' },
      { name: 'Sem resposta', votes: 1, percentage: 5.0, color: '#A7C4D2' },
    ],
    expectativaTrabalhoMenosCarros: [
      { name: 'Melhoraria', votes: 11, percentage: 55.0, color: '#55BA5E' },
      { name: 'Igual / Não mudaria', votes: 4, percentage: 20.0, color: '#3B5C8B' },
      { name: 'Pioraria', votes: 4, percentage: 20.0, color: '#FAA954' },
      { name: 'Não sabe', votes: 1, percentage: 5.0, color: '#A7C4D2' },
    ],
  },
  demaisTrabalhadores: {
    total: 14,
    expectativaMenosCarros: [
      { name: 'Melhoraria', votes: 6, percentage: 42.9, color: '#55BA5E' },
      { name: 'Não mudaria', votes: 4, percentage: 28.6, color: '#3B5C8B' },
      { name: 'Pioraria', votes: 3, percentage: 21.4, color: '#FAA954' },
      { name: 'Sem resposta', votes: 1, percentage: 7.1, color: '#A7C4D2' },
    ],
  },
};

// Função estrita de recuperação dos dados reais por cruzamento SEM criar correlações inventadas
export function getUrbanMetricsByLocation(location: LocationFilter) {
  const getLocVal = (row: QuestionOptionVote): number => {
    switch (location) {
      case 'PADRE_PRUDENCIO': return row.padrePrudencio;
      case 'CAMPOS_SALES': return row.camposSales;
      case 'SETE_SETEMBRO': return row.seteSetembro;
      case 'AV_PORTUGAL': return row.avenidaPortugal;
      case 'TODAS':
      default: return row.total;
    }
  };

  // 1. P1: Você está aqui como?
  const p1Rows = RAW_PANEL_DATA.filter(r => r.id === 1);
  const totalP1 = p1Rows.reduce((sum, r) => sum + getLocVal(r), 0) || 1;
  const profileDonut = p1Rows.map(r => {
    const votes = getLocVal(r);
    const pct = Number(((votes / totalP1) * 100).toFixed(1));
    return {
      name: r.option === 'COMPRADOR' ? 'Compradores' :
            r.option === 'PASSANDO' ? 'Em Passagem' :
            r.option === 'FUNCIONÁRIO' ? 'Funcionários' :
            r.option === 'LOJISTA' ? 'Lojistas' : 'Ambulantes',
      rawOption: r.option,
      votes,
      percentage: pct,
    };
  });

  // 2. P2: Faixa Etária
  const p2Rows = RAW_PANEL_DATA.filter(r => r.id === 2);
  const totalP2 = p2Rows.reduce((sum, r) => sum + getLocVal(r), 0) || 1;
  const ageDistribution = p2Rows.map(r => {
    const votes = getLocVal(r);
    const pct = Number(((votes / totalP2) * 100).toFixed(1));
    return {
      range: r.option,
      votes,
      percentage: pct,
    };
  });

  // 3. P3: Como você chegou aqui?
  const p3Rows = RAW_PANEL_DATA.filter(r => r.id === 3);
  const totalP3 = p3Rows.reduce((sum, r) => sum + getLocVal(r), 0) || 1;
  const mobilityChart = p3Rows.map(r => {
    const votes = getLocVal(r);
    const pct = Number(((votes / totalP3) * 100).toFixed(1));
    const isSustainable = ['ÔNIBUS', 'A PÉ', 'BICICLETA / PATINETE', 'BARCO'].includes(r.option);
    return {
      name: r.option === 'MOTO / CARRO' ? 'Moto / Carro' :
            r.option === 'ÔNIBUS' ? 'Ônibus' :
            r.option === 'APP / TÁXI' ? 'App / Táxi' :
            r.option === 'A PÉ' ? 'A pé' :
            r.option === 'BICICLETA / PATINETE' ? 'Bicicleta / Patinete' : 'Barco',
      rawOption: r.option,
      votes,
      percentage: pct,
      isSustainable,
    };
  }).sort((a, b) => b.percentage - a.percentage);

  // 4. P4: Como é caminhar aqui?
  const p4Rows = RAW_PANEL_DATA.filter(r => r.id === 4);
  const totalP4 = p4Rows.reduce((sum, r) => sum + getLocVal(r), 0) || 1;
  const walkabilityChart = p4Rows.map(r => {
    const votes = getLocVal(r);
    const pct = Number(((votes / totalP4) * 100).toFixed(1));
    return {
      name: r.option,
      votes,
      percentage: pct,
      isBad: ['MUITO RUIM', 'RUIM'].includes(r.option),
    };
  });
  const badWalkVotes = p4Rows.filter(r => ['MUITO RUIM', 'RUIM'].includes(r.option))
    .reduce((sum, r) => sum + getLocVal(r), 0);
  const badWalkPct = Number(((badWalkVotes / totalP4) * 100).toFixed(1));

  // 5. P5: Pensando nos carros e motos, como é caminhar aqui?
  const p5Rows = RAW_PANEL_DATA.filter(r => r.id === 5);
  const totalP5 = p5Rows.reduce((sum, r) => sum + getLocVal(r), 0) || 1;
  const trafficInsecurityChart = p5Rows.map(r => {
    const votes = getLocVal(r);
    const pct = Number(((votes / totalP5) * 100).toFixed(1));
    return {
      name: r.option,
      votes,
      percentage: pct,
    };
  });
  const insecureVotes = p5Rows.filter(r => ['MUITO INSEGURO', 'INSEGURO'].includes(r.option))
    .reduce((sum, r) => sum + getLocVal(r), 0);
  const trafficInsecurityPct = Number(((insecureVotes / totalP5) * 100).toFixed(1));

  // 6. P6: O que mais atrapalha hoje?
  const p6Rows = RAW_PANEL_DATA.filter(r => r.id === 6);
  const totalP6 = p6Rows.reduce((sum, r) => sum + getLocVal(r), 0) || 1;
  const painPointsRaw = p6Rows.map(r => {
    const votes = getLocVal(r);
    const pct = Number(((votes / totalP6) * 100).toFixed(1));
    return {
      name: r.option === 'DESORGANIZAÇÃO' ? 'Desorganização' :
            r.option === 'CARROS E MOTOS' ? 'Carros e motos' :
            r.option === 'CALÇADAS' ? 'Calçadas' :
            r.option === 'FALTA DE ESPAÇO' ? 'Falta de espaço' :
            r.option === 'FALTA DE ESTACIONAMENTO' ? 'Falta de estacionamento' : 'Calor / Falta de sombra',
      rawOption: r.option,
      votes,
      percentage: pct,
    };
  }).sort((a, b) => b.percentage - a.percentage);

  const painPointsChart = painPointsRaw.map((item, idx) => ({
    ...item,
    isTopThree: idx < 3,
  }));

  // 7. P7: O que deveria melhorar primeiro?
  const p7Rows = RAW_PANEL_DATA.filter(r => r.id === 7);
  const totalP7 = p7Rows.reduce((sum, r) => sum + getLocVal(r), 0) || 1;
  const improvementsChart = p7Rows.map(r => {
    const votes = getLocVal(r);
    const pct = Number(((votes / totalP7) * 100).toFixed(1));
    return {
      name: r.option === 'ORGANIZAÇÃO DO COMÉRCIO' ? 'Organização do comércio' :
            r.option === 'CALÇADAS' ? 'Calçadas' :
            r.option === 'MAIS ESPAÇO PARA PEDESTRES' ? 'Mais espaço para pedestres' :
            r.option === 'MENOS CARROS E MOTOS' ? 'Menos carros e motos' :
            r.option === 'MAIS SOMBRA E CONFORTO' ? 'Mais sombra e conforto' :
            r.option === 'MAIS ESTACIONAMENTO' ? 'Mais estacionamento' : 'Melhor transporte público',
      votes,
      percentage: pct,
    };
  }).sort((a, b) => b.percentage - a.percentage);

  // 8. P8: Como você prefere a circulação de veículos?
  const p8Rows = RAW_PANEL_DATA.filter(r => r.id === 8);
  const totalP8 = p8Rows.reduce((sum, r) => sum + getLocVal(r), 0) || 1;
  const circulationMap: Record<string, { pct: number; votes: number }> = {};
  p8Rows.forEach(r => {
    const votes = getLocVal(r);
    const pct = Number(((votes / totalP8) * 100).toFixed(1));
    circulationMap[r.option] = { pct, votes };
  });

  const semCarrosPct = circulationMap['SEM CARROS E MOTOS']?.pct ?? 55.6;
  const semCarrosVotes = circulationMap['SEM CARROS E MOTOS']?.votes ?? 180;
  const acessoControladoPct = circulationMap['ACESSO CONTROLADO']?.pct ?? 30.6;
  const acessoControladoVotes = circulationMap['ACESSO CONTROLADO']?.votes ?? 99;
  const menosCarrosPct = circulationMap['MENOS CARROS E MOTOS']?.pct ?? 11.1;
  const menosCarrosVotes = circulationMap['MENOS CARROS E MOTOS']?.votes ?? 36;
  const comoEstaPct = circulationMap['COMO ESTÁ HOJE']?.pct ?? 2.8;
  const comoEstaVotes = circulationMap['COMO ESTÁ HOJE']?.votes ?? 9;

  // Soma de algum grau de restrição veicular (Sem carros + Acesso controlado + Menos carros)
  const totalRestrictionPct = Number((semCarrosPct + acessoControladoPct + menosCarrosPct).toFixed(1));

  // Total de votos nesta localização
  const totalVotesInLoc = RAW_PANEL_DATA.reduce((sum, r) => sum + getLocVal(r), 0);

  return {
    kpis: {
      vehicleRestriction: totalRestrictionPct,
      trafficInsecurity: trafficInsecurityPct,
      topPriorityPct: improvementsChart[0]?.percentage ?? 31.0,
      topPriorityName: improvementsChart[0]?.name ?? 'Organização do comércio',
      semCarrosPct,
      semCarrosVotes,
      acessoControladoPct,
      acessoControladoVotes,
      menosCarrosPct,
      menosCarrosVotes,
      comoEstaPct,
      comoEstaVotes,
      badWalkPct,
    },
    totalVotesInLoc,
    profileDonut,
    ageDistribution,
    mobilityChart,
    walkabilityChart,
    trafficInsecurityChart,
    painPointsChart,
    improvementsChart,
    circulationMap,
  };
}
