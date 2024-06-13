import { serviceData } from './services.content';
import { partnersData } from './partners.content';

// ? Edit this to change navbar items

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
    component: 'Services',
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
    component: 'Partners',
    routeParamName: 'partner',
    link: null,
    enabled: true,
    nested: true,
    sublinks: null,
    props: partnersData,
  },
  {
    title: 'CONTACT',
    type: 'page',
    link: '/contact',
    enabled: true,
  },
  {
    title: 'ROADSHOW DATASTAX & SCTC',
    type: 'page',
    link: '/Roadshow',
    enabled: false,
  },
];
