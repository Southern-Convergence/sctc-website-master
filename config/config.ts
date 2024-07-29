import { eventsData } from '../data/content/events.content';

// Mailer Endpoint
export const MAILER_ENDPOINT = 'https://sctc-mailer-service-w4zzk.ondigitalocean.app';

// OG Meta tags
const currentEvent: any = eventsData.find((event) => event.current); // search if theres an active event

const isEventAvailable = (event: string) => {
  if (!event) return false;
  return new Date(event) >= new Date();
};

let IMAGE_URL = 'https://sctc-buckets.sgp1.cdn.digitaloceanspaces.com/meta_non_event.png'; // initially set non meta event
let TITLE = 'Southern Convergence Technologies Corporation';
let DESCRIPTION = 'Maximize Your Business Potential with Tailor-Made Software Development';
let URL = 'https://southernconvergence.com';

if (currentEvent) {
  // if event is active and event has not yet concluded
  IMAGE_URL = isEventAvailable(currentEvent.countdownDate)
    ? currentEvent.ogMetaImg
    : 'https://sctc-buckets.sgp1.cdn.digitaloceanspaces.com/meta_non_event.png';

  // ? [Optional] - We can edit other fields
}

export const META_CONFIG = {
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
