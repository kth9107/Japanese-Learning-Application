import withPWAInit from '@ducanh2912/next-pwa'
import type { NextConfig } from 'next'

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  // skipWaiting 없음
  customWorkerSrc: 'src/worker',     // 커스텀 SW 사용
  // 필요시: reloadOnOnline: true
})

const nextConfig: NextConfig = { reactStrictMode: true }
export default withPWA(nextConfig)

