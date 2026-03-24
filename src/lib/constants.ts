import type {
  NavItem,
  ServiceData,
  PortfolioProject,
  FAQItem,
  StatItem,
  TimelineItem,
} from "@/types";

// ===== Company Info =====
export const COMPANY = {
  name: "시앤피컨설팅",
  nameEn: "CNP Consulting",
  division: "직업능력컨설팅본부",
  ceo: "조세형",
  tel: "02-6257-1440",
  email: "info@cnp.re.kr",
  bizNumber: "119-86-57311",
  address: "서울특별시 영등포구 국제금융로6길 33, 맨하탄타워 1009호",
  website: "https://www.cnp.re.kr",
  tagline: "Competency & Performance",
  slogan: "직무 중심 인사혁신, 역량 기반 인재개발, AI Transformation",
};

// ===== Navigation =====
export const NAV_ITEMS: NavItem[] = [
  { label: "본부소개", href: "/about" },
  {
    label: "서비스",
    href: "/services",
    children: [
      { label: "HRM 컨설팅", href: "/services/hrm" },
      { label: "HRD 컨설팅", href: "/services/hrd" },
      { label: "AX 컨설팅", href: "/services/ax" },
    ],
  },
  { label: "사업실적", href: "/portfolio" },
  { label: "문의", href: "/contact" },
];

// ===== Home Stats =====
export const HOME_STATS: StatItem[] = [
  { value: "500", suffix: "+", label: "컨설팅 수행" },
  { value: "200", suffix: "+", label: "참여 기관" },
  { value: "15", suffix: "yr+", label: "전문 경력" },
  { value: "98", suffix: "%", label: "고객 만족도" },
];

// ===== Services Overview (for home & hub) =====
export const SERVICES_OVERVIEW = [
  {
    number: "01",
    id: "hrm",
    title: "HRM 컨설팅",
    subtitle: "직무중심 인적자원관리",
    team: "공공기관컨설팅팀",
    description:
      "공공기관의 직무분석, 직무평가, 보수체계 설계, 성과관리 체계 구축까지. 직무 중심 인사혁신의 전 과정을 함께합니다.",
    highlights: [
      "직무분석 및 직무분류체계",
      "직무평가 및 직급체계 설계",
      "보수체계(직무급) 전환",
      "성과관리체계 구축",
    ],
    href: "/services/hrm",
  },
  {
    number: "02",
    id: "hrd",
    title: "HRD 컨설팅",
    subtitle: "Skill 기반 인재개발",
    team: "HR솔루션팀",
    description:
      "역량모델링부터 NCS 기반 교육과정 개발, Skill Gap 분석, 맞춤형 학습경로 설계까지. 인재개발의 새로운 패러다임을 제시합니다.",
    highlights: [
      "역량모델링 및 역량평가",
      "교육체계 수립",
      "Skill Gap 분석",
      "학습경험 설계(LXD)",
    ],
    href: "/services/hrd",
  },
  {
    number: "03",
    id: "ax",
    title: "AX 컨설팅",
    subtitle: "AI Transformation",
    team: "AX컨설팅팀",
    description:
      "AI 성숙도 진단부터 전략 수립, Skill Set 구축, 워크플로우 재설계까지. 사람 중심의 AI 전환을 설계합니다.",
    highlights: [
      "AX 진단 및 전략수립",
      "AX Skill Set 구축",
      "AI 워크플로우 재설계",
      "AX 교육훈련",
    ],
    href: "/services/ax",
  },
];

