import { serviceItems } from './services-data';
import { partnersData } from './partners-data';

// ? Edit this to change navbar items

export const navItems = [
  {
    title: 'ABOUT',
    type: 'page',
    link: '/about',
  },
  {
    title: 'SERVICES',
    type: 'dropdown',
    component: 'Services',
    link: null,
    nested: true,
    sublinks: null,
    props: serviceItems,
  },
  {
    title: 'PARTNERS',
    type: 'dropdown',
    component: 'Partners',
    link: null,
    nested: true,
    sublinks: null,
    props: partnersData,
  },
  {
    title: 'CONTACT',
    type: 'page',
    link: '/contact',
  },
  {
    title: 'ROADSHOW DATASTAX & SCTC',
    type: 'page',
    link: '/Roadshow',
  },
];
