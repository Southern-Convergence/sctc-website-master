<template>
  <div class="bg-black h-100">
    <div class="w-100 h-75 d-flex justify-center align-center">
      <div class="d-flex justify-center align-center">
        <v-container>
          <form @submit.prevent="submitForm" v-if="!isBot" class="slide-animation w-100 mx-auto mt-8">
            <input
              type="text"
              name="field1"
              style="opacity: 0 !important; pointer-events: none !important; cursor: none; color: white"
              tabindex="-1"
              v-model="bot"
              autocomplete="thisisbot"
            />
            <div class="flex items-center mx-2 mt-6 mb-4 slide-animation">
              <v-icon @click="goToPrev" class="hover:text-[#ff7b02]" size="36"> mdi-chevron-left </v-icon>
              <p class="font-semibold text-2xl md:text-5xl special-link ml-5 font-Roboto">
                {{ eventData.registerText }}
              </p>
            </div>
            <v-text-field
              @click.right.prevent
              @keydown="keydown"
              @copy.prevent
              @paste.prevent
              variant="outlined"
              v-model="firstName"
              :rules="firstNameRules"
              label="First Name"
              required
            ></v-text-field>
            <v-text-field
              @click.right.prevent
              @keydown="keydown"
              @copy.prevent
              @paste.prevent
              variant="outlined"
              v-model="surname"
              :rules="surnameRules"
              label="Surname"
              required
            ></v-text-field>
            <v-text-field
              @click.right.prevent
              @keydown="keydown"
              @copy.prevent
              @paste.prevent
              variant="outlined"
              v-model="company"
              :rules="companyRules"
              label="Company Name"
              required
            ></v-text-field>
            <v-text-field
              @click.right.prevent
              @keydown="keydown"
              @copy.prevent
              @paste.prevent
              variant="outlined"
              v-model="position"
              :rules="positionRules"
              label="Job Position"
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
              label="Email Address"
              required
            ></v-text-field
            ><v-text-field
              @click.right.prevent
              @keydown="keydown"
              @copy.prevent
              @paste.prevent
              variant="outlined"
              v-model="number"
              type="number"
              :rules="mobileRules"
              label="Phone Number"
              required
            ></v-text-field>
            <v-btn color="#ff7b02" flat variant="outlined" type="submit" block :disabled="submitDisabled">
              Submit
            </v-btn>
          </form>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { sendMail } from '../../../service/mailer.ts';

const router = useRouter();
const props = defineProps({
  eventData: {
    type: Object,
    default: () => ({}),
  },
});

const goToPrev = () => {
  router.go(-1);
};

const { firstNameRules, surnameRules, companyRules, positionRules, emailRules, mobileRules } = props.eventData.rules;

const firstName = ref('');
const surname = ref('');
const company = ref('');
const position = ref('');
const email = ref('');
const number = ref('');

const startTime = ref(Date.now());
const bot = ref(null);
const isBot = ref(false);

const submitForm = async (event) => {
  // Honeypot challenge
  if (bot.value != null) {
    isBot.value = true;
    return;
  }

  // 3 Mails per 15 minute limit
  const emailTimestamps = JSON.parse(localStorage.getItem('emailTimestamps') || '[]');
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

  // Display pending status of sending
  Swal.fire({
    title: 'Sending...',
    allowOutsideClick: false,
    showConfirmButton: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });

  // Send Email
  await sendMail(
    {
      eventName: props.eventData.eventName,
      eventDeadline: props.eventData.deadline,
      ...formData.value,
    },
    'event',
  )
    .then(() => {
      // Update the email timestamps
      recentEmails.push(now);
      localStorage.setItem('emailTimestamps', JSON.stringify(recentEmails));

      // Notify status
      Swal.fire({
        title: 'Successfully sent',
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

// Form Data
const formData = computed(() => ({
  firstName: firstName.value.trim(),
  surname: surname.value.trim(),
  company: company.value.trim(),
  position: position.value.trim(),
  email: email.value.trim(),
  number: number.value.trim(),
}));

/**
 * Checks if all fields are following the rules
 * thus removing disabled state of submit button
 */
const submitDisabled = computed(() => {
  return !(
    firstNameRules.every((rule) => rule(firstName.value.trim()) === true) &&
    surnameRules.every((rule) => rule(surname.value.trim()) === true) &&
    companyRules.every((rule) => rule(company.value.trim()) === true) &&
    positionRules.every((rule) => rule(position.value.trim()) === true) &&
    emailRules.every((rule) => rule(email.value.trim()) === true) &&
    mobileRules.every((rule) => rule(number.value.trim()) === true)
  );
});

//Performs final validation
const validateForm = () => {
  const isValidFirstName = firstNameRules.every((rule) => rule(firstName.value.trim()) === true);
  const isValidSurname = surnameRules.every((rule) => rule(surname.value.trim()) === true);
  const isValidCompany = companyRules.every((rule) => rule(company.value.trim()) === true);
  const isValidPosition = positionRules.every((rule) => rule(position.value.trim()) === true);
  const isValidEmail = emailRules.every((rule) => rule(email.value.trim()) === true);
  const isValidNumber = mobileRules.every((rule) => rule(number.value.trim()) === true);

  if (!isValidFirstName || !isValidSurname || !isValidCompany || !isValidPosition || !isValidEmail || !isValidNumber) {
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

// Clears form and resets timer
const clearForm = (event) => {
  startTime.value = Date.now();
  event.target.reset();
};

// Prevents user from submitting when pressing the enter key
const keydown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};
</script>
