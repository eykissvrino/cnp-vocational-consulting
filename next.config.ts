import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Railway 서버 배포 시 비활성화
  // basePath: '/직능본부', // cnp.re.kr 서브디렉토리 배포 시 활성화
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
