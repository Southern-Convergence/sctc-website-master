<template>
  <NuxtLayout name="common">
    <template #header>Contact us</template>
    <v-col cols="12" md="5">
      <!-- On Mobile View -->
      <v-sheet class="hidden-md-and-up">
        <div class="w-100">
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
    <v-col cols="12" md="4" class="hidden-sm-and-down">
      <div>
        <p class="text-xxs sm:text-xs md:text-sm xl:text-md 2xl:text-lg font-Poppins">
          We know that our clients have unique needs and circumstances. Tell us more about your project, and we will get
          back to you soon with some ideas of how we can address those circumstances while creating the most stable
          software possible.
        </p>
        <br />
        <address class="text-xxs sm:text-xs md:text-sm xl:text-md 2xl:text-lg font-Poppins">
          <strong class="text-[#ff7b02]">Southern Convergence Technologies</strong>
          <br /><br />
          Lot 14 Block 5 Emerald Hills Subdivision Sumulong Highway, Sta. Cruz Antipolo City 1870
          <br /><br />
          Tel.: <span class="text-[#ff7b02]">+(63) 2 8288 2521</span> |
          <span class="text-[#ff7b02]">+(63) 929 319 6559</span>
          <br />
          Email: <a href="mailto:info@southernconvergence.com" class="orange">info@southernconvergence.com</a>
        </address>
        <br />
        <br />
      </div>
    </v-col>
  </NuxtLayout>
</template>

<script setup>
useHead({ title: 'Contact Us' });

const isToggleMore = ref(true);
const toggleMore = () => {
  isToggleMore.value = !isToggleMore.value;
};
</script>
