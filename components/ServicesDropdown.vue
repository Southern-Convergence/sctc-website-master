<template v-slot:default="{ isActive }">
    <v-card title="Services" style="border-radius: 0px">
      <v-list lines="one">
        <NuxtLink to="/ServiceCSD" class="cursor-pointer p-3 text-hover">
          <v-list-item
            class="text-hover text-justify"
          >Custom Software Development</v-list-item>
        </NuxtLink>
        <NuxtLink to="/ServiceCS" class="cursor-pointer p-3 text-hover">
          <v-list-item
            class="text-hover"
          >Consulting Services</v-list-item>
        </NuxtLink>
      </v-list>
    </v-card>
  </template>