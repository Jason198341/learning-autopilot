'use client';

import Link from 'next/link';
import { useState } from 'react';

// Knowledge categories (학습 카테고리)
const categories = [
  {
    id: 'automotive-body',
    title: '자동차 차체 아키텍처',
    subtitle: 'Automotive Body Architecture',
    description: '부품 구성과 역할, 충돌 안전 설계, 재질별 강도 분포',
    progress: 80,
    totalSteps: 7,
    completedSteps: 6,
    icon: '🚗',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'automotive-ecu',
    title: '차량용 전자제어기 (ECU)',
    subtitle: 'Electronic Control Unit',
    description: 'ECU 원리, CAN/LIN/Ethernet 통신, 차량 네트워크 아키텍처',
    progress: 60,
    totalSteps: 7,
    completedSteps: 5,
    icon: '🔌',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'automotive-interior-plastics',
    title: '내장재 플라스틱',
    subtitle: 'Interior Plastics Materials',
    description: 'PP, ABS, PC 등 재질 특성, 물성 데이터, 부품별 소재 선정, 품질 요구사항',
    progress: 70,
    totalSteps: 7,
    completedSteps: 6,
    icon: '🪑',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'automotive-parts-bom',
    title: '자동차 부품 BOM',
    subtitle: 'Bill of Materials',
    description: '범퍼, 연료도어, 시트벨트, 필러트림, 카펫, 시트, 글라스, 부틸테이프 등 부품 구조/재질/원가',
    progress: 30,
    totalSteps: 7,
    completedSteps: 2,
    icon: '📦',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'cockpit-design',
    title: '칵핏 설계 노하우',
    subtitle: 'Cockpit Design Expertise',
    description: '인간공학 기반 설계, IP/클러스터/콘솔 설계 원리, H-Point, 세계 전문가급 노하우',
    progress: 70,
    totalSteps: 7,
    completedSteps: 6,
    icon: '🎛️',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'india-interior-regulations',
    title: '인도 내장재 법규',
    subtitle: 'India Interior Regulations',
    description: 'CMVR/AIS/BIS 법규 체계, 삼소구(삼각대/소화기/구급상자), 난연성·돌출물 기준, TAC 인증 절차',
    progress: 55,
    totalSteps: 7,
    completedSteps: 4,
    icon: '🇮🇳',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'iit-collaboration',
    title: 'IIT Bombay 협업 기술',
    subtitle: 'IIT Technology Partnership',
    description: '천연섬유+HDPE 복합소재, 3D 프린팅 친환경 소재, CFRP 굽힘 강도 향상, HL+VARTM 하이브리드 제조 - 4대 특허 기술',
    progress: 40,
    totalSteps: 7,
    completedSteps: 3,
    icon: '🤝',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'smk-antenna',
    title: 'SMK 안테나',
    subtitle: 'Smart Key Antenna System',
    description: 'LF/UHF/UWB 안테나 기술, 페라이트 코어 설계, PEPS 통신 프로토콜, 제조 공정, 테스트 및 트러블슈팅',
    progress: 50,
    totalSteps: 7,
    completedSteps: 4,
    icon: '📡',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'mood-lamp',
    title: '무드램프 (Ambient Lighting)',
    subtitle: 'Mood Lamp System',
    description: '트랜시버 일체형/분리형, 라이트가이드 vs 라이트스트링, LIN 통신, PMMA/실리콘 재질, 광학 설계',
    progress: 45,
    totalSteps: 7,
    completedSteps: 3,
    icon: '💡',
    color: 'from-purple-500 to-pink-600',
  },
];

// Glossary terms (용어 사전 - 별도 섹션)
const glossaryTerms = [
  { id: 'imd', term: 'IMD', fullName: 'In-Mold Decoration', category: '표면처리' },
  { id: 'cafe-phase-3', term: 'CAFE Phase 3', fullName: 'Corporate Average Fuel Efficiency', category: '법규' },
  { id: 'bncap-2.0', term: 'BNCAP 2.0', fullName: 'Bharat New Car Assessment Programme', category: '법규' },
];

// Learning steps
const learningSteps = [
  { id: '00', name: 'Core Concept', title: '핵심 개념', icon: '🎯' },
  { id: '01', name: 'Mental Model', title: '멘탈 모델', icon: '🧠' },
  { id: '02', name: 'Deep Notes', title: '심층 노트', icon: '📚' },
  { id: '03', name: 'Analogy Map', title: '유추 연결', icon: '🔗' },
  { id: '04', name: 'Application', title: '실전 적용', icon: '⚡' },
  { id: '05', name: 'Questions', title: '탐구 질문', icon: '❓' },
  { id: '06', name: 'Mastery Score', title: '숙련도 평가', icon: '📊' },
];

