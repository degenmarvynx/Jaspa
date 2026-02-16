import type { MetadataRoute } from 'next';

const base = process.env.SITE_URL?.replace(/\/$/, '') || 'https://www.jaspa.com.ng';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
  };
}
