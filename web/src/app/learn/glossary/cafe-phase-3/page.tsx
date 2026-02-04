'use client';

import Link from 'next/link';
import { useState } from 'react';

// Data
const overviewData = {
  definition: 'Corporate Average Fuel Efficiency Phase III - 인도의 2027년 연비/배출가스 규제로, 자동차 제조사가 판매 차량의 평균 CO2 배출량을 91.7 g/km 이하로 유지해야 하는 법규',
  keyPoints: [
    'Phase III 목표: 91.7 g/km (2027-2032)',
    'Phase II 대비 19% 감축',
    '시험 방법: MIDC → WLTP 전환',
    'Super Credit: BEV 3x, PHEV 2.5x, HEV 2x',
  ],
  timeline: [
    { phase: 'Phase I', period: '2017-2022', target: '130 g/km', status: '완료' },
    { phase: 'Phase II', period: '2022-2027', target: '113 g/km', status: '현재' },
    { phase: 'Phase III', period: '2027-2032', target: '91.7 g/km', status: '예정' },
    { phase: 'Phase IV', period: '2032-2037', target: '70 g/km', status: '계획' },
  ],
};

const calculationData = {
  formula: '기업 평균 CO2 = Σ(각 차종 CO2 × 판매대수) / 총 판매대수',
  example: {
    title: '계산 예시',
    data: [
      { model: '소형차', co2: '90 g/km', sales: '100,000대', contribution: '9,000,000' },
      { model: 'SUV', co2: '150 g/km', sales: '50,000대', contribution: '7,500,000' },
      { model: 'EV (3x)', co2: '0 g/km', sales: '20,000대 → 60,000대', contribution: '0' },
    ],
    result: '기업 평균 = 16,500,000 / 210,000 = 78.6 g/km ✓',
  },
  superCredit: [
    { type: 'BEV (배터리 전기차)', multiplier: '3배', co2: '0 g/km' },
    { type: 'FCEV (수소연료전지차)', multiplier: '3배', co2: '0 g/km' },
    { type: 'PHEV (플러그인 하이브리드)', multiplier: '2.5배', co2: '30-50 g/km' },
    { type: 'HEV (풀 하이브리드)', multiplier: '2배', co2: '50-80 g/km' },
  ],
};

const controversyData = {
  issue: '909 kg 이하 경차에 3 g/km 추가 공제 특례',
  criteria: [
    '공차중량 ≤ 909 kg',
    '배기량 ≤ 1,200 cc',
    '전장 ≤ 4,000 mm',
  ],
  support: {
    companies: ['Maruti Suzuki', 'Renault'],
    arguments: [
      '글로벌 선례 (EU, 중국, 일본 등 90% 시장)',
      '서민용 이동수단 보호',
      '경차는 이미 효율적',
    ],
  },
  oppose: {
    companies: ['Tata', 'Hyundai', 'Kia', 'Mahindra', 'MG 등 15개사'],
    arguments: [
      '909 kg 이하 중 B-NCAP 통과 차량 없음',
      '95% 혜택이 1개사 집중 (불공정)',
      '기준의 자의성 (국제 표준 없음)',
    ],
  },
};

const penaltyData = {
  structure: [
    { condition: '미달 < 0.2 L/100km', penalty: '₹25,000/대', note: '약 37,000원' },
    { condition: '미달 ≥ 0.2 L/100km', penalty: '₹50,000/대', note: '약 75,000원' },
    { condition: '기본 벌금', penalty: '₹10 lakh', note: '약 1,500만원' },
  ],
  impact: {
    estimated: '8개 OEM 합계: ₹7,300 crore (약 1.2조원)',
    hyundai: 'Hyundai 단독: ₹2,800 crore (약 4,500억원)',
  },
};

