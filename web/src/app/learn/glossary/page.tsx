'use client';

import Link from 'next/link';
import { useState } from 'react';

interface GlossaryTerm {
  id: string;
  term: string;
  fullName: string;
  korean: string;
  category: string;
  description: string;
  progress: number;
  relatedTopics: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'imd',
    term: 'IMD',
    fullName: 'In-Mold Decoration',
    korean: '금형 내 장식',
    category: '표면처리',
    description: '플라스틱 사출 성형 시 금형 안에서 필름으로 장식까지 동시에 하는 기술',
    progress: 65,
    relatedTopics: ['내장재 플라스틱', 'IML', 'IMR', 'IMF'],
  },
  {
    id: 'cafe-phase-3',
    term: 'CAFE Phase 3',
    fullName: 'Corporate Average Fuel Efficiency Phase III',
    korean: '기업 평균 연비 규제 3단계',
    category: '법규',
    description: '2027년 시행 인도 연비 규제. 기업 평균 CO2 91.7g/km 이하 의무화. Super Credit, 909kg 논쟁 포함',
    progress: 60,
    relatedTopics: ['WLTP', 'BEV', 'HEV', '경량화', '인도 법규'],
  },
  {
    id: 'bncap-2.0',
    term: 'BNCAP 2.0',
    fullName: 'Bharat New Car Assessment Programme 2.0',
    korean: '인도 신차 안전 평가 2.0',
    category: '법규',
    description: '2027년 10월 시행 인도 차세대 안전 평가. 100점 만점, 5개 충돌 시험, 보행자/ADAS 평가 포함. Euro NCAP 수준',
    progress: 55,
    relatedTopics: ['Euro NCAP', 'GNCAP', 'AIS-197', 'ESC', 'ADAS', '인도 법규'],
  },
];

const categories = ['전체', '표면처리', '재료', '설계', '공정', '품질', '법규'];

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.korean.includes(searchTerm) ||
      term.description.includes(searchTerm);
    const matchesCategory =
      selectedCategory === '전체' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Dashboard</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📚</span>
              <h1 className="text-xl font-bold text-white">용어 사전</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm mb-6">
              <span>📖</span>
              <span>Automotive Glossary</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              자동차 용어 사전
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              자동차 산업의 전문 용어를 쉽게 이해하세요
              <br />
              <span className="text-teal-400">
                7단계 학습법으로 체계적인 이해
              </span>
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {glossaryTerms.length}
                </div>
                <div className="text-sm text-slate-400">전체 용어</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-slate-400">카테고리</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">7</div>
                <div className="text-sm text-slate-400">학습 단계</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="용어 검색... (예: IMD, 금형)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-teal-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term) => (
            <Link
              key={term.id}
              href={`/learn/glossary/${term.id}`}
              className="group"
            >
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all hover:shadow-lg hover:shadow-teal-500/10 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                        {term.term}
                      </span>
                      <span className="px-2 py-0.5 bg-teal-500/20 text-teal-300 text-xs rounded-full">
                        {term.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{term.fullName}</p>
                    <p className="text-sm text-teal-400">{term.korean}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl">📖</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {term.description}
                </p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-slate-400">학습 진도</span>
                    <span className="text-teal-400 font-medium">
                      {term.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all"
                      style={{ width: `${term.progress}%` }}
                    />
                  </div>
                </div>

                {/* Related Topics */}
                <div className="flex flex-wrap gap-1">
                  {term.relatedTopics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 bg-slate-700/50 text-slate-400 text-xs rounded"
                    >
                      {topic}
                    </span>
                  ))}
                  {term.relatedTopics.length > 3 && (
                    <span className="px-2 py-0.5 text-slate-500 text-xs">
                      +{term.relatedTopics.length - 3}
                    </span>
                  )}
                </div>

                {/* Arrow */}
                <div className="mt-4 flex items-center text-teal-400 text-sm font-medium group-hover:gap-2 transition-all">
                  <span>학습하기</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-slate-400">
              다른 검색어나 카테고리를 선택해보세요
            </p>
          </div>
        )}
      </section>

      {/* 7-Step Learning Method Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-8 border border-teal-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            📚 7단계 학습법
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { step: '01', name: '핵심 개념', icon: '🎯' },
              { step: '02', name: '멘탈 모델', icon: '🧠' },
              { step: '03', name: '심층 노트', icon: '📝' },
              { step: '04', name: '유추 연결', icon: '🔗' },
              { step: '05', name: '실전 적용', icon: '🛠️' },
              { step: '06', name: '탐구 질문', icon: '❓' },
              { step: '07', name: '숙련도 평가', icon: '📊' },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-slate-800/50 rounded-xl p-4 text-center"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs text-teal-400 mb-1">Step {item.step}</div>
                <div className="text-sm text-white font-medium">{item.name}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 mt-6">
            각 용어를 7단계로 체계적으로 학습하여 완벽하게 이해하세요
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-400 text-sm">
            <p>Learning Autopilot - Automotive Glossary</p>
            <p className="mt-2">체계적인 7단계 학습법으로 전문 용어 마스터</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
