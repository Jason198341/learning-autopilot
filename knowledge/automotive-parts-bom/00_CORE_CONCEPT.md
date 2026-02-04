# 자동차 부품 BOM (Bill of Materials) - 완전판

## 개요
자동차 1대는 약 **20,000~30,000개**의 부품으로 구성됩니다.
이 문서는 자동차를 구성하는 모든 주요 부품을 체계적으로 정리합니다.

---

## BOM 레벨 구조

| Level | 구분 | 예시 |
|-------|------|------|
| **L0** | 완성차 | Vehicle |
| **L1** | 대분류 | 바디, 섀시, 파워트레인, 전장, 내장, 외장 |
| **L2** | 중분류 | 도어, 시트, 서스펜션, 엔진 |
| **L3** | 소분류 | 도어트림, 시트프레임, 쇼크업소버 |
| **L4** | 부품 | 개별 부품, 볼트/너트 |

---

## 1. 바디 (Body Structure) - 차체 구조

### 1.1 언더바디 (Underbody/Floor)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 프론트 플로어 | Front Floor | 스틸/AHSS | 엔진룸 후방 바닥, 서스펜션 마운팅 |
| 센터 플로어 | Center Floor | 스틸 | 승객실 바닥, 터널 형성 |
| 리어 플로어 | Rear Floor | 스틸 | 트렁크/연료탱크 지지 |
| 사이드 멤버 | Side Member | AHSS/핫스탬핑 | 전후 방향 하중 지지, 충돌 에너지 흡수 |
| 크로스 멤버 | Cross Member | 스틸 | 좌우 연결, 비틀림 강성 |
| 터널 | Tunnel | 스틸 | 구동축/배기관 통과, 강성 보강 |
| 킥업 | Kick-up | 스틸 | 리어 액슬 상부 공간 확보 |

### 1.2 사이드 바디 (Side Body)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| A-필러 | A-Pillar (Front Pillar) | 핫스탬핑 1,500MPa | 윈드실드 지지, 정면 충돌 구조 |
| B-필러 | B-Pillar (Center Pillar) | 핫스탬핑/PHS | 루프 지지, 측면 충돌 보호 핵심 |
| C-필러 | C-Pillar (Rear Pillar) | AHSS | 리어 글라스 지지, 측면 강성 |
| D-필러 | D-Pillar | AHSS | 왜건/SUV 후방 지지 |
| 사이드 실 | Side Sill (Rocker Panel) | AHSS | 측면 하단 보강, 배터리 보호(EV) |
| 휠 하우스 | Wheel House | 스틸 | 타이어 수용 공간 |
| 쿼터 패널 | Quarter Panel | 스틸 | 후방 측면 외판 |
| 사이드 루프 레일 | Side Roof Rail | AHSS | 루프-사이드 연결, 커튼에어백 설치 |

### 1.3 프론트 바디 (Front Body)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 라디에이터 서포트 | Radiator Support | 스틸/복합재 | 라디에이터 고정, 전면 구조 |
| 프론트 엔드 모듈 | Front End Module (FEM) | 복합재/스틸 | 라디에이터+팬+헤드램프 일체화 |
| 카울 | Cowl | 스틸 | 엔진룸-실내 경계, 와이퍼 설치 |
| 대시 패널 | Dash Panel | 스틸 | 엔진룸-실내 격벽, 방음/단열 |
| 펜더 에이프런 | Fender Apron | 스틸 | 휠하우스 상부, 서스펜션 타워 |
| 서스펜션 타워 | Strut Tower | AHSS | 서스펜션 상단 지지점 |
| 숏건 | Shotgun | AHSS | A-필러 하단 연결, 충돌 하중 전달 |

### 1.4 루프 (Roof)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 루프 패널 | Roof Panel | 스틸/알루미늄 | 지붕 외판 |
| 루프 보우 | Roof Bow | 스틸 | 루프 횡방향 보강 |
| 헤더 | Header | 스틸 | 루프 전방(윈드실드 상단) 보강 |
| 백 패널 | Back Panel | 스틸 | 루프 후방(리어글라스 상단) |
| 선루프 프레임 | Sunroof Frame | 스틸/알루미늄 | 선루프 개구부 보강 |

### 1.5 리어 바디 (Rear Body)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 리어 패널 | Rear Panel | 스틸 | 트렁크 후면 |
| 패키지 트레이 | Package Tray | 스틸/복합재 | 리어 시트 후방 선반 |
| 휠하우스 이너 | Wheel House Inner | 스틸 | 후륜 공간 내측 |
| 테일게이트 오프닝 | Tailgate Opening | 스틸 | 테일게이트 힌지/래치 부착점 |

---

## 2. 클로저 (Closures) - 개폐부

### 2.1 도어 (Door)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 도어 아우터 패널 | Door Outer Panel | 스틸/알루미늄 | 외관, 덴트 저항 |
| 도어 이너 패널 | Door Inner Panel | 스틸 | 구조 강성, 부품 설치 |
| 도어 임팩트 빔 | Door Impact Beam | AHSS/알루미늄 | 측면 충돌 보호 |
| 도어 힌지 | Door Hinge | 스틸 | 개폐 축 |
| 도어 체커 | Door Checker | 스틸+고무 | 열림 각도 유지 |
| 도어 래치 | Door Latch | 스틸/아연다이캐스팅 | 잠금/열림 |
| 도어 스트라이커 | Door Striker | 스틸 | 래치 결합부 |
| 도어 락 액추에이터 | Door Lock Actuator | 모터+기어 | 전동 잠금 |
| 아웃사이드 핸들 | Outside Handle | ABS/크롬 도금/아연 | 외부 개폐 조작 |
| 인사이드 핸들 | Inside Handle | ABS/크롬 | 내부 개폐 조작 |
| 도어 씰 | Door Seal (Weatherstrip) | EPDM | 방수/방음/방진 |
| 벨트 몰딩 | Belt Molding | EPDM+메탈 | 유리-도어 경계 씰링 |
| 런 채널 | Run Channel | EPDM | 유리 승강 가이드 |

