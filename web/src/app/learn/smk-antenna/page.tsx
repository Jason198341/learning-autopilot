'use client';

import Link from 'next/link';
import { useState } from 'react';

// 안테나 유형 데이터
interface AntennaType {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  features: string[];
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  applications: string[];
}

const antennaTypes: AntennaType[] = [
  {
    id: 'ferrite',
    name: '페라이트 코어 안테나',
    nameEn: 'Ferrite Core Antenna',
    icon: '🧲',
    features: [
      '고투자율 페라이트 코어 사용',
      '에나멜 동선 권선',
      '소형화 가능',
      '높은 Q값 (50~200)',
    ],
    specs: [
      { label: '코어 재질', value: 'NiZn 페라이트' },
      { label: '투자율 (μr)', value: '100~2000' },
      { label: '인덕턴스', value: '2~15mH' },
      { label: 'Q Factor', value: '50~150' },
      { label: '크기', value: '20~60mm (길이)' },
    ],
    pros: ['높은 감도', '소형화', '높은 Q값', '안정적 성능'],
    cons: ['코어 손상 시 성능 저하', '방향성 있음', '비용 중간'],
    applications: ['IP 센터', '센터 콘솔', '트렁크', '범퍼'],
  },
  {
    id: 'aircore',
    name: '에어 코어 안테나',
    nameEn: 'Air Core Antenna',
    icon: '💨',
    features: [
      '코어 없이 코일만 사용',
      '투자율 μr = 1 (공기)',
      '대형 사이즈',
      '무지향성',
    ],
    specs: [
      { label: '코어 재질', value: '없음 (공기)' },
      { label: '투자율 (μr)', value: '1' },
      { label: '인덕턴스', value: '0.1~1mH' },
      { label: 'Q Factor', value: '20~50' },
      { label: '크기', value: '50~150mm (직경)' },
    ],
    pros: ['저비용', '무지향성', '코어 손상 걱정 없음'],
    cons: ['대형', '낮은 Q값', '낮은 감도'],
    applications: ['대형 커버리지 필요 시', '보조 안테나'],
  },
  {
    id: 'pcb',
    name: 'PCB 안테나',
    nameEn: 'PCB Printed Antenna',
    icon: '📋',
    features: [
      'PCB 기판에 코일 패턴',
      '초박형 설계',
      '대량 생산 용이',
      '일관된 품질',
    ],
    specs: [
      { label: '기판 재질', value: 'FR-4' },
      { label: '동박 두께', value: '18~35μm' },
      { label: '인덕턴스', value: '10~500μH' },
      { label: 'Q Factor', value: '10~30' },
      { label: '두께', value: '1~2mm' },
    ],
    pros: ['초박형', '대량 생산', '저비용', '일관성'],
    cons: ['낮은 인덕턴스', '낮은 Q값', '짧은 감지 거리'],
    applications: ['박형 설계 필요 시', 'NFC 겸용'],
  },
  {
    id: 'fpc',
    name: 'FPC 안테나',
    nameEn: 'Flexible PCB Antenna',
    icon: '〰️',
    features: [
      '유연 기판 (폴리이미드)',
      '곡면 부착 가능',
      '도어 핸들 내장 적합',
      '진동/충격 강함',
    ],
    specs: [
      { label: '기판 재질', value: '폴리이미드' },
      { label: '두께', value: '0.2~0.5mm' },
      { label: '인덕턴스', value: '10~300μH' },
      { label: 'Q Factor', value: '15~40' },
      { label: '굴곡 반경', value: '5mm 이상' },
    ],
    pros: ['유연성', '곡면 부착', '진동 내성', '박형'],
    cons: ['비용 높음', '낮은 인덕턴스'],
    applications: ['도어 핸들', '곡면 부위', '협소 공간'],
  },
];

// 주파수 대역 데이터
const frequencyBands = [
  {
    band: 'LF',
    frequency: '125kHz',
    fullName: 'Low Frequency',
    korean: '저주파',
    direction: '차량 → 키',
    range: '0.5~2m',
    purpose: '키 위치 감지, Wake-up',
    color: 'green',
  },
  {
    band: 'LF',
    frequency: '134.2kHz',
    fullName: 'Low Frequency',
    korean: '저주파',
    direction: '양방향',
    range: '수 cm',
    purpose: '이모빌라이저',
    color: 'green',
  },
  {
    band: 'UHF',
    frequency: '315MHz',
    fullName: 'Ultra High Frequency',
    korean: '극초단파 (북미)',
    direction: '키 → 차량',
    range: '30~100m',
    purpose: 'RKE 명령',
    color: 'blue',
  },
  {
    band: 'UHF',
    frequency: '433.92MHz',
    fullName: 'Ultra High Frequency',
    korean: '극초단파 (유럽/아시아)',
    direction: '키 → 차량',
    range: '30~100m',
    purpose: 'RKE 명령',
    color: 'blue',
  },
  {
    band: 'UWB',
    frequency: '6.5~8GHz',
    fullName: 'Ultra-Wideband',
    korean: '초광대역',
    direction: '양방향',
    range: '10~30m',
    purpose: '정밀 위치 측정',
    color: 'purple',
  },
];

// 차량 내 안테나 배치
const antennaPositions = [
  { id: 1, name: '운전석 도어 핸들', type: 'LF', purpose: 'Passive Entry 감지', location: '외부' },
  { id: 2, name: '조수석 도어 핸들', type: 'LF', purpose: 'Passive Entry 감지', location: '외부' },
  { id: 3, name: 'IP 센터', type: 'LF', purpose: '시동 인증, 실내 감지', location: '내부' },
  { id: 4, name: '후좌측 도어 핸들', type: 'LF', purpose: '후석 Passive Entry', location: '외부' },
  { id: 5, name: '센터 콘솔', type: 'LF', purpose: '실내 키 위치 감지', location: '내부' },
  { id: 6, name: '후우측 도어 핸들', type: 'LF', purpose: '후석 Passive Entry', location: '외부' },
  { id: 7, name: '트렁크', type: 'LF', purpose: '트렁크 자동 개폐', location: '외부' },
];

