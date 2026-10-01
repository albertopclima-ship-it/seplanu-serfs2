import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
} from 'recharts';
import { GitCompare, MapPin, Compass, CheckCircle2 } from 'lucide-react';
import { RAW_PANEL_DATA } from '../data/urbanData';

export const SessionIntersectionsComparison: React.FC = () => {
  // 1. Data for P8 (Circulação de veículos nos 4 pontos)
  const p8Rows = RAW_PANEL_DATA.filter(r => r.id === 8);
  const p8ComparisonData = [
    {
      ponto: 'R. Padre Prudêncio',
      semCarros: p8Rows.find(r => r.option === 'SEM CARROS E MOTOS')?.padrePrudencio ?? 0,
      acessoControlado: p8Rows.find(r => r.option === 'ACESSO CONTROLADO')?.padrePrudencio ?? 0,
      menosCarros: p8Rows.find(r => r.option === 'MENOS CARROS E MOTOS')?.padrePrudencio ?? 0,
      comoEsta: p8Rows.find(r => r.option === 'COMO ESTÁ HOJE')?.padrePrudencio ?? 0,
    },
    {
      ponto: 'R. Campos Sales',
      semCarros: p8Rows.find(r => r.option === 'SEM CARROS E MOTOS')?.camposSales ?? 0,
      acessoControlado: p8Rows.find(r => r.option === 'ACESSO CONTROLADO')?.camposSales ?? 0,
      menosCarros: p8Rows.find(r => r.option === 'MENOS CARROS E MOTOS')?.camposSales ?? 0,
      comoEsta: p8Rows.find(r => r.option === 'COMO ESTÁ HOJE')?.camposSales ?? 0,
    },
    {
      ponto: 'R. 7 de Setembro',
      semCarros: p8Rows.find(r => r.option === 'SEM CARROS E MOTOS')?.seteSetembro ?? 0,
      acessoControlado: p8Rows.find(r => r.option === 'ACESSO CONTROLADO')?.seteSetembro ?? 0,
      menosCarros: p8Rows.find(r => r.option === 'MENOS CARROS E MOTOS')?.seteSetembro ?? 0,
      comoEsta: p8Rows.find(r => r.option === 'COMO ESTÁ HOJE')?.seteSetembro ?? 0,
    },
    {
      ponto: 'Av. Portugal',
      semCarros: p8Rows.find(r => r.option === 'SEM CARROS E MOTOS')?.avenidaPortugal ?? 0,
      acessoControlado: p8Rows.find(r => r.option === 'ACESSO CONTROLADO')?.avenidaPortugal ?? 0,
      menosCarros: p8Rows.find(r => r.option === 'MENOS CARROS E MOTOS')?.avenidaPortugal ?? 0,
      comoEsta: p8Rows.find(r => r.option === 'COMO ESTÁ HOJE')?.avenidaPortugal ?? 0,
    },
  ];

  // 2. Data for P6 (O que mais atrapalha nos 4 pontos)
  const p6Rows = RAW_PANEL_DATA.filter(r => r.id === 6);
  const p6ComparisonData = [
    {
      ponto: 'R. Padre Prudêncio',
      calcadas: p6Rows.find(r => r.option === 'CALÇADAS')?.padrePrudencio ?? 0,
      desorganizacao: p6Rows.find(r => r.option === 'DESORGANIZAÇÃO')?.padrePrudencio ?? 0,
      carrosMotos: p6Rows.find(r => r.option === 'CARROS E MOTOS')?.padrePrudencio ?? 0,
    },
    {
      ponto: 'R. Campos Sales',
      calcadas: p6Rows.find(r => r.option === 'CALÇADAS')?.camposSales ?? 0,
      desorganizacao: p6Rows.find(r => r.option === 'DESORGANIZAÇÃO')?.camposSales ?? 0,
      carrosMotos: p6Rows.find(r => r.option === 'CARROS E MOTOS')?.camposSales ?? 0,
    },
    {
      ponto: 'R. 7 de Setembro',
      calcadas: p6Rows.find(r => r.option === 'CALÇADAS')?.seteSetembro ?? 0,
      desorganizacao: p6Rows.find(r => r.option === 'DESORGANIZAÇÃO')?.seteSetembro ?? 0,
      carrosMotos: p6Rows.find(r => r.option === 'CARROS E MOTOS')?.seteSetembro ?? 0,
    },
    {
      ponto: 'Av. Portugal',
      calcadas: p6Rows.find(r => r.option === 'CALÇADAS')?.avenidaPortugal ?? 0,
      desorganizacao: p6Rows.find(r => r.option === 'DESORGANIZAÇÃO')?.avenidaPortugal ?? 0,
      carrosMotos: p6Rows.find(r => r.option === 'CARROS E MOTOS')?.avenidaPortugal ?? 0,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 animate-in fade-in duration-300">
      {/* Session Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#A7C4D2]/40 pb-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#113B78] flex items-center gap-1.5">
            <GitCompare className="w-3.5 h-3.5" />
            Análise Territorial Comparativa
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#263868] tracking-tight mt-0.5">
            Variação das Percepções ao Longo dos 4 Pontos do Eixo
          </h2>
        </div>
        <span className="text-xs text-[#3B5C8B]">
          Diferenças espaciais registradas diretamente nas urnas de votação
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico Comparativo 1: Circulação de Veículos */}
        <div className="bg-white rounded-xl border border-[#A7C4D2]/60 p-6 shadow-xs flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-base font-bold text-[#263868]">
              Preferência de Circulação (P8) por Cruzamento
            </h3>
            <p className="text-xs text-[#3B5C8B] mt-1">
              A Rua 7 de Setembro registrou o maior pico de votos para "Sem Carros e Motos" (67 votos).
            </p>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={p8ComparisonData}
                margin={{ top: 10, right: 20, left: -10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#A7C4D2" opacity={0.3} />
                <XAxis
                  dataKey="ponto"
                  tick={{ fill: '#263868', fontSize: 11, fontWeight: 600 }}
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#3B5C8B', fontSize: 11, fontFamily: 'monospace' }}
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                />
                <RechartsTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#263868] text-white text-xs p-3 rounded-lg shadow-lg border border-[#3B5C8B]">
                          <p className="font-bold text-sm mb-1.5">{label}</p>
                          {payload.map((entry) => (
                            <div key={entry.name} className="flex justify-between gap-4 font-mono text-[11px]">
                              <span style={{ color: entry.color }}>{entry.name}:</span>
                              <span className="font-bold">{entry.value} votos</span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend
                  wrapperStyle={{ fontSize: 11, paddingTop: 10 }}
                  formatter={(value) => {
                    if (value === 'semCarros') return 'Sem Carros/Motos';
                    if (value === 'acessoControlado') return 'Acesso Controlado';
                    if (value === 'menosCarros') return 'Menos Carros';
                    return 'Como Está Hoje';
                  }}
                />
                <Bar dataKey="semCarros" fill="#55BA5E" name="semCarros" radius={[4, 4, 0, 0]} />
                <Bar dataKey="acessoControlado" fill="#263868" name="acessoControlado" radius={[4, 4, 0, 0]} />
                <Bar dataKey="menosCarros" fill="#3B5C8B" name="menosCarros" radius={[4, 4, 0, 0]} />
                <Bar dataKey="comoEsta" fill="#FAA954" name="comoEsta" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-[#A7C4D2]/40 text-xs text-[#3B5C8B]">
            Em todos os 4 cruzamentos, a opção "Sem Carros" e "Acesso Controlado" lidera com folga sobre a manutenção da via.
          </div>
        </div>

        {/* Gráfico Comparativo 2: Top 3 Dores por Cruzamento */}
        <div className="bg-white rounded-xl border border-[#A7C4D2]/60 p-6 shadow-xs flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-base font-bold text-[#263868]">
              Top 3 Obstáculos (P6) por Cruzamento
            </h3>
            <p className="text-xs text-[#3B5C8B] mt-1">
              Na Padre Prudêncio a queixa sobre Calçadas é crítica (41 votos), enquanto Campos Sales lidera em Desorganização (31).
            </p>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={p6ComparisonData}
                margin={{ top: 10, right: 20, left: -10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#A7C4D2" opacity={0.3} />
                <XAxis
                  dataKey="ponto"
                  tick={{ fill: '#263868', fontSize: 11, fontWeight: 600 }}
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#3B5C8B', fontSize: 11, fontFamily: 'monospace' }}
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                />
                <RechartsTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#263868] text-white text-xs p-3 rounded-lg shadow-lg border border-[#3B5C8B]">
                          <p className="font-bold text-sm mb-1.5">{label}</p>
                          {payload.map((entry) => (
                            <div key={entry.name} className="flex justify-between gap-4 font-mono text-[11px]">
                              <span style={{ color: entry.color }}>{entry.name}:</span>
                              <span className="font-bold">{entry.value} menções</span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend
                  wrapperStyle={{ fontSize: 11, paddingTop: 10 }}
                  formatter={(value) => {
                    if (value === 'calcadas') return 'Calçadas';
                    if (value === 'desorganizacao') return 'Desorganização';
                    return 'Carros e Motos';
                  }}
                />
                <Bar dataKey="calcadas" fill="#FAA954" name="calcadas" radius={[4, 4, 0, 0]} />
                <Bar dataKey="desorganizacao" fill="#113B78" name="desorganizacao" radius={[4, 4, 0, 0]} />
                <Bar dataKey="carrosMotos" fill="#3B5C8B" name="carrosMotos" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-[#A7C4D2]/40 text-xs text-[#3B5C8B]">
            Diferenciação clara para o projeto executivo: calçadas mais críticas no início do trecho comercial.
          </div>
        </div>
      </div>
    </section>
  );
};
