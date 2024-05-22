<template>
  <div class="Sidebar">
    <div class="SBContents">
      <p class="text-h6 cursor-default" style="margin-top: 38px; font-weight: 600">SERVICES</p>

      <v-divider :thickness="3" style="margin: 40px 0 0 0" class="border-opacity-100" color="black"></v-divider>

      <br />

      <p class="text-h7 font-weight-bold">
        <NuxtLink to="/ServiceCSD" class="cursor-pointer p-3 text-hover">Custom Software Development</NuxtLink>
      </p>

      <br />

      <p class="text-h7 font-weight-bold">
        <NuxtLink to="/ServiceCS" class="cursor-pointer p-3 text-hover">Consulting Services</NuxtLink>
      </p>

      <!--More items/services could be added here if needed-->
    </div>
  </div>
</template>

<style scoped>
.Sidebar {
  background-color: rgb(255, 255, 255);
  height: 100vh;
  width: 17%;
  padding: 2% 2% 0 2%;
  position: relative;
  float: left;
  box-sizing: border-box;
  overflow-y: hidden;
}

.SBContents {
  color: rgb(0, 0, 0);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (max-width: 768px) {
  .Sidebar {
    display: none;
  }
}
</style>
