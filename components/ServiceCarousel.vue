<template>
  <v-container>
    <p class="projects">PROJECTS</p>

    <v-carousel :show-arrows="false" hide-delimiters cycle>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-card class="SvCard">
          <v-img class="SvImage" :src="item.src" cover></v-img>

          <v-card-title> {{ cards[i] }} </v-card-title>

          <v-card-text class="text-medium-emphasis">
            {{ texts[i] }}
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="white"
              text="Click me"
              rounded
              style="background: linear-gradient(100deg, #ff5c01, #ffd700); margin-top: auto"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        },
      ],
      texts: ['placeholder 1', 'placeholder 2', 'placeholder 3'],
      cards: ['Card 1', 'Card 2', 'Card 3'],
    };
  },
};
</script>

<style scoped>
.SvCard {
  max-width: 330px;
  height: 450px;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.SvImage {
  height: 300px;
  width: 330px;
}

.projects {
  color: #ff5c01;
  font-weight: 500;
  transform: translateY(-50%) translateX(7%);
  z-index: 1;
  position: absolute;
  font-size: 25px;
}

/* Mobile styles */
@media (max-width: 768px) {
  .SvCard {
    max-width: 100%;
    height: auto;
  }

  .SvImage {
    height: auto;
    width: 100%;
  }
  .projects {
    font-size: 12px;
  }
}
</style>
