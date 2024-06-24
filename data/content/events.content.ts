import { RegistrationRules2 } from '../../config/formValidations';

export const eventsData = [
  {
    eventType: 'Roadshow',
    link: 'roadshow',
    countdownDate: '06/05/2024',
    bannerText: 'Experience Seamless AI Integration at Our Exclusive Roadshow',
    bannerImg: 'sctc-website-banner-roadshow.jpg',
    bannerDialogImg: 'roadshow-dialog-banner.jpg',
    ogMetaImg: 'https://sctc-buckets.sgp1.cdn.digitaloceanspaces.com/meta_non_event.png',
    dialogText: [
      `Southern Convergence Technologies and DataStax are proud to announce their collaboration, marking a
            significant milestone in revolutionizing data management solutions. On June 5th, in Manila, we invite you to
            join us for an exclusive roadshow, showcasing the power of DataStax's GenAI capabilities.`,
      `This event not only signifies the commencement of our partnership but also heralds a new era of streamlined
            data handling. In today's fast-paced world, every industry grapples with the challenge of managing vast
            amounts of paperwork and data. Through GenAI, this burden becomes a thing of the past`,
      `Imagine effortlessly sorting through mountains of data with unparalleled ease. It's not just innovation;
            it's a necessity for businesses striving for efficiency and competitiveness. Join us at this event to
            witness firsthand how Southern Convergence Technologies and DataStax are shaping the future of data
            management.`,
    ],
    dialogImg: 'sctc-banner-roadshow.jpg',
    dialogActionText: 'To secure your spot and unlock the potential of GenAI for your organization.',
    dialogButtonText: 'Register now',
    dialogActionLink: 'https://www.datastax.com/events/apac-genai-roadshow-manila',
    eventButtons: [
      { name: 'About the event', link: null, type: 'dialog' },
      { name: 'Register', link: 'https://www.datastax.com/events/apac-genai-roadshow-manila', type: 'external-link' },
      { name: 'Get in touch', link: '/contact', type: 'page' },
    ],
    metaHead: 'Roadshow DataStax & SCTC',
    current: false, // only one event should have this set as true, the rest will be false
  },
  {
    eventType: 'DevJam',
    link: 'devjam',
    bannerImg: 'devjam-header.jpg',
    bannerDialogImg: 'devjam-dialog-banner.jpg',
    ogMetaImg: 'https://sctc-buckets.sgp1.cdn.digitaloceanspaces.com/meta_event.png',
    countdownBannerHeader: 'Gen AI Dev Jam',
    countdownBannerText: `Join us on July 24, 2023, for the first GenAI Dev Jam in the Philippines! Connect, innovate, and explore the future of AI with developers nationwide in an exciting day of collaboration and cutting-edge ideas. Don't miss out!`,
    countdownDate: '07/24/2024',
    header: 'Unlock the Power of AI and AstraDB at Dev Jam 2024',
    text: [
      `You don't have to be an expert in Deep Learning, Machine Learning, or Data Science to learn how to leverage tools like OpenAI's LLMs and AstraDB to create intelligent experts, assistants, and platforms.`,
      `In this Dev Jam session, we will update you on recent developments and provide the essential information to get started. This program is designed to familiarize your enterprise architects, developers, and practitioners with RAGStack, LLMs, and Vector Database quickly. With guidance from a DataStax technical coach and engaging self-paced assignments, participants will bring their own data and develop a Gen AI agent using the DataStax Astra platform.`,
    ],
    faq: [
      {
        type: 'string',
        question: `What you’ll Build and Deploy`,
        answer: `Bring your use case or requirement and sample data, and we will design the solution, build the Agent or Chatbot and deploy this. You will walk away with a working Generative AI Agent/chatbot and/or enhanced search or recommendations using context at the end of this session. We will provide you with sample data, code and the framework to build and deploy your Gen AI Application.`,
      },
      {
        type: 'objectArr',
        question: `What you’ll learn or What we will cover`,
        answer: {
          contents: [
            {
              topic: 'DataStax Real Time Data Platform for Gen AI Applications',
            },
            {
              topic: 'Large Language Models (OpenAI or Bedrock or Vertex)',
            },
            {
              topic: 'Prompt Engineering',
            },
            {
              topic: 'Role of Vector Embeddings',
            },
            {
              topic: 'Retrieval Augmented Generation (RAG):',
              subtopics: ['Improve search accuracy and reduce hallucinations'],
            },
            {
              topic: 'Astra Vector Database:',
              subtopics: ['Indexing and Scale', 'Hybrid Search'],
            },
            {
              topic: 'Frameworks/Stack to Build a Production Gen AI Agent:',
              subtopics: ['RAGStack', 'Astra', 'LangChain', 'LangServe', 'LangSmith', 'Vercel', 'Streamlit / Chainlit'],
            },
          ],
        },
      },
      {
        type: 'array',
        question: `Pre-requisites`,
        answer: [
          'Bring your Data (Sample datasets can be provided, if needed)',
          'Laptop with python or node js development environment',
          'Signup for astra.datastax.com',
          'Signup for openai.com',
          'Bring your enthusiasm',
        ],
      },
      {
        type: 'string',
        question: `Where is Dev Jam 2024 being held?`,
        answer: `Currently TBA`,
      },
      {
        type: 'string',
        question: `Who will be attending Dev Jam 2024?`,
        answer:
          'The attendee profile for Dev Jam 2024 primarily targets developers who are currently engaged in the industry. Participants have the flexibility to work individually or in pairs.',
      },
    ],
    eventButtons: [
      { name: 'About', type: 'dialog', activator: 'about-target' },
      { name: 'Register', type: 'page', activator: null },
      { name: 'FAQ', type: 'dialog', activator: 'faq-target' },
    ],
    register: {
      registerText: 'Dev Jam Registration',
      registerLink: '/register/events/devjam',
      registerFields: ['First Name', 'Surname', 'Company', 'Position', 'Mobile Number', 'Email'],
      registerEmail: 'main@southernconvergence.com',
      rules: RegistrationRules2,
      deadline: '07/24/2024',
      eventName: 'Dev Jam',
    },
    metaHead: 'Dev Jam',
    current: true,
  },
];