// ===== HRM Service Detail =====
export const HRM_SERVICE: ServiceData = {
  id: "hrm",
  tag: "HRM",
  tagColor: "primary",
  team: "공공기관컨설팅팀",
  title: "HRM — 직무중심 인사관리",
  subtitle: "공공기관 직무급 전환, 경영평가 대응의 파트너",
  description:
    "연공 중심에서 직무 중심으로. 공공기관의 인사혁신을 체계적 방법론과 풍부한 경험으로 지원합니다.",
  items: [
    {
      icon: "ClipboardList",
      title: "직무분석 (Job Analysis)",
      description:
        "직무정보 수집, 과업 목록 작성, 직무기술서(JD) 설계까지 체계적 직무분석 수행",
    },
    {
      icon: "Scale",
      title: "직무평가 (Job Evaluation)",
      description:
        "참여형 평가방법론을 활용한 직무의 상대적 가치 평가 및 내부 수용성 확보",
    },
    {
      icon: "Wallet",
      title: "보수체계 설계 (Compensation)",
      description:
        "연공급에서 직무급으로의 전환 로드맵 수립 및 급여 시뮬레이션",
    },
    {
      icon: "Building2",
      title: "조직설계 (Org Design)",
      description:
        "적정인력 산정, 기능-역할 정렬을 통한 효율적 조직 구조 설계",
    },
  ],
  process: [
    { number: "01", title: "진단", description: "현황 분석 및 이슈 도출" },
    { number: "02", title: "설계", description: "직무체계 및 제도 설계" },
    { number: "03", title: "도입", description: "시범 적용 및 조정" },
    { number: "04", title: "안정화", description: "정착 지원 및 모니터링" },
  ],
  stats: [
    { value: "300", suffix: "+", label: "공공기관 컨설팅" },
    { value: "150", suffix: "+", label: "직무분석 프로젝트" },
    { value: "100", suffix: "+", label: "성과관리체계 구축" },
    { value: "97", suffix: "%", label: "고객 재계약률" },
  ],
  cta: { text: "직무분석 컨설팅 상담 신청", href: "/contact" },
};

// ===== HRD Service Detail =====
export const HRD_SERVICE: ServiceData = {
  id: "hrd",
  tag: "HRD",
  tagColor: "green",
  team: "HR솔루션팀",
  title: "HRD — Skill 기반 인재개발",
  subtitle: "역량에서 스킬로, 인재개발의 패러다임 전환",
  description:
    "조직의 전략 목표에 부합하는 인재를 체계적으로 개발합니다. NCS 기반 교육과정부터 AI 시대의 Skill 기반 학습까지.",
  items: [
    {
      icon: "GraduationCap",
      title: "훈련체계 수립",
      description:
        "NCS 연계 교육과정 아키텍처 설계 및 직급/직무별 맞춤형 교육 로드맵",
    },
    {
      icon: "Target",
      title: "역량모델링",
      description:
        "핵심·리더십·직무역량 도출 및 직급/역할별 행동지표 정의",
    },
    {
      icon: "BarChart3",
      title: "스킬 진단 (Skill Gap Analysis)",
      description: "개인별 Skill Gap 측정 및 데이터 기반 인재 현황 분석",
    },
    {
      icon: "Route",
      title: "러닝패스 설계",
      description: "AI 기반 맞춤 학습 경로 추천 및 학습경험 설계(LXD)",
    },
  ],
  process: [
    { number: "01", title: "요구분석", description: "교육 니즈 및 Gap 파악" },
    { number: "02", title: "역량도출", description: "Skill/역량 체계 설계" },
    { number: "03", title: "과정개발", description: "교육과정 설계 및 개발" },
    { number: "04", title: "실행지원", description: "운영 및 효과성 분석" },
  ],
  stats: [
    { value: "200", suffix: "+", label: "교육체계 수립" },
    { value: "500", suffix: "+", label: "교육과정 개발" },
    { value: "100", suffix: "+", label: "역량모델링 수행" },
    { value: "95", suffix: "%", label: "교육 만족도" },
  ],
  cta: { text: "HRD 솔루션 문의", href: "/contact" },
};

