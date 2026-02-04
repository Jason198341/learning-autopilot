'use client';

import Link from 'next/link';
import { useState } from 'react';

type TabType = 'overview' | 'patents' | 'materials' | 'swot' | 'cost' | 'glossary';

interface Patent {
  id: string;
  number: string;
  title: string;
  titleKr: string;
  description: string;
  keyFeatures: string[];
  process: string[];
  benefits: string[];
  applications: string[];
}

const patents: Patent[] = [
  {
    id: 'patent1',
    number: 'IN202421056908A',
    title: 'Saccharum Munja + HDPE Composite',
    titleKr: '천연섬유 복합소재',
    description: '인도 자생 Saccharum Munja 천연섬유와 HDPE를 혼합한 친환경 자동차 내장재 복합소재',
    keyFeatures: [
      '천연섬유 강화 열가소성 복합재',
      '인도 현지 원료 활용',
      '재활용 가능한 친환경 소재',
      '기존 PP 대비 10-15% 경량화',
    ],
    process: [
      '천연섬유 전처리 (알칼리 처리)',
      '섬유-HDPE 혼합 (압출기)',
      '펠렛 제조',
      '사출/압축 성형',
    ],
    benefits: ['탄소 발자국 30% 감소', '원가 5-10% 절감', '경량화로 연비 향상', 'ESG 경영 기여'],
    applications: ['도어 트림 패널', '시트 백 커버', '필러 트림', '트렁크 라이닝'],
  },
  {
    id: 'patent2',
    number: 'IN202521035215A',
    title: '3D Printing Eco-friendly Composite',
    titleKr: '3D 프린팅 친환경 복합소재',
    description: '천연섬유 강화 바이오 기반 필라멘트를 사용한 FDM/FFF 방식 3D 프린팅 소재',
    keyFeatures: [
      'PLA/PBS 기반 바이오 수지',
      '천연섬유 20-30% 함유',
      'FDM/FFF 프린터 호환',
      '시제품 신속 제작 가능',
    ],
    process: [
      '바이오 수지 + 천연섬유 컴파운딩',
      '필라멘트 압출 (1.75mm/2.85mm)',
      '3D 프린팅 (FDM/FFF)',
      '후처리 (필요시)',
    ],
    benefits: ['개발 시간 80% 단축', '금형 비용 절감', '맞춤형 부품 생산', '소량 다품종 대응'],
    applications: ['시제품 부품', '맞춤형 내장 액세서리', '소량 생산 부품', 'A/S 교체 부품'],
  },
  {
    id: 'patent3',
    number: 'IN202321047360A',
    title: 'CFRP Bending Strength Enhancement',
    titleKr: 'CFRP 굽힘 강도 향상',
    description: '적층 구조 및 계면 최적화를 통해 탄소섬유 복합재의 굽힘 강도를 30% 이상 향상',
    keyFeatures: [
      '하이브리드 적층 구조 [0°/90°/±45°]',
      '탄소섬유 표면 처리 기술',
      '고인성 에폭시 수지 시스템',
      '층간 전단강도 20% 향상',
    ],
    process: [
      '탄소섬유 표면 처리 (산화/플라즈마)',
      '고인성 에폭시 + 강인화제 배합',
      '최적화된 적층 각도 적용',
      '오토클레이브 경화',
    ],
    benefits: ['굽힘 강도 30%+ 향상', '구조 부품 적용 가능', '안전성 향상', '설계 자유도 증가'],
    applications: ['시트 프레임', '대시보드 구조재', 'B-필러 보강재', '배터리 케이스'],
  },
  {
    id: 'patent4',
    number: 'IN202321066950A',
    title: 'HL+VARTM Hybrid Manufacturing',
    titleKr: 'HL+VARTM 하이브리드 제조',
    description: 'Hand Layup과 VARTM을 결합한 대형 복잡 형상 CFRP 부품 제조 공정',
    keyFeatures: [
      '섬유 체적 분율 50-60% 달성',
      '기공률 1% 미만',
      '두께 균일성 ±5%',
      '생산 시간 20% 단축',
    ],
    process: [
      '몰드 이형 처리 및 겔코트 도포',
      'Hand Layup (외층 적층)',
      '진공 백 밀봉',
      'VARTM 수지 주입 및 경화',
    ],
    benefits: ['대형 부품 일체 성형', '품질 균일성 확보', '생산성 향상', '설비 투자 최소화'],
    applications: ['루프 패널', '후드 인너', '트렁크 리드', '대형 트림 부품'],
  },
];

