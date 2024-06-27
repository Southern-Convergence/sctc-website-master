import axios from 'axios';
import { MAILER_ENDPOINT } from '../config/config';
import { MAIL_TEMPLATES } from '../config/mailContents';

const generateEmailContent = (payload: any, template: string) => {
  let rawHtml: string;
  let subject: string;

  switch (template) {
    case 'contactUs':
      rawHtml = MAIL_TEMPLATES.CONTACT_US_FORM_TEMPLATE(payload);
      subject = 'Customer Inquiry';
      break;
    case 'event':
      rawHtml = MAIL_TEMPLATES.EVENT_REGISTRATION_TEMPLATE(payload);
      subject = 'Event Registration';
      break;
    default:
      throw new Error('Unknown template type');
  }

  return {
    fromName: 'Southern Convergence Technologies',
    fromAddress: 'no-reply@sctc.support',
    // admin email
    to: payload.receivingEmail || 'info@southernconvergence.com',
    subject,
    rawHtml,
  };
};

export const sendMail = async (payload: any, template: string) => {
  const data = generateEmailContent(payload, template);

  // ! Only for production environment
  return await axios.post(`${MAILER_ENDPOINT}/mailer/sendMail`, data);
  // ! Only for dev environment
  console.log(data);
  return true;
};