// ===== AX Service Detail =====
export const AX_SERVICE: ServiceData = {
  id: "ax",
  tag: "AX",
  tagColor: "navy",
  team: "AX컨설팅팀",
  title: "AX — AI Transformation 컨설팅",
  subtitle: "디지털 전환을 넘어, AI 전환으로",
  description:
    "기술이 아닌 사람을 중심에 둔 AI Transformation. HRM/HRD 전문성을 기반으로 조직의 AI 전환을 설계합니다.",
  items: [
    {
      icon: "ScanSearch",
      title: "AX 진단",
      description:
        "6차원 진단 프레임워크를 활용한 AI 성숙도 진단 및 업무 프로세스 AI 적용 가능 영역 분석",
    },
    {
      icon: "Map",
      title: "AX 전략수립",
      description:
        "우선순위 유스케이스 선정 및 단계별 AI Transformation 로드맵 수립",
    },
    {
      icon: "BrainCircuit",
      title: "AX Skill Set 구축",
      description:
        "직급별 AI 리터러시 프로그램 설계 및 부트캠프/인증 체계 구축",
    },
    {
      icon: "Workflow",
      title: "AI 워크플로우 재설계",
      description:
        "프로세스별 AI 대체/보완/지원 영역 식별 및 업무 효율화 설계",
    },
    {
      icon: "Presentation",
      title: "AX 교육훈련",
      description:
        "생성형 AI 활용, 프롬프트 엔지니어링, 바이브 코딩 등 실무 교육",
    },
  ],
  process: [
    { number: "01", title: "AX 진단", description: "AI 성숙도 및 준비도 평가" },
    {
      number: "02",
      title: "전략수립",
      description: "로드맵 및 우선순위 도출",
    },
    {
      number: "03",
      title: "Skill 구축",
      description: "AI 역량 개발 및 교육",
    },
    {
      number: "04",
      title: "정착·고도화",
      description: "성과 측정 및 지속 개선",
    },
  ],
  stats: [
    { value: "50", suffix: "+", label: "AX 진단 수행" },
    { value: "30", suffix: "+", label: "AX 전략 수립" },
    { value: "80", suffix: "+", label: "AI 교육훈련" },
    { value: "5", suffix: "단계", label: "성숙도 모델" },
  ],
  cta: { text: "AX 진단 의뢰", href: "/contact" },
};

// ===== AX Maturity Levels =====
export const AX_MATURITY_LEVELS = [
  { level: 1, name: "탐색", description: "AI에 대한 관심과 초기 학습 단계" },
  {
    level: 2,
    name: "시범",
    description: "파일럿 프로젝트를 통한 가능성 검증",
  },
  { level: 3, name: "도입", description: "핵심 업무에 AI 솔루션 본격 적용" },
  {
    level: 4,
    name: "내재화",
    description: "조직 전반의 AI 활용 문화 정착",
  },
  {
    level: 5,
    name: "지능화",
    description: "AI 기반 자율적 의사결정 및 혁신",
  },
];

