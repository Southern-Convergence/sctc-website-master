<template>
  <NuxtLayout name="common">
    <template #header>Events & Updates</template>
    <v-col cols="12">
      <v-list class="w-11/12 md:w-3/5 overflow-hidden m-auto">
        <v-list-item v-for="(update, index) in updatesInPage" :key="index" class="mb-3 hover">
          <!-- links to each article link -->
          <NuxtLink :to="`/updates/${update.link}`">
            <div class="py-1 px-4 max-w-5xl h-full">
              <v-row>
                <!-- column for the thumbnail 
                 thumbnail hidden in mobile view -->
                <v-col cols="2" class="hidden-sm-and-down">
                  <v-img
                    cover
                    :src="`/static/images/updates/${thumbnails[index + indexMultiplier].images[1]}`"
                    class="thumbnail"
                  />
                  <!-- thumbnails[index+indexMultiplier].images[1]
                    gets the second image from all objects in updatesGallery
                    the image to fetch can be changed, i just decided to get the 2nd picture -->
                </v-col>

                <!-- column for the title and date of event -->
                <v-col>
                  <p
                    class="font-Poppins font-medium text-base md:text-xl whitespace-normal underline decoration-[#ff7b02] mb-2"
                  >
                    {{ update.title }}
                  </p>
                  <v-list-item-subtitle class="font-Overpass">
                    {{ update.subtitle[0].content }}
                    <!-- sample data:
                     subtitle: [
                      {
                        icon: 'mdi-calendar',
                        content: 'June 5, 2024',
                      },
                      {
                        icon: 'mdi-map-marker-radius',
                        content: 'Makati Shangri-La, Manila',
                      },
                    ], -->
                  </v-list-item-subtitle>
                </v-col>
              </v-row>
            </div>
          </NuxtLink>
        </v-list-item>
      </v-list>

      <div class="w-4/12" style="margin: auto">
        <!-- pagination for multiple articles -->
        <!-- each page only have 4 pages -->
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          @input="onPageChange"
          class="object-bottom text-sm"
          active-color="#ff7b02"
          size="small"
          rounded
        >
        </v-pagination>
      </div>
    </v-col>
  </NuxtLayout>
</template>

<script setup>
import { updatesData } from '../../../data/content/updates/updates.content.ts';
import { updatesGallery } from '../../../data/content/updates/updates.gallery.ts';

useHead({ title: 'Events & Updates' });

const updates = ref({});
const thumbnails = ref({});

updates.value = updatesData;
thumbnails.value = updatesGallery;

const currentPage = ref(1);
const itemsPerPage = 4;

// calculate the total number of pages
const totalPages = computed(() => Math.ceil(updates.value.length / itemsPerPage));

// gets the updates for the current page
const updatesInPage = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return updates.value.slice(start, end);
});

// changes the current page
const onPageChange = (page) => {
  currentPage.value = page;
};

// calculates the number addedd to index to get the correct thumbnail from updatesGallery
// just return 0,1,2,3...
const indexMultiplier = computed(() => {
  return itemsPerPage * (currentPage.value - 1);
});
</script>

<style scoped>
p:hover {
  color: #ff7b02;
  text-decoration: underline;
  text-decoration-color: #ff7b02;
}

.hover:hover {
  background-color: #ff7c0217;
  animation: hovered 0.3s ease;
  transform: scale(1.01);
}

.thumbnail {
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3) !important;
  border-radius: 5px !important;
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
