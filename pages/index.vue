<template>
  <div class="body-div">
    <video autoplay loop muted class="video-background">
      <source src="../assets/images/sctc-bg-animation.mp4" type="video/mp4" />
    </video>
    <div class="overlay"></div>
    <div :class="[{ baseContainer: true, inBetween: disabled, newContainer: disabled, returnBaseCarousel: !disabled }]">
      <div class="title-container flex flex-col font-black font-roboto xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl">
        <p id="title-line1">Crafting Your Digital Advantage</p>
        <p id="title-line2">with Innovative Solutions</p>
      </div>
      <br />
      <p class="disable font-Overpass text-sm md:text-xl">
        Maximize Your Business Potential with Tailor-Made
        <br />
        Software Development
      </p>
      <br />
      <v-hover v-slot="{ isHovering, props }">
        <v-btn
          v-bind="props"
          :variant="isHovering ? 'flat' : 'outlined'"
          :style="{
            backgroundColor: isHovering ? 'white !important' : '',
            color: isHovering ? '#FF5C01 !important' : 'white',
          }"
          @click="toggleCarousel"
          class="disable responsive-btn"
          >FIND OUT MORE
          <v-icon right class="ml-2">mdi-arrow-up</v-icon>
        </v-btn>
      </v-hover>
    </div>
    <Carousel :disabled="disabled" :carousel="carouselData" @toggleDisabled="toggleCarousel" />
  </div>
</template>

<script setup>
import { carouselData } from '../data/carousel-data';
useHead({
  title: 'Southern Convergence Technologies Corporation',
});

const disabled = ref(false);

const toggleCarousel = () => {
  disabled.value = !disabled.value;
};
</script>

<style>
.body-div {
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(139deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%);
}

.baseContainer {
  position: absolute;
  bottom: 20%;
  height: 30%;
  width: 90%;
  margin-left: 5%;
}

.newContainer {
  position: absolute;
  top: 5%;
  width: 90%;
}

.newContainer #title-line2,
.newContainer #title-line1 {
  align-self: center;
  margin-top: 1%;
  animation: newTitle 0.8s ease;
}

.newContainer .disable {
  display: none;
}

.title-container {
  font-weight: 900;
  letter-spacing: 3px;
}

#sec-line {
  padding-left: 3em;
}

.returnBaseCarousel {
  animation: carouselReturn 0.8s ease;
}

.returnBaseCarousel #title-line2,
.returnBaseCarousel #title-line1 {
  animation: returnLine 0.8s ease;
}

.inBetween {
  animation: onclicktitlecontainer 0.8s ease;
}

@keyframes onclicktitlecontainer {
  from {
    top: 69%;
    opacity: 0;
  }

  to {
    top: 5%;
    opacity: 1;
  }
}

@keyframes carouselReturn {
  from {
    top: 5%;
  }

  to {
    top: 50%;
  }
}

@keyframes newTitle {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes returnLine {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
