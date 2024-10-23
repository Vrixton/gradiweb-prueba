/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
    implementation: 'scss-embedded',
  },
}
 
export default nextConfig