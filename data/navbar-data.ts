import { serviceData } from './content/services.content';
import { partnersData } from './content/partners.content';
import { eventsData } from './content/events.content';

// ? Edit this to change navbar items
const currentEvent: any = eventsData.find((event) => event.current);

export const navItems = [
  {
    title: 'ABOUT',
    type: 'page',
    link: '/about',
    common: true,
    enabled: true,
  },
  {
    title: 'SERVICES',
    type: 'dropdown',
    component: 'services',
    routeParamName: 'service',
    link: null,
    common: true,
    enabled: true,
    nested: true,
    sublinks: null,
    props: serviceData,
  },
  {
    title: 'PARTNERS',
    type: 'dropdown',
    component: 'partners',
    routeParamName: 'partner',
    link: null,
    common: true,
    enabled: true,
    nested: true,
    sublinks: null,
    props: partnersData,
  },
  {
    title: 'CONTACT',
    common: true,
    type: 'page',
    link: '/contact',
    enabled: true,
  },
  {
    title: currentEvent.metaHead.toUpperCase(),
    common: false,
    type: 'page',
    link: `/${currentEvent.link}`,
    enabled: true,
  },
];
