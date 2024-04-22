<template>
  <div class="flex mt-14 lg:mt-32 mr-10">
    <img v-if="selectedCountry" :src="getFlag(selectedCountry)" alt="Flag" class="mr-4" />

    <span class="cursor-pointer" @click="toggleDropdown">{{
      getCountryName(selectedCountry)
    }}</span>

    <svg
      class="rotate-ease mt-2 ml-2 cursor-pointer"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="{ rotate: dropdownVisibility }"
      @click="toggleDropdown"
    >
      <path
        d="M10.5 2.50001L1.49996 2.50001C1.40884 2.50029 1.31952 2.52542 1.24162 2.5727C1.16372 2.61997 1.10019 2.68759 1.05786 2.76828C1.01553 2.84898 0.996013 2.93969 1.00141 3.03065C1.0068 3.12161 1.03689 3.20938 1.08846 3.28451L5.58846 9.78451C5.77496 10.054 6.22396 10.054 6.41096 9.78451L10.911 3.28451C10.963 3.20954 10.9936 3.12172 10.9993 3.03061C11.005 2.9395 10.9856 2.84857 10.9432 2.7677C10.9008 2.68684 10.8371 2.61913 10.759 2.57193C10.6808 2.52474 10.5912 2.49986 10.5 2.50001Z"
        fill="#757575"
      />
    </svg>

    <!-- Dropdown menu content -->
    <div v-if="dropdownVisibility" class="dropdown-content">
      <div
        class="fixed z-99 top-0 left-0 w-100vw h-100vh"
        @click="toggleDropdownVisibility"
        @touchmove="toggleDropdownVisibility"
      />

      <div
        class="absolute z-100 right-15px w-fit bg-white border-rd-10px p-24px mt-32px mr-6 dropdown border border-1 shadow-md"
      >
        <template v-for="(country, index) in countries" :key="index">
          <div class="sub-container flex py-1" @click="handleSelectedCountry(country.code)">
            <img class="rounded-full w-18px h-18px mt-1" :src="getFlag(country.code)" />
            <span class="ml-2">{{ country.name }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectedCountry = ref('English')
const countries = [
  { code: 'English', name: 'English' },
  { code: 'বাংলা', name: 'বাংলা' },
  { code: 'พม่า', name: 'พม่า' },
  { code: '简体中文', name: '简体中文' }
]
const flagImages = {
  unitedstates: '../../assets/emojione_flag-for-united-states.png',
  bangladesh: '../../assets/emojione_flag-for-bangladesh.png',
  myanmar: '../../assets/emojione_flag-for-myanmar.png',
  china: '../../assets/emojione_flag-for-china.png'
}
const dropdownVisibility = ref(false)

function getCountryName(countryCode) {
  const country = countries.find((country) => country.code === countryCode)
  return country ? country.name : ''
}

function getFlag(countryCode) {
  console.log('cc', countryCode)
  const flagSrc = flagImages[countryCode]
  console.log('Flag Source:', flagSrc) // Debugging: Log the flag source to console
  return flagSrc
}

function toggleDropdown() {
  dropdownVisibility.value = !dropdownVisibility.value
}

function toggleDropdownVisibility() {
  dropdownVisibility.value = !dropdownVisibility.value
}

function handleSelectedCountry(countryCode) {
  selectedCountry.value = countryCode
  toggleDropdownVisibility() // Hide dropdown after selection
}
</script>

<style>
.rotate {
  transform: rotate(180deg); /* Rotate the SVG when dropdown is open */
  transition: transform 0.3s ease; /* Add a transition for smooth animation */
}
</style>
