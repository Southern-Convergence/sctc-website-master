import axios from 'axios';
import { MAILER_ENDPOINT } from '../config/config';
import { MAIL_TEMPLATES } from '../config/mailContents';

const generateEmailContent = (payload: any, template: string, sendToAdmin = true) => {
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
    case 'queue_registration': 
      rawHtml = MAIL_TEMPLATES.DEVJAM_QUEUE_MAIL_TEMPLATE(payload);
      subject = payload.emailContent.subject;
      break;
    case 'hcd_registration': 
      rawHtml = MAIL_TEMPLATES.HCD_REGISTRATION(payload);
      subject = payload.emailContent.subject;
      break;
    case 'hcd_invitation':
      rawHtml = MAIL_TEMPLATES.HCD_INVITATION(payload)
      subject = payload.emailContent.subject;
      break;
    default:
      throw new Error('Unknown template type');
  }

  return {
    fromName: payload.fromName || 'Southern Convergence Technologies',
    fromAddress: 'no-reply@sctc.support',
    to: sendToAdmin ? payload.receivingEmail || 'info@southernconvergence.com' : payload.email,
    subject,
    rawHtml,
  };
};

export const sendMail = async (payload: any, template: string, sendToAdmin: boolean = true) => {

  const data = generateEmailContent(payload, template, sendToAdmin);
  // ! Only for production environment
  return await axios.post(`${MAILER_ENDPOINT}/mailer/sendMail`, data);
  // return await axios.post(`http://localhost:7003/mailer/sendMail`, data)
  // ! Only for dev environment

  
  return true;
};

export const saveParticipants = async (payload: any) => {
  return await axios.post(`${MAILER_ENDPOINT}/mailer/saveParticipants`, payload)
}
export const getParticipants = async () => {
  const data =  await axios.get(`${MAILER_ENDPOINT}/mailer/getParticipants`)
  return data
}

export const getInvitedParticipants = async () => {
  const data =  await axios.get(`${MAILER_ENDPOINT}/mailer/getInvitedParticipants`)
  return data
}

export const login = async (payload: any) => {
  const data =  await axios.post(`${MAILER_ENDPOINT}/auth/login`, payload)
  console.log(data)
  return data
}
