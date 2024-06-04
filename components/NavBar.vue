<template>
  <v-toolbar
    :elevation="2"
    density="compact"
    color="black"
    style="position: relative"
    id="overlay-target"
    class="font-Poppins p-1 text-body-2 z-50"
  >
    <!-- NAV BAR IN MOBILE SCREENS -->
    <div class="hidden-md-and-up">
      <v-menu
        width="100%"
        transition="slide-x-transition"
        class="font-Poppins"
        location="center"
        style="margin: 0px !important; padding: 0px !important"
      >
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list class="mt-14" bg-color="#1b1b1b">
          <v-list-item>
            <NuxtLink to="/about" class="cursor-pointer p-3 text-hover">ABOUT</NuxtLink>
          </v-list-item>
          <v-list-item>
            <div class="cursor-pointer p-3 text-hover">
              SERVICES
              <v-overlay
                activator="parent"
                transition="false"
                class="mt-14"
                width="100%"
                :close-on-content-click="true"
              >
                <ServicesDropdown />
              </v-overlay>
            </div>
          </v-list-item>
          <v-list-item>
            <div class="cursor-pointer p-3 text-hover">
              PARTNERS
              <v-overlay
                activator="parent"
                transition="false"
                class="mt-14"
                width="100%"
                :close-on-content-click="true"
              >
                <PartnersDropdown />
              </v-overlay>
            </div>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/contact" class="cursor-pointer p-3 text-hover">CONTACT</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/Roadshow" class="cursor-pointer p-3 text-hover">ROADSHOW DATASTAX & SCTC</NuxtLink>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn>
        <nuxt-link to="/">
          <img src="/assets/images/logo.png" :width="40" class="cursor-pointer" />
        </nuxt-link>
      </v-btn>
    </div>

    <!-- NAV BAR IN DESKTOP SCREENS -->
    <v-toolbar-title>
      <nuxt-link to="/" class="hidden-sm-and-down">
        <img src="/assets/images/logo_with_txt.png" :width="400" class="cursor-pointer" />
      </nuxt-link>
    </v-toolbar-title>

    <template v-slot:append>
      <div class="flex hidden-sm-and-down">
        <NuxtLink to="/about" :class="{ 'active-link': route.path === '/about' }" class="cursor-pointer p-3 text-hover">ABOUT</NuxtLink>

        <div class="cursor-pointer p-3 text-hover">
          <p :class="{ 'active-link': Object.keys(route.params)[0] === 'service' }">SERVICES</p>
          <v-overlay
            activator="parent"
            transition="false"
            width="100%"
            style="margin-top: 57px"
            :close-on-content-click="true"
          >
            <ServicesDropdown />
          </v-overlay>
        </div>
        <div class="cursor-pointer p-3 text-hover">
          <p :class="{ 'active-link': ['/fastly', '/datastax'].includes(route.path) }">PARTNERS</p>
          <v-overlay
            activator="parent"
            transition="false"
            width="100%"
            style="margin-top: 57px"
            :close-on-content-click="true"
          >
            <PartnersDropdown />
          </v-overlay>
        </div>
        <NuxtLink to="/contact" :class="{ 'active-link': route.path === '/contact' }" class="cursor-pointer p-3 text-hover">CONTACT</NuxtLink>
        <NuxtLink to="/Roadshow" :class="{ 'active-link': route.path === '/Roadshow' }" class="cursor-pointer p-3 text-hover"
          >ROADSHOW DATASTAX & SCTC</NuxtLink
        >
      </div>
    </template>
  </v-toolbar>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style>
.text-hover:hover {
  color: #ff7801;
}

.active-link {
  color: #ff7b02;
  font-weight: 600;
}
</style>
