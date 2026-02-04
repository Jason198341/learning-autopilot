(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return o},searchParamsToUrlQuery:function(){return s},urlQueryToSearchParams:function(){return a}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});function s(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function l(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,l(e));else t.set(r,l(n));return t}function o(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return a},formatWithValidation:function(){return c},urlObjectKeys:function(){return o}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let s=e.r(90809)._(e.r(98183)),l=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",a=e.hash||"",o=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),o&&"object"==typeof o&&(o=String(s.urlQueryToSearchParams(o)));let u=e.search||o&&`?${o}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||l.test(n))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),a&&"#"!==a[0]&&(a="#"+a),u&&"?"!==u[0]&&(u="?"+u),i=i.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${i}${u}${a}`}let o=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return a(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(71645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=s(e,n)),t&&(i.current=s(t,n))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return P},MissingStaticPage:function(){return j},NormalizeError:function(){return g},PageNotFoundError:function(){return y},SP:function(){return m},ST:function(){return x},WEB_VITALS:function(){return s},execOnce:function(){return l},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return o},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return N}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let s=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>a.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,x=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class g extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class j extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class P extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function N(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return s}});let n=e.r(18967),i=e.r(52817);function s(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return y}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let s=e.r(90809),l=e.r(43476),a=s._(e.r(71645)),o=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(91949),h=e.r(73668),m=e.r(9396);function x(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}function b(t){var r;let n,i,s,[o,b]=(0,a.useOptimistic)(p.IDLE_LINK_STATUS),y=(0,a.useRef)(null),{href:j,as:P,children:N,prefetch:v=null,passHref:C,replace:S,shallow:A,scroll:R,onClick:E,onMouseEnter:O,onTouchStart:k,legacyBehavior:w=!1,onNavigate:z,ref:L,unstable_dynamicOnHover:_,...I}=t;n=N,w&&("string"==typeof n||"number"==typeof n)&&(n=(0,l.jsx)("a",{children:n}));let M=a.default.useContext(c.AppRouterContext),T=!1!==v,B=!1!==v?null===(r=v)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:W,as:U}=a.default.useMemo(()=>{let e=x(j);return{href:e,as:P?x(P):e}},[j,P]);if(w){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=a.default.Children.only(n)}let $=w?i&&"object"==typeof i&&i.ref:L,D=a.default.useCallback(e=>(null!==M&&(y.current=(0,p.mountLinkInstance)(e,W,M,B,T,b)),()=>{y.current&&((0,p.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,p.unmountPrefetchableInstance)(e)}),[T,W,M,B,b]),F={ref:(0,u.useMergedRef)(D,$),onClick(t){w||"function"!=typeof E||E(t),w&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!M||t.defaultPrevented||function(t,r,n,i,s,l,o){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){s&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);a.default.startTransition(()=>{d(n||r,s?"replace":"push",l??!0,i.current)})}}(t,W,U,y,S,R,z)},onMouseEnter(e){w||"function"!=typeof O||O(e),w&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),M&&T&&(0,p.onNavigationIntent)(e.currentTarget,!0===_)},onTouchStart:function(e){w||"function"!=typeof k||k(e),w&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),M&&T&&(0,p.onNavigationIntent)(e.currentTarget,!0===_)}};return(0,d.isAbsoluteUrl)(U)?F.href=U:w&&!C&&("a"!==i.type||"href"in i.props)||(F.href=(0,f.addBasePath)(U)),s=w?a.default.cloneElement(i,F):(0,l.jsx)("a",{...I,...F,children:n}),(0,l.jsx)(g.Provider,{value:o,children:s})}e.r(84508);let g=(0,a.createContext)(p.IDLE_LINK_STATUS),y=()=>(0,a.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},83159,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(71645);let i=[{id:"00",title:"핵심 개념",subtitle:"Core Concept",icon:"🎯",completed:!0,content:`
## Concept

**Name**: 자동차 차체 아키텍처 부품 구성과 역할

---

## Why It Matters

차체(Body-in-White)는 자동차의 뼈대로, 승객 안전, 주행 성능, 생산 비용의 70%를 결정한다.
차체 아키텍처를 이해해야 부품 공용화, 경량화, 충돌 안전 설계가 가능하다.

---

## One-Sentence Definition

자동차 차체 아키텍처는 **구조적 강성과 충돌 안전을 확보하면서 각 부품이 하중을 분산하고 전달하는 뼈대 시스템**이다.

