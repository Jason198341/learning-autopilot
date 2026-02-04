'use client';

import Link from 'next/link';
import { useState } from 'react';

type TabType = 'overview' | 'basics' | 'patents' | 'materials' | 'swot' | 'cost' | 'glossary';

interface Patent {
  id: string;
  number: string;
  title: string;
  titleKr: string;
  inventors?: string;
  institution?: string;
  description: string;
  keyFeatures: string[];
  process: string[];
  processDetails?: { step: string; title: string; content: string; diagram?: string }[];
  scientificPrinciples?: {
    bondingPrinciple?: { problem: string; hydrophilic: string; hydrophobic: string; solution: string };
    strengthPrinciple?: { mechanism: string; comparison: { material: string; strength: string; note: string }[] };
  };
  nanofillerTechnology?: {
    nanoScale: { definition: string; comparison: string[] };
    gnpDescription: { fullName: string; structure: string; properties: string[] };
    coatingEffects: { effect: string; description: string }[];
    coatingConditions: { condition: string; value: string; explanation: string }[];
    ultrasonicDispersion: { problem: string; solution: string; mechanism: string[] };
  };
  benefits: string[];
  applications: string[];
}

const patents: Patent[] = [
  {
    id: 'patent1',
    number: 'IN202421056908A',
    title: 'Saccharum Munja + HDPE Composite',
    titleKr: '천연섬유 복합소재',
    inventors: '아리아 니틴 쿠마르, 싱 아파르나',
    institution: '인도 봄베이 공과대학교 (IIT Bombay)',
    description: '인도 자생 Saccharum Munja 천연섬유와 HDPE를 혼합한 친환경 자동차 내장재 복합소재',
    keyFeatures: [
      '천연섬유 강화 열가소성 복합재',
      '인도 현지 원료 활용',
      '재활용 가능한 친환경 소재',
      '기존 PP 대비 10-15% 경량화',
    ],
    process: [
      '[a] 원료 혼합 - 섬유 + HDPE 펠릿',
      '[b] 트윈 스크류 압출기 투입',
      '[c] 150~200°C에서 처리',
      '[d] 출구 영역으로 운반',
      '[e] 사출 성형기로 이송',
      '[f] 최종 성형 (45~55°C, 280~320 bar)',
    ],
    processDetails: [
      {
        step: 'a',
        title: '원료 혼합',
        content: '잘게 자른 사카룸 문자 섬유(3~6mm) + HDPE 펠릿(직경 3~5mm) 혼합',
        diagram: '펠릿: 작은 알갱이 형태 플라스틱 원료, 운반/보관/투입 편리'
      },
      {
        step: 'b',
        title: '트윈 스크류 압출기 투입',
        content: '2개의 스크류가 맞물려 회전하며 섬유와 플라스틱을 균일하게 혼합',
        diagram: '트윈 스크류 장점: 균일 혼합, 섬유 손상 최소화, 연속 생산'
      },
      {
        step: 'c',
        title: '150~200°C에서 처리',
        content: 'HDPE 녹는점(130~137°C) 이상, 섬유 분해온도(220~250°C) 이하의 적정 온도',
        diagram: '너무 낮으면 코팅 불량, 너무 높으면 섬유 손상'
      },
      {
        step: 'd',
        title: '출구 영역으로 운반',
        content: '스크류 회전으로 혼합물 이동, 공기 방울 제거, 균일 온도 유지',
        diagram: ''
      },
      {
        step: 'e',
        title: '사출 성형기로 이송',
        content: '녹은 플라스틱을 금형(틀)에 주입하여 원하는 형상 제작',
        diagram: '대시보드, 도어트림 등 복잡한 형상 제작 가능'
      },
      {
        step: 'f',
        title: '최종 성형 조건',
        content: '금형 온도 45~55°C, 사출 압력 280~320 bar (대기압의 280배)',
        diagram: '높은 압력: 금형 구석구석 충전, 기포 제거'
      },
    ],
    scientificPrinciples: {
      bondingPrinciple: {
        problem: '천연섬유(친수성) + HDPE(소수성) = 안 붙음!',
        hydrophilic: '친수성(Hydrophilic): 물을 좋아함. 셀룰로오스의 -OH기(수산기)가 물과 수소결합 형성',
        hydrophobic: '소수성(Hydrophobic): 물을 싫어함. HDPE는 C와 H만 있어 극성 없음',
        solution: '기계적 결합(Mechanical Interlocking): 트윈 스크류의 강한 전단력으로 섬유 표면 활성화, HDPE가 요철 사이로 침투'
      },
      strengthPrinciple: {
        mechanism: '응력 전달: 외부 힘 → 매트릭스(HDPE) → 섬유로 전달 → 섬유가 힘을 버팀',
        comparison: [
          { material: 'HDPE', strength: '20~30 MPa', note: '기준' },
          { material: '사카룸 문자 섬유', strength: '100~200 MPa', note: '5~10배 강함' },
          { material: '탄소섬유', strength: '3000~7000 MPa', note: '100~300배 강함' },
        ]
      }
    },
    benefits: ['탄소 발자국 30% 감소', '원가 5-10% 절감', '경량화로 연비 향상', 'ESG 경영 기여'],
    applications: ['도어 트림 패널', '시트 백 커버', '필러 트림', '트렁크 라이닝'],
  },
  {
    id: 'patent2',
    number: 'IN202521035215A',
    title: '3D Printing Eco-friendly Composite',
    titleKr: '3D 프린팅 친환경 복합소재',
    inventors: '니틴 쿠마르 아리아, 아파르나 싱',
    institution: '인도 봄베이 공과대학교 (IIT Bombay)',
    description: '천연섬유 강화 HDPE 기반 필라멘트를 사용한 FDM/FFF 방식 3D 프린팅 소재. HDPE의 수축/뒤틀림/기포 문제를 섬유 첨가로 해결',
    keyFeatures: [
      'HDPE + 천연섬유 복합 필라멘트',
      '수축률 감소 (4% → 1~2%)',
      '뒤틀림(Warping) 현저히 감소',
      '층간 접착력 향상',
    ],
    process: [
      '원료 배합: HDPE 60~95% + 섬유 5~40%',
      '트윈 스크류 압출기로 혼합',
      '필라멘트 압출 (1.75mm/2.85mm)',
      'FDM/FFF 3D 프린팅',
    ],
    processDetails: [
      {
        step: '1',
        title: '3D 프린팅(FDM) 원리',
        content: '필라멘트를 200~250°C 노즐로 가열 후 한 층씩 쌓아 3차원 물체 제작. 층 두께 0.1~0.3mm',
        diagram: '복잡한 형상도 금형 없이 제작 가능'
      },
      {
        step: '2',
        title: 'HDPE 3D 프린팅 문제점',
        content: '수축(Shrinkage): 냉각 시 2~4% 부피 감소 | 뒤틀림(Warping): 층별 냉각 속도 차이 | 기포(Void): 층 사이 공기 갇힘',
        diagram: '섬유 첨가로 이 3가지 문제 해결!'
      },
      {
        step: '3',
        title: '섬유의 해결 원리',
        content: '섬유는 냉각해도 수축 안 함 → HDPE 수축을 물리적으로 억제. 섬유가 층 사이를 가교(Bridge)하여 접착력 향상',
        diagram: ''
      },
      {
        step: '4',
        title: '필라멘트 제조',
        content: 'HDPE 펠릿 + 사카룸 문자 섬유 → 트윈 스크류 압출 → 1.75mm 또는 2.85mm 필라멘트 권취',
        diagram: '중량%: 100g 복합재 = HDPE 80g + 섬유 20g → 섬유 20 중량%'
      },
    ],
    scientificPrinciples: {
      bondingPrinciple: {
        problem: 'HDPE 3D 프린팅 시 수축/뒤틀림/기포 발생',
        hydrophilic: '문제1 수축: HDPE 냉각 시 부피 2~4% 감소 → 치수 불량',
        hydrophobic: '문제2 뒤틀림: 층별 냉각 속도 차이 → 모서리 들림',
        solution: '섬유 첨가: 섬유가 수축 억제 + 방향별 힘 분산 + 층간 가교'
      },
      strengthPrinciple: {
        mechanism: '섬유가 HDPE 수축을 물리적으로 막고, 층 사이를 연결(Bridge)하여 기포 감소',
        comparison: [
          { material: '순수 HDPE', strength: '수축률 2~4%', note: '문제 심각' },
          { material: 'HDPE + 섬유 복합재', strength: '수축률 1~2%', note: '50% 개선' },
          { material: '층간 접착력', strength: '30~50% 향상', note: '섬유 가교 효과' },
        ]
      }
    },
    benefits: ['개발 시간 80% 단축', '금형 비용 절감', '맞춤형 부품 생산', '소량 다품종 대응'],
    applications: ['시제품 부품', '맞춤형 내장 액세서리', '소량 생산 부품', 'A/S 교체 부품'],
  },
  {
    id: 'patent3',
    number: 'IN202321047360A',
    title: 'CFRP Bending Strength Enhancement',
    titleKr: 'CFRP 굽힘 강도 향상',
    inventors: '아파르나 싱, 알록 쿠마르 스리바스타바',
    institution: '인도 봄베이 공과대학교 (IIT Bombay)',
    description: '굽힘 피로 하중을 이용하여 탄소섬유 복합재의 굽힘 강도를 5~15% 향상시키는 혁신 기술',
    keyFeatures: [
      '탄소섬유: 철 대비 1/4 무게, 10~15배 강도',
      'CFRP = 탄소섬유 + 에폭시 매트릭스',
      '굽힘 피로 하중으로 강도 향상 (역발상!)',
      '미세 결함 감소 및 섬유 재배열',
    ],
    process: [
      '탄소섬유 제조: PAN → 산화 → 탄화(1000~1500°C) → 흑연화(2000~3000°C)',
      'CFRP 적층: 탄소섬유 + 에폭시 (섬유 50~70 부피%)',
      '굽힘 피로 하중 적용 (수만~수백만 회)',
      '경화 및 후처리',
    ],
    processDetails: [
      {
        step: '1',
        title: '탄소섬유 구조',
        content: '탄소 원자가 육각형 벌집(그래핀) 구조로 배열. 섬유 직경 5~10μm (머리카락의 1/10). 다발: 1K=1000가닥',
        diagram: '밀도 1.75~1.95g/cm³ (철의 1/4), 인장강도 3500~7000MPa (철의 10~15배)'
      },
      {
        step: '2',
        title: 'CFRP 구조',
        content: 'CFRP = Carbon Fiber Reinforced Polymer. 탄소섬유(힘 버팀) + 에폭시(고정, 힘 전달)',
        diagram: '에폭시: 3차원 그물 구조, 한번 굳으면 안 녹음 (열경화성)'
      },
      {
        step: '3',
        title: '굽힘 강도(Flexural Strength)',
        content: '3점 굽힘 시험으로 측정. 부러지기 직전까지 버틸 수 있는 최대 굽힘 응력 (MPa)',
        diagram: '응력 = 힘 ÷ 면적. 1MPa = 1mm²에 약 0.1kg 힘'
      },
      {
        step: '4',
        title: '핵심 발견: 피로 하중 = 강해짐!',
        content: '일반 금속: 피로 → 약해짐. CFRP: 적절한 피로 하중 → 강해짐! 섬유 재배열 + 미세결함 감소 + 잔류응력 해소',
        diagram: '굽힘 강도 5~15% 향상!'
      },
    ],
    scientificPrinciples: {
      bondingPrinciple: {
        problem: '기존 CFRP는 미세 결함(공극, 균열)으로 인한 강도 저하',
        hydrophilic: '탄소섬유 물성: 밀도 1.75~1.95g/cm³, 인장강도 3500~7000MPa, 탄성계수 230~540GPa',
        hydrophobic: '에폭시 물성: 3각형 에폭시기, DGEBA 기반, 경화제(아민)와 반응하여 3D 네트워크 형성',
        solution: '굽힘 피로 하중으로 섬유 재배열, 미세결함 감소, 계면 안정화, 잔류응력 해소'
      },
      strengthPrinciple: {
        mechanism: '반복 굽힘 하중(수만~수백만회) → 섬유가 하중 방향 재배열 → 미세결함 재분포 → 계면 안정화',
        comparison: [
          { material: '기존 CFRP 굽힘강도', strength: '800 MPa', note: '기준' },
          { material: '개선 CFRP 굽힘강도', strength: '1,040+ MPa', note: '30%+ 향상' },
          { material: '층간 전단강도', strength: '45→55+ MPa', note: '22%+ 향상' },
        ]
      }
    },
    nanofillerTechnology: {
      nanoScale: {
        definition: '나노(Nano) = 10억분의 1 (10⁻⁹). 1nm = 0.000000001m',
        comparison: [
          '원자 1개 크기: 약 0.1~0.3 nm',
          '나노입자: 1~100 nm',
          '세포: 약 10 μm (10,000 nm)',
          '머리카락 두께: 약 80,000 nm (80 μm)',
        ]
      },
      gnpDescription: {
        fullName: 'GNP = Graphene Nanoplatelet (그래핀 나노플레이트)',
        structure: '그래핀(탄소 원자 1층 시트)이 수십 층 쌓인 판상 구조. 두께 1~100nm, 넓이 수 μm',
        properties: [
          '강도: 강철의 200배',
          '열전도율: 구리의 10배',
          '전기전도율: 실리콘의 100배',
          '두께: 원자 수십 개 두께 (0.34nm × 수십 층)',
        ]
      },
      coatingEffects: [
        { effect: '표면적 증가', description: 'GNP가 섬유 표면에 나노 돌기 형성 → 에폭시와 접촉 면적 증가 → 접착력(계면 결합력) 향상' },
        { effect: '균열 진행 방지', description: 'Crack Deflection: GNP가 균열 경로를 막음 → 균열 에너지 분산' },
        { effect: '열전도성 향상', description: 'GNP의 높은 열전도율 → 경화 시 열 균일 분포 → 품질 향상' },
      ],
      coatingConditions: [
        { condition: 'GNP 농도', value: '0.2~0.5 wt%', explanation: '너무 많으면 뭉침, 너무 적으면 효과 없음' },
        { condition: '유기 용매', value: '100~500 ml', explanation: '아세톤, 에탄올 등' },
        { condition: '초음파 처리', value: '3 kHz, 250W, 25~35분', explanation: 'GNP를 골고루 분산시키기 위해' },
      ],
      ultrasonicDispersion: {
        problem: 'GNP는 반데르발스 인력으로 서로 뭉치려는 성질이 강함 (뭉치면 효과 없음)',
        solution: '초음파로 캐비테이션(기포 붕괴) 유발 → 충격파가 GNP 뭉침을 분리',
        mechanism: [
          '1. 초음파 → 용매에서 미세 기포 생성',
          '2. 기포가 급격히 붕괴 (캐비테이션)',
          '3. 붕괴 시 강력한 충격파 발생 (국소 5,000K, 500기압)',
          '4. 충격파가 GNP 뭉침을 분리 → 균일 분산',
        ]
      }
    },
    benefits: ['굽힘 강도 30%+ 향상', '구조 부품 적용 가능', '안전성 향상', '설계 자유도 증가', 'GNP 코팅으로 계면 결합력 35% 향상'],
    applications: ['시트 프레임', '대시보드 구조재', 'B-필러 보강재', '배터리 케이스'],
  },
  {
    id: 'patent4',
    number: 'IN202321066950A',
    title: 'HL+VARTM Hybrid Manufacturing',
    titleKr: '고급 CFRP 제조 방법 (부분 HL + 즉시 VARTM)',
    inventors: '자토투 프라빈쿠마르, 아파르나 싱',
    institution: '인도 봄베이 공과대학교 (IIT Bombay)',
    description: '기존 Hand Layup과 VARTM의 장점을 결합한 하이브리드 공법. 부분 수지 도포 후 즉시 진공 적용으로 기포 감소 및 작업시간 단축',
    keyFeatures: [
      '부분 핸드 레이업: 과다 수지 문제 해결',
      '즉시 VARTM: 굳기 전 진공 적용',
      '섬유 체적 분율 50-60% 달성',
      '기공률 1% 미만',
      '두께 균일성 ±5%',
    ],
    process: [
      '수지 혼합물 준비 (에폭시:경화제 = 100:38)',
      '진공 챔버에서 탈기 (기포 제거)',
      '부분 핸드 레이업 (2~12층, 롤러로 살짝만 도포)',
      '즉시 VARTM (80~150 kPa 진공)',
      '경화 (상온 24h + 80~120°C에서 1~3h)',
    ],
    processDetails: [
      {
        step: '1',
        title: '기존 제조 방법: 핸드 레이업 (HL)',
        content: '손으로 수지를 바르며 섬유를 적층. 장점: 간단, 저렴, 복잡 형상 가능. 단점: 기포 발생, 품질 불균일, 수지 과다',
        diagram: '섬유 체적 분율 30~40%, 기공률 3~5%'
      },
      {
        step: '2',
        title: '기존 제조 방법: VARTM',
        content: '진공으로 수지를 섬유에 주입. 장점: 기포 감소, 균일 품질, 섬유 함량 높음. 단점: 장비 필요, 함침 시간 필요',
        diagram: '섬유 체적 분율 50~60%, 기공률 <1%'
      },
      {
        step: '3',
        title: '프리프레그 + 오토클레이브',
        content: '미리 수지가 묻은 섬유(프리프레그)를 고온/고압 가열(오토클레이브). 최고 품질이지만 매우 비쌈 (항공기, 고급 스포츠카용)',
        diagram: ''
      },
      {
        step: '4',
        title: '특허 기술: 부분 HL + 즉시 VARTM',
        content: '핵심: 완전히 적시지 않고 부분적으로만 수지 도포 → 핸드 레이업 후 바로 진공 적용 (수지 굳기 전) → 기포 제거 + 완전 침투',
        diagram: '기포 감소(HL 보완) + 작업시간 단축(VARTM 보완)'
      },
    ],
    scientificPrinciples: {
      bondingPrinciple: {
        problem: 'HL: 수지 과다 + 기포 / VARTM: 시간 오래 걸림',
        hydrophilic: '진공 조건: 80~150 kPa, 상온 24시간 경화',
        hydrophobic: '추가 경화: 80~120°C에서 1~3시간 (완전 경화)',
        solution: '부분 도포 → 즉시 진공 = 두 공법의 장점만 취함'
      },
      strengthPrinciple: {
        mechanism: '부분 수지 도포로 과다 수지 방지 + 즉시 진공으로 기포 제거 + 섬유 사이 완전 침투',
        comparison: [
          { material: 'Hand Layup Only', strength: '섬유 30~40%', note: '기공률 3~5%' },
          { material: 'VARTM Only', strength: '섬유 50~60%', note: '시간 오래' },
          { material: 'HL+VARTM 하이브리드', strength: '섬유 50~60%', note: '시간 20% 단축' },
        ]
      }
    },
    benefits: ['대형 부품 일체 성형', '품질 균일성 확보', '생산성 20% 향상', '설비 투자 최소화', '기포 최소화 (<1%)'],
    applications: ['루프 패널', '후드 인너', '트렁크 리드', '대형 트림 부품', '배터리 하우징'],
  },
];

