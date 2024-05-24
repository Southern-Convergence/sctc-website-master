<template>
  <div class="gradient h-full w-full text-white">
    <img
      src="/assets/images/datastax.webp"
      class="header aspect-auto border-8 invert p-1 scale-75"
      style="margin: 0px auto 15px auto;"
    />

    <InPartnerContent :products="productsDataStax" :description="descriptionDataStax" />
  </div>
</template>

<script setup>
import InPartnerContent from '../components/InPartnerContent.vue';
import { ref } from 'vue';

useHead({
  title: 'DataStax',
});

const descriptionDataStax = ref([
  'Welcome to the forefront of modern data management with DataStax, a leading provider of distributed hybrid cloud database management systems. DataStax offers tailored solutions designed specifically for enterprises navigating this dynamic landscape.',
  "At the heart of DataStax's offerings lies their flagship product, DataStax Enterprise (DSE). DSE seamlessly merges the scalability of Apache Cassandra with enterprise-grade functionality, empowering organizations with unparalleled real-time data distribution and analytics capabilities. Additionally, DataStax presents Astra, a cloud-native Database-as-a-Service (DBaaS) meticulously built on theensuring smooth operations and optimal performance.",
  'As a trusted partner of DataStax, we offer an extensive suite of consultancy, training, and support services strategically crafted to empower organizations in maximizing the potential of their data infrastructure. Through our collaborative endeavors, enterprises can confidently fortify their resilience, bolster agility, and drive innovation within the dynamic realm of digital transformation.',
  "Join us in harnessing the power of DataStax's cutting-edge solutions to revolutionize your data management strategy and drive transformative outcomes for your business.",
]);

const productsDataStax = ref([
  {
    image: 'astra-db.png',
    text: 'The groundbreaking, globally distributed, serverless, multi-model database service meticulously crafted by DataStax to cater to users across their preferred cloud platform.',
  },
  {
    image: 'vector-search.png',
    text: "As businesses navigate the complexities of modern data management, the demand for advanced search capabilities continues to grow. DataStax's Vector Search offers a revolutionary approach, enabling organizations to harness the power of vector-based search algorithms for unparalleled accuracy and efficiency.",
  },
  {
    image: 'astra-streaming.png',
    text: "Your high-speed data pipeline solution. In today's fast-paced digital world, information flows from various sources like websites, sensors, and apps. Astra Streaming enables you to harness this constant stream of data in real-time, acting as your powerful conveyor belt for collecting and processing information swiftly.",
  },
  {
    image: 'ragstack.png',
    text: 'A comprehensive solution for optimizing your computer systems. RAGStack incorporates the best open-source technologies for implementing RAG, providing developers with a comprehensive GenAI Stack. Leveraging LangChain, LLamaIndex, and more, RAGStack ensures seamless integration and efficiency in your systems.',
  },
  {
    image: 'datastax-enterprise.png',
    text: 'An innovative platform engineered to facilitate the seamless delivery of real-time applications. Built on Apache Cassandra®, the leading cloud-native NoSQL database, and validated by Fortune 100 enterprises, DataStax Enterprise sets the standard for scalability and reliability.',
  },
]);
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(0deg, #e0a8ffff 0%, #4d106bff 100%);
}

.header {
  animation: emphasis 0.8s ease;
}

@keyframes emphasis {
  0% {
    transform: scale(0.75); /* Adjust the scale factor as needed */
  }
  50% {
    transform: scale(.85); /* Adjust the scale factor as needed */
  }
  100% {
    transform: scale(.75); /* Adjust the scale factor as needed */
  }
}


</style>
