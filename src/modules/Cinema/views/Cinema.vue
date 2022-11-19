<template>
  <div class="bg-gray-900 w-full min-h-screen flex flex-col items-center pt-12">
    <div v-if="state === STATES.FETCHING_DATA">
      <Spinner />
    </div>
    <div v-else class="w-full px-[2%] max-w-[2000px]">
      <div class="w-full font-oswald grid grid-cols-6">
        <!-- Cinema Information -->
        <div class="w-full h-full">
          <div class="sticky top-10">
            <h1 class="underline text-xl text-white">
              {{ `Cinema ${cinemaData.cinemaNum}` }}
            </h1>
            <div class="mt-2 ml-2">
              <span class="text-white text-normal underline">Movie: </span>
              <span class="font-economica text-[18px] ml-2 text-white">
                {{ cinemaData.title }}</span
              >
            </div>
            <div class="flex ml-2">
              <span class="text-white text-normal underline">Price: </span>
              <ul class="text-white ml-4 font-economica text-[18px]">
                <li>{{ `Adult: $${cinemaData.pricing?.adult}` }}</li>
                <li>{{ `Children: $${cinemaData.pricing?.children}` }}</li>
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
              <div
                class="cinema-seat"
                :style="{
                  'grid-column-start': seat.colStart,
                  'grid-row-start': seat.rowStart,
                }"
                v-for="seat in cinemaData.seats"></div>
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
import { onMounted, ref } from 'vue';
import Spinner from '@/modules/Core/components/Spinner.vue';
import { computed } from '@vue/reactivity';
import { useCinemaStore } from '@/modules/Dashboard/stores/Cinemas';

const cinemaData = ref({});
const route = useRoute();
const cinemaStore = useCinemaStore();
const STATES = {
  IDLE: 'Idle',
  FETCHING_DATA: 'Fetching Data',
};
const state = ref(STATES.IDLE);

const cinemaId = computed(() => {
  return route.params.cinemaId;
});

async function fetchCinemaData(id) {
  state.value = STATES.FETCHING_DATA;
  cinemaData.value = await cinemaStore.getCinema(id);
  console.log('CINEMA DATA', cinemaData.value);
  state.value = STATES.IDLE;
}

onMounted(async () => {
  fetchCinemaData(cinemaId.value);
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
