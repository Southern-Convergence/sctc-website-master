<template>
  <NuxtLayout name="common">
    <template #header>Events and Updates</template>
    <v-col cols="12">
      <v-list class="w-11/12 md:w-3/5 overflow-hidden" style="margin: auto">
        <v-list-item v-for="(update, index) in updatesInPage" :key="index" class="mb-3 hover">
          <!-- links to each article link -->
          <NuxtLink :to="`/updates/${update.link}`">
            <div class="py-1 px-4 max-w-5xl h-full">
              <v-row>
                <!-- column for the thumbnail -->
                <v-col cols="2" class="hidden-sm-and-down">
                  <v-img cover :src="`/static/images/${update.thumbnail}`" class="floating-image" />
                </v-col>

                <!-- column for the title and date of publishing -->
                <v-col>
                  <p class="font-Poppins font-medium text-base md:text-xl whitespace-normal custom-underline mb-2">
                    {{ update.title }}
                  </p>
                  <v-list-item-subtitle class="font-Overpass">
                    {{ update.date }}
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
import { updatesData } from '../../data/content/updates.content.ts';

const updates = ref({});

updates.value = updatesData;

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
</script>

<style>
.custom-underline {
  text-decoration: underline;
  text-decoration-color: #ff7b02;
}

p:hover {
  color: #ff7b02;
}

.hover:hover {
  background-color: #ff7c0217;
  transform: scale(1.01);
}
</style>
