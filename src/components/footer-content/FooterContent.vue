<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateToLogin = () => {
  router.push('/Login')
}
</script>
<template>
  <div class="flex justify-center mt-20 mb-10">
    <button
      class="bg-[#009AF0] rounded-3xl px-8 text-center text-white font-bold lg:w-[80%] w-[60%] py-4 text-xl"
      @click="navigateToLogin"
    >
      Get Started
    </button>
  </div>

  <div class="flex justify-center mt-20 mb-10">
    <p class="text-[#757575] lg:text-3xl text-xl ml-2">Follow us on</p>
    <img src="@/assets/logos_facebook.svg" alt="" class="logo-img" />

    <img src="@/assets/twitter.svg" alt="" class="logo-img" />

    <img src="@/assets/instagram.svg" alt="" class="logo-img" />
  </div>
</template>

<style scoped>
.logo-img {
  width: 30px;
  margin-left: 1rem;
}
</style>
