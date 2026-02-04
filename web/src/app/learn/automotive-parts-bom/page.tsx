'use client';

import Link from 'next/link';
import { useState } from 'react';

// 전체 부품 데이터
const partsData = {
  body: [
    { name: '프론트 플로어', english: 'Front Floor', material: '스틸/AHSS', function: '엔진룸 후방 바닥, 서스펜션 마운팅' },
    { name: '센터 플로어', english: 'Center Floor', material: '스틸', function: '승객실 바닥, 터널 형성' },
    { name: '리어 플로어', english: 'Rear Floor', material: '스틸', function: '트렁크/연료탱크 지지' },
    { name: '사이드 멤버', english: 'Side Member', material: 'AHSS/핫스탬핑', function: '전후 하중 지지, 충돌 에너지 흡수' },
    { name: '크로스 멤버', english: 'Cross Member', material: '스틸', function: '좌우 연결, 비틀림 강성' },
    { name: 'A-필러', english: 'A-Pillar', material: '핫스탬핑 1,500MPa', function: '윈드실드 지지, 정면 충돌 구조' },
    { name: 'B-필러', english: 'B-Pillar', material: '핫스탬핑/PHS', function: '루프 지지, 측면 충돌 보호 핵심' },
    { name: 'C-필러', english: 'C-Pillar', material: 'AHSS', function: '리어 글라스 지지, 측면 강성' },
    { name: '사이드 실', english: 'Side Sill (Rocker)', material: 'AHSS', function: '측면 하단 보강, 배터리 보호(EV)' },
    { name: '루프 패널', english: 'Roof Panel', material: '스틸/알루미늄', function: '지붕 외판' },
    { name: '루프 보우', english: 'Roof Bow', material: '스틸', function: '루프 횡방향 보강' },
    { name: '쿼터 패널', english: 'Quarter Panel', material: '스틸', function: '후방 측면 외판' },
    { name: '라디에이터 서포트', english: 'Radiator Support', material: '스틸/복합재', function: '라디에이터 고정, 전면 구조' },
    { name: '카울', english: 'Cowl', material: '스틸', function: '엔진룸-실내 경계, 와이퍼 설치' },
    { name: '대시 패널', english: 'Dash Panel', material: '스틸', function: '엔진룸-실내 격벽, 방음/단열' },
  ],
  closures: [
    { name: '도어 아우터 패널', english: 'Door Outer Panel', material: '스틸/알루미늄', function: '외관, 덴트 저항' },
    { name: '도어 이너 패널', english: 'Door Inner Panel', material: '스틸', function: '구조 강성, 부품 설치' },
    { name: '도어 임팩트 빔', english: 'Door Impact Beam', material: 'AHSS/알루미늄', function: '측면 충돌 보호' },
    { name: '도어 힌지', english: 'Door Hinge', material: '스틸', function: '개폐 축' },
    { name: '도어 래치', english: 'Door Latch', material: '스틸/아연다이캐스팅', function: '잠금/열림' },
    { name: '도어 스트라이커', english: 'Door Striker', material: '스틸', function: '래치 결합부' },
    { name: '아웃사이드 핸들', english: 'Outside Handle', material: 'ABS/크롬/아연', function: '외부 개폐 조작' },
    { name: '후드 아우터', english: 'Hood Outer', material: '스틸/알루미늄', function: '외관, 보행자 보호' },
    { name: '후드 래치', english: 'Hood Latch', material: '스틸', function: '1차/2차 잠금' },
    { name: '테일게이트', english: 'Tailgate', material: '스틸/SMC/알루미늄', function: '후방 개폐부' },
    { name: '연료도어', english: 'Fuel Door', material: '스틸/SMC', function: '연료 주입구 보호' },
    { name: '도어 웨더스트립', english: 'Door Weatherstrip', material: 'EPDM', function: '방수/방음/방진' },
    { name: '런 채널', english: 'Run Channel', material: 'EPDM', function: '유리 승강 가이드' },
  ],
  exterior: [
    { name: '프론트 범퍼 커버', english: 'Front Bumper Cover', material: 'PP+EPDM-TD20', weight: '3-4 kg', cost: '$30-50', function: '외관, 보행자 보호' },
    { name: '리어 범퍼 커버', english: 'Rear Bumper Cover', material: 'PP+EPDM-TD20', weight: '3-4 kg', cost: '$25-45', function: '외관, 후방 충돌 완화' },
    { name: '범퍼 빔 (프론트)', english: 'Front Bumper Beam', material: 'GMT/스틸/알루미늄', weight: '3-5 kg', cost: '$20-40', function: '저속 충돌 흡수' },
    { name: '에너지 업소버', english: 'Energy Absorber', material: 'EPP/PU 폼', weight: '0.5-1 kg', cost: '$5-15', function: '충격 에너지 흡수' },
    { name: '라디에이터 그릴', english: 'Radiator Grille', material: 'ABS/크롬', weight: '0.5-1 kg', cost: '$15-50', function: '냉각 공기 유입, 외관' },
    { name: '액티브 에어 셔터', english: 'Active Air Shutter', material: 'PP+모터', weight: '0.8-1.2 kg', cost: '$30-80', function: '공력 개선, 워밍업 단축' },
    { name: '프론트 펜더', english: 'Front Fender', material: '스틸/알루미늄/SMC', weight: '3-5 kg', cost: '$30-80', function: '휠 커버, 외관' },
    { name: '휠 아치 라이너', english: 'Wheel Arch Liner', material: 'PP+TD/PET 펠트', weight: '0.8-1.5 kg', cost: '$8-20', function: '비산 방지, 소음 차단' },
    { name: '엔진 언더커버', english: 'Engine Undercover', material: 'PP+TD/GMT', weight: '1.5-3 kg', cost: '$15-40', function: '엔진룸 보호, 공력' },
    { name: '사이드 몰딩', english: 'Side Body Molding', material: 'PP/PVC+크롬', weight: '0.2-0.5 kg', cost: '$10-30', function: '측면 장식, 보호' },
    { name: '아웃사이드 미러', english: 'Outside Mirror', material: 'ABS/ASA+유리', weight: '0.8-1.5 kg', cost: '$50-200', function: '후방 시야' },
    { name: '리어 스포일러', english: 'Rear Spoiler', material: 'ABS/CFRP', weight: '1-3 kg', cost: '$30-150', function: '공력/외관' },
  ],
  interior: [
    { name: 'IP 어퍼', english: 'IP Upper', material: 'PP/TPO 스킨', function: '상부 외관, DAB 커버' },
    { name: 'IP 캐리어', english: 'IP Carrier', material: '스틸/마그네슘', function: '구조 뼈대, 부품 설치' },
    { name: '글로브 박스', english: 'Glove Box', material: 'PP/ABS', function: '조수석 수납공간' },
    { name: '센터페시아', english: 'Center Fascia', material: 'ABS/PC+ABS', function: 'AVN/공조 컨트롤 패널' },
    { name: '에어벤트', english: 'Air Vent', material: 'ABS/PC', function: '공조 토출구' },
    { name: '도어 트림 패널', english: 'Door Trim Panel', material: 'PP/ABS+TPO 스킨', weight: '2-3 kg', cost: '$25-60', function: '도어 은폐, 부품 설치' },
    { name: '암레스트', english: 'Armrest', material: 'PP+PU 폼', weight: '0.3-0.5 kg', cost: '$8-15', function: '팔 받침' },
    { name: 'A-필러 트림', english: 'A-Pillar Trim', material: 'PP/ABS', function: 'A-필러 은폐, 에어백 커버' },
    { name: 'B-필러 트림', english: 'B-Pillar Trim', material: 'PP+충격흡수재', function: 'B-필러 은폐, 측면 충돌 흡수' },
    { name: '헤드라이너', english: 'Headliner', material: 'PU 폼+유리섬유+직물', weight: '3-5 kg', cost: '$40-100', function: '천장 마감, 단열, NVH' },
    { name: '선바이저', english: 'Sun Visor', material: 'PP+폼+직물', weight: '0.3-0.5 kg', cost: '$10-25', function: '차광' },
    { name: '콘솔 박스', english: 'Console Box', material: 'PP/ABS', weight: '1-2 kg', cost: '$20-50', function: '수납, 암레스트' },
    { name: '플로어 카펫', english: 'Floor Carpet', material: 'PA/PET+PP 부직포', weight: '8-15 kg', cost: '$50-120', function: 'NVH 차단, 단열' },
    { name: '카펫 패드', english: 'Carpet Pad', material: 'PU 폼/펠트', weight: '3-5 kg', cost: '$20-40', function: '흡음, 쿠션' },
    { name: '트렁크 매트', english: 'Trunk Mat', material: 'PET 부직포/고무', weight: '2-4 kg', cost: '$15-40', function: '트렁크 마감' },
  ],
  seats: [
    { name: '시트 프레임', english: 'Seat Frame', material: '스틸/마그네슘', weight: '8-12 kg', cost: '$40-80', function: '시트 골격' },
    { name: '시트 쿠션 폼', english: 'Seat Cushion Foam', material: 'PU 폼', weight: '2-3 kg', cost: '$15-30', function: '착좌 쿠션' },
    { name: '시트 백 폼', english: 'Seat Back Foam', material: 'PU 폼', weight: '1.5-2.5 kg', cost: '$12-25', function: '등받이 쿠션' },
    { name: '시트 트림 커버', english: 'Seat Trim Cover', material: '직물/레더/인조가죽', weight: '1-2 kg', cost: '$30-150', function: '표피 마감' },
    { name: '헤드레스트', english: 'Headrest', material: 'PU 폼+커버+프레임', weight: '0.8-1.2 kg', cost: '$15-40', function: '머리 받침, 경추 보호' },
    { name: '시트 레일', english: 'Seat Rail', material: '스틸', weight: '2-3 kg', cost: '$20-40', function: '전후 슬라이드' },
    { name: '리클라이너', english: 'Recliner', material: '스틸+기어', weight: '1.5-2 kg', cost: '$15-30', function: '등받이 각도 조절' },
    { name: '시트 히터', english: 'Seat Heater', material: 'PTC/카본', weight: '0.3 kg', cost: '$20-50', function: '좌석 난방' },
    { name: '시트 벤틸레이션', english: 'Seat Ventilation', material: '팬+덕트', weight: '0.5 kg', cost: '$30-80', function: '좌석 통풍' },
    { name: '럼버 서포트', english: 'Lumbar Support', material: '에어백/모터', weight: '0.2-0.5 kg', cost: '$15-40', function: '허리 지지' },
  ],
  safety: [
    { name: '운전석 에어백 (DAB)', english: 'Driver Airbag', location: '스티어링 휠', function: '정면 충돌 보호' },
    { name: '조수석 에어백 (PAB)', english: 'Passenger Airbag', location: 'IP 상단', function: '정면 충돌 보호' },
    { name: '사이드 에어백', english: 'Side Airbag', location: '시트 측면', function: '측면 충돌 가슴 보호' },
    { name: '커튼 에어백', english: 'Curtain Airbag', location: '루프 레일', function: '측면/전복 머리 보호' },
    { name: '무릎 에어백', english: 'Knee Airbag', location: 'IP 하단', function: '무릎/대퇴부 보호' },
    { name: '센터 에어백', english: 'Center Airbag', location: '시트 사이', function: '승객 간 충돌 방지' },
    { name: '시트벨트 웨빙', english: 'Seat Belt Webbing', material: 'PET', function: '탑승자 구속' },
    { name: '리트랙터', english: 'Retractor', material: '스틸+스프링', function: '벨트 권취, 감김' },
    { name: '프리텐셔너', english: 'Pretensioner', material: '화약식', function: '충돌 시 벨트 당김' },
    { name: '로드 리미터', english: 'Load Limiter', material: '토션바', function: '흉부 하중 제한' },
    { name: '앵커', english: 'Anchor', material: '고장력강', function: '차체 고정점' },
  ],
  glass: [
    { name: '윈드실드', english: 'Windshield', material: '접합유리(유리+PVB)', weight: '10-15 kg', cost: '$80-400', function: '전방 시야, ADAS 센서 장착' },
    { name: '리어 글라스', english: 'Rear Glass', material: '강화유리+열선', weight: '5-8 kg', cost: '$40-100', function: '후방 시야, 성에 제거' },
    { name: '프론트 도어 글라스', english: 'Front Door Glass', material: '강화유리', weight: '2-3 kg', cost: '$20-50', function: '측면 시야, 승강' },
    { name: '리어 도어 글라스', english: 'Rear Door Glass', material: '강화유리', weight: '2-3 kg', cost: '$20-50', function: '측면 시야' },
    { name: '쿼터 글라스', english: 'Quarter Glass', material: '강화유리', weight: '0.5-1 kg', cost: '$15-40', function: '후방 측면 시야' },
    { name: '선루프 글라스', english: 'Sunroof Glass', material: '강화/접합유리', weight: '5-10 kg', cost: '$100-300', function: '채광, 환기' },
    { name: '부틸 테이프', english: 'Butyl Tape', material: 'IIR (부틸고무)', weight: '0.2-0.5 kg', cost: '$2-5', function: '글라스 1차 씰링' },
    { name: '우레탄 실러', english: 'Urethane Sealant', material: 'PU', weight: '0.3-0.5 kg', cost: '$3-8', function: '글라스 접착' },
  ],
  powertrain: [
    { name: '실린더 블록', english: 'Cylinder Block', material: '주철/알루미늄', function: '엔진 본체' },
    { name: '실린더 헤드', english: 'Cylinder Head', material: '알루미늄', function: '밸브/포트 수용' },
    { name: '크랭크샤프트', english: 'Crankshaft', material: '단조강', function: '왕복→회전 운동 변환' },
    { name: '피스톤', english: 'Piston', material: '알루미늄 합금', function: '연소 압력 수용' },
    { name: '캠샤프트', english: 'Camshaft', material: '주철/스틸', function: '밸브 개폐 제어' },
    { name: '터보차저', english: 'Turbocharger', material: '특수합금', function: '과급' },
    { name: '변속기 케이스', english: 'Transmission Case', material: '알루미늄', function: '변속기 본체' },
    { name: '토크 컨버터', english: 'Torque Converter', material: '스틸', function: '동력 전달, 증폭 (AT)' },
    { name: '클러치', english: 'Clutch', material: '마찰재+스틸', function: '동력 단속 (MT/DCT)' },
    { name: '드라이브 샤프트', english: 'Drive Shaft', material: '스틸/알루미늄/CFRP', function: '동력 전달 (FR/4WD)' },
    { name: 'CV 조인트', english: 'CV Joint', material: '스틸', function: '등속 동력 전달' },
    { name: '디퍼렌셜', english: 'Differential', material: '스틸+알루미늄', function: '좌우 바퀴 회전 차이 허용' },
  ],
  ev: [
    { name: '배터리 셀', english: 'Battery Cell', material: '리튬이온', function: '에너지 저장 기본 단위' },
    { name: '배터리 모듈', english: 'Battery Module', material: '셀+프레임', function: '셀 묶음' },
    { name: '배터리 팩', english: 'Battery Pack', material: '모듈+케이스+BMS', function: '완성된 배터리 어셈블리' },
    { name: 'BMS', english: 'Battery Management System', material: 'ECU', function: '충방전/온도/균형 제어' },
    { name: '열관리 시스템', english: 'Thermal Management', material: '냉각판+냉매', function: '배터리 온도 조절' },
    { name: '구동 모터', english: 'Traction Motor', material: 'PMSM/IM', function: '구동력 생성' },
    { name: '인버터', english: 'Inverter', material: 'IGBT/SiC', function: 'DC→AC 변환' },
    { name: '감속기', english: 'Reducer', material: '기어', function: '모터 회전수 감속' },
    { name: 'DC-DC 컨버터', english: 'DC-DC Converter', material: '전력변환', function: '고전압→12V 변환' },
    { name: 'OBC', english: 'On-Board Charger', material: '충전기', function: 'AC→DC 변환 (완속 충전)' },
    { name: '충전 인렛', english: 'Charging Inlet', material: '커넥터', function: '충전 연결부' },
  ],
  chassis: [
    { name: '코일 스프링', english: 'Coil Spring', material: '스프링강', function: '충격 흡수, 차고 유지' },
    { name: '쇼크 업소버', english: 'Shock Absorber', material: '스틸+오일', function: '진동 감쇠' },
    { name: '스트럿 어셈블리', english: 'Strut Assembly', material: '일체형', function: '스프링+쇼크 통합' },
    { name: '로워 컨트롤 암', english: 'Lower Control Arm', material: '스틸/알루미늄', function: '휠 상하 운동 안내' },
    { name: '스태빌라이저 바', english: 'Stabilizer Bar', material: '스프링강', function: '롤 억제' },
    { name: '볼 조인트', english: 'Ball Joint', material: '스틸', function: '조향/현가 연결' },
    { name: '너클', english: 'Knuckle', material: '주철/알루미늄', function: '휠 베어링/브레이크 설치' },
    { name: '스티어링 기어', english: 'Rack & Pinion', material: '스틸', function: '회전→직선 운동 변환' },
    { name: 'EPS 모터', english: 'EPS Motor', material: '전기모터', function: '조향력 보조' },
    { name: '타이 로드', english: 'Tie Rod', material: '스틸', function: '랙-너클 연결' },
    { name: '브레이크 디스크', english: 'Brake Disc', material: '주철/카본세라믹', function: '마찰면' },
    { name: '브레이크 캘리퍼', english: 'Brake Caliper', material: '알루미늄/주철', function: '패드 가압' },
    { name: '브레이크 패드', english: 'Brake Pad', material: '세미메탈릭/세라믹', function: '마찰재' },
    { name: 'ABS 모듈레이터', english: 'ABS Modulator', material: '유압밸브', function: 'ABS 제어' },
  ],
  electrical: [
    { name: '12V 배터리', english: 'Auxiliary Battery', function: '시동, 전장 전원' },
    { name: '알터네이터', english: 'Alternator', function: '발전' },
    { name: '스타터 모터', english: 'Starter Motor', function: '시동' },
    { name: '엔진 하네스', english: 'Engine Harness', function: '엔진룸 센서/액추에이터 연결' },
    { name: '바디 하네스', english: 'Body Harness', function: '실내 전장 연결' },
    { name: 'ECM', english: 'Engine Control Module', function: '엔진 제어' },
    { name: 'TCM', english: 'Transmission Control Module', function: '변속 제어' },
    { name: 'BCM', english: 'Body Control Module', function: '바디 전장 제어' },
    { name: 'ADAS ECU', english: 'ADAS Control Unit', function: '첨단 운전 보조' },
    { name: '에어백 ECU', english: 'Airbag Control Unit', function: '에어백 전개 제어' },
    { name: '프론트 카메라', english: 'Front Camera', function: '차선/차량/보행자 인식' },
    { name: '프론트 레이더', english: 'Front Radar', function: '전방 장애물 감지' },
    { name: '초음파 센서', english: 'Ultrasonic Sensor', function: '근거리 장애물 감지' },
  ],
  hvac: [
    { name: '컴프레서', english: 'Compressor', function: '냉매 압축' },
    { name: '컨덴서', english: 'Condenser', function: '냉매 응축' },
    { name: '에바포레이터', english: 'Evaporator', function: '냉매 증발 (냉각)' },
    { name: '익스팬션 밸브', english: 'Expansion Valve', function: '냉매 팽창' },
    { name: '히터 코어', english: 'Heater Core', function: '냉각수 열로 난방' },
    { name: 'PTC 히터', english: 'PTC Heater', function: '전기 난방 (EV)' },
    { name: '블로워 모터', english: 'Blower Motor', function: '송풍' },
    { name: 'HVAC 케이스', english: 'HVAC Case', function: '공조 유닛 하우징' },
    { name: '에어 필터', english: 'Cabin Air Filter', function: '외기 필터' },
  ],
  fuel: [
    { name: '연료 탱크', english: 'Fuel Tank', material: 'HDPE/스틸', function: '연료 저장' },
    { name: '연료 펌프', english: 'Fuel Pump', material: '전동 모터', function: '연료 가압 송출' },
    { name: '연료 필터', english: 'Fuel Filter', material: '여과재', function: '불순물 제거' },
    { name: '연료 인젝터', english: 'Fuel Injector', material: '솔레노이드 밸브', function: '정밀 분사' },
    { name: '연료 레일', english: 'Fuel Rail', material: '스틸/알루미늄', function: '인젝터 연료 분배' },
    { name: '연료 필러 파이프', english: 'Fuel Filler Pipe', material: 'HDPE/스틸', function: '주유구-탱크 연결' },
    { name: '캡리스 유닛', english: 'Capless Unit', material: 'PA+스틸', function: '캡 없는 주유구' },
    { name: 'EVAP 캐니스터', english: 'EVAP Canister', material: '활성탄', function: '연료 증발가스 흡착' },
  ],
  exhaust: [
    { name: '배기 매니폴드', english: 'Exhaust Manifold', material: '주철/스틸', function: '실린더별 배기 집합' },
    { name: '촉매 컨버터', english: 'Catalytic Converter', material: '세라믹+귀금속', function: '유해가스 정화' },
    { name: 'DPF/GPF', english: 'Particulate Filter', material: '세라믹', function: '미세먼지 포집' },
    { name: '머플러', english: 'Muffler', material: '스틸', function: '소음 감쇠' },
    { name: '테일 파이프', english: 'Tail Pipe', material: '스틸/크롬', function: '배기 출구' },
  ],
  cooling: [
    { name: '라디에이터', english: 'Radiator', material: '알루미늄', function: '냉각수 방열' },
    { name: '쿨링 팬', english: 'Cooling Fan', material: '플라스틱+모터', function: '강제 통풍' },
    { name: '워터 펌프', english: 'Water Pump', material: '알루미늄/플라스틱', function: '냉각수 순환' },
    { name: '서모스탯', english: 'Thermostat', material: '왁스 밸브', function: '냉각수 온도 조절' },
    { name: '라디에이터 호스', english: 'Radiator Hose', material: 'EPDM', function: '냉각수 배관' },
    { name: '쿨런트 탱크', english: 'Coolant Tank', material: 'PP', function: '냉각수 보조 탱크' },
  ],
  lighting: [
    { name: '헤드램프', english: 'Headlamp', type: '할로겐/HID/LED/레이저', function: '전방 조명' },
    { name: 'DRL', english: 'Daytime Running Light', type: 'LED', function: '주간 주행등' },
    { name: '포그 램프', english: 'Fog Lamp', type: '할로겐/LED', function: '안개등' },
    { name: '테일 램프', english: 'Tail Lamp', type: 'LED', function: '후미등' },
    { name: '브레이크 램프', english: 'Brake Lamp', type: 'LED', function: '제동등' },
    { name: '턴 시그널', english: 'Turn Signal', type: 'LED/벌브', function: '방향 지시' },
    { name: '후진등', english: 'Reverse Lamp', type: 'LED/벌브', function: '후진 시 조명' },
    { name: 'CHMSL', english: 'Center High-Mount Stop Lamp', type: 'LED', function: '보조 제동등' },
    { name: '룸 램프', english: 'Room Lamp', type: 'LED', function: '실내 조명' },
    { name: '앰비언트 라이트', english: 'Ambient Light', type: 'LED', function: '분위기 조명' },
  ],
  infotainment: [
    { name: 'AVN 헤드유닛', english: 'Audio-Video Navigation', function: '멀티미디어/내비게이션' },
    { name: '디스플레이', english: 'Display (LCD/OLED)', function: '화면 표시' },
    { name: '클러스터', english: 'Instrument Cluster', function: '계기판' },
    { name: 'HUD', english: 'Head-Up Display', function: '윈드실드 투영' },
    { name: '스피커', english: 'Speaker', function: '음향 출력' },
    { name: '앰프', english: 'Amplifier', function: '음향 증폭' },
    { name: '서브우퍼', english: 'Subwoofer', function: '저음 재생' },
    { name: '텔레매틱스 유닛', english: 'Telematics Unit', function: '차량 통신' },
    { name: '무선충전 패드', english: 'Wireless Charger', function: '스마트폰 충전' },
  ],
};

