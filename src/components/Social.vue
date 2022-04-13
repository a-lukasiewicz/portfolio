<template lang="">
  <a
    class="animate__animated"
    :class="{ animate__bounce: hover }"
    :href="href"
    :alt="alt"
    @mouseover="hover = true"
  ><img
    class="w-12 px-2 lg:w-16"
    :src="src"
  ></a>
</template>
<script setup lang="ts">
import { ref } from "vue";

const hover = ref(false);
const props = defineProps({
  alt: {type:String, default: "Photo"},
  src: {type:String, default: ""},
  href: {type:String, default: ""},
});
</script>
