<template>
  <div class="body-div">
    <div
      :class="[
        { baseContainer: true, inBetween: disabled, newContainer: disabled },
      ]"
    >
      <div class="title-container font-Roboto text-2xl md:text-5xl">
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
          @click="findMore"
          class="disable"
          >FIND OUT MORE
        </v-btn>
      </v-hover>
    </div>

    <div
      id="CarouselContainer"
      :class="{ baseCarouselContainer: disabled }"
      style="display: none"
    >
      <v-carousel touch.boolean="true" height="100%">
        <v-carousel-item>
          <p class="font-Poppins text-xl md:text-4xl m-6">
            Services
        </p>
          <div class="columns-3 p-4 mt-10 mx-36">
            <v-card class="" v-for="n in 3" :key="n" :title="n">
              <v-card-text>mimimiimimi</v-card-text>
            </v-card>
          </div>
        </v-carousel-item>

        <v-carousel-item v-for="item in carousel">
          <div
            class="flex md:m-24"
            style="
              width: 75%;
              margin-left: auto !important;
              margin-right: auto !important;
            "
          >
            <div class="text-center p-8 m-auto">
              <p class="font-Poppins text-xl md:text-4xl m-6">
                {{ item.title }}
              </p>
              <p
                class="font-Overpass text-gray-500 text-sm font-semibold md:text-xl"
              >
                {{ item.text }}
              </p>
            </div>

            <v-avatar
              class="ma-3 sm:d-none md:d-block hidden-sm-and-down"
              rounded="0"
              size="350"
            >
              <v-img :src="item.image"></v-img>
            </v-avatar>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup>
const disabled = ref(false);

function findMore() {
  disabled.value = true;
  document.getElementById("CarouselContainer").style.display = "block";
}

const carousel = ref([
  {
    title: "Custom Software Development",
    text: "We build and optimize software solutions tailored to your unique business and organizational objectives and processes. Working closely with you throughout the development process, we ensure constant alignment with your business and operational objectives. We are committed to producing exceptional software for you.",
    image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
  },
  {
    title: "Software Re-engineering and Support",
    text: "Our seasoned software engineers enhance your system by updating technology, redesigning the UI, and integrating new features. Our reengineering and support services ensure your software stays modern, easy to maintain, and aligned with your business goals.",
    image: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
  },
  {
    title: "Cloud Computing Support",
    text: "Our cloud computing support services helps your organization migrate its IT infrastructure to the Cloud, ensuring that you can take advantage of the many benefits of Cloud Computing, including scalability, flexibility, and cost-effectiveness.  We’ll help you design, implement, and optimize Cloud services and the infrastructure to support your computing requirements.",
    image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
  },
]);
</script>

<style>
.body-div {
  background-image: linear-gradient(
      139deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url(/assets/images/gradient.gif);
  background-size: cover;
  margin: 0px;
  height: 100%;
  width: 100%;
  color: white;
}

.baseContainer {
  position: absolute;
  bottom: 10%;
  width: 80%;
  margin-left: 5%;
}

.newContainer {
  position: absolute;
  top: 10%;
  width: 80%;
  height: 50px;
  margin-left: 7%;
}

.newContainer #title-line2 {
  margin-left: 5%;
  margin-top: 1%;
  animation: newTitle 1s;
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

.baseCarouselContainer {
  background: radial-gradient(
      80% 20% at 50% -5%,
      #ffcd9388 40%,
      rgba(255, 255, 255, 0.127) 100%
    ),
    url(/assets/images/networkbg.png) no-repeat fixed;
  background-color: white;
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 70%;
  color: black;
  animation: carouselOpen 1s;
}

.inBetween {
  animation: onclicktitlecontainer 1s;
}

@keyframes onclicktitlecontainer {
  from {
    top: 73%;
    margin-left: 5%;
  }

  to {
    top: 10%;
    margin-left: 7%;
  }
}

@keyframes newTitle {
  from {
    margin-left: 0%;
    margin-top: 0%;
  }

  to {
    margin-left: 5%;
    margin-top: 1%;
  }
}

@keyframes carouselOpen {
  from {
    height: 0%;
  }

  to {
    height: 70%;
  }
}
</style>
