'use client';

import Link from 'next/link';
import { useState } from 'react';

// 핵심 질문 답변 데이터
const faqData = [
  {
    q: '평균 CO2는 ICE만 계산? BEV도 포함?',
    a: 'BEV를 포함한 "모든 판매 차량"의 평균입니다. ICE, HEV, PHEV, BEV, FCEV 모두 포함하여 1년간 판매한 전 차종의 가중 평균을 계산합니다.',
  },
  {
    q: '언제 계산? 연말에?',
    a: '인도 회계연도(4월~다음해 3월) 종료 후 계산합니다. FY28 = 2027.04.01~2028.03.31. 다 팔고 나서 3월에 정산하는 개념입니다.',
  },
  {
    q: '기준이 뭔가? 총점이 있나?',
    a: '"총점" 개념이 아니라 "평균값 이하 유지" 개념입니다. 기업 평균 CO2 ≤ 91.7 g/km이면 통과, 초과하면 벌금입니다.',
  },
  {
    q: 'Super Credit이 뭔가? 차 할인?',
    a: '소비자 할인이 아닙니다! CO2 계산 시 BEV/HEV 판매대수를 2~3배로 계산해주는 가중치입니다. 결과적으로 평균 CO2가 낮아집니다.',
  },
  {
    q: '크레딧 3배가 무슨 말?',
    a: 'BEV 1대를 팔면 CO2 평균 계산 시 3대로 계산합니다. BEV의 CO2=0이므로, 분모가 늘어나 평균이 낮아지는 효과입니다.',
  },
  {
    q: 'HEV 70g/km면 2배로 35g/km?',
    a: '아닙니다! CO2 값 자체가 변하는 게 아니라, 70g/km 차량 1대가 "2대분"으로 계산됩니다. 낮은 값이 평균에 2배 영향력을 갖습니다.',
  },
  {
    q: '공차중량이 뭔가?',
    a: '연료 가득 + 승객/짐 없음 상태의 차량 무게입니다. 차체, 엔진, 윤활유 등 포함. 운전자/화물은 미포함.',
  },
  {
    q: '0.2L이 무슨 말?',
    a: '0.2 L/100km (연료소비량 기준)입니다. 목표 대비 미달분이 0.2L/100km 미만이면 경미한 위반(₹25,000/대), 이상이면 중대한 위반(₹50,000/대).',
  },
];

// Overview 데이터
const overviewData = {
  definition: '2027년 4월부터 시행되는 인도의 기업 평균 연비 규제. 자동차 제조사가 1년간 판매한 모든 차량(ICE+HEV+BEV 전부 포함)의 평균 CO2 배출량을 91.7 g/km 이하로 유지해야 하는 법규.',
  keyPoints: [
    'Phase III 목표: 91.7 g/km (2027-2032)',
    'Phase II (113 g/km) 대비 19% 감축',
    '시험 방법: MIDC → WLTP 전환',
    'Super Credit: BEV 3x, PHEV 2.5x, HEV 2x',
    '회계연도 기준 (4월~3월) 정산',
  ],
  timeline: [
    { phase: 'Phase I', period: '2017-2022', target: '130 g/km', status: '완료' },
    { phase: 'Phase II', period: '2022-2027', target: '113 g/km', status: '현재' },
    { phase: 'Phase III', period: '2027-2032', target: '91.7 g/km', status: '예정' },
    { phase: 'Phase IV', period: '2032-2037', target: '70 g/km', status: '계획' },
  ],
};

