<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="w-full flex flex-col ">
    <!-- 图片层 -->
    <div class="w-full h-screen bg-no-repeat bg-center mb-40" style="background: url(./src/assets/bg.jpg)">
      <!-- <img src="@/assets/bg.jpg" alt="" max-height="100vh"> -->
    </div>
    <!-- 个人信息层 -->
    <div class="w-screen h-80  mb-40">
      <div class="flex flex-row justify-around">
        <div>
          <div class="relative" w-full h-full>
            <a href="#">
              <img src="@/assets/capy-small.jpg" alt="" srcset="" width="400">
            </a>
            <span
              class="absolute w-full h-10  text-white text-xl bottom-6 left-0 bg-gray-800 text-left pl-4 flex flex-col justify-center">
              <div>123</div>
            </span>
            <p>capy</p>
          </div>
        </div>
        <div>
          <div>
            <a href="#">
              <img src="@/assets/capy-small.jpg" alt="" srcset="" width="400">
            </a>
            <p>capy</p>
          </div>
        </div>
        <div>
          <div>
            <a href="#">
              <img src="@/assets/capy-small.jpg" alt="" srcset="" width="400">
            </a>
            <p>capy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