// 기계적 물성 비교
const mechanicalProperties = [
  { material: 'ABS', tensile: '40~50', flexural: '70~80', impact: '15~25', modulus: '2.0~2.5' },
  { material: 'PP', tensile: '25~35', flexural: '40~50', impact: '3~8', modulus: '1.2~1.5' },
  { material: 'PP-GF30', tensile: '70~100', flexural: '100~140', impact: '8~12', modulus: '5~7' },
  { material: 'IIT 사카룸/HDPE', tensile: '35~50', flexural: '50~70', impact: '10~20', modulus: '2~4' },
  { material: 'IIT CFRP', tensile: '500~800', flexural: '600~1000', impact: '30~50', modulus: '50~80' },
];

// 열적 특성 비교
const thermalProperties = [
  { material: 'ABS', hdt: '85~100', continuous: '70~80', expansion: '7~10' },
  { material: 'PP', hdt: '55~65', continuous: '80~100', expansion: '10~15' },
  { material: 'PP-GF30', hdt: '130~150', continuous: '100~120', expansion: '3~5' },
  { material: 'IIT 사카룸/HDPE', hdt: '80~100', continuous: '70~90', expansion: '8~12' },
  { material: 'IIT CFRP', hdt: '150~200', continuous: '120~150', expansion: '0.5~2' },
];

// 내구성 비교 (별점)
const durabilityProperties = [
  { material: 'ABS', scratch: 3, heat: 3, chemical: 3, weather: 2, uv: 2 },
  { material: 'PP', scratch: 2, heat: 4, chemical: 5, weather: 3, uv: 3 },
  { material: 'PP-GF30', scratch: 4, heat: 4, chemical: 5, weather: 4, uv: 3 },
  { material: 'IIT 사카룸/HDPE', scratch: 3, heat: 3, chemical: 4, weather: 3, uv: 3 },
  { material: 'IIT CFRP', scratch: 5, heat: 5, chemical: 4, weather: 5, uv: 4 },
];

// 환경성 비교
const environmentalProperties = [
  { material: 'ABS', source: '석유 100%', recyclable: '가능', biodegradable: '불가', co2: '높음', grade: 2 },
  { material: 'PP', source: '석유 100%', recyclable: '우수', biodegradable: '불가', co2: '중간', grade: 3 },
  { material: 'PP-GF', source: '석유+유리', recyclable: '어려움', biodegradable: '불가', co2: '높음', grade: 2 },
  { material: 'IIT 사카룸/HDPE', source: '석유+천연', recyclable: '가능', biodegradable: '부분', co2: '낮음', grade: 4 },
  { material: 'IIT CFRP', source: '석유', recyclable: '매우 어려움', biodegradable: '불가', co2: '매우 높음', grade: 2 },
];

