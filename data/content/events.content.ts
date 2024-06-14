export const eventsData = [
  {
    eventType: 'Roadshow',
    link: 'roadshow',
    bannerText: 'Experience Seamless AI Integration at Our Exclusive Roadshow',
    bannerImg: 'sctc-website-banner-roadshow.jpg',
    dialogText: [
      `Southern Convergence Technologies and DataStax are proud to announce their collaboration, marking a
            significant milestone in revolutionizing data management solutions. On June 5th, in Manila, we invite you to
            join us for an exclusive roadshow, showcasing the power of DataStax's GenAI capabilities.`,
      `This event not only signifies the commencement of our partnership but also heralds a new era of streamlined
            data handling. In today's fast-paced world, every industry grapples with the challenge of managing vast
            amounts of paperwork and data. Through GenAI, this burden becomes a thing of the past`,
      `Imagine effortlessly sorting through mountains of data with unparalleled ease. It's not just innovation;
            it's a necessity for businesses striving for efficiency and competitiveness. Join us at this event to
            witness firsthand how Southern Convergence Technologies and DataStax are shaping the future of data
            management.`,
    ],
    dialogImg: 'sctc-banner-roadshow.jpg',
    dialogActionText: 'To secure your spot and unlock the potential of GenAI for your organization.',
    dialogButtonText: 'Register now',
    dialogActionLink: 'https://www.datastax.com/events/apac-genai-roadshow-manila',
    eventButtons: [
      { name: 'About the event', link: null, type: 'dialog' },
      { name: 'Register', link: 'https://www.datastax.com/events/apac-genai-roadshow-manila', type: 'external-link' },
      { name: 'Get in touch', link: '/contact', type: 'page' },
    ],
    metaHead: 'Roadshow DataStax & SCTC',
    current: true, // only one event should have this set as true, the rest will be false
  },
];
