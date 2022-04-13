<template lang="">
  <a :href="siteLink" @mouseover="hover = true" @mouseout="hover = false" :class="{ animate__pulse: hover }" class="animate__animated relative w-[80vw] md:w-[40vw] my-3 lg:my-0 lg:w-[17vw] lg:h-[35vh] shadow-xl card bg-base-100">
    <figure class="w-full h-32 md:h-44 lg:h-64">
      <img v-if="imageURL" :src="imageURL" alt="Logo" />
      <h1 v-else-if="logoText">{{ logoText }}</h1>
      <p v-else class="text-4xl font-bold"><span class="text-indigo-700">GLOABAL</span>LEY</p>
    </figure>
    <div class="card-body">
      <!-- <div v-if="progress" class="absoulute top-0 text-[9px] p-1 rounded-xl italic">IN PROGRESS</div> -->
      <h2 class="justify-center card-title lg:justify-start">
        {{ title }}
        <div v-if="status" class="badge badge-secondary bg-mainDarker border-mainDarker">NEW</div>
        <!-- <div v-if="progress" class="badge badge-secondary text-[9px] p-1 bg-blue-300 rounded-xl italic">IN PROGRESS</div> -->
      </h2>
      <p class="text-center lg:text-left">{{ description }}</p>
      <div class="flex justify-end w-full gap-2">
        <div v-for="tech in technologyUsed">
          <p class="badge badge-outline">{{ tech }}</p>
        </div>
      </div>
    </div>
  </a>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";

const hover = ref(false);

const props = defineProps({
  title: { type: String },
  description: { type: String },
  siteLink: { type: String },
  imageURL: { type: String },
  status: { type: Boolean },
  progress: { type: Boolean },
  technologyUsed: { type: Array },
});
</script>
