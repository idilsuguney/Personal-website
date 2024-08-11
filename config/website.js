const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Idilsu Guney - Personal Website', // Navigation and Site Title
  siteTitleAlt: 'Idilsu Guney', // Alternative Site title for SEO
  siteUrl: 'https://idilsu.surge.sh', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/favicon.ico', // Used for SEO and manifest
  siteDescription: 'Idilsu Guneys Personal Website',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  ogSiteName: 'idilsu.guney', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};