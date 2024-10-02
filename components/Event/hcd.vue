<template>
  <div class="bg h-full w-full text-white mb-md-9">
    <div class="flex items-center justify-center slide-animation">
      <p class="font-semibold text-2xl md:text-4xl text-[#FF7B02] font-Roboto mb-8 text-center">
        {{ eventData.pageText }}
      </p>

      
    </div>
    <div class="slide-animation" style="width: 500px; margin: 0 auto; position: relative;">
    <p style="text-align: justify; text-justify: inter-word;" 
       class="text-caption md:text-subtitle text-[#FF7B02] font-Roboto mb-8" 
       v-html="eventData.pageContent">
    </p>
  </div>

    <div
      color="black"
      class="flex align-stretch flex-column flex-md-row justify-center slide-animation w-75 mx-auto my-10"
    >
      <template v-for="(btn, index) in eventData.eventButtons" :key="index">
        <v-btn
          v-if="btn.type === 'external-link'"
          variant="outlined"
          class="ma-2 p-5 hover-roadshow-btn"
          size="x-large"
          :rounded="false"
          target="_blank"
          :href="btn.link"
        >
          {{ btn.name }}
        </v-btn>

        <v-btn
          v-else
          variant="outlined"
          class="ma-2 p-5 hover-roadshow-btn"
          size="x-large"
          :rounded="false"
          :id="btn.type === 'dialog' ? 'activator-target' : ''"
          @click="btn.link !== null && goToPage(btn.link)"
        >
          {{ btn.name }}
        </v-btn>
      </template>
    </div>
  </div>
  <v-dialog activator="#activator-target" max-width="800">
    <template v-slot:default="{ isActive }">
      <v-card class="dialog-border">
        <v-img
          height="auto"
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
        <v-card-text class="font-Poppins text-caption text-md-body-2 text-lg-body-1 my-5">
          <template v-for="dialog in eventData.dialogText">
            <p v-html="dialog"></p>
            <br />
          </template>
          <br />
          <p>
          
            <strong class="">
              <!-- {{ eventData.dialogActionText }} -->
              <br />
              <v-btn
                append-icon="mdi-arrow-right"
                class="mt-5 roadshow-register-btn text-caption text-md-body-2 text-lg-body-1"
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

.center {
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
