<template>
 <div class="text-center mt-15">
    <h1>Please click the button to confirm the invitation</h1>
    <v-btn size="large" color="orange" class="mt-3" @click="confirm">Confirm</v-btn>
 </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { MAILER_ENDPOINT } from '../../config/config.ts';
import Swal from 'sweetalert2';
const route = useRoute();


definePageMeta({
    layout: "blank"
});

async function confirm(){
  const response = await axios.post(`${MAILER_ENDPOINT}/mailer/confirmedParticipant`, {
    participant_id: route.query.app_id
  }).then(() => {
    Swal.fire({
      title: "Sucessfully Confirmed",
      icon: "success",
      showConfirmButton: false,
      willOpen: () => {
        // Dynamically adjust z-index if needed
        const swalElement = document.querySelector('.swal2-container');
        if (swalElement) {
          swalElement.style.zIndex = '99999'; // Set it to a very high value
        }
      }
    });
  }).catch(() => {
    Swal.fire({
      title: "Something went wrong. Please Contact Tech Support",
      icon: "error",
      showConfirmButton: false,
      willOpen: () => {
        // Dynamically adjust z-index if needed
        const swalElement = document.querySelector('.swal2-container');
        if (swalElement) {
          swalElement.style.zIndex = '99999'; // Set it to a very high value
        }
      }
    });
  })
}
</script>

<style>

</style>