const materialComparison = [
  { material: 'PP (폴리프로필렌)', density: '0.90', tensile: '25-35', usage: '도어 트림, 대시보드', pros: '저가, 가공 용이', cons: '낮은 강도' },
  { material: 'ABS', density: '1.04', tensile: '40-50', usage: '콘솔, 트림', pros: '우수한 충격 강도', cons: '내열성 한계' },
  { material: 'PC/ABS', density: '1.10', tensile: '55-65', usage: '계기판', pros: '고강도, 내열', cons: '고가' },
  { material: 'IIT 천연섬유 복합재', density: '0.85', tensile: '35-45', usage: '내장재 전반', pros: '친환경, 경량', cons: '검증 필요' },
  { material: 'IIT CFRP', density: '1.55', tensile: '500+', usage: '구조 부품', pros: '초고강도, 경량', cons: '고가' },
];

const swotData = {
  strengths: [
    { title: 'IIT 전문성', desc: '세계적 수준의 재료공학 연구 역량' },
    { title: '정부 지원', desc: '인도 정부 친환경 정책 및 R&D 지원' },
    { title: '특허 보호', desc: '4개 핵심 특허로 기술 보호' },
    { title: '현지 원료', desc: 'Saccharum Munja 인도 현지 조달' },
  ],
  weaknesses: [
    { title: '양산 검증', desc: '대량 생산 경험 부족' },
    { title: '초기 투자', desc: '설비 및 공정 개발 비용' },
    { title: '품질 일관성', desc: '천연섬유 품질 변동성' },
    { title: '인증 과정', desc: 'OEM 승인 절차 시간' },
  ],
  opportunities: [
    { title: '시장 성장', desc: '인도 자동차 시장 연 8% 성장' },
    { title: 'CAFE 규제', desc: '경량화 필수로 수요 증가' },
    { title: 'ESG 트렌드', desc: '친환경 소재 요구 증가' },
    { title: 'EV 확대', desc: '배터리 중량 상쇄 필요' },
  ],
  threats: [
    { title: '경쟁 기술', desc: '타사 유사 기술 개발' },
    { title: '원료 공급', desc: '천연섬유 수급 안정성' },
    { title: 'OEM 기준', desc: '글로벌 인증 요건 강화' },
    { title: '가격 경쟁', desc: '기존 소재 가격 하락' },
  ],
};

const costAnalysis = [
  { phase: '기술 이전', duration: '6개월', cost: '$100K-200K', activities: '특허 라이선스, 기술 문서, 초기 교육' },
  { phase: '파일럿 라인', duration: '12개월', cost: '$500K-1M', activities: '시험 설비, 공정 최적화, 시제품 제작' },
  { phase: '양산 준비', duration: '18개월', cost: '$2-5M', activities: '양산 설비, 품질 시스템, OEM 인증' },
];