// Super Credit 상세 계산 예시
const superCreditExample = {
  title: 'Super Credit 실제 계산 예시',
  scenario: 'A사 연간 100,000대 판매',
  before: {
    title: 'Super Credit 없이 계산',
    data: [
      { model: '가솔린 SUV', sales: 50000, co2: 150, credit: 1, weighted: 50000, total: 7500000 },
      { model: '가솔린 세단', sales: 30000, co2: 120, credit: 1, weighted: 30000, total: 3600000 },
      { model: '하이브리드', sales: 10000, co2: 70, credit: 1, weighted: 10000, total: 700000 },
      { model: 'BEV', sales: 10000, co2: 0, credit: 1, weighted: 10000, total: 0 },
    ],
    totalSales: 100000,
    totalCO2: 11800000,
    average: 118,
    result: '불합격! 91.7 초과 → 벌금',
  },
  after: {
    title: 'Super Credit 적용',
    data: [
      { model: '가솔린 SUV', sales: 50000, co2: 150, credit: 1, weighted: 50000, total: 7500000 },
      { model: '가솔린 세단', sales: 30000, co2: 120, credit: 1, weighted: 30000, total: 3600000 },
      { model: '하이브리드', sales: 10000, co2: 70, credit: 2, weighted: 20000, total: 1400000 },
      { model: 'BEV', sales: 10000, co2: 0, credit: 3, weighted: 30000, total: 0 },
    ],
    totalSales: 130000,
    totalCO2: 12500000,
    average: 96.2,
    result: '여전히 91.7 초과 (개선 필요)',
  },
};

// WLTP 시험 방법 데이터
const wltpData = {
  definition: 'Worldwide Harmonised Light Vehicle Test Procedure - EU 2018년 도입, 인도 2027년 적용 예정',
  stages: [
    { name: 'Low', time: '9.8분', distance: '3.1 km', maxSpeed: 56.5, avgSpeed: 18.9, stopRatio: '26.5%', type: '도심 저속' },
    { name: 'Medium', time: '7.2분', distance: '4.8 km', maxSpeed: 76.6, avgSpeed: 39.4, stopRatio: '11.1%', type: '시외 중속' },
    { name: 'High', time: '7.6분', distance: '7.2 km', maxSpeed: 97.4, avgSpeed: 56.5, stopRatio: '6.8%', type: '간선 고속' },
    { name: 'Extra High', time: '5.4분', distance: '8.3 km', maxSpeed: 131.3, avgSpeed: 91.7, stopRatio: '2.2%', type: '고속도로' },
  ],
  total: { time: '30분', distance: '23.3 km', avgSpeed: 46.5 },
  comparison: [
    { item: '최고속도', midc: '90 km/h', wltp: '131 km/h' },
    { item: '평균속도', midc: '32 km/h', wltp: '47 km/h' },
    { item: '총 거리', midc: '8 km', wltp: '23 km' },
    { item: '소요시간', midc: '15분', wltp: '30분' },
    { item: '냉간 시동', midc: '미포함', wltp: '포함' },
    { item: '결과 차이', midc: '기준', wltp: '+15-20%' },
  ],
};

// 909kg 논쟁 데이터
const controversyData = {
  issue: '909 kg 이하 경차에 3 g/km 추가 공제 특례',
  curbWeight: {
    definition: '공차중량(Curb Weight) = 연료 가득 + 승객/짐 없음 상태의 차량 무게',
    includes: ['차체, 엔진, 변속기 등 모든 부품', '윤활유, 냉각수 등 작동 유체', '연료 (만땅 상태)'],
    excludes: ['운전자/승객', '화물/짐'],
  },
  criteria: ['공차중량 ≤ 909 kg', '배기량 ≤ 1,200 cc', '전장 ≤ 4,000 mm'],
  criteriaNote: '3가지 조건 모두 만족해야 3 g/km 공제!',
  affectedCars: [
    { brand: 'Maruti Suzuki', model: 'Alto K10', weight: 786, engine: 998, length: 3565 },
    { brand: 'Maruti Suzuki', model: 'S-Presso', weight: 805, engine: 998, length: 3565 },
    { brand: 'Maruti Suzuki', model: 'Celerio', weight: 850, engine: 998, length: 3695 },
    { brand: 'Maruti Suzuki', model: 'WagonR', weight: 895, engine: 998, length: 3655 },
    { brand: 'Renault', model: 'Kwid', weight: 785, engine: 999, length: 3731 },
  ],
  marketShare: { maruti: 95, renault: 5, others: 0 },
  support: {
    companies: ['Maruti Suzuki', 'Renault (2개사)'],
    arguments: ['글로벌 선례 (EU, 중국, 일본 등 90% 시장)', '서민용 이동수단 보호', '경차는 이미 효율적'],
  },
  oppose: {
    companies: ['Tata, Hyundai, Kia, Mahindra, MG 등 15개사'],
    arguments: ['909 kg 이하 중 B-NCAP 통과 차량 없음', '95% 혜택이 1개사(Maruti Suzuki) 집중', '기준의 자의성 (국제 표준 없음)'],
  },
};

