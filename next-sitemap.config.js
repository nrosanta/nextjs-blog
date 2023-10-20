/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://testingfly.me",
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
      `${process.env.SITE_URL || "https://testingfly.me"}/sitemap.xml`,
      `${process.env.SITE_URL || "https://testingfly.me"}/server-sitemap.xml`,
    ],
  },
};
