<template>
  <div class="h-full w-full text-white body-div">
    <video autoplay loop muted class="video-background">
      <source src="../assets/images/fastly-bg-animation.mp4" type="video/mp4" />
    </video>
    <img
      src="/assets/images/fastly.png"
      class="header aspect-auto border-8 invert scale-75"
      style="margin: 0px auto 0px auto;"
    />

    <!--<v-btn icon="mdi-chevron-double-left" class="">
      
    </v-btn>-->

    <InPartnerContent :products="productsFastly" :description="descriptionFastly" :tagline="tagline" />
  </div>
</template>

<script setup>
import InPartnerContent from '../components/InPartnerContent.vue';
import { ref } from 'vue';

useHead({
  title: 'Fastly',
});

const tagline = ref('Welcome to Our Fastly Partnership: Accelerate Your Digital Experience with Confidence');

const descriptionFastly = ref([
  "We're thrilled to introduce our partnership with Fastly – the industry leader in content delivery, security, and edge computing. Together, we're committed to helping businesses like yours achieve unparalleled digital performance and security, all while delivering exceptional user experiences.",
  "Fastly is an innovative cloud platform that enables businesses to deliver websites and applications swiftly and securely to global users. With a strategically positioned global server network, Fastly serves as a high-speed conduit for internet traffic, ensuring rapid and reliable access to web content. By leveraging this network, Fastly optimizes online content delivery, delivering a seamless and efficient browsing experience for users.",
  "As your trusted partner, we're here to help you leverage the full potential of Fastly's platform. Whether you're looking to accelerate content delivery, fortify your security posture, or unlock the power of edge computing, our partnership with Fastly provides the tools and expertise you need to succeed in today's digital landscape.",
  "Join us in shaping the future of digital delivery and security with Fastly – together, we'll accelerate your online success with confidence.",
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
    text: "Fastly’s comprehensive security solutions offer protection against a wide range of threats, from DDoS attacks to data breaches. With real-time threat intelligence and robust security features, Fastly provides the peace of mind you need to focus on growing your business while we safeguard your online presence.",
  },
  {
    image: 'next-gen_waf.png',
    text: "Fastly's Next-Gen Web Application Firewall (WAF) is your frontline defense against sophisticated cyber threats targeting your web applications. With advanced threat detection capabilities and real-time updates, our WAF goes beyond traditional security measures to provide proactive protection for your online assets.",
  },
]);
</script>

<style scoped>
.body-div {
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  overflow: hidden; /* Ensure the video doesn't overflow the container */
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0; /* Position the video behind other content */
}

.gradient {
  background-image: linear-gradient(0deg, rgb(249, 123, 123) 0%, rgb(101, 0, 0) 100%);
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