### 2.2 후드 (Hood/Bonnet)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 후드 아우터 | Hood Outer | 스틸/알루미늄 | 외관, 보행자 보호(충격 흡수) |
| 후드 이너 | Hood Inner | 스틸/알루미늄 | 보강 구조 |
| 후드 힌지 | Hood Hinge | 스틸 | 개폐 축 |
| 후드 래치 | Hood Latch | 스틸 | 1차/2차 잠금 |
| 후드 스트라이커 | Hood Striker | 스틸 | 래치 결합부 |
| 후드 스테이 | Hood Stay/Prop Rod | 스틸/가스스프링 | 열림 상태 유지 |
| 후드 인슐레이터 | Hood Insulator | 펠트/폼 | 엔진 소음/열 차단 |

### 2.3 테일게이트/트렁크 리드 (Tailgate/Trunk Lid)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 테일게이트 아우터 | Tailgate Outer | 스틸/SMC/알루미늄 | 외관 |
| 테일게이트 이너 | Tailgate Inner | 스틸/PP | 구조, 부품 설치 |
| 테일게이트 힌지 | Tailgate Hinge | 스틸 | 개폐 축 |
| 테일게이트 래치 | Tailgate Latch | 스틸 | 잠금 |
| 테일게이트 스트럿 | Tailgate Strut | 가스스프링 | 열림 보조/유지 |
| 파워 테일게이트 모터 | Power Tailgate Motor | 모터 | 전동 개폐 |
| 리어 스포일러 | Rear Spoiler | ABS/CFRP | 공력/외관 |

### 2.4 연료도어 (Fuel Door)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 연료도어 아우터 | Fuel Door Outer | 스틸/SMC | 외관 |
| 연료도어 이너 | Fuel Door Inner | PP/ABS | 구조 |
| 연료도어 힌지 | Fuel Door Hinge | 스프링 힌지 | 개폐 |
| 연료도어 액추에이터 | Fuel Door Actuator | 솔레노이드 | 잠금 해제 |

---

## 3. 외장 (Exterior)

### 3.1 범퍼 시스템 (Bumper System)

| 부품명 | 영문명 | 재질 | 중량 | 원가 |
|--------|--------|------|------|------|
| 프론트 범퍼 커버 | Front Bumper Cover | PP+EPDM-TD20 | 3-4 kg | $30-50 |
| 리어 범퍼 커버 | Rear Bumper Cover | PP+EPDM-TD20 | 3-4 kg | $25-45 |
| 범퍼 빔 (프론트) | Front Bumper Beam | GMT/스틸/알루미늄 | 3-5 kg | $20-40 |
| 범퍼 빔 (리어) | Rear Bumper Beam | 스틸 | 3-4 kg | $15-30 |
| 에너지 업소버 | Energy Absorber | EPP/PU 폼 | 0.5-1 kg | $5-15 |
| 범퍼 브라켓 | Bumper Bracket | 스틸/PP | 0.3-0.5 kg | $3-8 |
| 로워 그릴 | Lower Grille | PP/ABS | 0.3 kg | $5-10 |
| 에어 덕트 | Air Duct | PP | 0.2 kg | $3-8 |
| 토우 훅 커버 | Tow Hook Cover | PP | 0.05 kg | $1-3 |

### 3.2 그릴 (Grille)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 라디에이터 그릴 | Radiator Grille | ABS/크롬 도금 | 냉각 공기 유입, 외관 |
| 액티브 에어 셔터 | Active Air Shutter | PP+모터 | 공력 개선, 워밍업 시간 단축 |
| 그릴 엠블럼 | Grille Emblem | ABS/크롬 | 브랜드 아이덴티티 |

### 3.3 펜더 & 휠 관련 (Fender & Wheel)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 프론트 펜더 | Front Fender | 스틸/알루미늄/SMC | 휠 커버, 외관 |
| 휠 아치 몰딩 | Wheel Arch Molding | PP/TPO | 휠하우스 장식, 보호 |
| 휠 아치 라이너 | Wheel Arch Liner (Fender Liner) | PP+TD/PET 펠트 | 비산 방지, 소음 차단 |
| 머드 가드 | Mud Guard | PP/고무 | 이물질 튀김 방지 |
| 머드 플랩 | Mud Flap | 고무/PP | 후방 이물질 튀김 방지 |

### 3.4 언더커버 (Undercover)

| 부품명 | 영문명 | 재질 | 중량 | 기능 |
|--------|--------|------|------|------|
| 엔진 언더커버 | Engine Undercover | PP+TD/GMT | 1.5-3 kg | 엔진룸 보호, 공력 |
| 센터 플로어 커버 | Center Floor Cover | PP/PET | 1-2 kg | 공력 개선 |
| 리어 플로어 커버 | Rear Floor Cover | PP | 0.8-1.5 kg | 공력, 연료탱크 보호 |
| 사이드 스커트 | Side Skirt | PP/ABS | 0.5-1 kg | 공력, 외관 |

