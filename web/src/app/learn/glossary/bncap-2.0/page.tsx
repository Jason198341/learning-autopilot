'use client';

import Link from 'next/link';
import { useState } from 'react';

// FAQ 데이터
const faqData = [
  {
    q: '현행 BNCAP과 BNCAP 2.0의 차이점은?',
    a: '현행 BNCAP은 32점 만점에 정면/측면 2개 충돌 시험만 시행합니다. BNCAP 2.0은 100점 만점에 5개 충돌 시험, 보행자 보호, ADAS 평가까지 포함됩니다. Euro NCAP 2020~2023 수준으로 대폭 강화됩니다.',
  },
  {
    q: '언제부터 시행되나요?',
    a: '2027년 10월 1일부터 시행됩니다. 현행 BNCAP은 2027년 9월까지 유효하며, 이후 BNCAP 2.0으로 완전 전환됩니다.',
  },
  {
    q: '5-Star 받으려면 몇 점 필요한가요?',
    a: '2027~2029년에는 100점 만점에 70점 이상, 2029년 10월 이후에는 80점 이상 필요합니다. 기준이 점진적으로 상향됩니다.',
  },
  {
    q: 'ESC/커튼 에어백이 필수인가요?',
    a: '네, 2027년부터 ESC(전자 자세 제어)와 커튼 에어백은 의무 장착입니다. 없으면 Safe Driving 항목에서 감점됩니다.',
  },
  {
    q: 'OEM 원가 영향은 얼마나?',
    a: '차량당 $300-600 원가 증가 예상됩니다. 에어백 추가, ESC, AEB 카메라/레이더, 차체 보강 비용이 주요 요인입니다.',
  },
  {
    q: '기존 BNCAP 별 획득 차량은 어떻게 되나요?',
    a: '2027년 9월까지만 유효하고, 이후에는 BNCAP 2.0 기준으로 재인증 받아야 합니다. 기존 등급은 자동 소멸됩니다.',
  },
  {
    q: '자발적 평가인가요, 의무인가요?',
    a: '현재는 자발적 참여지만, 2028년 이후 점진적으로 의무화될 예정입니다. 판매량 상위 차종부터 의무 적용 검토 중입니다.',
  },
  {
    q: 'AIS-197이 뭔가요?',
    a: 'BNCAP 2.0의 기술 규격 문서입니다. MoRTH(도로교통부)가 발행하며, 시험 방법, 평가 기준, 등급 산정 등 상세 규정이 담겨 있습니다.',
  },
];

// 5개 평가 축
const pillarsData = [
  {
    name: '충돌 보호',
    english: 'Crash Protection',
    points: 55,
    color: 'from-red-500 to-rose-600',
    items: ['정면 오프셋 64km/h', '정면 풀폭 50km/h', '측면 배리어 50km/h', '측면 폴 32km/h', '후방 충돌 50km/h'],
  },
  {
    name: 'VRU 보호',
    english: 'VRU Protection',
    points: 20,
    color: 'from-orange-500 to-amber-600',
    items: ['보행자 머리 충격', '보행자 상/하체 충격', 'AEB 자전거 탐지'],
  },
  {
    name: '안전 주행',
    english: 'Safe Driving',
    points: 10,
    color: 'from-emerald-500 to-green-600',
    items: ['ESC (의무)', '커튼 에어백 (의무)', 'TPMS', '시트벨트 리마인더', 'ISOFIX'],
  },
  {
    name: '사고 회피',
    english: 'Accident Avoidance',
    points: 10,
    color: 'from-blue-500 to-indigo-600',
    items: ['AEB 차량', 'AEB 보행자', 'AEB 자전거', 'LKA/LDW', 'SAS'],
  },
  {
    name: '사고 후 안전',
    english: 'Post-Crash Safety',
    points: 5,
    color: 'from-purple-500 to-violet-600',
    items: ['자동 긴급 호출 (eCall)', '연료 차단', '도어 자동 해제', '경고등 자동 점멸'],
  },
];

