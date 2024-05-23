<template>
  <form @submit.prevent="submitForm" v-if="!isBot">
    <input
      type="text"
      name="field1"
      style="opacity: 0 !important; pointer-events: none !important; cursor: none; color: white"
      tabindex="-1"
      v-model="bot"
      autocomplete="thisisbot"
    />
    <v-text-field
      @click.right.prevent
      @keydown="keydown"
      @copy.prevent
      @paste.prevent
      variant="outlined"
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      @click.right.prevent
      @keydown="keydown"
      @copy.prevent
      @paste.prevent
      variant="outlined"
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      @click.right.prevent
      @keydown="keydown"
      @copy.prevent
      @paste.prevent
      variant="outlined"
      v-model="subject"
      :rules="subjectRules"
      label="Subject"
      required
    ></v-text-field>
    <v-textarea variant="outlined" v-model="message" :rules="messageRules" label="Message" required></v-textarea>
    <v-btn variant="flat" type="submit" color="#ff7b02" class="white--text" :disabled="submitDisabled">Submit</v-btn>
    <v-btn class="hidden-md-and-up ml-4" @click="emits('toggleMore')" color="orange" dark variant="text">
      more details
      <v-icon right class="ml-2">mdi-arrow-right</v-icon>
    </v-btn>
  </form>
</template>

<script setup>
import Swal from 'sweetalert2';
import { ContactRules } from '../config/formValidations';

const { nameRules, emailRules, subjectRules, messageRules } = ContactRules;

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const startTime = ref(Date.now());
const bot = ref(null);
const isBot = ref(false);

const formData = computed(() => ({
  name: name.value.trim(),
  email: email.value.trim(),
  subject: subject.value.trim(),
  message: message.value.trim(),
}));

const submitDisabled = computed(() => {
  return !(
    nameRules.every((rule) => rule(name.value.trim()) === true) &&
    emailRules.every((rule) => rule(email.value.trim()) === true) &&
    subjectRules.every((rule) => rule(subject.value.trim()) === true) &&
    messageRules.every((rule) => rule(message.value.trim()) === true)
  );
});

const emits = defineEmits(['toggleMore']);

const submitForm = async (event) => {
  if (bot.value != null) {
    isBot.value = true;
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
  const isValidSubject = subjectRules.every((rule) => rule(subject.value.trim()) === true);
  const isValidMessage = messageRules.every((rule) => rule(message.value.trim()) === true);

  if (!isValidName || !isValidEmail || !isValidSubject || !isValidMessage) {
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
