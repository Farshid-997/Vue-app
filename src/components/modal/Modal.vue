<script>
export default {
  props: {
    modalVisible: Boolean
  }
}
</script>

<template>
  <!-- background blur -->
  <transition name="fade">
    <div v-if="modalVisible" class="modal-background"></div>
  </transition>

  <transition name="modal-slide-up">
    <div v-if="modalVisible" class="modal-container">
      <h3 class="text-center font-bold text-3xl mb-14 mt-10">Verify Email</h3>
      <p class="text-left ml-4 font-semibold text-3xl mb-10 mt-12">
        Verification link has been sent to your email
      </p>
      <p class="text-left ml-4 text-[#757575] text-2xl leading-10">
        To continue, head over your inbox and click on <br />
        the verification link we just sent you
      </p>
      <p class="text-[#009AF0] ml-4 font-semibold mt-10 mb-10 text-left text-2xl cursor-pointer">
        Resend email
      </p>
      <button
        class="bg-[#009AF0] rounded-3xl text-center text-white font-bold w-[90%] py-4 text-xl mb-8 ml-2"
      >
        I’ve verified my email ->
      </button>
    </div>
  </transition>
</template>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

.modal-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 20px;
  border-radius: 50px 50px 0 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

/* Define the transition */
.modal-slide-up-enter-active,
.modal-slide-up-leave-active {
  transition: transform 0.3s ease-in-out;
}

/* Define the starting state of the transition */
.modal-slide-up-enter {
  transform: translateY(100%);
}

/* Define the ending state of the transition */
.modal-slide-up-enter-to {
  transform: translateY(0);
}

/* Define the leaving state of the transition */
.modal-slide-up-leave {
  transform: translateY(0);
}

/* Define the ending state of the transition */
.modal-slide-up-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
