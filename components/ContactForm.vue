<template>
  <form @submit.prevent="submitForm">
    <v-text-field variant="outlined" v-model="formData.name" label="Name" required></v-text-field>
    <v-text-field variant="outlined" v-model="formData.email" label="Email" required></v-text-field>
    <v-text-field variant="outlined" v-model="formData.subject" label="Subject" required></v-text-field>
    <v-textarea variant="outlined" v-model="formData.message" label="Message" required></v-textarea>
    <v-btn variant="flat" type="submit" color="#ff7b02" class="white--text">Submit</v-btn>
    <v-btn class="hidden-md-and-up ml-4" @click="emits('toggleMore')" color="orange" dark variant="text">
      more details
      <v-icon right class="ml-2">mdi-arrow-right</v-icon>
    </v-btn>
  </form>
</template>

<script setup>
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const emits = defineEmits(['toggleMore']);

const submitForm = () => {
  // TODO implement captcha system before sending email 
  console.log(formData.value);
  // TODO will implement mailing service when captcha verification is set
};
</script>
