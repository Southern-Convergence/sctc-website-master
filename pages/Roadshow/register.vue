<template>
  <div class="bg h-full w-full text-white mb-md-9">
    <v-sheet color="black h-full w-full">
      <div class="flex items-center justify-center slide-animation mt-10 md:mt-20">
        <v-icon @click="goToPage('/roadshow')" class="hover-yellow" size="36"> mdi-arrow-left </v-icon>
        <p class="font-semibold text-2xl md:text-5xl text-[#FF7B02] ml-5 font-Roboto">Register</p>
      </div>

      <div
        color="black"
        class="flex align-stretch flex-column flex-md-row justify-center slide-animation w-50 mx-auto my-10"
      >
        <v-btn variant="outlined" class="ma-0 md:ma-2 p-5 hover-roadshow-btn" :rounded="false" id="activator-target">
          About the event
        </v-btn>
      </div>

      <div
        color="black"
        class="flex align-stretch flex-column justify-center slide-animation w-50 mx-auto"
        max-width="800px"
      >
        <RegisterForm />
      </div>
    </v-sheet>
  </div>

  <v-dialog activator="#activator-target" max-width="800">
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-img height="auto" src="/static/images/sctc-banner-roadshow.jpg" cover>
          <v-card-title class="d-flex justify-end align-center">
            <v-sheet rounded="circle" class="my-2">
              <v-btn class="close-btn" icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
            </v-sheet>
          </v-card-title>
        </v-img>
        <v-card-text class="font-Poppins text-caption text-md-body-1 text-lg-h6">
          <p>
            Southern Convergence Technologies and DataStax are proud to announce their collaboration, marking a
            significant milestone in revolutionizing data management solutions. On June 5th, in Manila, we invite you to
            join us for an exclusive roadshow, showcasing the power of DataStax's GenAI capabilities.
          </p>
          <br />
          <p>
            This event not only signifies the commencement of our partnership but also heralds a new era of streamlined
            data handling. In today's fast-paced world, every industry grapples with the challenge of managing vast
            amounts of paperwork and data. Through GenAI, this burden becomes a thing of the past.
          </p>
          <br />
          <p>
            Imagine effortlessly sorting through mountains of data with unparalleled ease. It's not just innovation;
            it's a necessity for businesses striving for efficiency and competitiveness. Join us at this event to
            witness firsthand how Southern Convergence Technologies and DataStax are shaping the future of data
            management.
          </p>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPage = (link) => {
  router.push(link);
};

useHead({
  title: 'Roadshow DataStax & SCTC ',
});
</script>

<style></style>
