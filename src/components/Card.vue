<template lang="">
  <a
    :href="siteLink"
    :class="{ animate__pulse: hover }"
    class="animate__animated relative w-[80vw] md:w-[40vw] my-3 lg:my-0 lg:w-[17vw] lg:h-[35vh] shadow-xl card bg-base-100"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <figure class="w-full h-32 md:h-44 lg:h-64">
      <img
        v-if="imageURL"
        :src="imageURL"
        alt="Logo"
      >
      <h1 v-else-if="logoText">{{ logoText }}</h1>
      <p
        v-else
        class="text-4xl font-bold"
      ><span class="text-indigo-700">GLOABAL</span>LEY</p>
    </figure>
    <div class="card-body">
      <h2 class="justify-center card-title lg:justify-start">
        {{ title }}
        <div
          v-if="status"
          class="badge badge-secondary bg-mainDarker border-mainDarker"
        >NEW</div>
      </h2>
      <p class="text-center lg:text-left">{{ description }}</p>
      <div class="flex justify-end w-full gap-2">
        <div
          v-for="tech in technologyUsed"
          :key="tech"
        >
          <p class="badge badge-outline">{{ tech }}</p>
        </div>
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
import { ref } from "vue";

const hover = ref(false);

const props = defineProps({
  title: { type: String, default:"" },
  description: { type: String, default:"" },
  siteLink: { type: String, default:"" },
  imageURL: { type: String, default:"" },
  status: { type: Boolean },
  progress: { type: Boolean },
  technologyUsed: { type: Array, default:()=>([]) },
});
</script>
