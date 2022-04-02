<template lang="">
    <div class="flex flex-col items-center p-6 bg-sky-100">
        <h1 class="text-4xl">O mnie</h1>
        <h3 class="text-xl">Krótko czym się zajmuje</h3>
        <div class="flex justify-between w-full h-full">
            <div class="w-5/12 bg-sky-200">
                <h3>Web Dev</h3>
            </div>
            <div class="w-1/12"></div>
            <div class="flex items-center w-6/12">
                <img src="../../public/dev.svg" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Card from "../components/Card.vue"
</script>