---

## First Principles

1. **하중 경로 (Load Path)**: 모든 힘은 명확한 경로를 따라 전달되어야 한다
2. **강성 vs 경량 트레이드오프**: 구조는 충분히 강하면서 최대한 가벼워야 한다
3. **충돌 에너지 흡수**: 크러시 존은 에너지를 흡수하고, 캐빈은 형태를 유지해야 한다

---

## Key Terms

| Term | Definition |
|------|------------|
| BIW (Body-in-White) | 도장 전 용접 완료된 차체 골격 |
| Platform | 여러 차종이 공유하는 기본 하부 구조 |
| Monocoque | 차체와 프레임이 일체화된 구조 (승용차 표준) |
| Pillar (A/B/C/D) | 루프를 지지하는 수직 기둥 (앞→뒤 순서) |
| Rocker Panel (Side Sill) | 도어 아래 측면 강성 부재 |
| Cross Member | 차체 좌우를 연결하는 횡방향 보강재 |
| Subframe | 서스펜션/파워트레인 장착용 부분 프레임 |
| UHSS | Ultra High Strength Steel (초고장력강, 1000MPa+) |
| Crush Zone | 충돌 시 찌그러지며 에너지 흡수하는 영역 |

---

## Prerequisites

- ✅ 기초 재료역학 (응력, 변형, 강성 개념)
- ✅ 자동차 기본 구조 (엔진룸, 캐빈, 트렁크 위치)
- ⬜ 용접/접합 기술 기초 (옵션)
    `},{id:"01",title:"멘탈 모델",subtitle:"Mental Model",icon:"🧠",completed:!0,content:`
## Visual Structure: 차체 아키텍처 전체 구성

