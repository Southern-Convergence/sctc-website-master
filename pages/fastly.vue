<template>
  <div class="gradient h-full w-full text-white">
    <img
      src="/assets/images/fastly.png"
      class="header aspect-auto border-8 invert scale-75"
      style="margin: 0px auto 15px auto;"
    />

    <InPartnerContent :products="productsFastly" :description="descriptionFastly" />
  </div>
</template>

<script setup>
import InPartnerContent from '../components/InPartnerContent.vue';
import { ref } from 'vue';

useHead({
  title: 'Fastly',
});

const descriptionFastly = ref([
  "We're thrilled to introduce our partnership with Fastly – the industry leader in content delivery, security, and edge computing. Together, we're committed to helping businesses like yours achieve unparalleled digital performance and security, all while delivering exceptional user experiences.",
  "Fastly's Content Delivery Network (CDN) is the backbone of modern internet delivery. With strategically positioned edge servers worldwide, Fastly ensures lightning-fast access to web content for users across the globe. Through our partnership, you gain access to this powerful CDN, enabling you to reach your audience faster and more reliably than ever before.",
  "Security is paramount in today's digital landscape, and Fastly's advanced security features provide peace of mind for businesses of all sizes. From DDoS protection to real-time threat intelligence, Fastly's comprehensive security suite safeguards your digital assets against evolving cyber threats, ensuring the integrity and availability of your online presence.",
]);

const productsFastly = ref([
  {
    image: 'CDN.png',
    text: "Fastly's Content Delivery Network (CDN) revolutionizes the way businesses deliver online content to their audiences. With strategically positioned edge servers worldwide, Fastly's CDN ensures lightning-fast access to web content, optimizing user experiences regardless of location. Discover how Fastly's CDN empowers businesses to reach global audiences with unparalleled speed and reliability.",
  },
  {
    image: 'computeedge.png',
    text: "Fastly's Compute@Edge is reshaping the digital landscape by bringing computation closer to the user, enabling real-time processing and customization of content at the edge of the network. Experience the power of Compute@Edge as it unlocks endless possibilities for dynamic, personalized online experiences, setting new standards for speed, flexibility, and innovation.",
  },
  {
    image: 'security.png',
    text: "Fastly is dedicated to ensuring the safety and integrity of your digital assets in an ever-evolving cyber landscape. Our comprehensive security solutions offer protection against a wide range of threats, from DDoS attacks to data breaches. With real-time threat intelligence and robust security features, Fastly provides the peace of mind you need to focus on growing your business while we safeguard your online presence. Explore how Fastly's security solutions can elevate your defenses and protect your brand in today's digital world.",
  },
  {
    image: 'next-gen_waf.png',
    text: "Fastly's Next-Gen Web Application Firewall (WAF) is your frontline defense against sophisticated cyber threats targeting your web applications. With advanced threat detection capabilities and real-time updates, our WAF goes beyond traditional security measures to provide proactive protection for your online assets. Explore how Fastly's Next-Gen WAF empowers businesses to confidently navigate the digital landscape, ensuring the integrity and availability of their web applications.",
  },
]);
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(0deg, rgb(255, 168, 168) 0%, rgb(107, 16, 16) 100%);
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
