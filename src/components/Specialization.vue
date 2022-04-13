<template lang="">
  <div id="specialization" class="flex flex-col items-center min-h-screen p-6 bg-sky-100">
    <div class="p-6 pt-14 md:pt-16 lg:pt-20 lg:px-12">
      <h1 class="text-4xl text-center">Zobacz moje specjalizację</h1>
      <h3 class="text-xl text-center">Oraz technologię, których używam</h3>
    </div>
    <div class="flex flex-col items-center justify-center w-5/6 h-full lg:justify-evenly lg:flex-row">
      <div class="flex flex-col justify-center w-full lg:justify-end h-1/2 lg:h-full lg:w-1/2">
        <CardSpec title="Strony internetowe" description="Tworzę nowoczesne i responsywne strony internetowe." />
        <CardSpec title="SEO i Optymalizacja" description="Optymalizuję strony internetowe pod wyszukiwarki internetowe." />
        <CardSpec title="Social Media Marketing" description="Aktualnie rozwijam się w tym, traktuję to jako ciekawe zainteresowanie." />
      </div>
      <div class="h-1/2 lg:h-full lg:w-1/3">
        <Table />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Table from "../components/Table.vue";
import CardSpec from "../components/CardSpec.vue";
</script>