// 벌금 데이터
const penaltyData = {
  explanation: '벌금 기준은 "연료소비량 (L/100km)" 미달분 기준',
  structure: [
    { condition: '미달 < 0.2 L/100km', penalty: '₹25,000/대', krw: '약 37,000원', severity: '경미한 위반', example: '목표 3.73, 실적 3.85 → 차이 0.12' },
    { condition: '미달 ≥ 0.2 L/100km', penalty: '₹50,000/대', krw: '약 75,000원', severity: '중대한 위반', example: '목표 3.73, 실적 4.10 → 차이 0.37' },
    { condition: '기본 벌금', penalty: '₹10 lakh', krw: '약 1,500만원', severity: '무조건 부과', example: '-' },
  ],
  conversion: 'CO2 91.7 g/km ≈ 연료소비량 3.73 L/100km (가솔린 기준)',
  impact: [
    { company: '8개 OEM 합계', penalty: '₹7,300 crore', krw: '약 1.2조원' },
    { company: 'Hyundai', penalty: '₹2,800 crore', krw: '약 4,500억원' },
    { company: 'Kia', penalty: '₹1,200 crore', krw: '약 1,900억원' },
    { company: 'Mahindra', penalty: '₹1,100 crore', krw: '약 1,800억원' },
  ],
};

// 경량화 소재 데이터
const materialsData = [
  {
    name: 'PP-LGF30',
    fullName: 'Long Glass Fiber Polypropylene 30%',
    korean: '유리장섬유 강화 폴리프로필렌 30%',
    description: 'PP 기재에 길이 10-25mm 유리섬유를 30% 보강한 복합소재',
    density: '1.14 g/cm³',
    cost: 'PP-TD20 대비 30-40% 높음 (~$2.5/kg)',
    weightReduction: '15-20% (동일 강도 기준)',
    strength: '인장강도 80-100 MPa (PP-TD20 대비 130-185% 향상)',
    applications: ['IP 캐리어', '도어 모듈', '시트 백보드', '범퍼 빔'],
    pros: ['고강도', '경량화', '내열성', '치수 안정성'],
    cons: ['외관 품질 저하 (섬유 뜸)', '원료비 상승', '금형 마모'],
  },
  {
    name: 'PP-NFRC',
    fullName: 'Natural Fiber Reinforced Composite',
    korean: '천연섬유 강화 복합재',
    description: 'PP에 케나프, 대마, 황마 등 천연섬유를 20-40% 보강',
    density: '0.95-1.00 g/cm³',
    cost: 'ABS 대비 20-30% 저렴 (~$1.6-1.8/kg)',
    weightReduction: '10-15% (vs ABS)',
    strength: '굴곡탄성률 2,800 MPa (ABS 대비 22% 향상)',
    applications: ['도어 트림', '필러 트림', '패키지 트레이', '트렁크 트림'],
    pros: ['경량', '친환경 (바이오)', '저렴', '인도 현지 소싱'],
    cons: ['충격강도 낮음', '내수성 주의', '냄새 이슈', '색상 제약'],
  },
  {
    name: 'Mg (마그네슘)',
    fullName: 'Magnesium Alloy',
    korean: '마그네슘 합금',
    description: '실용 금속 중 가장 가벼운 구조재 (AZ91D, AM60B 등)',
    density: '1.74 g/cm³ (알루미늄의 2/3, 철의 1/4)',
    cost: '스틸 대비 4-5배 (~$4.5-6.0/kg)',
    weightReduction: '75-80% (vs 스틸), 30-35% (vs 알루미늄)',
    strength: '인장강도 230 MPa, 비강도 최고',
    applications: ['시트 프레임', '스티어링 휠', 'IP 빔', '도어 이너'],
    pros: ['최고 경량화', '다이캐스팅 적합', '일체화 가능', '전자기 차폐'],
    cons: ['고가', '부식 취약', '가연성', '크리프 변형'],
  },
  {
    name: 'CFRP',
    fullName: 'Carbon Fiber Reinforced Plastic',
    korean: '탄소섬유 강화 플라스틱',
    description: '탄소섬유를 에폭시/PP/PA 수지에 보강한 최고급 복합소재',
    density: '1.55 g/cm³',
    cost: '스틸 대비 50-100배 (~$50-150/kg)',
    weightReduction: '50-70% (vs 스틸)',
    strength: '인장강도 1,500 MPa (스틸의 4배)',
    applications: ['루프 패널', 'B필러', '시트백 프레임', '스포일러'],
    pros: ['극한 경량화', '최고 강도', '피로 수명 우수', '부식 없음'],
    cons: ['극도로 고가', '생산 시간 길음', '수리 어려움', '재활용 어려움'],
  },
  {
    name: '발포 사출',
    fullName: 'Foam Injection Molding (MuCell)',
    korean: '발포 사출 성형',
    description: '용융 수지에 N2/CO2 가스를 주입하여 미세 기포 형성',
    density: '0.85 g/cm³ (일반 대비 -15%)',
    cost: '설비 투자 필요 (MuCell 유닛 $150-300K), 운영비 유사',
    weightReduction: '10-15%',
    strength: '약 5-10% 저하 (기포로 인해)',
    applications: ['IP', '도어 트림', '콘솔', '글로브 박스', '필러 트림'],
    pros: ['경량화', '싱크마크 제거', '휨 감소', '사이클타임 단축'],
    cons: ['표면 스월마크', '외관 부품 제한', '초기 설비 투자'],
  },
];

