<template v-slot:default="{ isActive }">
    <v-card title="Services" style="border-radius: 0px">
      <v-list lines="one">
        <NuxtLink to="/ServiceCSD" class="cursor-pointer p-3 text-hover">
          <v-list-item
            :title="'Custom Software Development'"
            class="text-hover text-justify"
          ></v-list-item>
        </NuxtLink>
        <NuxtLink to="/item1" class="cursor-pointer p-3 text-hover">
          <v-list-item
            :title="'Item 2'"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit mimiimimi"
            class="text-hover"
          ></v-list-item>
        </NuxtLink>
        <NuxtLink to="/item1" class="cursor-pointer p-3 text-hover">
          <v-list-item
            :title="'Item 3'"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit mimiimimi"
            class="text-hover"
          ></v-list-item>
        </NuxtLink>
      </v-list>
    </v-card>
  </template>