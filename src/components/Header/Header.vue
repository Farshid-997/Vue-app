<script setup lang="ts">
import LangSelect from '@/components/LangSelect/LangSelect.vue'
import Content from '../content/Content.vue';
import FooterContent from '../footer-content/FooterContent.vue';
</script>
<template>
  <div class="first-div lg:h-[100vh] h-[70vh]">
    <!-- logo section -->
    <div class="flex justify-between">
      <div class="flex lg:mt-20 lg:ml-72">
        <div class="mt-10">
          <img src="@/assets/logo.svg" alt="logo" class="lg:w-50 sm:25" />
        </div>

        <p class="lg:mt-20 mt-16 lg:text-xl text-sm font-semibold text-[#171717]">Merchant</p>
      </div>

      <!-- select section start here  -->

      <div>
        <LangSelect />
      </div>
    </div>

    <!--  bottom text start here -->

    <p
      class="lg:text-8xl text-3xl font-bold py-4 color-[#009af0] text-center lg:leading-normal leading-2 mt-14"
    >
      Favorite Stores Love
    </p>

    <p class="lg:text-8xl text-3xl font-bold py-4 color-[#009af0] text-center lg:mt-10">
      Eazzy App
    </p>
  </div>


  <Content/>

  <FooterContent/>
</template>

<!-- styling -->
<style scoped>
.first-div {
  background-image: url('@/assets/herosectionEllipse.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
}
</style>