### 3.5 몰딩 & 트림 (Molding & Trim)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 사이드 몰딩 | Side Body Molding | PP/PVC+크롬 | 측면 장식, 보호 |
| 도어 몰딩 | Door Molding | PVC/크롬 | 도어 보호, 외관 |
| 윈도우 몰딩 | Window Molding | EPDM+메탈/크롬 | 글라스 주변 마감 |
| 루프 몰딩 | Roof Molding | EPDM/PVC | 루프-글라스 경계 |
| 드립 몰딩 | Drip Molding | EPDM | 빗물 배수 유도 |
| 카울 그릴 | Cowl Grille | PP/ABS | 와이퍼 피봇 커버, 환기구 |

### 3.6 아웃사이드 미러 (Outside Mirror)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 미러 하우징 | Mirror Housing | ABS/ASA | 외관, 부품 보호 |
| 미러 글라스 | Mirror Glass | 유리 | 후방 시야 |
| 미러 액추에이터 | Mirror Actuator | 모터 | 전동 접이/조절 |
| 히팅 엘리먼트 | Heating Element | PTC 히터 | 성에/습기 제거 |
| 턴 시그널 램프 | Turn Signal Lamp | LED | 방향 지시 |
| 블라인드 스팟 워닝 | BSW Indicator | LED | 사각지대 경고 |

---

## 4. 내장 (Interior)

### 4.1 인스트루먼트 패널 (Instrument Panel/IP)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| IP 어퍼 | IP Upper | PP/TPO 스킨 | 상부 외관, DAB 커버 |
| IP 로워 | IP Lower | PP | 하부 구조 |
| IP 센터 | IP Center | PP/ABS | 센터페시아 설치 |
| IP 캐리어 | IP Carrier | 스틸/마그네슘 | 구조 뼈대, 부품 설치 |
| 글로브 박스 | Glove Box | PP/ABS | 조수석 수납공간 |
| 글로브 박스 도어 | Glove Box Door | PP/ABS | 수납공간 덮개 |
| 글로브 박스 램프 | Glove Box Lamp | LED | 내부 조명 |
| 센터페시아 | Center Fascia | ABS/PC+ABS | AVN/공조 컨트롤 패널 |
| 클러스터 베젤 | Cluster Bezel | ABS | 계기판 테두리 |
| 에어벤트 | Air Vent | ABS/PC | 공조 토출구 |
| 디프로스터 그릴 | Defroster Grille | ABS | 전면 유리 습기 제거 |

### 4.2 도어 트림 (Door Trim)

| 부품명 | 영문명 | 재질 | 중량 | 원가 |
|--------|--------|------|------|------|
| 도어 트림 패널 | Door Trim Panel | PP/ABS+TPO 스킨 | 2-3 kg | $25-60 |
| 암레스트 | Armrest | PP+PU 폼 | 0.3-0.5 kg | $8-15 |
| 도어 포켓 | Door Pocket | PP | 0.2 kg | $3-8 |
| 스피커 그릴 | Speaker Grille | ABS/메쉬 | 0.1 kg | $2-5 |
| 스위치 베젤 | Switch Bezel | PC+ABS | 0.05 kg | $3-8 |
| 도어 풀 핸들 | Door Pull Handle | ABS/크롬 | 0.1 kg | $2-5 |
| 인사이드 미러 스위치 | Mirror Switch | PC+ABS | 0.02 kg | $3-8 |
| 윈도우 스위치 | Window Switch | PC+ABS | 0.05 kg | $5-15 |

### 4.3 필러 트림 (Pillar Trim)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| A-필러 트림 | A-Pillar Trim | PP/ABS | A-필러 은폐, 에어백 커버 |
| B-필러 어퍼 트림 | B-Pillar Upper Trim | PP/ABS | 시트벨트 가이드 |
| B-필러 로워 트림 | B-Pillar Lower Trim | PP+충격흡수재 | B-필러 은폐, 측면 충돌 흡수 |
| C-필러 트림 | C-Pillar Trim | PP/ABS | C-필러 은폐 |
| D-필러 트림 | D-Pillar Trim | PP/ABS | D-필러 은폐 (왜건/SUV) |

### 4.4 시트 (Seat)

| 부품명 | 영문명 | 재질 | 중량 | 원가 |
|--------|--------|------|------|------|
| 시트 프레임 | Seat Frame | 스틸/마그네슘 | 8-12 kg | $40-80 |
| 시트 쿠션 폼 | Seat Cushion Foam | PU 폼 | 2-3 kg | $15-30 |
| 시트 백 폼 | Seat Back Foam | PU 폼 | 1.5-2.5 kg | $12-25 |
| 시트 트림 커버 | Seat Trim Cover | 직물/레더/인조가죽 | 1-2 kg | $30-150 |
| 헤드레스트 | Headrest | PU 폼+커버+프레임 | 0.8-1.2 kg | $15-40 |
| 시트 레일 | Seat Rail | 스틸 | 2-3 kg | $20-40 |
| 리클라이너 | Recliner | 스틸+기어 | 1.5-2 kg | $15-30 |
| 시트 히터 | Seat Heater | PTC/카본 | 0.3 kg | $20-50 |
| 시트 벤틸레이션 | Seat Ventilation | 팬+덕트 | 0.5 kg | $30-80 |
| 럼버 서포트 | Lumbar Support | 에어백/모터 | 0.2-0.5 kg | $15-40 |
| 시트 벨트 버클 | Seat Belt Buckle | 스틸+PA | 0.2 kg | $5-10 |

