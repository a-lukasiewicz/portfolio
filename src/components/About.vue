<template lang="">
    <div class="flex flex-col items-center bg-sky-100">
        <div class="mt-6 lg:mt-16">
            <h1 class="text-4xl">O mnie</h1>
            <h3 class="text-xl">Krótko czym się zajmuje</h3>
        </div>
        <div class="flex flex-col items-center w-full h-full lg:justify-between lg:flex-row">
            <div class="w-5/12 bg-sky-200">
                <h3>O mnie</h3>
                Dane do kontaktu Linkedin, Github, Email itp
                Strzałka na dół do kontaktu mailowego bezpośrednio ze strony.
            </div>
            <div class="w-1/12"></div>
            <div class="flex items-center lg:w-3/12">
                <img src="../../public/dev.svg" />
            </div>
        </div>
        <div class="absolute bottom-[-5rem] left-[-1rem] lg:left-52">
            <img src="../../public/output.png" height="300" width="300" />
        </div>
    </div>
</template>
<script setup lang="ts">
import Card from "../components/Card.vue"
</script>