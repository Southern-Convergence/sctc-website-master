<template>
  <div class="bg h-full w-full text-white mb-md-9">
    <!-- Responsive image -->
    <v-img
      :src="`/static/images/${eventData.bannerImg}`"
      class="header mx-auto"
      width="100%"
      height="auto"
    />

    <!-- Responsive headline text -->
    <div class="flex items-center justify-center slide-animation mt-0 px-4">
      <p class="font-semibold text-xl sm:text-2xl md:text-4xl text-[#FF7B02] font-Roboto mb-1 text-center">
        {{ eventData.pageText }}
      </p>
    </div>

    <!-- Responsive content with good line-height and text alignment -->
    <div class="slide-animation mt-0 mx-auto px-4" style="max-width: 1200px;">
      <p class="text-caption sm:text-body-1 md:text-subtitle text-[#FF7B02] font-Roboto leading-relaxed text-justify" v-html="eventData.pageContent">
      </p>
    </div>

    <!-- Responsive buttons layout -->
    <div
      class="flex align-stretch flex-wrap justify-center slide-animation mx-auto"
      style="width: 100%; max-width: 1200px;"
    >
      <template v-for="(btn, index) in eventData.eventButtons" :key="index">
        <v-btn
          v-if="btn.type === 'external-link'"
          variant="outlined"
          class="ma-2 px-5 hover-roadshow-btn"
          size="large"
          :rounded="false"
          target="_blank"
          :href="btn.link"
        >
          {{ btn.name }}
        </v-btn>

        <v-btn
          v-else
          variant="outlined"
          class="ma-2 px-5 hover-roadshow-btn"
          size="large"
          :rounded="false"
          :id="btn.type === 'dialog' ? 'activator-target' : ''"
          @click="btn.link !== null && goToPage(btn.link)"
        >
          {{ btn.name }}
        </v-btn>
      </template>
    </div>
  </div>

  <!-- Dialog with responsive image and text -->
  <v-dialog activator="#activator-target" max-width="800">
    <template v-slot:default="{ isActive }">
      <v-card class="dialog-border">
        <v-img
          :lazy-src="`/static/images/${eventData.dialogImg}`"
          :src="`/static/images/${eventData.dialogImg}`"
          cover
        >
          <v-card-title class="d-flex justify-end align-center">
            <v-sheet rounded="circle" class="my-2 scale-75 md:scale-100">
              <v-btn class="close-btn" icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
            </v-sheet>
          </v-card-title>
        </v-img>
        <v-card-text class="font-Poppins text-caption sm:text-body-1 md:text-lg-body-1 my-5">
          <template v-for="dialog in eventData.dialogText">
            <p v-html="dialog"></p>
            <br />
          </template>
          <br />
          <p>
            <strong>
              <br />
              <v-btn
                append-icon="mdi-arrow-right"
                class="mt-5 roadshow-register-btn"
                target="_blank"
                :to="eventData.dialogActionLink"
              >
                {{ eventData.dialogButtonText }}
              </v-btn>
            </strong>
          </p>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  eventData: {
    type: Object,
    default: () => ({}),
  },
});

const goToPage = (link) => {
  router.push(link);
};
</script>

<style scoped>
.bg {
  background-color: black;
  background-image: url(/assets/images/sctc-website-bg-rhino-roadshow.png);
  background-size: auto 40%;
  background-position: bottom right;
  background-repeat: no-repeat;
}

.roadshow-register-btn {
  color: white !important;
  background: #db5856 !important;
}

.hover-roadshow-btn:hover {
  color: #ff7b02 !important;
}

.dialog-border {
  border: 2px solid white !important;
}

@media (max-width: 600px) {
  .header {
    padding: 0;
  }

  p {
    font-size: 1rem !important;
    line-height: 1.5rem;
  }

  .roadshow-register-btn {
    font-size: 0.875rem;
  }

  .ma-2 {
    margin: 0.5rem;
  }

  .px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .text-caption {
    font-size: 0.875rem;
  }

  .text-lg-body-1 {
    font-size: 1.125rem;
  }
}

@media (min-width: 601px) {
  .header {
    width: 75%;
    padding: 10px;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .roadshow-register-btn {
    font-size: 1rem;
  }

  .text-lg-body-1 {
    font-size: 1.25rem;
  }
}
</style>
