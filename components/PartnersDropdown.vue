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