// 전기적 파라미터
const electricalParams = [
  {
    name: '인덕턴스 (L)',
    formula: 'L = μ₀ × μᵣ × N² × A / l',
    unit: 'mH',
    typical: '2~15mH',
    description: '자기장 에너지 저장 능력',
  },
  {
    name: 'Q 팩터',
    formula: 'Q = ωL / R = 2πfL / R',
    unit: '무단위',
    typical: '40~150',
    description: '에너지 손실 정도 (높을수록 효율적)',
  },
  {
    name: '공진 주파수',
    formula: 'f₀ = 1 / (2π√(LC))',
    unit: 'kHz',
    typical: '>250kHz',
    description: '최대 에너지 전달 주파수',
  },
  {
    name: 'DC 저항',
    formula: 'R = ρ × l / A',
    unit: 'Ω',
    typical: '10~50Ω',
    description: '코일 도선의 저항',
  },
];

// 페라이트 재료 비교
const ferriteMaterials = [
  {
    type: 'NiZn',
    name: '니켈-아연 페라이트',
    permeability: '100~1500',
    frequency: '100kHz~100MHz',
    resistivity: '10⁶ Ω·cm',
    saturation: '300~400mT',
    curie: '150~450°C',
    smkSuitability: 5,
    note: 'SMK LF 안테나 주로 사용',
  },
  {
    type: 'MnZn',
    name: '망간-아연 페라이트',
    permeability: '1000~15000',
    frequency: '1kHz~1MHz',
    resistivity: '1~10 Ω·cm',
    saturation: '400~500mT',
    curie: '100~300°C',
    smkSuitability: 3,
    note: '저주파 전력용',
  },
];

// 환경 시험 규격
const environmentTests = [
  { test: '고온 동작', condition: '85°C, 500hr', criteria: '기능 정상' },
  { test: '저온 동작', condition: '-40°C, 500hr', criteria: '기능 정상' },
  { test: '온도 사이클', condition: '-40°C~85°C, 1000cyc', criteria: '특성 변화 <10%' },
  { test: '고온 고습', condition: '85°C/85%RH, 500hr', criteria: '절연저항 양호' },
  { test: '방수', condition: 'IP67 (1m/30min)', criteria: '침수 없음' },
  { test: '염수 분무', condition: '5%NaCl, 96hr', criteria: '부식 없음' },
  { test: '진동', condition: '10~500Hz, 10Grms', criteria: '기능 정상' },
  { test: '충격', condition: '50G, 11ms, 3축', criteria: '파손 없음' },
];

// 폴링 모드
const pollingModes = [
  {
    mode: 'Sleep Mode',
    korean: '절전 모드',
    period: '2초',
    current: '~0.5mA',
    use: '장기 주차 시',
    icon: '💤',
  },
  {
    mode: 'Normal Mode',
    korean: '일반 모드',
    period: '200ms',
    current: '~3mA',
    use: '일반 대기 상태',
    icon: '🔄',
  },
  {
    mode: 'Fast Mode',
    korean: '고속 모드',
    period: '50ms',
    current: '~15mA',
    use: '도어 핸들 터치 직후',
    icon: '⚡',
  },
];

// 보안 기술
const securityTechnologies = [
  {
    tech: 'AES-128',
    keyLength: '128bit',
    security: '높음',
    usage: '현재 주류',
    icon: '🔐',
  },
  {
    tech: 'AES-256',
    keyLength: '256bit',
    security: '매우 높음',
    usage: '프리미엄 차량',
    icon: '🛡️',
  },
  {
    tech: 'UWB ToF',
    keyLength: '-',
    security: '매우 높음',
    usage: 'Relay Attack 방어',
    icon: '📡',
  },
];

// 트러블슈팅 데이터
const troubleshooting = [
  {
    symptom: '통신 거리 부족',
    description: '키를 차량에 가까이 가져가야 감지됨',
    causes: [
      { cause: '안테나 인덕턴스 저하', probability: '높음', check: 'LCR Meter 측정' },
      { cause: '코어 균열/손상', probability: '중간', check: '외관 검사' },
      { cause: '주변 금속 간섭', probability: '높음', check: '금속 제거 후 재시험' },
      { cause: '키 배터리 부족', probability: '높음', check: '배터리 교체' },
    ],
    solutions: [
      '인덕턴스 규격 확인 → 범위 벗어나면 안테나 교체',
      '코어 손상 시 안테나 교체',
      '금속 이물질 제거, 차폐재 위치 조정',
    ],
  },
  {
    symptom: '간헐적 통신 불량',
    description: '때때로 키를 인식하지 못함',
    causes: [
      { cause: '커넥터 접촉 불량', probability: '높음', check: '커넥터 탈착 후 확인' },
      { cause: '배선 단선 (진동)', probability: '중간', check: '배선 흔들며 측정' },
      { cause: '납땜 크랙', probability: '중간', check: '확대경 검사' },
      { cause: 'EMI 간섭', probability: '중간', check: '노이즈 환경 확인' },
    ],
    solutions: [
      '커넥터 단자 청소 및 재체결',
      '배선 고정 상태 점검',
      '납땜부 재작업 (Cold Joint 수리)',
    ],
  },
  {
    symptom: 'Q값 저하',
    description: 'Q팩터가 규격 이하로 측정됨',
    causes: [
      { cause: '코어 투자율 저하', probability: '높음', check: '코어 상태 점검' },
      { cause: '권선 저항 증가', probability: '중간', check: 'DC 저항 측정' },
      { cause: '주변 도체 와전류', probability: '높음', check: '금속 부품 거리 확인' },
    ],
    solutions: [
      '코어 상태 점검 (균열, 변색 확인)',
      '권선 DC 저항 측정 → 규격 초과 시 교체',
      '안테나 주변 금속 부품 거리 확인 (최소 10mm 이상)',
    ],
  },
];

