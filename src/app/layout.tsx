import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { getOrganizationJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: {
    default: "직업능력컨설팅본부 | 시앤피컨설팅",
    template: "%s | 직업능력컨설팅본부",
  },
  description:
    "시앤피컨설팅 직업능력컨설팅본부 — HRM(직무중심 인사관리), HRD(Skill 기반 인재개발), AX(AI Transformation) 컨설팅 전문기관",
  keywords: [
    "시앤피컨설팅",
    "직업능력컨설팅",
    "HRM",
    "HRD",
    "AX",
    "직무분석",
    "역량모델링",
    "AI Transformation",
    "공공기관 컨설팅",
  ],
  openGraph: {
    title: "직업능력컨설팅본부 | 시앤피컨설팅",
    description:
      "직무 중심 인사혁신, 역량 기반 인재개발, AI Transformation — 시앤피컨설팅이 함께합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "시앤피컨설팅 직업능력컨설팅본부",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationJsonLd()),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
