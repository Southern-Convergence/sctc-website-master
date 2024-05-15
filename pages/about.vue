<template>
  <div class="p-16">
    <v-sheet>
      <v-card-title class="text-h3">About us</v-card-title>
      <v-divider class="border-opacity-100"></v-divider>
      <br>
      <v-row>
        <v-col cols="12" md="8">
          <v-card-text class="text-body-1">
            We are a dynamic software company based in the Philippines,
            specializing in the design, development, and delivery of intelligent
            custom software solutions for Government, SMEs, and Enterprise
            clients. Leveraging strategic partnerships with industry leaders
            such as Fastly and Datastax, we seamlessly integrate their
            cutting-edge technologies into our services.
            <br />
            <br />
            Dedicated to innovation, our goal is to furnish businesses with
            intelligent software solutions that adeptly tackle complex
            challenges and enable goal achievement. Fastly and Datastax
            complement our offerings by providing robust infrastructure and data
            management solutions that effortlessly fit with our software
            solutions. <br /><br />
            Despite our youth, we have a proven track record of delivering
            substantial value to our clients, enhancing productivity and
            efficiency with our software offerings. Our team of skilled
            professionals is committed to crafting cutting-edge software
            products tailored to the specific needs of each client. We firmly
            believe in the transformative power of technology to drive business
            success, and we are deeply passionate about empowering our clients
            to realize their full potential.
          </v-card-text>
        </v-col>

        <v-col cols="12" md="4" class="hidden-sm-and-down">
          <v-sheet class="bg-black rounded-xl p-10 d-flex">
            <v-img
              :width="300"
              aspect-ratio="16/9"
              cover
              src="../assets/images/SC-vector-1.png"
            ></v-img>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>
