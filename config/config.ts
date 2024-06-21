// Mailer Endpoint
export const MAILER_ENDPOINT = 'https://sctc-mailer-service-w4zzk.ondigitalocean.app';

// OG Meta tags
const TITLE = 'Southern Convergence Technologies Corporation';
const DESCRIPTION = 'Maximize Your Business Potential with Tailor-Made Software Development';
const URL = 'https://southernconvergence.com';
const IMAGE_URL = 'https://sctc-buckets.sgp1.cdn.digitaloceanspaces.com/og-image.jpeg';

export const SITE_CONFIG = {
  index: {
    title: TITLE,
    meta: [
      { name: 'description', content: DESCRIPTION },

      // Open Graph meta tags
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: URL },
      { property: 'og:image', content: IMAGE_URL },
      { property: 'og:image:width', content: '1260' },
      { property: 'og:image:height', content: '750' },

      // Twitter specific meta tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: IMAGE_URL },
      { name: 'twitter:url', content: URL },

      // Additional tags
      { property: 'og:site_name', content: TITLE },
      { property: 'og:locale', content: 'en_US' },
    ],
  },
};
