<template>
    <v-row>
        <v-col cols="12" md="9" lg="8">
          <p class="text-xs sm:text-base md:text-md xl:text-lg 2xl:text-xl mx-16 font-Poppins">
            <div>
                <p class="text-xs sm:text-base md:text-md xl:text-lg 2xl:text-xl font-Poppins">
                    We know that our clients have unique needs and circumstances. Tell us more about your project, and we will get
                    back to you soon with some ideas of how we can address those circumstances while creating the most stable software
                    possible.
                </p>
                <br />
                <p class="text-xs sm:text-base md:text-md xl:text-lg 2xl:text-xl font-Poppins">
                    <span class="orange"><strong> Southern Convergence Technologies </strong></span>
                    <br /><br />
                    Lot 14 Block 5 Emerald Hills Subdivision Sumulong Highway, Sta. Cruz Antipolo City 1870<br /><br />
                    Tel.: +<span class="orange">(63) 2 8288 2521</span> | +<span class="orange">(63) 929 319 6559</span><br />
                    Email: <span class="orange"> info@southernconvergence.com </span>
                </p>
                <br>
                <v-btn class="" @click="emits('toggleMore')" color="orange"  variant="text">
                    <v-icon right class="ml-2">mdi-arrow-left</v-icon>Inquiry
                </v-btn>
                <br>
            </div>
        </p>
    </v-col>
    </v-row>
</template>

<script setup>
const emits = defineEmits(['toggleMore']);
</script>

<style scoped>
.orange {
  color: #ff7b02;
}
</style>
