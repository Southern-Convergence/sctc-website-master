<template>
  <div class="p-2 md:p-8 lg:p-16">
    <v-sheet>
      <div class="flex items-center m-2 slide-animation">
        <v-icon @click="goToPrev" class="hover-yellow" size="36"> mdi-arrow-left </v-icon>
        <p class="font-semibold text-2xl md:text-5xl text-[#FF7B02] ml-5 font-Roboto">Contact Us</p>
      </div>
      <br class="hidden-sm-and-down" />
      <v-divider class="border-opacity-100 hidden-sm-and-down"></v-divider>
      <div class="slide-animation">
        <v-row class="justify-center mt-5">
          <v-col cols="12" md="5">
            <!-- On Mobile View -->
            <v-sheet class="hidden-md-and-up">
              <div class="mx-5">
                <template v-if="isToggleMore">
                  <ContactForm @toggleMore="toggleMore" />
                </template>
                <template v-else>
                  <ContactDetails @toggleMore="toggleMore" />
                </template>
              </div>
            </v-sheet>
            <!-- On Desktop View -->
            <v-sheet class="hidden-sm-and-down">
              <ContactForm />
            </v-sheet>
          </v-col>
          <v-col cols="12" md="4" class="hidden-sm-and-down mt-5">
            <div>
              <p class="text-xxs sm:text-xs md:text-sm xl:text-md 2xl:text-lg font-Poppins">
                We know that our clients have unique needs and circumstances. Tell us more about your project, and we
                will get back to you soon with some ideas of how we can address those circumstances while creating the
                most stable software possible.
              </p>
              <br />
              <address class="text-xxs sm:text-xs md:text-sm xl:text-md 2xl:text-lg font-Poppins">
                <strong class="orange">Southern Convergence Technologies</strong>
                <br /><br />
                Lot 14 Block 5 Emerald Hills Subdivision Sumulong Highway, Sta. Cruz Antipolo City 1870
                <br /><br />
                Tel.: <span class="orange">+(63) 2 8288 2521</span> | <span class="orange">+(63) 929 319 6559</span>
                <br />
                Email: <a href="mailto:info@southernconvergence.com" class="orange">info@southernconvergence.com</a>
              </address>
              <br />
              <br />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

useHead({ title: 'Contact Us' });

const router = useRouter();
const isToggleMore = ref(true);

const goToPrev = () => {
  router.go(-1);
};

const toggleMore = () => {
  isToggleMore.value = !isToggleMore.value;
};
</script>

<style>
.orange {
  color: #ff7b02 !important;
}
</style>
