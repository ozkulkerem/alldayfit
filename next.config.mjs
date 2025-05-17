// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.mjs
const isProd = process.env.NODE_ENV === "production";
const repo = "alldayfit"; // ↲ GitHub repo adın

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // statik HTML üretir :contentReference[oaicite:0]{index=0}
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true }, // Image optimizer'ı kapat
  trailingSlash: true, // /about/ gibi path’ler için 404 önler
};

export default nextConfig;