const tabs = [
  { id: 'faq', title: '핵심 Q&A', icon: '❓' },
  { id: 'overview', title: '개요', icon: '🎯' },
  { id: 'supercredit', title: 'Super Credit', icon: '📊' },
  { id: 'wltp', title: 'WLTP 시험', icon: '🔬' },
  { id: 'controversy', title: '909kg 논쟁', icon: '⚖️' },
  { id: 'penalty', title: '벌금 체계', icon: '💰' },
  { id: 'materials', title: '경량화 소재', icon: '🧪' },
];

export default function CAFEPhase3Page() {
  const [activeSection, setActiveSection] = useState('faq');

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
            <p className="text-zinc-400">Corporate Average Fuel Efficiency Phase III (인도)</p>
          </div>
        </div>

        <p className="text-xl text-zinc-300 max-w-3xl">
          인도의 2027년 기업 평균 연비 규제. 자동차 제조사가 판매 차량의 평균 CO2 배출량을{' '}
          <span className="text-orange-400 font-semibold">91.7 g/km</span> 이하로 유지해야 합니다.
        </p>

        {/* Key Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {[
            { label: 'CO2 목표', value: '91.7', unit: 'g/km' },
            { label: 'Phase II 대비', value: '-19', unit: '%' },
            { label: 'BEV 크레딧', value: '3', unit: '배' },
            { label: 'HEV 크레딧', value: '2', unit: '배' },
            { label: '시행', value: '2027.04', unit: '' },
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
        {/* FAQ Section */}
        {activeSection === 'faq' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">자주 묻는 핵심 질문들</h2>
            {faqData.map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Q. {item.q}</h3>
                <p className="text-zinc-300">{item.a}</p>
              </div>
            ))}
          </div>
        )}

        {/* Overview Section */}
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

        {/* Super Credit Section */}
        {activeSection === 'supercredit' && (
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Super Credit란?</h3>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                <p className="text-orange-300 font-medium">CO2 계산 시 "판매대수를 뻥튀기"해주는 제도</p>
                <p className="text-zinc-400 text-sm mt-2">BEV 1대 팔면 → 3대로 계산. CO2=0인 차량이 3대분 기여!</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { type: 'BEV (배터리 전기차)', multiplier: '3배', co2: '0 g/km', meaning: '1대 → 3대 계산' },
                  { type: 'FCEV (수소연료전지)', multiplier: '3배', co2: '0 g/km', meaning: '1대 → 3대 계산' },
                  { type: 'PHEV (플러그인 HEV)', multiplier: '2.5배', co2: '30-50 g/km', meaning: '1대 → 2.5대 계산' },
                  { type: 'SHEV (풀 하이브리드)', multiplier: '2배', co2: '50-80 g/km', meaning: '1대 → 2대 계산' },
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.type}</span>
                      <span className="text-orange-400 font-bold text-xl">{item.multiplier}</span>
                    </div>
                    <div className="text-sm text-zinc-500">CO2: {item.co2}</div>
                    <div className="text-sm text-zinc-400 mt-1">{item.meaning}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">{superCreditExample.title}</h3>
              <p className="text-zinc-400 mb-6">{superCreditExample.scenario}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-red-400 mb-3">{superCreditExample.before.title}</h4>
                  <div className="space-y-2 text-sm mb-4">
                    {superCreditExample.before.data.map((row, i) => (
                      <div key={i} className="flex justify-between text-zinc-400">
                        <span>{row.model}</span>
                        <span>{row.sales.toLocaleString()}대 × {row.co2}g</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-zinc-700 pt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-500">총 대수</span>
                      <span>{superCreditExample.before.totalSales.toLocaleString()}대</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">평균 CO2</span>
                      <span className="text-red-400 font-bold">{superCreditExample.before.average} g/km</span>
                    </div>
                    <div className="mt-2 text-red-400 text-sm">{superCreditExample.before.result}</div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-400 mb-3">{superCreditExample.after.title}</h4>
                  <div className="space-y-2 text-sm mb-4">
                    {superCreditExample.after.data.map((row, i) => (
                      <div key={i} className="flex justify-between text-zinc-400">
                        <span>{row.model} ({row.credit}x)</span>
                        <span>{row.weighted.toLocaleString()}대 (가중)</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-zinc-700 pt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-500">가중 총 대수</span>
                      <span>{superCreditExample.after.totalSales.toLocaleString()}대</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">평균 CO2</span>
                      <span className="text-yellow-400 font-bold">{superCreditExample.after.average} g/km</span>
                    </div>
                    <div className="mt-2 text-yellow-400 text-sm">{superCreditExample.after.result}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-zinc-800 rounded-lg p-4">
                <p className="text-sm text-zinc-400">
                  <span className="text-orange-400 font-medium">핵심:</span> BEV/HEV의 낮은 CO2가 분모를 늘려 평균을 낮춤.
                  118 → 96.2 g/km으로 대폭 개선! (더 많은 EV/HEV 필요)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* WLTP Section */}
        {activeSection === 'wltp' && (
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">WLTP란?</h3>
              <p className="text-zinc-300 mb-4">{wltpData.definition}</p>
              <div className="bg-zinc-800 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-400">{wltpData.total.time}</div>
                    <div className="text-sm text-zinc-500">총 소요시간</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">{wltpData.total.distance}</div>
                    <div className="text-sm text-zinc-500">총 거리</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">{wltpData.total.avgSpeed} km/h</div>
                    <div className="text-sm text-zinc-500">평균속도</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">WLTP 4단계 구성</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 px-3 text-zinc-400">단계</th>
                      <th className="text-left py-2 px-3 text-zinc-400">시간</th>
                      <th className="text-left py-2 px-3 text-zinc-400">거리</th>
                      <th className="text-left py-2 px-3 text-zinc-400">최고속도</th>
                      <th className="text-left py-2 px-3 text-zinc-400">평균속도</th>
                      <th className="text-left py-2 px-3 text-zinc-400">주행 특성</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wltpData.stages.map((stage, i) => (
                      <tr key={i} className="border-b border-zinc-800">
                        <td className="py-3 px-3 font-medium text-orange-400">{stage.name}</td>
                        <td className="py-3 px-3 text-zinc-400">{stage.time}</td>
                        <td className="py-3 px-3 text-zinc-400">{stage.distance}</td>
                        <td className="py-3 px-3">{stage.maxSpeed} km/h</td>
                        <td className="py-3 px-3">{stage.avgSpeed} km/h</td>
                        <td className="py-3 px-3 text-zinc-500">{stage.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">MIDC vs WLTP 비교</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 px-4 text-zinc-400">항목</th>
                      <th className="text-left py-2 px-4 text-zinc-400">MIDC (현재)</th>
                      <th className="text-left py-2 px-4 text-zinc-400">WLTP (2027~)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wltpData.comparison.map((row, i) => (
                      <tr key={i} className="border-b border-zinc-800">
                        <td className="py-3 px-4">{row.item}</td>
                        <td className="py-3 px-4 text-zinc-400">{row.midc}</td>
                        <td className="py-3 px-4 text-orange-400">{row.wltp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-orange-300 text-sm">
                  WLTP가 15-20% 더 높게 나옴 → 냉간 시동, 고속 주행, 긴 시험 거리 때문. 실제 주행에 더 가까움!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 909kg 논쟁 Section */}
        {activeSection === 'controversy' && (
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">공차중량(Curb Weight)이란?</h3>
              <p className="text-zinc-300 mb-4">{controversyData.curbWeight.definition}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-medium mb-2">포함</h4>
                  <ul className="text-sm text-zinc-300 space-y-1">
                    {controversyData.curbWeight.includes.map((item, i) => (
                      <li key={i}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-400 font-medium mb-2">미포함</h4>
                  <ul className="text-sm text-zinc-300 space-y-1">
                    {controversyData.curbWeight.excludes.map((item, i) => (
                      <li key={i}>✗ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">909kg 특례 조건</h3>
              <p className="text-zinc-400 mb-4">{controversyData.issue}</p>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                <p className="text-orange-300 font-medium mb-2">3가지 조건 모두 만족해야 3 g/km 공제!</p>
                <ul className="text-sm space-y-1">
                  {controversyData.criteria.map((c, i) => (
                    <li key={i} className="text-zinc-300">• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">해당 차량 현황</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 px-3 text-zinc-400">브랜드</th>
                      <th className="text-left py-2 px-3 text-zinc-400">모델</th>
                      <th className="text-left py-2 px-3 text-zinc-400">공차중량</th>
                      <th className="text-left py-2 px-3 text-zinc-400">배기량</th>
                      <th className="text-left py-2 px-3 text-zinc-400">전장</th>
                    </tr>
                  </thead>
                  <tbody>
                    {controversyData.affectedCars.map((car, i) => (
                      <tr key={i} className="border-b border-zinc-800">
                        <td className="py-3 px-3">{car.brand}</td>
                        <td className="py-3 px-3 font-medium">{car.model}</td>
                        <td className="py-3 px-3 text-green-400">{car.weight} kg</td>
                        <td className="py-3 px-3 text-green-400">{car.engine} cc</td>
                        <td className="py-3 px-3 text-green-400">{car.length} mm</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 text-sm">
                  95% 혜택이 <strong>Maruti Suzuki</strong>에 집중! 이것이 "불공정 특혜" 논란의 핵심.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-4">찬성 측 (2개사)</h3>
                <div className="text-sm text-zinc-400 mb-3">{controversyData.support.companies.join(', ')}</div>
                <ul className="space-y-2">
                  {controversyData.support.arguments.map((arg, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm">
                      <span className="text-green-400">✓</span>{arg}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-4">반대 측 (15개사)</h3>
                <div className="text-sm text-zinc-400 mb-3">{controversyData.oppose.companies.join(', ')}</div>
                <ul className="space-y-2">
                  {controversyData.oppose.arguments.map((arg, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm">
                      <span className="text-red-400">✗</span>{arg}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Penalty Section */}
        {activeSection === 'penalty' && (
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">벌금 기준 설명</h3>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                <p className="text-orange-300">{penaltyData.explanation}</p>
                <p className="text-zinc-400 text-sm mt-2">{penaltyData.conversion}</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">벌금 구조</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 px-4 text-zinc-400">조건</th>
                      <th className="text-left py-2 px-4 text-zinc-400">벌금</th>
                      <th className="text-left py-2 px-4 text-zinc-400">환산</th>
                      <th className="text-left py-2 px-4 text-zinc-400">예시</th>
                    </tr>
                  </thead>
                  <tbody>
                    {penaltyData.structure.map((item, i) => (
                      <tr key={i} className="border-b border-zinc-800">
                        <td className="py-3 px-4">
                          <div>{item.condition}</div>
                          <div className="text-xs text-zinc-500">{item.severity}</div>
                        </td>
                        <td className="py-3 px-4 text-orange-400 font-semibold">{item.penalty}</td>
                        <td className="py-3 px-4 text-zinc-500">{item.krw}</td>
                        <td className="py-3 px-4 text-zinc-500 text-sm">{item.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4">예상 벌금 규모 (2027년)</h3>
              <div className="space-y-3">
                {penaltyData.impact.map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span className="text-zinc-300">{item.company}</span>
                    <div className="text-right">
                      <span className="text-red-400 font-bold">{item.penalty}</span>
                      <span className="text-zinc-500 text-sm ml-2">({item.krw})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Materials Section */}
        {activeSection === 'materials' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">경량화 소재 상세</h2>
            {materialsData.map((material, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{material.name}</h3>
                    <p className="text-sm text-zinc-400">{material.fullName}</p>
                    <p className="text-sm text-zinc-500">{material.korean}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">{material.weightReduction}</div>
                    <div className="text-xs text-zinc-500">중량 감소</div>
                  </div>
                </div>

                <p className="text-zinc-300 mb-4">{material.description}</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="bg-zinc-800 rounded-lg p-3">
                    <div className="text-xs text-zinc-500">밀도</div>
                    <div className="font-medium">{material.density}</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-3">
                    <div className="text-xs text-zinc-500">원가</div>
                    <div className="font-medium text-sm">{material.cost}</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-3">
                    <div className="text-xs text-zinc-500">강도</div>
                    <div className="font-medium text-sm">{material.strength}</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-3">
                    <div className="text-xs text-zinc-500">적용 부품</div>
                    <div className="font-medium text-sm">{material.applications.slice(0, 2).join(', ')}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <h4 className="text-green-400 text-sm font-medium mb-2">장점</h4>
                    <ul className="text-xs space-y-1">
                      {material.pros.map((pro, j) => (
                        <li key={j} className="text-zinc-300">✓ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                    <h4 className="text-red-400 text-sm font-medium mb-2">단점</h4>
                    <ul className="text-xs space-y-1">
                      {material.cons.map((con, j) => (
                        <li key={j} className="text-zinc-300">✗ {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-4">인도 CAFE III 대응 우선순위</h3>
              <div className="space-y-2">
                {[
                  { rank: '1순위', material: '발포 사출', reason: '비용 대비 효과 최고' },
                  { rank: '2순위', material: 'PP-LGF30', reason: '금속 대체 가능' },
                  { rank: '3순위', material: 'PP-NFRC', reason: '친환경 + 경량' },
                  { rank: '4순위', material: '마그네슘', reason: '프리미엄 한정' },
                  { rank: '5순위', material: 'CFRP', reason: '비용 문제로 당분간 제외' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-zinc-800 rounded-lg p-3">
                    <span className="text-orange-400 font-bold">{item.rank}</span>
                    <span className="font-medium">{item.material}</span>
                    <span className="text-zinc-500 text-sm">- {item.reason}</span>
                  </div>
                ))}
              </div>
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
              { name: 'ICCT', url: 'https://theicct.org' },
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
