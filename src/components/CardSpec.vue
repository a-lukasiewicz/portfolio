<template lang="">
  <div
    :class="{ animate__pulse: hover }"
    class="w-full my-3 shadow-xl animate__animated lg:m-3 lg:w-3/4 card bg-base-100"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <div class="text-center card-body lg:text-left">
      <h2 class="justify-center card-title lg:justify-start">
        {{ title }}
      </h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const hover = ref(false);
const props = defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
});
</script>
