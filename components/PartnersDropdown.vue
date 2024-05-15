<template v-slot:default="{ isActive }">
  <v-card title="Partners" style="border-radius: 0px">
    <v-list lines="one">

      <NuxtLink to="/DataStax" class="cursor-pointer p-3 text-hover">
          <v-list-item class="text-hover text-justify">
              DataStax
          </v-list-item>
      </NuxtLink>

      <NuxtLink to="" class="cursor-pointer p-3 text-hover">
          <v-list-item class="text-hover text-justify">
              Fastly
          </v-list-item>
      </NuxtLink>

    </v-list>
  </v-card>
</template>
