'use client';

import Link from 'next/link';
import { useState } from 'react';

// 부품 데이터
const partsData = {
  exterior: [
    {
      name: '프론트 범퍼',
      english: 'Front Bumper',
      composition: ['범퍼 커버', '범퍼 빔', '에너지 업소버', '브라켓', '그릴'],
      material: 'PP+EPDM-TD20, GMT, EPP',
      weight: '8-12 kg',
      cost: '$80-150',
      function: '저속 충돌 흡수, 보행자 보호, 공력 성능',
    },
    {
      name: '연료도어',
      english: 'Fuel Door',
      composition: ['아우터 패널', '이너 패널', '힌지/스프링', '씰'],
      material: '스틸 or SMC (아우터), PP/ABS (이너)',
      weight: '0.3-0.5 kg',
      cost: '$8-15',
      function: '연료 주입구 보호, 도난 방지, 외관 일체감',
    },
    {
      name: '퓨얼 하우징',
      english: 'Fuel Filler Housing',
      composition: ['필러 파이프', '필러 넥', '벤트 파이프', '캡리스 유닛'],
      material: '스틸(기존), HDPE 다층(최신), PA+스틸(캡리스)',
      weight: '0.8-1.5 kg',
      cost: '$15-60',
      function: '연료 이송, 증발가스 관리, 역류 방지',
    },
    {
      name: '아웃사이드 핸들',
      english: 'Outside Handle',
      composition: ['핸들 하우징', '레버', '베이스', '터치센서'],
      material: 'ABS/PA (크롬/도장), 아연다이캐스팅',
      weight: '0.15-0.25 kg',
      cost: '$8-50',
      function: '도어 개폐, 잠금/해제, 스마트 엔트리',
    },
    {
      name: '언더커버',
      english: 'Undercover',
      composition: ['엔진 언더커버', '플로어 언더커버', '휠 아치 라이너'],
      material: 'PP+TD, PP+NFRC, GMT, PET 펠트',
      weight: '1-3 kg/개',
      cost: '$10-40/개',
      function: '공력 개선, 엔진룸 보호, 소음/열 차단',
    },
  ],
  interior: [
    {
      name: '센터 필러 트림',
      english: 'B-Pillar Trim',
      composition: ['어퍼 트림', '로워 트림', '시트벨트 가이드', '충격흡수재'],
      material: 'PP/ABS/PC+ABS, TPO/TPE 스킨, EPP/PU 폼',
      weight: '0.3-0.6 kg/개',
      cost: '$5-12/개',
      function: 'B-필러 은폐, 시트벨트 통합, 측면 충돌 완화',
    },
    {
      name: '플로어 카펫',
      english: 'Floor Carpet',
      composition: ['카펫 표면층', '백킹층', '흡음 패드', '매스백'],
      material: 'PA/PET 직물, PP 부직포, PU 폼, EPDM/EVA',
      weight: '8-15 kg',
      cost: '$50-120',
      function: 'NVH 차단, 단열, 외관/촉감, 발 편의성',
    },
    {
      name: '시트',
      english: 'Seat',
      composition: ['프레임', 'PU 폼', '트림 커버', '레일', '리클라이너', '헤드레스트'],
      material: '스틸/Mg 프레임, PU 폼, 직물/레더',
      weight: '15-25 kg/시트',
      cost: '$150-500/시트',
      function: '착좌, 안전(충돌 하중), 편의(히터/벤틸레이션)',
    },
    {
      name: '도어 트림',
      english: 'Door Trim',
      composition: ['트림 패널', '암레스트', '스피커 그릴', '포켓', '스위치 베젤'],
      material: 'PP/ABS, TPO 스킨, PU 폼, 직물/레더',
      weight: '2-4 kg/개',
      cost: '$30-80/개',
      function: '도어 구조물 은폐, 편의장치 통합, NVH',
    },
  ],
  safety: [
    {
      name: '시트벨트',
      english: 'Seat Belt',
      composition: ['웨빙', '리트랙터', '버클', '텅', '앵커', '프리텐셔너', '로드리미터'],
      material: 'PET 웨빙, 스틸/PA 하우징, 고장력강 앵커',
      weight: '1.5-2.5 kg/세트',
      cost: '$40-80/세트',
      function: '탑승자 구속, 충돌 시 하중 제한',
    },
    {
      name: '에어백',
      english: 'Airbag',
      composition: ['쿠션', '인플레이터', '모듈 케이스', 'DAB 커버'],
      material: '나일론 쿠션, 화약 인플레이터',
      weight: '1-3 kg/개',
      cost: '$50-200/개',
      function: '충돌 시 탑승자/보행자 보호',
    },
  ],
  glass: [
    {
      name: '윈드실드',
      english: 'Windshield',
      composition: ['외측 유리', 'PVB 필름', '내측 유리', 'ADAS 브라켓'],
      material: '접합유리 (유리+PVB+유리)',
      weight: '10-15 kg',
      cost: '$80-400',
      function: '시야 확보, 충돌 보호, ADAS 센서 장착',
    },
    {
      name: '사이드 글라스',
      english: 'Side Glass',
      composition: ['강화유리', '테두리 몰딩', '런 채널'],
      material: '열처리 강화유리',
      weight: '2-4 kg/개',
      cost: '$20-50/개',
      function: '시야 확보, 개폐(도어), 비산방지',
    },
    {
      name: '부틸 테이프',
      english: 'Butyl Tape',
      composition: ['부틸 고무', '충진제', '점착 부여제'],
      material: 'IIR (Isobutylene Isoprene Rubber)',
      weight: '0.2-0.5 kg/차량',
      cost: '$2-5/차량',
      function: '글라스 1차 씰링, 진동/소음 흡수',
    },
  ],
};