// 현재 자동차 내장재 종류
const currentMaterials = [
  { name: 'ABS', fullName: '아크릴로니트릴-부타디엔-스티렌', usage: '대시보드, 도어트림, 콘솔 등 대부분의 플라스틱 부품', note: '가장 널리 사용됨' },
  { name: 'PP', fullName: '폴리프로필렌', usage: '도어트림, 필러트림, 트렁크 내장재', note: 'ABS보다 저렴, 재활용 용이' },
  { name: 'PP-GF', fullName: '유리섬유 강화 폴리프로필렌', usage: '도어 캐리어, 인스트루먼트 패널 구조물', note: 'PP보다 강도 높음' },
  { name: 'PP-TD', fullName: '탈크 충전 폴리프로필렌', usage: '에어컨 덕트, 필러트림 등', note: '치수 안정성 우수' },
  { name: 'PVC', fullName: '폴리염화비닐', usage: '대시보드 표피, 도어트림 표피', note: '부드러운 촉감, 가죽 느낌' },
  { name: 'PU', fullName: '폴리우레탄', usage: '대시보드 패드, 스티어링 휠, 시트 쿠션', note: '쿠션감, 충격 흡수' },
  { name: '천연섬유 복합재', fullName: '황마/아마/대마 + PP', usage: '도어트림 기재, 시트백 등', note: 'BMW, Mercedes 등에서 부분 적용' },
];

// 기존 materialComparison (하위호환)
const materialComparison = [
  { material: 'PP (폴리프로필렌)', density: '0.90', tensile: '25-35', usage: '도어 트림, 대시보드', pros: '저가, 가공 용이', cons: '낮은 강도' },
  { material: 'ABS', density: '1.04', tensile: '40-50', usage: '콘솔, 트림', pros: '우수한 충격 강도', cons: '내열성 한계' },
  { material: 'PC/ABS', density: '1.10', tensile: '55-65', usage: '계기판', pros: '고강도, 내열', cons: '고가' },
  { material: 'IIT 천연섬유 복합재', density: '0.85', tensile: '35-45', usage: '내장재 전반', pros: '친환경, 경량', cons: '검증 필요' },
  { material: 'IIT CFRP', density: '1.55', tensile: '500+', usage: '구조 부품', pros: '초고강도, 경량', cons: '고가' },
];

// 비용 비교
const costComparison = [
  { material: 'ABS', rawPrice: '1.8~2.5', processingCost: '중간', grade: 3 },
  { material: 'PP', rawPrice: '1.2~1.5', processingCost: '낮음', grade: 5 },
  { material: 'PP-GF30', rawPrice: '1.8~2.2', processingCost: '중간', grade: 4 },
  { material: 'IIT 사카룸/HDPE', rawPrice: '1.0~1.5', processingCost: '중간', grade: 5 },
  { material: 'IIT CFRP', rawPrice: '15~30', processingCost: '높음', grade: 1 },
];

// 섬유 원료 가격 비교
const fiberPrices = [
  { fiber: '사카룸 문자 (인도)', price: '$0.1~0.3/kg', note: '매우 저렴' },
  { fiber: '아마/황마', price: '$0.5~1/kg', note: '저렴' },
  { fiber: '유리섬유', price: '$1~2/kg', note: '중간' },
  { fiber: '탄소섬유', price: '$15~30/kg', note: '고가' },
];

// 부품별 적용 가능성 - 사카룸/HDPE
const partApplicationSacharum = [
  { part: '도어트림 기재', current: 'PP-GF', rating: 5, note: '최적 적용처' },
  { part: '필러트림', current: 'ABS/PP', rating: 4, note: '적용 가능' },
  { part: '트렁크 트림', current: 'PP', rating: 5, note: '최적 적용처' },
  { part: '패키지 트레이', current: 'PP-GF', rating: 4, note: '적용 가능' },
  { part: '시트백 보드', current: 'PP/천연섬유', rating: 5, note: '이미 유사재 사용' },
  { part: '헤드라이너 기재', current: 'PP/PU', rating: 3, note: '추가 검증 필요' },
  { part: '대시보드 기재', current: 'PP-GF', rating: 3, note: '열변형 주의' },
  { part: '에어덕트', current: 'PP-TD', rating: 2, note: '치수 안정성' },
];

// 부품별 적용 가능성 - CFRP
const partApplicationCFRP = [
  { part: '고급차 센터콘솔', current: '금속/플라스틱', rating: 5, note: '프리미엄 감성' },
  { part: '스포츠카 내장', current: '가죽/금속', rating: 5, note: '경량화+고급화' },
  { part: '시트 프레임', current: '금속', rating: 4, note: '경량화 효과' },
  { part: '스티어링 휠 코어', current: '금속', rating: 3, note: '충돌 안전 검증' },
  { part: '대시보드 구조물', current: '금속/PP-GF', rating: 3, note: '비용 대비 효과' },
];

// 연필 경도 비교
const pencilHardness = [
  { material: 'ABS', hardness: 'F ~ H' },
  { material: 'PP', hardness: 'B ~ F' },
  { material: 'HDPE', hardness: 'B ~ HB' },
  { material: '사카룸/HDPE', hardness: 'HB ~ H' },
  { material: 'CFRP', hardness: '2H ~ 4H' },
];

// 자동차 내부 온도 분포
const carTemperatures = [
  { location: '대시보드', temp: '90~110°C', note: '최고온, 직사광선 직접 노출' },
  { location: '센터콘솔', temp: '70~85°C', note: '일부 직사광선 노출' },
  { location: '시트', temp: '50~70°C', note: '간접 열 영향' },
  { location: '바닥', temp: '40~50°C', note: '상대적 저온' },
];

// 오염 저항성
const stainResistance = [
  { material: 'ABS', water: '양호', oil: '보통', cleaning: '양호' },
  { material: 'PP', water: '우수', oil: '양호', cleaning: '우수' },
  { material: 'HDPE', water: '우수', oil: '양호', cleaning: '우수' },
  { material: '사카룸/HDPE', water: '양호', oil: '양호', cleaning: '양호' },
  { material: 'CFRP', water: '우수', oil: '양호', cleaning: '보통' },
];

// 오염원 종류
const stainSources = [
  { source: '음료/음식', examples: '커피, 콜라, 과자', issue: '당분이 표면에 달라붙음' },
  { source: '인체 유래물', examples: '땀, 피지, 핸드크림', issue: '유성 성분이 플라스틱 손상' },
  { source: '화학물질', examples: '세척제, 광택제, 방향제', issue: '강한 용제는 표면 손상' },
  { source: '먼지/흙', examples: '미세먼지, 황사', issue: '표면 요철에 축적' },
];

// 사카룸/HDPE SWOT
const sacharumSwot = {
  strengths: ['매우 저렴한 원료', '친환경 (부분 생분해)', '경량화 효과', '기존 설비 활용 가능', '인도 현지 조달 용이'],
  weaknesses: ['내열성 한계 (100°C)', '흡습성 (수분 흡수)', '냄새 가능성', '물성 편차 가능성', '장기 내구성 미검증'],
  opportunities: ['환경 규제 강화 추세', 'ESG 경영 확대', '인도 시장 확대', '저가 차종 수요'],
  threats: ['다른 천연섬유와 경쟁', '원료 공급 불안정성', '품질 관리 어려움', '소비자 인식 부족'],
};

// CFRP SWOT
const cfrpSwot = {
  strengths: ['최고 수준의 강도', '탁월한 경량화 효과', '우수한 내열성', '프리미엄 이미지', '피로 강도 향상 특허'],
  weaknesses: ['높은 원료 비용', '복잡한 제조 공정', '재활용 어려움', '숙련 기술자 필요', '손상 검출 어려움'],
  opportunities: ['전기차 경량화 수요', '고급차 시장 성장', '양산 기술 발전', '하이브리드 공법 관심'],
  threats: ['저가 탄소섬유 경쟁', '대체 경량소재 등장', '탄소섬유 가격 변동', '환경 규제 (재활용)'],
};

// 양산성 평가
const massProductionEval = [
  { criteria: '원료 조달 용이성', sacharum: 5, cfrp: 3 },
  { criteria: '제조 설비 호환성', sacharum: 4, cfrp: 2 },
  { criteria: '생산 속도', sacharum: 5, cfrp: 2 },
  { criteria: '품질 일관성', sacharum: 3, cfrp: 4 },
  { criteria: '작업자 숙련도 요구', sacharum: 4, cfrp: 2 },
  { criteria: '후가공 용이성', sacharum: 4, cfrp: 3 },
];

// 비용 구조 분석
const costBreakdown = {
  sacharum: {
    hdpe: { ratio: '80%', price: 1.2, cost: 0.96 },
    fiber: { ratio: '20%', price: 0.2, cost: 0.04 },
    total: 1.00,
    vs: 'PP-GF30 $1.80~2.20/kg',
    saving: '45~55%',
  },
  cfrp: {
    carbonFiber: { ratio: '60%', price: 25, cost: 15.0 },
    epoxy: { ratio: '40%', price: 8, cost: 3.2 },
    gnp: { price: 0.5, cost: 0.5 },
    total: 18.70,
    vs: '알루미늄 $2~3/kg',
    note: '원료비는 비싸지만 무게 대비 강도 월등',
  },
};