### 4.5 헤드라이너 (Headliner)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 헤드라이너 기재 | Headliner Substrate | PU 폼+유리섬유 | 구조, 형상 유지 |
| 헤드라이너 표피 | Headliner Fabric | 부직포/직물 | 외관, 촉감 |
| 선바이저 | Sun Visor | PP+폼+직물 | 차광 |
| 바니티 미러 | Vanity Mirror | 유리+조명 | 화장/면도 거울 |
| 룸 램프 | Room Lamp | LED | 실내 조명 |
| 맵 램프 | Map Lamp | LED | 독서등 |
| 오버헤드 콘솔 | Overhead Console | ABS | 선글라스 보관, 버튼류 |
| 그랩 핸들 | Grab Handle | ABS+PA | 승하차 보조 |
| 코트 훅 | Coat Hook | ABS | 옷걸이 |
| 에어백 커버 (커튼) | Curtain Airbag Cover | 직물+봉제 | 커튼 에어백 수납 |

### 4.6 플로어 & 카펫 (Floor & Carpet)

| 부품명 | 영문명 | 재질 | 중량 | 원가 |
|--------|--------|------|------|------|
| 플로어 카펫 | Floor Carpet | PA/PET 직물+PP 부직포 | 8-15 kg | $50-120 |
| 카펫 패드 (인슐레이터) | Carpet Pad | PU 폼/펠트 | 3-5 kg | $20-40 |
| 매스백 | Mass Back | EPDM/EVA | 2-4 kg | $10-25 |
| 프론트 플로어 매트 | Front Floor Mat | 고무/TPE/카펫 | 1-2 kg | $10-30 |
| 리어 플로어 매트 | Rear Floor Mat | 고무/TPE/카펫 | 1-1.5 kg | $8-20 |
| 트렁크 매트 | Trunk Mat | PET 부직포/고무 | 2-4 kg | $15-40 |
| 카고 커버 | Cargo Cover | 직물+보드 | 1-2 kg | $20-50 |
| 사이드 트림 | Side Trim (쿼터 트림) | PP/ABS | 1-2 kg | $15-35 |

### 4.7 센터 콘솔 (Center Console)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 콘솔 박스 | Console Box | PP/ABS | 수납, 암레스트 |
| 콘솔 리드 | Console Lid | PP+폼+커버 | 덮개 겸 암레스트 |
| 기어 노브 | Gear Knob | ABS/레더/우드 | 변속 조작 |
| 기어 베젤 | Gear Bezel | ABS/크롬 | 기어 주변 마감 |
| 컵홀더 | Cup Holder | ABS | 음료 거치 |
| 무선충전 패드 | Wireless Charger | 코일+커버 | 스마트폰 충전 |
| USB 포트 | USB Port | 커넥터 | 충전/연결 |
| 12V 아웃렛 | 12V Outlet | 소켓 | 전원 공급 |

---

## 5. 글라스 & 씰링 (Glass & Sealing)

### 5.1 글라스 (Glass)

| 부품명 | 영문명 | 재질 | 중량 | 원가 |
|--------|--------|------|------|------|
| 윈드실드 | Windshield | 접합유리(유리+PVB+유리) | 10-15 kg | $80-400 |
| 리어 글라스 | Rear Glass | 강화유리+열선 | 5-8 kg | $40-100 |
| 프론트 도어 글라스 | Front Door Glass | 강화유리 | 2-3 kg | $20-50 |
| 리어 도어 글라스 | Rear Door Glass | 강화유리 | 2-3 kg | $20-50 |
| 쿼터 글라스 | Quarter Glass | 강화유리 | 0.5-1 kg | $15-40 |
| 선루프 글라스 | Sunroof Glass | 강화유리/접합유리 | 5-10 kg | $100-300 |
| 파노라마 루프 | Panoramic Roof | 접합유리 | 15-25 kg | $300-800 |

### 5.2 씰링 (Sealing)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 도어 웨더스트립 | Door Weatherstrip | EPDM | 도어-바디 방수/방음 |
| 글라스 런 채널 | Glass Run Channel | EPDM | 도어 글라스 승강 가이드 |
| 벨트 웨더스트립 | Belt Weatherstrip | EPDM+메탈 | 도어 벨트라인 씰링 |
| 윈드실드 몰딩 | Windshield Molding | EPDM/PVC | 윈드실드 주변 마감 |
| 부틸 테이프 | Butyl Tape | IIR (부틸고무) | 글라스 1차 씰링, 진동 흡수 |
| 우레탄 실러 | Urethane Sealant | PU | 글라스 접착 |
| 후드 씰 | Hood Seal | EPDM | 후드-카울 방수 |
| 트렁크 씰 | Trunk Seal | EPDM | 트렁크 방수 |
| 선루프 씰 | Sunroof Seal | EPDM | 선루프 방수 |

---

## 6. 파워트레인 (Powertrain) - ICE

### 6.1 엔진 (Engine)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 실린더 블록 | Cylinder Block | 주철/알루미늄 | 엔진 본체 |
| 실린더 헤드 | Cylinder Head | 알루미늄 | 밸브/포트 수용 |
| 크랭크샤프트 | Crankshaft | 단조강 | 왕복→회전 운동 변환 |
| 커넥팅 로드 | Connecting Rod | 단조강 | 피스톤-크랭크 연결 |
| 피스톤 | Piston | 알루미늄 합금 | 연소 압력 수용 |
| 피스톤 링 | Piston Ring | 주철/스틸 | 기밀, 오일 제어 |
| 캠샤프트 | Camshaft | 주철/스틸 | 밸브 개폐 제어 |
| 밸브 | Valve (흡기/배기) | 스틸/티타늄 | 흡배기 제어 |
| 밸브 스프링 | Valve Spring | 스프링강 | 밸브 복귀 |
| 타이밍 체인/벨트 | Timing Chain/Belt | 스틸/고무 | 크랭크-캠 동기화 |
| 오일 펌프 | Oil Pump | 알루미늄 | 윤활유 순환 |
| 워터 펌프 | Water Pump | 알루미늄/플라스틱 | 냉각수 순환 |
| 터보차저 | Turbocharger | 특수합금 | 과급 |
| 인터쿨러 | Intercooler | 알루미늄 | 과급 공기 냉각 |
| EGR 밸브 | EGR Valve | 스틸 | 배기가스 재순환 |

