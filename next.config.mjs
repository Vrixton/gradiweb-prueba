/** @type {import('next').NextConfig} */
 
const nextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
    implementation: 'scss-embedded',
  },
}
 
export default nextConfig