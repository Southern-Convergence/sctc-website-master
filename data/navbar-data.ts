import { serviceItems } from './services-data';

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
    nested: false,
    sublinks: ['/fastly', '/datastax'],
    props: [
      {
        title: 'DataStax',
        subtitle: 'DataStax Subtitle',
        link: 'datastax',
      },
      {
        title: 'Fastly',
        subtitle: 'Fastly Subtitle',
        link: 'fastly',
      },
    ],
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
