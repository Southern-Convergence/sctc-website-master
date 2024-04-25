import { NuxtLink } from '#build/components';

<template>
  <v-toolbar
    :elevation="2"
    density="compact"
    color="black"
    style="position: relative"
    id="overlay-target"
    class="font-Poppins"
  >
    <!-- NAV BAR IN MOBILE SCREENS -->
    <template>
      <div class="hidden-sm-and-up">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-menu height="48px" width="100%" transition="slide-x-transition" class="font-Poppins">
          <template v-slot:activator="{ isActive, props }">
            <v-btn icon v-bind="props" v-on="isActive">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <NuxtLink to="/about" class="cursor-pointer p-3 text-hover"
              >ABOUT US</NuxtLink
            >

            <a class="cursor-pointer p-3 text-hover"
              >SERVICES
              <v-overlay
                activator="parent"
                absolute:boolean="true"
                transition="false"
                width="100%"
                style="margin-top: 48px"
              >
                <template v-slot:default="{ isActive }">
                  <v-card title="Services" style="border-radius: 0px">
                    <v-list lines="one">
                      <v-list-item
                        v-for="n in 3"
                        :key="n"
                        :title="'Item ' + n"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit mimiimimi"
                        class="text-hover"
                      ></v-list-item>
                    </v-list>
                  </v-card>
                </template>
              </v-overlay>
            </a>

            <a class="cursor-pointer p-3 text-hover"
              >PARTNERS
              <v-overlay
                activator="parent"
                absolute:boolean="true"
                transition="false"
                width="100%"
                style="margin-top: 48px"
              >
                <template v-slot:default="{ isActive }">
                  <v-card title="Partners" style="border-radius: 0px">
                    <v-list lines="one">
                      <v-list-item
                        v-for="n in 3"
                        :key="n"
                        :title="'Item ' + n"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        class="text-hover"
                      ></v-list-item>
                    </v-list>
                  </v-card>
                </template>
              </v-overlay>
            </a>
            <NuxtLink to="/about" class="cursor-pointer p-3 text-hover"
              >CONTACT</NuxtLink
            >
          </v-list>
        </v-menu>
        <v-btn href="/">
          <img
            src="/assets/images/logo.png"
            :width="40"
            class="cursor-pointer"
          />
        </v-btn>
      </div>
    </template>

    <!-- NAV BAR IN DESKTOP SCREENS -->
    <v-toolbar-title>
      <!-- Hidden in mobile phones -->
      <a href="/" class="hidden-sm-and-down">
        <img
          src="/assets/images/logo with txt.png"
          :width="400"
          class="cursor-pointer"
        />
      </a>
    </v-toolbar-title>

    <template v-slot:append>
      <!-- Hidden in mobile phones -->
      <div class="hidden-sm-and-down">
        <NuxtLink to="/about" class="cursor-pointer p-3 text-hover"
          >ABOUT US</NuxtLink
        >

        <a class="cursor-pointer p-3 text-hover"
          >SERVICES
          <v-overlay
            activator="parent"
            absolute:boolean="true"
            transition="false"
            width="100%"
            style="margin-top: 48px"
          >
            <template v-slot:default="{ isActive }">
              <v-card title="Services" style="border-radius: 0px">
                <v-list lines="one">
                  <v-list-item
                    v-for="n in 3"
                    :key="n"
                    :title="'Item ' + n"
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit mimiimimi"
                    class="text-hover"
                  ></v-list-item>
                </v-list>
              </v-card>
            </template>
          </v-overlay>
        </a>

        <a class="cursor-pointer p-3 text-hover"
          >PARTNERS
          <v-overlay
            activator="parent"
            absolute:boolean="true"
            transition="false"
            width="100%"
            style="margin-top: 48px"
          >
            <template v-slot:default="{ isActive }">
              <v-card title="Partners" style="border-radius: 0px">
                <v-list lines="one">
                  <v-list-item
                    v-for="n in 3"
                    :key="n"
                    :title="'Item ' + n"
                    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    class="text-hover"
                  ></v-list-item>
                </v-list>
              </v-card>
            </template>
          </v-overlay>
        </a>
        <NuxtLink to="/about" class="cursor-pointer p-3 text-hover"
          >CONTACT</NuxtLink
        >
      </div>
    </template>
  </v-toolbar>
</template>

<style>
.text-hover:hover {
  color: #ff7801;
}
</style>
