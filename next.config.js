/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    emotion: true,
    missingSuspenseWithCSRBailout: false,
  },
  eslint: {
    // 빌드 시 ESLint 실행을 무시
    ignoreDuringBuilds: true,
  },
  compiler: {
    // styledComponents 설정 추가
    styledComponents: true,
  },
  webpack(config) {
    // SVG 파일을 컴포넌트로 가져오기 위한 설정
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = withPWA(nextConfig);
