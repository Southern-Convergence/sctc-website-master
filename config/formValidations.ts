export const RegistrationRules: Record<string, Function[]> = {
  nameRules: [
    (value: any) => !!value || 'Name is required',
    (value: any) => (value && value.trim().length >= 3) || 'Name must be at least 3 characters long',
    (value: any) => /^[a-zA-Z\s]*$/.test(value) || 'Name must contain only letters and spaces',
  ],
  emailRules: [
    (value: any) => !!value || 'Email is required',
    (value: any) => /.+@.+\..+/.test(value) || 'Email must be valid',
    (value: any) => (value && value.trim().length <= 50) || 'Email must be less than 50 characters long',
  ],
  positionRules: [
    (value: any) => !!value || 'Position is required',
    (value: any) => (value && value.trim().length >= 2) || 'Position must be at least 2 characters long',
    (value: any) => /^[a-zA-Z\s]*$/.test(value) || 'Position must contain only letters and spaces',
  ],
  companyRules: [
    (value: any) => !!value || 'Company is required',
    (value: any) => (value && value.trim().length >= 2) || 'Company must be at least 2 characters long',
  ],
};

export const ContactRules: Record<string, Function[]> = {
  nameRules: [
    (value: any) => !!value || 'Name is required',
    (value: any) => (value && value.trim().length >= 3) || 'Name must be at least 3 characters long',
    (value: any) => /^[a-zA-Z\s]*$/.test(value) || 'Name must contain only letters and spaces',
  ],

  emailRules: [
    (value: any) => !!value || 'Email is required',
    (value: any) => /.+@.+\..+/.test(value) || 'Email must be valid',
    (value: any) => (value && value.trim().length <= 50) || 'Email must be less than 50 characters long',
  ],

  subjectRules: [
    (value: any) => !!value || 'Subject is required',
    (value: any) => (value && value.trim().length >= 2) || 'Subject must be at least 2 characters long',
    (value: any) => /^[a-zA-Z\s]*$/.test(value) || 'Subject must contain only letters and spaces',
  ],

  messageRules: [
    (value: any) => !!value || 'Message is required',
    (value: any) => (value && value.trim().length >= 2) || 'Message must be at least 2 characters long',
    (value: any) =>
      (value && value.trim().length <= 500) || 'Message must be less than or equal to 500 characters long',
  ],
};
