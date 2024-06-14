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
    enabled: true,
  },
  {
    title: 'SERVICES',
    type: 'dropdown',
    component: 'services',
    routeParamName: 'service',
    link: null,
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
    enabled: true,
    nested: true,
    sublinks: null,
    props: partnersData,
  },
  {
    title: currentEvent.metaHead.toUpperCase(),
    type: 'page',
    link: `/${currentEvent.link}`,
    enabled: true,
  },
  {
    title: 'CONTACT',
    type: 'page',
    link: '/contact',
    enabled: true,
  },
];
