import React from 'react';
import { ShieldAlert, Car, Store, ArrowUpRight, TrendingUp } from 'lucide-react';

interface KpiSectionProps {
  vehicleRestriction: number;
  trafficInsecurity: number;
  topPriorityPct: number;
  topPriorityName: string;
}

export const KpiSection: React.FC<KpiSectionProps> = ({
  vehicleRestriction,
  trafficInsecurity,
  topPriorityPct,
  topPriorityName,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-10" aria-label="Indicadores Chave da Escuta Cidadã">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Restrição de Veículos */}
        <div className="relative overflow-hidden rounded-xl bg-[#263868] text-white p-6 sm:p-7 shadow-md border border-[#3B5C8B] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#A7C4D2] block">
                Consenso dos Participantes (P8)
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Restrição de Veículos
              </h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#113B78] border border-[#3B5C8B] flex items-center justify-center text-[#55BA5E] shadow-inner shrink-0">
              <Car className="w-6 h-6 stroke-[2.2]" />
            </div>
          </div>

          <div className="my-5">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight tabular-nums text-white">
                {vehicleRestriction.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
              </span>
              <span className="text-xs font-semibold text-[#55BA5E] bg-[#55BA5E]/15 px-2 py-0.5 rounded ml-2 border border-[#55BA5E]/30 inline-flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" />
                Ampla Maioria
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A7C4D2] mt-2 font-medium leading-snug">
              Preferem rua sem carros (55,6%), acesso controlado (30,6%) ou menos carros (11,1%). Apenas 2,8% optam pela manutenção do estado atual.
            </p>
          </div>

          <div className="pt-3 border-t border-[#3B5C8B]/60 flex items-center justify-between text-[11px] text-[#A7C4D2]/80 font-mono">
            <span>P8: N = 324 respostas</span>
            <span className="text-white font-bold">315 votos por restrição</span>
          </div>
        </div>

        {/* Card 2: Insegurança Viária */}
        <div className="relative overflow-hidden rounded-xl bg-[#263868] text-white p-6 sm:p-7 shadow-md border border-[#3B5C8B] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#FAA954] block">
                Vulnerabilidade do Pedestre (P5)
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Insegurança Viária
              </h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#113B78] border border-[#3B5C8B] flex items-center justify-center text-[#FAA954] shadow-inner shrink-0">
              <ShieldAlert className="w-6 h-6 stroke-[2.2]" />
            </div>
          </div>

          <div className="my-5">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight tabular-nums text-white">
                {trafficInsecurity.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
              </span>
              <span className="text-xs font-semibold text-[#FAA954] bg-[#FAA954]/15 px-2 py-0.5 rounded ml-2 border border-[#FAA954]/30 inline-flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" />
                Crítico
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A7C4D2] mt-2 font-medium leading-snug">
              Sentem-se inseguros ou muito inseguros diante da circulação de carros e motos. Apenas 2,2% avaliaram a circulação a pé como segura.
            </p>
          </div>

          <div className="pt-3 border-t border-[#3B5C8B]/60 flex items-center justify-between text-[11px] text-[#A7C4D2]/80 font-mono">
            <span>P5: N = 319 respostas</span>
            <span className="text-white font-bold">275 votos de insegurança</span>
          </div>
        </div>

        {/* Card 3: Prioridade de Projeto */}
        <div className="relative overflow-hidden rounded-xl bg-[#263868] text-white p-6 sm:p-7 shadow-md border border-[#3B5C8B] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#55BA5E] block">
                Primeira Prioridade Declarada (P7)
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Prioridade de Projeto
              </h3>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#113B78] border border-[#3B5C8B] flex items-center justify-center text-[#A7C4D2] shadow-inner shrink-0">
              <Store className="w-6 h-6 stroke-[2.2]" />
            </div>
          </div>

          <div className="my-5">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight tabular-nums text-white">
                {topPriorityPct.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
              </span>
              <span className="text-xs font-semibold text-[#A7C4D2] bg-[#A7C4D2]/15 px-2 py-0.5 rounded ml-2 border border-[#A7C4D2]/30">
                1º Lugar
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A7C4D2] mt-2 font-medium leading-snug">
              {topPriorityName}, calçadas (28,2%) e mais espaço para pedestres (22,0%) concentram 81,1% de todas as indicações.
            </p>
          </div>

          <div className="pt-3 border-t border-[#3B5C8B]/60 flex items-center justify-between text-[11px] text-[#A7C4D2]/80 font-mono">
            <span>P7: N = 323 respostas</span>
            <span className="text-white font-bold">100 votos na 1ª opção</span>
          </div>
        </div>
      </div>
    </section>
  );
};