### 6.2 변속기 (Transmission)

| 부품명 | 영문명 | 종류 | 기능 |
|--------|--------|------|------|
| 변속기 케이스 | Transmission Case | 알루미늄 | 본체 |
| 토크 컨버터 | Torque Converter | AT용 | 동력 전달, 증폭 |
| 클러치 | Clutch | MT/DCT용 | 동력 단속 |
| 기어 세트 | Gear Set | 스틸 | 변속비 구현 |
| 싱크로나이저 | Synchronizer | 스틸 | 기어 맞물림 동기화 |
| 밸브 바디 | Valve Body | AT용 | 유압 제어 |
| TCU | Transmission Control Unit | 전자제어 | 변속 제어 |

### 6.3 구동계 (Drivetrain)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 드라이브 샤프트 | Drive Shaft | 스틸/알루미늄/CFRP | 동력 전달 (FR/4WD) |
| CV 조인트 | CV Joint | 스틸 | 등속 동력 전달 |
| CV 부트 | CV Boot | 고무/TPE | CV 조인트 보호 |
| 액슬 샤프트 | Axle Shaft | 스틸 | 바퀴에 동력 전달 |
| 디퍼렌셜 | Differential | 스틸+알루미늄 하우징 | 좌우 바퀴 회전 차이 허용 |
| 트랜스퍼 케이스 | Transfer Case | 4WD용 | 전후륜 동력 분배 |

---

## 7. 파워트레인 (Powertrain) - EV

### 7.1 배터리 시스템 (Battery System)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 배터리 셀 | Battery Cell | 리튬이온 | 에너지 저장 기본 단위 |
| 배터리 모듈 | Battery Module | 셀+프레임 | 셀 묶음 |
| 배터리 팩 | Battery Pack | 모듈+케이스+BMS | 완성된 배터리 어셈블리 |
| 배터리 케이스 | Battery Case | 알루미늄/스틸 | 보호, 구조 |
| BMS | Battery Management System | ECU | 충방전/온도/균형 제어 |
| 열관리 시스템 | Thermal Management | 냉각판+냉매 | 온도 조절 |
| 고전압 커넥터 | HV Connector | 특수 커넥터 | 고전압 연결 |
| 서비스 플러그 | Service Plug | 안전 차단 | 정비 시 고전압 차단 |

### 7.2 전기 구동계 (Electric Drive)

| 부품명 | 영문명 | 종류 | 기능 |
|--------|--------|------|------|
| 구동 모터 | Traction Motor | PMSM/IM | 구동력 생성 |
| 인버터 | Inverter | IGBT/SiC | DC→AC 변환 |
| 감속기 | Reducer | 기어 | 모터 회전수 감속 |
| DC-DC 컨버터 | DC-DC Converter | 전력변환 | 고전압→12V 변환 |
| OBC | On-Board Charger | 충전기 | AC→DC 변환 (완속 충전) |
| 충전 인렛 | Charging Inlet | 커넥터 | 충전 연결부 |

---

## 8. 섀시 (Chassis)

### 8.1 서스펜션 (Suspension)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 코일 스프링 | Coil Spring | 스프링강 | 충격 흡수, 차고 유지 |
| 쇼크 업소버 | Shock Absorber | 스틸+오일 | 진동 감쇠 |
| 스트럿 어셈블리 | Strut Assembly | 일체형 | 스프링+쇼크 통합 |
| 로워 컨트롤 암 | Lower Control Arm | 스틸/알루미늄 | 휠 상하 운동 안내 |
| 어퍼 컨트롤 암 | Upper Control Arm | 스틸/알루미늄 | 휠 상하 운동 안내 |
| 스태빌라이저 바 | Stabilizer Bar (Sway Bar) | 스프링강 | 롤 억제 |
| 스태빌라이저 링크 | Stabilizer Link | 스틸 | 스태빌라이저 연결 |
| 볼 조인트 | Ball Joint | 스틸 | 조향/현가 연결 |
| 부시 | Bushing | 고무/PU | 진동 흡수, 연결 |
| 너클 | Knuckle | 주철/알루미늄 | 휠 베어링/브레이크 설치 |
| 휠 베어링 | Wheel Bearing | 스틸 | 휠 회전 지지 |

### 8.2 스티어링 (Steering)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 스티어링 휠 | Steering Wheel | PU/레더+마그네슘 | 조향 조작 |
| 스티어링 컬럼 | Steering Column | 스틸 | 회전력 전달, 충격 흡수 |
| 스티어링 기어 (R&P) | Rack & Pinion | 스틸 | 회전→직선 운동 변환 |
| EPS 모터 | EPS Motor | 전기모터 | 조향력 보조 |
| 타이 로드 | Tie Rod | 스틸 | 랙-너클 연결 |
| 타이 로드 엔드 | Tie Rod End | 스틸 | 타이로드-너클 볼조인트 |
| 스티어링 샤프트 | Steering Shaft | 스틸 | 컬럼-기어 연결 |
| 유니버셜 조인트 | Universal Joint | 스틸 | 각도 변화 허용 |

