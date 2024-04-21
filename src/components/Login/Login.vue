<script setup lang="ts">
import { ref } from 'vue'

const modalVisible = ref(false)

function showModal() {
  modalVisible.value = true
}

function hideModal() {
  modalVisible.value = false
}
</script>
<template>
  <div class="mb-6">
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
  </div>

  <!-- modal -->
  <!-- <div
    v-if="modalVisible"
    class="rounded-2xl text-center border border-1 bg-white rounder-lg mx-auto max-w-screen-md mb-10"
  >
    <h3 class="text-center font-bold text-3xl mb-14 mt-10">Verify Email</h3>

    <p class="text-left ml-4 font-semibold text-3xl mb-10 mt-12">
      Verification link has been sent to your email
    </p>

    <p class="text-left ml4 text-[#757575] text-2xl leading-10">
      To continue, head over your inbox and click on <br />
      the verification link we just sent you
    </p>

    <p class="text-[#009AF0] ml-4 font-semibold mt-10 mb-10 text-left text-2xl">Resend email</p>

    <button
      class="bg-[#009AF0] rounded-3xl text-center text-white font-bold w-[90%] py-4 text-xl mb-8 -ml-14"
    >
      I’ve verified my email ->
    </button>
  </div> -->

  <template>
    <transition name="slide-up">
      <div v-if="modalVisible" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <h3 class="text-center font-bold text-2xl mb-10 mt-10">Verify Email</h3>
          <p class="text-center font-semibold text-3xl mb-10 mt-12">
            Verification link has been sent to your email
          </p>
          <p class="text-[#757575] text-2xl leading-10">
            To continue, head over your inbox and click on <br />
            the verification link we just sent you
          </p>
          <p class="text-[#009AF0] font-bold mt-10 text-left text-3xl">Resend email</p>
          <button
            @click="hideModal"
            class="bg-[#009AF0] rounded-3xl text-center text-white font-bold w-[50%] py-4 text-xl"
          >
            I’ve verified my email ->
          </button>
        </div>
      </div>
    </transition>
  </template>
</template>

<style scoped>
.logo-img {
  width: 50px;
  margin-left: 3rem;
}

.modal {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%; /* Full width */
  max-width: 600px; /* Adjust as needed */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.slide-up-enter-active {
  transition: transform 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
