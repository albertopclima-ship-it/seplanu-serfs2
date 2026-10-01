import React from 'react';
import { MapPin, RotateCcw, Info, BarChart3, Store, GitCompare, CheckCircle2 } from 'lucide-react';
import { LocationFilter, LOCATION_OPTIONS } from '../data/urbanData';

export type ActiveTab = 'PAINEIS' | 'QUESTIONARIO' | 'COMPARATIVO';

interface FiltersBarProps {
  location: LocationFilter;
  onChangeLocation: (loc: LocationFilter) => void;
  activeTab: ActiveTab;
  onChangeTab: (tab: ActiveTab) => void;
  onReset: () => void;
}

export const FiltersBar: React.FC<FiltersBarProps> = ({
  location,
  onChangeLocation,
  activeTab,
  onChangeTab,
  onReset,
}) => {
  const isFiltered = location !== 'TODAS';

  return (
    <section className="no-print bg-white border-y border-[#A7C4D2]/40 shadow-xs mb-8 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5">
        <div className="flex flex-col gap-4">
          {/* Top row: Tab Switcher (Instruments) + Reset */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#A7C4D2]/30 pb-3">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FFF0DE]/80 rounded-xl border border-[#A7C4D2]/50">
              <button
                type="button"
                onClick={() => onChangeTab('PAINEIS')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'PAINEIS'
                    ? 'bg-[#263868] text-white shadow-xs'
                    : 'text-[#263868] hover:bg-[#FFF0DE] hover:text-[#113B78]'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Painéis Interativos (2.595 Votos)</span>
              </button>

              <button
                type="button"
                onClick={() => onChangeTab('QUESTIONARIO')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'QUESTIONARIO'
                    ? 'bg-[#263868] text-white shadow-xs'
                    : 'text-[#263868] hover:bg-[#FFF0DE] hover:text-[#113B78]'
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                <span>Questionário Complementar (63 Registros)</span>
              </button>

              <button
                type="button"
                onClick={() => onChangeTab('COMPARATIVO')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'COMPARATIVO'
                    ? 'bg-[#263868] text-white shadow-xs'
                    : 'text-[#263868] hover:bg-[#FFF0DE] hover:text-[#113B78]'
                }`}
              >
                <GitCompare className="w-3.5 h-3.5" />
                <span>Comparativo dos 4 Cruzamentos</span>
              </button>
            </div>

            {/* Reset button */}
            <div className="flex items-center gap-3">
              {isFiltered && (
                <span className="text-[11px] font-medium text-[#113B78] bg-[#FFF0DE] border border-[#FAA954]/50 px-2.5 py-1 rounded-md">
                  Ponto ativo: {LOCATION_OPTIONS.find(l => l.value === location)?.label}
                </span>
              )}
              <button
                onClick={onReset}
                disabled={!isFiltered}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  isFiltered
                    ? 'text-[#263868] bg-[#FFF0DE] hover:bg-[#FAA954]/20 border border-[#FAA954] cursor-pointer'
                    : 'text-[#A7C4D2] bg-slate-50 border border-slate-200 cursor-not-allowed opacity-60'
                }`}
                title="Ver consolidação de toda a via"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Consolidação Geral</span>
              </button>
            </div>
          </div>

          {/* Location Selection Controls */}
          {activeTab === 'PAINEIS' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#263868] flex items-center gap-1.5 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#3B5C8B]" />
                  Filtrar por Ponto de Coleta / Cruzamento Físico:
                </label>
                <span className="text-[11px] text-[#3B5C8B]">
                  Dados reais coletados in loco por painel
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {LOCATION_OPTIONS.map((loc) => {
                  const isSelected = location === loc.value;
                  return (
                    <button
                      key={loc.value}
                      type="button"
                      onClick={() => onChangeLocation(loc.value)}
                      className={`flex flex-col items-start p-3 text-left rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#263868] border-[#263868] text-white shadow-xs ring-2 ring-[#3B5C8B]/30'
                          : 'bg-white hover:bg-[#FFF0DE]/60 border-[#A7C4D2]/60 text-[#263868]'
                      }`}
                    >
                      <span className="text-xs font-bold truncate w-full">
                        {loc.label}
                      </span>
                      <span
                        className={`text-[10px] mt-0.5 line-clamp-1 ${
                          isSelected ? 'text-[#A7C4D2]' : 'text-[#3B5C8B]'
                        }`}
                      >
                        {loc.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Official Methodological Notice Box */}
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFF0DE]/60 border border-[#A7C4D2]/60 text-xs text-[#263868]">
            <Info className="w-4 h-4 text-[#3B5C8B] shrink-0 mt-0.5" />
            <div className="text-[11px] leading-relaxed text-[#263868]/90">
              <strong>Critério Metodológico Oficial (Nota Técnica SEPLANU/SEINFRA):</strong> A participação nos painéis não foi individualmente correlacionada, visto que os participantes colavam adesivos de forma voluntária em cada pergunta (entre 318 e 334 votos por questão; 2.595 no total). Os dados dos painéis e do questionário complementar provêm de instrumentos distintos e não devem ser cruzados ou somados artificialmente.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