const strategyData = {
  strategies: [
    {
      name: 'EV 판매 확대',
      description: 'Super Credit 활용으로 기업 평균 대폭 감소',
      effect: 'EV 1대 = ICE 3대 효과',
    },
    {
      name: '차량 경량화',
      description: '내장재, 차체, 파워트레인 경량화',
      effect: '10kg 감소 → 약 1 g/km CO2 감소',
    },
    {
      name: 'HEV 도입',
      description: '기존 ICE 모델의 하이브리드 전환',
      effect: 'CO2 30-40% 감소 + 2배 가중치',
    },
    {
      name: '포트폴리오 조정',
      description: '고배출 차종 축소, 저배출 차종 확대',
      effect: '포트폴리오 믹스 최적화',
    },
  ],
  interiorImpact: [
    'PP-TD20 → PP-LGF30 (15% 경량화)',
    'ABS → PP+NFRC (12% 경량화)',
    '스틸 프레임 → Mg/CFRP (30-40% 경량화)',
    '발포 사출 (MuCell) 적용',
  ],
};

const tabs = [
  { id: 'overview', title: '개요', icon: '🎯' },
  { id: 'calculation', title: '계산 방법', icon: '📊' },
  { id: 'controversy', title: '909kg 논쟁', icon: '⚖️' },
  { id: 'penalty', title: '벌금 체계', icon: '💰' },
  { id: 'strategy', title: '대응 전략', icon: '🎯' },
];

