<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="w-screen flex flex-col">
    <!-- 图片层 -->
    <div class="h-auto :smh-screen my-10 sm:mb-40 flex justify-center">
      <div class="hidden w-0 sm:block sm:w-4/5 mx-4">
        <img src="@/assets/bg.jpg" alt="">
      </div>
      <div class="pl-4 py-8 text-start sm:hidden">
        <p class="">
          The capybara or greater capybara (Hydrochoerus hydrochaeris) is a giant cavy rodent native to South America.
        </p>
        <br>
        <p>
          It is the largest living rodent and a member of the genus Hydrochoerus.
        </p>
        <br>
        <p>
          The only other extant member is the lesser capybara (Hydrochoerus isthmius).
        </p>
        <br>
        <p>
          Though quite agile on land, capybaras are equally at home in the water. They are excellent swimmers, and can
          remain completely submerged for up to five minutes, an ability they use to evade predators. Capybaras can sleep
          in water, keeping only their noses out. As temperatures increase during the day, they wallow in water and then
          graze during the late afternoon and early evening. They also spend time wallowing in mud. They rest around
          midnight and then continue to graze before dawn.
        </p>
      </div>
    </div>

    <!-- 信息层 -->
    <div class="w-screen mb-10 sm:mb-40">
      <div class="flex flex-col sm:flex-row justify-around">
        <div>
          <div class="relative" w-full h-full sm:h-20>
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

<style scoped></style>
