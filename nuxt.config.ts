// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      // Set Default Meta Tags
      meta: [
        { name: 'description', content: 'Maximize Your Business Potential with Tailor-Made Software Development' },
        { property: 'og:title', content: 'Southern Convergence Technologies Corporation' },
        {
          property: 'og:description',
          content: 'Maximize Your Business Potential with Tailor-Made Software Development',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://southernconvergence.com' },
        { property: 'og:image', content: 'https://sctc-buckets.sgp1.cdn.digitaloceanspaces.com/meta_non_event.png' },
        { property: 'og:image:width', content: '1260' },
        { property: 'og:image:height', content: '750' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Southern Convergence Technologies Corporation' },
        {
          name: 'twitter:description',
          content: 'Maximize Your Business Potential with Tailor-Made Software Development',
        },
        { name: 'twitter:image', content: 'https://sctc-buckets.sgp1.cdn.digitaloceanspaces.com/meta_non_event.png' },
        { name: 'twitter:url', content: 'https://southernconvergence.com' },
        { property: 'og:site_name', content: 'Southern Convergence Technologies Corporation' },
        { property: 'og:locale', content: 'en_US' },
      ],
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