### 8.3 브레이크 (Brake)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 브레이크 디스크 | Brake Disc (Rotor) | 주철/카본세라믹 | 마찰면 |
| 브레이크 캘리퍼 | Brake Caliper | 알루미늄/주철 | 패드 가압 |
| 브레이크 패드 | Brake Pad | 세미메탈릭/세라믹 | 마찰재 |
| 브레이크 드럼 | Brake Drum | 주철 | 드럼식 마찰면 |
| 브레이크 슈 | Brake Shoe | 마찰재+프레임 | 드럼식 마찰재 |
| 마스터 실린더 | Master Cylinder | 알루미늄 | 유압 생성 |
| 브레이크 부스터 | Brake Booster | 진공/전동 | 배력 |
| ABS 모듈레이터 | ABS Modulator | 유압밸브 | ABS 제어 |
| 브레이크 호스 | Brake Hose | 고무+브레이드 | 유압 전달 (유연) |
| 브레이크 파이프 | Brake Pipe | 스틸 | 유압 전달 (고정) |
| 주차 브레이크 | Parking Brake | 케이블/전동 | 주차 시 고정 |

### 8.4 휠 & 타이어 (Wheel & Tire)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 알로이 휠 | Alloy Wheel | 알루미늄 합금 | 타이어 장착, 외관 |
| 스틸 휠 | Steel Wheel | 스틸 | 타이어 장착 |
| 타이어 | Tire | 고무+스틸벨트 | 노면 접촉, 쿠션 |
| 밸브 스템 | Valve Stem | 고무/금속 | 공기 주입구 |
| TPMS 센서 | TPMS Sensor | 전자식 | 공기압 모니터링 |
| 휠 볼트/너트 | Wheel Bolt/Nut | 스틸 | 휠 고정 |
| 휠 캡 | Wheel Cap | 플라스틱 | 허브 장식 |

---

## 9. 전장 (Electrical/Electronics)

### 9.1 전원 시스템 (Power System)

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| 배터리 (12V) | Auxiliary Battery | 시동, 전장 전원 |
| 알터네이터 | Alternator | 발전 |
| 스타터 모터 | Starter Motor | 시동 |
| 퓨즈 박스 | Fuse Box | 과전류 보호 |
| 릴레이 박스 | Relay Box | 스위칭 |
| 접지 케이블 | Ground Cable | 접지 |

### 9.2 와이어링 하네스 (Wiring Harness)

| 부품명 | 영문명 | 위치/기능 |
|--------|--------|----------|
| 엔진 하네스 | Engine Harness | 엔진룸 센서/액추에이터 연결 |
| 프론트 하네스 | Front Harness | 헤드램프, 범퍼 센서 |
| 바디 하네스 | Body Harness | 실내 전장 |
| 도어 하네스 | Door Harness | 도어 내 전장 |
| 루프 하네스 | Roof Harness | 선루프, 룸램프 |
| 플로어 하네스 | Floor Harness | 시트, 플로어 전장 |
| 리어 하네스 | Rear Harness | 테일램프, 센서 |

### 9.3 ECU (Electronic Control Unit)

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| ECM | Engine Control Module | 엔진 제어 |
| TCM | Transmission Control Module | 변속 제어 |
| BCM | Body Control Module | 바디 전장 제어 |
| ADAS ECU | ADAS Control Unit | 첨단 운전 보조 |
| 에어백 ECU | Airbag Control Unit | 에어백 전개 제어 |
| EPS ECU | EPS Control Unit | 전동 조향 제어 |
| ABS/ESC ECU | ABS/ESC Module | 제동/자세 제어 |
| Gateway | Gateway Module | 네트워크 중계 |

### 9.4 센서 (Sensors)

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| 산소 센서 | Oxygen Sensor | 배기 산소 농도 측정 |
| 공기유량 센서 | MAF Sensor | 흡입 공기량 측정 |
| 크랭크 위치 센서 | Crankshaft Position Sensor | 크랭크 위치/회전수 |
| 캠 위치 센서 | Camshaft Position Sensor | 캠 위치 |
| 노킹 센서 | Knock Sensor | 노킹 감지 |
| 냉각수 온도 센서 | Coolant Temp Sensor | 냉각수 온도 |
| 흡기 온도 센서 | IAT Sensor | 흡기 온도 |
| 스로틀 위치 센서 | TPS | 스로틀 개도 |
| 조향각 센서 | Steering Angle Sensor | 조향 각도 |
| 요레이트 센서 | Yaw Rate Sensor | 회전 각속도 |
| 가속도 센서 | G-Sensor | 가속도 |
| 휠 속도 센서 | Wheel Speed Sensor | 바퀴 회전 속도 |
| 주차 센서 | Parking Sensor (USS) | 장애물 거리 |
| 레인 센서 | Rain Sensor | 빗물 감지 |

---

## 10. ADAS & 안전 (ADAS & Safety)

### 10.1 ADAS 센서

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| 프론트 카메라 | Front Camera | 차선/차량/보행자 인식 |
| 서라운드 뷰 카메라 | Surround View Camera | 360도 시야 |
| 프론트 레이더 | Front Radar | 전방 장애물 감지 |
| 코너 레이더 | Corner Radar | 측면/후측방 감지 |
| 리어 레이더 | Rear Radar | 후방 교차 감지 |
| LiDAR | LiDAR | 3D 거리 측정 |
| 초음파 센서 | Ultrasonic Sensor | 근거리 장애물 |

### 10.2 에어백 (Airbag)

