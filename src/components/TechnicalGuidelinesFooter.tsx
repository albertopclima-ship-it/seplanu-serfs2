import React from 'react';
import { Route, Footprints, Trees, ShieldCheck, FileCheck, CheckCircle, Scale, Truck, Bus } from 'lucide-react';

interface TechnicalGuidelinesFooterProps {
  onOpenDataModal: () => void;
}

export const TechnicalGuidelinesFooter: React.FC<TechnicalGuidelinesFooterProps> = ({ onOpenDataModal }) => {
  return (
    <footer className="w-full bg-white border-t border-[#A7C4D2]/40 pt-12 pb-16 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Guidelines Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#A7C4D2]/30 pb-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#263868] flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-[#55BA5E]" />
              Diretrizes Projetuais Oficiais da Nota Técnica SEPLANU/SEINFRA
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#263868] tracking-tight mt-0.5">
              Subsídios para o Estudo Preliminar de Requalificação da Rua 13 de Maio
            </h3>
          </div>
          <p className="text-xs text-[#3B5C8B] max-w-md">
            Parâmetros técnicos derivados dos 2.595 votos e 63 questionários complementares para orientar a comparação de alternativas de desenho viário.
          </p>
        </div>

        {/* 3 Core Thematic Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 1. Prioridade à Caminhada e Redesenho Viário */}
          <div className="bg-[#FFF0DE]/40 border border-[#A7C4D2]/70 rounded-xl p-6 flex flex-col justify-between hover:border-[#263868] transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#263868] text-[#55BA5E] flex items-center justify-center shadow-xs">
                <Route className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#113B78] uppercase tracking-wider">
                  Diretriz I · Segurança e Tráfego
                </span>
                <h4 className="text-lg font-bold text-[#263868]">
                  Prioridade à Caminhada e Moderação Viária
                </h4>
              </div>
              <p className="text-xs text-[#3B5C8B] leading-relaxed">
                Reavaliar a seção transversal e travessias considerando os 86,2% de insegurança viária e os 97,2% favoráveis à restrição de veículos, em consonância com a Política Nacional de Mobilidade Urbana (Lei 12.587/2012).
              </p>
            </div>
            <ul className="mt-4 pt-4 border-t border-[#A7C4D2]/40 space-y-1.5 text-xs text-[#263868] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#55BA5E] shrink-0" />
                <span>Moderação de velocidade e regime de acesso controlado</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#55BA5E] shrink-0" />
                <span>Integração com paradas de ônibus e rotas ativas (45,4%)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#55BA5E] shrink-0" />
                <span>Garantia de acesso para veículos de socorro e emergência</span>
              </li>
            </ul>
          </div>

          {/* 2. Calçadas Acessíveis e Comércio Ordenado */}
          <div className="bg-[#FFF0DE]/40 border border-[#A7C4D2]/70 rounded-xl p-6 flex flex-col justify-between hover:border-[#263868] transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#113B78] text-[#FAA954] flex items-center justify-center shadow-xs">
                <Footprints className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#113B78] uppercase tracking-wider">
                  Diretriz II · Acessibilidade e Operação
                </span>
                <h4 className="text-lg font-bold text-[#263868]">
                  Calçadas Acessíveis e Operação Comercial
                </h4>
              </div>
              <p className="text-xs text-[#3B5C8B] leading-relaxed">
                Rotas de pedestres contínuas e desobstruídas em conformidade estrita com a LBI (Lei 13.146/2015) e a ABNT NBR 9050, articuladas a baias específicas de carga/descarga e ordenamento do comércio formal e ambulante.
              </p>
            </div>
            <ul className="mt-4 pt-4 border-t border-[#A7C4D2]/40 space-y-1.5 text-xs text-[#263868] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#55BA5E] shrink-0" />
                <span>Passeios contínuos sem degraus para atender 43,5% com 45+ anos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#55BA5E] shrink-0" />
                <span>Horários e baias demarcadas para reposição de mercadorias</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#55BA5E] shrink-0" />
                <span>Faixa de serviço dedicada para manter fluxo livre de compradores</span>
              </li>
            </ul>
          </div>

          {/* 3. Conforto Térmico e Infraestrutura Verde */}
          <div className="bg-[#FFF0DE]/40 border border-[#A7C4D2]/70 rounded-xl p-6 flex flex-col justify-between hover:border-[#263868] transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#3B5C8B] text-[#55BA5E] flex items-center justify-center shadow-xs">
                <Trees className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#113B78] uppercase tracking-wider">
                  Diretriz V · Conforto Bioclimático
                </span>
                <h4 className="text-lg font-bold text-[#263868]">
                  Conforto Térmico e Infraestrutura Verde
                </h4>
              </div>
              <p className="text-xs text-[#3B5C8B] leading-relaxed">
                Sombreamento contínuo para atenuar o calor (apontado por 50% dos ambulantes fixos como principal barreira), com pavimentação permeável e biovaletas compatíveis com o patrimônio histórico da Campina.
              </p>
            </div>
            <ul className="mt-4 pt-4 border-t border-[#A7C4D2]/40 space-y-1.5 text-xs text-[#263868] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#55BA5E] shrink-0" />
                <span>Espécies arbóreas compatíveis com a calha viária</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#55BA5E] shrink-0" />
                <span>Mobiliário urbano com coberturas de proteção solar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#55BA5E] shrink-0" />
                <span>Manejo de águas pluviais urbanas e drenagem sustentável</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Institutional Signatures & Legal Reference */}
        <div className="p-6 rounded-xl bg-[#FFF0DE]/60 border border-[#A7C4D2]/60 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#A7C4D2]/40 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#263868]" />
              <span className="text-xs font-bold text-[#263868]">
                Expediente Oficial · Equipe Responsável da SEPLANU / SEINFRA
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#113B78]">
              Belém (PA), 30 de setembro de 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <p className="font-bold text-[#263868]">Marcus Ataíde</p>
              <p className="text-[11px] text-[#3B5C8B]">Secretário Executivo de Planejamento Urbano (SEPLANU/SEINFRA)</p>
            </div>
            <div>
              <p className="font-bold text-[#263868]">Luiz Felipe Ferreira</p>
              <p className="text-[11px] text-[#3B5C8B]">Superintendente de Planejamento Urbano (SEPLANU/SEINFRA)</p>
            </div>
            <div>
              <p className="font-bold text-[#263868]">Alberto Lima</p>
              <p className="text-[11px] text-[#3B5C8B]">Assessor Técnico (SEPLANU/SEINFRA)</p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers */}
        <div className="pt-4 border-t border-[#A7C4D2]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3B5C8B]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#263868]" />
            <span>
              Prefeitura Municipal de Belém · Programa Belo Centro · Campina, Belém (PA)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#113B78] font-mono text-[11px]">
            <button
              onClick={onOpenDataModal}
              className="no-print hover:underline font-semibold text-[#263868] cursor-pointer"
            >
              Exportar Matriz Oficial CSV
            </button>
            <span className="no-print">·</span>
            <span>2.595 Votos · 4 Pontos de Coleta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
