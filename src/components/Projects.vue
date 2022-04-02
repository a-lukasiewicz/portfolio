<template lang="">
    <div class="flex flex-col items-center p-6 lg:min-h-screen bg-sky-100">
        <div class="py-8 text-center">
            <h1 class="text-4xl">Moje projekty</h1>
            <h3 class="text-xl italic">Oraz technologię, w których je wykonałem</h3>
        </div>
        <div class="flex flex-col lg:grid lg:grid-cols-4 lg:gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div class="mt-8">
            <button class="btn">Zobacz więcej</button>
        </div>
        <hr class="flex justify-center w-11/12 mt-16 border-2 border-separate rounded lg:w-3/4 border-mainLighter " />
    </div>
</template>
<script setup lang="ts">
import Card from "../components/Card.vue"
</script>