| 부품명 | 영문명 | 위치 | 기능 |
|--------|--------|------|------|
| 운전석 에어백 | Driver Airbag (DAB) | 스티어링 휠 | 정면 충돌 보호 |
| 조수석 에어백 | Passenger Airbag (PAB) | IP 상단 | 정면 충돌 보호 |
| 사이드 에어백 | Side Airbag | 시트 측면 | 측면 충돌 가슴 보호 |
| 커튼 에어백 | Curtain Airbag | 루프 레일 | 측면/전복 머리 보호 |
| 무릎 에어백 | Knee Airbag | IP 하단 | 무릎/대퇴부 보호 |
| 센터 에어백 | Center Airbag | 시트 사이 | 승객 간 충돌 방지 |
| 리어 사이드 에어백 | Rear Side Airbag | 2열 | 2열 측면 보호 |

### 10.3 시트벨트 (Seat Belt)

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| 웨빙 | Webbing | PET 벨트 띠 |
| 리트랙터 | Retractor | 벨트 권취, 감김 |
| 버클 | Buckle | 텅 결합부 |
| 텅 | Tongue | 버클 삽입부 |
| 앵커 | Anchor | 차체 고정점 |
| 프리텐셔너 | Pretensioner | 충돌 시 벨트 당김 |
| 로드 리미터 | Load Limiter | 흉부 하중 제한 |
| 하이트 어저스터 | Height Adjuster | 어깨 위치 조절 |

---

## 11. HVAC (공조)

### 11.1 에어컨 시스템 (A/C System)

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| 컴프레서 | Compressor | 냉매 압축 |
| 컨덴서 | Condenser | 냉매 응축 (고온→저온) |
| 리시버 드라이어 | Receiver Drier | 냉매 건조/필터 |
| 익스팬션 밸브 | Expansion Valve | 냉매 팽창 |
| 에바포레이터 | Evaporator | 냉매 증발 (냉각) |
| 에어컨 라인 | A/C Lines | 냉매 배관 |

### 11.2 히팅 시스템 (Heating System)

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| 히터 코어 | Heater Core | 냉각수 열로 난방 |
| 히터 호스 | Heater Hose | 냉각수 배관 |
| PTC 히터 | PTC Heater | 전기 난방 (EV) |
| 열펌프 | Heat Pump | 효율적 냉난방 (EV) |

### 11.3 송풍 시스템 (Air Distribution)

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| 블로워 모터 | Blower Motor | 송풍 |
| HVAC 케이스 | HVAC Case | 공조 유닛 하우징 |
| 에어 필터 | Cabin Air Filter | 외기 필터 |
| 에어 덕트 | Air Duct | 공기 유로 |
| 에어 벤트 | Air Vent | 토출구 |
| 믹스 도어 | Mix Door | 냉온풍 비율 조절 |
| 모드 도어 | Mode Door | 토출 위치 조절 |
| 내외기 도어 | Fresh/Recirc Door | 내기/외기 선택 |

---

## 12. 연료 시스템 (Fuel System)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 연료 탱크 | Fuel Tank | HDPE/스틸 | 연료 저장 |
| 연료 펌프 | Fuel Pump | 전동 모터 | 연료 가압 송출 |
| 연료 필터 | Fuel Filter | 여과재 | 불순물 제거 |
| 연료 인젝터 | Fuel Injector | 솔레노이드 밸브 | 정밀 분사 |
| 연료 레일 | Fuel Rail | 스틸/알루미늄 | 인젝터 연료 분배 |
| 연료 라인 | Fuel Line | 스틸/나일론 | 연료 배관 |
| 연료 필러 파이프 | Fuel Filler Pipe | HDPE/스틸 | 주유구-탱크 연결 |
| 연료 캡 | Fuel Cap | PP/PA | 주유구 마개 |
| 캡리스 유닛 | Capless Unit | PA+스틸 | 캡 없는 주유구 |
| EVAP 캐니스터 | EVAP Canister | 활성탄 | 연료 증발가스 흡착 |
| 퍼지 밸브 | Purge Valve | 솔레노이드 | 캐니스터 가스 퍼지 |

---

## 13. 냉각 시스템 (Cooling System)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 라디에이터 | Radiator | 알루미늄 | 냉각수 방열 |
| 라디에이터 캡 | Radiator Cap | 금속 | 압력 유지, 밀폐 |
| 쿨링 팬 | Cooling Fan | 플라스틱+모터 | 강제 통풍 |
| 팬 쉬라우드 | Fan Shroud | PP | 팬 덕트 |
| 워터 펌프 | Water Pump | 알루미늄/플라스틱 | 냉각수 순환 |
| 서모스탯 | Thermostat | 왁스 밸브 | 냉각수 온도 조절 |
| 서모스탯 하우징 | Thermostat Housing | 플라스틱/알루미늄 | 서모스탯 수용 |
| 라디에이터 호스 | Radiator Hose | EPDM | 냉각수 배관 |
| 히터 호스 | Heater Hose | EPDM | 히터 코어 연결 |
| 쿨런트 탱크 | Coolant Tank | PP | 냉각수 보조 탱크 |
| 오일 쿨러 | Oil Cooler | 알루미늄 | 엔진/변속기유 냉각 |

---

## 14. 배기 시스템 (Exhaust System)

