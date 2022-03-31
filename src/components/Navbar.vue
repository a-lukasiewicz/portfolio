<template lang="">
  <div class="navbar bg-none text-white pt-12">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="#ffffff" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-white rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><router-link to="/about" class="!text-white">About</router-link></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <router-link to="/" class="btn btn-ghost normal-case text-white text-3xl">Adam Łukasiewicz</router-link>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <img src="../../email.svg" class="h-8 w-8" alt="Email" />
      </button>
      <button class="btn btn-ghost btn-circle">
        <img src="../../linkedin.svg" class="h-8 w-8" alt="LinkedIn" />
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <img src="../../github.svg" class="h-8 w-8" alt="GitHub" />
        </div>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang=""></style>