// UWB vs LF/UHF 비교
const technologyComparison = [
  { item: '주파수', lfuhf: '125kHz/433MHz', uwb: '6.5GHz~8GHz' },
  { item: '대역폭', lfuhf: '좁은 대역', uwb: '500MHz 이상' },
  { item: '위치 정밀도', lfuhf: '~1m', uwb: '~10cm' },
  { item: 'Relay Attack', lfuhf: '취약', uwb: '강건 (ToF)' },
  { item: '전력 소모', lfuhf: '낮음', uwb: '중간' },
  { item: '비용', lfuhf: '저가', uwb: '고가' },
  { item: '표준', lfuhf: '독자 규격', uwb: 'IEEE 802.15.4z' },
];

// 용어 사전
const glossary = [
  { term: 'SMK', full: 'Smart Key', desc: '키를 주머니에 넣은 채 잠금/시동 가능한 시스템' },
  { term: 'PEPS', full: 'Passive Entry Passive Start', desc: '버튼 조작만으로 입출입 및 시동' },
  { term: 'RKE', full: 'Remote Keyless Entry', desc: '리모컨 버튼으로 원격 잠금/해제' },
  { term: 'LF', full: 'Low Frequency', desc: '저주파 (125kHz), 근거리 통신용' },
  { term: 'UHF', full: 'Ultra High Frequency', desc: '극초단파 (315/433MHz), 원거리 통신용' },
  { term: 'UWB', full: 'Ultra-Wideband', desc: '초광대역, 정밀 위치 측정용' },
  { term: 'Q Factor', full: 'Quality Factor', desc: '안테나 효율 지표 (높을수록 좋음)' },
  { term: 'FOB', full: 'Key Fob', desc: '스마트키 단말기 (열쇠고리형)' },
  { term: 'ToF', full: 'Time of Flight', desc: '비행 시간 (거리 측정용)' },
  { term: 'BCM', full: 'Body Control Module', desc: '차체 제어 모듈' },
];

// 입문자용 학습 단계
const beginnerSteps = [
  {
    id: 1,
    title: '스마트키가 뭐예요?',
    emoji: '🔑',
    simple: '주머니에 넣고 다니면 자동으로 문 열리는 열쇠!',
    detail: '옛날에는 열쇠를 자물쇠에 꽂아 돌려야 했지만, 스마트키는 무선으로 차와 대화해서 자동으로 잠금/해제가 됩니다.',
    analogy: '스마트키 = 차와 대화하는 무전기',
  },
  {
    id: 2,
    title: '안테나가 뭐예요?',
    emoji: '📡',
    simple: '무선 신호를 보내거나 받는 장치!',
    detail: '눈에 보이지 않는 전파(라디오 파처럼)를 공기 중으로 쏘거나 받는 역할을 합니다.',
    analogy: '안테나 = 차의 귀(듣기) + 입(말하기)',
  },
  {
    id: 3,
    title: 'LF와 UHF가 뭐예요?',
    emoji: '📻',
    simple: 'LF는 속삭임(가까이), UHF는 외침(멀리)!',
    detail: 'LF(125kHz)는 1~2미터 가까운 거리에서만 동작하고, UHF(433MHz)는 30~100미터 먼 거리까지 갑니다.',
    analogy: 'LF = 속삭임(누가 말하는지 정확히 알 수 있음)\nUHF = 확성기(멀리 들리지만 누군지 구분 어려움)',
  },
  {
    id: 4,
    title: '어떻게 문이 열려요?',
    emoji: '🚪',
    simple: '차가 물어보고 → 키가 대답하고 → 비밀번호 맞으면 열림!',
    detail: '1) 차가 LF로 "키 있어?" 질문\n2) 키가 UHF로 "나 여기!" 대답 (암호 포함)\n3) 차가 암호 확인 → 문 열림',
    analogy: '친구 집 초인종 누르기:\n"누구세요?" → "나야, 비밀번호는 1234!" → 문 열림',
  },
  {
    id: 5,
    title: '페라이트가 뭐예요?',
    emoji: '🧲',
    simple: '신호를 더 세게 만들어주는 특수 재료!',
    detail: '철 성분이 들어간 세라믹인데, 자석 성질이 있어서 안테나 신호를 증폭시켜 줍니다. 작은 안테나로도 강한 신호를 만들 수 있어요!',
    analogy: '페라이트 = 스피커 앰프 (작은 소리도 크게)',
  },
  {
    id: 6,
    title: '안테나가 왜 여러 개?',
    emoji: '🚗',
    simple: '키가 어디 있는지 정확히 알아야 하니까!',
    detail: '운전석 문 앞이면 운전석만, 트렁크 앞이면 트렁크만 열어야 해요. 여러 안테나가 각자 담당 구역을 감지합니다.',
    analogy: '집 안 여러 곳에 센서 달기:\n거실 센서, 방 센서, 현관 센서 → 어디에 사람이 있는지 정확히 파악',
  },
];