\`\`\`
                    ┌─────────────────────────────────────┐
                    │           ROOF PANEL                │
                    │      (루프 패널 - 상부 덮개)          │
                    └─────────────────────────────────────┘
                           │    │    │    │
          ┌────────────────┤    │    │    ├────────────────┐
          │                │    │    │    │                │
     ┌────┴────┐      ┌────┴────┴────┴────┴────┐      ┌────┴────┐
     │ A-PILLAR│      │      ROOF RAIL         │      │ C-PILLAR│
     │ (전방)   │      │   (루프 레일 - 좌우)    │      │ (후방)   │
     └────┬────┘      └────────────────────────┘      └────┬────┘
          │                                                 │
          │    ┌─────────────────────────────────────┐     │
          │    │         PASSENGER CABIN              │     │
          │    │        (승객실 - 생존공간)            │     │
          │    │    ★ 충돌 시 형태 유지 필수 ★        │     │
          │    └─────────────────────────────────────┘     │
          │                      │                          │
     ┌────┴────┐           ┌────┴────┐              ┌──────┴──────┐
     │ B-PILLAR│           │  FLOOR  │              │  D-PILLAR   │
     │(중앙기둥)│           │  PANEL  │              │(SUV/왜건용) │
     └────┬────┘           │ (바닥판) │              └─────────────┘
          │                └────┬────┘
          │                     │
┌─────────┴─────────────────────┴─────────────────────────────────┐
│                        ROCKER PANEL (Side Sill)                 │
│              (로커 패널 - 도어 아래 측면 강성 뼈대)                │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Cause-Effect Chain: 정면 충돌 시 하중 경로

\`\`\`
[충돌 발생]
      ↓
[범퍼 빔] - 1차 접촉, 하중 분산
      ↓
[프론트 레일] - CRUSH ZONE에서 에너지 흡수 (찌그러짐)
      ↓
[대시 패널] - 캐빈과 엔진룸 경계, 하중 차단
      ↓
[플로어 패널 + 로커 패널] - 남은 하중을 차체 전체로 분산
      ↓
[캐빈 형태 유지] - 승객 생존 공간 확보 ✓
\`\`\`

---

## Component Breakdown: 주요 부품별 역할

| Component | Role | 재질 특성 |
|-----------|------|----------|
| Front Rail | 정면충돌 에너지 흡수 | 고장력강 (찌그러지며 흡수) |
| A-Pillar | 전방 시야 확보 + 루프 지지 | UHSS (얇고 강하게) |
| B-Pillar | 측면충돌 방어 핵심 | 핫스탬핑 UHSS (1500MPa+) |
| Rocker Panel | 측면 강성 + 하중 전달 | 고장력강 |
| Roof Rail | 전복 시 캐빈 보호 | 고장력강 |
| Floor Pan | 하중 분산 + NVH | 일반강 + 방음재 |
| Subframe | 서스/엔진 장착점 | 알루미늄 or 강철 |

---

## Mental Shortcuts

1. **Rule of Thumb**: "Pillar는 앞에서부터 A-B-C-D, 숫자가 클수록 뒤쪽"
2. **Quick Check**: "B-Pillar가 가장 두껍고 강해야 한다 (측면충돌 방어)"
3. **Red Flag**: "프론트 레일이 똑바르면 위험 - 크러시 존이 없다는 뜻"
    `},{id:"02",title:"심층 노트",subtitle:"Deep Notes",icon:"📚",completed:!0,content:`
## Layer 1: Surface Understanding

### What I First Learned
- 차체는 BIW(Body-in-White)라 불리는 용접된 골격 구조
- A/B/C/D Pillar가 루프를 지지하고 승객실을 보호
- 앞뒤에 Crush Zone이 있어 충돌 에너지 흡수

---

## Layer 2: Deeper Mechanics

### Why It Works This Way

**1. 의도된 변형 (Controlled Deformation)**
\`\`\`
강한 부분만 있으면? → 에너지가 승객에게 직접 전달
약한 부분만 있으면? → 캐빈이 찌그러져 승객 압사

해결책: "앞뒤는 찌그러지고, 가운데는 버틴다"
        ↓
[Crush Zone] ← 에너지 흡수 → [Rigid Cabin] ← 형태 유지
\`\`\`

**2. 재질별 강도 분포 전략**
| 위치 | 강도(MPa) | 역할 |
|------|-----------|------|
| Front Rail | 400-600 | 찌그러지며 흡수 |
| A-Pillar | 800-1000 | 강성 유지 + 시야 확보 |
| B-Pillar | 1200-1500 | 측면충돌 최후 방어선 |
| Rocker Panel | 600-800 | 하중 전달 통로 |
| Floor Pan | 200-300 | NVH + 일반 지지 |

**3. 핫스탬핑 (Hot Stamping) 기술**
- 강판을 900\xb0C로 가열 → 프레스 성형 → 급냉
- 결과: 1500MPa 초고강도 + 복잡한 형상 가능
- B-Pillar, A-Pillar 등 핵심 부위에 적용

---

## Layer 3: Edge Cases

### When It Breaks
- **스몰 오버랩 충돌**: 차량 모서리만 충돌 → 기존 설계의 약점
- **다중 충돌**: 1차 충돌 후 크러시 존 소진 → 2차 충돌에 취약
- **고속 충돌**: 설계 기준(64km/h) 초과 시 캐빈도 변형 시작

### Common Pitfalls
1. "강철이 많으면 안전하다" → 틀림, 전략적 배치가 핵심
2. "알루미늄은 약하다" → 틀림, 두께와 설계로 보완 가능
3. "SUV가 무조건 안전" → 틀림, 전복 위험↑, 상대 차량 피해↑
    `},{id:"03",title:"유추 연결",subtitle:"Analogy Map",icon:"🔗",completed:!0,content:`
## Primary Analogy

**This concept is like...**

\`\`\`
자동차 차체 ≈ 인체 골격 시스템
\`\`\`

### Why This Analogy Works
| 차체 | 인체 | 공통점 |
|------|------|--------|
| BIW (뼈대) | 골격 | 전체 구조 지지 |
| B-Pillar | 척추 | 핵심 지지 + 보호 |
| Rocker Panel | 갈비뼈 | 측면 보호 |
| Crush Zone | 관절 연골 | 충격 흡수 |
| Floor Pan | 골반 | 하중 분산 기반 |

---

## Cross-Domain Connections

| Domain | Similar Concept | Connection |
|--------|-----------------|------------|
| **건축** | 내진 설계 | 충격을 흡수하는 층 vs 버티는 층 분리 |
| **생물학** | 갑각류 외골격 | 외부 껍질이 구조+보호 동시 수행 |
| **항공** | 항공기 동체 | 모노코크 구조의 원조 |
| **포장** | 에어캡/완충재 | 외부는 찌그러지고, 내부 제품 보호 |

---

## Pattern Recognition

### Pattern 1: 계층적 방어 (Defense in Depth)
\`\`\`
차체:      범퍼 → 크러시존 → 캐빈
사이버보안: 방화벽 → IDS → 암호화
군사:      전초기지 → 방어선 → 본진
\`\`\`

### Pattern 2: 의도된 실패점 (Designed Failure Point)
\`\`\`
차체:      프론트 레일이 먼저 찌그러짐
전기:      퓨즈가 먼저 끊어짐
등산:      로프 약한 부분이 먼저 끊어짐
\`\`\`

---

## Metaphors

> **달걀 포장처럼** - 바깥 박스는 찌그러져도 되지만, 안의 달걀(승객)은 무사해야 한다.

> **권투 선수의 글러브처럼** - 펀치(충돌)의 힘을 분산시켜 손(승객)을 보호한다.
    `},{id:"04",title:"실전 적용",subtitle:"Application",icon:"⚡",completed:!0,content:`
## Real-World Use Cases

### Use Case 1: 신차 개발 시 차체 구조 검토
**Context**: 신규 SUV 개발 프로젝트에서 차체 설계 검토 회의 참석
**How it's applied**:
- B-Pillar 두께와 재질(핫스탬핑 1500MPa) 확인
- 스몰 오버랩 충돌 대비 추가 보강재 유무 확인
- EV 파생 모델 대비 배터리 보호 구조 검토

### Use Case 2: 사고 차량 수리 견적
**Context**: 정면충돌 사고 차량의 수리 범위 판단
**How it's applied**:
- 프론트 레일 손상 여부 확인 (크러시 존 작동 여부)
- A-Pillar/대시패널 변형 확인 (캐빈 침범 여부)

---

## Practice Problems

### Level 1: Basic (기초)

**Q: Pillar 식별**
> A, B, C Pillar를 앞에서 뒤 순서로 나열하고 각각의 주요 역할은?

**Answer:**
- A-Pillar (전방): 시야 확보 + 루프 지지
- B-Pillar (중앙): 측면충돌 방어 핵심 (가장 강함)
- C-Pillar (후방): 루프 지지 + 후방 충돌 전달

### Level 2: Intermediate (중급)

**Q: 하중 경로 분석**
> 64km/h 정면충돌 시 하중이 전달되는 순서는?

**Answer:**
1. 범퍼 빔 → 2. 프론트 레일 (크러시) → 3. 대시 패널 → 4. 플로어/로커 → 5. 캐빈 유지

### Level 3: Advanced (고급)

**Q: EV 트레이드오프**
> 전기차에서 배터리를 바닥에 배치할 때 발생하는 구조적 트레이드오프 3가지는?

**Answer:**
1. 측면충돌 보호 vs 배터리 용량
2. 바닥 높이 vs 실내 공간
3. 강성 vs 중량 (경량화)
    `},{id:"05",title:"탐구 질문",subtitle:"Questions",icon:"❓",completed:!0,content:`
## Open Questions

### High Priority 🔴

1. **기가캐스팅이 기존 용접 구조 대비 충돌 안전성에서 어떤 차이가 있는가?**
   - Why: Tesla가 채택한 기술인데, 수리 불가 이슈가 있음
   - Status: 🔄 Investigating

2. **전기차 배터리 화재 시 차체 구조가 어떻게 대응하는가?**
   - Why: 배터리가 바닥 전체를 차지하면 측면충돌 시 위험
   - Status: 🔄 Investigating

### Medium Priority 🟡

- 자율주행 차량은 충돌 패턴이 어떻게 달라질까?
- 다중충돌(연쇄충돌) 시 차체는 어떻게 대응하는가?

---

## Resolved Questions ✅

### Q: 왜 B-Pillar가 가장 강해야 하는가?
**Answer**: 측면충돌 시 승객과 충돌 지점 사이에 크러시 존이 거의 없음. B-Pillar가 최후의 방어선.

### Q: 핫스탬핑은 왜 강한가?
**Answer**: 900\xb0C 가열 후 급냉으로 마르텐사이트 조직 형성 → 1500MPa 달성

---

## Socratic Questions

- "하중 경로"란 정확히 무엇인가? → 힘이 전달되는 구조적 연결선
- "강성"과 "강도"의 차이는? → 강성=변형 저항, 강도=파괴 저항
- 모든 충돌이 정면/측면/후면 중 하나라는 가정은 현실적인가?
    `},{id:"06",title:"숙련도 평가",subtitle:"Mastery Score",icon:"📊",completed:!0,content:`
## Current Mastery Level

\`\`\`
████████████████░░░░  80% - Advanced
\`\`\`

---

## Gate Verification

### Gate 1: Self-Explanation (자기 설명) ✅ PASS
> "노트 없이 이 개념을 설명할 수 있는가?"

- ✅ Core definition - BIW는 도장 전 용접된 차체 골격
- ✅ Why it matters - 안전, 성능, 비용의 70% 결정
- ✅ Key mechanisms - 크러시 존 흡수 + 캐빈 강성 유지
- ✅ Common pitfalls - "두꺼우면 안전" 오해

**Score**: 4 / 4 = **100%** ✅

---

### Gate 2: Application (실전 적용) ✅ PASS
> "실제 문제에 적용할 수 있는가?"

- ✅ Recognized where to apply
- ✅ Successfully applied basic case
- ✅ Handled edge case
- ✅ Debugged when it failed

**Score**: 4 / 4 = **100%** ✅

---

### Gate 3: Teaching (교육 가능) 🟡 PARTIAL
> "다른 사람에게 가르칠 수 있는가?"

- ✅ Explained to beginner
- ✅ Created helpful analogy
- ⬜ Actual teaching experience needed

**Score**: 3 / 4 = **75%** 🟡

---

## Overall: PASS (80%)

| Gate | Weight | Score |
|------|--------|-------|
| Gate 1 | 30% | 100% |
| Gate 2 | 40% | 100% |
| Gate 3 | 30% | 75% |

---

## Key Insights

1. **"두꺼우면 안전"은 틀렸다** - 전략적 강약 배치가 핵심
2. **B-Pillar가 가장 강한 이유** - 측면충돌 시 크러시 존이 없음
3. **크러시 존의 역설** - 찌그러져야 안전하다
4. **EV가 바꾸는 모든 것** - 배터리가 구조재 역할까지
    `}];function s(){let e,s,l,a,o,c,[u,d]=(0,n.useState)("00"),[f,p]=(0,n.useState)(!1),[h,m]=(0,n.useState)(!1),x=i.find(e=>e.id===u);return(0,t.jsxs)("div",{className:`min-h-screen ${f?"bg-black":"bg-zinc-950"}`,children:[(0,t.jsx)("header",{className:"border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur-sm z-50",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(r.default,{href:"/",className:"text-zinc-400 hover:text-white transition-colors",children:"← 홈"}),(0,t.jsx)("div",{className:"h-4 w-px bg-zinc-700"}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-xl",children:"🚗"}),(0,t.jsx)("span",{className:"font-semibold",children:"자동차 차체 아키텍처"})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("button",{onClick:()=>m(!h),className:`px-3 py-1.5 rounded-lg text-sm transition-all ${h?"bg-green-600 text-white":"bg-zinc-800 text-zinc-400"}`,children:"✅ 품질검사"}),(0,t.jsx)("button",{onClick:()=>p(!f),className:`px-3 py-1.5 rounded-lg text-sm transition-all ${f?"bg-indigo-600 text-white":"bg-zinc-800 text-zinc-400"}`,children:f?"🎯 ON":"🎯 집중"})]})]})}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("aside",{className:`w-72 border-r border-zinc-800 h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto ${f?"hidden":""}`,children:(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,t.jsx)("span",{className:"text-sm text-zinc-500",children:"학습 진행률"}),(0,t.jsx)("span",{className:"text-sm font-semibold text-indigo-400",children:"80%"})]}),(0,t.jsx)("div",{className:"progress-bar",children:(0,t.jsx)("div",{className:"progress-bar-fill",style:{width:"80%"}})})]}),(0,t.jsx)("nav",{className:"space-y-1",children:i.map(e=>(0,t.jsx)("button",{onClick:()=>d(e.id),className:`w-full text-left px-4 py-3 rounded-xl transition-all ${u===e.id?"bg-indigo-600 text-white":"hover:bg-zinc-800 text-zinc-400"}`,children:(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("span",{className:"text-lg",children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-medium text-sm",children:e.title}),(0,t.jsx)("div",{className:"text-xs opacity-60",children:e.subtitle})]}),e.completed&&(0,t.jsx)("span",{className:"ml-auto text-green-400",children:"✓"})]})},e.id))})]})}),(0,t.jsxs)("main",{className:`flex-1 ${f?"max-w-3xl mx-auto":""}`,children:[h&&(0,t.jsxs)("div",{className:"bg-zinc-900 border-b border-zinc-800 p-4",children:[(0,t.jsxs)("h4",{className:"font-semibold mb-3 flex items-center gap-2",children:[(0,t.jsx)("span",{children:"✅"})," 품질 검사 체크리스트"]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-3 gap-4 text-sm",children:[(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"핵심 개념 정의 완료"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"멘탈 모델 구축 완료"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"심층 노트 작성 완료"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"유추 연결 완료"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"실전 문제 풀이 완료"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"QA Gate 통과"})]})]})]}),(0,t.jsx)("article",{className:`p-8 ${f?"focus-mode":""} animate-fadeIn`,children:x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-8",children:[(0,t.jsx)("span",{className:"text-4xl",children:x.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-white",children:x.title}),(0,t.jsx)("p",{className:"text-zinc-500",children:x.subtitle})]})]}),(0,t.jsx)("div",{className:"prose",children:(e=x.content.split("\n"),s=[],l=!1,a="",o=!1,c=[],e.forEach((e,r)=>{if(e.startsWith("```")){l&&(s.push((0,t.jsx)("pre",{className:"bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto my-4 text-sm",children:(0,t.jsx)("code",{className:"text-zinc-300",children:a})},r)),a=""),l=!l;return}if(l){a+=e+"\n";return}if(e.startsWith("|")){o||(o=!0,c=[]);let t=e.split("|").filter(e=>""!==e.trim());e.includes("---")||c.push(t.map(e=>e.trim()));return}if(o&&(s.push((0,t.jsx)("div",{className:"overflow-x-auto my-4",children:(0,t.jsxs)("table",{className:"w-full border-collapse",children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:c[0]?.map((e,r)=>(0,t.jsx)("th",{className:"border border-zinc-700 bg-zinc-800 px-4 py-2 text-left font-semibold",children:e},r))})}),(0,t.jsx)("tbody",{children:c.slice(1).map((e,r)=>(0,t.jsx)("tr",{children:e.map((e,r)=>(0,t.jsx)("td",{className:"border border-zinc-700 px-4 py-2 text-zinc-300",children:e},r))},r))})]})},r)),o=!1,c=[]),e.startsWith("## "))return void s.push((0,t.jsx)("h2",{className:"text-xl font-bold mt-8 mb-4 pb-2 border-b border-zinc-800 text-white",children:e.replace("## ","")},r));if(e.startsWith("### "))return void s.push((0,t.jsx)("h3",{className:"text-lg font-semibold mt-6 mb-3 text-indigo-400",children:e.replace("### ","")},r));if(e.startsWith("---"))return void s.push((0,t.jsx)("hr",{className:"border-zinc-800 my-6"},r));if(e.startsWith(">"))return void s.push((0,t.jsx)("blockquote",{className:"border-l-4 border-indigo-500 pl-4 my-4 text-zinc-400 italic",children:e.replace("> ","")},r));if(e.includes("**")){let n=e.replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-semibold">$1</strong>');s.push((0,t.jsx)("p",{className:"mb-2 text-zinc-300",dangerouslySetInnerHTML:{__html:n}},r));return}if(e.startsWith("- ")||e.startsWith("* ")){let n=e.replace(/^[-*] /,""),i=n.startsWith("✅")||n.startsWith("✓");n.startsWith("⬜")||n.startsWith("☐"),s.push((0,t.jsx)("li",{className:`ml-6 mb-1 text-zinc-300 ${i?"text-green-400":""}`,children:n},r));return}/^\d+\. /.test(e)?s.push((0,t.jsx)("li",{className:"ml-6 mb-1 text-zinc-300 list-decimal",children:e.replace(/^\d+\. /,"")},r)):e.trim()&&s.push((0,t.jsx)("p",{className:"mb-2 text-zinc-300",children:e},r))}),s)}),(0,t.jsxs)("div",{className:"flex justify-between mt-12 pt-8 border-t border-zinc-800",children:["00"!==u&&(0,t.jsx)("button",{onClick:()=>{let e=i.findIndex(e=>e.id===u)-1;e>=0&&d(i[e].id)},className:"px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all",children:"← 이전 단계"}),"06"!==u&&(0,t.jsx)("button",{onClick:()=>{let e=i.findIndex(e=>e.id===u)+1;e<i.length&&d(i[e].id)},className:"px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all ml-auto",children:"다음 단계 →"})]})]})})]})]})]})}e.s(["default",()=>s])}]);