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
            <BackButton routeName="ViewHome" componentName="Back" />
            <div class="text-white mt-4">
              <h1 class="underline text-xl">Details</h1>
              <ul
                class="border-l-2 border-white pl-4 font-economica text-[18px] leading-6 pb-2 mt-4">
                <li class="mt-2">{{ `Cinema ${cinemaData.cinemaNum}` }}</li>
                <li>{{ cinemaData.title }}</li>
                <l1>{{ dateShowing }}</l1>
                <li class="mt-4">{{ `Adult: $${cinemaData.pricing?.adult}` }}</li>
                <li>{{ `Children: $${cinemaData.pricing?.children}` }}</li>
                <li>{{ `Occupied: ` }}</li>
                <li>{{ `Unoccupied: ` }}</li>
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
import { onMounted, ref, computed } from 'vue';
import Spinner from '@/modules/Core/components/Spinner.vue';
import { useCinemaStore } from '@/modules/Dashboard/stores/Cinemas';
import BackButton from '@/modules/Core/components/BackButton.vue';

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

const dateShowing = computed(() => {
  return new Date(cinemaData.value.dateShowing).toLocaleDateString()
})

async function fetchCinemaData(id) {
  state.value = STATES.FETCHING_DATA;
  cinemaData.value = await cinemaStore.getCinema(id);
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
