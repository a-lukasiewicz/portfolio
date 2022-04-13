<template lang="">
  <div class="w-full my-3 shadow-xl lg:m-3 lg:w-3/4 card bg-base-100">
    <div class="text-center card-body lg:text-left">
      <h2 class="justify-center card-title lg:justify-start">{{ title }}</h2>
      <p>{{ description }}</p>
      <!-- <div class="justify-end card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: { type: String },
  description: { type: String },
});
</script>
