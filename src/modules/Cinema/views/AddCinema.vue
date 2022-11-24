<template>
  <div class="bg-gray-900 w-full min-h-screen flex flex-col items-center pt-12">
    <div v-if="state === STATES.FETCHING_CINEMAS">
      <Spinner />
    </div>
    <div v-else class="w-full px-[2%] max-w-[2000px]">
      <div class="w-full font-oswald grid grid-cols-6">
        <!-- Cinema Information -->
        <div class="w-full h-full pr-10">
          <div class="sticky top-10">
            <BackButton routeName="ViewHome" componentName="Back" />
            <div class="text-white mt-4">
              <h1 class="underline text-xl">Details</h1>
              <ul
                class="border-l-2 border-white pl-4 font-economica text-[18px] leading-7 pb-2 mt-4">
                <li class="mt-2">{{ `Cinema ${newCinemaNum}` }}</li>
                <!-- <li>{{ cinemaData.title }}</li>
                <l1>{{ dateShowing }}</l1>
                <li class="mt-4">
                  {{ `Adult: $${cinemaData.pricing?.adult}` }}
                </li>
                <li>{{ `Children: $${cinemaData.pricing?.children}` }}</li>
                <li>{{ `Occupied: ` }}</li>
                <li>{{ `Unoccupied: ` }}</li> -->
                <li class="mt-2">
                  <label>Movie Title:</label>
                  <input
                    placeholder="Title"
                    v-model="cinemaDetails.title"
                    class="px-4 w-full font-economica focus:outline-none tracking-wide placeholder-zinc-400 text-black" />
                </li>
                <li class="flex flex-col mt-2">
                  <label>Date Showing</label>
                  <input
                    placeholder="Date Showing"
                    type="date"
                    v-model="cinemaDetails.dateShowing"
                    class="px-4 w-full focus:outline-none tracking-wide font-economica placeholder-zinc-400 text-black" />
                </li>
                <li class="flex flex-col mt-2">
                  <label>Adult Price</label>
                  <div class="relative flex items-center">
                    <span class="absolute text-black mb-1 ml-4">$</span>
                    <input
                      step=".01"
                      min="0"
                      placeholder="Price"
                      type="number"
                      v-model="cinemaDetails.pricing.adult"
                      class="px-4 pl-7 w-full focus:outline-none tracking-wide font-economica placeholder-zinc-400 text-black" />
                  </div>
                </li>
                <li class="flex flex-col mt-2">
                  <label>Children Price</label>
                  <div class="relative flex items-center">
                    <span class="absolute text-black mb-1 ml-4">$</span>
                    <input
                      step=".01"
                      min="0"
                      placeholder="Price"
                      type="number"
                      v-model="cinemaDetails.pricing.children"
                      class="px-4 pl-7 w-full focus:outline-none tracking-wide font-economica placeholder-zinc-400 text-black" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Main Cinema -->
        <div class="w-full col-span-4">
          <div class="w-full flex flex-col items-center">
            <div class="cinema-screen bg-zinc-300">
              <h1 class="text-center text-zinc-500 tracking-wider">SCREEN</h1>
            </div>
            <div class="mt-14 w-full cinema-seats pb-5">
              <!-- <div
                class="cinema-seat"
                :style="{
                  'grid-column-start': seat.colStart,
                  'grid-row-start': seat.rowStart,
                }"
                v-for="seat in cinemaData.seats"></div> -->
            </div>
          </div>
        </div>

        <!-- Submission Form -->
        <div class="w-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref, computed, watch } from 'vue';
import Spinner from '@/modules/Core/components/Spinner.vue';
import { useCinemaStore } from '@/modules/Dashboard/stores/Cinemas';
import BackButton from '@/modules/Core/components/BackButton.vue';

const cinemaList = ref({});
const route = useRoute();
const cinemaStore = useCinemaStore();
const cinemaDetails = ref({
  title: '',
  dateShowing: '',
  pricing: {
    adult: null,
    children: null,
  },
});

const STATES = {
  IDLE: 'Idle',
  FETCHING_CINEMAS: 'Fetching Cinemas',
  SENDING_DATA: 'Sending Data',
};
const state = ref(STATES.IDLE);

const newCinemaNum = computed(() => {
  return cinemaList.value.length + 1;
});

onMounted(async () => {
  state.value = STATES.FETCHING_CINEMAS;
  cinemaList.value = await cinemaStore.getCinemas();
  state.value = STATES.IDLE;
});
</script>

<style scoped>
.cinema-screen {
  width: 70%;
  height: 25px;
  margin-top: 1rem;
  clip-path: polygon(3% 0, 97% 0, 100% 100%, 0% 100%);
}

.cinema-seats {
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(30, 1fr);
  place-items: center;
  row-gap: 4px;
  height: 80vh;
}

.cinema-seat {
  width: 80%;
  height: 100%;
  border: 1px solid red;
}
</style>
