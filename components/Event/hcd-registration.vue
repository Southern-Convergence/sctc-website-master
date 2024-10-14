<template>
  <div class="bg-black h-100">
    <div class="w-100 h-75 d-flex justify-center align-center">
      <div class="d-flex justify-center align-center mt-10">
        <v-container>
          <v-form @submit.prevent="submitForm" v-if="!isBot"  class="slide-animation w-100 mx-auto mt-8">
            <input
              type="text"
              name="field1"
              style="opacity: 0 !important; pointer-events: none !important; cursor: none; color: white"
              tabindex="-1"
              v-model="bot"
              autocomplete="thisisbot"
            />
            <div class="flex items-center mx-2 mb-5 slide-animation">
              <v-icon @click="goToPrev(eventData.eventLink)" class="hover:text-[#ff7b02]" size="36">
                mdi-chevron-left
              </v-icon>
              <p class="font-semibold text-2xl md:text-5xl special-link ml-5 pb-1 font-Roboto">
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
            />
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
            />
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
            />
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
            />
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
            />
            <v-text-field
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
            />
            <v-btn
              color="#ff7b02"
              flat
              variant="outlined"
              type="submit"
              class="responsive-btn"
              block
            >
              Submit
            </v-btn>
          </v-form>
        </v-container>
      </div>
    </div>  
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { sendMail, saveParticipants, getParticipants } from '../../../service/mailer.ts';

const router = useRouter();
const props = defineProps({
  eventData: {
    type: Object,
    default: () => ({}),
  },
});

const goToPrev = (link) => {
  router.push(link);
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
  Swal.fire({
    title: 'Sending...',
    allowOutsideClick: false,
    showConfirmButton: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });
  saveRegistration().then(async () => {
    await sendMail(
    {
      eventName: props.eventData.eventName,
      eventDeadline: props.eventData.deadline,
      receivingEmail: props.eventData.registerEmail || null,
      fromName: props.eventData.fromName,
      emailContent: props.eventData.emailContent,
      ...formData.value,
    },
    'hcd_registration',
    false,
    ).then(() => {
      
    Swal.fire({
      icon: 'success',
      title: 'Successfully sent. You will hear from us soon.',
      showConfirmButton: false,
      timer: 2000,
      backdrop: `rgba(143,206,0,0.2)`,
    });
    clearForm(event);
  });
  }).catch(error => {
    Swal.fire({
      icon: 'warning',
      title: error.response.data,
      showConfirmButton: false,
      timer: 3000,
      backdrop: `rgba(143,206,0,0.2)`,
    });
  })

};


const saveRegistration = async () => {
  await saveParticipants({
    firstname  : formData.value.firstName,
    lastname   : formData.value.surname,
    company    : formData.value.company,
    position   : formData.value.position,
    email      : formData.value.email,
    number     : formData.value.number,
    event_type : props.eventData.eventName
  })
}

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

<style>

</style>