'use client';

import Link from 'next/link';
import { useState } from 'react';

// Day curriculum
const days = [
  { day: 1, title: '원자의 본질', desc: '쿼크, 에너지=물질, 대칭의 의미', file: '01_DAY1_ATOM.md' },
  { day: 2, title: '전자 배치', desc: '층, 방, 오비탈, 최외각 전자', file: '02_DAY2_ELECTRON.md' },
  { day: 3, title: '화학결합', desc: '공유/이온/금속결합, 이중결합, 가교', file: '03_DAY3_BONDING.md' },
  { day: 4, title: '고분자', desc: 'PP/PE/ABS, 결정성, 분자 구조', file: '04_DAY4_POLYMER.md' },
  { day: 5, title: '열가소성 vs 열경화성', desc: '제조 공정, 자동차 적용', file: '05_DAY5_THERMOPLASTIC.md' },
  { day: 6, title: '표면 처리와 촉감', desc: '열전도, 그레인, 소프트터치', file: '06_DAY6_SURFACE.md' },
  { day: '6+', title: '첨가제 심화', desc: '12종 첨가제 메커니즘과 튜닝', file: 'ADDITIVE_GUIDE.md' },
  { day: 7, title: '조립의 과학', desc: '스냅핏, 나사체결, 용착, 열팽창, BSR', file: '07_DAY7_ASSEMBLY.md' },
  { day: 8, title: '시험과 규격', desc: '인장/충격/HDT/VOC/FOG 시험', file: '08_DAY8_TESTING.md' },
  { day: 9, title: '불량의 과학', desc: '가공불량/필드불량 진단 및 해결', file: '09_DAY9_DEFECTS.md' },
  { day: 10, title: '설계 의사결정', desc: '프로젝트 전체 프레임워크', file: '10_DAY10_FRAMEWORK.md' },
];

// Side topics
const sideTopics = [
  { num: 1, title: '표면 처리의 과학', desc: '표면 에너지, 화염/플라즈마 처리, 프라이머', file: 'SIDE1_SURFACE_TREATMENT.md' },
  { num: 2, title: '발포의 과학', desc: '화학/물리 발포, 핵 생성, 기포 구조', file: 'SIDE2_FOAMING.md' },
  { num: 3, title: '지속가능성의 과학', desc: '바이오 기반 vs 생분해성, 재활용, LCA', file: 'SIDE3_SUSTAINABILITY.md' },
  { num: 4, title: '전장 통합의 소재', desc: '광학 소재, 전도성 고분자, IME', file: 'SIDE4_ELECTRONICS.md' },
];

// Interactive visualizations
const visualizations = [
  { title: '탄소 오비탈 3D', desc: 's, p 오비탈의 3차원 형태', file: 'carbon_orbitals.html', icon: '🔮' },
  { title: 'ABS 분자 구조', desc: '아크릴로니트릴-부타디엔-스티렌 공중합체', file: 'abs_structure.html', icon: '🧬' },
  { title: '첨가제 튜닝 시뮬레이터', desc: '슬라이더로 첨가제 조절, 물성 변화 확인', file: 'additive_tuning_simulator.html', icon: '🎛️' },
];

const GITHUB_BASE = 'https://github.com/Jason198341/learning-autopilot/blob/master/knowledge/chemistry-for-interior-design/';
const RAW_BASE = 'https://raw.githubusercontent.com/Jason198341/learning-autopilot/master/knowledge/chemistry-for-interior-design/';