| 부품명 | 영문명 | 재질 | 기능 |
|--------|--------|------|------|
| 배기 매니폴드 | Exhaust Manifold | 주철/스틸 | 실린더별 배기 집합 |
| 터보 (터빈측) | Turbo (Turbine) | 특수합금 | 배기로 터빈 구동 |
| 촉매 컨버터 | Catalytic Converter | 세라믹+귀금속 | 유해가스 정화 |
| DPF/GPF | Particulate Filter | 세라믹 | 미세먼지 포집 |
| SCR | Selective Catalytic Reduction | 세라믹+요소수 | NOx 저감 |
| 머플러 | Muffler | 스틸 | 소음 감쇠 |
| 중간 파이프 | Mid Pipe | 스틸 | 배기 연결 |
| 테일 파이프 | Tail Pipe | 스틸/크롬 | 배기 출구 |
| 플렉시블 파이프 | Flexible Pipe | 스틸 메쉬 | 진동 흡수 |
| 배기 행거 | Exhaust Hanger | 고무 | 배기관 지지 |

---

## 15. 조명 (Lighting)

### 15.1 전방 조명 (Front Lighting)

| 부품명 | 영문명 | 종류 | 기능 |
|--------|--------|------|------|
| 헤드램프 | Headlamp | 할로겐/HID/LED/레이저 | 전방 조명 |
| DRL | Daytime Running Light | LED | 주간 주행등 |
| 포지션 램프 | Position Lamp | LED | 차폭등 |
| 턴 시그널 | Turn Signal | LED/벌브 | 방향 지시 |
| 포그 램프 | Fog Lamp | 할로겐/LED | 안개등 |

### 15.2 후방 조명 (Rear Lighting)

| 부품명 | 영문명 | 종류 | 기능 |
|--------|--------|------|------|
| 테일 램프 | Tail Lamp | LED | 후미등 |
| 브레이크 램프 | Brake Lamp | LED | 제동등 |
| 후방 턴 시그널 | Rear Turn Signal | LED/벌브 | 방향 지시 |
| 후진등 | Reverse Lamp | LED/벌브 | 후진 시 조명 |
| 리어 포그 | Rear Fog Lamp | LED/벌브 | 후방 안개등 |
| CHMSL | Center High-Mount Stop Lamp | LED | 보조 제동등 |
| 번호판등 | License Plate Lamp | LED | 번호판 조명 |

### 15.3 실내 조명 (Interior Lighting)

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| 룸 램프 | Room Lamp | 실내 전체 조명 |
| 맵 램프 | Map Lamp | 독서등 |
| 도어 램프 | Door Lamp | 도어 개방 시 조명 |
| 풋 램프 | Foot Lamp | 발밑 무드등 |
| 앰비언트 라이트 | Ambient Light | 분위기 조명 |
| 트렁크 램프 | Trunk Lamp | 트렁크 조명 |
| 글로브 박스 램프 | Glove Box Lamp | 수납함 조명 |
| 바니티 미러 램프 | Vanity Mirror Lamp | 화장 거울 조명 |

---

## 16. 인포테인먼트 (Infotainment)

| 부품명 | 영문명 | 기능 |
|--------|--------|------|
| AVN 헤드유닛 | Audio-Video Navigation | 멀티미디어/내비게이션 |
| 디스플레이 | Display (LCD/OLED) | 화면 표시 |
| 클러스터 | Instrument Cluster | 계기판 |
| HUD | Head-Up Display | 윈드실드 투영 |
| 스피커 | Speaker | 음향 출력 |
| 앰프 | Amplifier | 음향 증폭 |
| 서브우퍼 | Subwoofer | 저음 재생 |
| 마이크 | Microphone | 음성 입력 |
| 안테나 | Antenna | 라디오/GPS/통신 |
| 텔레매틱스 유닛 | Telematics Unit | 차량 통신 |
| USB/AUX 포트 | USB/AUX Port | 외부 연결 |
| 무선충전 패드 | Wireless Charger | 스마트폰 충전 |

---

## 17. 원가 비중 (일반 세단 기준)

| 시스템 | 비중 | 주요 부품 |
|--------|------|----------|
| **파워트레인** | 25-30% | 엔진, 변속기, 구동계 |
| **바디/섀시** | 20-25% | 차체, 도어, 후드 |
| **전장/전자** | 15-20% | 와이어링, ECU, 센서 |
| **내장** | 12-15% | IP, 도어트림, 헤드라이너 |
| **시트** | 8-10% | 프론트/리어 시트 |
| **외장** | 5-8% | 범퍼, 몰딩, 미러 |
| **안전** | 3-5% | 에어백, 시트벨트 |
| **HVAC** | 3-5% | 에어컨, 히터 |
| **글라스** | 2-3% | 윈드실드, 도어글라스 |

---

## 참고 자료

- [Wikipedia - Bill of Materials](https://en.wikipedia.org/wiki/Bill_of_materials)
- [나무위키 - 자동차/부품](https://namu.wiki/w/%EC%9E%90%EB%8F%99%EC%B0%A8/%EB%B6%80%ED%92%88)
- [Korea Auto News - 차체 구성](https://www.korea-autonews.com/entry/14-%EC%9E%90%EB%8F%99%EC%B0%A8-%EC%B0%A8%EC%B2%B4%EC%9D%98-%EA%B5%AC%EC%84%B1%EA%B3%BC-%EC%A0%9C%EC%A1%B0)
- [Engineering Choice - Car Body Parts](https://www.theengineeringchoice.com/car-body-parts/)
- [Jerry - Car Exterior Design Elements](https://jerry.ai/car-loan/car-exterior-design-elements/)
- [UTI - Powertrain Systems](https://www.uti.edu/blog/automotive/powertrain)
- [AutoZone - Exhaust System Parts](https://www.autozone.com/diy/exhaust/what-are-the-parts-of-the-exhaust-system)
- [Bosch Mobility - Integrated Safety Systems](https://www.bosch-mobility.com/en/solutions/driving-safety/integrated-safety-systems/)
