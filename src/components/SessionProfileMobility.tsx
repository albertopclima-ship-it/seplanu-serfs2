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
import { Users, Bus, Car, Footprints } from 'lucide-react';

interface ProfileItem {
  name: string;
  rawOption: string;
  votes: number;
  percentage: number;
}

interface MobilityItem {
  name: string;
  percentage: number;
  votes: number;
  isSustainable: boolean;
}

interface AgeItem {
  range: string;
  votes: number;
  percentage: number;
}

interface SessionProfileMobilityProps {
  profileData: ProfileItem[];
  mobilityData: MobilityItem[];
  ageData: AgeItem[];
}

// Tons institucionais de azul
const DONUT_COLORS = [
  '#263868', // Navy Blue (Compradores)
  '#113B78', // Dark Blue (Em Passagem)
  '#3B5C8B', // Medium Blue (Funcionários)
  '#A7C4D2', // Light Blue (Lojistas)
  '#5C82A6', // Soft Navy (Ambulantes)
];

export const SessionProfileMobility: React.FC<SessionProfileMobilityProps> = ({
  profileData,
  mobilityData,
  ageData,
}) => {
  const totalProfileVotes = profileData.reduce((acc, p) => acc + p.votes, 0);
  const totalMobilityVotes = mobilityData.reduce((acc, m) => acc + m.votes, 0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
      {/* Session Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#A7C4D2]/40 pb-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#3B5C8B] flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            Sessão 01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#263868] tracking-tight mt-0.5">
            O Perfil e a Mobilidade (P1 a P3)
          </h2>
        </div>
        <span className="text-xs text-[#113B78] font-semibold">
          Evidência da Rua 13 de Maio como destino comercial e eixo de circulação
        </span>
      </div>

      {/* Two columns grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico 1: Donut "Você está aqui como?" (P1) */}
        <div className="bg-white rounded-xl border border-[#A7C4D2]/60 p-6 shadow-xs flex flex-col justify-between">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#263868] flex items-center gap-2">
                <span>1. Você está aqui como?</span>
              </h3>
              <span className="text-xs font-semibold text-[#3B5C8B] bg-[#FFF0DE] border border-[#A7C4D2]/50 px-2 py-0.5 rounded font-mono">
                P1 (N = {totalProfileVotes})
              </span>
            </div>
            <p className="text-xs text-[#3B5C8B] mt-1">
              Distribuição por motivo de presença na via entre os participantes que votaram neste painel.
            </p>
          </div>

          <div className="w-full h-64 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={profileData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={3}
                  dataKey="percentage"
                  nameKey="name"
                  animationDuration={800}
                >
                  {profileData.map((entry, index) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                      stroke="#FFFFFF"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <RechartsTooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload as ProfileItem;
                      return (
                        <div className="bg-[#263868] text-white text-xs rounded-lg p-2.5 shadow-lg border border-[#3B5C8B]">
                          <p className="font-bold text-sm text-white">{data.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#A7C4D2]">Participação:</span>
                            <span className="font-mono font-bold text-[#55BA5E]">{data.percentage}%</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-[#A7C4D2]/80 mt-0.5 font-mono">
                            <span>Votos diretos:</span>
                            <span className="text-white font-bold">{data.votes} adesivos</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Central Donut Stat */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black font-mono text-[#263868] tabular-nums">
                {profileData[0]?.percentage ?? 69.5}%
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#3B5C8B]">
                {profileData[0]?.name ?? 'Compradores'}
              </span>
            </div>
          </div>

          {/* Legend and stats table */}
          <div className="mt-4 pt-3 border-t border-[#A7C4D2]/40 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {profileData.map((item, idx) => (
              <div
                key={item.name}
                className="p-2 rounded-md border border-[#A7C4D2]/40 bg-[#FFF0DE]/40 text-xs"
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-xs shrink-0"
                    style={{ backgroundColor: DONUT_COLORS[idx % DONUT_COLORS.length] }}
                  />
                  <span className="font-semibold text-[#263868] truncate text-[11px]">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mt-1 text-[11px] font-mono">
                  <span className="text-[#3B5C8B]">{item.votes} votos</span>
                  <span className="font-bold text-[#263868]">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico 2: Barras Horizontais "Como você chegou aqui?" (P3) */}
        <div className="bg-white rounded-xl border border-[#A7C4D2]/60 p-6 shadow-xs flex flex-col justify-between">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#263868] flex items-center gap-2">
                <span>3. Como você chegou aqui?</span>
              </h3>
              <div className="flex items-center gap-2 text-[11px] font-semibold">
                <span className="flex items-center gap-1 text-[#55BA5E]">
                  <span className="w-2 h-2 rounded-full bg-[#55BA5E]" />
                  Sustentável
                </span>
                <span className="flex items-center gap-1 text-[#113B78]">
                  <span className="w-2 h-2 rounded-full bg-[#113B78]" />
                  Motorizado Individual
                </span>
                <span className="font-mono text-[#3B5C8B] bg-[#FFF0DE] px-1.5 py-0.5 rounded border border-[#A7C4D2]/50">
                  P3 (N = {totalMobilityVotes})
                </span>
              </div>
            </div>
            <p className="text-xs text-[#3B5C8B] mt-1">
              Divisão modal do fluxo de acesso à Rua 13 de Maio.
            </p>
          </div>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={mobilityData}
                margin={{ top: 5, right: 30, left: 15, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#A7C4D2" opacity={0.3} />
                <XAxis
                  type="number"
                  unit="%"
                  domain={[0, 48]}
                  tick={{ fill: '#3B5C8B', fontSize: 11, fontFamily: 'monospace' }}
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={115}
                  tick={{ fill: '#263868', fontSize: 11, fontWeight: 600 }}
                  axisLine={{ stroke: '#A7C4D2' }}
                  tickLine={false}
                />
                <RechartsTooltip
                  cursor={{ fill: '#FFF0DE', opacity: 0.5 }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload as MobilityItem;
                      return (
                        <div className="bg-[#263868] text-white text-xs rounded-lg p-2.5 shadow-lg border border-[#3B5C8B]">
                          <p className="font-bold text-sm text-white">{data.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#A7C4D2]">Classificação:</span>
                            <span className={`font-semibold ${data.isSustainable ? 'text-[#55BA5E]' : 'text-[#FAA954]'}`}>
                              {data.isSustainable ? 'Modo Sustentável / Coletivo' : 'Motorizado Individual'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#A7C4D2]">Participação:</span>
                            <span className="font-mono font-bold text-white text-sm">{data.percentage}%</span>
                          </div>
                          <div className="text-[11px] text-[#A7C4D2]/80 mt-0.5 font-mono">
                            {data.votes} registros diretos
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
                  {mobilityData.map((entry) => (
                    <Cell
                      key={`bar-${entry.name}`}
                      fill={entry.isSustainable ? '#55BA5E' : '#113B78'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Footnote */}
          <div className="mt-4 pt-3 border-t border-[#A7C4D2]/40 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-[#3B5C8B] flex items-center gap-1.5">
              <Bus className="w-3.5 h-3.5 text-[#55BA5E]" />
              Modos ativos e coletivos (ônibus, pé, bike, barco) somam <strong>45,4%</strong> dos acessos.
            </span>
            <span className="font-mono text-[#263868] font-semibold text-[11px] bg-[#FFF0DE] px-2 py-0.5 rounded border border-[#A7C4D2]/60">
              Motos e carros: 41,7%
            </span>
          </div>
        </div>
      </div>

      {/* Faixa Etária (P2) Info Banner */}
      <div className="mt-4 p-4 rounded-xl bg-white border border-[#A7C4D2]/60 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#263868] uppercase">
              2. Faixa Etária dos Usuários (P2 · N=326)
            </span>
            <span className="text-[11px] text-[#55BA5E] font-bold bg-[#55BA5E]/15 px-2 py-0.5 rounded">
              43,5% com 45 anos ou mais
            </span>
          </div>
          <p className="text-xs text-[#3B5C8B]">
            Pessoas de 45 a 59 anos (24,2%) e de 60 anos ou mais (19,3%) somam 43,5%. Reforça a urgência de passeios regulares e rotas acessíveis (NBR 9050).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          {ageData.map((a) => (
            <div key={a.range} className="px-2.5 py-1.5 rounded-md bg-[#FFF0DE]/70 border border-[#A7C4D2]/50 text-center">
              <span className="block text-[10px] text-[#3B5C8B]">{a.range} anos</span>
              <span className="font-bold text-[#263868]">{a.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
