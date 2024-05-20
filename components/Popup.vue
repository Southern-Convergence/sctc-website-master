<template>
  <v-dialog
    max-width="600"
    :model-value="showPopUp"
    :persistent="true"
    :no-click-animation="true"
    transition="dialog-top-transition"
  >
    <v-card rounded="lg">
      <v-img height="auto" src="/static/images/sctc-popup.jpg" cover>
        <v-card-title class="d-flex justify-end align-center">
          <v-sheet rounded="circle" class="my-2">
            <v-btn class="close-btn" icon="mdi-close" variant="text" @click="closePopUp"></v-btn>
          </v-sheet>
        </v-card-title>
      </v-img>
      <v-sheet class="ma-4 d-flex justify-center">
        <v-btn class="text-none" color="#ff7b02" text="Learn More" variant="flat" @click="redirect"></v-btn>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showPopUp = ref(false);
const POPUP_LAST_SHOWN_KEY = 'popup_last_shown';
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const redirect = () => {
  showPopUp.value = false;
  router.push('/Roadshow');
};

const closePopUp = () => {
  showPopUp.value = false;
};

const shouldShowPopup = () => {
  const lastShown = localStorage.getItem(POPUP_LAST_SHOWN_KEY);
  if (!lastShown) {
    return true;
  }

  const now = new Date().getTime();
  const lastShownTime = parseInt(lastShown, 10);
  return now - lastShownTime >= ONE_DAY_IN_MS;
};

const showPopupAndSetTimestamp = () => {
  showPopUp.value = true;
  localStorage.setItem(POPUP_LAST_SHOWN_KEY, new Date().getTime().toString());
};

onMounted(() => {
  if (shouldShowPopup()) {
    setTimeout(() => {
      showPopupAndSetTimestamp();
    }, 1000);
  }
});
</script>

<style>
.close-btn:hover {
  color: #ff7801;
}
</style>
