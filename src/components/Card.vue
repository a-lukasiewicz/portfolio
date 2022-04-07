<template lang="">
  <div class="w-full my-3 lg:my-0 lg:w-[17vw] lg:h-[38vh] shadow-xl card bg-base-100">
    <figure>
      <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{title}}
        <div v-if="status" class="badge badge-secondary">NEW</div>
      </h2>
      <p>{{description}}</p>
      <div class="flex justify-end w-full gap-2">
        <div v-for="tech in technologyUsed">
          <p class="badge badge-outline">{{tech}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, reactive} from "vue";

const props = defineProps({
  title: {type: String},
  description: {type: String},
  imageURL: {type: String},
  status: {type: Boolean},
  technologyUsed: {type: Array}
});
</script>
