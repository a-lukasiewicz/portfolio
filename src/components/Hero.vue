<template lang="">
  <div class="h-[48vh] lg:h-[92vh] bg-mainLighter text-white relative">
    <div class="flex items-start justify-around h-full">
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-4xl">Adam Łukasiewicz</h1>
        <p class="p-3 text-xl italic text-center">
          Web Developer <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ullam.
        </p>
      </div>
      <div class="py-8">
        <img src="../../public/hero.svg" alt="">
      </div>
      <div class="absolute text-black bottom-1 right-5 lg:right-20 lg:bottom-10">
        <div class="flex">
          <img class="px-2" src="../../public/github.svg" />
          <img class="px-2" src="../../public/linkedin.svg" />
          <img class="px-2" src="../../public/email.svg" />
        </div>
      </div>
      <div class="absolute bottom-10 lg:bottom-20">
        <button class="nav-link bg-sky-400 hover:bg-sky-300">Przejdź dalej</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang=""></style>