// 충돌 시험 상세
const crashTestsData = [
  {
    name: '정면 오프셋 충돌',
    english: 'Frontal Offset (ODB)',
    speed: '64 km/h',
    detail: '40% 오프셋, 변형 배리어',
    purpose: '운전석측 정면 충돌 시 탑승자 보호 평가',
  },
  {
    name: '정면 풀폭 충돌',
    english: 'Full Width (FWRB)',
    speed: '50 km/h',
    detail: '100% 정면, 강체 배리어',
    purpose: '시트벨트/에어백 성능 평가',
  },
  {
    name: '측면 배리어 충돌',
    english: 'Side MDB',
    speed: '50 km/h',
    detail: '90° 측면, 이동 배리어 1,500kg',
    purpose: '사이드 에어백/도어 강성 평가',
  },
  {
    name: '측면 폴 충돌',
    english: 'Oblique Pole',
    speed: '32 km/h',
    detail: '75° 경사, 직경 254mm 폴',
    purpose: '커튼 에어백 필수 (폴 충돌 대응)',
  },
  {
    name: '후방 충돌',
    english: 'Rear Impact',
    speed: '50 km/h',
    detail: '후방 추돌',
    purpose: '연료 누출, 화재 위험, 경추 상해 평가',
  },
];

// 등급 기준
const ratingCriteria = {
  phase1: { period: '2027.10~2029.09', stars: [
    { star: 5, min: 70 },
    { star: 4, min: 60 },
    { star: 3, min: 50 },
    { star: 2, min: 40 },
    { star: 1, min: 30 },
  ]},
  phase2: { period: '2029.10~2031.09', stars: [
    { star: 5, min: 80 },
    { star: 4, min: 70 },
    { star: 3, min: 60 },
    { star: 2, min: 50 },
    { star: 1, min: 40 },
  ]},
};

// OEM 대응 비용
const costImpactData = [
  { item: '커튼 에어백 (2개)', cost: '$50-80', weight: '1.5 kg' },
  { item: '센터 에어백', cost: '$30-50', weight: '0.5 kg' },
  { item: 'ESC', cost: '$80-120', weight: '1.0 kg' },
  { item: 'AEB 카메라', cost: '$50-100', weight: '0.3 kg' },
  { item: 'AEB 레이더', cost: '$100-200', weight: '0.5 kg' },
  { item: '차체 보강 (AHSS)', cost: '$80-150', weight: '5-10 kg' },
];

// 비교 테이블
const comparisonData = [
  { item: '총점', bncap: '32점', bncap2: '100점', euro: '100점' },
  { item: '충돌 시험', bncap: '2개', bncap2: '5개', euro: '5개' },
  { item: '보행자 평가', bncap: '없음', bncap2: '20점', euro: '20점' },
  { item: 'ADAS 평가', bncap: '없음', bncap2: '10점', euro: '10점' },
  { item: 'ESC', bncap: '선택', bncap2: '의무', euro: '의무' },
  { item: '커튼 에어백', bncap: '선택', bncap2: '의무', euro: '의무' },
  { item: 'eCall', bncap: '없음', bncap2: '있음', euro: '있음' },
];

const tabs = [
  { id: 'faq', name: 'FAQ', icon: '❓' },
  { id: 'pillars', name: '5개 평가 축', icon: '📊' },
  { id: 'crash', name: '충돌 시험', icon: '💥' },
  { id: 'rating', name: '등급 기준', icon: '⭐' },
  { id: 'cost', name: 'OEM 영향', icon: '💰' },
  { id: 'compare', name: '비교', icon: '🔄' },
  { id: 'timeline', name: '타임라인', icon: '📅' },
];

