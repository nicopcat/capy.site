<script setup>
import { ref } from 'vue'
let isHide = ref(true);
</script>
<template>
  <nav class="bg-white shadow-sm w-screen">
    <div class="max-w-8xl mx-auto px-2 sm:px-5">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <a href="#" class="flex items-center py-4 px-2">
              <img src="/favicon-32x32.png" alt="Logo" class="h-8 w-8 mr-2">
              <span class="font-semibold text-gray-500 text-lg">Capybara</span>
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-4 ">
            <a href="" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
            <a href=""
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
            <a href=""
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
            <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact
              Us</a>
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3 ">
          <a href=""
            class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log
            In</a>
          <a href=""
            class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-white transition duration-300">Sign
            Up</a>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="border-0 outline-none mobile-menu-button  p-2" @click="isHide = !isHide">
            <svg class="w-5 h-5 text-gray-500 hover:text-green-500 " x-show="!showMenu" fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div :class="{ hidden: isHide }">
      <ul class="fixed top-14 right-4">
        <li class="active">
          <a href="index.html" class="block text-sm px-2 py-2 text-white bg-green-500 font-semibold">Home</a>
        </li>
        <li>
          <a href="#services" class="block text-sm px-2 py-2 bg-green-500 transition duration-300">Services</a>
        </li>
        <li><a href="#about" class="block text-sm px-2 py-2 bg-green-500 transition duration-300">About</a></li>
        <li><a href="#contact" class="block text-sm px-2 py-2 bg-green-500 transition duration-300">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
