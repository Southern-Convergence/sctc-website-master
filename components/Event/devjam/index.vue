<template>
  <div class="h-full bg-black">
    <!-- Banner -->
    <div class="background-image w-full h-4/6 text-white d-flex align-center font-poppins">
      <!-- Countdown Timer Display -->
      <div class="countdown-container">
        <div class="px-15 py-5 py-md-15 mx-auto">
          <div class="w-md-75 mx-auto">
            <v-row justify="center" align="center">
              <v-col cols="12" class="d-flex flex-column align-center justify-center">
                <span class="text-h6 text-sm-h3 text-md-h2 text-[#ff7b02] font-weight-bold slide-animation">
                  {{ eventData.countdownBannerHeader }}
                </span>
              </v-col>
              <v-col cols="12" class="d-flex flex-column align-center justify-center md:mt-5">
                <span class="text-center text-xs text-sm-h6 text-md-h5 font-weight-light">
                  {{ eventData.countdownBannerText }}
                </span>
              </v-col>
              <v-col
                v-for="time in timeLeft"
                cols="3"
                class="d-flex flex-column flex-md-row align-center justify-center md:mt-5"
              >
                <span
                  class="text-xs border-2 border-amber-600/50 py-1 px-3 py-md-2 px-md-4 text-md-h5 font-weight-bold text-[#ff7b02]"
                  >{{ time.value }}</span
                >
                <span class="text-md-h6 ml-md-2 hidden-sm-and-down slide-animation">{{ time.unit }}</span>
                <span class="mt-2 text-xs hidden-md-and-up slide-animation">{{ time.shortUnit }}</span>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>

    <!-- Event Button Group -->
    <div
      class="flex align-stretch h-2/6 align-md-center flex-column flex-md-row justify-center slide-animation w-50 mx-auto"
    >
      <template v-for="(btn, index) in eventData.eventButtons" :key="index">
        <!-- If Button redirects to an external page -->
        <v-btn
          v-if="btn.type === 'external-link'"
          variant="tonal"
          class="ma-2 p-5 responsive-btn special-link-button font-Poppins"
          size="x-large"
          :rounded="false"
          target="_blank"
          :href="btn.link"
        >
          {{ btn.name }}
        </v-btn>

        <!-- Else if its a dialog or another page -->
        <v-btn
          v-else
          variant="text"
          class="ma-2 p-5 responsive-btn special-link-button font-Poppins"
          size="x-large"
          :rounded="false"
          :id="btn.type === 'dialog' ? btn.activator : ''"
          @click="btn.activator === null && goToPage(eventData.register.registerLink)"
        >
          {{ btn.name }}
        </v-btn>

        <!-- Removes last divider -->
        <v-divider class="border-opacity-75" v-if="index < eventData.eventButtons.length - 1" />
      </template>
    </div>
  </div>

  <!-- About Dialog -->
  <v-dialog activator="#about-target" max-width="800" transition="dialog-bottom-transition">
    <template v-slot:default="{ isActive }">
      <v-card class="dialog-border">
        <v-img
          height="auto"
          :lazy-src="`/static/images/${eventData.bannerDialogImg}`"
          :src="`/static/images/${eventData.bannerDialogImg}`"
          cover
        >
          <v-card-title class="d-flex justify-end align-center">
            <v-sheet rounded="circle" class="my-2 scale-75 md:scale-100">
              <v-btn class="close-btn" icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
            </v-sheet>
          </v-card-title>
        </v-img>
        <v-card-text class="font-Poppins my-5">
          <p class="text-center font-Poppins text-lg text-[#ff7b02] font-weight-bold">
            {{ eventData.header }}
          </p>
          <br />
          <p v-for="EventText in eventData.text" class="font-Poppins text-caption text-md-body-2 text-lg-body-1 mt-5">
            {{ EventText }}
            <br />
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            append-icon="mdi-chevron-right"
            :to="eventData.register.registerLink"
            class="bg-black text-caption text-md-body-2 text-lg-body-1"
            block
          >
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

  <!-- FAQ Dialog -->
  <v-dialog activator="#faq-target" max-width="800" transition="dialog-bottom-transition">
    <template v-slot:default="{ isActive }">
      <v-card class="dialog-border">
        <v-img
          height="auto"
          :lazy-src="`/static/images/${eventData.bannerDialogImg}`"
          :src="`/static/images/${eventData.bannerDialogImg}`"
          cover
        >
          <v-card-title class="d-flex justify-end align-center">
            <v-sheet rounded="circle" class="my-2 scale-75 md:scale-100">
              <v-btn class="close-btn" icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
            </v-sheet>
          </v-card-title>
        </v-img>

        <div class="ma-md-5 d-flex flex-column justify-center align-center">
          <v-expansion-panels v-for="event in eventData.faq" class="ma-2 font-Poppins" flat>
            <v-expansion-panel>
              <v-expansion-panel-title class="text-caption text-md-body-2 text-lg-body-1 hover:text-[#ff7b02]">
                {{ event.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-caption text-md-body-2 text-lg-body-1 text-justify font-weight-light">
                <template v-if="event.type == 'string'">
                  {{ event.answer }}
                </template>
                <template v-if="event.type == 'objectArr'">
                  <template v-for="bullet in event.answer.contents">
                    <ul class="list-disc ml-5">
                      <li>
                        {{ bullet.topic }}
                        <ul class="list-disc ml-8" v-if="bullet.subtopics">
                          <li v-for="subtopics in bullet.subtopics">
                            {{ subtopics }}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </template>
                </template>
                <template v-if="event.type == 'array'">
                  <ul class="list-disc ml-5" v-for="itemList in event.answer">
                    <li>{{ itemList }}</li>
                  </ul>
                </template>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <div class="mt-10 mb-3">
            <span class="font-light text-caption text-md-body-2 text-lg-body-1">
              Got more questions?
              <nuxt-link class="text-[#ff7b02] cursor-pointer" to="/contact">Contact Us</nuxt-link>
            </span>
          </div>
        </div>
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

const props = defineProps({
  eventData: {
    type: Object,
    default: () => ({}),
  },
});

const countdownDate = props.eventData.countdownDate;
const targetTime = new Date(countdownDate).getTime();
const timeLeft = ref(null);

const updateTimer = () => {
  const now = new Date().getTime();
  const distance = targetTime - now;

  if (distance < 0) {
    clearInterval(timerInterval);
    timeLeft.value = [
      { unit: 'Days', shortUnit: 'D', value: '00' },
      { unit: 'Hours', shortUnit: 'H', value: '00' },
      { unit: 'Minutes', shortUnit: 'M', value: '00' },
      { unit: 'Seconds', shortUnit: 'S', value: '00' },
    ];
  } else {
    timeLeft.value = [
      {
        unit: 'Days',
        shortUnit: 'D',
        value: Math.floor(distance / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, '0'),
      },
      {
        unit: 'Hours',
        shortUnit: 'H',
        value: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, '0'),
      },
      {
        unit: 'Minutes',
        shortUnit: 'M',
        value: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, '0'),
      },
      {
        unit: 'Seconds',
        shortUnit: 'S',
        value: Math.floor((distance % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, '0'),
      },
    ];
  }
};

const timerInterval = setInterval(updateTimer, 1000);

onMounted(() => {
  updateTimer();
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>

<style>
.dialog-border {
  border: 2px solid white !important;
}

.background-image {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/assets/images/devjam-header.png);
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1670163402343-2e01bda4a53e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */
  background-size: cover;
  background-position: center;
}
</style>
