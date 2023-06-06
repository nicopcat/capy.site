<script setup>
import { ref } from 'vue'
let isHide = ref(true);
</script>
<template>
  <footer class="w-screen bg-black py-8">
    <div class="grid grid-cols-4 gap-4 items-center	">
      <!-- 左logo -->
      <div class="flex flex-row px-4 w-60">
        <div>
          <a href="">
            <img src="/public/android-chrome-192x192.png" alt="">
          </a>
        </div>

      </div>
      <!-- 地址   -->
      <div class="flex flex-col text-white">
        <div class="w-40 h-20 text-start">100 avenue de France 75013 Paris</div>
        <div class="w-20 h-10">
          <a class="text-white">contact@forticheprod.com</a>
        </div>
      </div>
      <!-- link -->
      <div class="flex flex-row mx-8 text-start ">
        <div class="flex flex-col">
          <a class="text-white hover:opacity-70" href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">YouTube</a>
        </div>

        <div class="flex flex-col  mx-8">
          <a href="">About us</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped></style>
