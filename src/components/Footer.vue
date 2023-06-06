<script setup>
import { ref } from 'vue'
let isHide = ref(true);
</script>
<template>
  <footer class="w-screen bg-black py-8">
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center	">
      <!-- 左logo -->
      <div class="flex flex-row px-4 w-40 ">
        <div>
          <img class="hidden lg:block" src="/android-chrome-192x192.png" alt="" width="300">
          <img class="lg:hidden" src="/android-chrome-192x192.png" alt="" width="60">
        </div>

      </div>
      <!-- 地址   -->
      <div class="hidden text-white sm:flex flex-col ">
        <div class="w-40 h-20 text-start">100 avenue de France 75013 Paris</div>
        <div class="w-20 h-10">
          <a class="text-white">contact@forticheprod.com</a>
        </div>
      </div>
      <div></div>
      <!-- link -->
      <div class="flex flex-row px-10 text-start">
        <div class="flex flex-col  transform lg:transform-none sm:translate-x-20">
          <a class="text-white" href="">Instagram</a>
          <a class="text-white" href="">Facebook</a>
          <a class="text-white" href="">YouTube</a>
        </div>

        <div class="flex flex-col  px-10">
          <a class="text-white" href="">About us</a>
          <a class="text-white" href="">Projects</a>
          <a class="text-white" href="">Contact</a>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped></style>
