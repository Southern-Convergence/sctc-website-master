<template>
  <div class="gradient h-full w-full text-white">
    <img src="/assets/images/datastax.webp" class="header aspect-auto border-8 invert p-3" style="margin: 0px auto" />

    <div class="content-animation h-full">
      <!-- the content reaching the bottom of the page is intentional -->
      <div class="w-11/12" style="margin: 0px auto">
        <v-tabs
          v-model="tab"
          grow
          hide-slider
          mandatory="force"
          color="purple darken-3"
          class="font-Roboto"
          style="height: 50px"
        >
          <v-tab
            text="Description"
            value="description"
            class="rounded-t-xl w-1/2"
            :class="tab === 'description' ? 'bg-white' : 'inactive'"
            style="height: 50px; font-size: 14px"
          ></v-tab>
          <v-tab
            text="Products"
            value="products"
            class="rounded-t-xl w-1/2"
            :class="tab === 'products' ? 'bg-white' : 'inactive'"
            style="height: 50px; font-size: 14px"
          ></v-tab>
        </v-tabs>
      </div>

      <div class="networkBG w-11/12 bg-white h-full" style="margin: 0px auto">
        <v-window v-model="tab" direction="horizontal">
          <v-window-item value="description">
            <div
              class="text-center text-sm md:text-base xl:text-lg 2xl:text-2xl text-gray-800 p-5 md:p-10 font-Poppins"
              style="margin: 0px auto"
            >
              <!-- if possible, can we have a description shorter than this? this long will need a scrolling on mobile -->
              Welcome to the forefront of modern data management with DataStax, a leading provider of distributed hybrid
              cloud database management systems. DataStax offers tailored solutions designed specifically for
              enterprises navigating this dynamic landscape.
              <br /><br />
              At the heart of DataStax's offerings lies their flagship product, DataStax Enterprise (DSE). DSE
              seamlessly merges the scalability of Apache Cassandra with enterprise-grade functionality, empowering
              organizations with unparalleled real-time data distribution and analytics capabilities. Additionally,
              DataStax presents Astra, a cloud-native Database-as-a-Service (DBaaS) meticulously built on the foundation
              of Apache Cassandra. Astra is engineered to effortlessly scale and manage data in the cloud, ensuring
              smooth operations and optimal performance.
              <br /><br />
              As a trusted partner of DataStax, we offer an extensive suite of consultancy, training, and support
              services strategically crafted to empower organizations in maximizing the potential of their data
              infrastructure. Through our collaborative endeavors, enterprises can confidently fortify their resilience,
              bolster agility, and drive innovation within the dynamic realm of digital transformation.
              <br /><br />
              Join us in harnessing the power of DataStax's cutting-edge solutions to revolutionize your data management
              strategy and drive transformative outcomes for your business.
            </div>
          </v-window-item>
          <v-window-item value="products">
            <div class="p-5 md:p-10" style="margin: 0px auto">
              <h1
                class="font-black font-Roboto text-center text-lg md:text-xl xl:text-2xl 2xl:text-4xl text-purple-900"
              >
                Products
              </h1>
              <v-divider
                thickness="5"
                color="black"
                length="80"
                class="border-opacity-100 p-0"
                style="margin: 15px auto 30px auto"
              >
              </v-divider>

              <!-- PRODUCTS WEB VIEW -->
              <div
                class="grid grid-cols-1 md:grid-cols-5 scroll-auto hidden-sm-and-down"
                style="overflow: auto !important"
              >
                <!-- copying what's in the current website -->
                <v-card flat class="mx-4 xl:mx-3" v-for="product in products">
                  <v-img height="130" :src="`/static/images/${product.image}`" cover></v-img>
                  <v-card-text class="text-xs md:text-xs 2xl:text-base font-Poppins" style="padding: 20px 0px">
                    {{ product.text }}
                  </v-card-text>
                </v-card>
              </div>

              <!-- PRODUCTS MOBILE VIEW -->
              <div
                class="grid grid-cols-1 md:grid-cols-5 scroll-auto hidden-sm-and-up"
                style="overflow: auto !important"
              >
                <!-- copying what's in the current website -->
                <v-carousel cycle hide-delimiters touch show-arrows="hover" progress="purple-darken-3">
                  <v-carousel-item v-for="product in products">
                    <v-card flat class="mx-4 xl:mx-3">
                      <v-img height="200" :src="`/static/images/${product.image}`" cover></v-img>
                      <v-card-text class="text-xs md:text-xs 2xl:text-base font-Poppins" style="padding: 20px 0px">
                        {{ product.text }}
                      </v-card-text>
                    </v-card>
                  </v-carousel-item>
                </v-carousel>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let tab = ref('description');

const products = ref([
  {
    image: 'consulting-services.jpg',
    text: 'The groundbreaking, globally distributed, serverless, multi-model database service meticulously crafted by DataStax to cater to users across their preferred cloud platform.',
  },
  {
    image: 'consulting-services.jpg',
    text: "As businesses navigate the complexities of modern data management, the demand for advanced search capabilities continues to grow. DataStax's Vector Search offers a revolutionary approach, enabling organizations to harness the power of vector-based search algorithms for unparalleled accuracy and efficiency.",
  },
  {
    image: 'consulting-services.jpg',
    text: "Your high-speed data pipeline solution. In today's fast-paced digital world, information flows from various sources like websites, sensors, and apps. Astra Streaming enables you to harness this constant stream of data in real-time, acting as your powerful conveyor belt for collecting and processing information swiftly.",
  },
  {
    image: 'consulting-services.jpg',
    text: 'A comprehensive solution for optimizing your computer systems. RAGStack incorporates the best open-source technologies for implementing RAG, providing developers with a comprehensive GenAI Stack. Leveraging LangChain, LLamaIndex, and more, RAGStack ensures seamless integration and efficiency in your systems.',
  },
  {
    image: 'consulting-services.jpg',
    text: 'An innovative platform engineered to facilitate the seamless delivery of real-time applications. Built on Apache Cassandra®, the leading cloud-native NoSQL database, and validated by Fortune 100 enterprises, DataStax Enterprise sets the standard for scalability and reliability.',
  },
]);
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(0deg, #e0a8ffff 0%, #4d106bff 100%);
}

.header {
  animation: emphasis 0.5s ease;
}

.inactive {
  background-color: #e1bee724;
  border-top: 2px #e1bee7b1 solid;
  border-right: 2px #e1bee7b1 solid;
  border-left: 2px #e1bee7b1 solid;
  color: #e1bee7;
}

.networkBG {
  background-image: url(/assets/images/networkbg-transparent2.png);
  background-size: contain;
}

.content-animation {
  animation: opacity-change 0.5s ease;
}

@keyframes emphasis {
  0% {
    transform: scale(0.8); /* Adjust the scale factor as needed */
  }
  50% {
    transform: scale(1.1); /* Adjust the scale factor as needed */
  }
  100% {
    transform: scale(1); /* Adjust the scale factor as needed */
  }
}

@keyframes opacity-change {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
</style>
