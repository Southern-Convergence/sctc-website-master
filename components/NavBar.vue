<template>
  <v-toolbar
    :elevation="2"
    density="compact"
    color="black"
    style="position: relative"
    id="overlay-target"
    class="font-Poppins p-1"
  >
    <!-- NAV BAR IN MOBILE SCREENS -->
    <template>
      <div class="hidden-md-and-up">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-menu
          width="100%"
          transition="slide-x-transition"
          class="font-Poppins"
          location="center"
          style="margin: 0px !important; padding: 0px !important"
        >
          <template v-slot:activator="{ isActive, props }">
            <v-btn icon v-bind="props" v-on="isActive">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <br><br><br>
          <v-list style="background-color: #1b1b1b; color: white; margin: 0px !important" width="100%">
            <v-list-item>
              <NuxtLink to="/about" class="cursor-pointer p-3 text-hover">ABOUT US</NuxtLink>
            </v-list-item>
            <v-list-item>
              <a class="cursor-pointer p-3 text-hover"
                >SERVICES
                <v-overlay
                  activator="parent"
                  absolute:boolean="true"
                  transition="false"
                  width="100%"
                  style="margin-top: 48px"
                >
                  <ServicesDropdown />
                </v-overlay>
              </a>
            </v-list-item>
            <v-list-item>
              <a class="cursor-pointer p-3 text-hover"
                >PARTNERS
                <v-overlay
                  activator="parent"
                  absolute:boolean="true"
                  transition="false"
                  width="100%"
                  style="margin-top: 48px"
                >
                  <PartnersDropdown />
                </v-overlay>
              </a>
            </v-list-item>
            <v-list-item>
              <NuxtLink to="/about" class="cursor-pointer p-3 text-hover">CONTACT</NuxtLink>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn href="/">
          <img src="/assets/images/logo.png" :width="40" class="cursor-pointer" />
        </v-btn>
      </div>
    </template>

    <!-- NAV BAR IN DESKTOP SCREENS -->
    <v-toolbar-title>
      <!-- Hidden in mobile phones -->
      <a href="/" class="hidden-sm-and-down">
        <img src="/assets/images/logo with txt.png" :width="400" class="cursor-pointer" />
      </a>
    </v-toolbar-title>

    <template v-slot:append>
      <!-- Hidden in mobile phones -->
      <div class="hidden-sm-and-down">
        <NuxtLink to="/about" :class="routeCheck('/about')" class="cursor-pointer p-3 text-hover">ABOUT US</NuxtLink>

        <a class="cursor-pointer p-3 text-hover"
          >SERVICES
          <v-overlay
            activator="parent"
            transition="false"
            width="100%"
            style="margin-top: 57px"
            close-on-content-click="true"
          >
            <ServicesDropdown />
          </v-overlay>
        </a>

        <a class="cursor-pointer p-3 text-hover"
          >PARTNERS
          <v-overlay
            activator="parent"
            transition="false"
            width="100%"
            style="margin-top: 57px"
            close-on-content-click="true"
          >
            <PartnersDropdown />
          </v-overlay>
        </a>
        <NuxtLink to="/contact" :class="routeCheck('/contact')" class="cursor-pointer p-3 text-hover">CONTACT US</NuxtLink>
      </div>
    </template>
  </v-toolbar>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const routeCheck = (path) => {
  return route.path === path ? 'text-selected' : '';
};
</script>

<style>
.text-hover:hover {
  color: #ff7801;
}

.text-selected {
  color: #ff7801;
  font-weight: 600;
}
</style>
