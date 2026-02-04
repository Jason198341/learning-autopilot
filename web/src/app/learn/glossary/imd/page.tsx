'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Section {
  id: string;
  title: string;
  icon: string;
  file: string;
}

const sections: Section[] = [
  { id: 'core', title: '핵심 개념', icon: '🎯', file: '00_CORE_CONCEPT' },
  { id: 'mental', title: '멘탈 모델', icon: '🧠', file: '01_MENTAL_MODEL' },
  { id: 'deep', title: '심층 노트', icon: '📝', file: '02_DEEP_NOTES' },
  { id: 'analogy', title: '유추 연결', icon: '🔗', file: '03_ANALOGY_MAP' },
  { id: 'application', title: '실전 적용', icon: '🛠️', file: '04_APPLICATION' },
  { id: 'questions', title: '탐구 질문', icon: '❓', file: '05_QUESTIONS' },
  { id: 'mastery', title: '숙련도 평가', icon: '📊', file: '06_MASTERY_SCORE' },
];

export default function IMDPage() {
  const [activeSection, setActiveSection] = useState('core');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/learn/glossary"
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
              <span>용어 사전</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <h1 className="text-xl font-bold text-white">IMD</h1>
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
              <span>표면처리 기술</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
              IMD
            </h1>
            <p className="text-2xl text-teal-400 mb-2">In-Mold Decoration</p>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              금형 내 장식 기술
            </p>

            {/* Quick Definition */}
            <div className="mt-8 max-w-3xl mx-auto bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <p className="text-lg text-slate-300 leading-relaxed">
                플라스틱 사출 성형 시{' '}
                <span className="text-teal-400 font-semibold">
                  금형 안에서 필름으로 장식까지 동시에
                </span>{' '}
                하는 기술.
                <br />
                도장 대비{' '}
                <span className="text-cyan-400 font-semibold">
                  VOC 90% 감소, 원가 30% 절감
                </span>
              </p>
            </div>

            {/* Progress */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-400">학습 진도</span>
                <span className="text-teal-400 font-semibold">65% (중급)</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                  style={{ width: '65%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-teal-500 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                <span>{section.icon}</span>
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Core Concept */}
        {activeSection === 'core' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                IMD가 뭐예요?
              </h2>

              {/* Visual Comparison */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-700/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-400 mb-4">
                    기존 방식 (도장)
                  </h3>
                  <div className="space-y-2 text-slate-300 font-mono text-sm">
                    <p>1. 플라스틱 성형</p>
                    <p className="text-slate-500">↓</p>
                    <p>2. 탈지</p>
                    <p className="text-slate-500">↓</p>
                    <p>3. 프라이머</p>
                    <p className="text-slate-500">↓</p>
                    <p>4. 베이스 코트</p>
                    <p className="text-slate-500">↓</p>
                    <p>5. 클리어 코트</p>
                    <p className="text-slate-500">↓</p>
                    <p>6. 건조</p>
                    <p className="mt-4 text-red-400">
                      = 6단계, 1~2일 소요, VOC 발생
                    </p>
                  </div>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30">
                  <h3 className="text-lg font-semibold text-teal-400 mb-4">
                    IMD 방식
                  </h3>
                  <div className="space-y-2 text-slate-300 font-mono text-sm">
                    <p>1. 필름을 금형에 삽입</p>
                    <p className="text-slate-500">↓</p>
                    <p>2. 플라스틱 사출</p>
                    <p className="text-slate-500">↓</p>
                    <p className="text-teal-400 font-bold">3. 완성!</p>
                    <p className="mt-8 text-teal-400 font-semibold">
                      = 1단계, 30초~1분, VOC 거의 없음
                    </p>
                  </div>
                </div>
              </div>

              {/* Types */}
              <h3 className="text-xl font-semibold text-white mb-4">
                IMD의 종류
              </h3>
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    name: 'IMD',
                    desc: '금형 내 장식 (넓은 의미)',
                    color: 'teal',
                  },
                  {
                    name: 'IML',
                    desc: '필름이 제품에 완전 부착',
                    color: 'cyan',
                  },
                  {
                    name: 'IMR',
                    desc: '잉크만 전사, 필름 분리',
                    color: 'blue',
                  },
                  {
                    name: 'IMF',
                    desc: '3D 성형된 필름 사용',
                    color: 'indigo',
                  },
                ].map((type) => (
                  <div
                    key={type.name}
                    className={`bg-${type.color}-500/10 rounded-xl p-4 border border-${type.color}-500/30`}
                  >
                    <h4 className={`text-lg font-bold text-${type.color}-400`}>
                      {type.name}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">{type.desc}</p>
                  </div>
                ))}
              </div>

              {/* Why Important */}
              <h3 className="text-xl font-semibold text-white mb-4">
                왜 중요한가요?
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: '🌱', title: '환경', value: 'VOC 90%↓', desc: '도장 대비' },
                  {
                    icon: '💰',
                    title: '원가',
                    value: '20-30% 절감',
                    desc: '공정 단축',
                  },
                  {
                    icon: '✨',
                    title: '품질',
                    value: '불량률↓',
                    desc: '균일한 외관',
                  },
                  {
                    icon: '🎨',
                    title: '디자인',
                    value: '자유도↑',
                    desc: '복잡한 패턴 가능',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-700/30 rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-sm text-slate-400">{item.title}</div>
                    <div className="text-lg font-bold text-teal-400">
                      {item.value}
                    </div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Terms */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">
                핵심 용어
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { term: '캐리어 필름', en: 'Carrier Film', desc: '인쇄를 담는 베이스 필름' },
                  { term: '잉크층', en: 'Ink Layer', desc: '실제 무늬/색상 인쇄' },
                  { term: '하드코트', en: 'Hard Coat', desc: '표면 보호층 (스크래치 방지)' },
                  { term: '접착층', en: 'Adhesive Layer', desc: '플라스틱과 붙는 층' },
                  { term: '전사', en: 'Transfer', desc: '무늬를 옮기는 것' },
                  { term: '프리폼', en: 'Preform', desc: '미리 형태를 만든 필름' },
                  { term: '게이트', en: 'Gate', desc: '플라스틱이 들어오는 입구' },
                  { term: '웰드라인', en: 'Weld Line', desc: '플라스틱 흐름 합류선' },
                ].map((item) => (
                  <div
                    key={item.term}
                    className="bg-slate-700/30 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-teal-400">
                        {item.term}
                      </span>
                      <span className="text-sm text-slate-500">({item.en})</span>
                    </div>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mental Model */}
        {activeSection === 'mental' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🧠</span>
                IMD = 스티커 붙이기의 업그레이드 버전
              </h2>

              {/* Analogy */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-lg font-semibold text-red-400 mb-4">
                    일반 스티커
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• 물건 위에 붙임</li>
                    <li className="text-red-400">❌ 모서리 벗겨짐</li>
                    <li className="text-red-400">❌ 공기방울</li>
                    <li className="text-red-400">❌ 오래되면 들뜸</li>
                  </ul>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30">
                  <h3 className="text-lg font-semibold text-teal-400 mb-4">
                    IMD (업그레이드!)
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• 금형 안에서 성형과 동시에</li>
                    <li className="text-teal-400">✅ 플라스틱과 일체화</li>
                    <li className="text-teal-400">✅ 절대 벗겨지지 않음</li>
                    <li className="text-teal-400">✅ 영구적</li>
                  </ul>
                </div>
              </div>

              <div className="bg-teal-500/20 rounded-xl p-6 text-center">
                <p className="text-xl text-teal-300 font-semibold">
                  &ldquo;스티커를 플라스틱 안에 녹여 넣은 것!&rdquo;
                </p>
              </div>
            </div>

            {/* Film Structure */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">
                필름 단면 구조
              </h2>
              <div className="space-y-3">
                {[
                  {
                    layer: '1. 캐리어 필름',
                    desc: 'PET 필름 (투명)',
                    color: 'slate',
                  },
                  {
                    layer: '2. 이형층',
                    desc: '캐리어와 분리를 위한 층 (IMR)',
                    color: 'gray',
                  },
                  {
                    layer: '3. 하드코트',
                    desc: '표면 보호 (스크래치 방지)',
                    color: 'blue',
                  },
                  {
                    layer: '4. 인쇄층',
                    desc: '무늬, 색상, 패턴',
                    color: 'teal',
                  },
                  {
                    layer: '5. 접착층',
                    desc: '플라스틱 기재와 결합',
                    color: 'cyan',
                  },
                ].map((item, idx) => (
                  <div
                    key={item.layer}
                    className={`bg-${item.color}-500/20 border-l-4 border-${item.color}-500 rounded-r-lg p-4`}
                  >
                    <div className="font-semibold text-white">{item.layer}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </div>
                ))}
                <div className="bg-orange-500/20 border-l-4 border-orange-500 rounded-r-lg p-4 mt-6">
                  <div className="font-semibold text-white">
                    + 플라스틱 기재
                  </div>
                  <div className="text-sm text-slate-400">
                    사출되는 부분 (ABS, PC 등)
                  </div>
                </div>
              </div>
            </div>

            {/* Mental Shortcuts */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">
                기억 포인트
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30 text-center">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <h3 className="text-lg font-semibold text-teal-400 mb-2">
                    &ldquo;IMD = 문신&rdquo;
                  </h3>
                  <p className="text-sm text-slate-400">
                    스티커 = 붙였다 떼는 것 (임시)
                    <br />
                    IMD = 피부에 새긴 문신 (영구)
                  </p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30 text-center">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                    공식
                  </h3>
                  <p className="text-sm text-slate-400">
                    인쇄된 필름 + 용융 플라스틱
                    <br />= 장식된 부품
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30 text-center">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">
                    도장의 대체재
                  </h3>
                  <p className="text-sm text-slate-400">
                    VOC 없음, 공정 단순, 불량↓
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deep Notes */}
        {activeSection === 'deep' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">📝</span>
                필름 소재 및 구조
              </h2>

              {/* Film Materials Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-3 px-4 text-teal-400">소재</th>
                      <th className="py-3 px-4 text-teal-400">두께</th>
                      <th className="py-3 px-4 text-teal-400">특징</th>
                      <th className="py-3 px-4 text-teal-400">적용</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 font-semibold">PET</td>
                      <td className="py-3 px-4">50-125um</td>
                      <td className="py-3 px-4">투명, 저렴, 범용</td>
                      <td className="py-3 px-4">대부분 IMD</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 font-semibold">PC</td>
                      <td className="py-3 px-4">125-250um</td>
                      <td className="py-3 px-4">내열, 내충격</td>
                      <td className="py-3 px-4">고급 IMD</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 font-semibold">PMMA</td>
                      <td className="py-3 px-4">200-500um</td>
                      <td className="py-3 px-4">고광택, 투명</td>
                      <td className="py-3 px-4">고급 외관</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">ABS</td>
                      <td className="py-3 px-4">300-500um</td>
                      <td className="py-3 px-4">성형성 좋음</td>
                      <td className="py-3 px-4">IMF용</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Hard Coat Specs */}
              <h3 className="text-xl font-semibold text-white mb-4">
                하드코트 물성
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { name: '연필 경도', value: 'H~2H', std: 'ASTM D3363' },
                  { name: '내마모성', value: '500회+', std: 'Taber 마모' },
                  { name: '내약품성', value: '변색 없음', std: '핸드크림 48h' },
                  { name: '내광성', value: 'ΔE < 1.5', std: '제논 300h' },
                  { name: '광택도', value: '50-90 GU', std: '60° 광택' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="bg-slate-700/30 rounded-lg p-4 text-center"
                  >
                    <div className="text-sm text-slate-400">{item.name}</div>
                    <div className="text-lg font-bold text-teal-400">
                      {item.value}
                    </div>
                    <div className="text-xs text-slate-500">{item.std}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Parameters */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">
                공정 최적화
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-700/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-teal-400 mb-4">
                    금형 온도
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• 고정측: 40-60°C (필름 측)</li>
                    <li>• 가동측: 50-70°C (기재 측)</li>
                    <li className="text-orange-400">
                      ⚠️ 필름 측이 너무 뜨거우면 변형!
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                    사출 속도
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• 초기: 느리게 (필름 밀림 방지)</li>
                    <li>• 충전: 보통~빠르게</li>
                    <li className="text-orange-400">
                      ⚠️ 웰드라인 위치 고려
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">
                    보압/냉각
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• 보압: 적정 (과하면 필름 변형)</li>
                    <li>• 냉각: 충분히 (변형 방지)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cost Structure */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">
                원가 구조
              </h2>
              <div className="space-y-4">
                {[
                  { name: '필름 비용', percent: 35, color: 'teal' },
                  { name: '기재 비용', percent: 25, color: 'cyan' },
                  { name: '가공비', percent: 20, color: 'blue' },
                  { name: '설비 감가', percent: 15, color: 'indigo' },
                  { name: '기타', percent: 5, color: 'slate' },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-300">{item.name}</span>
                      <span className={`text-${item.color}-400 font-semibold`}>
                        {item.percent}%
                      </span>
                    </div>
                    <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${item.color}-500 rounded-full`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Comparison */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-lg font-semibold text-red-400 mb-4">
                    도장 비용
                  </h3>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span>재료비</span>
                      <span>100원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>가공비</span>
                      <span>500원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>설비 감가</span>
                      <span>200원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>불량 손실</span>
                      <span>100원</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-red-500/30 font-bold text-red-400">
                      <span>합계</span>
                      <span>900원</span>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30">
                  <h3 className="text-lg font-semibold text-teal-400 mb-4">
                    IMD 비용
                  </h3>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span>재료비 (필름)</span>
                      <span>300원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>가공비</span>
                      <span>100원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>설비 감가</span>
                      <span>150원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>불량 손실</span>
                      <span>30원</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-teal-500/30 font-bold text-teal-400">
                      <span>합계</span>
                      <span>580원 (35% 절감)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analogy Map */}
        {activeSection === 'analogy' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🔗</span>
                IMD를 일상과 연결해봐요
              </h2>

              {/* Primary Analogy */}
              <div className="bg-teal-500/10 rounded-xl p-8 border border-teal-500/30 mb-8">
                <h3 className="text-xl font-semibold text-teal-400 mb-4 text-center">
                  물에 뜨는 문신 스티커
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">
                      임시 문신 스티커
                    </h4>
                    <ol className="space-y-2 text-slate-300">
                      <li>1. 물을 묻힌다</li>
                      <li>2. 피부에 대고 누른다</li>
                      <li>3. 종이를 떼면 무늬가 피부에!</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">
                      IMD 필름
                    </h4>
                    <ol className="space-y-2 text-slate-300">
                      <li>1. 열을 가한다</li>
                      <li>2. 금형에 넣고 사출</li>
                      <li>3. 캐리어를 떼면 무늬가 플라스틱에!</li>
                    </ol>
                  </div>
                </div>
                <p className="text-center text-teal-300 mt-6 font-semibold">
                  공통점: 무늬가 &ldquo;전사&rdquo;됨, 베이스는 분리, 열/물로 접착 활성화
                </p>
              </div>

              {/* Cross-Domain Connections */}
              <h3 className="text-xl font-semibold text-white mb-4">
                다른 분야의 유사 기술
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { field: '의류', tech: '열전사 프린팅', common: '필름으로 무늬 전사' },
                  { field: '패키징', tech: 'IML 라벨', common: '금형 내 라벨 부착' },
                  { field: '가전', tech: 'IMD 버튼 패널', common: '동일 기술' },
                  { field: '스마트폰', tech: '케이스 코팅', common: 'IMR 기술 적용' },
                  { field: '인테리어', tech: '래핑 필름', common: '표면 장식 필름' },
                  { field: '문신', tech: '임시 타투', common: '전사 원리' },
                ].map((item) => (
                  <div
                    key={item.field}
                    className="bg-slate-700/30 rounded-lg p-4"
                  >
                    <div className="text-teal-400 font-semibold">{item.field}</div>
                    <div className="text-white">{item.tech}</div>
                    <div className="text-sm text-slate-400">{item.common}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metaphors */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">
                쉬운 비유들
              </h2>
              <div className="space-y-6">
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                    기술적 비유
                  </h3>
                  <p className="text-slate-300 italic">
                    &ldquo;IMD는 플라스틱에 <span className="text-cyan-400 font-semibold">영구적인 화장</span>을 하는 것과 같다. 도장이 매일 하는 화장이라면, IMD는 반영구 화장(문신)이다. 한 번 하면 지워지지 않고, 더 균일하고, 더 오래간다.&rdquo;
                  </p>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30">
                  <h3 className="text-lg font-semibold text-teal-400 mb-2">
                    일상 비유
                  </h3>
                  <p className="text-slate-300 italic">
                    &ldquo;IMD는 <span className="text-teal-400 font-semibold">책에 비닐 커버 씌우기</span>와 비슷해요. 그런데 커버가 책 표지와 완전히 합쳐져서 절대 벗겨지지 않는 거예요. 그리고 커버에 예쁜 무늬가 이미 프린팅되어 있어서 책이 더 고급스러워 보이죠.&rdquo;
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">
                    교육용 비유
                  </h3>
                  <p className="text-slate-300 italic">
                    &ldquo;<span className="text-blue-400 font-semibold">샌드위치</span>를 생각해보세요. 빵 사이에 햄, 치즈, 야채가 있죠? IMD는 플라스틱(빵) 사이에 예쁜 필름(햄)을 넣는 거예요. 먹으면(성형하면) 다 합쳐져서 하나가 되는 거죠!&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Application */}
        {activeSection === 'application' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🛠️</span>
                실제 적용 사례
              </h2>

              {/* Use Case 1 */}
              <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-teal-400 mb-4">
                  Use Case 1: 센터 페시아 우드그레인
                </h3>
                <p className="text-slate-400 mb-4">
                  고급 세단의 센터 페시아에 우드그레인 패턴 적용
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold mb-2">
                      옵션 1: 천연 우드
                    </h4>
                    <p className="text-sm text-slate-400">
                      비용: ★★★★★
                      <br />
                      균일성: ★☆☆☆☆
                      <br />
                      결론: 최고급차에만
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">
                      옵션 2: 수압 전사
                    </h4>
                    <p className="text-sm text-slate-400">
                      비용: ★★★☆☆
                      <br />
                      균일성: ★★★☆☆
                      <br />
                      결론: 중급차에
                    </p>
                  </div>
                  <div className="bg-teal-500/20 rounded-lg p-4 border border-teal-500/30">
                    <h4 className="text-teal-400 font-semibold mb-2">
                      옵션 3: IMD ★선택
                    </h4>
                    <p className="text-sm text-slate-300">
                      비용: ★★☆☆☆
                      <br />
                      균일성: ★★★★★
                      <br />
                      결론: 양산차에 최적!
                    </p>
                  </div>
                </div>
                <div className="bg-teal-500/10 rounded-lg p-4">
                  <span className="text-teal-400 font-semibold">적용 결과:</span>
                  <span className="text-slate-300 ml-2">
                    원가 30% 절감 / 불량률 2% (도장 8% 대비) / 환경 규제 완벽 대응
                  </span>
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Use Case 2: 에어컨 조작 베젤
                </h3>
                <p className="text-slate-400 mb-4">터치 패널 느낌의 에어컨 조작부</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold mb-2">
                      기존: 도장 + 레이저
                    </h4>
                    <p className="text-sm text-slate-400">
                      공정: 성형 → 도장 → 레이저 마킹
                      <br />
                      문제: 도장 박리, 레이저 변색
                    </p>
                  </div>
                  <div className="bg-teal-500/20 rounded-lg p-4 border border-teal-500/30">
                    <h4 className="text-teal-400 font-semibold mb-2">
                      IMD: 필름 일체형
                    </h4>
                    <p className="text-sm text-slate-300">
                      공정: 필름+사출 (원샷)
                      <br />
                      장점: 박리 없음, 조명 통합 가능
                    </p>
                  </div>
                </div>
              </div>

              {/* Use Case 3 */}
              <div className="bg-slate-700/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Use Case 3: 클러스터 베젤
                </h3>
                <p className="text-slate-400 mb-4">디지털 클러스터 주변 데코</p>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { name: '하드코트', value: 'AF 코팅', desc: '지문 방지' },
                    { name: '인쇄', value: '딥블랙+헤어라인', desc: '고급 패턴' },
                    { name: '광택', value: '95 GU', desc: '고광택' },
                    { name: '경도', value: '2H', desc: '스크래치 내성' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="bg-slate-800/50 rounded-lg p-4 text-center"
                    >
                      <div className="text-sm text-slate-400">{item.name}</div>
                      <div className="text-lg font-bold text-blue-400">
                        {item.value}
                      </div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">
                IMD 적용 검토 체크리스트
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-teal-400 mb-4">
                    기술 검토
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>□ 기재 재질 확인 (ABS, PC 최적)</li>
                    <li>□ 부품 형상 복잡도</li>
                    <li>□ 표면 요구사항</li>
                    <li>□ 내열/내약품 요구사항</li>
                    <li>□ 조명/터치 통합 여부</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                    경제성 검토
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>□ 예상 물량 (연 3만 개 이상)</li>
                    <li>□ 현재 공법 비용</li>
                    <li>□ 초기 투자비 산출</li>
                    <li>□ 손익 분기점 계산</li>
                    <li>□ 디자인 변경 빈도</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">
                    품질 검토
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>□ 필름-기재 접착력 시험</li>
                    <li>□ 내광성/내열성 시험</li>
                    <li>□ 스크래치/마모 시험</li>
                    <li>□ 외관 품질 기준</li>
                    <li>□ 양산 불량률 목표</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Questions */}
        {activeSection === 'questions' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">❓</span>
                탐구 질문
              </h2>

              {/* Open Questions */}
              <h3 className="text-xl font-semibold text-orange-400 mb-4">
                🔓 아직 답을 찾는 중
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  {
                    q: '바이오 플라스틱과 IMD의 호환성',
                    desc: 'PLA 같은 바이오 플라스틱에 IMD를 적용할 수 있을까?',
                  },
                  {
                    q: 'IMD와 자율주행 인테리어',
                    desc: '자율주행 시대에 IMD의 역할은 어떻게 변할까?',
                  },
                  {
                    q: '디지털 프린팅 IMD의 경제성',
                    desc: '맞춤형 디자인을 위한 디지털 프린팅은 언제 경제성이 있을까?',
                  },
                ].map((item) => (
                  <div
                    key={item.q}
                    className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/30"
                  >
                    <h4 className="text-orange-400 font-semibold">{item.q}</h4>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Resolved Questions */}
              <h3 className="text-xl font-semibold text-teal-400 mb-4">
                🔒 답을 찾은 질문
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: 'PP 재질에 IMD 적용 가능한가?',
                    a: '예, 가능합니다. PP 전용 필름(CPP 계열) 필요.',
                  },
                  {
                    q: 'IMD로 3D 곡면 적용이 가능한가?',
                    a: 'IMF (In-Mold Film) 기술로 프리폼 후 적용 가능.',
                  },
                  {
                    q: 'IMD 필름의 스크래치 내성은?',
                    a: '하드코트층으로 H~2H 경도, 도장 대비 동등 이상.',
                  },
                ].map((item) => (
                  <div
                    key={item.q}
                    className="bg-teal-500/10 rounded-xl p-4 border border-teal-500/30"
                  >
                    <h4 className="text-teal-400 font-semibold">{item.q}</h4>
                    <p className="text-sm text-slate-300 mt-1">→ {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mastery */}
        {activeSection === 'mastery' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                숙련도 평가
              </h2>

              {/* Current Level */}
              <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">
                    현재 수준
                  </span>
                  <span className="text-3xl font-bold text-teal-400">
                    65% (중급)
                  </span>
                </div>
                <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                    style={{ width: '65%' }}
                  />
                </div>
              </div>

              {/* Level Definitions */}
              <h3 className="text-xl font-semibold text-white mb-4">
                레벨 정의
              </h3>
              <div className="grid md:grid-cols-5 gap-4 mb-8">
                {[
                  { level: 1, name: '입문', range: '0-30%', color: 'slate' },
                  { level: 2, name: '초급', range: '31-50%', color: 'blue' },
                  {
                    level: 3,
                    name: '중급',
                    range: '51-70%',
                    color: 'teal',
                    current: true,
                  },
                  { level: 4, name: '고급', range: '71-90%', color: 'cyan' },
                  { level: 5, name: '전문가', range: '91-100%', color: 'yellow' },
                ].map((item) => (
                  <div
                    key={item.level}
                    className={`rounded-xl p-4 text-center ${
                      item.current
                        ? 'bg-teal-500/20 border-2 border-teal-500'
                        : 'bg-slate-700/30'
                    }`}
                  >
                    <div className="text-2xl mb-2">Lv.{item.level}</div>
                    <div
                      className={`font-semibold ${
                        item.current ? 'text-teal-400' : 'text-slate-300'
                      }`}
                    >
                      {item.name}
                    </div>
                    <div className="text-sm text-slate-500">{item.range}</div>
                  </div>
                ))}
              </div>

              {/* Skill Areas */}
              <h3 className="text-xl font-semibold text-white mb-4">
                영역별 점수
              </h3>
              <div className="space-y-4">
                {[
                  { name: '기초 개념', score: 100, color: 'teal' },
                  { name: '필름 구조', score: 80, color: 'teal' },
                  { name: '공정 이해', score: 70, color: 'cyan' },
                  { name: '품질 관리', score: 50, color: 'blue' },
                  { name: '경제성 분석', score: 50, color: 'blue' },
                  { name: '최신 기술', score: 40, color: 'slate' },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-300">{item.name}</span>
                      <span className={`text-${item.color}-400 font-semibold`}>
                        {item.score}%
                      </span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${item.color}-600 to-${item.color}-400 rounded-full`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <div className="mt-8 bg-slate-700/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  학습 권장 사항
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold mb-2">
                      1순위: 품질 관리
                    </h4>
                    <p className="text-sm text-slate-400">
                      불량 유형별 원인/대책 학습
                    </p>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-4">
                    <h4 className="text-orange-400 font-semibold mb-2">
                      2순위: 경제성 분석
                    </h4>
                    <p className="text-sm text-slate-400">BEP 계산 연습</p>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">
                      3순위: 최신 기술
                    </h4>
                    <p className="text-sm text-slate-400">
                      터치/조명 통합 IMD 학습
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Related Terms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">연관 용어</h2>
          <div className="flex flex-wrap gap-3">
            {['IML', 'IMR', 'IMF', '도장', '수압전사', '하드코트', '필름', '사출성형'].map(
              (term) => (
                <span
                  key={term}
                  className="px-4 py-2 bg-slate-700/50 rounded-lg text-slate-300 hover:bg-slate-600/50 cursor-pointer transition-colors"
                >
                  {term}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <Link
              href="/learn/glossary"
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              ← 용어 사전으로 돌아가기
            </Link>
            <div className="text-slate-400 text-sm">
              Last updated: 2025-02-04
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
