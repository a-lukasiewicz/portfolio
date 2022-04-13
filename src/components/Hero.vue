<template lang="">
  <div class="h-[64vh] lg:h-[92vh] bg-mainLighter text-white relative">
    <div class="items-start justify-around h-full lg:flex">
      <div class="flex flex-col items-center justify-center p-12 lg:p-0 lg:h-full">
        <h1 class="p-1 text-2xl text-center lg:p-3 lg:text-left lg:text-6xl animate__animated animate__bounce">Adam Łukasiewicz</h1>
        <p class="p-1 text-sm text-center lg:p-3 lg:text-xl animate__animated animate__fadeIn">Web Developer</p>
      </div>
      <div class="flex justify-center my-auto lg:block lg:my-0 lg:py-8 animate__animated animate__fadeIn">
        <img src="../../public/hero.svg" alt="Hero" class="w-3/4 lg:w-full" />
      </div>
      <div class="absolute text-black bottom-1 right-5 lg:right-20 lg:bottom-10">
        <div class="flex">
          <Social href="https://github.com/a-lukasiewicz" src="../../public/github.svg" alt="Github"></Social>
          <Social href="https://www.linkedin.com/in/adam-%C5%82ukasiewicz-b2a8b3214/" src="../../public/linkedin.svg" alt="LinkedIn"></Social>
          <Social href="#about" src="../../public/gmail.svg" alt="Gmail"></Social>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Social from "./Social.vue";
import { ref } from "vue";

const hover = ref(false);
</script>
<style lang=""></style>
