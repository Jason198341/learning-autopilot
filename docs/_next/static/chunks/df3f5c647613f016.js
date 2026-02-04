(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return o},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return a}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function l(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,l(e));else t.set(r,l(n));return t}function o(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return a},formatWithValidation:function(){return c},urlObjectKeys:function(){return o}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});let i=e.r(90809)._(e.r(98183)),l=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,n=e.protocol||"",s=e.pathname||"",a=e.hash||"",o=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),o&&"object"==typeof o&&(o=String(i.urlQueryToSearchParams(o)));let u=e.search||o&&`?${o}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||l.test(n))&&!1!==c?(c="//"+(c||""),s&&"/"!==s[0]&&(s="/"+s)):c||(c=""),a&&"#"!==a[0]&&(a="#"+a),u&&"?"!==u[0]&&(u="?"+u),s=s.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${s}${u}${a}`}let o=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return a(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return s}});let n=e.r(71645);function s(e,t){let r=(0,n.useRef)(null),s=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=s.current;t&&(s.current=null,t())}else e&&(r.current=i(e,n)),t&&(s.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return N},MissingStaticPage:function(){return y},NormalizeError:function(){return g},PageNotFoundError:function(){return j},SP:function(){return h},ST:function(){return x},WEB_VITALS:function(){return i},execOnce:function(){return l},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return o},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>a.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let h="u">typeof performance,x=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class g extends Error{}class j extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class N extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),s=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,s.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return j}};for(var s in n)Object.defineProperty(r,s,{enumerable:!0,get:n[s]});let i=e.r(90809),l=e.r(43476),a=i._(e.r(71645)),o=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(91949),m=e.r(73668),h=e.r(9396);function x(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}function b(t){var r;let n,s,i,[o,b]=(0,a.useOptimistic)(p.IDLE_LINK_STATUS),j=(0,a.useRef)(null),{href:y,as:N,children:v,prefetch:P=null,passHref:S,replace:z,shallow:C,scroll:O,onClick:_,onMouseEnter:k,onTouchStart:w,legacyBehavior:E=!1,onNavigate:M,ref:T,unstable_dynamicOnHover:I,...A}=t;n=v,E&&("string"==typeof n||"number"==typeof n)&&(n=(0,l.jsx)("a",{children:n}));let R=a.default.useContext(c.AppRouterContext),U=!1!==P,$=!1!==P?null===(r=P)||"auto"===r?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:L,as:D}=a.default.useMemo(()=>{let e=x(y);return{href:e,as:N?x(N):e}},[y,N]);if(E){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});s=a.default.Children.only(n)}let H=E?s&&"object"==typeof s&&s.ref:T,W=a.default.useCallback(e=>(null!==R&&(j.current=(0,p.mountLinkInstance)(e,L,R,$,U,b)),()=>{j.current&&((0,p.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,p.unmountPrefetchableInstance)(e)}),[U,L,R,$,b]),F={ref:(0,u.useMergedRef)(W,H),onClick(t){E||"function"!=typeof _||_(t),E&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(t),!R||t.defaultPrevented||function(t,r,n,s,i,l,o){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);a.default.startTransition(()=>{d(n||r,i?"replace":"push",l??!0,s.current)})}}(t,L,D,j,z,O,M)},onMouseEnter(e){E||"function"!=typeof k||k(e),E&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),R&&U&&(0,p.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){E||"function"!=typeof w||w(e),E&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),R&&U&&(0,p.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,d.isAbsoluteUrl)(D)?F.href=D:E&&!S&&("a"!==s.type||"href"in s.props)||(F.href=(0,f.addBasePath)(D)),i=E?a.default.cloneElement(s,F):(0,l.jsx)("a",{...A,...F,children:n}),(0,l.jsx)(g.Provider,{value:o,children:i})}e.r(84508);let g=(0,a.createContext)(p.IDLE_LINK_STATUS),j=()=>(0,a.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},9597,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(71645);let s=[{id:"00",title:"핵심 개념",subtitle:"Core Concept",icon:"🎯",completed:!0,content:`
## 🎯 칵핏이 뭐예요?

### 이름의 유래
**Cockpit**은 원래 **비행기 조종석**을 뜻하는 말이에요.

\`\`\`
비행기 조종석 (Cockpit)
       ↓
"조종사가 비행기와 대화하는 공간"
       ↓
자동차에도 같은 개념 적용
       ↓
자동차 칵핏 = 운전자가 차와 대화하는 공간
\`\`\`

> 💡 쉽게 말하면: **운전석에 앉았을 때 눈앞에 보이는 모든 것**이 칵핏이에요!

---

## One-Sentence Definition

> **자동차 칵핏**이란, 운전자가 차량 정보를 확인하고(보고), 차량을 조작하며(만지고), 편안함을 느끼는(느끼는) **인간-차량 인터페이스의 총체**이다.

---

## Why It Matters

| 관점 | 왜 중요? |
|------|----------|
| **안전** | 잘못된 조작 → 사고 |
| **편의** | 불편하면 피로 |
| **감성** | 차의 첫인상 결정 |
| **가치** | 구매 결정에 큰 영향 |

---

## Key Terms

| 용어 | 쉬운 설명 |
|------|----------|
| **IP** | 앞유리 아래 전체 판 |
| **클러스터** | 핸들 뒤 동그란 계기판 |
| **센터 페시아** | 내비/에어컨 있는 곳 |
| **콘솔** | 기어봉/팔걸이 있는 곳 |
| **H-Point** | 앉았을 때 엉덩이 위치 |
| **아이포인트** | 눈이 있는 높이 |
| **리치** | 팔 뻗어서 닿는 거리 |
| **HMI** | 사람과 기계가 대화하는 방법 |
    `},{id:"01",title:"멘탈 모델",subtitle:"Mental Model",icon:"🧠",completed:!0,content:`
## 🖼️ 칵핏 = 운전자의 사무실

\`\`\`
일반 사무실                     자동차 칵핏
═══════════                    ═══════════

모니터 ────────────────→  클러스터/HUD
키보드/마우스 ─────────→  스티어링/페달
책상 위 물건 ──────────→  센터페시아/콘솔
서랍/수납 ─────────────→  글로브박스/콘솔박스
\`\`\`

---

## 📐 칵핏의 3개 영역

| 영역 | 역할 | 예시 |
|------|------|------|
| **정보 영역** | 운전에 필요한 정보를 본다 | 클러스터, HUD |
| **조작 영역** | 차를 직접 조종한다 | 스티어링, 페달 |
| **편의 영역** | 운전을 편하게 한다 | 에어컨, 오디오 |

---

## 👁️ 운전자의 눈은 어디를 볼까?

\`\`\`
전방 도로: 70%  ← 대부분 여기!
클러스터: 10%  ← 속도 확인
좌측 미러: 8%
센터 디스플레이: 5%
우측 미러: 5%
룸미러: 2%
\`\`\`

> 🚨 **2초 룰**: 전방에서 눈을 떼는 시간 = 최대 2초!

---

## Mental Shortcuts

1. **"3초 룰"**: 처음 보는 기능 3초 안에 이해 못하면 나쁜 설계
2. **"할머니 테스트"**: 할머니도 조작 가능하면 좋은 설계
3. **"왼손 오른손"**: 자주 쓰는 것 → 왼손(핸들 가까이)
    `},{id:"02",title:"심층 노트",subtitle:"Deep Notes",icon:"📚",completed:!0,content:`
## 🧬 인간공학 기초

### H-Point가 뭐예요?

> **H-Point** = Hip Point = 엉덩이 기준점
> 모든 칵핏 설계의 **시작점**!

\`\`\`
H-Point를 정하면:
→ 눈 위치 (아이포인트) 가 정해지고
→ 손 위치 (리치) 가 정해지고
→ 발 위치 (페달 거리) 가 정해집니다!
\`\`\`

### 95%ile? 5%ile?

\`\`\`
5%ile = 작은 여성 대표
95%ile = 큰 남성 대표

이 범위로 90%의 사람을 커버!
\`\`\`

| 항목 | 5%ile 여성 | 95%ile 남성 |
|------|-----------|-------------|
| 키 | 152cm | 180cm |
| 팔 뻗는 거리 | 62cm | 78cm |

---

## 📊 IP 설계 노하우

### 글레어(반사) 방지

| 방법 | 설명 |
|------|------|
| 각도 조절 | IP 상단 10~15\xb0 기울임 |
| 무광 표면 | 광택 없는 재질 |
| 어두운 색 | 검정/짙은 회색 |

---

## 📐 설계 기준값 종합표

| 항목 | 기준값 |
|------|--------|
| 아이포인트-클러스터 | 15~25\xb0 |
| 클러스터 거리 | 700mm |
| 스티어링 직경 | 370mm |
| 그립 직경 | 38mm |
| 암레스트 높이 | H-Point+240mm |
    `},{id:"03",title:"유추 연결",subtitle:"Analogy Map",icon:"🔗",completed:!0,content:`
## 🎯 Primary Analogy

\`\`\`
[자동차 칵핏] ≈ [비행기 조종석]
\`\`\`

| 비행기 조종석 | 자동차 칵핏 |
|-------------|-----------|
| 계기판 | 클러스터 |
| 조종간 | 스티어링 휠 |
| 스로틀 레버 | 가속 페달 |
| HUD | 자동차 HUD |

---

## 🖥️ 클러스터 = 스마트폰 홈화면

\`\`\`
스마트폰                 클러스터
\xb7 상태바         →     \xb7 상태 표시 (연료, 온도)
\xb7 핵심 정보       →     \xb7 속도계
\xb7 자주 쓰는 앱    →     \xb7 미디어/전화/내비
\`\`\`

---

## 🪑 IP = 책상 위 배치

| 책상 | IP |
|------|-----|
| 모니터 (정면) | 클러스터 |
| 키보드 (손 닿는 곳) | 스티어링 |
| 자주 쓰는 물건 | 에어컨/오디오 |
| 서랍 | 글로브박스 |

---

## 👔 인간공학 = 맞춤 양복

\`\`\`
기성복 (S, M, L)   →   양산차
맞춤복 (개인 치수)  →   전동 조절 고급차
\`\`\`
    `},{id:"04",title:"실전 적용",subtitle:"Application",icon:"⚡",completed:!0,content:`
## 🚙 Use Case 1: SUV vs 세단 IP 차이

| 항목 | 세단 | SUV |
|------|------|-----|
| IP 높이 | 낮음 | 높음 |
| 클러스터 각도 | 위로 향함 | 정면 |
| 콘솔 폭 | 좁음 | 넓음 |

---

## 🔋 Use Case 2: 전기차 칵핏 변화

\`\`\`
내연기관차              전기차
\xb7 RPM 타코미터    →   \xb7 없음/최소화
\xb7 기어봉 (큼)     →   \xb7 버튼/다이얼
\xb7 연료 게이지     →   \xb7 배터리 %
\`\`\`

---

## Practice Problem

**Q: 클러스터는 왜 핸들 뒤에 있을까요?**

**A:**
1. 시선 이동 최소화 (전방과 가장 가까움)
2. 가림 방지 (핸들 위로 보임)
3. 조작 분리 (클러스터=보기, 핸들=만지기)

---

## ⚠️ Common Mistakes

| 실수 | 올바른 접근 |
|------|------------|
| "예쁘니까 이 위치" | 인간공학 먼저 |
| "평균 치수로 설계" | 5~95%ile 검증 |
| "버튼 많으면 좋지" | 심플하게 통합 |
| "큰 화면이 좋지" | 적정 크기 |
    `},{id:"05",title:"탐구 질문",subtitle:"Questions",icon:"❓",completed:!0,content:`
## 🔴 Open Questions

### 1. 자율주행 시대 칵핏 변화?

\`\`\`
현재 (레벨 2)              미래 (레벨 5)
핸들 필수           →     핸들 옵션?
전방 주시           →     자유로운 시선
계기판 중요         →     엔터테인먼트 중요
\`\`\`

### 2. 터치 vs 물리버튼?

| 물리 버튼 | 터치스크린 |
|----------|-----------|
| 안 보고 조작 ✓ | 무한한 기능 ✓ |
| 촉감 피드백 ✓ | 업데이트 가능 ✓ |
| 기능 제한 ✗ | 시선 분산 ✗ |

---

## ✅ Resolved Questions

### Q: 왜 운전석이 왼쪽/오른쪽?

\`\`\`
좌측통행 (영국, 일본) → 운전석 오른쪽
우측통행 (한국, 미국) → 운전석 왼쪽

이유: 마주오는 차를 잘 보려고!
\`\`\`

### Q: 에어백이 왜 그렇게 빨리?

\`\`\`
충돌 → 30ms(0.03초) 만에 완전 전개!
시속 50km 충돌 = 0.1초 만에 부딪힘
→ 더 빨라야 의미 있음
\`\`\`
    `},{id:"06",title:"숙련도 평가",subtitle:"Mastery Score",icon:"📊",completed:!0,content:`
## Current Mastery Level

\`\`\`
██████████████░░░░░░  70% - Advanced
\`\`\`

---

## Gate Verification

### Gate 1: Self-Explanation ✅ PASS

- ✅ 칵핏의 정의와 어원
- ✅ 3개 영역 구분
- ✅ H-Point의 의미
- ✅ 5%ile~95%ile 개념

**Score**: 100%

### Gate 2: Application ✅ PASS

- ✅ SUV vs 세단 차이 설명
- ✅ 버튼 배치 좋은/나쁜 구분
- ⬜ 실제 설계 경험

**Score**: 80%

### Gate 3: Teaching 🟡 PARTIAL

- ✅ 비유로 설명 가능
- ✅ 체계적 문서 작성
- ⬜ 실제 교육 경험

**Score**: 75%

---

## 💡 Key Insights

\`\`\`
1. "운전자가 중심이다"
   → 디자인보다 사용성이 우선

2. "H-Point가 모든 것의 시작"
   → 엉덩이 위치 → 눈, 손, 발 결정

3. "자주 쓰는 건 가까이"
   → 모든 배치의 기본 원칙

4. "90%의 사람을 만족시켜라"
   → 5%ile ~ 95%ile 설계
\`\`\`

---

## Next Milestone

**Target**: Expert (90%)
**Actions**:
- [ ] 5개 차종 칵핏 비교 분석
- [ ] HMI/UX 책 1권 읽기
- [ ] 자율주행 칵핏 컨셉 분석
    `}];function i(){let e,i,l,a,o,c,[u,d]=(0,n.useState)("00"),[f,p]=(0,n.useState)(!1),[m,h]=(0,n.useState)(!1),x=s.find(e=>e.id===u);return(0,t.jsxs)("div",{className:`min-h-screen ${f?"bg-black":"bg-zinc-950"}`,children:[(0,t.jsx)("header",{className:"border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur-sm z-50",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(r.default,{href:"/",className:"text-zinc-400 hover:text-white transition-colors",children:"← 홈"}),(0,t.jsx)("div",{className:"h-4 w-px bg-zinc-700"}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-xl",children:"🚗"}),(0,t.jsx)("span",{className:"font-semibold",children:"칵핏 설계 노하우"})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("button",{onClick:()=>h(!m),className:`px-3 py-1.5 rounded-lg text-sm transition-all ${m?"bg-green-600 text-white":"bg-zinc-800 text-zinc-400"}`,children:"✅ 품질검사"}),(0,t.jsx)("button",{onClick:()=>p(!f),className:`px-3 py-1.5 rounded-lg text-sm transition-all ${f?"bg-purple-600 text-white":"bg-zinc-800 text-zinc-400"}`,children:f?"🎯 ON":"🎯 집중"})]})]})}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("aside",{className:`w-72 border-r border-zinc-800 h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto ${f?"hidden":""}`,children:(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,t.jsx)("span",{className:"text-sm text-zinc-500",children:"학습 진행률"}),(0,t.jsx)("span",{className:"text-sm font-semibold text-purple-400",children:"70%"})]}),(0,t.jsx)("div",{className:"h-2 bg-zinc-800 rounded-full overflow-hidden",children:(0,t.jsx)("div",{className:"h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full",style:{width:"70%"}})})]}),(0,t.jsx)("nav",{className:"space-y-1",children:s.map(e=>(0,t.jsx)("button",{onClick:()=>d(e.id),className:`w-full text-left px-4 py-3 rounded-xl transition-all ${u===e.id?"bg-purple-600 text-white":"hover:bg-zinc-800 text-zinc-400"}`,children:(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("span",{className:"text-lg",children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-medium text-sm",children:e.title}),(0,t.jsx)("div",{className:"text-xs opacity-60",children:e.subtitle})]}),e.completed&&(0,t.jsx)("span",{className:"ml-auto text-green-400",children:"✓"})]})},e.id))})]})}),(0,t.jsxs)("main",{className:`flex-1 ${f?"max-w-3xl mx-auto":""}`,children:[m&&(0,t.jsxs)("div",{className:"bg-zinc-900 border-b border-zinc-800 p-4",children:[(0,t.jsxs)("h4",{className:"font-semibold mb-3 flex items-center gap-2",children:[(0,t.jsx)("span",{children:"✅"})," 품질 검사 체크리스트"]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-3 gap-4 text-sm",children:[(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"인간공학 수치 포함"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"신입생도 이해 가능"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"비유/아날로지 활용"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"다이어그램 포함"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded",defaultChecked:!0}),(0,t.jsx)("span",{children:"실전 문제 풀이"})]}),(0,t.jsxs)("label",{className:"flex items-center gap-2 text-zinc-300",children:[(0,t.jsx)("input",{type:"checkbox",className:"rounded"}),(0,t.jsx)("span",{children:"실습 경험 (추가 필요)"})]})]})]}),(0,t.jsx)("article",{className:`p-8 ${f?"focus-mode":""} animate-fadeIn`,children:x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-8",children:[(0,t.jsx)("span",{className:"text-4xl",children:x.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-white",children:x.title}),(0,t.jsx)("p",{className:"text-zinc-500",children:x.subtitle})]})]}),(0,t.jsx)("div",{className:"prose",children:(e=x.content.split("\n"),i=[],l=!1,a="",o=!1,c=[],e.forEach((e,r)=>{if(e.startsWith("```")){l&&(i.push((0,t.jsx)("pre",{className:"bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto my-4 text-sm",children:(0,t.jsx)("code",{className:"text-zinc-300",children:a})},r)),a=""),l=!l;return}if(l){a+=e+"\n";return}if(e.startsWith("|")){o||(o=!0,c=[]);let t=e.split("|").filter(e=>""!==e.trim());e.includes("---")||c.push(t.map(e=>e.trim()));return}if(o&&(i.push((0,t.jsx)("div",{className:"overflow-x-auto my-4",children:(0,t.jsxs)("table",{className:"w-full border-collapse",children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:c[0]?.map((e,r)=>(0,t.jsx)("th",{className:"border border-zinc-700 bg-zinc-800 px-4 py-2 text-left font-semibold",children:e},r))})}),(0,t.jsx)("tbody",{children:c.slice(1).map((e,r)=>(0,t.jsx)("tr",{children:e.map((e,r)=>(0,t.jsx)("td",{className:"border border-zinc-700 px-4 py-2 text-zinc-300",children:e},r))},r))})]})},r)),o=!1,c=[]),e.startsWith("## "))return void i.push((0,t.jsx)("h2",{className:"text-xl font-bold mt-8 mb-4 pb-2 border-b border-zinc-800 text-white",children:e.replace("## ","")},r));if(e.startsWith("### "))return void i.push((0,t.jsx)("h3",{className:"text-lg font-semibold mt-6 mb-3 text-purple-400",children:e.replace("### ","")},r));if(e.startsWith("---"))return void i.push((0,t.jsx)("hr",{className:"border-zinc-800 my-6"},r));if(e.startsWith(">"))return void i.push((0,t.jsx)("blockquote",{className:"border-l-4 border-purple-500 pl-4 my-4 text-zinc-400 italic",children:e.replace("> ","")},r));if(e.includes("**")){let n=e.replace(/\*\*(.*?)\*\*/g,'<strong class="text-white font-semibold">$1</strong>');i.push((0,t.jsx)("p",{className:"mb-2 text-zinc-300",dangerouslySetInnerHTML:{__html:n}},r));return}if(e.startsWith("- ")||e.startsWith("* ")){let n=e.replace(/^[-*] /,""),s=n.startsWith("✅")||n.startsWith("✓")||n.startsWith("[x]");i.push((0,t.jsx)("li",{className:`ml-6 mb-1 text-zinc-300 ${s?"text-green-400":""}`,children:n},r));return}/^\d+\. /.test(e)?i.push((0,t.jsx)("li",{className:"ml-6 mb-1 text-zinc-300 list-decimal",children:e.replace(/^\d+\. /,"")},r)):e.trim()&&i.push((0,t.jsx)("p",{className:"mb-2 text-zinc-300",children:e},r))}),i)}),(0,t.jsxs)("div",{className:"flex justify-between mt-12 pt-8 border-t border-zinc-800",children:["00"!==u&&(0,t.jsx)("button",{onClick:()=>{let e=s.findIndex(e=>e.id===u)-1;e>=0&&d(s[e].id)},className:"px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all",children:"← 이전 단계"}),"06"!==u&&(0,t.jsx)("button",{onClick:()=>{let e=s.findIndex(e=>e.id===u)+1;e<s.length&&d(s[e].id)},className:"px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl transition-all ml-auto",children:"다음 단계 →"})]})]})})]})]})]})}e.s(["default",()=>i])}]);