// ===== Portfolio Projects =====
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    name: "직무분석 및 직무분류체계 수립",
    client: "한국토지주택공사",
    period: "2025.03 ~ 2025.08",
    category: "HRM",
    status: "완료",
    overview: "전사 직무분석을 통한 직무분류체계 및 직무기술서 개발",
    tasks: ["직무조사 및 분석", "직무분류체계 수립", "직무기술서 작성"],
    results: ["120개 직무 분석 완료", "직무분류체계 3단계 구축"],
  },
  {
    id: 2,
    name: "성과관리체계 개선 컨설팅",
    client: "국민건강보험공단",
    period: "2025.01 ~ 2025.06",
    category: "HRM",
    status: "완료",
    overview: "BSC 기반 성과관리체계 재설계 및 KPI 고도화",
    tasks: ["성과관리 현황 진단", "KPI 재설계", "평가체계 개선"],
    results: ["KPI 200개 재정의", "평가 공정성 30% 향상"],
  },
  {
    id: 3,
    name: "직무급 전환 로드맵 수립",
    client: "한국수자원공사",
    period: "2024.09 ~ 2025.02",
    category: "HRM",
    status: "완료",
    overview: "연공급에서 직무급으로의 단계적 전환 전략 수립",
    tasks: ["직무평가", "보수체계 설계", "전환 시뮬레이션"],
    results: ["직무급 3단계 전환 로드맵 확정", "급여 시뮬레이션 완료"],
  },
  {
    id: 4,
    name: "NCS 기반 교육체계 수립",
    client: "한국철도공사",
    period: "2025.02 ~ 2025.07",
    category: "HRD",
    status: "완료",
    overview: "NCS 연계 직무교육과정 체계 전면 재설계",
    tasks: ["교육 니즈 분석", "NCS 매핑", "교육과정 설계"],
    results: ["45개 교육과정 개발", "NCS 매핑률 92%"],
  },
  {
    id: 5,
    name: "역량모델링 및 역량평가 체계 구축",
    client: "한국가스공사",
    period: "2024.10 ~ 2025.03",
    category: "HRD",
    status: "완료",
    overview: "핵심역량/리더십역량/직무역량 모델 개발 및 평가 도구 설계",
    tasks: ["역량 도출", "행동지표 개발", "평가 도구 설계"],
    results: ["3계층 역량모델 확립", "평가 신뢰도 0.87 달성"],
  },
  {
    id: 6,
    name: "Skill 기반 인재개발 체계 구축",
    client: "정보통신산업진흥원",
    period: "2025.04 ~ 2025.09",
    category: "HRD",
    status: "진행중",
    overview: "디지털 스킬 중심의 인재개발 프레임워크 설계",
    tasks: ["Skill Taxonomy 설계", "Skill Gap 진단", "러닝패스 설계"],
    results: ["Skill Taxonomy 150개 정의"],
  },
  {
    id: 7,
    name: "AI Transformation 진단 및 전략수립",
    client: "한국산업인력공단",
    period: "2025.05 ~ 2025.10",
    category: "AX",
    status: "진행중",
    overview: "6차원 AX 진단 및 3개년 AI 전환 로드맵 수립",
    tasks: ["AX 성숙도 진단", "유스케이스 발굴", "로드맵 수립"],
    results: ["성숙도 Level 2 진단", "12개 유스케이스 도출"],
  },
  {
    id: 8,
    name: "공공기관 경영평가 대응 컨설팅",
    client: "한국전력공사",
    period: "2024.07 ~ 2024.12",
    category: "HRM",
    status: "완료",
    overview: "인사 분야 경영평가 지표 체계적 대응 전략 수립",
    tasks: ["평가 지표 분석", "대응 전략 수립", "증빙 체계 구축"],
    results: ["인사 분야 A등급 달성"],
  },
  {
    id: 9,
    name: "AX Skill Set 구축 및 교육",
    client: "대한무역투자진흥공사",
    period: "2025.03 ~ 2025.06",
    category: "AX",
    status: "완료",
    overview: "전 직원 AI 리터러시 교육 및 직급별 AX Skill Set 설계",
    tasks: ["AI 리터러시 진단", "Skill Set 설계", "교육 프로그램 운영"],
    results: ["전 직원 800명 교육 완료", "AI 활용률 45% 향상"],
  },
  {
    id: 10,
    name: "교육훈련 효과성 분석",
    client: "한국도로공사",
    period: "2024.11 ~ 2025.04",
    category: "HRD",
    status: "완료",
    overview: "Kirkpatrick 4단계 모형 기반 교육효과성 종합 분석",
    tasks: ["교육 데이터 수집", "4단계 분석", "개선 방안 도출"],
    results: ["교육 ROI 180% 산출", "개선 과제 12건 도출"],
  },
  {
    id: 11,
    name: "조직설계 및 정원산정",
    client: "국립공원공단",
    period: "2025.01 ~ 2025.05",
    category: "HRM",
    status: "완료",
    overview: "기능 분석 기반 적정인력 산정 및 조직 구조 재설계",
    tasks: ["기능 분석", "업무량 조사", "적정인력 산정"],
    results: ["적정인력 산정 완료", "조직 개편안 확정"],
  },
  {
    id: 12,
    name: "AI 워크플로우 재설계 컨설팅",
    client: "한국수출입은행",
    period: "2025.06 ~ 2025.11",
    category: "AX",
    status: "진행중",
    overview: "핵심 업무 프로세스의 AI 적용 영역 식별 및 재설계",
    tasks: ["업무 프로세스 분석", "AI 적용 영역 식별", "재설계 및 PoC"],
    results: ["8개 프로세스 AI 재설계 중"],
  },
];

// ===== Portfolio Filter Categories =====
export const PORTFOLIO_FILTERS = [
  { key: "all", label: "전체" },
  { key: "HRM", label: "HRM" },
  { key: "HRD", label: "HRD" },
  { key: "AX", label: "AX" },
];

