import type { MetadataRoute } from 'next';

const base = process.env.SITE_URL?.replace(/\/$/, '') || 'https://www.jaspa.com.ng';
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/business`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/business/startup-incubator`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/download`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/csr`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/terms-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
