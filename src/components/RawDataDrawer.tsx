import React, { useState } from 'react';
import { X, Download, Copy, Check, Table, Filter } from 'lucide-react';
import { RAW_PANEL_DATA, QuestionOptionVote } from '../data/urbanData';

interface RawDataDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RawDataDrawer: React.FC<RawDataDrawerProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [filterQuestion, setFilterQuestion] = useState<string>('ALL');

  if (!isOpen) return null;

  const questionsList = Array.from(new Set(RAW_PANEL_DATA.map(r => r.question)));

  const filteredData = filterQuestion === 'ALL'
    ? RAW_PANEL_DATA
    : RAW_PANEL_DATA.filter(r => r.question === filterQuestion);

  const totalFilteredVotes = filteredData.reduce((acc, r) => acc + r.total, 0);

  const handleDownloadCsv = () => {
    const headers = [
      'ID da Pergunta',
      'Pergunta',
      'Opção de Resposta',
      'Rua Padre Prudêncio',
      'Rua Campos Sales',
      'Rua 7 de Setembro',
      'Avenida Portugal',
      'Total de Votos (Todas)'
    ];

    const rows = RAW_PANEL_DATA.map(r => [
      r.id,
      `"${r.question}"`,
      `"${r.option}"`,
      r.padrePrudencio,
      r.camposSales,
      r.seteSetembro,
      r.avenidaPortugal,
      r.total
    ].join(','));

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'paineis_rua_13_de_maio_belem_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyClipboard = () => {
    const headers = 'ID\tPergunta\tOpção\tPadre Prudêncio\tCampos Sales\t7 de Setembro\tAv. Portugal\tTotal\n';
    const body = RAW_PANEL_DATA.map(r =>
      `${r.id}\t${r.question}\t${r.option}\t${r.padrePrudencio}\t${r.camposSales}\t${r.seteSetembro}\t${r.avenidaPortugal}\t${r.total}`
    ).join('\n');

    navigator.clipboard.writeText(headers + body).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="no-print fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-[#A7C4D2] shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#263868] text-white px-6 py-4 flex items-center justify-between border-b border-[#3B5C8B]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#113B78] text-[#A7C4D2]">
              <Table className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Matriz Oficial dos Painéis Interativos (2.595 Votos)
              </h3>
              <p className="text-xs text-[#A7C4D2]">
                Nota Técnica SEPLANU/SEINFRA Nº XX/2026 · Coleta em 26 de setembro de 2026, 9h às 12h
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A7C4D2] hover:text-white hover:bg-[#113B78] transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar with Question Filter & Action Buttons */}
        <div className="px-6 py-3 bg-[#FFF0DE]/40 border-b border-[#A7C4D2]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#3B5C8B]" />
            <select
              value={filterQuestion}
              onChange={(e) => setFilterQuestion(e.target.value)}
              className="text-xs font-semibold text-[#263868] bg-white border border-[#A7C4D2] rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#3B5C8B]"
            >
              <option value="ALL">Todas as 8 Perguntas ({RAW_PANEL_DATA.length} linhas · 2.595 votos)</option>
              {questionsList.map(q => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#3B5C8B] mr-2">
              Exibindo: <strong>{totalFilteredVotes}</strong> votos
            </span>
            <button
              onClick={handleCopyClipboard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white text-[#263868] border border-[#A7C4D2] rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#55BA5E]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar TSV'}</span>
            </button>
            <button
              onClick={handleDownloadCsv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#263868] text-white rounded-md hover:bg-[#113B78] transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#A7C4D2]" />
              <span>Baixar CSV Oficial</span>
            </button>
          </div>
        </div>

        {/* Table Content Area */}
        <div className="flex-1 overflow-auto p-6">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#263868] text-white font-semibold">
                <th className="py-2.5 px-3 border border-[#3B5C8B] text-center w-12">ID</th>
                <th className="py-2.5 px-3 border border-[#3B5C8B]">Pergunta / Tema</th>
                <th className="py-2.5 px-3 border border-[#3B5C8B]">Opção de Resposta</th>
                <th className="py-2.5 px-3 border border-[#3B5C8B] text-right font-mono">Padre Prudêncio</th>
                <th className="py-2.5 px-3 border border-[#3B5C8B] text-right font-mono">Campos Sales</th>
                <th className="py-2.5 px-3 border border-[#3B5C8B] text-right font-mono">7 de Setembro</th>
                <th className="py-2.5 px-3 border border-[#3B5C8B] text-right font-mono">Av. Portugal</th>
                <th className="py-2.5 px-3 border border-[#3B5C8B] text-right font-mono font-bold bg-[#113B78]">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#A7C4D2]/30">
              {filteredData.map((row, idx) => (
                <tr
                  key={`${row.id}-${row.option}-${idx}`}
                  className={idx % 2 === 0 ? 'bg-white hover:bg-[#FFF0DE]/40' : 'bg-slate-50/60 hover:bg-[#FFF0DE]/40'}
                >
                  <td className="py-2 px-3 border border-slate-200 text-center font-mono font-bold text-[#3B5C8B]">
                    {row.id}
                  </td>
                  <td className="py-2 px-3 border border-slate-200 font-medium text-[#263868]">
                    {row.question}
                  </td>
                  <td className="py-2 px-3 border border-slate-200 font-semibold text-[#113B78]">
                    {row.option}
                  </td>
                  <td className="py-2 px-3 border border-slate-200 text-right font-mono tabular-nums text-slate-700">
                    {row.padrePrudencio}
                  </td>
                  <td className="py-2 px-3 border border-slate-200 text-right font-mono tabular-nums text-slate-700">
                    {row.camposSales}
                  </td>
                  <td className="py-2 px-3 border border-slate-200 text-right font-mono tabular-nums text-slate-700">
                    {row.seteSetembro}
                  </td>
                  <td className="py-2 px-3 border border-slate-200 text-right font-mono tabular-nums text-slate-700">
                    {row.avenidaPortugal}
                  </td>
                  <td className="py-2 px-3 border border-slate-200 text-right font-mono tabular-nums font-bold text-[#263868] bg-[#FFF0DE]/50">
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FFF0DE]/60 px-6 py-3 border-t border-[#A7C4D2]/60 flex items-center justify-between text-xs text-[#3B5C8B]">
          <span>Prefeitura Municipal de Belém · SEPLANU / SEINFRA · Programa Belo Centro</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#263868] text-white rounded-md text-xs font-semibold hover:bg-[#113B78] cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
