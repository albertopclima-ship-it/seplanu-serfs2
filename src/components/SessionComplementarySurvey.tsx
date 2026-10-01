import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { Store, SunMedium, Briefcase, TrendingUp, AlertCircle, CheckCircle2, ShoppingBag } from 'lucide-react';
import { COMPLEMENTARY_SURVEY_DATA } from '../data/urbanData';

export const SessionComplementarySurvey: React.FC = () => {
  const { lojistas, ambulantesFixos, demaisTrabalhadores } = COMPLEMENTARY_SURVEY_DATA;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 animate-in fade-in duration-300">
      {/* Session Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#A7C4D2]/40 pb-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#113B78] flex items-center gap-1.5">
            <Store className="w-3.5 h-3.5 text-[#113B78]" />
            Questionário Complementar (63 Registros por ID)
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#263868] tracking-tight mt-0.5">
            Perspectiva de Lojistas, Ambulantes e Trabalhadores
          </h2>
        </div>
        <span className="text-xs text-[#3B5C8B] max-w-md text-left sm:text-right">
          Três blocos com denominadores próprios (não somados como se fossem amostra única)
        </span>
      </div>

      {/* 3 Columns / Cards for each group */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bloco 1: Lojistas (N=27) */}
        <div className="bg-white rounded-xl border border-[#A7C4D2]/60 p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#A7C4D2]/30 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#263868] text-white">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#263868]">
                    Lojistas Estabelecidos
                  </h3>
                  <span className="text-[11px] font-mono text-[#3B5C8B]">
                    N = 27 respondentes
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FFF0DE] text-[#263868] border border-[#FAA954]/50">
                Comércio Fixo
              </span>
            </div>

            {/* Fato Crítico Relatado */}
            <div className="p-3.5 rounded-lg bg-[#FFF0DE]/70 border border-[#FAA954]/60 text-xs">
              <div className="flex items-center gap-1.5 text-[#263868] font-bold">
                <AlertCircle className="w-4 h-4 text-[#FAA954] shrink-0" />
                <span>Impacto Recente no Fluxo</span>
              </div>
              <p className="text-[11px] text-[#263868]/90 mt-1 leading-snug">
                <strong>100% (27)</strong> relataram que o movimento da loja ficou menor ou muito menor desde a mudança recente na circulação de veículos.
              </p>
            </div>

            {/* Expectativa Vendas Futuras com Menos Carros */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#263868] block">
                Expectativa de Vendas com Menos Carros no Futuro:
              </span>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={lojistas.expectativaVendasComMenosCarros}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={65}
                      paddingAngle={3}
                      dataKey="percentage"
                      nameKey="name"
                    >
                      {lojistas.expectativaVendasComMenosCarros.map((entry) => (
                        <Cell key={`loj-${entry.name}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-[#263868] text-white text-xs p-2 rounded shadow border border-[#3B5C8B]">
                              <p className="font-bold">{data.name}</p>
                              <p className="font-mono text-[#55BA5E] font-bold">{data.percentage}% ({data.votes} lojistas)</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono">
                <div className="p-1.5 rounded bg-[#55BA5E]/10 border border-[#55BA5E]/30 text-[#263868]">
                  <span className="font-bold text-[#55BA5E] block text-xs">63,0% (17)</span>
                  Aumentaria as vendas
                </div>
                <div className="p-1.5 rounded bg-[#FAA954]/10 border border-[#FAA954]/30 text-[#263868]">
                  <span className="font-bold text-[#FAA954] block text-xs">22,2% (6)</span>
                  Diminuiria as vendas
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#A7C4D2]/40 text-[11px] text-[#3B5C8B] mt-3">
            Exige soluções de carga/descarga, vagas próximas e embarque/desembarque.
          </div>
        </div>

        {/* Bloco 2: Ambulantes de Ponto Fixo (N=20) */}
        <div className="bg-white rounded-xl border border-[#A7C4D2]/60 p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#A7C4D2]/30 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#113B78] text-[#55BA5E]">
                  <SunMedium className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#263868]">
                    Ambulantes de Ponto Fixo
                  </h3>
                  <span className="text-[11px] font-mono text-[#3B5C8B]">
                    N = 20 (+ 3 de ponto móvel)
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FFF0DE] text-[#263868] border border-[#A7C4D2]">
                Permanência
              </span>
            </div>

            {/* Principal Dificuldade para Trabalhar */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-[#263868] flex items-center justify-between">
                <span>Principal Dificuldade para Trabalhar:</span>
                <span className="text-[10px] text-[#FAA954] font-bold">50% Calor</span>
              </span>
              <div className="space-y-1 text-xs">
                {ambulantesFixos.principalDificuldade.map((d) => (
                  <div key={d.name} className="flex items-center justify-between p-1.5 rounded bg-[#FFF0DE]/40 border border-[#A7C4D2]/30 text-[11px]">
                    <span className="text-[#263868] truncate">{d.name}</span>
                    <span className="font-mono font-bold text-[#113B78] shrink-0 ml-2">
                      {d.percentage}% ({d.votes})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expectativa com menos carros */}
            <div className="p-3 rounded-lg bg-[#55BA5E]/10 border border-[#55BA5E]/30 text-xs">
              <span className="font-bold text-[#263868] block">Expectativa com Menos Veículos:</span>
              <p className="text-[11px] text-[#263868]/90 mt-1 leading-snug">
                <strong>75% (15 ambulantes)</strong> esperam melhora (55%) ou manutenção (20%) das condições de trabalho. 4 (20%) preveem piora.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#A7C4D2]/40 text-[11px] text-[#3B5C8B] mt-3">
            75% afirmam que carros e motos não atrapalham suas vendas de forma direta.
          </div>
        </div>

        {/* Bloco 3: Demais Trabalhadores (N=14) */}
        <div className="bg-white rounded-xl border border-[#A7C4D2]/60 p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#A7C4D2]/30 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#3B5C8B] text-white">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#263868]">
                    Demais Trabalhadores
                  </h3>
                  <span className="text-[11px] font-mono text-[#3B5C8B]">
                    N = 14 registros
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FFF0DE] text-[#263868] border border-[#A7C4D2]">
                Rotina & Deslocamento
              </span>
            </div>

            <p className="text-xs text-[#3B5C8B] leading-relaxed">
              Trabalhadores da via avaliados quanto à rotina de deslocamento e impacto da restrição veicular no cotidiano de trabalho.
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#263868] block">
                Avaliação diante de Rua com Menos Carros e Motos:
              </span>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-[#55BA5E]/10 border border-[#55BA5E]/30 text-[#263868]">
                  <span className="font-semibold">Melhoraria o trabalho</span>
                  <span className="font-bold text-[#55BA5E]">6 pessoas (42,9%)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200 text-[#263868]">
                  <span className="font-semibold">Não mudaria</span>
                  <span className="font-bold text-[#3B5C8B]">4 pessoas (28,6%)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#FAA954]/10 border border-[#FAA954]/30 text-[#263868]">
                  <span className="font-semibold">Pioraria</span>
                  <span className="font-bold text-[#FAA954]">3 pessoas (21,4%)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200 text-[#3B5C8B]">
                  <span>Não respondeu</span>
                  <span>1 pessoa (7,1%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#A7C4D2]/40 text-[11px] text-[#3B5C8B] mt-3">
            Caráter complementar aos dados dos painéis; não sobrepor à amostra geral.
          </div>
        </div>
      </div>
    </section>
  );
};
