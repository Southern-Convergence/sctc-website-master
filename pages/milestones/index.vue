<template>
  <NuxtLayout name="common">
    <template #header>Milestones</template>
  </NuxtLayout>
  <div class="h-1/6 flex justify-center items-center font-Poppins slide-animation">
    <p class="text-center font-semibold px-12 pt-6 text-xl md:text-4xl">
      Celebrating the moments that defined our <span class="text-[#ff7b02]">success</span> and
      <span class="text-[#ff7b02]"> growth</span>.
    </p>
  </div>
  <div
    ref="scrollContainer"
    class="w-100 h-4/6 mx-auto overflow-x-auto snap-x snap-mandatory flex justify-evenly align-center scroll-smooth slide-animation"
  >
    <!-- <div class="absolute bottom-0 left-0 w-full h-1/3 gradient-background"></div> -->
    <div class="flex snap-center w-75 pa-5 scale-90 md:scale-100">
      <div class="justify-center flex align-center">
        <div class="w-10 h-10 rounded bg-[#ff7c02cb]"></div>
      </div>
      <div class="justify-end flex align-center">
        <div class="w-[120px] h-1 bg-[#ff7c02cb]"></div>
      </div>
      <template v-for="(item, index) in data" :key="index">
        <v-card
          class="flex-none snap-center rounded-lg border-lg border-orange hover"
          @click="console.log('hello world')"
          variant="elevated"
          width="360"
        >
          <v-img class="align-end text-white" height="250" :src="`/static/images/milestones/${item.image}`" cover>
          </v-img>
          <v-card-subtitle class="pt-4">{{ item.date }} &#8226; {{ item.location }}</v-card-subtitle>
          <v-card-text>
            <div class="font-medium">{{ item.title }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text @click="redirectToLink(item.id)">Learn More</v-btn>
          </v-card-actions>
        </v-card>
        <div class="justify-end flex align-center">
          <div class="w-[120px] h-1 bg-[#ff7c02cb]"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { milestonesData } from '../../../data/content/milestones.content.ts';
import { useRouter } from 'vue-router';
const router = useRouter();

useHead({ title: 'Milestones' });

const data = ref(milestonesData);
const scrollContainer = ref(null);

const handleWheelScroll = (event) => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft += event.deltaY * 10;
  }
};

const redirectToLink = (link) => {
  router.push(`${router.currentRoute.value.path}/${link}`);
};

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('wheel', handleWheelScroll, { passive: true });
  }
});

onBeforeUnmount(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('wheel', handleWheelScroll);
  }
});
</script>

<style scoped>
.flex-none {
  flex: none;
}

.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-center {
  scroll-snap-align: center;
}

.scroll-smooth {
  scroll-behavior: smooth;
}

.gradient-background {
  background: #ff7c02cb;
  /* background: linear-gradient(to top, #ff7c026c, white); */
  /* background-image: linear-gradient(#ffffff4d 50%, #d46d0d4d 100%); */
}

.border-orange {
  border-color: #ff7c02cb !important;
}

.hover:hover {
  animation: hovered 0.3s ease;
  transform: scale(1.01);
}

@keyframes hovered {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.01);
  }
}
</style>