const categories = [
  { id: 'body', title: '바디 구조', icon: '🏗️', color: 'from-slate-500 to-gray-600', count: partsData.body.length },
  { id: 'closures', title: '클로저 (개폐부)', icon: '🚪', color: 'from-stone-500 to-zinc-600', count: partsData.closures.length },
  { id: 'exterior', title: '외장', icon: '🚗', color: 'from-blue-500 to-cyan-600', count: partsData.exterior.length },
  { id: 'interior', title: '내장', icon: '🪑', color: 'from-amber-500 to-orange-600', count: partsData.interior.length },
  { id: 'seats', title: '시트', icon: '💺', color: 'from-yellow-500 to-amber-600', count: partsData.seats.length },
  { id: 'safety', title: '안전장치', icon: '🛡️', color: 'from-red-500 to-rose-600', count: partsData.safety.length },
  { id: 'glass', title: '글라스/씰링', icon: '🪟', color: 'from-sky-500 to-blue-600', count: partsData.glass.length },
  { id: 'powertrain', title: '파워트레인 (ICE)', icon: '⚙️', color: 'from-zinc-500 to-slate-600', count: partsData.powertrain.length },
  { id: 'ev', title: '전기차 (EV)', icon: '⚡', color: 'from-green-500 to-emerald-600', count: partsData.ev.length },
  { id: 'chassis', title: '섀시/서스펜션', icon: '🔧', color: 'from-indigo-500 to-violet-600', count: partsData.chassis.length },
  { id: 'electrical', title: '전장/전자', icon: '🔌', color: 'from-purple-500 to-fuchsia-600', count: partsData.electrical.length },
  { id: 'hvac', title: 'HVAC (공조)', icon: '❄️', color: 'from-cyan-500 to-teal-600', count: partsData.hvac.length },
  { id: 'fuel', title: '연료 시스템', icon: '⛽', color: 'from-orange-500 to-red-600', count: partsData.fuel.length },
  { id: 'exhaust', title: '배기 시스템', icon: '💨', color: 'from-gray-500 to-zinc-600', count: partsData.exhaust.length },
  { id: 'cooling', title: '냉각 시스템', icon: '🌡️', color: 'from-blue-400 to-indigo-500', count: partsData.cooling.length },
  { id: 'lighting', title: '조명', icon: '💡', color: 'from-yellow-400 to-orange-500', count: partsData.lighting.length },
  { id: 'infotainment', title: '인포테인먼트', icon: '📺', color: 'from-pink-500 to-rose-600', count: partsData.infotainment.length },
];

