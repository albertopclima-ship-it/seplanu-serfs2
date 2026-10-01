import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FiltersBar, ActiveTab } from './components/FiltersBar';
import { KpiSection } from './components/KpiSection';
import { SessionProfileMobility } from './components/SessionProfileMobility';
import { SessionBuiltEnvironment } from './components/SessionBuiltEnvironment';
import { SessionDesiredScenario } from './components/SessionDesiredScenario';
import { SessionComplementarySurvey } from './components/SessionComplementarySurvey';
import { SessionIntersectionsComparison } from './components/SessionIntersectionsComparison';
import { TechnicalGuidelinesFooter } from './components/TechnicalGuidelinesFooter';
import { RawDataDrawer } from './components/RawDataDrawer';
import { LocationFilter, getUrbanMetricsByLocation } from './data/urbanData';

export default function App() {
  const [location, setLocation] = useState<LocationFilter>('TODAS');
  const [activeTab, setActiveTab] = useState<ActiveTab>('PAINEIS');
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);

  // Computa métricas diretamente da base oficial de contagem de votos, sem correlações inventadas
  const metrics = useMemo(() => {
    return getUrbanMetricsByLocation(location);
  }, [location]);

  const handleResetLocation = () => {
    setLocation('TODAS');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF0DE]/40">
      {/* 1. Header Institucional da Prefeitura Municipal de Belém */}
      <Header
        onOpenDataModal={() => setIsDataModalOpen(true)}
        activeLocation={location}
        totalVotesInLoc={metrics.totalVotesInLoc}
      />

      {/* 2. Barra de Navegação entre Instrumentos e Filtro Territorial */}
      <FiltersBar
        location={location}
        onChangeLocation={setLocation}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        onReset={handleResetLocation}
      />

      <main className="flex-1 w-full">
        {/* Painel Principal de Indicadores Chave da Escuta Cidadã */}
        <KpiSection
          vehicleRestriction={metrics.kpis.vehicleRestriction}
          trafficInsecurity={metrics.kpis.trafficInsecurity}
          topPriorityPct={metrics.kpis.topPriorityPct}
          topPriorityName={metrics.kpis.topPriorityName}
        />

        {/* Alternância limpa e rigorosa de visualizações conforme o instrumento */}
        {activeTab === 'PAINEIS' && (
          <>
            {/* Sessão 1: O Perfil e a Mobilidade (P1 a P3) */}
            <SessionProfileMobility
              profileData={metrics.profileDonut}
              mobilityData={metrics.mobilityChart}
              ageData={metrics.ageDistribution}
            />

            {/* Sessão 2: Diagnóstico do Ambiente Construído (P4 a P6) */}
            <SessionBuiltEnvironment
              painPointsData={metrics.painPointsChart}
              walkabilityData={metrics.walkabilityChart}
              badWalkPct={metrics.kpis.badWalkPct}
              trafficInsecurityPct={metrics.kpis.trafficInsecurity}
            />

            {/* Sessão 3: O Cenário Desejado (P7 e P8) */}
            <SessionDesiredScenario
              improvementsData={metrics.improvementsChart}
              circulationMap={metrics.circulationMap}
              semCarrosPct={metrics.kpis.semCarrosPct}
              semCarrosVotes={metrics.kpis.semCarrosVotes}
              acessoControladoPct={metrics.kpis.acessoControladoPct}
              acessoControladoVotes={metrics.kpis.acessoControladoVotes}
              menosCarrosPct={metrics.kpis.menosCarrosPct}
              menosCarrosVotes={metrics.kpis.menosCarrosVotes}
              comoEstaPct={metrics.kpis.comoEstaPct}
              comoEstaVotes={metrics.kpis.comoEstaVotes}
            />
          </>
        )}

        {activeTab === 'QUESTIONARIO' && (
          <>
            {/* Perspectiva de Lojistas, Ambulantes de Ponto Fixo e Demais Trabalhadores */}
            <SessionComplementarySurvey />

            {/* Sessão 3 de Cenário Desejado para confrontar expectativas */}
            <SessionDesiredScenario
              improvementsData={metrics.improvementsChart}
              circulationMap={metrics.circulationMap}
              semCarrosPct={metrics.kpis.semCarrosPct}
              semCarrosVotes={metrics.kpis.semCarrosVotes}
              acessoControladoPct={metrics.kpis.acessoControladoPct}
              acessoControladoVotes={metrics.kpis.acessoControladoVotes}
              menosCarrosPct={metrics.kpis.menosCarrosPct}
              menosCarrosVotes={metrics.kpis.menosCarrosVotes}
              comoEstaPct={metrics.kpis.comoEstaPct}
              comoEstaVotes={metrics.kpis.comoEstaVotes}
            />
          </>
        )}

        {activeTab === 'COMPARATIVO' && (
          <>
            {/* Análise Territorial Comparativa entre os 4 Cruzamentos Físicos */}
            <SessionIntersectionsComparison />

            {/* Sessão 2 para visualização detalhada de calçadas e caminhabilidade */}
            <SessionBuiltEnvironment
              painPointsData={metrics.painPointsChart}
              walkabilityData={metrics.walkabilityChart}
              badWalkPct={metrics.kpis.badWalkPct}
              trafficInsecurityPct={metrics.kpis.trafficInsecurity}
            />
          </>
        )}
      </main>

      {/* 3. Diretrizes Projetuais e Expediente da Prefeitura Municipal de Belém */}
      <TechnicalGuidelinesFooter
        onOpenDataModal={() => setIsDataModalOpen(true)}
      />

      {/* Modal Tabular Oficial e Download CSV */}
      <RawDataDrawer
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)}
      />
    </div>
  );
}
