<template>
  <div class="body-div">
    <div :class="[{ baseContainer: true, inBetween: disabled, newContainer: disabled}]">
      <div class="title-container font-Roboto text-4xl md:text-6xl">
        <p id="title-line1">Crafting Your Digital Advantage</p>
        <p id="title-line2">with Innovative Solutions</p>
      </div>

      <br />

      <p class="disable font-Overpass text-sm md:text-xl">
        Maximize Your Business Potential with Tailor-Made
        <br />
        Software Development
      </p>

      <br />

      <v-hover v-slot="{ isHovering, props }">
        <v-btn
          v-bind="props"
          :variant="isHovering ? 'flat' : 'outlined'"
          :style="{
            backgroundColor: isHovering ? 'white !important' : '',
            color: isHovering ? '#FF5C01 !important' : 'white',
          }"
          @click="findMore"
          class="disable"
          >FIND OUT MORE
        </v-btn>
      </v-hover>
    </div>
  </div>
</template>

<script setup>
const disabled = ref(false)

function findMore() {
  disabled.value = true
} 
</script>

<style>
.body-div {
  background-image: linear-gradient(
      139deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url(/assets/images/gradient.gif);
  background-size: cover;
  margin: 0px;
  height: 100%;
  width: 100%;
  color: white;
}

.baseContainer {
  position: absolute;
  bottom: 10%;
  width: 80%;
  margin-left: 5%;
  background-color: aqua;
}

.newContainer {
  position: absolute;
  top: 10%; 
  width: 80%;
  height: 50px;
  margin-left: 7%;
  background-color: red;
}

.newContainer #title-line2 {
  margin-left: 5%;
  margin-top: 1%;
  animation: newTitle 1s;
}

.newContainer .disable {
  display: none;
}

.title-container {
  font-weight: 900;
  letter-spacing: 3px;
}

#sec-line {
  padding-left: 3em;
}

.inBetween {
  animation: onclicktitlecontainer 1s
}

@keyframes onclicktitlecontainer {
  from { 
    top: 73%;
    margin-left: 5%
  }
  
  to { 
    top: 10%;
    margin-left: 7%
  }
}

@keyframes newTitle {
  from {
    margin-left: 0%;
    margin-top: 0%;
  }

  to {
    margin-left: 5%;
    margin-top: 1%;
  }
}
</style>
