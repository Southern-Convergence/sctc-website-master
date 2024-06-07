<template>
  <v-toolbar
    :elevation="2"
    density="compact"
    color="black"
    style="position: relative"
    id="overlay-target"
    class="font-Poppins p-1 text-body-2 z-50 hidden-sm-and-down"
  >
    <v-toolbar-title>
      <nuxt-link to="/">
        <img src="/assets/images/logo_with_txt.png" :width="400" class="cursor-pointer" />
      </nuxt-link>
    </v-toolbar-title>

    <template v-slot:append>
      <div class="flex">
        <template v-for="item in navItems">
          <template v-if="item.type === 'page'">
            <nuxt-link
              :to="item.link"
              :class="{ 'active-link': route.path === item.link }"
              class="cursor-pointer p-3 text-hover"
            >
              {{ item.title }}
            </nuxt-link>
          </template>
          <template v-if="item.type === 'dropdown'">
            <v-speed-dial location="bottom center" transition="slide-y-reverse-transition">
              <template v-slot:activator="{ props: activatorProps }">
                <nuxt-link
                  v-bind="activatorProps"
                  class="cursor-pointer p-3 text-hover"
                  :class="{
                    'active-link': item.nested
                      ? Object.keys(route.params)[0] === 'service'
                      : item.sublinks.includes(route.path),
                  }"
                  >{{ item.title }}</nuxt-link
                >
              </template>
              <v-sheet color="black" class="d-flex flex-column align-start mt-3 py-1">
                <v-btn
                  v-for="subItem in item.props"
                  variant="text"
                  flat
                  :to="`${item.nested ? '/services/' : '/'}${subItem.link}`"
                  :key="subItem.title"
                  class="ma-2 text-left text-hover hidden-sm-and-down"
                >
                  <v-icon v-if="subItem.img" class="mr-2">
                    <v-img
                      :lazy-src="`/static/images/inverted/${subItem.img}`"
                      :src="`/static/images/inverted/${subItem.img}`"
                    ></v-img>
                  </v-icon>
                  {{ subItem.title }}
                </v-btn>
              </v-sheet>
            </v-speed-dial>
          </template>
        </template>
      </div>
    </template>
  </v-toolbar>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

const props = defineProps({
  navItems: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.text-hover:hover {
  color: #ff7801;
}

.active-link {
  color: #ff7b02;
  font-weight: 600;
}
</style>
