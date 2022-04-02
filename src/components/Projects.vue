<template lang="">
    <div class="flex flex-col items-center h-screen p-6 bg-sky-100">
        <div class="py-8 text-center">
            <h1 class="text-4xl">Moje projekty</h1>
            <h3 class="text-xl">Oraz technologię, w których je wykonałem</h3>
        </div>
        <div class="grid grid-cols-4 gap-8">
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
    </div>
</template>
<script setup lang="ts">
import Card from "../components/Card.vue"
</script>