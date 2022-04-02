<template lang="">
  <div class="relative">
    <div class="flex flex-col items-center min-h-[120vh] md:min-h-[60vh] bg-sky-100">
      <div class="mt-6 text-center lg:mt-16">
        <h1 class="text-4xl">O mnie</h1>
        <h3 class="text-xl italic">Krótko o tym czym się zajmuję</h3>
      </div>
      <div class="flex flex-col items-center w-full h-full mt-8 lg:mt-0 sm:mb-0 lg:justify-between sm:flex-row">
        <div class="flex items-center w-9/12 ml-12 lg:ml-32 md:w-5/12">
          <img src="../../public/undraw_dev.svg" />
        </div>
        <div class="w-9/12 lg:w-5/12">
          <p>Jestem studentem 3 roku kierunku informatycznego. Spędziłem wiele godzin na nauce <span class="italic font-bold text-mainLighter">najnowszych technologii</span>, tak aby cały czas oferować najwyższą jakość tworzonych przeze mnie projektów.</p>

          <h3 class="mt-6 text-3xl font-bold lg:mt-16 text-mainLighter">Kontakt przez:</h3>
          <div>
            <div class="flex items-center">
              <img class="p-2" src="../../public/github.svg" />
              <a href="#">a-lukasiewicz</a>
            </div>
            <div class="flex items-center">
              <img class="p-2" src="../../public/linkedin.svg" />
              <a href="#">a-lukasiewicz</a>
            </div>
            <div class="flex items-center">
              <img class="p-2" src="../../public/email.svg" />
              <a href="#">adamlukasiewicz3@gmail.com</a>
            </div>
          </div>
        </div>
        <div class="w-1/12"></div>
      </div>
      <div class="absolute bottom-[-5rem] left-[1rem] lg:left-[35%]">
        <p>Jeśli wolisz skontaktuj się ze mną bezpośrednio z tego formularza</p>
        <img src="../../public/output.png" height="300" width="300" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Card from "../components/Card.vue";
</script>
