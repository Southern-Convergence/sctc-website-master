<template>
  <div v-html="htmlContent"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const htmlContent = ref('');

const fetchHtmlContent = async () => {
  const firstName = route.query.firstName;
  const lastName = route.query.lastName;
  const companyName = route.query.companyName;

  try {
    // Production
    const response = await axios.get(
      'https://sctc-mailer-service-w4zzk.ondigitalocean.app/event-mailer/confirmAttendance',
      {
        // Local
        //   const response = await axios.get('http://localhost:7003/event-mailer/confirmAttendance', {
        params: {
          firstName,
          lastName,
          companyName,
        },
      },
    );
    htmlContent.value = response.data;
  } catch (error) {
    console.error('Error fetching HTML content:', error);
  }
};

onMounted(() => {
  fetchHtmlContent();
});

definePageMeta({
  layout: 'blank',
});
</script>
