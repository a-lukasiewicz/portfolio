<template>
  <nav id="top" class="text-white bg-mainDarker navbar h-[8vh] sticky z-20 top-0">
    <div class="flex-1 sm:px-3">
      <h1 @click="scrollToTop" class="px-1 font-extralight nav-link hover:bg-gray-700">a-lukasiewicz</h1>
    </div>
    <div class="flex-none">
      <div class="flex items-center justify-between p-0">
        <a href="#specialization" class="font-extralight nav-link hover:bg-gray-700">TECHNOLOGIE</a>
        <a href="#projects" class="font-extralight nav-link hover:bg-gray-700">PROJEKTY</a>
        <a href="#about" class="font-extralight nav-link hover:bg-gray-700">O MNIE</a>
        <!-- <a href="#contact" class="font-extralight nav-link bg-mainLighter hover:bg-sky-600">KONTAKT</a> -->
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>
