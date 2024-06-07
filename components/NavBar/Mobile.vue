<template>
  <div class="hidden-md-and-up" style="z-index: 1 !important">
    <v-sheet color="#000" class="p-1">
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
              <v-list-group :value="item.title" class="px-3">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :title="item.title"></v-list-item>
                </template>
                <v-list-item
                  v-for="subItem in item.props"
                  :key="subItem.title"
                  :title="subItem.title"
                  class="text-hover"
                  @click="redirect(`${item.nested ? '/services/' : '/'}${subItem.link}`)"
                >
                  <template v-slot:prepend>
                    <v-icon v-if="subItem.img">
                      <v-img
                        :lazy-src="`/static/images/inverted/${subItem.img}`"
                        :src="`/static/images/inverted/${subItem.img}`"
                      ></v-img>
                    </v-icon>
                  </template>
                </v-list-item>
              </v-list-group>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  navItems: {
    type: Array,
    default: () => [],
  },
});

const redirect = (link) => {
  router.push(link);
};
</script>
