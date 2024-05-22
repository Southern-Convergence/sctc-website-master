<template>
  <form @submit.prevent="submitForm">
    <v-text-field variant="outlined" v-model="formData.name" label="Name" required></v-text-field>
    <v-text-field variant="outlined" v-model="formData.email" label="Email" required></v-text-field>
    <div class="flex flex-column flex-md-row justify-md-space-evenly ga-md-5">
      <v-text-field variant="outlined" v-model="formData.company" label="Company" required></v-text-field>
      <v-text-field variant="outlined" v-model="formData.position" label="Position" required></v-text-field>
    </div>
    <v-btn variant="flat" type="submit" size="x-large" block color="#ff7b02" class="white--text">Register</v-btn>
  </form>
</template>

<script setup>
const formData = ref({
  name: '',
  email: '',
  company: '',
  position: '',
});

const submitForm = () => {
  // TODO implement captcha system before sending email
  console.log(formData.value);
  // TODO will implement mailing service when captcha verification is set
};
</script>