// 총 부품 수 계산
const totalParts = Object.values(partsData).reduce((sum, arr) => sum + arr.length, 0);

export default function AutomotivePartsBOMPage() {
  const [activeCategory, setActiveCategory] = useState('exterior');

  const currentParts = partsData[activeCategory as keyof typeof partsData];
  const currentCat = categories.find(c => c.id === activeCategory);

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
            <h1 className="text-3xl font-bold">자동차 부품 BOM (완전판)</h1>
            <p className="text-zinc-400">Bill of Materials - 차량 구성 부품 총 {totalParts}종</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-xl p-6 mb-8">
          <p className="text-xl text-zinc-300">
            자동차 1대는 약 <span className="text-purple-400 font-bold">20,000~30,000개</span>의 부품으로 구성됩니다.
            이 페이지에서는 주요 부품 <span className="text-purple-400 font-bold">{totalParts}종</span>을 17개 카테고리로 분류하여 학습합니다.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {[
            { label: '카테고리', value: categories.length, unit: '개' },
            { label: '수록 부품', value: totalParts, unit: '종' },
            { label: '바디', value: partsData.body.length },
            { label: '내/외장', value: partsData.interior.length + partsData.exterior.length },
            { label: '파워트레인', value: partsData.powertrain.length + partsData.ev.length },
            { label: '전장/안전', value: partsData.electrical.length + partsData.safety.length },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
              <div className="text-xl font-bold text-purple-400">
                {stat.value}<span className="text-sm text-zinc-500 ml-1">{stat.unit || ''}</span>
              </div>
              <div className="text-xs text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Grid */}
      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h3 className="text-sm text-zinc-400 mb-4">카테고리 선택 ({categories.length}개)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white`
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                <span>{cat.icon}</span>
                <span className="truncate">{cat.title}</span>
                <span className="ml-auto text-xs opacity-70">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Parts List */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{currentCat?.icon}</span>
          <div>
            <h2 className="text-2xl font-bold">{currentCat?.title}</h2>
            <p className="text-sm text-zinc-500">{currentParts.length}개 부품</p>
          </div>
        </div>

        <div className="grid gap-4">
          {currentParts.map((part: any, i: number) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-purple-500/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-purple-400">{part.name}</h3>
                  <p className="text-sm text-zinc-500">{part.english}</p>
                </div>
                {(part.weight || part.cost) && (
                  <div className="text-right">
                    {part.weight && <div className="text-sm text-green-400">{part.weight}</div>}
                    {part.cost && <div className="text-sm text-zinc-500">{part.cost}</div>}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                {part.material && (
                  <div>
                    <span className="text-zinc-500">재질: </span>
                    <span className="text-zinc-300">{part.material}</span>
                  </div>
                )}
                {part.type && (
                  <div>
                    <span className="text-zinc-500">종류: </span>
                    <span className="text-zinc-300">{part.type}</span>
                  </div>
                )}
                {part.location && (
                  <div>
                    <span className="text-zinc-500">위치: </span>
                    <span className="text-zinc-300">{part.location}</span>
                  </div>
                )}
              </div>

              {part.function && (
                <div className="mt-3 pt-3 border-t border-zinc-800">
                  <span className="text-zinc-500 text-sm">기능: </span>
                  <span className="text-zinc-300 text-sm">{part.function}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BOM Structure */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">BOM 레벨 구조</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-3">Level 구조</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-12 text-zinc-500 font-mono">L0</span>
                  <span>완성차 (Vehicle)</span>
                </div>
                <div className="flex items-center gap-2 pl-4">
                  <span className="w-8 text-zinc-500 font-mono">L1</span>
                  <span>바디, 섀시, 파워트레인, 전장, 내장, 외장</span>
                </div>
                <div className="flex items-center gap-2 pl-8">
                  <span className="w-4 text-zinc-500 font-mono">L2</span>
                  <span>도어, 시트, 서스펜션, 엔진</span>
                </div>
                <div className="flex items-center gap-2 pl-12">
                  <span className="text-zinc-500 font-mono">L3</span>
                  <span>도어트림, 시트프레임, 쇼크업소버</span>
                </div>
                <div className="flex items-center gap-2 pl-16">
                  <span className="text-zinc-500 font-mono">L4</span>
                  <span>개별 부품, 볼트/너트</span>
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
                  { name: '외장', pct: '5-8%' },
                  { name: '안전 (에어백/벨트)', pct: '3-5%' },
                  { name: 'HVAC', pct: '3-5%' },
                  { name: '글라스', pct: '2-3%' },
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
        <p>Knowledge Vault - 자동차 부품 BOM (총 {totalParts}종)</p>
      </footer>
    </div>
  );
}
