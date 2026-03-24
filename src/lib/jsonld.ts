import { COMPANY } from "./constants";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${COMPANY.name} ${COMPANY.division}`,
    url: COMPANY.website,
    telephone: COMPANY.tel,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: "서울특별시",
      addressCountry: "KR",
    },
    description:
      "HRM(직무중심 인사관리), HRD(Skill 기반 인재개발), AX(AI Transformation) 컨설팅 전문기관",
  };
}

export function getServiceJsonLd(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: `${COMPANY.name} ${COMPANY.division}`,
    },
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
