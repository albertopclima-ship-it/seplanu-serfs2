import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Tooltip as RechartsTooltip,
} from 'recharts';
import { AlertTriangle, Footprints, Construction, Flame, ShieldAlert } from 'lucide-react';

interface PainPointItem {
  name: string;
  percentage: number;
  votes: number;
  isTopThree: boolean;
}

interface WalkabilityItem {
  name: string;
  votes: number;
  percentage: number;
  isBad: boolean;
}

interface SessionBuiltEnvironmentProps {
  painPointsData: PainPointItem[];
  walkabilityData: WalkabilityItem[];
  badWalkPct: number;
  trafficInsecurityPct: number;
}

export const SessionBuiltEnvironment: React.FC<SessionBuiltEnvironmentProps> = ({
  painPointsData,
  walkabilityData,
  badWalkPct,
  trafficInsecurityPct,
}) => {
  const totalPainVotes = painPointsData.reduce((acc, p) => acc + p.votes, 0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
      {/* Session Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#A7C4D2]/40 pb-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FAA954] flex items-center gap-1.5">
            <Construction className="w-3.5 h-3.5 text-[#FAA954]" />
            Sessão 02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#263868] tracking-tight mt-0.5">
            Diagnóstico do Ambiente Construído (P4 a P6)
          </h2>
        </div>
        <span className="text-xs text-[#113B78] font-semibold">
          Qualidade da caminhada, segurança viária e principais obstáculos físicos
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Chart Column: O que mais atrapalha hoje? (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#A7C4D2]/60 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#263868]">
                6. O que mais atrapalha hoje?
              </h3>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-[#263868]">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#FAA954]" />
                  Top 3 Obstáculos (#FAA954)
                </span>
                <span className="font-mono text-[#3B5C8B] bg-[#FFF0DE] px-1.5 py-0.5 rounded border border-[#A7C4D2]/50">
                  P6 (N = {totalPainVotes})
                </span>
              </div>
            </div>
            <p className="text-xs text-[#3B5C8B] mt-1">
              Obstáculos mais citados pelos pedestres ao longo da via durante a escuta ativa.
            </p>
          </div>

          <div className="w-full h-80 my-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={painPointsData}
                margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#A7C4D2" opacity={0.3} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#263868', fontSize: 11, fontWeight: 600 }}
                  interval={0}
                  angle={-18}
                  textAnchor="end"
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                  height={55}
                />
                <YAxis
                  unit="%"
                  domain={[0, 32]}
                  tick={{ fill: '#3B5C8B', fontSize: 11, fontFamily: 'monospace' }}
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                />
                <RechartsTooltip
                  cursor={{ fill: '#FFF0DE', opacity: 0.5 }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload as PainPointItem;
                      return (
                        <div className="bg-[#263868] text-white text-xs rounded-lg p-2.5 shadow-lg border border-[#3B5C8B]">
                          <p className="font-bold text-sm text-white">{data.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#A7C4D2]">Posição:</span>
                            <span className={data.isTopThree ? 'text-[#FAA954] font-bold' : 'text-[#A7C4D2]'}>
                              {data.isTopThree ? 'Top 3 Maior Obstáculo' : 'Obstáculo Complementar'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#A7C4D2]">Percentual:</span>
                            <span className="font-mono font-bold text-white text-sm">{data.percentage}%</span>
                          </div>
                          <div className="text-[11px] text-[#A7C4D2]/80 mt-0.5 font-mono">
                            {data.votes} adesivos colados
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="percentage"
                  radius={[4, 4, 0, 0]}
                  animationDuration={800}
                >
                  {painPointsData.map((entry) => (
                    <Cell
                      key={`pain-cell-${entry.name}`}
                      fill={entry.isTopThree ? '#FAA954' : '#3B5C8B'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-[#A7C4D2]/40 text-xs text-[#3B5C8B] flex items-center justify-between">
            <span>Calçadas (28,1%), Desorganização (27,2%) e Carros e motos (23,4%) totalizam <strong>78,7%</strong> dos votos.</span>
          </div>
        </div>

        {/* Insight Callout & Walkability Breakdown Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Main Callout Box (P4: 65,1% Ruim ou Muito Ruim) */}
          <div className="bg-[#FFF0DE] border-2 border-[#FAA954] rounded-xl p-5 shadow-xs relative overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAA954] text-[#263868] shrink-0 mt-0.5 shadow-xs">
                <AlertTriangle className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#113B78]">
                  4. Avaliação da Caminhada (P4 · N=318)
                </span>
                <h4 className="text-base sm:text-lg font-black text-[#263868] leading-tight">
                  Atenção: {badWalkPct.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}% consideram a caminhada na via Ruim ou Muito Ruim.
                </h4>
                <p className="text-xs text-[#263868]/90 leading-relaxed pt-1">
                  27,0% classificaram como regular e apenas 7,9% como boa ou muito boa. O diagnóstico confirma a urgência de nivelamento, ampliação das faixas livres e remoção de barreiras urbanísticas.
                </p>
              </div>
            </div>

            {/* Quick breakdown bars */}
            <div className="mt-4 pt-4 border-t border-[#FAA954]/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#263868]">
                <span className="flex items-center gap-1.5">
                  <Footprints className="w-3.5 h-3.5 text-[#3B5C8B]" />
                  Detalhamento da P4 (Contagem Real):
                </span>
                <span className="font-mono text-[#113B78]">Total = 318</span>
              </div>

              {/* Progress bar visual */}
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-white border border-[#A7C4D2]">
                <div style={{ width: '42.8%' }} className="bg-[#FAA954]" title="Muito Ruim: 42,8%" />
                <div style={{ width: '22.3%' }} className="bg-[#FAA954]/70" title="Ruim: 22,3%" />
                <div style={{ width: '27.0%' }} className="bg-[#3B5C8B]/60" title="Regular: 27,0%" />
                <div style={{ width: '6.0%' }} className="bg-[#55BA5E]/70" title="Bom: 6,0%" />
                <div style={{ width: '1.9%' }} className="bg-[#55BA5E]" title="Muito Bom: 1,9%" />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono">
                <div className="bg-white p-2 rounded border border-[#FAA954]/40">
                  <span className="text-[#3B5C8B] block text-[10px]">Muito Ruim</span>
                  <span className="font-bold text-[#263868]">42,8%</span> (136 votos)
                </div>
                <div className="bg-white p-2 rounded border border-[#FAA954]/30">
                  <span className="text-[#3B5C8B] block text-[10px]">Ruim</span>
                  <span className="font-bold text-[#263868]">22,3%</span> (71 votos)
                </div>
                <div className="bg-white p-2 rounded border border-[#A7C4D2]/60">
                  <span className="text-[#3B5C8B] block text-[10px]">Regular</span>
                  <span className="font-bold text-[#263868]">27,0%</span> (86 votos)
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Box: P5 Insegurança com Carros e Motos (86,2%) */}
          <div className="bg-white rounded-xl border border-[#A7C4D2]/60 p-4 shadow-xs flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#263868] text-[#FAA954] shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#263868] block">
                5. Insegurança diante de Carros e Motos (P5 · N=319)
              </span>
              <p className="text-xs text-[#3B5C8B] leading-relaxed">
                <strong>86,2%</strong> declararam sentir-se inseguros (32,9%) ou muito inseguros (53,3%) ao caminhar na presença de veículos motorizados. Apenas 2,2% responderam "seguro" ou "muito seguro".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
