<template>
  <div class="gradient h-full w-full text-white">
    <img src="/assets/images/fastly.png" class="header aspect-auto border-8 invert p-3" style="margin: 0px auto 15px auto" />

    <div class="content-animation h-full">
      <!-- the content reaching the bottom of the page is intentional -->
      <div class="w-11/12" style="margin: 0px auto">
        <v-tabs
          v-model="tab"
          grow
          hide-slider
          mandatory="force"
          color="red-darken-3"
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
              class="text-center text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl p-5 md:p-10 font-Poppins"
              style="background-color: rgba(255, 255, 255, 0.5)"
            >
            <h1
                class="font-black font-Roboto text-center text-lg md:text-xl xl:text-2xl 2xl:text-4xl text-red-900"
              >
                Fastly
              </h1>
              <v-divider
                thickness="5"
                color="black"
                length="80"
                class="border-opacity-100 p-0"
                style="margin: 15px auto 30px auto"
              >
              </v-divider>

              <!-- to fill up the description page -->
              We have partnered with Fastly to give your website lightning-fast delivery and unparalleled reliability.
              <br /><br />
              Your website's technology is the backbone of your user experience, and it's a key driver of your success. 
              With the right infrastructure, you can scale intelligently, enhance security, and optimize user engagement. 
              And with Fastly handling the heavy lifting, you can focus on what truly matters for your business.
              <br /><br />
              Fastly’s powerful edge cloud platform empowers companies to run, secure, and deliver their website content 
              and applications to create remarkable user experiences at global scale.
            </div>
          </v-window-item>
          <v-window-item value="products">
            <div class="p-5 md:p-10" style="margin: 0px auto">
              <h1
                class="font-black font-Roboto text-center text-lg md:text-xl xl:text-2xl 2xl:text-4xl text-red-900"
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
                class="grid grid-cols-1 md:grid-cols-3 scroll-auto hidden-sm-and-down"
                style="overflow: auto !important"
              >
                <!-- copying what's in the current website -->
                <v-card flat class="mx-4 xl:mx-3" v-for="product in products">
                  <v-img :src="`/static/images/${product.image}`"></v-img>
                  <v-card-text
                    class="text-xs md:text-xs 2xl:text-base font-Poppins"
                    style="padding: 20px 0px"
                  >
                    {{ product.text }}
                  </v-card-text>
                </v-card>
              </div>

              <!-- PRODUCTS MOBILE VIEW -->
              <div class="grid grid-cols-1 scroll-auto hidden-md-and-up" style="overflow: auto !important">
                <!-- copying what's in the current website -->
                <v-carousel cycle hide-delimiters touch show-arrows="hover" progress="red-darken-3">
                  <v-carousel-item v-for="product in products">
                    <v-card flat class="mx-4 xl:mx-3">
                      <v-img :src="`/static/images/${product.image}`"></v-img>
                      <v-card-text
                        class="text-xs md:text-sm lg:text-base font-Poppins"
                        style="padding: 20px 0px"
                      >
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

useHead({
  title: 'Fastly',
});

let tab = ref('');

const products = ref([
  {
    image: 'vector-search.png',
    text: "Say goodbye to expensive bandwidth and storage costs, and ease the burden on your servers or central cloud. With Fastly, you can effortlessly offload content and streamline your operations, so you can focus on what truly drives your business forward.",
  },
  {
    image: 'vector-search.png',
    text: "Secure your customers' data, safeguard your brand's integrity, and instill trust in your users by displaying HTTPS sites across all your properties. With Fastly, you can easily protect your website and enhance your reputation, so you can focus on delivering the best possible user",
  },
  {
    image: 'astra-streaming.png',
    text: "Streamline your workflow and empower your teams to achieve more, all while seamlessly syncing with the tools they need to succeed. With Fastly, you can accelerate your operations and enhance productivity, so you can focus on taking your business to the next level. ",
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

.inactive {
  background-color: #e1bee724;
  border-top: 2px #e7bebeb1 solid;
  border-right: 2px #e7bebeb1 solid;
  border-left: 2px #e7bebeb1 solid;
  color: #e1bee7;
}

.networkBG {
  background-image: url(/assets/images/networkbg-transparent2.png);
  background-size: auto 100%;
}

.content-animation {
  animation: opacity-change 0.8s ease;
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