// 입문자용 퀴즈
const beginnerQuiz = [
  {
    question: 'SMK는 무엇의 약자일까요?',
    options: ['Super Motor Key', 'Smart Key', 'Simple Machine Key'],
    answer: 1,
    explanation: 'SMK = Smart Key의 약자입니다. 무선으로 차와 통신하는 똑똑한 열쇠예요!',
  },
  {
    question: 'LF(125kHz)의 통신 거리는?',
    options: ['1~2미터', '30~100미터', '1킬로미터'],
    answer: 0,
    explanation: 'LF는 저주파라서 가까운 거리(1~2m)에서만 동작해요. 키가 어디 있는지 정확히 알 수 있죠!',
  },
  {
    question: '페라이트 안테나가 인기인 이유는?',
    options: ['예뻐서', '작은데 성능이 좋아서', '맛있어서'],
    answer: 1,
    explanation: '페라이트 코어가 신호를 증폭시켜서, 작은 크기로도 강한 신호를 만들 수 있어요!',
  },
  {
    question: '차에 안테나가 여러 개인 이유는?',
    options: ['멋있어서', '키 위치를 정확히 알려고', '무거우면 안 돼서'],
    answer: 1,
    explanation: '각 안테나가 담당 구역을 감지해서, 키가 운전석인지 트렁크인지 정확히 알 수 있어요!',
  },
];

// 일상 속 비유 모음
const everydayAnalogies = [
  {
    concept: '주파수 (Hz)',
    everyday: '목소리 높낮이',
    explanation: '낮은 목소리 = 저주파(LF), 높은 목소리 = 고주파(UHF). 1초에 몇 번 떨리는지를 Hz로 표현해요.',
    icon: '🗣️',
  },
  {
    concept: '인덕턴스 (L)',
    everyday: '물탱크 크기',
    explanation: '물탱크가 크면 물을 많이 저장하듯, 인덕턴스가 크면 자기장 에너지를 많이 저장해요.',
    icon: '🛢️',
  },
  {
    concept: 'Q 팩터',
    everyday: '에어컨 효율 등급',
    explanation: 'Q가 높으면 에너지 손실이 적어요. 에어컨 1등급처럼 효율이 좋다는 뜻!',
    icon: '❄️',
  },
  {
    concept: '공진 주파수',
    everyday: '그네 밀기 타이밍',
    explanation: '그네 주기에 맞춰 밀면 적은 힘으로 크게 흔들려요. 안테나도 특정 주파수에서 최대 효율!',
    icon: '🎢',
  },
  {
    concept: '와전류 손실',
    everyday: '물 새는 통',
    explanation: '금속 근처에서 에너지가 새나가요. 물통에 구멍 뚫린 것처럼 손실이 발생!',
    icon: '💧',
  },
];

const tabs = [
  { id: 'beginner', name: '입문 (처음부터)', icon: '🎓' },
  { id: 'overview', name: '개요', icon: '📡' },
  { id: 'types', name: '안테나 종류', icon: '🔧' },
  { id: 'placement', name: '차량 배치', icon: '🚗' },
  { id: 'electrical', name: '전기적 특성', icon: '⚡' },
  { id: 'protocol', name: '통신 프로토콜', icon: '📶' },
  { id: 'testing', name: '테스트', icon: '🧪' },
  { id: 'troubleshoot', name: '트러블슈팅', icon: '🔍' },
  { id: 'future', name: '미래 기술', icon: '🚀' },
];

