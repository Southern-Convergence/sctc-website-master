<template>
  <form @submit.prevent="submitForm" v-if="!isBot">
    <input
      type="text"
      name="field1"
      style="opacity: 0 !important; pointer-events: none !important; cursor: none; color: black"
      tabindex="-1"
      v-model="bot"
      autocomplete="thisisbot"
    />
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
import { DATASTAX } from '../config/events';
import { sendMail } from '../service/mailer';

const { nameRules, emailRules, positionRules, companyRules } = RegistrationRules;

const name = ref('');
const email = ref('');
const company = ref('');
const position = ref('');
const startTime = ref(Date.now());
const bot = ref(null);
const isBot = ref(false);

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
  // Honeypot challenge
  if (bot.value != null) {
    isBot.value = true;
    return;
  }

  // 3 Mails per 15 minute limit
  const emailTimestamps = JSON.parse(localStorage.getItem('RegisterEmailTimestamps') || '[]');
  const now = Date.now();
  const fifteenMinutesAgo = now - 15 * 60 * 1000;

  // Filter the list of email timestamps to keep only those within the last 15 minutes
  const recentEmails = emailTimestamps.filter((timestamp) => timestamp > fifteenMinutesAgo);

  if (recentEmails.length >= 5) {
    Swal.fire({
      title: 'Email limit reached! Try again later.',
      showConfirmButton: false,
      timer: 2000,
      backdrop: `rgba(244,67,54,0.2)`,
    });
    return;
  }

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

  await sendMail(
    {
      ...formData.value,
      ...DATASTAX,
    },
    'registration',
  )
    .then(() => {
      // Update the email timestamps
      recentEmails.push(now);
      localStorage.setItem('RegisterEmailTimestamps', JSON.stringify(recentEmails));

      // Notify status
      Swal.fire({
        title: 'Successfully sent registration',
        showConfirmButton: false,
        timer: 1500,
        backdrop: `rgba(143,206,0,0.2)`,
      });
    })
    .catch(() => {
      Swal.fire({
        title: 'Unsuccessful. Please try again later.',
        showConfirmButton: false,
        timer: 2000,
        backdrop: `rgba(244,67,54,0.2)`,
      });
    });

  // Empty Forms and time
  clearForm(event);
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
