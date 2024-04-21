<template>
  <div class="flex mt-14 lg:mt-32 mr-10">
    <img
      v-if="selectedCountry"
      :src="'../../assets/emojione_flag-for-china.svg'"
      alt="Flag"
      class="mr-4"
    />

    <span class="cursor-pointer">{{ getCountryName(selectedCountry) }}</span>

    <svg
      class="rotate-ease mt-2 ml-2"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="{ 'rotate-svg': dropdownVisibility }"
      @click="toggleDropdown"
    >
      <path
        d="M10.5 2.50001L1.49996 2.50001C1.40884 2.50029 1.31952 2.52542 1.24162 2.5727C1.16372 2.61997 1.10019 2.68759 1.05786 2.76828C1.01553 2.84898 0.996013 2.93969 1.00141 3.03065C1.0068 3.12161 1.03689 3.20938 1.08846 3.28451L5.58846 9.78451C5.77496 10.054 6.22396 10.054 6.41096 9.78451L10.911 3.28451C10.963 3.20954 10.9936 3.12172 10.9993 3.03061C11.005 2.9395 10.9856 2.84857 10.9432 2.7677C10.9008 2.68684 10.8371 2.61913 10.759 2.57193C10.6808 2.52474 10.5912 2.49986 10.5 2.50001Z"
        fill="#757575"
      />
    </svg>

    <!-- Dropdown menu content -->
    <div v-if="dropdownVisibility" class="dropdown-content">
      <view
        class="fixed z-99 top-0 left-0 w-100vw h-100vh"
        @click="toggleDropdownVisibility"
        @touchmove="toggleDropdownVisibility"
      />

      <view class="absolute z-100 right-15px w-fit bg-white border-rd-10px p-10px mt-10px dropdown">
        <template v-for="(language, index) in langList" :key="index">
          <view
            class="sub-container"
            @click="handleSelectedLanguage(language)"
            v-if="language.available"
          >
            <image class="rounded-full w-18px h-18px" :src="language.flag" />
            <text>{{ language.name }}</text>
            <svg
              v-if="selectedLanguage.value === language.value"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="4"
              stroke="currentColor"
              class="w-16px h-16px text-green"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </view>
        </template>
      </view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: 'English', // Set the default country code here
      countries: [
        { code: 'English', name: 'English' },
        { code: 'বাংলা', name: 'বাংলা' },
        { code: 'พม่า', name: 'พม่า' },
        { code: '简体中文', name: '简体中文' }
      ],
      flagImages: {
        English: '@/assets/emojione_flag-for-united-states.svg',
        বাংলা: '@/assets/emojione_flag-for-myanmar.svg',
        พม่า: '@/assets/emojione_flag-for-myanmar.svg',
        简体中文: '@/assets/emojione_flag-for-china.svg'
      },
      dropdownVisibility: false // Add dropdown visibility property
    }
  },
  methods: {
    getCountryName(countryCode) {
      console.log(countryCode)
      const country = this.countries.find((country) => country.code === countryCode)
      return country ? country.name : ''
    },
    getFlag(countryCode) {
      return this.flagImages[countryCode]
    },
    toggleDropdown() {
      this.dropdownVisibility = !this.dropdownVisibility // Toggle dropdown visibility
    }
  }
}
</script>
