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
import { Sparkles, Ban, ShieldCheck, Gauge } from 'lucide-react';

interface ImprovementItem {
  name: string;
  percentage: number;
  votes: number;
}

interface CirculationData {
  pct: number;
  votes: number;
}

interface SessionDesiredScenarioProps {
  improvementsData: ImprovementItem[];
  circulationMap: Record<string, CirculationData>;
  semCarrosPct: number;
  semCarrosVotes: number;
  acessoControladoPct: number;
  acessoControladoVotes: number;
  menosCarrosPct: number;
  menosCarrosVotes: number;
  comoEstaPct: number;
  comoEstaVotes: number;
}

export const SessionDesiredScenario: React.FC<SessionDesiredScenarioProps> = ({
  improvementsData,
  circulationMap,
  semCarrosPct,
  semCarrosVotes,
  acessoControladoPct,
  acessoControladoVotes,
  menosCarrosPct,
  menosCarrosVotes,
  comoEstaPct,
  comoEstaVotes,
}) => {
  const totalImprovVotes = improvementsData.reduce((acc, i) => acc + i.votes, 0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
      {/* Session Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#A7C4D2]/40 pb-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#55BA5E] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#55BA5E]" />
            Sessão 03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#263868] tracking-tight mt-0.5">
            O Cenário Desejado (P7 e P8)
          </h2>
        </div>
        <span className="text-xs text-[#113B78] font-semibold">
          Prioridades de intervenção e alternativas de regime de circulação
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Gráfico 1: Barras Horizontais Ordenadas "O que deveria melhorar primeiro?" (P7) */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-[#A7C4D2]/60 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#263868]">
                7. O que deveria melhorar primeiro?
              </h3>
              <span className="text-xs font-semibold text-[#55BA5E] bg-[#55BA5E]/10 border border-[#55BA5E]/30 px-2 py-0.5 rounded font-mono">
                P7 (N = {totalImprovVotes})
              </span>
            </div>
            <p className="text-xs text-[#3B5C8B] mt-1">
              Primeira prioridade apontada pelos cidadãos para guiar o Estudo Preliminar.
            </p>
          </div>

          <div className="w-full h-80 my-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={improvementsData}
                margin={{ top: 10, right: 35, left: 15, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#A7C4D2" opacity={0.3} />
                <XAxis
                  type="number"
                  unit="%"
                  domain={[0, 36]}
                  tick={{ fill: '#3B5C8B', fontSize: 11, fontFamily: 'monospace' }}
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={150}
                  tick={{ fill: '#263868', fontSize: 11, fontWeight: 600 }}
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                />
                <RechartsTooltip
                  cursor={{ fill: '#FFF0DE', opacity: 0.5 }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload as ImprovementItem;
                      return (
                        <div className="bg-[#263868] text-white text-xs rounded-lg p-2.5 shadow-lg border border-[#3B5C8B]">
                          <p className="font-bold text-sm text-white">{data.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#A7C4D2]">Percentual:</span>
                            <span className="font-mono font-bold text-[#55BA5E] text-sm">{data.percentage}%</span>
                          </div>
                          <div className="text-[11px] text-[#A7C4D2]/80 mt-0.5 font-mono">
                            {data.votes} votos diretos
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="percentage"
                  radius={[0, 4, 4, 0]}
                  animationDuration={800}
                >
                  {improvementsData.map((entry, index) => {
                    let color = '#3B5C8B';
                    if (index === 0) color = '#113B78';
                    if (index === 1) color = '#263868';
                    if (index === 2) color = '#55BA5E';
                    return <Cell key={`improv-${entry.name}`} fill={color} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-[#A7C4D2]/40 text-xs text-[#3B5C8B] flex items-center justify-between">
            <span>Organização (31,0%), Calçadas (28,2%) e Espaço Pedonal (22,0%) concentram <strong>81,1%</strong> dos votos.</span>
          </div>
        </div>

        {/* Card de Destaque Gigante: A preferência de circulação de veículos (P8) */}
        <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-[#263868] via-[#113B78] to-[#263868] text-white p-7 sm:p-8 shadow-xl border-2 border-[#55BA5E]/40 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#55BA5E]/10 blur-2xl pointer-events-none" />

          {/* Card Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest uppercase text-[#55BA5E] flex items-center gap-1.5">
                <Gauge className="w-4 h-4" />
                8. Circulação de Veículos (P8 · N=324)
              </span>
              <span className="bg-[#55BA5E] text-[#263868] text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                97,2% a favor de restrição
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
              A preferência de circulação de veículos
            </h3>
            <p className="text-xs sm:text-sm text-[#A7C4D2] mt-1 leading-relaxed">
              Expressa preferência marcante por redução motorizada. Conforme a Nota Técnica, as alternativas têm implicações distintas que serão comparadas no Estudo Preliminar.
            </p>
          </div>

          {/* Big Comparison Highlight Area */}
          <div className="relative z-10 my-6 space-y-4">
            {/* Opção 1: Sem Carros e Motos (55.6%) */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl p-4 sm:p-5 hover:bg-white/15 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#55BA5E] text-[#263868] flex items-center justify-center font-bold shrink-0 shadow-md">
                    <Ban className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-extrabold text-white">
                      Sem Carros / Motos
                    </h4>
                    <p className="text-xs text-[#A7C4D2]">
                      Calçadão 100% Pedonal sem tráfego de passagem
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#55BA5E] tracking-tight tabular-nums">
                    {semCarrosPct.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
                  </span>
                  <span className="text-[11px] text-[#A7C4D2] block font-mono">
                    {semCarrosVotes} votos diretos
                  </span>
                </div>
              </div>

              <div className="w-full bg-white/15 h-2.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-[#55BA5E] h-full rounded-full transition-all duration-1000"
                  style={{ width: `${semCarrosPct}%` }}
                />
              </div>
            </div>

            {/* Opção 2: Acesso Controlado (30.6%) */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl p-4 sm:p-5 hover:bg-white/15 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#3B5C8B] text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-extrabold text-white">
                      Acesso Controlado
                    </h4>
                    <p className="text-xs text-[#A7C4D2]">
                      Carga/descarga em horários restritos e veículos de emergência
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight tabular-nums">
                    {acessoControladoPct.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
                  </span>
                  <span className="text-[11px] text-[#A7C4D2] block font-mono">
                    {acessoControladoVotes} votos diretos
                  </span>
                </div>
              </div>

              <div className="w-full bg-white/15 h-2.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-[#A7C4D2] h-full rounded-full transition-all duration-1000"
                  style={{ width: `${acessoControladoPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Lower Bar Breakdown: Menos Carros (11.1%) vs Como Está Hoje (2.8%) */}
          <div className="relative z-10 pt-4 border-t border-white/15 grid grid-cols-2 gap-3 text-xs">
            <div className="bg-[#113B78]/60 p-3 rounded-lg border border-white/10">
              <span className="text-[#A7C4D2] block text-[11px]">Menos carros e motos:</span>
              <span className="text-lg font-bold text-white font-mono">{menosCarrosPct}%</span>
              <span className="text-[10px] text-[#A7C4D2] block mt-0.5 font-mono">({menosCarrosVotes} votos)</span>
            </div>
            <div className="bg-[#113B78]/40 p-3 rounded-lg border border-white/10 opacity-75">
              <span className="text-[#FAA954] block text-[11px]">Como está hoje (Status Quo):</span>
              <span className="text-lg font-bold text-white font-mono">{comoEstaPct}%</span>
              <span className="text-[10px] text-[#A7C4D2] block mt-0.5 font-mono">({comoEstaVotes} votos)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
