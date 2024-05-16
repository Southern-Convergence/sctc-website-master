<template>
    <div class="gradient h-full w-full  text-white">
        <img src="/assets/images/datastax.webp" class="header h-40 aspect-auto border-8 invert" style="margin: 0px auto;" />

        <div class="w-3/4 font-Poppins text-xl" style="margin: 0px auto">
          <v-tabs grow mobile>
            <v-tab text="description"></v-tab>
            <v-tab text="products"></v-tab>
          </v-tabs>
        </div>

        <v-divider thickness="2" class="border-opacity-75 m-0 p-0">

        </v-divider>
    </div>

</template>

<style>
.gradient {
  background-image: linear-gradient(0deg, #e0a8ffff 0%, #4d106bff 100%);
}
</style>
