/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true"

const nextConfig = {
  // GitHub Pages requires static export; Cloudflare OpenNext requires standalone.
  output: isGitHubActions ? "export" : "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
