<template>
  <div class="bg-gray-900 w-full min-h-screen flex flex-col items-center pt-12">
    <div class="flex flex-col md:w-2/3 w-10/12 max-w-[2000px]">
      <h1 class="text-white font-oswald text-3xl">Now Showing</h1>
      <div class="flex md:flex-row flex-col justify-between mt-6">
        <input
          placeholder="Search"
          class="px-4 rounded-full py-2 focus:outline-none tracking-wide font-economica placeholder-zinc-400 md:w-[350px] w-full" />
        <select
          class="md:mt-0 mt-5 px-4 rounded-full py-2 focus:outline-none tracking-wide font-economica bg-transparent border-2 border-white text-white placeholder-zinc-400 md:w-[350px] w-full appearance-none">
          <option>None</option>
          <option>Action</option>
          <option>Horror</option>
          <option>Drama</option>
          <option>Romance</option>
          <option>Comedy</option>
        </select>
      </div>
      <button
        v-if="user.type === 'admin'"
        @click="toCinemaNew"
        class="mr-auto mt-5 rounded-full text-white border-white border-2 py-2 px-10 hover:bg-gray-50 hover:text-black transition-all duration-200 font-economica marker:">
        Add Cinema +
      </button>
      <div class="w-full pt-20 grid place-items-center" v-if="isLoadingCinemas">
        <Spinner />
      </div>

      <div
        v-else
        class="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-10 md:px-0 mt-10 place-items-evenly gap-10 max-h-[70vh] overflow-y-scroll">
        <template v-for="cinema in cinemaList" :key="cinema._id">
          <CinemaCard :cinemaData="cinema" @click="toCinema(cinema._id)" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import CinemaCard from '../components/CinemaCard.vue';
import Spinner from '@/modules/Core/components/Spinner.vue';
import { onMounted, ref, computed } from 'vue';
import { useCinemaStore } from '../stores/Cinemas';
import { useRouter } from 'vue-router';

const router = useRouter();
const cinemaStore = useCinemaStore();
const isLoadingCinemas = ref(true);
const cinemaList = ref([]);
const user = computed(() => {
  return JSON.parse(localStorage.getItem('User'));
});
onMounted(async () => {
  isLoadingCinemas.value = true;
  cinemaList.value = await cinemaStore.getCinemas();
  isLoadingCinemas.value = false;
});

function toCinema(id) {
  console.log('ID', id);
  router.push({ name: 'ViewCinema', params: { cinemaId: id } });
}
function toCinemaNew() {
  router.push({ name: 'AddCinema' });
}
</script>
