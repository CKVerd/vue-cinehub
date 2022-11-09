import { ref, inject } from 'vue';
import { defineStore } from 'pinia';

const CINEMA_API = inject('CINEMA_API');
export const useCinemaStore = defineStore('cinemas', () => {
  const cinemas = ref([]);

  async function getCinemas() {
    const cinemaList = await fetch('/api/cinemas')
      .then((res) => res.json())
      .then((data) => (cinemas.value = data));
    return cinemaList;
  }

  return { cinemas, getCinemas };
});
