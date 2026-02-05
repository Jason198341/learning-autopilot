'use client';

import Link from 'next/link';
import { useState } from 'react';

// 탭 정의
const tabs = [
  { id: 'overview', name: '개요', icon: '💡' },
  { id: 'transceiver', name: '트랜시버', icon: '📡' },
  { id: 'lightguide', name: '라이트가이드', icon: '〰️' },
  { id: 'lightstring', name: '라이트스트링', icon: '✨' },
  { id: 'comparison', name: '비교 분석', icon: '⚖️' },
  { id: 'design', name: '설계 가이드', icon: '📐' },
  { id: 'application', name: '적용 사례', icon: '🚗' },
  { id: 'troubleshoot', name: '트러블슈팅', icon: '🔧' },
];

// 시스템 구성요소
const systemComponents = [
  { name: 'BCM/ICM', role: '전체 조명 제어, 통신 관리', location: '차체 내 ECU', icon: '🧠' },
  { name: '트랜시버', role: 'LED 구동, 색상/밝기 제어', location: '조명 근처', icon: '📡' },
  { name: 'LED 광원', role: '빛 발생', location: '트랜시버 내/별도', icon: '💡' },
  { name: '도광체', role: '빛을 선형으로 분배', location: '트림 내장', icon: '〰️' },
  { name: '하네스', role: '전원/통신선 연결', location: '차량 전체', icon: '🔌' },
];

// 트랜시버 구성 비교
const transceiverComparison = [
  { item: '구성', integrated: '트랜시버+LED 일체', separated: '트랜시버, LED 별도' },
  { item: '커넥터', integrated: '3~4핀 (단순)', separated: '5~8핀 (복잡)' },
  { item: '조립', integrated: '쉬움 (1개 부품)', separated: '복잡 (2개 이상)' },
  { item: '교체/서비스', integrated: '모듈 통째 교체', separated: '개별 부품 교체 가능' },
  { item: '비용', integrated: '초기 비용 낮음', separated: '초기 비용 높음' },
  { item: '설계 자유도', integrated: '낮음 (고정 위치)', separated: '높음 (유연 배치)' },
  { item: '열 관리', integrated: 'LED 열이 PCB에 집중', separated: 'LED 열 분산 용이' },
  { item: '적용 예', integrated: '도어 트림 포인트', separated: 'IP 긴 라인 조명' },
  { item: '대표 차종', integrated: '중저가 차량', separated: '프리미엄 차량' },
];

// 라이트가이드 재질 비교
const materialComparison = [
  { property: '광투과율', pmma: '92%', pc: '88%', silicone: '90%' },
  { property: '굴절률', pmma: '1.49', pc: '1.58', silicone: '1.41' },
  { property: '내열온도', pmma: '80°C', pc: '125°C', silicone: '200°C' },
  { property: '내충격성', pmma: '낮음', pc: '높음', silicone: '높음' },
  { property: '유연성', pmma: '리지드', pc: '리지드', silicone: '유연' },
  { property: '가격', pmma: '저가', pc: '중가', silicone: '고가' },
  { property: '황변', pmma: '적음', pc: '있음', silicone: '없음' },
  { property: '주 적용', pmma: 'IP, 도어', pc: '고온 부위', silicone: '유연 경로' },
];

// 라이트가이드 vs 라이트스트링
const guideVsString = [
  { item: 'LED 수량', guide: '1~2개 (광원)', string: '다수 (10~50개/m)' },
  { item: '발광 방식', guide: '간접광 (도광체 통해)', string: '직접광 (LED 직접)' },
  { item: '광 균일도', guide: '매우 높음', string: '높음 (밀도 의존)' },
  { item: 'Hot Spot', guide: '없음', string: '있을 수 있음' },
  { item: '두께', guide: '2~5mm', string: '1~2mm' },
  { item: '유연성', guide: '리지드', string: '유연 (FPC)' },
  { item: '동적 효과', guide: '단순 (전체 동시)', string: '다양 (웨이브 등)' },
  { item: '비용', guide: '중간', string: '길이에 비례' },
  { item: '적용 위치', guide: 'IP 라인, 도어 라인', string: '발밑, 시트 하부' },
];

