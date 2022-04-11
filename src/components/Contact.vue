<template lang="">
  <div id="contact" class="w-full">
    <div class="bg-mainLighter h-96"></div>
    <div class="max-w-5xl px-6 mx-auto mb-12 sm:px-6 lg:px-8">
      <div class="w-full p-8 bg-white rounded shadow sm:p-12 -mt-72">
        <p class="text-3xl font-bold leading-7 text-center">Skontaktuj się ze mną</p>
        <form id="form" @submit.prevent="sendEmail">
          <div class="items-center mt-12 md:flex">
            <div class="flex flex-col w-full">
              <label class="font-semibold leading-none">Imię i nazwisko</label>
              <input v-model="name" type="text" class="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-mainLighter" />
            </div>
          </div>
          <div class="items-center mt-8 md:flex">
            <div class="flex flex-col w-full">
              <label class="font-semibold leading-none">Temat</label>
              <input v-model="topic" type="text" class="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-mainLighter" />
            </div>
          </div>
          <div>
            <div class="flex flex-col w-full mt-8">
              <label class="font-semibold leading-none">Treść wiadomości</label>
              <textarea v-model="description" type="text" class="h-40 p-3 mt-4 text-base leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:oultine-none focus:border-mainLighter"></textarea>
            </div>
          </div>
          <div class="flex items-center justify-center w-full">
            <button @click="sendEmail" class="px-10 py-4 font-semibold leading-none text-white rounded bg-mainLighter mt-9 hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">Wyślij</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, SetupContext } from "vue";
import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_SERVICE_ID as string;
const templateID = import.meta.env.VITE_TEMPLATE_ID as string;
const userID = import.meta.env.VITE_PUBLIC_KEY_EMAIL as string;

const sendEmail = () => {
  const form = document.querySelector("#form");
  emailjs.sendForm(serviceID, templateID, form, "user_" + userID).then(
    (result) => {
      console.log("SUCCESS!", result.text);
    },
    (error) => {
      console.log("FAILED...", error.text);
    }
  );
};
</script>