export default function CAFEPhase3Page() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/learn/glossary" className="text-zinc-400 hover:text-white">
              ← 용어 사전
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white font-medium">CAFE Phase 3</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-3xl">
            ⛽
          </div>
          <div>
            <h1 className="text-3xl font-bold">CAFE Phase 3</h1>
            <p className="text-zinc-400">Corporate Average Fuel Efficiency Phase III</p>
          </div>
        </div>

        <p className="text-xl text-zinc-300 max-w-3xl">
          인도의 2027년 기업 평균 연비 규제. 자동차 제조사가 판매 차량의 평균 CO2 배출량을{' '}
          <span className="text-orange-400 font-semibold">91.7 g/km</span> 이하로 유지해야 합니다.
        </p>

        {/* Key Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'CO2 목표', value: '91.7', unit: 'g/km' },
            { label: 'Phase II 대비', value: '-19', unit: '%' },
            { label: 'BEV 크레딧', value: '3', unit: '배' },
            { label: '시행', value: '2027', unit: '년' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-orange-400">
                {stat.value}
                <span className="text-sm text-zinc-500 ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                  activeSection === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {tab.icon} {tab.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">정의</h3>
              <p className="text-zinc-300">{overviewData.definition}</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">핵심 포인트</h3>
              <ul className="space-y-2">
                {overviewData.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-300">
                    <span className="text-orange-400">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Phase별 목표</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 px-4 text-zinc-400">Phase</th>
                      <th className="text-left py-2 px-4 text-zinc-400">기간</th>
                      <th className="text-left py-2 px-4 text-zinc-400">CO2 목표</th>
                      <th className="text-left py-2 px-4 text-zinc-400">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {overviewData.timeline.map((item, i) => (
                      <tr key={i} className={`border-b border-zinc-800 ${item.status === '예정' ? 'bg-orange-500/10' : ''}`}>
                        <td className="py-3 px-4 font-medium">{item.phase}</td>
                        <td className="py-3 px-4 text-zinc-400">{item.period}</td>
                        <td className="py-3 px-4 text-orange-400">{item.target}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            item.status === '현재' ? 'bg-green-500/20 text-green-400' :
                            item.status === '예정' ? 'bg-orange-500/20 text-orange-400' :
                            item.status === '완료' ? 'bg-zinc-700 text-zinc-400' :
                            'bg-zinc-800 text-zinc-500'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'calculation' && (
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">계산 공식</h3>
              <div className="bg-zinc-800 rounded-lg p-4 font-mono text-orange-400">
                {calculationData.formula}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">{calculationData.example.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full mb-4">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 px-4 text-zinc-400">모델</th>
                      <th className="text-left py-2 px-4 text-zinc-400">CO2</th>
                      <th className="text-left py-2 px-4 text-zinc-400">판매량</th>
                      <th className="text-left py-2 px-4 text-zinc-400">기여</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculationData.example.data.map((row, i) => (
                      <tr key={i} className="border-b border-zinc-800">
                        <td className="py-3 px-4">{row.model}</td>
                        <td className="py-3 px-4 text-zinc-400">{row.co2}</td>
                        <td className="py-3 px-4 text-zinc-400">{row.sales}</td>
                        <td className="py-3 px-4 font-mono">{row.contribution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400">
                {calculationData.example.result}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Super Credit 배수</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {calculationData.superCredit.map((item, i) => (
                  <div key={i} className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.type}</span>
                      <span className="text-orange-400 font-bold">{item.multiplier}</span>
                    </div>
                    <div className="text-sm text-zinc-500">CO2: {item.co2}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'controversy' && (
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">논쟁의 핵심</h3>
              <p className="text-zinc-300 mb-4">{controversyData.issue}</p>
              <div className="bg-zinc-800 rounded-lg p-4">
                <h4 className="text-sm font-medium text-zinc-400 mb-2">적용 조건</h4>
                <ul className="space-y-1">
                  {controversyData.criteria.map((c, i) => (
                    <li key={i} className="text-zinc-300">• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-4">찬성 측</h3>
                <div className="text-sm text-zinc-400 mb-3">
                  {controversyData.support.companies.join(', ')}
                </div>
                <ul className="space-y-2">
                  {controversyData.support.arguments.map((arg, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300">
                      <span className="text-green-400">✓</span>
                      {arg}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-4">반대 측</h3>
                <div className="text-sm text-zinc-400 mb-3">
                  {controversyData.oppose.companies.join(', ')}
                </div>
                <ul className="space-y-2">
                  {controversyData.oppose.arguments.map((arg, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300">
                      <span className="text-red-400">✗</span>
                      {arg}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'penalty' && (
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">벌금 구조</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 px-4 text-zinc-400">조건</th>
                      <th className="text-left py-2 px-4 text-zinc-400">벌금</th>
                      <th className="text-left py-2 px-4 text-zinc-400">환산</th>
                    </tr>
                  </thead>
                  <tbody>
                    {penaltyData.structure.map((item, i) => (
                      <tr key={i} className="border-b border-zinc-800">
                        <td className="py-3 px-4">{item.condition}</td>
                        <td className="py-3 px-4 text-orange-400 font-semibold">{item.penalty}</td>
                        <td className="py-3 px-4 text-zinc-500">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4">예상 벌금 규모</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300">8개 OEM 합계</span>
                  <span className="text-red-400 font-bold">{penaltyData.impact.estimated}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300">Hyundai 단독</span>
                  <span className="text-red-400">{penaltyData.impact.hyundai}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'strategy' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {strategyData.strategies.map((strategy, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">{strategy.name}</h3>
                  <p className="text-zinc-400 text-sm mb-3">{strategy.description}</p>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg px-3 py-2 text-orange-400 text-sm">
                    {strategy.effect}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">내장재 경량화 방안</h3>
              <ul className="space-y-2">
                {strategyData.interiorImpact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-300">
                    <span className="text-orange-400">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Sources */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-sm font-medium text-zinc-400 mb-3">Sources</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'IEA', url: 'https://www.iea.org/policies/26565-cafe-iii-co2-standards-for-light-duty-vehicles-from-2027-to-2032-phase-iii' },
              { name: 'BEE India', url: 'https://udit.beeindia.gov.in/cafe/' },
              { name: 'Business Standard', url: 'https://www.business-standard.com' },
              { name: 'Autocar India', url: 'https://www.autocarindia.com' },
            ].map((source, i) => (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 bg-zinc-800 rounded-full text-zinc-400 hover:text-orange-400 transition-colors"
              >
                {source.name} ↗
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
