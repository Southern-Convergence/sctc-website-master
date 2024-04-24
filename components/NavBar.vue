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
    </template>

    <v-app-bar-title>
      <a href="/">
        <img
          src="/assets/images/logo with txt.png"
          :width="400"
          class="cursor-pointer"
        />
      </a>
    </v-app-bar-title>

    <template v-slot:append>
      <a class="cursor-pointer p-3" href="/about">ABOUT US</a>
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
                  subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                  class="text-hover"
                ></v-list-item>
              </v-list>
            </v-card>
          </template>
        </v-overlay>
      </a>

      <!-- <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <a class="cursor-pointer p-3" v-bind="activatorProps">SERVICES</a>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Dialog">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </template>
      </v-dialog> -->

      <!-- <a class="cursor-pointer p-3"
        >SERVICES
        <v-overlay
          activator="parent"
          location-strategy="connected"
          scroll-strategy="block"
        > target="'#overlay-target'"
          <v-card> sss! </v-card>
        </v-overlay>
      </a> -->
      <a class="cursor-pointer p-3">PARTNERS</a>
      <a class="cursor-pointer p-3">CONTACT</a>
    </template>
  </v-app-bar>

  <!-- <nav class="max-screen-lg bg-black px-6 text-white grid grid-cols-3">
            <img src="/assets/images/logo with txt.png" class="content-start py-3 col-span-2" width="500px">
            <div class="grid grid-cols-4 justify-items-center font-Overpass">
                <a class="py-3 px-0">ABOUT US</a>
                
            </div>
        </nav> -->
</template>

<style>
.text-hover:hover {
  color: #ff7801;
}
</style>
