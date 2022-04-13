<template lang="">
  <div id="projects" class="flex flex-col items-center py-6 lg:min-h-[80vh] bg-sky-100">
    <div class="p-6 text-center pt-14 md:pt-16 lg:pt-20 lg:px-12">
      <h1 class="text-4xl">Moje projekty</h1>
      <h3 class="text-xl italic">Oraz te technologię w jakich je wykonałem</h3>
    </div>
    <div class="flex flex-col lg:gap-8 lg:grid lg:grid-cols-4">
      <Card title="Dom Gościnny AS" imageURL="../../projects/guesthouse.svg" description="Strona domu gościnnego w Pobierowie." :technologyUsed="guestHouseTech" siteLink="https://guesthouse-a-lukasiewicz.vercel.app/" status />

      <Card title="Quization" imageURL="../../projects/quization.svg" description="Aplikacja internetowa do badania kompetencji cyfrowych." :technologyUsed="quizationTech" siteLink="https://quization.vercel.app/" />
      <Card title="Club App" imageURL="../../projects/clubApp.svg" description="Platforma do zarządzaniem klubami/stowarzyszeniami." :technologyUsed="clubappTech" siteLink="https://wtb2-club-app.vercel.app/" />
      <!-- <Card title="Baza hoteli TRIVAV" imageURL="../../public/projects/trivav.svg" description="Wyszukiwarka hoteli w Polsce." :technologyUsed="clubappTech" siteLink="https://pznu.vercel.app/" /> -->
      <Card title="Globalley" description="Strona z newsami, jak Morning Brew." :technologyUsed="guestHouseTech" siteLink="https://vue-globalley.vercel.app/" />
      <Card title="Faktury" imageURL="../../projects/invoice.png" description="Generowanie oraz przechowywanie faktur dla firmy" :technologyUsed="clubappTech" siteLink="https://vuex-project-invoices.vercel.app/" />
      <Card title="Monmodi" imageURL="../../projects/monmodi.png" description="Internetowy sklep odzieżowy." :technologyUsed="monmodiTech" siteLink="https://monmodi.pl/" />
    </div>
    <!-- <div class="mt-8">
      <button class="btn">Zobacz więcej</button>
    </div> -->
    <hr class="flex justify-center w-11/12 mt-16 border-2 border-separate rounded lg:w-3/4 border-mainLighter" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import Card from "../components/Card.vue";

const guestHouseTech = reactive(["Vue", "TailwindCSS"]);
const quizationTech = reactive(["React", "Next.js", "Firebase"]);
const clubappTech = reactive(["Vue", "Firebase", "TailwindCSS"]);
const monmodiTech = reactive(["Wordpress"]);
</script>
