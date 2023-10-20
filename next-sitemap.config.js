/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://testingfly.com",
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://testingfly.com"}/sitemap.xml`,
      `${process.env.SITE_URL || "https://testingfly.com"}/server-sitemap.xml`,
    ],
  },
};
