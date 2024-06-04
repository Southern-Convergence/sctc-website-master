<template>
  <div class="h-full w-full text-white body-div">
    <video autoplay loop muted class="video-background">
      <source src="../assets/images/datastax-bg-animation.mp4" type="video/mp4" />
    </video>
    <img
      src="/assets/images/datastax.webp"
      class="header aspect-auto border-8 invert p-1 scale-75"
      style="margin: 0px auto 15px auto;"
    />

    <InPartnerContent :products="productsDataStax" :description="descriptionDataStax" :tagline="tagline" />
  </div>
</template>

<script setup>
import InPartnerContent from '../components/InPartnerContent.vue';
import { tagline, descriptionDataStax, productsDataStax } from '../data/datastax-data.ts';

useHead({
  title: 'DataStax',
});


</script>

<style scoped>
.body-div {
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  overflow: hidden; /* Ensure the video doesn't overflow the container */
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0; /* Position the video behind other content */
}

.gradient {
  background-image: linear-gradient(0deg, rgb(208, 122, 254) 0%, rgb(69, 0, 104) 100%);
}

.header {
  animation: emphasis 0.8s ease;
}

@keyframes emphasis {
  0% {
    transform: scale(0.75); /* Adjust the scale factor as needed */
  }
  50% {
    transform: scale(.85); /* Adjust the scale factor as needed */
  }
  100% {
    transform: scale(.75); /* Adjust the scale factor as needed */
  }
}


</style>
