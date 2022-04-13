<template lang="">
  <a @mouseover="hover = true" class="animate__animated" :class="{ animate__bounce: hover }" :href="href" :alt="alt"><img class="w-12 px-2 lg:w-16" :src="src" /></a>
</template>
<script setup lang="ts">
import { ref } from "vue";

const hover = ref(false);
const props = defineProps({
  alt: String,
  src: String,
  href: String,
});
</script>
<style lang=""></style>
