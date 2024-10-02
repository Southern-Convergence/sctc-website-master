<template>
  <EventDevjamRegister v-if="eventData.eventType === 'DevJam'" :eventData="eventData.register" />
  <event-hcd-registration v-if="eventData.eventType === 'HCD'" :eventData="eventData.register" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { eventsData } from '../../../data/content/events.content';

const route = useRoute();
const eventData = ref({});

onMounted(() => {
  eventData.value = eventsData.find((event) => event.current && event.link === route.params.event);
  if (eventData.value) {
    useHead({
      title: `${eventData.value.metaHead} Registration`,
    });
  } else {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }
});
</script>