const glossaryTerms = [
  { term: '기지재 (Matrix)', desc: '복합재에서 섬유를 감싸고 지지하는 재료 (예: 에폭시, HDPE)' },
  { term: '강화재 (Reinforcement)', desc: '복합재에서 강도와 강성을 담당하는 재료 (예: 탄소섬유, 천연섬유)' },
  { term: '계면 (Interface)', desc: '기지재와 강화재가 접촉하는 경계면, 결합력이 성능 좌우' },
  { term: '커플링제 (Coupling Agent)', desc: '기지재-강화재 계면 결합력을 향상시키는 첨가제' },
  { term: '적층 (Lamination)', desc: '프리프레그나 섬유층을 여러 겹 쌓아 올리는 공정' },
  { term: '함침 (Impregnation)', desc: '섬유에 수지를 스며들게 하는 공정' },
  { term: '경화 (Curing)', desc: '열/자외선으로 수지가 굳어지는 화학 반응' },
  { term: 'VARTM', desc: 'Vacuum Assisted Resin Transfer Molding, 진공 보조 수지 주입 공정' },
  { term: 'CFRP', desc: 'Carbon Fiber Reinforced Plastic, 탄소섬유 강화 플라스틱' },
  { term: 'HDPE', desc: 'High Density Polyethylene, 고밀도 폴리에틸렌' },
];

