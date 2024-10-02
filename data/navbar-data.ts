import { serviceData } from './content/services.content';
import { partnersData } from './content/partners.content';
import { eventsData } from './content/events.content';

// ? Edit this to change navbar items
const currentEvent: any = eventsData.find((event) => event.current);

const isEventAvailable = (event: string) => {
    const endDate = new Date(event).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    return endDate >= today && endDate !== today;
  // if (!event) return true;
  // return new Date(event) >= new Date();
};

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

  // temporary link for events and updates; might change later
  {
    title: 'MILESTONES',
    common: true,
    type: 'page',
    link: '/milestones',
    enabled: false,
  },

  {
    title: 'UPDATES',
    common: true,
    type: 'page',
    link: '/updates',
    enabled: false,
  },
  // temporary link for events and updates

  {
    title: 'CONTACT',
    common: true,
    type: 'page',
    link: '/contact',
    enabled: true,
  },

  // link for events
  {
    title: currentEvent?.metaHead.toUpperCase(),
    common: true,
    type: 'page',
    link: `/${currentEvent?.link}`,
    enabled: isEventAvailable(currentEvent.countdownDate),
  },
];
