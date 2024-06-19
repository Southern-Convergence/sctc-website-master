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
        <template v-for="(item, index) in navItems" :key="index">
          <template v-if="item.type === 'page' && item.enabled">
            <nuxt-link
              :to="item.link"
              :class="{ 'active-link': route.path === item.link, 'special-link': !item.common }"
              class="cursor-pointer p-3 text-hover"
            >
              {{ item.title }}
            </nuxt-link>
          </template>
          <template v-if="item.type === 'dropdown' && item.enabled">
            <v-speed-dial location="bottom center" :transition="false">
              <template v-slot:activator="{ props: activatorProps }">
                <nuxt-link
                  v-bind="activatorProps"
                  class="cursor-pointer p-3 text-hover"
                  :class="{
                    'active-link': item.nested && Object.keys(route.params)[0] === item.routeParamName,
                  }"
                  >{{ item.title }}
                </nuxt-link>
              </template>
              <v-sheet color="black" class="d-flex flex-column align-start mt-3 py-1">
                <v-btn
                  v-for="(subItem, index) in item.props"
                  variant="text"
                  flat
                  :to="`${item.nested ? `/${item.component}/` : '/'}${subItem.link}`"
                  :key="`subItem-${index}`"
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
