<template>
  <div class="p-2 md:p-8 lg:p-16">
    <div class="flex items-center m-2 slide-animation">
      <v-icon @click="goToPrev" class="hover-yellow" size="36"> mdi-arrow-left </v-icon>
      <p class="font-semibold text-2xl md:text-5xl text-[#FF7B02] ml-5 font-Roboto">About us</p>
    </div>
    <br />
    <v-divider class="border-opacity-100 hidden-sm-and-down"></v-divider>
    <div class="slide-animation">
      <v-row class="justify-center mt-md-5">
        <v-col cols="12" md="6" lg="7">
          <p class="text-xs md:text-sm xl:text-md 2xl:text-lg mx-8 font-Poppins">
            We are a dynamic software company based in the Philippines, specializing in the design, development, and
            delivery of intelligent custom software solutions for Government, SMEs, and Enterprise clients. Leveraging
            strategic partnerships with industry leaders such as Fastly and Datastax, we seamlessly integrate their
            cutting-edge technologies into our services.
            <br /><br />
            Dedicated to innovation, our goal is to furnish businesses with intelligent software solutions that adeptly
            tackle complex challenges and enable goal achievement. Fastly and Datastax complement our offerings by
            providing robust infrastructure and data management solutions that effortlessly fit with our software
            solutions.
            <br /><br />
            Despite our youth, we have a proven track record of delivering substantial value to our clients, enhancing
            productivity and efficiency with our software offerings. Our team of skilled professionals is committed to
            crafting cutting-edge software products tailored to the specific needs of each client. We firmly believe in
            the transformative power of technology to drive business success, and we are deeply passionate about
            empowering our clients to realize their full potential.
          </p>
        </v-col>
        <v-col cols="12" md="4" lg="3" class="hidden-sm-and-down">
          <v-sheet class="bg-black rounded-xl p-10 d-flex floating-image">
            <v-img
              :width="300"
              aspect-ratio="16/9"
              cover
              lazy-src="../assets/images/SC-vector-1.png"
              src="../assets/images/SC-vector-1.png"
            ></v-img>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

useHead({ title: 'About Us' });

const router = useRouter();

const goToPrev = () => {
  router.go(-1);
};
</script>

<style>
.hover-yellow:hover {
  color: #ff7b02 !important;
}
</style>