// 차량 무드램프 배치
const vehiclePositions = [
  { id: 1, name: 'IP 상단 라인', type: 'Light Guide', length: '1200mm', color: 'RGB 64색', icon: '═' },
  { id: 2, name: '센터 페시아', type: 'Light Guide', length: '400mm', color: 'RGB 64색', icon: '═' },
  { id: 3, name: '에어벤트 주변', type: 'Light String', length: '200mm', color: '단색/RGB', icon: '○' },
  { id: 4, name: '콘솔 라인', type: 'Light Guide', length: '500mm', color: 'RGB 64색', icon: '═' },
  { id: 5, name: '도어 트림 L', type: 'Light Guide', length: '800mm', color: 'RGB 64색', icon: '║' },
  { id: 6, name: '도어 트림 R', type: 'Light Guide', length: '800mm', color: 'RGB 64색', icon: '║' },
  { id: 7, name: '풋웰 (발밑)', type: 'Light String', length: '300mm', color: 'RGB', icon: '●' },
];

// 트러블슈팅 데이터
const troubleshooting = [
  {
    symptom: '점등 안 됨',
    description: '무드램프가 전혀 켜지지 않음',
    causes: [
      { cause: '퓨즈 단락', solution: '퓨즈 교체' },
      { cause: '커넥터 탈거/접촉 불량', solution: '커넥터 재체결' },
      { cause: 'LIN 통신 단절', solution: '통신선 점검' },
      { cause: '트랜시버 고장', solution: '트랜시버 교체' },
    ],
  },
  {
    symptom: '일부만 점등',
    description: '특정 영역만 점등 안 됨',
    causes: [
      { cause: '해당 영역 트랜시버 불량', solution: '개별 트랜시버 점검' },
      { cause: '해당 영역 배선 단선', solution: '배선 연속성 확인' },
      { cause: 'LED 단선 (라이트스트링)', solution: 'LED 개별 점검' },
    ],
  },
  {
    symptom: '밝기 불균일',
    description: '밝은 곳과 어두운 곳이 있음',
    causes: [
      { cause: '라이트가이드 조립 불량', solution: '조립 위치 조정' },
      { cause: 'LED-도광체 간격 불량', solution: '간격 조정' },
      { cause: '라이트가이드 손상', solution: '도광체 교체' },
    ],
  },
  {
    symptom: '색상 이상',
    description: '원하는 색상이 나오지 않음',
    causes: [
      { cause: 'RGB LED 일부 채널 불량', solution: 'LED 교체' },
      { cause: 'PWM 신호 이상', solution: '트랜시버 점검' },
      { cause: '라이트가이드 황변', solution: '도광체 교체' },
    ],
  },
  {
    symptom: '깜빡거림 (Flicker)',
    description: '빛이 깜빡거리거나 떨림',
    causes: [
      { cause: 'PWM 주파수 낮음', solution: '주파수 200Hz 이상으로' },
      { cause: '접촉 불량', solution: '커넥터/납땜 점검' },
      { cause: '전원 불안정', solution: '전원 필터 추가' },
    ],
  },
];

// 용어 사전
const glossary = [
  { term: '무드램프', en: 'Mood Lamp', desc: '차량 실내 감성 조명' },
  { term: '트랜시버', en: 'Transceiver', desc: '통신 수신 + LED 구동 모듈' },
  { term: '라이트가이드', en: 'Light Guide', desc: '빛을 선형으로 분배하는 도광체' },
  { term: '라이트스트링', en: 'Light String', desc: 'LED가 선형 배열된 조명 모듈' },
  { term: 'PWM', en: 'Pulse Width Modulation', desc: '펄스 폭 변조 (밝기 조절)' },
  { term: 'LIN', en: 'Local Interconnect Network', desc: '저속 단선 통신 네트워크' },
  { term: '휘도', en: 'Luminance', desc: '단위 면적당 밝기 (cd/m²)' },
  { term: 'Hot Spot', en: '-', desc: '국부적으로 밝은 점 (불량)' },
];