export default function ChemistryPage() {
  const [activeTab, setActiveTab] = useState<'days' | 'side' | 'viz'>('days');

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                ← 홈
              </Link>
              <div className="h-6 w-px bg-zinc-700" />
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚗️</span>
                <div>
                  <h1 className="text-xl font-bold">내장재 화학 기초</h1>
                  <p className="text-xs text-zinc-500">Chemistry for Interior Design</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                ✓ 100% 완료
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-rose-500/10 to-red-600/10 border border-rose-500/30 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-400">학습 목표</h2>
          <p className="text-lg text-zinc-300 mb-6">
            현대자동차 내장설계팀 팀장이 되기 위해 <strong>재료의 본질</strong>을 꿰뚫는다.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-zinc-900/50 rounded-lg p-4">
              <div className="text-rose-400 font-semibold mb-1">핵심 깨달음 1</div>
              <p className="text-zinc-400">물리학 공식은 자연 그 자체가 아니라 "달을 가리키는 손가락"</p>
            </div>
            <div className="bg-zinc-900/50 rounded-lg p-4">
              <div className="text-rose-400 font-semibold mb-1">핵심 깨달음 2</div>
              <p className="text-zinc-400">E=mc², 전자 배치, 결합 에너지 - 불완전한 도구를 능숙하게 쓴다</p>
            </div>
            <div className="bg-zinc-900/50 rounded-lg p-4">
              <div className="text-rose-400 font-semibold mb-1">핵심 깨달음 3</div>
              <p className="text-zinc-400">기존 도구를 마스터한 후 나만의 도구를 만든다</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b border-zinc-800 pb-4">
          <button
            onClick={() => setActiveTab('days')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'days'
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/50'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
            }`}
          >
            📚 본산 (Day 1~10)
          </button>
          <button
            onClick={() => setActiveTab('side')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'side'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
            }`}
          >
            🏔️ 옆산 (심화)
          </button>
          <button
            onClick={() => setActiveTab('viz')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'viz'
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
            }`}
          >
            🎮 인터랙티브
          </button>
        </div>

        {/* Days Content */}
        {activeTab === 'days' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>📚</span> 본산: 10일 커리큘럼
            </h3>
            <div className="grid gap-4">
              {days.map((item, i) => (
                <a
                  key={i}
                  href={`${GITHUB_BASE}${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-rose-500/50 transition-all hover:shadow-lg hover:shadow-rose-500/10">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-xl font-bold shrink-0">
                        {item.day}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold group-hover:text-rose-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
                      </div>
                      <div className="text-zinc-500 group-hover:text-rose-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Side Topics Content */}
        {activeTab === 'side' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>🏔️</span> 옆산: 심화 주제
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {sideTopics.map((item, i) => (
                <a
                  key={i}
                  href={`${GITHUB_BASE}${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-lg font-bold shrink-0">
                        {item.num}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold group-hover:text-amber-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Visualizations Content */}
        {activeTab === 'viz' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>🎮</span> 인터랙티브 시각화
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {visualizations.map((item, i) => (
                <a
                  key={i}
                  href={`${RAW_BASE}visualizations/${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 text-center h-full">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h4 className="text-lg font-bold group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-sm mt-2">{item.desc}</p>
                    <div className="mt-4 text-indigo-400 text-sm font-medium flex items-center justify-center gap-1">
                      <span>HTML로 열기</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <h4 className="font-bold text-indigo-400 mb-2">💡 사용법</h4>
              <p className="text-zinc-400 text-sm">
                인터랙티브 시각화는 HTML 파일입니다. 클릭하면 새 탭에서 열리며, 브라우저에서 바로 실행됩니다.
                로컬에서 사용하려면 GitHub에서 Raw 파일을 다운로드하세요.
              </p>
            </div>
          </div>
        )}

        {/* Knowledge Map */}
        <div className="mt-16 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 text-center">🗺️ 지식 지도</h3>
          <div className="text-center font-mono text-sm text-zinc-400">
            <pre className="inline-block text-left">
{`전자 배치 (Day 2)
    ↓
최외각 전자의 개수와 배치
    ↓
결합 방식 (Day 3)
    ↓
분자 구조 (Day 4)
    ↓
재료의 물성 (강도, 유연성, 색상, 내열성)
    ↓
자동차 시트의 촉감 (Day 6)`}
            </pre>
          </div>
          <p className="text-center text-zinc-500 mt-6 text-sm">
            "탄소가 자동차 내장재의 왕인 이유: 손 4개, 원자 크기 작음, 자기끼리 결합 강함"
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-zinc-500">
          <p>Chemistry for Interior Design - 내장재 화학 기초</p>
          <p className="text-sm mt-2">현대자동차 내장설계팀 팀장을 향한 여정</p>
        </div>
      </footer>
    </div>
  );
}
