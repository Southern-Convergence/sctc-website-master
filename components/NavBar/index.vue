<template>
  <NavBarMobile :navItems="navItems" />
  <NavBarDesktop :navItems="navItems" />
</template>

<script setup>
import { navItems } from '../../data/navbar-data';
</script>

<style scoped>
.text-hover:hover {
  color: #ff7801;
}

.active-link {
  color: #ff7b02;
  font-weight: 600;
}
</style>
