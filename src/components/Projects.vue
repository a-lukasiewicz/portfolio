<template lang="">
  <div
    id="projects"
    class="flex flex-col items-center py-6 lg:min-h-[80vh] bg-sky-100"
  >
    <div class="p-6 text-center pt-14 md:pt-16 lg:pt-20 lg:px-12">
      <h1 class="text-4xl">
        Moje projekty
      </h1>
      <h3 class="text-xl italic">
        Oraz te technologię w jakich je wykonałem
      </h3>
    </div>
    <div class="flex flex-col lg:gap-8 lg:grid lg:grid-cols-4">
      <Card
        title="Dom Gościnny AS"
        image-u-r-l="../../projects/guesthouse.svg"
        description="Strona domu gościnnego w Pobierowie."
        :technology-used="guestHouseTech"
        site-link="https://guesthouse-a-lukasiewicz.vercel.app/"
        status
      />

      <Card
        title="Quization"
        image-u-r-l="../../projects/quization.svg"
        description="Aplikacja internetowa do badania kompetencji cyfrowych."
        :technology-used="quizationTech"
        site-link="https://quization.vercel.app/"
      />
      <Card
        title="Club App"
        image-u-r-l="../../projects/clubApp.svg"
        description="Platforma do zarządzaniem klubami/stowarzyszeniami."
        :technology-used="clubappTech"
        site-link="https://wtb2-club-app.vercel.app/"
      />
      <!-- <Card title="Baza hoteli TRIVAV" imageURL="../../public/projects/trivav.svg" description="Wyszukiwarka hoteli w Polsce." :technologyUsed="clubappTech" siteLink="https://pznu.vercel.app/" /> -->
      <Card
        title="Globalley"
        description="Strona z newsami, jak Morning Brew."
        :technology-used="guestHouseTech"
        site-link="https://vue-globalley.vercel.app/"
      />
      <Card
        title="Faktury"
        image-u-r-l="../../projects/invoice.png"
        description="Generowanie oraz przechowywanie faktur dla firmy"
        :technology-used="clubappTech"
        site-link="https://vuex-project-invoices.vercel.app/"
      />
      <Card
        title="Monmodi"
        image-u-r-l="../../projects/monmodi.png"
        description="Internetowy sklep odzieżowy."
        :technology-used="monmodiTech"
        site-link="https://monmodi.pl/"
      />
    </div>
    <!-- <div class="mt-8">
      <button class="btn">Zobacz więcej</button>
    </div> -->
    <hr class="flex justify-center w-11/12 mt-16 border-2 border-separate rounded lg:w-3/4 border-mainLighter">
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import Card from "@/components/Card.vue";

const guestHouseTech = reactive(["Vue", "TailwindCSS"]);
const quizationTech = reactive(["React", "Next.js", "Firebase"]);
const clubappTech = reactive(["Vue", "Firebase", "TailwindCSS"]);
const monmodiTech = reactive(["Wordpress"]);
</script>
