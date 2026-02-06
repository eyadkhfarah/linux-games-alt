// app/robots.ts
import { MetadataRoute } from 'next'

const siteUrl =  
    process.env.NEXT_PUBLIC_DOMAIN_URL || "https://linuxgamesalt.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Keep your internal nodes private
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}