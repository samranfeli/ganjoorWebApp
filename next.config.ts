import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      { protocol: "https", hostname: "api.ganjoor.net", pathname: "**" },
      { protocol: "https", hostname: "i.ganjoor.net", pathname: "**" },
    ]
  }
};

export default nextConfig;
