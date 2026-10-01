import React from 'react';
import { MapPin, Users, Calendar, Building2, Clock, FileSpreadsheet, Printer } from 'lucide-react';
import { LocationFilter, LOCATION_OPTIONS } from '../data/urbanData';

interface HeaderProps {
  onOpenDataModal: () => void;
  activeLocation: LocationFilter;
  totalVotesInLoc: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDataModal,
  activeLocation,
  totalVotesInLoc,
}) => {
  const locObj = LOCATION_OPTIONS.find(l => l.value === activeLocation);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="w-full bg-[#FFFFFF] border-b border-[#A7C4D2]/40 shadow-xs">
      {/* Top Institutional Line Belém */}
      <div className="bg-[#263868] text-white py-1.5 px-4 sm:px-8 text-xs font-medium tracking-wide flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Building2 className="w-3.5 h-3.5 text-[#A7C4D2]" />
          <span>PREFEITURA MUNICIPAL DE BELÉM · SEINFRA / SEPLANU</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[#A7C4D2] text-[11px]">
          <span>Programa Belo Centro</span>
          <span>·</span>
          <span>Nota Técnica SEPLANU/SEINFRA Nº XX/2026</span>
        </div>
      </div>

      {/* Main Header Context Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-7">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B5C8B]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-[#FFF0DE] text-[#263868] border border-[#FAA954]/50">
                <MapPin className="w-3.5 h-3.5 text-[#263868]" />
                Rua 13 de Maio · Bairro da Campina, Belém (PA)
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-[#263868]">
                <Calendar className="w-3.5 h-3.5 text-[#3B5C8B]" />
                26 de Setembro de 2026
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-[#3B5C8B]">
                <Clock className="w-3.5 h-3.5" />
                09h às 12h
              </span>
              <span>·</span>
              <span className="text-[#55BA5E] font-medium flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                Ação "Se Essa Rua Fosse Sua"
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263868] tracking-tight leading-tight">
              Diagnóstico de Percepção Cidadã e Diretrizes de Requalificação
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#113B78]">
              Escuta ativa nos painéis interativos e questionário complementar aos trabalhadores da via
            </p>

            <p className="text-xs sm:text-sm text-[#3B5C8B] max-w-3xl leading-relaxed">
              Consolidação de <strong>2.595 votos</strong> distribuídos em 8 perguntas temáticas (P1 a P8) nos 4 pontos do eixo estudado (Rua Padre Prudêncio, Rua Campos Sales, Rua 7 de Setembro e Avenida Portugal) e <strong>63 registros</strong> do questionário com lojistas, ambulantes e demais trabalhadores.
            </p>

            {/* Print-Only Official Metadata Subheader */}
            <div className="hidden print:block border-y border-[#A7C4D2] py-2 mt-3 text-xs font-mono text-[#263868]">
              <div className="flex justify-between items-center">
                <span><strong>RELATÓRIO TÉCNICO GERADO PARA IMPRESSÃO</strong></span>
                <span>SEPLANU / SEINFRA · Belém (PA)</span>
              </div>
              <div className="flex justify-between items-center text-[11px] text-[#3B5C8B] mt-1">
                <span>Ponto Analisado: <strong>{locObj?.label}</strong> ({locObj?.desc})</span>
                <span>Total de Votos no Recorte: <strong>{totalVotesInLoc}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between gap-3 pt-2 lg:pt-0 border-t sm:border-t-0 border-[#A7C4D2]/30 shrink-0">
            <div className="bg-[#FFF0DE] border border-[#A7C4D2]/70 rounded-lg p-3 text-left sm:text-right min-w-[210px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#3B5C8B] block">
                Localização Ativa Selecionada
              </span>
              <div className="flex items-baseline justify-start sm:justify-end gap-1.5 mt-0.5">
                <span className="text-2xl font-black text-[#263868] font-mono tabular-nums">
                  {totalVotesInLoc.toLocaleString('pt-BR')}
                </span>
                <span className="text-xs text-[#3B5C8B] font-medium">votos totais</span>
              </div>
              <span className="text-[11px] text-[#113B78] font-semibold mt-0.5 block truncate max-w-[230px]">
                {locObj?.label}
              </span>
            </div>

            {/* Action Buttons (Hidden on Print) */}
            <div className="no-print flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#55BA5E] text-[#263868] hover:bg-[#48a851] active:bg-[#48a851] transition-colors text-xs font-bold shadow-xs cursor-pointer"
                title="Imprimir ou salvar este relatório em PDF (window.print)"
              >
                <Printer className="w-3.5 h-3.5 text-[#263868]" />
                <span>Imprimir Relatório</span>
              </button>

              <button
                type="button"
                onClick={onOpenDataModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#263868] text-white hover:bg-[#113B78] active:bg-[#113B78] transition-colors text-xs font-semibold shadow-xs cursor-pointer"
                title="Abrir matriz tabular oficial com contagem por cruzamento"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#A7C4D2]" />
                <span className="hidden sm:inline">Base de Dados</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
