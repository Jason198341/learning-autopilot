'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Section {
  id: string;
  title: string;
  icon: string;
}

const sections: Section[] = [
  { id: 'overview', title: '법규 개요', icon: '📋' },
  { id: 'mandatory', title: '필수 장비', icon: '🔺' },
  { id: 'safety', title: '안전 기준', icon: '🛡️' },
  { id: 'certification', title: '인증 절차', icon: '📜' },
  { id: 'updates', title: '최신 동향', icon: '🆕' },
];

export default function IndiaRegulationsPage() {
  const [activeSection, setActiveSection] = useState('overview');

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
              <span className="text-2xl">🇮🇳</span>
              <h1 className="text-xl font-bold text-white">인도 내장재 법규</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-green-600/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm mb-6">
              <span>🇮🇳</span>
              <span>India Automotive Regulations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              인도 내장재 법규 총정리
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
              CMVR / AIS / BIS 기준 완벽 정리
            </p>
            <p className="text-lg text-orange-400">
              삼각대, 구급상자, 소화기부터 에어백까지
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-slate-400">관련 AIS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">3</div>
                <div className="text-sm text-slate-400">필수 장비</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">2024</div>
                <div className="text-sm text-slate-400">최신 업데이트</div>
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
                    ? 'bg-orange-500 text-white'
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

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            {/* Regulation Hierarchy */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                인도 법규 체계
              </h2>

              <div className="space-y-4">
                {[
                  { level: 'MVA', name: 'Motor Vehicle Act', desc: '법률 (국회 제정)', color: 'orange' },
                  { level: 'CMVR', name: 'Central Motor Vehicle Rules', desc: '규칙 (교통부 제정)', color: 'yellow' },
                  { level: 'AIS', name: 'Automotive Industry Standards', desc: '기술 표준 (ARAI 제정)', color: 'green' },
                  { level: 'BIS/IS', name: 'Bureau of Indian Standards', desc: '제품 규격 (인증 기준)', color: 'blue' },
                ].map((item, idx) => (
                  <div
                    key={item.level}
                    className={`bg-${item.color}-500/10 border-l-4 border-${item.color}-500 rounded-r-lg p-4`}
                    style={{ marginLeft: `${idx * 20}px` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-bold text-${item.color}-400`}>{item.level}</span>
                      <span className="text-slate-300">{item.name}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Terms */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">핵심 용어</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { term: 'CMVR', full: 'Central Motor Vehicle Rules', desc: '인도 중앙 자동차 규칙' },
                  { term: 'AIS', full: 'Automotive Industry Standards', desc: '자동차 산업 표준' },
                  { term: 'ARAI', full: 'Automotive Research Association of India', desc: '시험/인증 기관' },
                  { term: 'TAC', full: 'Type Approval Certificate', desc: '형식 승인 인증서' },
                  { term: 'COP', full: 'Conformity of Production', desc: '양산 적합성' },
                  { term: 'M1', full: 'Category M1', desc: '승용차 (9인 이하)' },
                ].map((item) => (
                  <div key={item.term} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-orange-400">{item.term}</span>
                      <span className="text-xs text-slate-500">({item.full})</span>
                    </div>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mandatory Equipment */}
        {activeSection === 'mandatory' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🔺</span>
                필수 장착 장비 (삼소구)
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Warning Triangle */}
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                  <div className="text-4xl mb-4 text-center">📐</div>
                  <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">삼각대</h3>
                  <div className="text-sm text-slate-300 space-y-2">
                    <p><span className="text-slate-400">규격:</span> IS 4606</p>
                    <p><span className="text-slate-400">크기:</span> 변 400mm 이상</p>
                    <p><span className="text-slate-400">반사체:</span> 적색, 25mm 폭</p>
                    <p><span className="text-slate-400">의무:</span> 모든 M, N 카테고리</p>
                  </div>
                </div>

                {/* Fire Extinguisher */}
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
                  <div className="text-4xl mb-4 text-center">🧯</div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-4 text-center">소화기</h3>
                  <div className="text-sm text-slate-300 space-y-2">
                    <p><span className="text-slate-400">규격:</span> IS 15683</p>
                    <p><span className="text-slate-400">용량:</span> 최소 2kg (ABC)</p>
                    <p><span className="text-slate-400">위치:</span> 운전석 접근 가능</p>
                    <p><span className="text-slate-400">의무:</span> M2/M3, N2/N3 (버스/트럭)</p>
                  </div>
                </div>

                {/* First Aid Kit */}
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl mb-4 text-center">🏥</div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4 text-center">구급상자</h3>
                  <div className="text-sm text-slate-300 space-y-2">
                    <p><span className="text-slate-400">규격:</span> IS 16651</p>
                    <p><span className="text-slate-400">내용:</span> 붕대, 거즈, 가위 등</p>
                    <p><span className="text-slate-400">분류:</span> A(개인), B(상업)</p>
                    <p><span className="text-slate-400">의무:</span> M2/M3, N 카테고리</p>
                  </div>
                </div>
              </div>

              {/* Application Table */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">차종별 적용</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-3 px-4 text-left text-slate-400">카테고리</th>
                        <th className="py-3 px-4 text-center text-red-400">삼각대</th>
                        <th className="py-3 px-4 text-center text-orange-400">소화기</th>
                        <th className="py-3 px-4 text-center text-green-400">구급상자</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3 px-4">M1 (승용차)</td>
                        <td className="py-3 px-4 text-center text-green-400">✅ 필수</td>
                        <td className="py-3 px-4 text-center text-yellow-400">⚪ 권장</td>
                        <td className="py-3 px-4 text-center text-yellow-400">⚪ 권장</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3 px-4">M2/M3 (버스)</td>
                        <td className="py-3 px-4 text-center text-green-400">✅ 필수</td>
                        <td className="py-3 px-4 text-center text-green-400">✅ 필수</td>
                        <td className="py-3 px-4 text-center text-green-400">✅ 필수</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">N1/N2/N3 (화물)</td>
                        <td className="py-3 px-4 text-center text-green-400">✅ 필수</td>
                        <td className="py-3 px-4 text-center text-green-400">✅ 필수</td>
                        <td className="py-3 px-4 text-center text-green-400">✅ 필수</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Safety Standards */}
        {activeSection === 'safety' && (
          <div className="space-y-8">
            {/* AIS List */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🛡️</span>
                주요 안전 기준 (AIS)
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-3 px-4 text-left text-orange-400">AIS</th>
                      <th className="py-3 px-4 text-left text-slate-400">대상 부품</th>
                      <th className="py-3 px-4 text-left text-slate-400">주요 내용</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {[
                      { ais: 'AIS-035', part: '내장재 전체', content: '난연성 (≤100mm/min)' },
                      { ais: 'AIS-021', part: 'IP, 도어트림 등', content: '돌출물, HIC ≤1000' },
                      { ais: 'AIS-017', part: '스티어링', content: '임팩트 흡수 (≤127mm 이동)' },
                      { ais: 'AIS-020', part: '헤드레스트', content: '후방 이동 ≤102mm' },
                      { ais: 'AIS-023', part: '시트', content: '강도 시험 (13.5kN)' },
                      { ais: 'AIS-098', part: '정면 에어백', content: '전개 성능' },
                      { ais: 'AIS-145', part: '사이드/커튼 에어백', content: '측면 충돌 보호' },
                      { ais: 'AIS-099', part: '시트벨트', content: '3점식 ELR' },
                      { ais: 'AIS-135', part: 'ISOFIX', content: '아동 구속장치 앵커' },
                    ].map((item) => (
                      <tr key={item.ais} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 font-semibold text-orange-400">{item.ais}</td>
                        <td className="py-3 px-4">{item.part}</td>
                        <td className="py-3 px-4">{item.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flammability Detail */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">
                AIS-035: 난연성 시험
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-4">시험 조건</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• 시편 크기: 356 x 100mm</li>
                    <li>• 시편 두께: 실제 사용 두께 (최대 13mm)</li>
                    <li>• 조건 처리: 23±2°C, 50±5%RH, 24시간</li>
                    <li>• 화염 노출: 15초 (38mm 버너)</li>
                    <li>• 측정 구간: 254mm</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-4">합격 기준</h3>
                  <div className="bg-green-500/10 rounded-xl p-6 text-center border border-green-500/30">
                    <p className="text-3xl font-bold text-green-400">≤ 100mm/min</p>
                    <p className="text-sm text-slate-400 mt-2">연소 속도</p>
                  </div>
                  <p className="text-sm text-slate-400 mt-4">
                    * 설계 목표: 80mm/min 이하 (마진 확보)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certification Process */}
        {activeSection === 'certification' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">📜</span>
                TAC 인증 절차
              </h2>

              <div className="space-y-6">
                {[
                  { step: 1, title: '서류 제출', desc: 'ARAI/iCAT에 기술 문서, 도면 제출', duration: '1주' },
                  { step: 2, title: '기술 검토', desc: '적용 AIS 확인, 시험 항목 결정', duration: '2-4주' },
                  { step: 3, title: '샘플 테스트', desc: '안전/환경/내구 시험 수행', duration: '4-8주' },
                  { step: 4, title: '공장 심사', desc: 'COP (양산 적합성) 확인', duration: '1-2주' },
                  { step: 5, title: 'TAC 발급', desc: '형식 승인 인증서 발급', duration: '1-2주' },
                ].map((item, idx) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      {idx < 4 && (
                        <div className="w-0.5 h-12 bg-orange-500/30 mx-auto mt-2" />
                      )}
                    </div>
                    <div className="flex-1 bg-slate-700/30 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <span className="text-xs text-orange-400 bg-orange-500/20 px-2 py-1 rounded">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost & Duration */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
                  <h3 className="text-lg font-semibold text-orange-400 mb-4">예상 비용</h3>
                  <p className="text-3xl font-bold text-white">70만 ~ 250만 INR</p>
                  <p className="text-sm text-slate-400 mt-2">약 1억 ~ 4억원 (부품/차종에 따라 상이)</p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                  <h3 className="text-lg font-semibold text-green-400 mb-4">예상 기간</h3>
                  <p className="text-3xl font-bold text-white">3 ~ 6개월</p>
                  <p className="text-sm text-slate-400 mt-2">시험 항목 수에 따라 상이</p>
                </div>
              </div>
            </div>

            {/* Testing Agencies */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">인증 기관</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">ARAI</h3>
                  <p className="text-sm text-slate-400 mb-4">Automotive Research Association of India</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 위치: 푸네 (Pune)</li>
                    <li>• 설립: 1966년</li>
                    <li>• 특징: 가장 많이 이용, 역사/경험 풍부</li>
                  </ul>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-2">iCAT</h3>
                  <p className="text-sm text-slate-400 mb-4">International Centre for Automotive Technology</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• 위치: 마네사르 (Manesar)</li>
                    <li>• 설립: 2006년</li>
                    <li>• 특징: 최신 시설, 델리 근처 OEM 선호</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Latest Updates */}
        {activeSection === 'updates' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🆕</span>
                최신 법규 변경 (2023-2024)
              </h2>

              <div className="space-y-6">
                {/* 2023 Changes */}
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
                  <h3 className="text-lg font-semibold text-orange-400 mb-4">2023년 변경</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400">•</span>
                      <span><strong>6 에어백 의무화</strong> - 2023.10 신규 모델 적용 (AIS-145)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400">•</span>
                      <span><strong>ESC 의무화</strong> - 전자식 차체 제어 시스템</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400">•</span>
                      <span><strong>Bharat NCAP 출범</strong> - 인도판 신차 안전 평가</span>
                    </li>
                  </ul>
                </div>

                {/* 2024 Changes */}
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                  <h3 className="text-lg font-semibold text-green-400 mb-4">2024년 변경</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400">•</span>
                      <span><strong>6 에어백 기존 모델 적용</strong> - 2024.10 시행</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400">•</span>
                      <span><strong>전석 3점식 시트벨트 의무화</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400">•</span>
                      <span><strong>시트벨트 미착용 경고음 의무화</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Upcoming */}
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">예정 (2025~)</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span><strong>후방 카메라/센서 의무화</strong> - 신규 모델</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span><strong>CAFE Phase 2</strong> - 91 g/km CO2 (2027)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span><strong>보행자 보호 규정 강화</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-400 text-sm">
            <p>India Automotive Interior Regulations</p>
            <p className="mt-2">CMVR / AIS / BIS 기준 - 2024년 최신 반영</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
