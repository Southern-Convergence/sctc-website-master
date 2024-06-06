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
            <div class="cursor-pointer p-3 text-hover">
              <p
                :class="{
                  'active-link': item.nested
                    ? Object.keys(route.params)[0] === 'service'
                    : item.sublinks.includes(route.path),
                }"
              >
                {{ item.title }}
              </p>
              <v-overlay
                activator="parent"
                transition="false"
                width="100%"
                style="margin-top: 57px"
                :close-on-content-click="true"
              >
                <component :is="getComponent(item.component)" :props="item.props"></component>
              </v-overlay>
            </div>
          </template>
        </template>
      </div>
    </template>
  </v-toolbar>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

function getComponent(name) {
  return defineAsyncComponent(() => import(`./Dropdown/${name}.vue`));
}

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
