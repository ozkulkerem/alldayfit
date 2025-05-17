// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.mjs
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/alldayfit" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/alldayfit/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ozkulkerem.github.io",
        pathname: "/alldayfit/**",
      },
    ],
  },
  // Eğer komponent içinde runtime'da basePath'e erişmek isterseniz:
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === "production" ? "/alldayfit" : "",
  },
};

export default nextConfig;
