import { NuxtLink } from '#build/components';

<template>
  <v-app-bar
    :elevation="2"
    density="compact"
    color="black"
    style="position: relative"
    id="overlay-target"
    class="font-Poppins"
  >
    <template v-slot:prepend>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      
      <a href="/about" class="hidden-md-and-up">
        <img
          src="/assets/images/logo.png"
          :width="40"
          class="cursor-pointer"
        />
      </a>
    </template>

    <v-app-bar-title>
      <!-- Hidden in mobile phones -->
      <a href="/" class="hidden-md-and-down">
        <img
          src="/assets/images/logo with txt.png"
          :width="400"
          class="cursor-pointer"
        />
      </a>
    </v-app-bar-title>

    
    <template v-slot:append>
      <!-- Hidden in mobile phones -->
      <div class="">
        <NuxtLink to="/" class="cursor-pointer p-3 text-hover"
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
  </v-app-bar>
</template>

<style>
.text-hover:hover {
  color: #ff7801;
}
</style>