export default function Home() {
  const [focusMode, setFocusMode] = useState(false);

  return (
    <div className={`min-h-screen ${focusMode ? 'bg-black' : ''}`}>
      {/* Header */}
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📖</span>
            <div>
              <h1 className="text-xl font-bold">Knowledge Vault</h1>
              <p className="text-xs text-zinc-500">지식 총화 시스템</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setFocusMode(!focusMode)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                focusMode
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
            >
              {focusMode ? '🎯 집중 모드 ON' : '🎯 집중 모드'}
            </button>
            <a
              href="https://github.com/Jason198341/learning-autopilot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              체계적 학습
            </span>
            의 시작
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            개념 1개 → 사고 확장 → 다층 이해 → 실전 적용 → 검증 → 반복 진화
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {[
            { label: '학습 카테고리', value: '9', icon: '📁' },
            { label: '용어 사전', value: '3', icon: '📚' },
            { label: '지식 문서', value: '50', icon: '📄' },
            { label: '평균 숙련도', value: '61%', icon: '📈' },
            { label: 'Git 커밋', value: '18', icon: '💾' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Glossary Section - 용어 사전 (별도 섹션) */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">📚</span>
          <div>
            <h3 className="text-2xl font-bold">용어 사전</h3>
            <p className="text-sm text-zinc-500">Automotive Glossary - 전문 용어 심층 학습</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-3xl shrink-0">
              📖
            </div>
            <div>
              <h4 className="text-xl font-bold text-teal-400 mb-2">7단계 학습법으로 용어 완전 정복</h4>
              <p className="text-zinc-400">
                자동차 산업의 전문 용어를 단순 암기가 아닌, 핵심 개념 → 멘탈 모델 → 심층 분석 →
                유추 연결 → 실전 적용 → 탐구 질문 → 숙련도 평가의 7단계로 체계적으로 학습합니다.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossaryTerms.map((term) => (
              <Link
                key={term.id}
                href={`/learn/glossary/${term.id}`}
                className="group"
              >
                <div className="bg-zinc-900/80 border border-zinc-700 rounded-xl p-5 hover:border-teal-500/50 transition-all hover:shadow-lg hover:shadow-teal-500/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {term.term}
                    </span>
                    <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full">
                      {term.category}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-3">{term.fullName}</p>
                  <div className="flex items-center text-teal-400 text-sm font-medium">
                    <span>학습하기</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/learn/glossary"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 rounded-lg transition-all"
            >
              <span>전체 용어 사전 보기</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-bold mb-8">학습 카테고리</h3>

        <div className="grid gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/learn/${category.id}`}
              className="group block"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl`}>
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                        {category.title}
                      </h4>
                      <p className="text-sm text-zinc-500">{category.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-400">{category.progress}%</div>
                    <div className="text-sm text-zinc-500">숙련도</div>
                  </div>
                </div>

                <p className="text-zinc-400 mb-6">{category.description}</p>

                {/* Progress bar */}
                <div className="progress-bar mb-4">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${category.progress}%` }}
                  />
                </div>

                {/* Steps preview */}
                <div className="flex flex-wrap gap-2">
                  {learningSteps.map((step, i) => (
                    <span
                      key={step.id}
                      className={`px-3 py-1 rounded-full text-xs ${
                        i < category.completedSteps
                          ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                          : 'bg-zinc-800 text-zinc-500'
                      }`}
                    >
                      {step.icon} {step.title}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning System */}
      <section className="bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold mb-8 text-center">학습 시스템</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '핵심 이해', desc: '개념을 가장 단순한 형태로', icon: '🎯' },
              { step: '02', title: '구조 구축', desc: '멘탈 모델과 인과관계', icon: '🏗️' },
              { step: '03', title: '지식 확장', desc: '엣지 케이스와 심층 탐구', icon: '🔬' },
              { step: '04', title: '교차 연결', desc: '다른 분야와 유추 연결', icon: '🔗' },
              { step: '05', title: '실전 적용', desc: '연습 문제와 프로젝트', icon: '⚡' },
              { step: '06', title: 'QA Gate', desc: '설명/적용/교육 검증', icon: '✅' },
              { step: '07', title: '문서 갱신', desc: '모든 지식 파일 업데이트', icon: '📝' },
              { step: '08', title: '커밋', desc: 'Git으로 진행 기록', icon: '💾' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs text-indigo-400 font-mono">Step {item.step}</span>
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 text-center text-zinc-500">
        <p className="mb-2">Knowledge Vault - 지식 총화 시스템</p>
        <p className="text-sm">
          Powered by{' '}
          <a
            href="https://github.com/Jason198341/learning-autopilot"
            className="text-indigo-400 hover:underline"
          >
            Learning Autopilot
          </a>
        </p>
      </footer>
    </div>
  );
}
