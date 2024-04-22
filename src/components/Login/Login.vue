<template>
  <div class="flex justify-between">
    <div></div>

    <LangSelect />
  </div>

  <div class="mb-6 mt-24">
    <div class="flex flex-col items-center">
      <img src="@/assets/logo.svg" alt="logo" class="lg:w-50 sm:25" />
      <p class="text-3xl mt-10 font-semibold mb-10">Sign Up</p>
    </div>

    <!-- input tags -->

    <div class="rounded-xl mt-2 flex flex-col items-center space-y-6">
      <input
        type="text"
        placeholder="Email Address"
        class="w-[60%] rounded-3xl py-4 border-1 border-gray-400 text-left focus:outline-none focus:ring focus:ring-gray-200 px-6 text-xl"
      />

      <input
        type="password"
        placeholder="password"
        class="w-[60%] rounded-3xl py-4 border-1 focus:outline-none border-gray-400 text-left focus:outline-none focus:ring focus:ring-gray-200 px-6 text-xl"
      />

      <input
        type="text"
        placeholder="Retype Password"
        class="w-[60%] rounded-3xl py-4 border-1 border-gray-400 text-left focus:outline-none focus:ring focus:ring-gray-200 px-6 text-xl"
      />

      <input
        type="text"
        placeholder="Nickname"
        class="w-[60%] rounded-3xl py-4 border-1 border-gray-400 text-left focus:outline-none focus:ring focus:ring-gray-200 px-6 text-xl"
      />

      <div class="flex items-center justify-start w-[60%] ml-4">
        <input type="checkbox" class="h-6 w-6 mr-4" />
        <p class="text-[#757575] text-3xl leading-10 mt-10">
          I have read the
          <span class="text-[#009AF0]">Terms & Conditions for Merchant <br /> </span> and agreed to
          this.
        </p>
      </div>

      <button
        class="bg-[#009AF0] rounded-3xl px-8 text-center text-white font-bold w-[60%] py-4 text-xl mt-20"
        @click="showModal"
      >
        CONTINUE
      </button>
    </div>

    <p class="text-[#757575] text-2xl text-center mt-14 font-semibold">Login With Social</p>

    <div class="flex justify-center mt-20 mb-10">
      <img src="@/assets/logos_facebook.svg" alt="" class="logo-img" />
      <img src="@/assets/twitter.svg" alt="" class="logo-img" />
      <img src="@/assets/instagram.svg" alt="" class="logo-img" />
    </div>

    <p class="text-center mt-10 font-semibold text-[#757575] text-2xl">
      Already have an account? <span class="text-[#0090CA]">Sign In</span>
    </p>

    <!-- Semi-transparent background -->
    <transition name="fade">
      <div v-if="modalVisible" class="modal-background"></div>
    </transition>

    <!-- Modal -->

    <Modal :modalVisible="modalVisible" :showModal="showModal" />
  </div>
</template>

<script setup lang="ts">
import LangSelect from '../LangSelect/LangSelect.vue'
import Modal from '../Modal/Modal.vue'
import { ref } from 'vue'
const modalVisible = ref(false)

const showModal = () => {
  modalVisible.value = true
  document.body.style.overflow = 'hidden' // Prevent scrolling
}

const hideModal = () => {
  modalVisible.value = false
  document.body.style.overflow = '' // Restore scrolling
}
</script>

<style scoped>
.logo-img {
  width: 50px;
  margin-left: 3rem;
}
</style>