export default function SmkAntennaPage() {
  const [activeTab, setActiveTab] = useState('beginner');
  const [selectedAntenna, setSelectedAntenna] = useState<string | null>(null);
  const [selectedTrouble, setSelectedTrouble] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

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
              <span className="text-2xl">📡</span>
              <h1 className="text-xl font-bold text-white">SMK 안테나</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm mb-6">
              <span>🔑</span>
              <span>Smart Key System</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              SMK 안테나 완벽 가이드
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              자동차 스마트키 시스템의 핵심, LF/UHF/UWB 안테나 기술을
              <br />
              <span className="text-cyan-400">설계부터 제조, 테스트까지</span> 완전 정복
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">125kHz</div>
                <div className="text-sm text-slate-400">LF 주파수</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">433MHz</div>
                <div className="text-sm text-slate-400">UHF 주파수</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">UWB</div>
                <div className="text-sm text-slate-400">차세대 기술</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">4종</div>
                <div className="text-sm text-slate-400">안테나 유형</div>
              </div>
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
                    ? 'bg-cyan-500 text-white'
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
        {/* Beginner Tab - 입문자용 */}
        {activeTab === 'beginner' && (
          <div className="space-y-8">
            {/* 환영 메시지 */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 border border-emerald-500/30">
              <div className="text-center">
                <span className="text-5xl">🎓</span>
                <h2 className="text-3xl font-bold text-white mt-4 mb-2">
                  SMK 안테나, 처음부터 쉽게!
                </h2>
                <p className="text-slate-300 text-lg">
                  중학생도 30분이면 전문가 수준으로 이해할 수 있어요
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <div className="bg-slate-800/50 rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-emerald-400">{beginnerSteps.length}</div>
                    <div className="text-xs text-slate-400">학습 단계</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-cyan-400">{beginnerQuiz.length}</div>
                    <div className="text-xs text-slate-400">확인 퀴즈</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-purple-400">30분</div>
                    <div className="text-xs text-slate-400">예상 시간</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 단계별 학습 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>📚</span> 단계별로 배우기
                <span className="text-sm font-normal text-slate-400 ml-2">
                  ({currentStep + 1} / {beginnerSteps.length})
                </span>
              </h3>

              {/* 진행 바 */}
              <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / beginnerSteps.length) * 100}%` }}
                />
              </div>

              {/* 현재 단계 카드 */}
              <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{beginnerSteps[currentStep].emoji}</span>
                  <div>
                    <div className="text-sm text-cyan-400 font-medium">STEP {beginnerSteps[currentStep].id}</div>
                    <h4 className="text-2xl font-bold text-white">{beginnerSteps[currentStep].title}</h4>
                  </div>
                </div>

                {/* 한 줄 요약 */}
                <div className="bg-emerald-500/20 rounded-lg p-4 mb-4">
                  <div className="text-sm text-emerald-300 font-medium mb-1">💡 한 줄 요약</div>
                  <div className="text-lg text-white font-medium">{beginnerSteps[currentStep].simple}</div>
                </div>

                {/* 상세 설명 */}
                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-slate-400 font-medium mb-2">📖 자세히 알아보기</div>
                  <div className="text-slate-300 whitespace-pre-line">{beginnerSteps[currentStep].detail}</div>
                </div>

                {/* 비유로 이해하기 */}
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-sm text-purple-300 font-medium mb-2">🎯 비유로 쉽게!</div>
                  <div className="text-purple-200 whitespace-pre-line">{beginnerSteps[currentStep].analogy}</div>
                </div>
              </div>

              {/* 네비게이션 버튼 */}
              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    currentStep === 0
                      ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  ← 이전 단계
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(beginnerSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === beginnerSteps.length - 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    currentStep === beginnerSteps.length - 1
                      ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-600 hover:to-emerald-600'
                  }`}
                >
                  다음 단계 →
                </button>
              </div>
            </div>

            {/* 일상 비유 카드 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>🎨</span> 어려운 용어, 쉽게 이해하기
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {everydayAnalogies.map((item, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-xl p-4 hover:bg-slate-700/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <div className="font-bold text-white">{item.concept}</div>
                        <div className="text-sm text-cyan-400">= {item.everyday}</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">{item.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 퀴즈 섹션 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>🧠</span> 확인 퀴즈
                <span className="text-sm font-normal text-slate-400 ml-2">
                  ({quizIndex + 1} / {beginnerQuiz.length})
                </span>
              </h3>

              <div className="bg-slate-700/30 rounded-xl p-6">
                <div className="text-lg font-medium text-white mb-6">
                  Q{quizIndex + 1}. {beginnerQuiz[quizIndex].question}
                </div>

                <div className="space-y-3 mb-6">
                  {beginnerQuiz[quizIndex].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedAnswer(i);
                        setShowAnswer(true);
                      }}
                      disabled={showAnswer}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        showAnswer
                          ? i === beginnerQuiz[quizIndex].answer
                            ? 'bg-emerald-500/30 border-2 border-emerald-500 text-emerald-200'
                            : i === selectedAnswer
                              ? 'bg-red-500/30 border-2 border-red-500 text-red-200'
                              : 'bg-slate-700/50 text-slate-400'
                          : selectedAnswer === i
                            ? 'bg-cyan-500/30 border-2 border-cyan-500 text-white'
                            : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <span className="font-medium mr-2">{['A', 'B', 'C'][i]}.</span>
                      {option}
                    </button>
                  ))}
                </div>

                {showAnswer && (
                  <div className={`rounded-lg p-4 mb-4 ${
                    selectedAnswer === beginnerQuiz[quizIndex].answer
                      ? 'bg-emerald-500/20 border border-emerald-500/50'
                      : 'bg-orange-500/20 border border-orange-500/50'
                  }`}>
                    <div className="font-medium mb-2">
                      {selectedAnswer === beginnerQuiz[quizIndex].answer
                        ? '🎉 정답이에요!'
                        : '💡 아쉬워요, 다시 생각해보세요!'}
                    </div>
                    <div className="text-sm text-slate-300">{beginnerQuiz[quizIndex].explanation}</div>
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      setQuizIndex(Math.max(0, quizIndex - 1));
                      setSelectedAnswer(null);
                      setShowAnswer(false);
                    }}
                    disabled={quizIndex === 0}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      quizIndex === 0
                        ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    ← 이전 문제
                  </button>
                  <button
                    onClick={() => {
                      setQuizIndex(Math.min(beginnerQuiz.length - 1, quizIndex + 1));
                      setSelectedAnswer(null);
                      setShowAnswer(false);
                    }}
                    disabled={quizIndex === beginnerQuiz.length - 1}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      quizIndex === beginnerQuiz.length - 1
                        ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                        : 'bg-cyan-500 text-white hover:bg-cyan-600'
                    }`}
                  >
                    다음 문제 →
                  </button>
                </div>
              </div>
            </div>

            {/* 다음 단계 안내 */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                🚀 기초 학습 완료!
              </h3>
              <p className="text-slate-300 mb-4">
                이제 &quot;개요&quot; 탭으로 이동해서 더 깊이 있는 내용을 배워보세요.
              </p>
              <button
                onClick={() => setActiveTab('overview')}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                개요 탭으로 이동 →
              </button>
            </div>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* SMK 시스템 개요 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">SMK 시스템 구성</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">🚗 차량 측</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                      SMK ECU (제어기)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                      LF 안테나 (125kHz) - 복수 배치
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                      UHF 수신기 (433MHz)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                      CAN 통신 (BCM 연결)
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">🔑 키 FOB 측</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full" />
                      MCU (마이크로컨트롤러)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full" />
                      LF 수신 안테나
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full" />
                      UHF 송신기
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full" />
                      배터리 (CR2032 등)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 주파수 대역 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">주파수 대역별 역할</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">대역</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">주파수</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">용도</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">통신 방향</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">거리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {frequencyBands.map((band, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            band.color === 'green' ? 'bg-green-500/20 text-green-400' :
                            band.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {band.band}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-white font-medium">{band.frequency}</td>
                        <td className="py-3 px-4 text-slate-300">{band.purpose}</td>
                        <td className="py-3 px-4 text-slate-400">{band.direction}</td>
                        <td className="py-3 px-4 text-cyan-400">{band.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 용어 사전 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">📚 핵심 용어</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {glossary.slice(0, 6).map((item, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-cyan-400">{item.term}</span>
                      <span className="text-xs text-slate-500">{item.full}</span>
                    </div>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Types Tab */}
        {activeTab === 'types' && (
          <div className="space-y-8">
            {/* 안테나 유형 카드 */}
            <div className="grid md:grid-cols-2 gap-6">
              {antennaTypes.map((antenna) => (
                <div
                  key={antenna.id}
                  className={`bg-slate-800/50 rounded-2xl p-6 border cursor-pointer transition-all ${
                    selectedAntenna === antenna.id
                      ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                      : 'border-slate-700/50 hover:border-slate-600/50'
                  }`}
                  onClick={() => setSelectedAntenna(selectedAntenna === antenna.id ? null : antenna.id)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{antenna.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{antenna.name}</h3>
                      <p className="text-sm text-slate-400">{antenna.nameEn}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-medium text-slate-400 mb-2">특징</h4>
                      <div className="flex flex-wrap gap-2">
                        {antenna.features.map((f, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specs Table */}
                    <div className="bg-slate-700/30 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-slate-400 mb-2">주요 사양</h4>
                      <div className="space-y-1 text-xs">
                        {antenna.specs.map((spec, i) => (
                          <div key={i} className="flex justify-between">
                            <span className="text-slate-400">{spec.label}</span>
                            <span className="text-cyan-400 font-medium">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {selectedAntenna === antenna.id && (
                      <div className="space-y-4 pt-4 border-t border-slate-700/50">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-green-400 mb-2">👍 장점</h4>
                            <ul className="space-y-1">
                              {antenna.pros.map((p, i) => (
                                <li key={i} className="text-xs text-slate-300 flex items-center gap-1">
                                  <span className="w-1 h-1 bg-green-400 rounded-full" />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-orange-400 mb-2">👎 단점</h4>
                            <ul className="space-y-1">
                              {antenna.cons.map((c, i) => (
                                <li key={i} className="text-xs text-slate-300 flex items-center gap-1">
                                  <span className="w-1 h-1 bg-orange-400 rounded-full" />
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-blue-400 mb-2">🎯 적용 위치</h4>
                          <div className="flex flex-wrap gap-2">
                            {antenna.applications.map((app, i) => (
                              <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 페라이트 재료 비교 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🧲 페라이트 재료 비교</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400">특성</th>
                      <th className="text-left py-3 px-4 text-cyan-400">NiZn 페라이트</th>
                      <th className="text-left py-3 px-4 text-blue-400">MnZn 페라이트</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-400">투자율 (μi)</td>
                      <td className="py-3 px-4 text-slate-300">100~1500</td>
                      <td className="py-3 px-4 text-slate-300">1000~15000</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-400">사용 주파수</td>
                      <td className="py-3 px-4 text-slate-300">100kHz~100MHz</td>
                      <td className="py-3 px-4 text-slate-300">1kHz~1MHz</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-400">저항률</td>
                      <td className="py-3 px-4 text-slate-300">10⁶ Ω·cm</td>
                      <td className="py-3 px-4 text-slate-300">1~10 Ω·cm</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-400">큐리 온도</td>
                      <td className="py-3 px-4 text-slate-300">150~450°C</td>
                      <td className="py-3 px-4 text-slate-300">100~300°C</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">SMK 적합성</td>
                      <td className="py-3 px-4">
                        <span className="text-yellow-400">{'★'.repeat(5)}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-yellow-400">{'★'.repeat(3)}{'☆'.repeat(2)}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                💡 SMK LF 안테나(125kHz)는 주로 <span className="text-cyan-400">NiZn 페라이트</span>를 사용합니다.
                고저항으로 와전류 손실을 최소화하기 때문입니다.
              </p>
            </div>
          </div>
        )}

        {/* Placement Tab */}
        {activeTab === 'placement' && (
          <div className="space-y-8">
            {/* 차량 배치도 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🚗 차량 내 SMK 안테나 배치</h2>

              {/* 시각적 배치도 */}
              <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                <div className="max-w-md mx-auto">
                  <div className="relative">
                    {/* Car Shape */}
                    <div className="border-2 border-slate-500 rounded-t-3xl rounded-b-xl p-4 aspect-[3/4]">
                      <div className="text-center text-slate-400 text-xs mb-2">FRONT</div>

                      {/* Front Row */}
                      <div className="flex justify-between mb-4">
                        <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-cyan-400 text-lg">①</div>
                            <div className="text-xs text-slate-400">운전석</div>
                          </div>
                        </div>
                        <div className="w-20 h-16 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-green-400 text-lg">③</div>
                            <div className="text-xs text-slate-400">IP</div>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-cyan-400 text-lg">②</div>
                            <div className="text-xs text-slate-400">조수석</div>
                          </div>
                        </div>
                      </div>

                      {/* Center Console */}
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-12 bg-purple-500/20 border border-purple-500/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-purple-400 text-lg">⑤</div>
                            <div className="text-xs text-slate-400">콘솔</div>
                          </div>
                        </div>
                      </div>

                      {/* Rear Row */}
                      <div className="flex justify-between">
                        <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-blue-400 text-lg">④</div>
                            <div className="text-xs text-slate-400">후좌측</div>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-blue-400 text-lg">⑥</div>
                            <div className="text-xs text-slate-400">후우측</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center text-slate-400 text-xs mt-2">REAR</div>
                    </div>

                    {/* Trunk */}
                    <div className="mt-2 w-32 mx-auto h-12 bg-orange-500/20 border border-orange-500/50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-orange-400 text-lg">⑦</div>
                        <div className="text-xs text-slate-400">트렁크</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 안테나 위치 테이블 */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400">번호</th>
                      <th className="text-left py-3 px-4 text-slate-400">위치</th>
                      <th className="text-left py-3 px-4 text-slate-400">타입</th>
                      <th className="text-left py-3 px-4 text-slate-400">기능</th>
                      <th className="text-left py-3 px-4 text-slate-400">내/외부</th>
                    </tr>
                  </thead>
                  <tbody>
                    {antennaPositions.map((pos) => (
                      <tr key={pos.id} className="border-b border-slate-700/50">
                        <td className="py-3 px-4">
                          <span className="w-6 h-6 bg-cyan-500/20 text-cyan-400 rounded-full inline-flex items-center justify-center text-sm font-medium">
                            {pos.id}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-white font-medium">{pos.name}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                            {pos.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300">{pos.purpose}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            pos.location === '외부'
                              ? 'bg-orange-500/20 text-orange-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {pos.location}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 감지 영역 요구사항 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4">📏 감지 영역 요구사항</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { area: '도어 외부', range: '1.0m', purpose: 'Passive Entry' },
                  { area: '도어 내부', range: '0.5m', purpose: '실내 키 감지' },
                  { area: 'IP 영역', range: '0.8m', purpose: '시동 인증' },
                  { area: '트렁크 외부', range: '0.8m', purpose: '트렁크 자동 개방' },
                  { area: '차량 전체', range: '2.0m', purpose: 'Welcome Light' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="text-lg font-bold text-cyan-400 mb-1">{item.range}</div>
                    <div className="text-sm text-white">{item.area}</div>
                    <div className="text-xs text-slate-400">{item.purpose}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Electrical Tab */}
        {activeTab === 'electrical' && (
          <div className="space-y-8">
            {/* 전기적 파라미터 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">⚡ 전기적 파라미터</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {electricalParams.map((param, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">{param.name}</h3>
                    <div className="bg-slate-800/50 rounded-lg p-3 mb-3">
                      <code className="text-green-400 text-sm font-mono">{param.formula}</code>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">단위</span>
                      <span className="text-white">{param.unit}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">일반값</span>
                      <span className="text-cyan-400">{param.typical}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">{param.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Q 팩터 설명 */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <h2 className="text-xl font-bold text-white mb-4">💡 Q 팩터의 중요성</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📉</div>
                  <div className="text-sm text-white">낮은 Q (10~30)</div>
                  <div className="text-xs text-slate-400 mt-1">넓은 대역폭, 에너지 손실 큼</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="text-sm text-white">중간 Q (40~80)</div>
                  <div className="text-xs text-slate-400 mt-1">SMK 안테나 적정 범위</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📈</div>
                  <div className="text-sm text-white">높은 Q (100+)</div>
                  <div className="text-xs text-slate-400 mt-1">좁은 대역폭, 효율 높음</div>
                </div>
              </div>
              <p className="text-sm text-slate-300 mt-4">
                Q값이 높을수록 에너지 손실이 적어 통신 거리가 늘어나지만, 대역폭이 좁아져 주파수
                정확도가 중요해집니다. SMK 안테나는 일반적으로 Q=40~100 범위를 목표로 설계합니다.
              </p>
            </div>
          </div>
        )}

        {/* Protocol Tab */}
        {activeTab === 'protocol' && (
          <div className="space-y-8">
            {/* PEPS 통신 시퀀스 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">📶 PEPS 통신 시퀀스</h2>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'LF Polling', desc: '차량이 주기적으로 LF 신호 송출', time: '0ms', icon: '📡' },
                  { step: 2, title: 'LF Wake-up', desc: '키가 LF 신호 수신 후 활성화', time: '50ms', icon: '⚡' },
                  { step: 3, title: 'LF Challenge', desc: '차량이 난수(Challenge) 전송', time: '100ms', icon: '🔐' },
                  { step: 4, title: 'UHF Response', desc: '키가 암호화된 응답 송신', time: '150ms', icon: '📤' },
                  { step: 5, title: '인증 확인', desc: 'ECU가 암호 검증', time: '200ms', icon: '✅' },
                  { step: 6, title: '도어 잠금 해제', desc: 'BCM으로 Unlock 명령', time: '250ms', icon: '🔓' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 bg-slate-700/30 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-cyan-400 font-bold mr-2">Step {item.step}:</span>
                          <span className="text-white">{item.title}</span>
                        </div>
                        <span className="text-sm text-slate-400">{item.time}</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400 mt-4 text-center">
                총 응답 시간: &lt;300ms (사용자 체감 지연 없음)
              </p>
            </div>

            {/* 폴링 모드 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🔄 LF 폴링 모드</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {pollingModes.map((mode, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{mode.icon}</span>
                      <div>
                        <div className="text-white font-medium">{mode.mode}</div>
                        <div className="text-xs text-slate-400">{mode.korean}</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">폴링 주기</span>
                        <span className="text-cyan-400">{mode.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">평균 전류</span>
                        <span className="text-orange-400">{mode.current}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-2">{mode.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 보안 기술 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🔐 보안 메커니즘</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {securityTechnologies.map((tech, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-lg font-bold text-white">{tech.tech}</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">키 길이</span>
                        <span className="text-cyan-400">{tech.keyLength}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">보안 수준</span>
                        <span className="text-green-400">{tech.security}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-2">{tech.usage}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Relay Attack 경고 */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-red-400 font-bold mb-2">⚠️ Relay Attack 위험</h3>
                <p className="text-sm text-slate-300 mb-3">
                  중계기를 사용해 차량-키 간 신호를 증폭하여 원거리에서 잠금 해제하는 해킹 방법입니다.
                </p>
                <div className="text-sm">
                  <span className="text-slate-400">방어 기술: </span>
                  <span className="text-cyan-400">UWB Time-of-Flight, Motion Sensor, RSSI 분석</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testing Tab */}
        {activeTab === 'testing' && (
          <div className="space-y-8">
            {/* 환경 시험 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🧪 환경 시험 규격</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400">시험 항목</th>
                      <th className="text-left py-3 px-4 text-slate-400">조건</th>
                      <th className="text-left py-3 px-4 text-slate-400">합격 기준</th>
                    </tr>
                  </thead>
                  <tbody>
                    {environmentTests.map((test, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">{test.test}</td>
                        <td className="py-3 px-4 text-cyan-400">{test.condition}</td>
                        <td className="py-3 px-4 text-green-400">{test.criteria}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 전기적 테스트 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">⚡ 전기적 테스트 항목</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: '인덕턴스', spec: '5mH ±10%', tool: 'LCR Meter', icon: '🔬' },
                  { name: 'DC 저항', spec: '30Ω ±15%', tool: 'Multimeter', icon: '📊' },
                  { name: 'Q 팩터', spec: '>30 @125kHz', tool: 'Impedance Analyzer', icon: '📈' },
                  { name: '절연 저항', spec: '>100MΩ', tool: 'Megger', icon: '🔌' },
                  { name: '내전압', spec: '>500VAC/1min', tool: 'Hi-Pot Tester', icon: '⚡' },
                  { name: '자계 강도', spec: '>1mA/m @1m', tool: 'Field Probe', icon: '📡' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-white font-medium">{item.name}</span>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-400">규격</span>
                        <span className="text-cyan-400">{item.spec}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">장비</span>
                        <span className="text-slate-300">{item.tool}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EMC 시험 */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20">
              <h2 className="text-xl font-bold text-white mb-4">📻 EMC 시험</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="text-orange-400 font-medium mb-2">방사 에미션 (RE)</h3>
                  <p className="text-sm text-slate-300 mb-2">규격: CISPR 25 Class 5</p>
                  <p className="text-xs text-slate-400">150kHz~2.5GHz, 한도: 24dBμV/m (Peak)</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="text-red-400 font-medium mb-2">방사 내성 (RI)</h3>
                  <p className="text-sm text-slate-300 mb-2">규격: ISO 11452-2</p>
                  <p className="text-xs text-slate-400">200V/m (80MHz~1GHz), 오동작 없음</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Troubleshoot Tab */}
        {activeTab === 'troubleshoot' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🔍 트러블슈팅 가이드</h2>

              {/* 문제 선택 탭 */}
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

                {/* 원인 분석 */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-white mb-3">원인 분석</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-600">
                          <th className="text-left py-2 px-3 text-slate-400">원인</th>
                          <th className="text-left py-2 px-3 text-slate-400">가능성</th>
                          <th className="text-left py-2 px-3 text-slate-400">확인 방법</th>
                        </tr>
                      </thead>
                      <tbody>
                        {troubleshooting[selectedTrouble].causes.map((cause, i) => (
                          <tr key={i} className="border-b border-slate-700/50">
                            <td className="py-2 px-3 text-white">{cause.cause}</td>
                            <td className="py-2 px-3">
                              <span className={`px-2 py-1 rounded text-xs ${
                                cause.probability === '높음' ? 'bg-red-500/20 text-red-400' :
                                cause.probability === '중간' ? 'bg-orange-500/20 text-orange-400' :
                                'bg-green-500/20 text-green-400'
                              }`}>
                                {cause.probability}
                              </span>
                            </td>
                            <td className="py-2 px-3 text-slate-400">{cause.check}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 해결책 */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">해결책</h4>
                  <ul className="space-y-2">
                    {troubleshooting[selectedTrouble].solutions.map((sol, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-green-400 mt-1">✓</span>
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Future Tab */}
        {activeTab === 'future' && (
          <div className="space-y-8">
            {/* UWB 기술 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">🚀 UWB 기반 SMK 시스템</h2>

              {/* 비교 테이블 */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400">항목</th>
                      <th className="text-left py-3 px-4 text-orange-400">LF/UHF 방식</th>
                      <th className="text-left py-3 px-4 text-purple-400">UWB 방식</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technologyComparison.map((item, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-slate-400">{item.item}</td>
                        <td className="py-3 px-4 text-slate-300">{item.lfuhf}</td>
                        <td className="py-3 px-4 text-purple-300">{item.uwb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* UWB 장점 */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <div className="text-white font-medium">정밀 위치</div>
                  <div className="text-sm text-slate-400">~10cm 3D 정확도</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🛡️</div>
                  <div className="text-white font-medium">Relay 방어</div>
                  <div className="text-sm text-slate-400">ToF 기반 거리 검증</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="text-white font-medium">스마트폰 통합</div>
                  <div className="text-sm text-slate-400">iPhone U1, Galaxy UWB</div>
                </div>
              </div>
            </div>

            {/* 기술 로드맵 */}
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-xl font-bold text-white mb-6">📅 기술 로드맵</h2>
              <div className="flex flex-wrap justify-between gap-4">
                {[
                  { year: '2020', tech: 'LF/UHF', desc: '현재 주류' },
                  { year: '2023', tech: 'LF/UHF+UWB', desc: 'UWB 도입' },
                  { year: '2025', tech: 'UWB', desc: '표준화' },
                  { year: '2027', tech: 'UWB+BLE', desc: 'Fusion' },
                  { year: '2030', tech: 'UWB+5G', desc: '통합 모빌리티' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-4 text-center min-w-[120px]">
                    <div className="text-xl font-bold text-cyan-400">{item.year}</div>
                    <div className="text-white font-medium">{item.tech}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 차량 적용 사례 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4">🚗 UWB 적용 차량</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { brand: 'BMW', model: 'Digital Key Plus', year: '2022~' },
                  { brand: '현대/기아', model: 'Genesis GV60 UWB', year: '2022~' },
                  { brand: 'Apple', model: 'CarKey (iPhone)', year: '2020~' },
                  { brand: 'Samsung', model: 'Galaxy UWB', year: '2021~' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="text-lg font-bold text-white">{item.brand}</div>
                    <div className="text-sm text-cyan-400">{item.model}</div>
                    <div className="text-xs text-slate-400">{item.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/80 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-400 text-sm">
            <p>Learning Autopilot - SMK Antenna Guide</p>
            <p className="mt-2">스마트키 안테나의 모든 것, LF부터 UWB까지 완벽 정복</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
