<template>
  <form @submit.prevent="submitForm">
    <v-text-field
      @click.right.prevent
      @copy.prevent
      @paste.prevent
      @keydown="keydown"
      variant="outlined"
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      @click.right.prevent
      @copy.prevent
      @paste.prevent
      @keydown="keydown"
      variant="outlined"
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
    ></v-text-field>
    <div class="flex flex-column flex-md-row justify-md-space-evenly ga-md-5">
      <v-text-field
        @click.right.prevent
        @copy.prevent
        @paste.prevent
        @keydown="keydown"
        variant="outlined"
        v-model="company"
        :rules="companyRules"
        label="Company"
        required
      ></v-text-field>
      <v-text-field
        @click.right.prevent
        @copy.prevent
        @paste.prevent
        @keydown="keydown"
        variant="outlined"
        v-model="position"
        :rules="positionRules"
        label="Position"
        required
      ></v-text-field>
    </div>
    <v-btn
      variant="flat"
      type="submit"
      size="x-large"
      block
      color="#ff7b02"
      class="white--text"
      :disabled="submitDisabled"
      >Register</v-btn
    >
  </form>
</template>

<script setup>
import Swal from 'sweetalert2';
import { RegistrationRules } from '../config/formValidations';

const { nameRules, emailRules, positionRules, companyRules } = RegistrationRules;

const name = ref('');
const email = ref('');
const company = ref('');
const position = ref('');
const startTime = ref(Date.now());

const formData = computed(() => ({
  name: name.value.trim(),
  email: email.value.trim(),
  company: company.value.trim(),
  position: position.value.trim(),
}));

const submitDisabled = computed(() => {
  return !(
    nameRules.every((rule) => rule(name.value.trim()) === true) &&
    emailRules.every((rule) => rule(email.value.trim()) === true) &&
    positionRules.every((rule) => rule(position.value.trim()) === true) &&
    companyRules.every((rule) => rule(company.value.trim()) === true)
  );
});

const submitForm = async (event) => {
  let endTime = Date.now();
  const timeTaken = endTime - startTime.value;

  if (timeTaken < 5000) {
    Swal.fire({
      title: 'Too fast! Try again!',
      showConfirmButton: false,
      timer: 2000,
      backdrop: `rgba(244,67,54,0.2)`,
    });
    return;
  }

  if (!validateForm()) {
    return;
  }

  Swal.fire({
    title: 'Sending...',
    allowOutsideClick: false,
    showConfirmButton: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });

  // ! Perform Email Call
  await sendEmail(formData.value)
    .then((message) => {
      // Notify status
      Swal.fire({
        title: message,
        showConfirmButton: false,
        timer: 1500,
        backdrop: `rgba(143,206,0,0.2)`,
      });
    })
    .catch((error) => {
      Swal.fire({
        title: error,
        showConfirmButton: false,
        timer: 2000,
        backdrop: `rgba(244,67,54,0.2)`,
      });
    });

  // Empty Forms and time
  clearForm(event);
};

// TODO This is only a placeholder for the actual API call
const sendEmail = (data) => {
  return new Promise((resolve, reject) => {
    // Simulating email sending
    setTimeout(() => {
      const success = Math.random() < 0.8; // 80% chance of success
      if (success) {
        resolve('Successfully sent');
      } else {
        reject('Unsuccessful, Please try again later.');
      }
    }, 1000);
  });
};

const validateForm = () => {
  const isValidName = nameRules.every((rule) => rule(name.value.trim()) === true);
  const isValidEmail = emailRules.every((rule) => rule(email.value.trim()) === true);
  const isValidCompany = companyRules.every((rule) => rule(company.value.trim()) === true);
  const isValidPosition = positionRules.every((rule) => rule(position.value.trim()) === true);

  if (!isValidName || !isValidEmail || !isValidCompany || !isValidPosition) {
    Swal.fire({
      title: 'Invalid details!',
      showConfirmButton: false,
      timer: 2000,
      backdrop: `rgba(244,67,54,0.2)`,
    });
    return false;
  }

  return true;
};

const clearForm = (event) => {
  startTime.value = Date.now();
  event.target.reset();
};

const keydown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};
</script>

<style>
.no-border {
  border: 0;
}
</style>