// ===== FAQ =====
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "컨설팅 기간은 보통 얼마나 걸리나요?",
    answer:
      "프로젝트 규모와 범위에 따라 다르지만, 일반적으로 직무분석은 3~6개월, 교육체계 수립은 2~4개월, AX 진단은 1~2개월 정도 소요됩니다. 초기 상담 시 보다 정확한 일정을 안내해 드립니다.",
  },
  {
    question: "컨설팅 비용은 어떻게 산정되나요?",
    answer:
      "프로젝트의 범위, 기간, 투입 인력 등을 종합적으로 고려하여 산정합니다. 공공기관의 경우 용역 예산 규모에 맞춰 최적의 컨설팅 범위를 설계해 드립니다. 무료 상담을 통해 견적을 받아보실 수 있습니다.",
  },
  {
    question: "공공기관 외에 민간기업도 컨설팅 가능한가요?",
    answer:
      "네, 가능합니다. 시앤피컨설팅은 공공기관 특화 경험을 바탕으로 민간기업에도 직무분석, 역량모델링, AX 컨설팅 등 다양한 서비스를 제공하고 있습니다.",
  },
  {
    question: "컨설팅 프로세스는 어떻게 진행되나요?",
    answer:
      "일반적으로 ①현황진단 → ②분석·설계 → ③실행·구축 → ④정착·지원의 4단계로 진행됩니다. 각 단계마다 중간보고를 통해 진행 상황을 공유하고, 고객의 피드백을 반영합니다.",
  },
  {
    question: "원격 컨설팅도 가능한가요?",
    answer:
      "네, 화상회의, 온라인 워크숍, 클라우드 기반 협업 도구를 활용한 원격 컨설팅이 가능합니다. 다만, 직무분석 인터뷰 등 일부 과정은 현장 방문이 필요할 수 있습니다.",
  },
];

// ===== About - Timeline =====
export const TIMELINE: TimelineItem[] = [
  { year: "2010", events: ["시앤피컨설팅 설립", "HR 컨설팅 사업 개시"] },
  {
    year: "2013",
    events: ["공공기관 컨설팅 100건 달성", "NCS 기반 교육과정 개발 시작"],
  },
  {
    year: "2016",
    events: [
      "직업능력컨설팅본부 신설",
      "한국산업인력공단 파트너십 체결",
    ],
  },
  {
    year: "2019",
    events: ["컨설팅 수행 300건 돌파", "역량모델링 전문 조직 확대"],
  },
  {
    year: "2022",
    events: ["디지털 전환(DX) 컨설팅 사업 개시", "Skill 기반 HRD 체계 도입"],
  },
  {
    year: "2024",
    events: [
      "AX(AI Transformation) 컨설팅 사업 본격화",
      "컨설팅 수행 500건 돌파",
    ],
  },
  {
    year: "2025",
    events: ["AX 진단 프레임워크 개발", "AI 교육훈련 프로그램 런칭"],
  },
];

// ===== About - Organization (8 divisions) =====
export const DIVISIONS = [
  "직업능력컨설팅본부",
  "경영전략본부",
  "글로벌개발연구원",
  "HRD사업본부",
  "NCS사업본부",
  "ODA사업본부",
  "조사연구본부",
  "Career Consulting본부",
];

// ===== HRM Pain Points =====
export const HRM_PAIN_POINTS = [
  {
    icon: "AlertTriangle",
    title: "연공급 체계의 한계",
    description:
      "직무 가치와 무관한 보상 체계로 인한 우수인재 이탈과 동기부여 저하",
  },
  {
    icon: "FileWarning",
    title: "경영평가 대응 부담",
    description:
      "매년 강화되는 인사 분야 경영평가 지표에 대한 체계적 대응 필요",
  },
  {
    icon: "Clock",
    title: "직무급 전환 의무",
    description:
      "기재부 가이드라인에 따른 직무급 전환 로드맵 수립 시급",
  },
];

// ===== HRD Paradigm Shift =====
export const HRD_TRENDS = [
  {
    icon: "BrainCircuit",
    title: "AI 리터러시",
    description: "모든 직급에 필수화되는 AI 활용 역량",
  },
  {
    icon: "TrendingUp",
    title: "업스킬링 / 리스킬링",
    description: "급변하는 기술 환경에 맞춘 지속적 역량 전환",
  },
  {
    icon: "Database",
    title: "데이터 기반 HRD",
    description: "학습 데이터 분석을 통한 교육 효과성 극대화",
  },
];
