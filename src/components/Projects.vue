<template lang="">
  <div class="flex flex-col items-center p-6 lg:min-h-screen bg-sky-100">
    <div class="py-8 text-center">
      <h1 class="text-4xl">Moje projekty</h1>
      <h3 class="text-xl italic">Oraz te technologię w jakich je wykonałem</h3>
    </div>
    <div class="flex flex-col lg:grid lg:grid-cols-4 lg:gap-8">
      <Card title="Dom Gościnny AS" description="Strona domu gościnnego w Pobierowie." :technologyUsed="guestHouseTech" status />
      <Card title="Quization" description="Aplikacja internetowa do badania kompetencji cyfrowych." :technologyUsed="quizationTech" />
      <Card title="Club App" description="Platforma do zarządzaniem klubami/stowarzyszeniami." :technologyUsed="clubappTech" />
      <Card title="Baza hoteli TRIVAV" description="Wyszukiwarka hotelów w Polsce." :technologyUsed="clubappTech" />
      <Card title="Globalley" description="Strona z newsami, jak Morning Brew." :technologyUsed="guestHouseTech" />
      <Card title="Faktury" description="Generowanie oraz przechowywanie faktur dla firmy" :technologyUsed="clubappTech" />
      <Card title="Monmodi" description="Internetowy sklep odzieżowy." :technologyUsed="monmodiTech" />
    </div>
    <div class="mt-8">
      <button class="btn">Zobacz więcej</button>
    </div>
    <hr class="flex justify-center w-11/12 mt-16 border-2 border-separate rounded lg:w-3/4 border-mainLighter" />
  </div>
</template>
<script setup lang="ts">
import {ref, reactive} from "vue";
import Card from "../components/Card.vue";

const guestHouseTech=reactive(["Vue", "TailwindCSS"])
const quizationTech=reactive(["React", "Next.js", "Firebase"])
const clubappTech=reactive(["Vue","Firebase", "TailwindCSS"])
const monmodiTech=reactive(["Wordpress"])

</script>
