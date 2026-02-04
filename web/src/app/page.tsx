'use client';

import Link from 'next/link';
import { useState } from 'react';

// Knowledge categories
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: '학습 카테고리', value: '2', icon: '📁' },
            { label: '지식 문서', value: '14', icon: '📄' },
            { label: '평균 숙련도', value: '70%', icon: '📈' },
            { label: 'Git 커밋', value: '6', icon: '💾' },
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
