<template>
  <div class="body-div">
    <video autoplay loop muted class="video-background">
      <source src="../assets/images/sctc-bg-animation.mp4" type="video/mp4" />
    </video>
    <div class="overlay"></div>
    <div :class="[{ baseContainer: true, inBetween: disabled, newContainer: disabled, returnBaseCarousel: !disabled }]">
      <div class="title-container font-black font-Roboto text-2xl sm:text:-2xl md:text-5xl">
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
          class="disable"
          >FIND OUT MORE
        </v-btn>
      </v-hover>
    </div>

    <div :class="{ hidden: !disabled }">
      <v-btn @click="toggleCarousel" variant="flat" icon="mdi-arrow-up" class="return-btn"> </v-btn>
    </div>

    <Carousel :disabled="disabled" :carousel="carousel" />
  </div>
</template>

<script setup>
const disabled = ref(false);

const toggleCarousel = () => {
  disabled.value = !disabled.value;
};

const carousel = ref([
  {
    title: 'Custom Software Development',
    text: 'We specialize in building and optimizing software solutions tailored to unique business and organizational objectives and processes. Through close collaboration throughout the development process, we ensure continuous alignment with business and operational goals. Our dedication is focused on delivering exceptional software solutions for every client.',
    image: 'custom-sd.jpg',
    link: '/ServiceCSD',
    tag: 'Services',
  },
  {
    title: 'Consulting Services',
    text: 'Our consulting service offers advanced software development solutions powered by Fastly and DataStax. With our expertise in custom software development, performance optimization, and security, we help businesses build scalable, reliable, and secure applications that drive growth and innovation. Partner with us to unlock the full potential of your software development projects.',
    image: 'consulting-services.jpg',
    link: '/ServiceCS',
    tag: 'Services',
  },
  {
    title: 'Our Partners',
    text: 'Staying ahead in the technology landscape requires collaboration and innovation. That is why Southern Convergence Technologies has partnered with established technology and software providers to expand our product offerings and provide you with cutting-edge solutions.',
    images: ['sctc-partners-fastly.png', 'sctc-partners-ds.png'],
    links: ['/fastly', '/datastax'],
    tag: 'Partners',
  },
]);
</script>

<style>
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

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(139deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%);
}

.return-btn {
  position: absolute;
  bottom: 73%;
  left: 50px;
  width: 50px;
  background-color: white;
  text-align: center;
  z-index: 2;
  color: #ff7b02;
  animation: toggleCarouselBtn 0.8s ease;
}

.baseContainer {
  position: absolute;
  bottom: 10%;
  height: 30%;
  width: 90%;
  margin-left: 5%;
}

.newContainer {
  position: absolute;
  top: 5%;
  width: 80%;
  margin-left: 7%;
}

.newContainer #title-line2 {
  margin-left: 20px;
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

.returnBaseCarousel #title-line2 {
  animation: returnLine 0.8s ease;
}

.inBetween {
  animation: onclicktitlecontainer 0.8s ease;
}

@keyframes toggleCarouselBtn {
  from {
    bottom: 0%;
  }

  to {
    bottom: 73%;
  }
}

@keyframes onclicktitlecontainer {
  from {
    top: 69%;
    margin-left: 5%;
  }

  to {
    top: 5%;
    margin-left: 7%;
  }
}

@keyframes carouselReturn {
  from {
    top: 5%;
  }

  to {
    top: 60%;
  }
}

@keyframes newTitle {
  from {
    margin-left: 0%;
    margin-top: 0%;
  }

  to {
    margin-left: 20px;
    margin-top: 1%;
  }
}

@keyframes returnLine {
  from {
    margin-left: 20px;
    margin-top: 1%;
  }

  to {
    margin-left: 0%;
    margin-top: 0%;
  }
}
</style>