// 최종 결론
const finalConclusions = {
  sacharum: {
    recommended: ['도어트림 기재', '트렁크 트림', '시트백 보드', '패키지 트레이'],
    cautions: ['고온 노출 부위 (대시보드 상단)', '장기 내구성 검증 필요', '흡습 방지 표면 처리 필수'],
    benefits: ['원료비 45~55% 절감', '무게 10~20% 감소', '친환경 이미지 제고'],
  },
  cfrp: {
    recommended: ['프리미엄/스포츠 차종 내장재', '경량화가 핵심인 전기차 부품', '고급 센터콘솔, 도어 트림'],
    cautions: ['양산 비용 검토 필수', '재활용 전략 수립', '손상 검출/수리 프로토콜'],
    benefits: ['무게 30~50% 감소', '프리미엄 감성 향상', '기술 차별화'],
  },
  roadmap: [
    { step: '1단계', desc: '사카룸/HDPE 시작품 제작 및 물성 평가' },
    { step: '2단계', desc: '실차 장착 테스트 (도어트림 등)' },
    { step: '3단계', desc: '양산 조건 최적화' },
    { step: '4단계', desc: '인도 현지 생산 라인 구축' },
  ],
};

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
    { id: 'basics', label: '기초과학', icon: '⚛️' },
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

        {/* Basics Tab - 기초과학 */}
        {activeTab === 'basics' && (
          <div className="space-y-8">
            {/* 자동차 내장재란? */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">1.1 자동차 내장재란?</h2>
              <p className="text-slate-300 mb-6">
                자동차 <span className="text-indigo-400 font-semibold">내장재(Interior Materials)</span>는 차량 내부에 사용되는 모든 재료를 말합니다.
              </p>
              <div className="bg-slate-900/50 rounded-xl p-6 font-mono text-sm">
                <div className="text-indigo-400 mb-4 text-center font-bold">자동차 내장재 종류</div>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center gap-3"><span className="text-cyan-400">•</span> 대시보드 (Dashboard) - 계기판 주변 플라스틱</div>
                  <div className="flex items-center gap-3"><span className="text-cyan-400">•</span> 도어트림 (Door Trim) - 문 안쪽 패널</div>
                  <div className="flex items-center gap-3"><span className="text-cyan-400">•</span> 센터콘솔 (Center Console) - 기어박스 주변</div>
                  <div className="flex items-center gap-3"><span className="text-cyan-400">•</span> 시트 (Seat) - 좌석 프레임 및 커버</div>
                  <div className="flex items-center gap-3"><span className="text-cyan-400">•</span> 헤드라이너 (Headliner) - 천장 내장재</div>
                  <div className="flex items-center gap-3"><span className="text-cyan-400">•</span> 필러트림 (Pillar Trim) - 기둥 부분 커버</div>
                  <div className="flex items-center gap-3"><span className="text-cyan-400">•</span> 카페트 (Carpet) - 바닥재</div>
                </div>
              </div>
            </div>

            {/* 왜 새로운 내장재가 필요한가? */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">1.2 왜 새로운 내장재가 필요한가?</h2>
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">현재 자동차 산업의 3가지 도전 과제</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">도전 과제</th>
                      <th className="text-left py-3 px-4 text-slate-400">설명</th>
                      <th className="text-left py-3 px-4 text-slate-400">IIT 기술의 해결책</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-orange-400 font-medium">환경 규제 강화</td>
                      <td className="py-3 px-4 text-slate-300">플라스틱 사용 제한, 재활용 의무화</td>
                      <td className="py-3 px-4 text-green-400">천연섬유 복합재 (바이오 기반)</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-orange-400 font-medium">경량화 요구</td>
                      <td className="py-3 px-4 text-slate-300">전기차 시대, 배터리 무게 보상 필요</td>
                      <td className="py-3 px-4 text-green-400">가벼우면서 강한 복합재</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-orange-400 font-medium">비용 절감</td>
                      <td className="py-3 px-4 text-slate-300">원자재 가격 상승 대응</td>
                      <td className="py-3 px-4 text-green-400">저렴한 천연섬유 활용</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 원자와 분자 */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">2.1 원자와 분자 - 모든 물질의 시작점</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-indigo-400 mb-4">원자(Atom)란?</h3>
                  <p className="text-slate-300 mb-4">원자는 물질을 구성하는 가장 작은 단위입니다.</p>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-xs">
                    <pre className="text-center text-slate-300">
{`        ● ● ●      ← 전자(Electron): 음(-)전하
       ●     ●        핵 주위를 빠르게 돌고 있음
      ●   ◉   ●
       ●     ●     ◉ = 원자핵(Nucleus)
        ● ● ●          • 양성자(+): 양전하
                       • 중성자(0): 전하 없음`}
                    </pre>
                  </div>
                  <div className="mt-4 text-sm text-slate-400">
                    <p className="font-semibold text-cyan-400 mb-2">비유로 이해하기:</p>
                    <ul className="space-y-1">
                      <li>• 원자핵 = 태양</li>
                      <li>• 전자 = 태양 주위를 도는 행성들</li>
                      <li>• 원자 크기가 축구장이면, 원자핵은 축구공!</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-4">분자(Molecule)란?</h3>
                  <p className="text-slate-300 mb-4">분자는 원자들이 결합해서 만들어진 것입니다.</p>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-center text-slate-400 mb-2">물 분자 (H₂O)의 예:</div>
                    <pre className="text-center text-slate-300">
{`    H (수소 원자)
     \\
      O (산소 원자)
     /
    H (수소 원자)`}
                    </pre>
                  </div>
                  <div className="mt-4 p-3 bg-purple-500/10 rounded-lg">
                    <p className="text-purple-300 text-sm">→ 수소 2개 + 산소 1개가 결합 = 물 분자 1개</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 고분자 */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">2.2 고분자(Polymer) - 플라스틱의 정체</h2>

              <p className="text-slate-300 mb-6">
                <span className="text-indigo-400 font-semibold">고분자(高分子, Polymer)</span>는 &quot;높을 고(高)&quot; + &quot;분자(分子)&quot;로, 아주 큰 분자라는 뜻입니다.
              </p>

              <div className="bg-slate-900/50 rounded-xl p-6 font-mono text-sm mb-6">
                <div className="text-center text-indigo-400 mb-4 font-bold">고분자의 구조</div>
                <div className="space-y-4 text-slate-300">
                  <div>
                    <span className="text-cyan-400">단량체(Monomer)</span> = 작은 블록 하나
                    <div className="mt-1 ml-4">■</div>
                  </div>
                  <div>
                    <span className="text-cyan-400">고분자(Polymer)</span> = 블록이 수천~수만 개 연결된 것
                    <div className="mt-1 ml-4">■-■-■-■-■-■-■-■-■-■-■-■-■-■-■-■...</div>
                  </div>
                  <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg">
                    <p className="text-indigo-300">🧱 레고 블록을 상상해보세요!</p>
                    <p className="text-slate-400 text-xs mt-1">블록 1개 = 단량체 | 블록 수천 개로 만든 거대한 성 = 고분자</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-indigo-400 mb-4">고분자의 종류</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                  <div className="font-semibold text-green-400 mb-2">열가소성 (Thermoplastic)</div>
                  <p className="text-slate-300 text-sm mb-2">열을 가하면 녹음, 다시 굳힘 가능</p>
                  <div className="text-xs text-slate-500">예시: PE, PP, HDPE</div>
                </div>
                <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
                  <div className="font-semibold text-orange-400 mb-2">열경화성 (Thermoset)</div>
                  <p className="text-slate-300 text-sm mb-2">한 번 굳으면 다시 녹지 않음</p>
                  <div className="text-xs text-slate-500">예시: 에폭시, 페놀</div>
                </div>
              </div>
            </div>

            {/* HDPE 완전 해부 */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">2.3 HDPE (고밀도 폴리에틸렌) 완전 해부</h2>

              <div className="mb-6">
                <p className="text-lg text-cyan-400 font-semibold">HDPE = High-Density Polyethylene = 고밀도 폴리에틸렌</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-400 mb-4">LDPE (저밀도)</h3>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-xs">
                    <pre className="text-slate-300">
{`─────┬─────┬─────┬─────
     │     │     │    ← 가지(branch)가 많음
─────┴─────┴─────┴─────`}
                    </pre>
                  </div>
                  <p className="text-slate-400 text-sm mt-3">→ 분자들이 느슨하게 배열 → 밀도가 낮음, 부드러움</p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">HDPE (고밀도)</h3>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-xs">
                    <pre className="text-slate-300">
{`─────────────────────────  ← 가지가 거의 없음
─────────────────────────
─────────────────────────`}
                    </pre>
                  </div>
                  <p className="text-slate-400 text-sm mt-3">→ 분자들이 촘촘하게 배열 → 밀도가 높음, 단단함</p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">HDPE의 화학식</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-2">에틸렌(Ethylene) 단량체:</div>
                    <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-xs">
                      <pre className="text-slate-300 text-center">
{`H   H
│   │
C = C   ← 탄소(C) 2개가 이중결합
│   │     수소(H) 4개가 붙어있음
H   H`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">폴리에틸렌(Polyethylene):</div>
                    <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-xs">
                      <pre className="text-slate-300 text-center">
{`H H   H H   H H   H H
│ │   │ │   │ │   │ │
─C─C─ ─C─C─ ─C─C─ ─C─C─ ...
│ │   │ │   │ │   │ │
H H   H H   H H   H H`}
                      </pre>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg">
                  <p className="text-cyan-300 text-sm">→ 에틸렌이 수천~수만 개 연결! 화학식: (C₂H₄)n (n = 10,000~100,000)</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-cyan-400 mb-4">HDPE의 물리적 특성</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">⚖️</div>
                  <div className="text-xs text-slate-400">밀도</div>
                  <div className="text-cyan-400 font-bold">0.94~0.97</div>
                  <div className="text-xs text-slate-500">g/cm³</div>
                  <div className="text-xs text-slate-400 mt-1">물보다 가벼워서 물에 뜸</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🌡️</div>
                  <div className="text-xs text-slate-400">녹는점</div>
                  <div className="text-cyan-400 font-bold">130~137</div>
                  <div className="text-xs text-slate-500">°C</div>
                  <div className="text-xs text-slate-400 mt-1">끓는 물에선 안 녹음</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">💪</div>
                  <div className="text-xs text-slate-400">인장강도</div>
                  <div className="text-cyan-400 font-bold">20~30</div>
                  <div className="text-xs text-slate-500">MPa</div>
                  <div className="text-xs text-slate-400 mt-1">당기는 힘에 버팀</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🔷</div>
                  <div className="text-xs text-slate-400">결정화도</div>
                  <div className="text-cyan-400 font-bold">70~80</div>
                  <div className="text-xs text-slate-500">%</div>
                  <div className="text-xs text-slate-400 mt-1">분자 배열 규칙적 = 단단함</div>
                </div>
              </div>
            </div>

            {/* 섬유의 과학 */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">2.4 섬유(Fiber)의 과학</h2>

              <p className="text-slate-300 mb-6">섬유는 <span className="text-green-400">가늘고 긴 실 모양</span>의 물질입니다.</p>

              {/* 섬유 분류 트리 */}
              <div className="bg-slate-900/50 rounded-xl p-6 font-mono text-sm mb-6">
                <div className="text-center text-green-400 mb-4 font-bold">섬유의 분류</div>
                <pre className="text-slate-300 text-xs overflow-x-auto">
{`섬유(Fiber)
├── 천연섬유 (Natural Fiber)
│   ├── 식물성: 면(Cotton), 마(Hemp), 사카룸 문자
│   ├── 동물성: 양모(Wool), 실크(Silk)
│   └── 광물성: 석면(Asbestos) - 현재 금지
│
└── 인조섬유 (Synthetic Fiber)
    ├── 합성섬유: 나일론, 폴리에스터, 탄소섬유
    └── 재생섬유: 레이온, 텐셀`}
                </pre>
              </div>

              {/* 사카룸 문자 상세 */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20 mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-4">🌿 사카룸 문자(Saccharum Munja) 섬유</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-slate-400 mb-2">다른 이름</div>
                    <p className="text-slate-300 text-sm mb-4">카나(Kana), 사르칸다(Sarkanda), 문자(Munja)</p>

                    <div className="text-sm text-slate-400 mb-2">원산지</div>
                    <p className="text-slate-300 text-sm mb-4">인도, 파키스탄, 네팔 등 남아시아 지역</p>

                    <div className="text-sm text-slate-400 mb-2">특징</div>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• 사탕수수과(Saccharum) 식물의 일종</li>
                      <li>• 키가 2~4m까지 자라는 다년생 풀</li>
                      <li>• 인도에서 지붕, 바구니, 밧줄 만드는 데 전통적 사용</li>
                      <li>• 매우 저렴하고 풍부함 (잡초처럼 자람)</li>
                      <li>• 연간 수확 가능 (지속 가능한 자원)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">화학 성분</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">셀룰로오스(Cellulose)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{width: '50%'}}></div>
                          </div>
                          <span className="text-green-400 text-xs">45~55%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">헤미셀룰로오스</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{width: '22%'}}></div>
                          </div>
                          <span className="text-emerald-400 text-xs">20~25%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">리그닌(Lignin)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full" style={{width: '17%'}}></div>
                          </div>
                          <span className="text-amber-400 text-xs">15~20%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">기타 (왁스, 펙틴)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-500 rounded-full" style={{width: '7%'}}></div>
                          </div>
                          <span className="text-slate-400 text-xs">5~10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 셀룰로오스 분자 구조 */}
              <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">셀룰로오스의 분자 구조</h3>
                <p className="text-slate-300 text-sm mb-4">셀룰로오스(Cellulose) = 식물 세포벽의 주성분</p>
                <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                  <pre className="text-slate-300 text-center">
{`    CH₂OH           CH₂OH           CH₂OH
       │              │              │
   ┌───O───┐     ┌───O───┐     ┌───O───┐
   │       │     │       │     │       │
────O       O─────O       O─────O       O────
   │       │     │       │     │       │
   └───────┘     └───────┘     └───────┘
     │  │          │  │          │  │
     OH OH         OH OH         OH OH`}
                  </pre>
                </div>
                <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg">
                  <p className="text-cyan-300 text-sm">→ 포도당(Glucose) 분자가 수천 개 연결된 것</p>
                  <p className="text-cyan-300 text-sm">→ 화학식: (C₆H₁₀O₅)n</p>
                  <p className="text-slate-400 text-xs mt-1">→ 나무, 종이, 면의 주성분과 동일!</p>
                </div>
              </div>

              {/* 섬유 종류별 비교 카드 */}
              <h3 className="text-lg font-semibold text-white mb-4">섬유 종류별 비교</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                  <div className="text-2xl mb-2">🌿</div>
                  <h4 className="font-semibold text-green-400 mb-2">천연섬유</h4>
                  <p className="text-sm text-slate-300 mb-2">황(Saccharum Munja), 대마, 아마</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">강도: 중간</span>
                    <span className="text-green-400">가격: 저가</span>
                  </div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/20">
                  <div className="text-2xl mb-2">🔷</div>
                  <h4 className="font-semibold text-blue-400 mb-2">유리섬유</h4>
                  <p className="text-sm text-slate-300 mb-2">E-glass</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">강도: 높음</span>
                    <span className="text-blue-400">가격: 중가</span>
                  </div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/20">
                  <div className="text-2xl mb-2">⬛</div>
                  <h4 className="font-semibold text-purple-400 mb-2">탄소섬유</h4>
                  <p className="text-sm text-slate-300 mb-2">T700, T800</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">강도: 매우 높음</span>
                    <span className="text-purple-400">가격: 고가</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 복합재료의 원리 */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">2.5 복합재료(Composite)의 원리</h2>

              <p className="text-slate-300 mb-6">
                <span className="text-purple-400 font-semibold">복합재료</span>는 두 가지 이상의 서로 다른 재료를 합쳐서 각각의 <span className="text-red-400">단점은 줄이고</span> <span className="text-green-400">장점은 살린</span> 새로운 재료입니다.
              </p>

              {/* 복합재료 구조 다이어그램 */}
              <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                <div className="text-center text-purple-400 mb-4 font-bold">복합재료의 기본 구조</div>
                <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-4">
                  <pre className="text-slate-300 text-center">
{`═══════════════════════════════════  ← 섬유(강화재)
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ← 매트릭스
═══════════════════════════════════  ← 섬유(강화재)
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ← 매트릭스
═══════════════════════════════════  ← 섬유(강화재)`}
                  </pre>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      <span className="font-semibold text-blue-400">매트릭스(Matrix)</span>
                    </div>
                    <p className="text-slate-300 text-sm">섬유를 감싸고 지지하는 재료</p>
                    <p className="text-slate-400 text-xs mt-1">• 플라스틱(HDPE, 에폭시 등)</p>
                    <p className="text-slate-400 text-xs">• 힘을 섬유로 전달하는 역할</p>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span className="font-semibold text-orange-400">강화재(Reinforcement)</span>
                    </div>
                    <p className="text-slate-300 text-sm">실제로 힘을 버티는 재료</p>
                    <p className="text-slate-400 text-xs mt-1">• 섬유(유리섬유, 탄소섬유, 천연섬유)</p>
                    <p className="text-slate-400 text-xs">• 복합재료의 강도를 결정</p>
                  </div>
                </div>
              </div>

              {/* 일상생활의 복합재료 예시 테이블 */}
              <h3 className="text-lg font-semibold text-pink-400 mb-4">일상생활의 복합재료 예시</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">복합재료</th>
                      <th className="text-left py-3 px-4 text-blue-400 font-medium">매트릭스</th>
                      <th className="text-left py-3 px-4 text-orange-400 font-medium">강화재</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">용도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">🏗️ 철근 콘크리트</td>
                      <td className="py-3 px-4 text-slate-300">콘크리트</td>
                      <td className="py-3 px-4 text-slate-300">철근</td>
                      <td className="py-3 px-4 text-slate-400">건물, 다리</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">🛁 유리섬유 강화 플라스틱(FRP)</td>
                      <td className="py-3 px-4 text-slate-300">폴리에스터</td>
                      <td className="py-3 px-4 text-slate-300">유리섬유</td>
                      <td className="py-3 px-4 text-slate-400">욕조, 보트</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">✈️ 탄소섬유 강화 플라스틱(CFRP)</td>
                      <td className="py-3 px-4 text-slate-300">에폭시</td>
                      <td className="py-3 px-4 text-slate-300">탄소섬유</td>
                      <td className="py-3 px-4 text-slate-400">비행기, 스포츠카</td>
                    </tr>
                    <tr className="bg-green-500/10">
                      <td className="py-3 px-4 text-green-400 font-semibold">🌿 IIT 제안 복합재</td>
                      <td className="py-3 px-4 text-green-300">HDPE</td>
                      <td className="py-3 px-4 text-green-300">사카룸 문자</td>
                      <td className="py-3 px-4 text-green-400">자동차 내장재</td>
                    </tr>
                  </tbody>
                </table>
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

                    {/* Inventor Info */}
                    {patent.inventors && (
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-500">발명자:</span>
                            <span className="text-slate-300 ml-2">{patent.inventors}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">기관:</span>
                            <span className="text-slate-300 ml-2">{patent.institution}</span>
                          </div>
                        </div>
                      </div>
                    )}

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

                    {/* Detailed Process Steps (for patent1) */}
                    {patent.processDetails && (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-amber-400 mb-4">📋 제조 공정 상세 해설</h4>
                        <div className="space-y-3">
                          {patent.processDetails.map((detail, i) => (
                            <div key={i} className="bg-slate-900/50 rounded-lg p-4 border-l-4 border-amber-500/50">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center text-xs text-amber-400 font-bold">
                                  {detail.step}
                                </span>
                                <span className="font-semibold text-amber-300">{detail.title}</span>
                              </div>
                              <p className="text-slate-300 text-sm mb-2">{detail.content}</p>
                              {detail.diagram && (
                                <p className="text-slate-500 text-xs italic">💡 {detail.diagram}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Scientific Principles (for patent1) */}
                    {patent.scientificPrinciples && (
                      <div className="mt-6 space-y-6">
                        <h4 className="text-sm font-semibold text-rose-400 mb-4">🔬 과학적 원리 상세 설명</h4>

                        {/* Bonding Principle */}
                        {patent.scientificPrinciples.bondingPrinciple && (
                          <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-xl p-6 border border-rose-500/20">
                            <h5 className="font-semibold text-rose-400 mb-4">섬유-매트릭스 계면 결합</h5>

                            <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                              <p className="text-red-400 font-semibold text-sm mb-3">
                                ⚠️ 문제점: {patent.scientificPrinciples.bondingPrinciple.problem}
                              </p>

                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                                  <div className="text-blue-400 font-semibold text-sm mb-1">💧 친수성 (Hydrophilic)</div>
                                  <p className="text-slate-300 text-xs">{patent.scientificPrinciples.bondingPrinciple.hydrophilic}</p>
                                </div>
                                <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                                  <div className="text-orange-400 font-semibold text-sm mb-1">🛢️ 소수성 (Hydrophobic)</div>
                                  <p className="text-slate-300 text-xs">{patent.scientificPrinciples.bondingPrinciple.hydrophobic}</p>
                                </div>
                              </div>

                              <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                                <div className="text-green-400 font-semibold text-sm mb-1">✅ 해결책</div>
                                <p className="text-slate-300 text-xs">{patent.scientificPrinciples.bondingPrinciple.solution}</p>
                              </div>
                            </div>

                            <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs">
                              <div className="text-center text-slate-400 mb-2">기계적 결합 원리</div>
                              <pre className="text-slate-300 text-center">
{`섬유 표면
╱╲╱╲╱╲╱╲╱╲╱╲     ← 섬유 표면의 요철
████████████████   ← HDPE가 요철 사이로 침투`}
                              </pre>
                            </div>
                          </div>
                        )}

                        {/* Strength Principle */}
                        {patent.scientificPrinciples.strengthPrinciple && (
                          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
                            <h5 className="font-semibold text-cyan-400 mb-4">복합재료의 강도 증가 원리</h5>

                            <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                              <div className="text-cyan-400 font-semibold text-sm mb-2">📊 응력 전달 메커니즘</div>
                              <p className="text-slate-300 text-sm">{patent.scientificPrinciples.strengthPrinciple.mechanism}</p>
                            </div>

                            <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs mb-4">
                              <pre className="text-slate-300 text-center">
{`힘 →  ████████████████████████  ← 힘
      ════════════════════════   (섬유)
      ████████████████████████
      ════════════════════════   (섬유)
      ████████████████████████`}
                              </pre>
                            </div>

                            <div className="text-cyan-400 font-semibold text-sm mb-3">재료별 인장강도 비교</div>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-slate-700">
                                    <th className="text-left py-2 px-3 text-slate-400">재료</th>
                                    <th className="text-left py-2 px-3 text-slate-400">인장강도</th>
                                    <th className="text-left py-2 px-3 text-slate-400">비교</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {patent.scientificPrinciples.strengthPrinciple.comparison.map((item, i) => (
                                    <tr key={i} className="border-b border-slate-700/50">
                                      <td className="py-2 px-3 text-white">{item.material}</td>
                                      <td className="py-2 px-3 text-cyan-300">{item.strength}</td>
                                      <td className="py-2 px-3 text-slate-400">{item.note}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg">
                              <p className="text-cyan-300 text-sm font-semibold">→ 약한 HDPE + 강한 섬유 = 중간 정도의 강한 복합재!</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Nanofiller Technology Section */}
                    {patent.nanofillerTechnology && (
                      <div className="space-y-6 mt-6">
                        <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
                          <span className="text-2xl">🔬</span> 나노필러(Nanofiller) 코팅 기술
                        </h4>

                        {/* Nano Scale */}
                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                          <h5 className="font-semibold text-purple-400 mb-4">🔍 나노(Nano) 스케일이란?</h5>
                          <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                            <p className="text-slate-300 text-sm mb-3">{patent.nanofillerTechnology.nanoScale.definition}</p>
                            <div className="text-purple-400 font-semibold text-sm mb-2">크기 비교:</div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                              {patent.nanofillerTechnology.nanoScale.comparison.map((item, i) => (
                                <div key={i} className="bg-slate-800/50 rounded-lg p-3 text-center">
                                  <p className="text-slate-300 text-xs">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs">
                            <pre className="text-slate-300 text-center whitespace-pre-wrap">
{`원자 < 나노입자 < 세포 < 머리카락 < 모래알
0.1nm   1-100nm  10μm   80μm      1mm`}
                            </pre>
                          </div>
                        </div>

                        {/* GNP Description */}
                        <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-xl p-6 border border-indigo-500/20">
                          <h5 className="font-semibold text-indigo-400 mb-4">⬡ 그래핀 나노플레이트 (GNP)</h5>
                          <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                            <p className="text-indigo-300 font-semibold text-sm mb-2">{patent.nanofillerTechnology.gnpDescription.fullName}</p>
                            <p className="text-slate-300 text-sm mb-4">{patent.nanofillerTechnology.gnpDescription.structure}</p>
                            <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs mb-4">
                              <pre className="text-slate-300 text-center">
{`  ◯─◯─◯─◯─◯─◯
 / \\ / \\ / \\ / \\
◯   ◯   ◯   ◯   ◯  ← 두께: 원자 1개 (0.34 nm)
 \\ / \\ / \\ / \\ /
  ◯─◯─◯─◯─◯─◯`}
                              </pre>
                            </div>
                            <div className="text-indigo-400 font-semibold text-sm mb-2">GNP 특성:</div>
                            <div className="grid grid-cols-2 gap-2">
                              {patent.nanofillerTechnology.gnpDescription.properties.map((prop, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                  <span className="text-indigo-400">•</span>
                                  <span className="text-slate-300">{prop}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Coating Effects */}
                        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20">
                          <h5 className="font-semibold text-emerald-400 mb-4">✨ GNP 코팅 효과</h5>
                          <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs mb-4">
                            <pre className="text-slate-300 text-center">
{`코팅 전               코팅 후
═══════════          ╔═══════════╗
 탄소섬유             ║ GNP 코팅  ║
(매끈한 표면)         ╚═══════════╝
                       탄소섬유
                     (거친 표면)`}
                            </pre>
                          </div>
                          <div className="space-y-3">
                            {patent.nanofillerTechnology.coatingEffects.map((effect, i) => (
                              <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                                <p className="text-emerald-400 font-semibold text-sm mb-1">효과 {i + 1}: {effect.effect}</p>
                                <p className="text-slate-300 text-sm">{effect.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Coating Conditions */}
                        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/20">
                          <h5 className="font-semibold text-amber-400 mb-4">⚗️ 코팅 용액 제조 조건</h5>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-slate-700">
                                  <th className="text-left py-2 px-3 text-slate-400">조건</th>
                                  <th className="text-left py-2 px-3 text-slate-400">값</th>
                                  <th className="text-left py-2 px-3 text-slate-400">설명</th>
                                </tr>
                              </thead>
                              <tbody>
                                {patent.nanofillerTechnology.coatingConditions.map((cond, i) => (
                                  <tr key={i} className="border-b border-slate-700/50">
                                    <td className="py-2 px-3 text-white">{cond.condition}</td>
                                    <td className="py-2 px-3 text-amber-300 font-mono">{cond.value}</td>
                                    <td className="py-2 px-3 text-slate-400">{cond.explanation}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Ultrasonic Dispersion */}
                        <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-xl p-6 border border-sky-500/20">
                          <h5 className="font-semibold text-sky-400 mb-4">〰️ 초음파 분산의 원리</h5>
                          <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                            <p className="text-red-400 font-semibold text-sm mb-2">⚠️ 문제:</p>
                            <p className="text-slate-300 text-sm mb-4">{patent.nanofillerTechnology.ultrasonicDispersion.problem}</p>
                            <p className="text-green-400 font-semibold text-sm mb-2">✓ 해결:</p>
                            <p className="text-slate-300 text-sm">{patent.nanofillerTechnology.ultrasonicDispersion.solution}</p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs mb-4">
                            <pre className="text-slate-300 text-center">
{`뭉친 상태:         분산된 상태:
   ▓▓▓▓            ▪  ▪  ▪  ▪
   ▓▓▓▓     →       ▪  ▪  ▪
   ▓▓▓▓            ▪  ▪  ▪  ▪
(효과 없음)       (효과 있음)

〰️〰️〰️〰️〰️〰️  ← 초음파
○→●→💥        ← 기포 생성 → 성장 → 붕괴
▪ ▪ ▪ ▪ ▪ ▪  ← 분산된 GNP`}
                            </pre>
                          </div>
                          <div className="text-sky-400 font-semibold text-sm mb-2">작동 메커니즘:</div>
                          <div className="space-y-2">
                            {patent.nanofillerTechnology.ultrasonicDispersion.mechanism.map((step, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm">
                                <span className="text-sky-400 font-mono">{i + 1}.</span>
                                <span className="text-slate-300">{step.substring(3)}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 p-3 bg-sky-500/10 rounded-lg">
                            <p className="text-sky-300 text-xs">💡 캐비테이션: 기포 붕괴 시 국소적으로 5,000K(태양 표면의 약 86%), 500기압 발생</p>
                          </div>
                        </div>

                        {/* Performance Improvement */}
                        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
                          <h5 className="font-semibold text-green-400 mb-4">📈 GNP 코팅 성능 향상</h5>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-slate-700">
                                  <th className="text-left py-2 px-3 text-slate-400">항목</th>
                                  <th className="text-left py-2 px-3 text-slate-400">기존 CFRP</th>
                                  <th className="text-left py-2 px-3 text-slate-400">GNP 코팅 CFRP</th>
                                  <th className="text-left py-2 px-3 text-slate-400">개선율</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-slate-700/50">
                                  <td className="py-2 px-3 text-white">굽힘 강도</td>
                                  <td className="py-2 px-3 text-slate-400">800 MPa</td>
                                  <td className="py-2 px-3 text-green-300">1,040+ MPa</td>
                                  <td className="py-2 px-3 text-green-400 font-semibold">+30%</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                  <td className="py-2 px-3 text-white">층간 전단강도</td>
                                  <td className="py-2 px-3 text-slate-400">45 MPa</td>
                                  <td className="py-2 px-3 text-green-300">55+ MPa</td>
                                  <td className="py-2 px-3 text-green-400 font-semibold">+22%</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                  <td className="py-2 px-3 text-white">계면 결합력</td>
                                  <td className="py-2 px-3 text-slate-400">기준</td>
                                  <td className="py-2 px-3 text-green-300">+35%</td>
                                  <td className="py-2 px-3 text-green-400 font-semibold">향상</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}

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
            {/* 현재 자동차 내장재 종류 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🚗</span> 현재 자동차에 사용되는 내장재 종류
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMaterials.map((mat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-indigo-400 font-bold">{mat.name}</span>
                      <span className="text-xs text-slate-500">({mat.fullName})</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{mat.usage}</p>
                    <p className="text-xs text-slate-500">{mat.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 기계적 물성 비교 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 overflow-x-auto">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">💪</span> 기계적 물성 비교
              </h2>
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="text-left border-b border-slate-700/50">
                    <th className="pb-3 text-slate-400 font-medium">재료</th>
                    <th className="pb-3 text-slate-400 font-medium">인장강도 (MPa)</th>
                    <th className="pb-3 text-slate-400 font-medium">굽힘강도 (MPa)</th>
                    <th className="pb-3 text-slate-400 font-medium">충격강도 (kJ/m²)</th>
                    <th className="pb-3 text-slate-400 font-medium">탄성계수 (GPa)</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalProperties.map((mat, i) => (
                    <tr key={i} className={`border-b border-slate-700/30 ${mat.material.includes('IIT') ? 'bg-indigo-500/10' : ''}`}>
                      <td className="py-3"><span className={mat.material.includes('IIT') ? 'text-indigo-400 font-medium' : 'text-white'}>{mat.material}</span></td>
                      <td className="py-3 text-slate-300">{mat.tensile}</td>
                      <td className="py-3 text-slate-300">{mat.flexural}</td>
                      <td className="py-3 text-slate-300">{mat.impact}</td>
                      <td className="py-3 text-slate-300">{mat.modulus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 열적 특성 비교 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 overflow-x-auto">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🌡️</span> 열적 특성 비교
              </h2>
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="text-left border-b border-slate-700/50">
                    <th className="pb-3 text-slate-400 font-medium">재료</th>
                    <th className="pb-3 text-slate-400 font-medium">열변형온도 (°C)</th>
                    <th className="pb-3 text-slate-400 font-medium">연속사용온도 (°C)</th>
                    <th className="pb-3 text-slate-400 font-medium">열팽창계수 (×10⁻⁵/°C)</th>
                  </tr>
                </thead>
                <tbody>
                  {thermalProperties.map((mat, i) => (
                    <tr key={i} className={`border-b border-slate-700/30 ${mat.material.includes('IIT') ? 'bg-indigo-500/10' : ''}`}>
                      <td className="py-3"><span className={mat.material.includes('IIT') ? 'text-indigo-400 font-medium' : 'text-white'}>{mat.material}</span></td>
                      <td className="py-3 text-orange-300">{mat.hdt}</td>
                      <td className="py-3 text-yellow-300">{mat.continuous}</td>
                      <td className="py-3 text-cyan-300">{mat.expansion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* 용어 설명 */}
              <div className="mt-4 p-4 bg-slate-900/50 rounded-xl text-xs">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-orange-400 font-semibold">열변형온도 (HDT)</span>
                    <p className="text-slate-400 mt-1">일정 하중에서 변형 시작 온도. 여름 차량 내부: 80°C+</p>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-semibold">연속사용온도</span>
                    <p className="text-slate-400 mt-1">장기 사용 시 물성 유지 최대 온도</p>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-semibold">열팽창계수</span>
                    <p className="text-slate-400 mt-1">온도 1°C당 길이 변화율. 작을수록 안정</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 내구성 비교 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 overflow-x-auto">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🛡️</span> 내구성 비교
              </h2>
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="text-left border-b border-slate-700/50">
                    <th className="pb-3 text-slate-400 font-medium">재료</th>
                    <th className="pb-3 text-slate-400 font-medium">내스크래치성</th>
                    <th className="pb-3 text-slate-400 font-medium">내열성</th>
                    <th className="pb-3 text-slate-400 font-medium">내화학성</th>
                    <th className="pb-3 text-slate-400 font-medium">내후성</th>
                    <th className="pb-3 text-slate-400 font-medium">UV 안정성</th>
                  </tr>
                </thead>
                <tbody>
                  {durabilityProperties.map((mat, i) => (
                    <tr key={i} className={`border-b border-slate-700/30 ${mat.material.includes('IIT') ? 'bg-indigo-500/10' : ''}`}>
                      <td className="py-3"><span className={mat.material.includes('IIT') ? 'text-indigo-400 font-medium' : 'text-white'}>{mat.material}</span></td>
                      <td className="py-3"><span className="text-yellow-400">{'★'.repeat(mat.scratch)}{'☆'.repeat(5 - mat.scratch)}</span></td>
                      <td className="py-3"><span className="text-orange-400">{'★'.repeat(mat.heat)}{'☆'.repeat(5 - mat.heat)}</span></td>
                      <td className="py-3"><span className="text-green-400">{'★'.repeat(mat.chemical)}{'☆'.repeat(5 - mat.chemical)}</span></td>
                      <td className="py-3"><span className="text-blue-400">{'★'.repeat(mat.weather)}{'☆'.repeat(5 - mat.weather)}</span></td>
                      <td className="py-3"><span className="text-purple-400">{'★'.repeat(mat.uv)}{'☆'.repeat(5 - mat.uv)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* 용어 설명 */}
              <div className="mt-4 p-4 bg-slate-900/50 rounded-xl text-xs">
                <div className="grid md:grid-cols-5 gap-3">
                  <div><span className="text-yellow-400 font-semibold">내스크래치성</span><p className="text-slate-400">긁힘 저항</p></div>
                  <div><span className="text-orange-400 font-semibold">내열성</span><p className="text-slate-400">고온 변형 저항</p></div>
                  <div><span className="text-green-400 font-semibold">내화학성</span><p className="text-slate-400">세척제/화장품 저항</p></div>
                  <div><span className="text-blue-400 font-semibold">내후성</span><p className="text-slate-400">장기 환경 노출 저항</p></div>
                  <div><span className="text-purple-400 font-semibold">UV 안정성</span><p className="text-slate-400">자외선 황변/분해 저항</p></div>
                </div>
              </div>
            </div>

            {/* 환경성 비교 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 overflow-x-auto">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🌱</span> 환경성 비교
              </h2>
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="text-left border-b border-slate-700/50">
                    <th className="pb-3 text-slate-400 font-medium">재료</th>
                    <th className="pb-3 text-slate-400 font-medium">원료 출처</th>
                    <th className="pb-3 text-slate-400 font-medium">재활용성</th>
                    <th className="pb-3 text-slate-400 font-medium">생분해성</th>
                    <th className="pb-3 text-slate-400 font-medium">CO₂ 배출량</th>
                    <th className="pb-3 text-slate-400 font-medium">환경 등급</th>
                  </tr>
                </thead>
                <tbody>
                  {environmentalProperties.map((mat, i) => (
                    <tr key={i} className={`border-b border-slate-700/30 ${mat.material.includes('IIT') ? 'bg-indigo-500/10' : ''}`}>
                      <td className="py-3"><span className={mat.material.includes('IIT') ? 'text-indigo-400 font-medium' : 'text-white'}>{mat.material}</span></td>
                      <td className="py-3 text-slate-300">{mat.source}</td>
                      <td className="py-3"><span className={mat.recyclable === '우수' || mat.recyclable === '가능' ? 'text-green-400' : 'text-orange-400'}>{mat.recyclable}</span></td>
                      <td className="py-3"><span className={mat.biodegradable === '부분' ? 'text-green-400' : 'text-slate-500'}>{mat.biodegradable}</span></td>
                      <td className="py-3"><span className={mat.co2 === '낮음' ? 'text-green-400' : mat.co2 === '중간' ? 'text-yellow-400' : 'text-red-400'}>{mat.co2}</span></td>
                      <td className="py-3"><span className="text-green-400">{'★'.repeat(mat.grade)}{'☆'.repeat(5 - mat.grade)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 환경성 용어 설명 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">📖</span> 환경성 용어 설명
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="text-green-400 font-semibold mb-2">🌿 생분해성 (Biodegradability)</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 미생물에 의해 분해되는 정도</li>
                    <li>• 사카룸 섬유: 천연 셀룰로오스 → 생분해 가능</li>
                    <li>• HDPE 매트릭스: 생분해 안 됨</li>
                    <li>• 복합재 전체: "부분 생분해"</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">👣 탄소발자국 (Carbon Footprint)</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 제품 생산~폐기까지 CO₂ 총량</li>
                    <li>• 천연섬유: 생장 시 CO₂ 흡수</li>
                    <li>• → 카본 네거티브 가능</li>
                    <li>• 석유 기반: CO₂ 배출</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="text-orange-400 font-semibold mb-2">♻️ 재활용성</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 열가소성(HDPE, PP): 녹여서 재사용</li>
                    <li>• 열경화성(에폭시): 녹지 않음</li>
                    <li>• CFRP: 탄소섬유 회수 기술 개발 중</li>
                    <li>• (아직 비용이 높음)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 비용 비교 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 overflow-x-auto">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">💰</span> 비용 비교
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-amber-400 font-semibold mb-3">재료별 비용</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 text-slate-400">재료</th>
                        <th className="text-left py-2 text-slate-400">원료가격 ($/kg)</th>
                        <th className="text-left py-2 text-slate-400">가공비용</th>
                        <th className="text-left py-2 text-slate-400">총 비용</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costComparison.map((item, i) => (
                        <tr key={i} className={`border-b border-slate-700/30 ${item.material.includes('IIT') ? 'bg-indigo-500/10' : ''}`}>
                          <td className="py-2"><span className={item.material.includes('IIT') ? 'text-indigo-400' : 'text-white'}>{item.material}</span></td>
                          <td className="py-2 text-amber-300 font-mono">{item.rawPrice}</td>
                          <td className="py-2 text-slate-300">{item.processingCost}</td>
                          <td className="py-2"><span className="text-yellow-400">{'★'.repeat(item.grade)}{'☆'.repeat(5 - item.grade)}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">섬유 원료 가격 비교</h4>
                  <div className="space-y-3">
                    {fiberPrices.map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3">
                        <span className="text-white">{item.fiber}</span>
                        <div className="text-right">
                          <span className="text-cyan-300 font-mono">{item.price}</span>
                          <span className={`ml-2 text-xs px-2 py-0.5 rounded ${item.note.includes('매우') ? 'bg-green-500/20 text-green-300' : item.note === '저렴' ? 'bg-teal-500/20 text-teal-300' : item.note === '중간' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-red-500/20 text-red-300'}`}>{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 부품별 적용 가능성 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🚗</span> 자동차 부품별 적용 가능성 평가
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* 사카룸/HDPE 적용 */}
                <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-xl p-4 border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                    <span>🌿</span> 사카룸/HDPE 복합재 (대량 생산 부품)
                  </h4>
                  <div className="space-y-2">
                    {partApplicationSacharum.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm bg-slate-900/30 rounded-lg px-3 py-2">
                        <div>
                          <span className="text-white">{item.part}</span>
                          <span className="text-slate-500 text-xs ml-2">({item.current})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-400 text-xs">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${item.rating >= 4 ? 'bg-green-500/20 text-green-300' : item.rating >= 3 ? 'bg-yellow-500/20 text-yellow-300' : 'bg-orange-500/20 text-orange-300'}`}>{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* CFRP 적용 */}
                <div className="bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-xl p-4 border border-purple-500/20">
                  <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                    <span>⚡</span> CFRP 복합재 (고부가가치/경량화 부품)
                  </h4>
                  <div className="space-y-2">
                    {partApplicationCFRP.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm bg-slate-900/30 rounded-lg px-3 py-2">
                        <div>
                          <span className="text-white">{item.part}</span>
                          <span className="text-slate-500 text-xs ml-2">({item.current})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-purple-400 text-xs">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${item.rating >= 4 ? 'bg-green-500/20 text-green-300' : item.rating >= 3 ? 'bg-yellow-500/20 text-yellow-300' : 'bg-orange-500/20 text-orange-300'}`}>{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 심층 분석: 스크래치 저항성 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🔬</span> 심층 분석: 스크래치 저항성
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-3">연필 경도 테스트 (Pencil Hardness)</h4>
                  <p className="text-sm text-slate-400 mb-3">다양한 경도의 연필로 표면을 긁어 긁히지 않는 등급 측정<br/>6B(가장 부드러움) ~ 9H(가장 단단함)</p>
                  <div className="space-y-2">
                    {pencilHardness.map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-900/50 rounded-lg px-3 py-2 text-sm">
                        <span className={item.material.includes('사카룸') || item.material === 'CFRP' ? 'text-indigo-400' : 'text-white'}>{item.material}</span>
                        <span className="text-yellow-300 font-mono">{item.hardness}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">스크래치 저항성 향상 방법</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <span className="text-cyan-300 font-semibold">표면 코팅</span>
                      <p className="text-slate-400">UV 코팅, 세라믹 코팅</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <span className="text-cyan-300 font-semibold">섬유 함량 증가</span>
                      <p className="text-slate-400">표면에 섬유 노출은 감소</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <span className="text-cyan-300 font-semibold">나노 첨가제</span>
                      <p className="text-slate-400">실리카, 알루미나 나노입자</p>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                    <p className="text-sm text-indigo-300">
                      <span className="font-semibold">IIT 복합재:</span> 사카룸/HDPE는 PP보다 우수, ABS와 비슷. CFRP는 매우 우수 (탄소섬유 자체가 단단함)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 심층 분석: 내열성 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🌡️</span> 심층 분석: 내열성
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-orange-400 font-semibold mb-3">자동차 내부 온도 분포</h4>
                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <div className="text-center text-yellow-400 mb-2">☀️ 직사광선</div>
                    <div className="space-y-2">
                      {carTemperatures.map((item, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-800/50 rounded-lg px-3 py-2 text-sm">
                          <span className="text-white">{item.location}</span>
                          <div className="text-right">
                            <span className={`font-mono ${item.temp.includes('90~110') ? 'text-red-400' : item.temp.includes('70~85') ? 'text-orange-400' : item.temp.includes('50~70') ? 'text-yellow-400' : 'text-green-400'}`}>{item.temp}</span>
                            <p className="text-xs text-slate-500">{item.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-red-400 font-semibold mb-3">열에 의한 문제</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { name: '변형', desc: '뒤틀림, 처짐' },
                      { name: '변색', desc: '황변, 탈색' },
                      { name: '취화', desc: '딱딱해지고 부서짐' },
                      { name: '가스 방출', desc: '냄새, 포깅(창 흐림)' },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-lg p-2 text-sm">
                        <span className="text-red-300 font-semibold">{item.name}</span>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-sm">
                    <p className="text-indigo-300 font-semibold mb-1">IIT 복합재 내열성:</p>
                    <p className="text-slate-300"><span className="text-green-400">사카룸/HDPE:</span> HDPE 녹는점 130°C → 100°C까지 안전. 대시보드 직접 적용 주의</p>
                    <p className="text-slate-300 mt-1"><span className="text-purple-400">CFRP:</span> 에폭시 내열온도 120~180°C, 탄소섬유 500°C+ 안정. 고온 부품 적용 가능</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 심층 분석: 오염 저항성 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">💧</span> 심층 분석: 오염 저항성
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-3">자동차 내장재 오염원</h4>
                  <div className="space-y-2">
                    {stainSources.map((item, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-sm">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-blue-300 font-semibold">{item.source}</span>
                          <span className="text-xs text-slate-500">{item.examples}</span>
                        </div>
                        <p className="text-slate-400 text-xs">{item.issue}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-teal-400 font-semibold mb-3">재료별 오염 저항성</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 text-slate-400">재료</th>
                        <th className="text-left py-2 text-slate-400">수성</th>
                        <th className="text-left py-2 text-slate-400">유성</th>
                        <th className="text-left py-2 text-slate-400">청소</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stainResistance.map((item, i) => (
                        <tr key={i} className="border-b border-slate-700/30">
                          <td className="py-2 text-white">{item.material}</td>
                          <td className={`py-2 ${item.water === '우수' ? 'text-green-400' : 'text-yellow-400'}`}>{item.water}</td>
                          <td className={`py-2 ${item.oil === '양호' ? 'text-green-400' : 'text-yellow-400'}`}>{item.oil}</td>
                          <td className={`py-2 ${item.cleaning === '우수' ? 'text-green-400' : item.cleaning === '양호' ? 'text-yellow-400' : 'text-orange-400'}`}>{item.cleaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <p className="text-amber-300 text-xs">
                      <span className="font-semibold">⚠️ 천연섬유 주의:</span> 섬유 노출 시 수분 흡수 가능, 장기 습한 환경에서 곰팡이 위험. 표면 코팅으로 해결 가능
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 양산성 평가 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🏭</span> 양산성 종합 평가
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 text-slate-400">평가 기준</th>
                      <th className="text-center py-2 text-green-400">사카룸/HDPE</th>
                      <th className="text-center py-2 text-purple-400">CFRP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {massProductionEval.map((item, i) => (
                      <tr key={i} className="border-b border-slate-700/30">
                        <td className="py-2 text-white">{item.criteria}</td>
                        <td className="py-2 text-center"><span className="text-green-400">{'★'.repeat(item.sacharum)}{'☆'.repeat(5 - item.sacharum)}</span></td>
                        <td className="py-2 text-center"><span className="text-purple-400">{'★'.repeat(item.cfrp)}{'☆'.repeat(5 - item.cfrp)}</span></td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-slate-600 font-bold">
                      <td className="py-3 text-white">종합 점수</td>
                      <td className="py-3 text-center text-green-400">4.2/5</td>
                      <td className="py-3 text-center text-purple-400">2.5/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <p className="text-green-300 text-sm"><span className="font-semibold">사카룸/HDPE:</span> 대량 양산에 적합, 기존 설비 활용 가능</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <p className="text-purple-300 text-sm"><span className="font-semibold">CFRP:</span> 소량 고부가가치 생산에 적합, 전용 설비 필요</p>
                </div>
              </div>
            </div>

            {/* 비용 구조 분석 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">💵</span> 비용 구조 상세 분석
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* 사카룸/HDPE */}
                <div className="bg-green-500/5 rounded-xl p-4 border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-3">사카룸/HDPE 복합재 (1kg)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between bg-slate-800/50 rounded-lg px-3 py-2">
                      <span className="text-slate-300">HDPE 펠릿 (80%)</span>
                      <span className="text-green-300">$1.2 × 0.8 = <span className="font-bold">$0.96</span></span>
                    </div>
                    <div className="flex justify-between bg-slate-800/50 rounded-lg px-3 py-2">
                      <span className="text-slate-300">사카룸 섬유 (20%)</span>
                      <span className="text-green-300">$0.2 × 0.2 = <span className="font-bold">$0.04</span></span>
                    </div>
                    <div className="flex justify-between bg-green-500/20 rounded-lg px-3 py-2 font-bold">
                      <span className="text-white">합계</span>
                      <span className="text-green-400">$1.00/kg</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-green-500/10 rounded-lg text-center">
                    <p className="text-green-300 text-sm">vs PP-GF30 $1.80~2.20/kg → <span className="font-bold">45~55% 절감!</span></p>
                  </div>
                </div>
                {/* CFRP */}
                <div className="bg-purple-500/5 rounded-xl p-4 border border-purple-500/20">
                  <h4 className="text-purple-400 font-semibold mb-3">CFRP 복합재 (1kg)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between bg-slate-800/50 rounded-lg px-3 py-2">
                      <span className="text-slate-300">탄소섬유 직물 (60%)</span>
                      <span className="text-purple-300">$25 × 0.6 = <span className="font-bold">$15.00</span></span>
                    </div>
                    <div className="flex justify-between bg-slate-800/50 rounded-lg px-3 py-2">
                      <span className="text-slate-300">에폭시 수지 (40%)</span>
                      <span className="text-purple-300">$8 × 0.4 = <span className="font-bold">$3.20</span></span>
                    </div>
                    <div className="flex justify-between bg-slate-800/50 rounded-lg px-3 py-2">
                      <span className="text-slate-300">GNP 나노필러</span>
                      <span className="text-purple-300">~<span className="font-bold">$0.50</span></span>
                    </div>
                    <div className="flex justify-between bg-purple-500/20 rounded-lg px-3 py-2 font-bold">
                      <span className="text-white">합계</span>
                      <span className="text-purple-400">~$18.70/kg</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-purple-500/10 rounded-lg text-center">
                    <p className="text-purple-300 text-xs">vs 알루미늄 $2~3/kg → 원료비 비싸지만 무게 대비 강도 월등</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 최종 결론 */}
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 border border-blue-500/20">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">📋</span> 최종 결론 및 제언
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* 사카룸/HDPE */}
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2"><span>🌿</span> 사카룸/HDPE (특허 1, 2)</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-green-300 font-semibold">✅ 추천 적용:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {finalConclusions.sacharum.recommended.map((item, i) => (
                          <span key={i} className="px-2 py-0.5 bg-green-500/20 text-green-300 text-xs rounded">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-yellow-300 font-semibold">⚠️ 주의 필요:</span>
                      <ul className="text-slate-400 text-xs mt-1 space-y-0.5">
                        {finalConclusions.sacharum.cautions.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-blue-300 font-semibold">💡 기대 효과:</span>
                      <ul className="text-slate-300 text-xs mt-1 space-y-0.5">
                        {finalConclusions.sacharum.benefits.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* CFRP */}
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2"><span>⚡</span> CFRP (특허 3, 4)</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-purple-300 font-semibold">✅ 추천 적용:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {finalConclusions.cfrp.recommended.map((item, i) => (
                          <span key={i} className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-yellow-300 font-semibold">⚠️ 주의 필요:</span>
                      <ul className="text-slate-400 text-xs mt-1 space-y-0.5">
                        {finalConclusions.cfrp.cautions.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-blue-300 font-semibold">💡 기대 효과:</span>
                      <ul className="text-slate-300 text-xs mt-1 space-y-0.5">
                        {finalConclusions.cfrp.benefits.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* 협업 로드맵 */}
              <div className="bg-slate-800/50 rounded-xl p-4">
                <h4 className="text-cyan-400 font-bold mb-3">🗺️ 협업 방향 제안</h4>
                <div className="flex flex-wrap gap-2">
                  {finalConclusions.roadmap.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-900/50 rounded-lg px-3 py-2">
                      <span className="text-cyan-400 font-bold text-sm">{item.step}</span>
                      <span className="text-slate-300 text-xs">{item.desc}</span>
                      {i < finalConclusions.roadmap.length - 1 && <span className="text-slate-600">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* IIT 기술 장점 요약 */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-6 border border-indigo-500/20">
              <h2 className="text-xl font-bold text-white mb-6">🏆 IIT 기술의 종합 우위</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: '경량화', value: '10~20%', desc: '중량 감소', icon: '🪶', color: 'text-blue-400' },
                  { title: '친환경', value: '30~50%', desc: 'CO₂ 감소', icon: '🌱', color: 'text-green-400' },
                  { title: '지속가능', value: '천연섬유', desc: '바이오 원료', icon: '♻️', color: 'text-teal-400' },
                  { title: '고성능', value: '+30%', desc: '강도 향상', icon: '💪', color: 'text-purple-400' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                    <div className="text-white font-medium">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SWOT Tab */}
        {activeTab === 'swot' && (
          <div className="space-y-8">
            {/* 사카룸/HDPE SWOT */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🌿</span>
                <div>
                  <h2 className="text-2xl font-bold text-green-400">사카룸/HDPE 복합재 SWOT</h2>
                  <p className="text-sm text-slate-400">천연섬유 기반 친환경 내장재</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Strengths */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">💪</span>
                    <h3 className="font-bold text-green-400">Strengths (강점)</h3>
                  </div>
                  <div className="space-y-2">
                    {sacharumSwot.strengths.map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-2.5 text-sm text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Weaknesses */}
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-4 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">⚠️</span>
                    <h3 className="font-bold text-orange-400">Weaknesses (약점)</h3>
                  </div>
                  <div className="space-y-2">
                    {sacharumSwot.weaknesses.map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-2.5 text-sm text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Opportunities */}
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🚀</span>
                    <h3 className="font-bold text-blue-400">Opportunities (기회)</h3>
                  </div>
                  <div className="space-y-2">
                    {sacharumSwot.opportunities.map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-2.5 text-sm text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Threats */}
                <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-xl p-4 border border-red-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">⚡</span>
                    <h3 className="font-bold text-red-400">Threats (위협)</h3>
                  </div>
                  <div className="space-y-2">
                    {sacharumSwot.threats.map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-2.5 text-sm text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CFRP SWOT */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⚫</span>
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400">CFRP 복합재 SWOT</h2>
                  <p className="text-sm text-slate-400">탄소섬유 기반 고성능 경량 소재</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Strengths */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">💪</span>
                    <h3 className="font-bold text-green-400">Strengths (강점)</h3>
                  </div>
                  <div className="space-y-2">
                    {cfrpSwot.strengths.map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-2.5 text-sm text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Weaknesses */}
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-4 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">⚠️</span>
                    <h3 className="font-bold text-orange-400">Weaknesses (약점)</h3>
                  </div>
                  <div className="space-y-2">
                    {cfrpSwot.weaknesses.map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-2.5 text-sm text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Opportunities */}
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🚀</span>
                    <h3 className="font-bold text-blue-400">Opportunities (기회)</h3>
                  </div>
                  <div className="space-y-2">
                    {cfrpSwot.opportunities.map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-2.5 text-sm text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Threats */}
                <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-xl p-4 border border-red-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">⚡</span>
                    <h3 className="font-bold text-red-400">Threats (위협)</h3>
                  </div>
                  <div className="space-y-2">
                    {cfrpSwot.threats.map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-lg p-2.5 text-sm text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SWOT Summary Comparison */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-6 border border-indigo-500/20">
              <h2 className="text-xl font-bold text-white mb-4">📊 SWOT 비교 요약</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">구분</th>
                      <th className="text-left py-3 px-4 text-green-400 font-medium">🌿 사카룸/HDPE</th>
                      <th className="text-left py-3 px-4 text-cyan-400 font-medium">⚫ CFRP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-green-400 font-medium">핵심 강점</td>
                      <td className="py-3 px-4 text-slate-300">친환경 + 저비용 + ESG</td>
                      <td className="py-3 px-4 text-slate-300">초경량 + 고강도 + 고급감</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-orange-400 font-medium">주요 약점</td>
                      <td className="py-3 px-4 text-slate-300">물성 한계 + 습도 민감</td>
                      <td className="py-3 px-4 text-slate-300">고비용 + 재활용 어려움</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-blue-400 font-medium">기회 요인</td>
                      <td className="py-3 px-4 text-slate-300">CAFE Phase 3 + EU 규제</td>
                      <td className="py-3 px-4 text-slate-300">EV 경량화 + 프리미엄 시장</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-red-400 font-medium">위협 요인</td>
                      <td className="py-3 px-4 text-slate-300">바이오 PP 경쟁</td>
                      <td className="py-3 px-4 text-slate-300">재활용 규제 + GFRP 경쟁</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4">🎯 전략적 권고사항</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                  <h3 className="font-bold text-green-400 mb-3">🌿 사카룸/HDPE 전략</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• <span className="text-green-400">공략 시장:</span> 인도/동남아 이머징 마켓</li>
                    <li>• <span className="text-green-400">타깃 차종:</span> 볼륨 세그먼트 (엔트리~미드)</li>
                    <li>• <span className="text-green-400">핵심 메시지:</span> "비용 절감 + 친환경"</li>
                    <li>• <span className="text-green-400">우선 적용:</span> 도어 트림, 필라 트림, 트렁크 트림</li>
                  </ul>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
                  <h3 className="font-bold text-cyan-400 mb-3">⚫ CFRP 전략</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• <span className="text-cyan-400">공략 시장:</span> 프리미엄/퍼포먼스 세그먼트</li>
                    <li>• <span className="text-cyan-400">타깃 차종:</span> 하이엔드 EV, 스포츠카</li>
                    <li>• <span className="text-cyan-400">핵심 메시지:</span> "초경량 + 프리미엄"</li>
                    <li>• <span className="text-cyan-400">우선 적용:</span> IP 캐리어, 시트 프레임, 배터리 케이스</li>
                  </ul>
                </div>
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