// 설계 파라미터
const designParams = [
  { param: '밝기 (휘도)', range: '10~50 cd/m²', desc: '눈부심 방지, 은은한 조명' },
  { param: '광 균일도', range: '>80%', desc: '최대/최소 밝기 비율' },
  { param: '발광 폭', range: '3~8mm', desc: '선형 광의 두께' },
  { param: '시야각', range: '60°~120°', desc: '빛 퍼짐 각도' },
  { param: '색온도', range: '2700K~6500K', desc: '분위기에 따라 선택' },
  { param: 'PWM 주파수', range: '200Hz~1kHz', desc: '깜빡임 인지 안 되도록' },
];

export default function MoodLampPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTrouble, setSelectedTrouble] = useState(0);

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
              <span className="text-2xl">💡</span>
              <h1 className="text-xl font-bold text-white">무드램프</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm mb-6">
              <span>✨</span>
              <span>Ambient Lighting System</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              무드램프 완벽 가이드
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              트랜시버, 라이트가이드, 라이트스트링의 모든 것
              <br />
              <span className="text-purple-400">전문가 수준의 지식을 누구나 쉽게</span>
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { label: '트랜시버', value: '일체/분리', icon: '📡' },
                { label: '라이트가이드', value: 'PMMA/실리콘', icon: '〰️' },
                { label: '라이트스트링', value: 'RGB/개별제어', icon: '✨' },
                { label: 'RGB 색상', value: '1600만+', icon: '🌈' },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-slate-800/50 rounded-xl px-6 py-4">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* 무드램프 정의 */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">무드램프란?</h2>
              <p className="text-slate-300 mb-6">
                차량 실내에 은은한 간접 조명을 제공하여 감성적 분위기를 연출하는 조명 시스템입니다.
                Ambient Lighting, 실내 무드등, 간접 조명이라고도 합니다.
              </p>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { purpose: '감성 품질', desc: '프리미엄 분위기', icon: '✨' },
                  { purpose: '야간 시인성', desc: '스위치 위치 파악', icon: '👁️' },
                  { purpose: '브랜드 차별화', desc: '아이덴티티 강화', icon: '🏷️' },
                  { purpose: '안전성', desc: '눈 피로 감소', icon: '🛡️' },
                  { purpose: '개인화', desc: '취향 맞춤', icon: '🎨' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm font-medium text-white">{item.purpose}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 시스템 구성 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">시스템 구성요소</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {systemComponents.map((comp, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                    <div className="text-3xl mb-3">{comp.icon}</div>
                    <h3 className="text-lg font-bold text-purple-400 mb-2">{comp.name}</h3>
                    <p className="text-sm text-slate-300 mb-2">{comp.role}</p>
                    <p className="text-xs text-slate-500">{comp.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 핵심 용어 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">📚 핵심 용어</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {glossary.slice(0, 8).map((item, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-purple-400">{item.term}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-1">{item.en}</p>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Transceiver Tab */}
        {activeTab === 'transceiver' && (
          <div className="space-y-8">
            {/* 트랜시버 정의 */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">📡 트랜시버란?</h2>
              <p className="text-slate-300 mb-6">
                <span className="text-cyan-400 font-bold">Transceiver = Transmitter(송신) + Receiver(수신)</span>의 합성어입니다.
                BCM으로부터 명령을 받아(수신) LED를 제어하고(송신) 상태를 회신합니다.
              </p>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">비유로 이해하기</h3>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🧠</div>
                    <div className="text-sm font-medium text-white">BCM</div>
                    <div className="text-xs text-slate-400">(사장님)</div>
                  </div>
                  <div className="text-2xl text-cyan-400">→ "파란색!" →</div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">📡</div>
                    <div className="text-sm font-medium text-white">트랜시버</div>
                    <div className="text-xs text-slate-400">(팀장 - 통역+실행)</div>
                  </div>
                  <div className="text-2xl text-cyan-400">→ "R=0,G=128,B=255" →</div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">💡</div>
                    <div className="text-sm font-medium text-white">LED</div>
                    <div className="text-xs text-slate-400">(직원)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 트랜시버 역할 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6">트랜시버의 4가지 역할</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { step: 1, title: '수신', desc: 'BCM으로부터 명령 수신 (LIN/CAN)', example: '"파란색, 밝기 70%로 설정해라"', icon: '📥' },
                  { step: 2, title: '처리', desc: '명령 해석 및 LED 구동 신호 생성', example: 'RGB 각 채널 PWM 값 계산', icon: '⚙️' },
                  { step: 3, title: '출력', desc: 'LED에 PWM 신호 출력', example: 'R:0%, G:50%, B:100%', icon: '📤' },
                  { step: 4, title: '회신', desc: 'BCM에 상태 정보 회신 (진단용)', example: '"LED 정상, 온도 45°C"', icon: '📊' },
                ].map((item) => (
                  <div key={item.step} className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <span className="text-cyan-400 font-bold mr-2">Step {item.step}</span>
                        <span className="text-white font-medium">{item.title}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{item.desc}</p>
                    <p className="text-xs text-slate-500 italic">예: {item.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 일체형 vs 분리형 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🔄 일체형 vs 분리형 구성</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* 일체형 */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-4">일체형 (Integrated)</h3>
                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="inline-block border-2 border-dashed border-green-500/50 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">📡</span>
                          <span className="text-xl">+</span>
                          <span className="text-2xl">💡</span>
                        </div>
                        <div className="text-xs text-slate-400 mt-2">하나의 모듈 안에 통합</div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="text-slate-300">✓ 커넥터 3~4핀 (단순)</li>
                    <li className="text-slate-300">✓ 조립 쉬움</li>
                    <li className="text-slate-300">✓ 초기 비용 낮음</li>
                    <li className="text-slate-400">△ 설계 자유도 낮음</li>
                  </ul>
                </div>

                {/* 분리형 */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">분리형 (Separated)</h3>
                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                    <div className="text-center flex items-center justify-center gap-4">
                      <div className="border-2 border-dashed border-blue-500/50 rounded-lg p-3">
                        <span className="text-2xl">📡</span>
                        <div className="text-xs text-slate-400 mt-1">트랜시버</div>
                      </div>
                      <span className="text-xl text-blue-400">→ 하네스 →</span>
                      <div className="border-2 border-dashed border-blue-500/50 rounded-lg p-3">
                        <span className="text-2xl">✨✨✨</span>
                        <div className="text-xs text-slate-400 mt-1">라이트스트링</div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="text-slate-300">✓ 설계 자유도 높음</li>
                    <li className="text-slate-300">✓ 열 분산 용이</li>
                    <li className="text-slate-300">✓ 개별 부품 교체 가능</li>
                    <li className="text-slate-400">△ 초기 비용 높음</li>
                  </ul>
                </div>
              </div>

              {/* 비교 테이블 */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400">항목</th>
                      <th className="text-left py-3 px-4 text-green-400">일체형</th>
                      <th className="text-left py-3 px-4 text-blue-400">분리형</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transceiverComparison.map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-slate-400">{row.item}</td>
                        <td className="py-3 px-4 text-slate-300">{row.integrated}</td>
                        <td className="py-3 px-4 text-slate-300">{row.separated}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Light Guide Tab */}
        {activeTab === 'lightguide' && (
          <div className="space-y-8">
            {/* 라이트가이드 정의 */}
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-6 border border-amber-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">〰️ 라이트가이드란?</h2>
              <p className="text-slate-300 mb-6">
                LED 점 광원을 받아 <span className="text-amber-400 font-bold">선형(Line)으로 균일하게 분배</span>하는 광학 부품입니다.
                도광체, 도광판, 광파이프라고도 합니다.
              </p>

              {/* 동작 원리 */}
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-4">💡 동작 원리: 전반사 (Total Internal Reflection)</h3>
                <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-slate-300 font-mono overflow-x-auto whitespace-pre">
{`      LED
       ●
       ↓
   ┌───────────────────────────────────────┐
   │ ↘  ↘  ↘  ↘  ↘  ↘  ↘  ↘  ↘  ↘  ↘ │  PMMA
   │   ↘  ↘  ↘  ↘  ↘  ↘  ↘  ↘  ↘  ↘  │  (도광체)
   │ ↗↘↗↘↗↘↗↘↗↘↗↘↗↘↗↘↗↘↗↘ │
   └───────────────────────────────────────┘
       ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼  ▼
              빛 추출 (산란 패턴)`}
                  </pre>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <p className="text-sm text-slate-300 mb-2">
                    <span className="text-amber-400">스넬의 법칙:</span> n₁ × sin(θ₁) = n₂ × sin(θ₂)
                  </p>
                  <p className="text-sm text-slate-300">
                    PMMA(n=1.49) → 공기(n=1.0), 임계각 θc ≈ 42°
                    <br />
                    → 42° 이상의 입사각이면 <span className="text-green-400">전반사!</span> 빛이 도광체 내부에서 이동
                  </p>
                </div>
              </div>
            </div>

            {/* 재질 비교 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6">🔬 재질별 특성 비교</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400">특성</th>
                      <th className="text-left py-3 px-4 text-amber-400">PMMA (아크릴)</th>
                      <th className="text-left py-3 px-4 text-cyan-400">PC (폴리카보네이트)</th>
                      <th className="text-left py-3 px-4 text-pink-400">실리콘</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materialComparison.map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-slate-400">{row.property}</td>
                        <td className="py-3 px-4 text-slate-300">{row.pmma}</td>
                        <td className="py-3 px-4 text-slate-300">{row.pc}</td>
                        <td className="py-3 px-4 text-slate-300">{row.silicone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-amber-400 mb-2">★ PMMA - 가장 널리 사용</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 최고 수준 광투과율 (92%)</li>
                    <li>• 우수한 표면 품질</li>
                    <li>• 저비용, 사출/압출 용이</li>
                    <li>• 단점: 충격에 약함, 내열 한계 80°C</li>
                  </ul>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-pink-400 mb-2">★ 실리콘 - 프리미엄 적용</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 유연성 (곡선 경로 대응)</li>
                    <li>• 내열성 우수 (200°C)</li>
                    <li>• 황변 없음</li>
                    <li>• 단점: 고비용 (PMMA의 5~10배)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Light String Tab */}
        {activeTab === 'lightstring' && (
          <div className="space-y-8">
            {/* 라이트스트링 정의 */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">✨ 라이트스트링이란?</h2>
              <p className="text-slate-300 mb-6">
                여러 개의 LED가 <span className="text-green-400 font-bold">선형으로 연결된 조명 모듈</span>입니다.
                LED Strip, LED String, Flexible LED라고도 합니다.
              </p>

              {/* 구조 시각화 */}
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4">기본 구조</h3>
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <pre className="text-sm text-slate-300 font-mono overflow-x-auto whitespace-pre">
{`    커넥터
      │
  ┌───┴───────────────────────────────────────────┐
  │  ●───●───●───●───●───●───●───●───●───●  │ ← LED
  │  │   │   │   │   │   │   │   │   │   │  │
  │  R   R   R   R   R   R   R   R   R   R  │ ← 저항
  │  ════════════════════════════════════════ │ ← 전원
  └───────────────────────────────────────────────┘
                    FPC 기판`}
                  </pre>
                </div>
              </div>
            </div>

            {/* 유형 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6">라이트스트링 유형</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { type: '단색 (Single Color)', desc: '모두 같은 색 LED', example: '백색, 웜화이트, 앰버', icon: '○───○───○───○' },
                  { type: 'RGB (Full Color)', desc: '각 LED에 R,G,B 다이 내장', example: '1600만 색상 구현', icon: '◎───◎───◎───◎' },
                  { type: 'RGBW', desc: 'RGB + 별도 백색 LED', example: '더 순수한 백색 표현', icon: '◉───◉───◉───◉' },
                  { type: 'Addressable (개별 제어)', desc: '각 LED 개별 제어 가능', example: '웨이브, 시퀀셜 효과', icon: '★───★───★───★' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                    <div className="font-mono text-green-400 mb-2">{item.icon}</div>
                    <h4 className="font-bold text-white mb-1">{item.type}</h4>
                    <p className="text-sm text-slate-300 mb-1">{item.desc}</p>
                    <p className="text-xs text-slate-500">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="space-y-8">
            {/* 라이트가이드 vs 라이트스트링 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">⚖️ 라이트가이드 vs 라이트스트링</h2>

              {/* 시각적 차이 */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">〰️ 라이트가이드</h3>
                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4 text-center">
                    <div className="text-2xl mb-2">●</div>
                    <div className="text-xs text-slate-400 mb-2">LED 1개</div>
                    <div className="text-xl mb-2">↓</div>
                    <div className="bg-amber-500/30 h-4 rounded-full mb-2"></div>
                    <div className="text-xs text-slate-400">부드럽고 연속적인 선형 광</div>
                  </div>
                  <p className="text-sm text-slate-300">
                    ════════════════════════
                    <br />
                    <span className="text-xs text-slate-400">(점이 안 보임, 균일한 라인)</span>
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-4">✨ 라이트스트링</h3>
                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4 text-center">
                    <div className="text-2xl mb-2">●  ●  ●  ●  ●</div>
                    <div className="text-xs text-slate-400 mb-2">LED 다수</div>
                    <div className="text-xl mb-2">↓</div>
                    <div className="flex justify-center gap-2 mb-2">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-4 h-4 bg-green-500/50 rounded-full"></div>
                      ))}
                    </div>
                    <div className="text-xs text-slate-400">LED 자체가 직접 발광</div>
                  </div>
                  <p className="text-sm text-slate-300">
                    ●  ●  ●  ●  ●  ●  ●  ●
                    <br />
                    <span className="text-xs text-slate-400">(LED 간격에 따라 점이 보일 수 있음)</span>
                  </p>
                </div>
              </div>

              {/* 상세 비교 테이블 */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400">항목</th>
                      <th className="text-left py-3 px-4 text-amber-400">라이트가이드</th>
                      <th className="text-left py-3 px-4 text-green-400">라이트스트링</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guideVsString.map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-slate-400">{row.item}</td>
                        <td className="py-3 px-4 text-slate-300">{row.guide}</td>
                        <td className="py-3 px-4 text-slate-300">{row.string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 적용 가이드 */}
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-amber-400 mb-2">✓ 라이트가이드 적합</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 프리미엄 "끊김 없는" 라인 연출</li>
                    <li>• IP 상단 크래시패드 라인</li>
                    <li>• 도어 암레스트 라인</li>
                    <li>• 시각적 품질 최우선</li>
                  </ul>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-2">✓ 라이트스트링 적합</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 복잡한 곡선 경로</li>
                    <li>• 동적 효과 (웨이브, 시퀀셜)</li>
                    <li>• 발밑 조명 (풋웰)</li>
                    <li>• 비용 효율 중시</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Design Tab */}
        {activeTab === 'design' && (
          <div className="space-y-8">
            {/* 설계 파라미터 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">📐 핵심 설계 파라미터</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {designParams.map((param, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                    <h4 className="font-bold text-purple-400 mb-2">{param.param}</h4>
                    <div className="text-lg font-mono text-white mb-1">{param.range}</div>
                    <p className="text-sm text-slate-400">{param.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 눈부심 방지 설계 */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/20">
              <h2 className="text-xl font-bold text-white mb-4">⚠️ 눈부심 방지 설계</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-red-400 font-bold mb-3">❌ Bad Design</h4>
                  <div className="text-center mb-2">
                    <span className="text-2xl">💡──────→ 👁️</span>
                  </div>
                  <p className="text-sm text-slate-400 text-center">직접 눈에 들어옴</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-green-400 font-bold mb-3">✓ Good Design</h4>
                  <div className="text-center mb-2">
                    <span className="text-2xl">💡→ 🧱 → 〰️ → 👁️</span>
                  </div>
                  <p className="text-sm text-slate-400 text-center">차단벽으로 간접광만 도달</p>
                </div>
              </div>
            </div>

            {/* 전력 계산 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4">⚡ 소비 전력 계산</h2>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <div className="text-lg font-mono text-cyan-400 mb-4">P = V × I × n × 3(RGB) / η</div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">V: LED 순방향 전압 (~3.2V)</p>
                    <p className="text-slate-400">I: LED 전류 (~20mA)</p>
                    <p className="text-slate-400">n: LED 수량</p>
                  </div>
                  <div>
                    <p className="text-slate-400">3: RGB 채널 수</p>
                    <p className="text-slate-400">η: 효율 (~0.85)</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-slate-800/50 rounded">
                  <p className="text-sm text-slate-300">
                    예시: RGB LED 30개, 20mA, 3.2V<br />
                    P = 3.2 × 0.02 × 30 × 3 / 0.85 ≈ <span className="text-cyan-400 font-bold">6.8W</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === 'application' && (
          <div className="space-y-8">
            {/* 차량 배치도 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🚗 차량 무드램프 배치</h2>

              {/* 시각적 배치도 */}
              <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                <div className="max-w-lg mx-auto">
                  <pre className="text-sm font-mono text-center text-slate-300 overflow-x-auto whitespace-pre">
{`    ┌─────────────────────────────────────────┐
    │ ①════════════════════════════════════① │
    │              IP 상단 라인                │
    ├─────────────────────────────────────────┤
    │      ┌─────────────────────────┐        │
    │      │ ②════════════════②   │        │
    │      │     센터 페시아 라인      │        │
    │ ⑤   │        ┌─────┐        │   ⑥    │
    │ ║   │   ③═══│ AVN │═══③   │   ║    │
    │ 도  │        └─────┘        │   도    │
    │ 어  │   ④════════════════④  │   어    │
    │ L   │       콘솔 라인         │   R    │
    │     └─────────────────────────┘        │
    │                                         │
    │  ⑦════════════════════════════════⑦   │
    │              풋웰 (발밑)                 │
    └─────────────────────────────────────────┘`}
                  </pre>
                </div>
              </div>

              {/* 위치별 테이블 */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400">No</th>
                      <th className="text-left py-3 px-4 text-slate-400">위치</th>
                      <th className="text-left py-3 px-4 text-slate-400">타입</th>
                      <th className="text-left py-3 px-4 text-slate-400">길이</th>
                      <th className="text-left py-3 px-4 text-slate-400">색상</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehiclePositions.map((pos) => (
                      <tr key={pos.id} className="border-b border-slate-700/50">
                        <td className="py-3 px-4">
                          <span className="w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full inline-flex items-center justify-center text-sm font-medium">
                            {pos.id}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-white font-medium">{pos.name}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            pos.type === 'Light Guide'
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {pos.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-cyan-400">{pos.length}</td>
                        <td className="py-3 px-4 text-slate-300">{pos.color}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 프리미엄 vs 일반 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-4">🌟 프리미엄 (벤츠, BMW, 제네시스)</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>✓ 64색 이상 RGB</li>
                  <li>✓ 존별 독립 제어 (10개 이상)</li>
                  <li>✓ 동적 효과 (웨이브, 호흡, 시퀀셜)</li>
                  <li>✓ 음악 연동</li>
                  <li>✓ 고급 라이트가이드 (실리콘)</li>
                </ul>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                <h3 className="text-xl font-bold text-slate-400 mb-4">일반 (현대, 기아 중저가)</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• 단색 또는 7~10색</li>
                  <li>• 전체 동시 제어</li>
                  <li>• 정적 조명만</li>
                  <li>• PMMA 라이트가이드</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Troubleshoot Tab */}
        {activeTab === 'troubleshoot' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🔧 트러블슈팅 가이드</h2>

              {/* 문제 선택 */}
              <div className="flex flex-wrap gap-2 mb-6">
                {troubleshooting.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTrouble(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedTrouble === i
                        ? 'bg-red-500 text-white'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                    }`}
                  >
                    {item.symptom}
                  </button>
                ))}
              </div>

              {/* 선택된 문제 상세 */}
              <div className="bg-slate-700/30 rounded-xl p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-red-400 mb-2">
                    {troubleshooting[selectedTrouble].symptom}
                  </h3>
                  <p className="text-slate-300">{troubleshooting[selectedTrouble].description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white mb-3">원인 및 해결책</h4>
                  <div className="space-y-3">
                    {troubleshooting[selectedTrouble].causes.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-3">
                        <div className="flex-1">
                          <span className="text-orange-400 font-medium">원인:</span>
                          <span className="text-slate-300 ml-2">{item.cause}</span>
                        </div>
                        <div className="text-green-400">→</div>
                        <div className="flex-1">
                          <span className="text-green-400 font-medium">해결:</span>
                          <span className="text-slate-300 ml-2">{item.solution}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/80 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-400 text-sm">
            <p>Learning Autopilot - Mood Lamp Guide</p>
            <p className="mt-2">트랜시버, 라이트가이드, 라이트스트링의 모든 것</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
