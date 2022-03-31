<template>
  <div id="container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>
<style>
#container {
  background-image: url("./assets/background.svg");
  background-size: cover;
  min-height: 100vh;
}
</style>
