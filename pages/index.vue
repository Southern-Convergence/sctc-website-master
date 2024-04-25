<template>
  <div class="body-div">
    <div class="container">
      <div class="title-container font-Roboto text-6xl">
        <p>Crafting Your Digital Advantage</p>
        <p>with Innovative Solutions</p>
      </div>

      <br />

      <p class="font-Overpass text-xl sm:text-sm">
        Maximize Your Business Potential with Tailor-Made <br>Software Development
      </p>

      <br />

      <v-hover v-slot="{ isHovering, props }">
        <v-btn
          v-bind="props"
          :variant="isHovering ? 'flat' : 'outlined'"
          :style="{
            backgroundColor : isHovering ? 'white !important' : '',
            color: isHovering ? '#FF5C01 !important' : 'white'
            }"
          >FIND OUT MORE</v-btn
        >
      </v-hover>
    </div>
  </div>
</template>

<style>
.body-div {
  background-image: linear-gradient(139deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(/assets/images/gradient.gif);
  background-size: cover;
  margin: 0px;
  height: 100%;
  width: 100%;
  color: white;
}

.container {
  position: absolute;
  bottom: 10%;
  width: 80%;
  margin-left: 5%;
}

.title-container {
  font-weight: 900;
  letter-spacing: 3px;
}

#sec-line {
  padding-left: 3em;
}
</style>