export default function BNCAP2Page() {
  const [activeTab, setActiveTab] = useState('faq');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            <span className="text-white font-medium">BNCAP 2.0</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-3xl">
            🇮🇳
          </div>
          <div>
            <h1 className="text-3xl font-bold">BNCAP 2.0</h1>
            <p className="text-zinc-400">Bharat New Car Assessment Programme 2.0</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6 mb-8">
          <p className="text-xl text-zinc-300">
            인도 도로교통부(MoRTH)의 <span className="text-orange-400 font-semibold">차세대 신차 안전 평가 프로그램</span>.
            2027년 10월 시행, 100점 만점 체계로 Euro NCAP 수준의 안전 기준 적용.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: '시행일', value: '2027.10', unit: '' },
            { label: '총점', value: '100', unit: '점' },
            { label: '5-Star', value: '70', unit: '점+' },
            { label: '충돌 시험', value: '5', unit: '개' },
            { label: '평가 축', value: '5', unit: '개' },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">
                {stat.value}<span className="text-sm text-zinc-500 ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">자주 묻는 질문</h2>
            {faqData.map((faq, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="font-medium text-orange-400">Q. {faq.q}</span>
                  <span className="text-2xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-zinc-300 border-t border-zinc-800 pt-4">
                    <span className="text-zinc-500 font-medium">A. </span>{faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 5 Pillars Tab */}
        {activeTab === 'pillars' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">5가지 평가 축</h2>
            <div className="grid gap-6">
              {pillarsData.map((pillar, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{pillar.name}</h3>
                      <p className="text-sm text-zinc-500">{pillar.english}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${pillar.color} text-white font-bold text-xl`}>
                      {pillar.points}점
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.items.map((item, j) => (
                      <span key={j} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Point Distribution Chart */}
            <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">배점 비중</h3>
              <div className="space-y-3">
                {pillarsData.map((p, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-24 text-sm text-zinc-400">{p.name}</div>
                    <div className="flex-1 h-6 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${p.color} flex items-center justify-end pr-2`}
                        style={{ width: `${p.points}%` }}
                      >
                        <span className="text-xs font-bold">{p.points}점</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Crash Tests Tab */}
        {activeTab === 'crash' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">5대 충돌 시험</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crashTestsData.map((test, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-orange-400">{test.name}</h3>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm font-bold">
                      {test.speed}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-2">{test.english}</p>
                  <div className="bg-zinc-800 rounded-lg p-3 mb-3">
                    <p className="text-sm text-zinc-300">{test.detail}</p>
                  </div>
                  <p className="text-sm text-zinc-400">{test.purpose}</p>
                </div>
              ))}
            </div>

            {/* Visual Diagram */}
            <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">충돌 방향 도식</h3>
              <div className="grid grid-cols-5 gap-4 text-center">
                <div className="p-4">
                  <div className="text-4xl mb-2">⬅️</div>
                  <div className="text-sm text-zinc-400">정면 오프셋</div>
                  <div className="text-xs text-red-400">64 km/h</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2">⏺️</div>
                  <div className="text-sm text-zinc-400">정면 풀폭</div>
                  <div className="text-xs text-red-400">50 km/h</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2">⬆️</div>
                  <div className="text-sm text-zinc-400">측면 배리어</div>
                  <div className="text-xs text-red-400">50 km/h</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2">↗️</div>
                  <div className="text-sm text-zinc-400">측면 폴</div>
                  <div className="text-xs text-red-400">32 km/h</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2">➡️</div>
                  <div className="text-sm text-zinc-400">후방</div>
                  <div className="text-xs text-red-400">50 km/h</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rating Tab */}
        {activeTab === 'rating' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">5-Star 등급 기준</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phase 1 */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-400 mb-2">Phase 1</h3>
                <p className="text-sm text-zinc-500 mb-4">{ratingCriteria.phase1.period}</p>
                <div className="space-y-3">
                  {ratingCriteria.phase1.stars.map((s, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex">
                        {[...Array(s.star)].map((_, j) => (
                          <span key={j} className="text-yellow-400">★</span>
                        ))}
                        {[...Array(5 - s.star)].map((_, j) => (
                          <span key={j} className="text-zinc-600">★</span>
                        ))}
                      </div>
                      <span className="text-zinc-300">{s.min}점 이상</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-zinc-900 border border-orange-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-400 mb-2">Phase 2 (강화)</h3>
                <p className="text-sm text-zinc-500 mb-4">{ratingCriteria.phase2.period}</p>
                <div className="space-y-3">
                  {ratingCriteria.phase2.stars.map((s, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex">
                        {[...Array(s.star)].map((_, j) => (
                          <span key={j} className="text-yellow-400">★</span>
                        ))}
                        {[...Array(5 - s.star)].map((_, j) => (
                          <span key={j} className="text-zinc-600">★</span>
                        ))}
                      </div>
                      <span className="text-zinc-300">{s.min}점 이상</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
              <p className="text-orange-300 text-sm">
                <span className="font-bold">Note:</span> 2029년 10월부터 모든 등급 기준이 10점씩 상향됩니다.
                동일 사양의 차량도 등급이 하락할 수 있으므로, OEM은 지속적인 안전 개선이 필요합니다.
              </p>
            </div>
          </div>
        )}

        {/* OEM Cost Impact Tab */}
        {activeTab === 'cost' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">OEM 원가 영향</h2>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-400">$300 - $600</div>
                <div className="text-zinc-500">차량당 예상 원가 증가</div>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 text-zinc-400">항목</th>
                    <th className="text-right py-3 text-zinc-400">원가</th>
                    <th className="text-right py-3 text-zinc-400">중량</th>
                  </tr>
                </thead>
                <tbody>
                  {costImpactData.map((item, i) => (
                    <tr key={i} className="border-b border-zinc-800">
                      <td className="py-3">{item.item}</td>
                      <td className="py-3 text-right text-green-400">{item.cost}</td>
                      <td className="py-3 text-right text-zinc-500">{item.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-400 mb-4">차체 보강 필요 부위</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• A-필러: 핫스탬핑 (1,500 MPa)</li>
                  <li>• B-필러: PHS + Tailored Blank</li>
                  <li>• 사이드실: 초고장력강 보강</li>
                  <li>• 루프레일: 커튼 에어백 마운팅 보강</li>
                  <li>• 플로어: 전면 AHSS 적용</li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-4">보행자 보호 설계</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• 후드: Cowl 거리 확보 (65mm+)</li>
                  <li>• 범퍼: 하단 스티프너 EPP 적용</li>
                  <li>• 펜더: 충격 흡수 브라켓</li>
                  <li>• 와이퍼: 피봇 위치 최적화</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Tab */}
        {activeTab === 'compare' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">BNCAP vs BNCAP 2.0 vs Euro NCAP</h2>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="text-left py-3 px-4 text-zinc-400">항목</th>
                    <th className="text-center py-3 px-4 text-zinc-400">BNCAP (현행)</th>
                    <th className="text-center py-3 px-4 text-orange-400">BNCAP 2.0</th>
                    <th className="text-center py-3 px-4 text-blue-400">Euro NCAP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-300">{row.item}</td>
                      <td className="py-3 px-4 text-center text-zinc-500">{row.bncap}</td>
                      <td className="py-3 px-4 text-center text-orange-400 font-medium">{row.bncap2}</td>
                      <td className="py-3 px-4 text-center text-blue-400">{row.euro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
              <p className="text-orange-300 text-sm">
                <span className="font-bold">결론:</span> BNCAP 2.0은 Euro NCAP 2020~2023 수준에 근접합니다.
                인도 시장 진출 시 글로벌 수준의 안전 설계가 필수입니다.
              </p>
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">타임라인</h2>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-500/30"></div>

              {[
                { date: '2023.10', event: 'BNCAP 시행', desc: '현행 BNCAP 프로그램 시작', active: false },
                { date: '2024.08', event: 'AIS-197 Rev-1 초안 공개', desc: 'BNCAP 2.0 기술 규격 초안', active: false },
                { date: '2025.Q1', event: 'OEM 의견 수렴', desc: '업계 피드백 반영', active: false },
                { date: '2025.Q3', event: '최종 규격 확정 예정', desc: '법규 최종안 발표', active: false },
                { date: '2027.09', event: '현행 BNCAP 종료', desc: '기존 인증 만료', active: false },
                { date: '2027.10', event: 'BNCAP 2.0 시행', desc: '100점 체계 시작', active: true },
                { date: '2029.10', event: '5-Star 기준 상향', desc: '70점 → 80점', active: false },
                { date: '2030.01', event: '의무 평가 확대 예정', desc: '자발적 → 의무', active: false },
              ].map((item, i) => (
                <div key={i} className="relative pl-12 pb-8">
                  <div className={`absolute left-2 w-5 h-5 rounded-full border-2 ${
                    item.active
                      ? 'bg-orange-500 border-orange-500'
                      : 'bg-zinc-900 border-orange-500/50'
                  }`}></div>
                  <div className={`${item.active ? 'bg-orange-500/20 border-orange-500/50' : 'bg-zinc-900 border-zinc-800'} border rounded-xl p-4`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-bold ${item.active ? 'text-orange-400' : 'text-zinc-300'}`}>
                        {item.event}
                      </span>
                      <span className="text-sm text-zinc-500">{item.date}</span>
                    </div>
                    <p className="text-sm text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Related Terms */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4">관련 용어</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { term: 'GNCAP', desc: 'Global NCAP' },
              { term: 'Euro NCAP', desc: '유럽 신차 안전 평가' },
              { term: 'AIS', desc: 'Automotive Industry Standard' },
              { term: 'VRU', desc: 'Vulnerable Road User' },
              { term: 'ADAS', desc: 'Advanced Driver Assistance System' },
              { term: 'AEB', desc: 'Autonomous Emergency Braking' },
              { term: 'ESC', desc: 'Electronic Stability Control' },
              { term: 'eCall', desc: 'Emergency Call System' },
            ].map((t, i) => (
              <span key={i} className="px-3 py-2 bg-zinc-800 rounded-lg text-sm">
                <span className="text-orange-400">{t.term}</span>
                <span className="text-zinc-500 ml-1">- {t.desc}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 pb-12 text-center text-zinc-500">
        <p>Knowledge Vault - BNCAP 2.0 용어 학습</p>
      </footer>
    </div>
  );
}