export default function IITCollaborationPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedPatent, setSelectedPatent] = useState<string | null>(null);

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'overview', label: '개요', icon: '🎯' },
    { id: 'patents', label: '4대 특허', icon: '📜' },
    { id: 'materials', label: '소재 비교', icon: '⚗️' },
    { id: 'swot', label: 'SWOT 분석', icon: '📊' },
    { id: 'cost', label: '비용 분석', icon: '💰' },
    { id: 'glossary', label: '용어 사전', icon: '📖' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Dashboard</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              <h1 className="text-xl font-bold text-white">IIT Bombay 협업</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm mb-6">
              <span>🔬</span>
              <span>IIT Bombay Technology Partnership</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              차세대 자동차 내장재 기술
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              IIT Bombay의 <span className="text-indigo-400">4개 특허 기술</span>을 통한
              <br />
              친환경 복합소재 및 CFRP 혁신
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4</div>
                <div className="text-sm text-slate-400">핵심 특허</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">30%</div>
                <div className="text-sm text-slate-400">탄소 발자국 감소</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">15%</div>
                <div className="text-sm text-slate-400">경량화 효과</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">30%+</div>
                <div className="text-sm text-slate-400">CFRP 강도 향상</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-indigo-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">협업 배경 및 목적</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-indigo-400">왜 IIT Bombay인가?</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">✓</span>
                      <span>인도 최고 공과대학 재료공학 전문성</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">✓</span>
                      <span>자동차 산업 맞춤형 연구 역량</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">✓</span>
                      <span>인도 정부 R&D 지원 연계</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">✓</span>
                      <span>현지 원료 활용 노하우</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-400">협업 목표</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>친환경 내장재 소재 국산화</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>CAFE Phase 3 경량화 대응</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>ESG 경영 지표 개선</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>원가 경쟁력 확보</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technology Overview */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">4대 핵심 기술 개요</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {patents.map((patent, index) => (
                  <div key={patent.id} className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">
                      {index === 0 ? '🌿' : index === 1 ? '🖨️' : index === 2 ? '💪' : '🔧'}
                    </div>
                    <div className="text-xs text-indigo-400 mb-1">특허 {index + 1}</div>
                    <div className="text-sm font-medium text-white mb-2">{patent.titleKr}</div>
                    <div className="text-xs text-slate-400">{patent.number}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Basic Concepts */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">기초 과학 개념</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <div className="text-2xl mb-2">⚛️</div>
                  <h3 className="font-semibold text-white mb-2">고분자 (Polymer)</h3>
                  <p className="text-sm text-slate-300">
                    &quot;많은(Poly) 부분(mer)&quot;이 반복 연결된 거대 분자.
                    플라스틱, 고무의 기본 구조.
                  </p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <div className="text-2xl mb-2">🧪</div>
                  <h3 className="font-semibold text-white mb-2">복합재료 (Composite)</h3>
                  <p className="text-sm text-slate-300">
                    두 가지 이상 재료를 결합하여 새로운 특성 창출.
                    기지재 + 강화재 구조.
                  </p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <div className="text-2xl mb-2">🔬</div>
                  <h3 className="font-semibold text-white mb-2">계면 (Interface)</h3>
                  <p className="text-sm text-slate-300">
                    기지재와 강화재의 접촉면.
                    결합력이 복합재 성능의 핵심.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Patents Tab */}
        {activeTab === 'patents' && (
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <div
                key={patent.id}
                className={`bg-slate-800/50 rounded-2xl border transition-all ${
                  selectedPatent === patent.id
                    ? 'border-indigo-500/50'
                    : 'border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                <button
                  onClick={() => setSelectedPatent(selectedPatent === patent.id ? null : patent.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-2xl">
                        {index === 0 ? '🌿' : index === 1 ? '🖨️' : index === 2 ? '💪' : '🔧'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs rounded">
                            특허 {index + 1}
                          </span>
                          <span className="text-xs text-slate-500">{patent.number}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{patent.titleKr}</h3>
                        <p className="text-sm text-slate-400">{patent.title}</p>
                      </div>
                    </div>
                    <svg
                      className={`w-6 h-6 text-slate-400 transition-transform ${
                        selectedPatent === patent.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {selectedPatent === patent.id && (
                  <div className="px-6 pb-6 space-y-6">
                    <div className="h-px bg-slate-700/50" />

                    <p className="text-slate-300">{patent.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Key Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-indigo-400 mb-3">핵심 특징</h4>
                        <ul className="space-y-2">
                          {patent.keyFeatures.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="text-indigo-400">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process */}
                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 mb-3">제조 공정</h4>
                        <ol className="space-y-2">
                          {patent.process.map((step, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center text-xs text-purple-400">
                                {i + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Benefits */}
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-3">기대 효과</h4>
                        <div className="flex flex-wrap gap-2">
                          {patent.benefits.map((benefit, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-green-500/10 text-green-300 text-xs rounded-full"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">적용 분야</h4>
                        <div className="flex flex-wrap gap-2">
                          {patent.applications.map((app, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Materials Comparison Tab */}
        {activeTab === 'materials' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 overflow-x-auto">
              <h2 className="text-xl font-bold text-white mb-6">기존 소재 vs IIT 기술 비교</h2>
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="text-left border-b border-slate-700/50">
                    <th className="pb-4 text-slate-400 font-medium">소재</th>
                    <th className="pb-4 text-slate-400 font-medium">밀도 (g/cm³)</th>
                    <th className="pb-4 text-slate-400 font-medium">인장강도 (MPa)</th>
                    <th className="pb-4 text-slate-400 font-medium">주요 용도</th>
                    <th className="pb-4 text-slate-400 font-medium">장점</th>
                    <th className="pb-4 text-slate-400 font-medium">단점</th>
                  </tr>
                </thead>
                <tbody>
                  {materialComparison.map((mat, index) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-700/30 ${
                        mat.material.includes('IIT') ? 'bg-indigo-500/10' : ''
                      }`}
                    >
                      <td className="py-4">
                        <span className={mat.material.includes('IIT') ? 'text-indigo-400 font-medium' : 'text-white'}>
                          {mat.material}
                        </span>
                      </td>
                      <td className="py-4 text-slate-300">{mat.density}</td>
                      <td className="py-4 text-slate-300">{mat.tensile}</td>
                      <td className="py-4 text-slate-300">{mat.usage}</td>
                      <td className="py-4 text-green-400">{mat.pros}</td>
                      <td className="py-4 text-orange-400">{mat.cons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Material Properties Visual */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">HDPE 특성</h3>
                <div className="space-y-4">
                  {[
                    { label: '밀도', value: '0.93-0.97 g/cm³', icon: '⚖️' },
                    { label: '인장강도', value: '20-37 MPa', icon: '💪' },
                    { label: '내열성', value: '80-120°C', icon: '🌡️' },
                    { label: '재활용성', value: '우수', icon: '♻️' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-slate-300">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                      <span className="text-indigo-400 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">개선 CFRP 특성</h3>
                <div className="space-y-4">
                  {[
                    { label: '굽힘 강도', value: '1,040+ MPa', icon: '📈' },
                    { label: '굽힘 탄성률', value: '55+ GPa', icon: '📊' },
                    { label: '층간 전단강도', value: '55+ MPa', icon: '🔗' },
                    { label: '경량화', value: '알루미늄 대비 40%', icon: '🪶' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-slate-300">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                      <span className="text-purple-400 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SWOT Tab */}
        {activeTab === 'swot' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💪</span>
                <h3 className="text-xl font-bold text-green-400">Strengths (강점)</h3>
              </div>
              <div className="space-y-3">
                {swotData.strengths.map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-3">
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-6 border border-orange-500/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚠️</span>
                <h3 className="text-xl font-bold text-orange-400">Weaknesses (약점)</h3>
              </div>
              <div className="space-y-3">
                {swotData.weaknesses.map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-3">
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚀</span>
                <h3 className="text-xl font-bold text-blue-400">Opportunities (기회)</h3>
              </div>
              <div className="space-y-3">
                {swotData.opportunities.map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-3">
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Threats */}
            <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-2xl p-6 border border-red-500/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚡</span>
                <h3 className="text-xl font-bold text-red-400">Threats (위협)</h3>
              </div>
              <div className="space-y-3">
                {swotData.threats.map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-3">
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Cost Analysis Tab */}
        {activeTab === 'cost' && (
          <div className="space-y-8">
            {/* Phase-wise Cost */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6">개발 단계별 비용 분석</h2>
              <div className="space-y-4">
                {costAnalysis.map((phase, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-lg font-bold text-indigo-400">{index + 1}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-white">{phase.phase}</div>
                          <div className="text-sm text-slate-400">{phase.duration}</div>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-indigo-400">{phase.cost}</div>
                    </div>
                    <div className="text-sm text-slate-300 ml-13">{phase.activities}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Analysis */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-6 border border-indigo-500/20">
              <h2 className="text-xl font-bold text-white mb-6">ROI 전망</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">$1-2M</div>
                  <div className="text-sm text-slate-400 mt-1">연간 소재비 절감</div>
                  <div className="text-xs text-slate-500">(차량 10만대 기준)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">CAFE</div>
                  <div className="text-sm text-slate-400 mt-1">벌금 회피</div>
                  <div className="text-xs text-slate-500">(경량화 효과)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">ESG</div>
                  <div className="text-sm text-slate-400 mt-1">평가 상승</div>
                  <div className="text-xs text-slate-500">(브랜드 가치)</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6">협업 로드맵</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <div className="text-indigo-400 text-sm font-medium mb-2">단기 (1-2년)</div>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• 시제품 개발 및 OEM 제출</li>
                    <li>• 물성 데이터 축적</li>
                    <li>• 양산 공정 최적화</li>
                  </ul>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <div className="text-purple-400 text-sm font-medium mb-2">중기 (3-5년)</div>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• 양산 적용 (1-2개 차종)</li>
                    <li>• 원가 경쟁력 확보</li>
                    <li>• 특허 포트폴리오 확장</li>
                  </ul>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <div className="text-cyan-400 text-sm font-medium mb-2">장기 (5년+)</div>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• 글로벌 OEM 확대 적용</li>
                    <li>• 기술 라이선싱 수익</li>
                    <li>• 친환경 소재 시장 선도</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Glossary Tab */}
        {activeTab === 'glossary' && (
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-6">용어 사전</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="bg-slate-700/30 rounded-xl p-4">
                  <div className="font-semibold text-indigo-400 mb-2">{item.term}</div>
                  <div className="text-sm text-slate-300">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-400 text-sm">
            <p>Learning Autopilot - IIT Bombay 협업 기술</p>
            <p className="mt-2">친환경 복합소재 및 CFRP 혁신 기술 학습</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