const categories = [
  { id: 'exterior', title: '외장 부품', icon: '🚗', color: 'from-blue-500 to-cyan-600' },
  { id: 'interior', title: '내장 부품', icon: '🪑', color: 'from-amber-500 to-orange-600' },
  { id: 'safety', title: '안전 부품', icon: '🛡️', color: 'from-red-500 to-pink-600' },
  { id: 'glass', title: '글라스/씰링', icon: '🪟', color: 'from-emerald-500 to-teal-600' },
];

export default function AutomotivePartsBOMPage() {
  const [activeCategory, setActiveCategory] = useState('exterior');

  const currentParts = partsData[activeCategory as keyof typeof partsData];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-zinc-400 hover:text-white">
              ← Dashboard
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white font-medium">자동차 부품 BOM</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-3xl">
            📦
          </div>
          <div>
            <h1 className="text-3xl font-bold">자동차 부품 BOM</h1>
            <p className="text-zinc-400">Bill of Materials - 차량 구성 부품 총정리</p>
          </div>
        </div>

        <p className="text-xl text-zinc-300 max-w-3xl">
          자동차를 구성하는 핵심 부품들의 구조, 재질, 무게, 원가, 기능을 체계적으로 학습합니다.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: '외장 부품', value: partsData.exterior.length, unit: '종' },
            { label: '내장 부품', value: partsData.interior.length, unit: '종' },
            { label: '안전 부품', value: partsData.safety.length, unit: '종' },
            { label: '글라스/씰링', value: partsData.glass.length, unit: '종' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-purple-400">
                {stat.value}
                <span className="text-sm text-zinc-500 ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tabs */}
      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-2 py-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {cat.icon} {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Parts List */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {currentParts.map((part, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-purple-400">{part.name}</h3>
                  <p className="text-sm text-zinc-500">{part.english}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-400">{part.weight}</div>
                  <div className="text-sm text-zinc-500">{part.cost}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-sm text-zinc-400 mb-2">구성 부품</h4>
                  <div className="flex flex-wrap gap-2">
                    {part.composition.map((comp, j) => (
                      <span key={j} className="px-2 py-1 bg-zinc-700 rounded text-sm">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-sm text-zinc-400 mb-2">재질</h4>
                  <p className="text-zinc-300 text-sm">{part.material}</p>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-sm text-purple-400 mb-1">핵심 기능</h4>
                <p className="text-zinc-300 text-sm">{part.function}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOM Structure */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">BOM 구조 이해</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-3">Level 구조</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-16 text-zinc-500">Level 0</span>
                  <span>완성차</span>
                </div>
                <div className="flex items-center gap-2 pl-4">
                  <span className="w-12 text-zinc-500">L1</span>
                  <span>바디, 섀시, 파워트레인, 전장, 안전</span>
                </div>
                <div className="flex items-center gap-2 pl-8">
                  <span className="w-8 text-zinc-500">L2</span>
                  <span>외판, 내장, 시트, 글라스 등</span>
                </div>
                <div className="flex items-center gap-2 pl-12">
                  <span className="w-4 text-zinc-500">L3</span>
                  <span>개별 부품 (IP, 도어트림 등)</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-3">원가 비중 (세단 기준)</h4>
              <div className="space-y-2 text-sm">
                {[
                  { name: '파워트레인', pct: '25-30%' },
                  { name: '바디/섀시', pct: '20-25%' },
                  { name: '전장/전자', pct: '15-20%' },
                  { name: '내장', pct: '12-15%' },
                  { name: '시트', pct: '8-10%' },
                  { name: '안전 (벨트/에어백)', pct: '3-5%' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-400">{item.name}</span>
                    <span className="text-green-400">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 pb-12 text-center text-zinc-500">
        <p>Knowledge Vault - 자동차 부품 BOM 학습</p>
      </footer>
    </div>
  );
}
