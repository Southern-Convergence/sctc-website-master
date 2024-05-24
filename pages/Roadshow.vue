<template>
  <div class="bg h-full w-full text-white mb-md-9">
    <v-img
      :src="'/static/images/sctc-website-banner-roadshow.jpg'"
      class="header aspect-auto w-75 p-20"
      style="margin: 0px auto"
    />
    <div class="flex items-center justify-center slide-animation">
      <p class="font-semibold text-2xl md:text-4xl text-[#FF7B02] font-Roboto mb-8 text-center">
        Experience Seamless AI Integration at Our Exclusive Roadshow
      </p>
    </div>
    <div
      color="black"
      class="flex align-stretch flex-column flex-md-row justify-center slide-animation w-75 mx-auto my-10"
    >
      <template v-for="(btn, index) in roadshow_details_btns" :key="index">
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
          <br />
          <p>
            <strong class="">
              To secure your spot and unlock the potential of GenAI for your organization.
              <v-btn
                append-icon="mdi-arrow-right"
                class="mb-1 pa-0 roadshow-emphasis text-caption text-md-body-1 text-lg-h6"
                variant="text"
                target="_blank"
                href="https://www.datastax.com/events/apac-genai-roadshow-manila"
              >
                Register now
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

const goToPage = (link) => {
  router.push(link);
};

useHead({
  title: 'Roadshow DataStax & SCTC ',
});

const roadshow_details_btns = [
  { name: 'About the event', link: null, type: 'dialog' },
  { name: 'Register', link: 'https://www.datastax.com/events/apac-genai-roadshow-manila', type: 'external-link' },
  { name: 'Get in touch', link: '/contact', type: 'page' },
];
</script>

<style>
.bg {
  background-color: black;
  background-image: url(/assets/images/sctc-website-bg-rhino-roadshow.png);
  background-size: auto 40%;
  background-position: bottom right;
  background-repeat: no-repeat;
}

.roadshow-emphasis {
  color: #ff7b02 !important;
}

.hover-roadshow-btn:hover {
  color: #ff7b02 !important;
}
</style>
