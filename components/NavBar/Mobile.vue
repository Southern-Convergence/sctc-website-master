<template>
  <div class="hidden-md-and-up">
    <v-sheet color="#000" class="p-1" style="z-index: 2;">
      <v-menu
        width="100%"
        transition="slide-x-transition"
        class="font-Poppins hidden-md-and-up"
        location="center"
        style="margin: 0px !important; padding: 0px !important"
      >
        <template v-slot:activator="{ props }">
          <v-btn icon flat variant="text" v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list class="mt-14" bg-color="#1b1b1b">
          <template v-for="item in navItems">
            <template v-if="item.type === 'page'">
              <v-list-item>
                <NuxtLink :to="item.link" class="cursor-pointer p-3 text-hover">{{ item.title }}</NuxtLink>
              </v-list-item>
            </template>
            <template v-if="item.type === 'dropdown'">
              <v-list-item>
                <div class="cursor-pointer p-3 text-hover">
                  {{ item.title }}
                  <v-overlay
                    activator="parent"
                    transition="false"
                    class="mt-14"
                    width="100%"
                    :close-on-content-click="true"
                  >
                    <component :is="getComponent(item.component)" :props="item.props"></component>
                  </v-overlay>
                </div>
              </v-list-item>
            </template>
          </template>
        </v-list>
      </v-menu>
      <v-btn flat variant="text">
        <nuxt-link to="/">
          <img src="/assets/images/logo.png" :width="40" class="cursor-pointer" />
        </nuxt-link>
      </v-btn>
    </v-sheet>
  </div>
</template>
<script setup>
const props = defineProps({
  navItems: {
    type: Array,
    default: () => [],
  },
});

function getComponent(name) {
  return defineAsyncComponent(() => import(`./Dropdown/${name}.vue`));
}
</script>
