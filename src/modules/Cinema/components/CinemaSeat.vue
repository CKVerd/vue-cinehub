<template>
  <div
    class="cinema-seat-container"
    v-if="!isSeatVisible"
    @click="setSeat"></div>
  <div class="relative w-[90%] h-full cinema-seat" v-else @click="removeSeat">
    <div class="absolute bottom-0 w-full h-1/2 bg-gray-500"></div>
    <div class="absolute bottom-0 w-full h-1/6 bg-gray-400"></div>
    <div class="absolute bottom-0 left-0 w-1/6 h-4/6 bg-gray-400"></div>
    <div class="absolute bottom-0 right-0 w-1/6 h-4/6 bg-gray-400"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['getSeatPosition']);
const isSeatVisible = ref(false);
const seatId = ref(null);
function setSeat(e) {
  seatId.value = Number(e.target.id);
  isSeatVisible.value = true;
  emit('getSeatPosition', seatId.value, false);
}

function removeSeat(e) {
  isSeatVisible.value = false;
  emit('getSeatPosition', seatId.value, true);
}
</script>

<style scoped>
.cinema-seat-container {
  width: 100%;
  height: 100%;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  border: 0.5px solid rgb(192, 192, 192);
  transition: 200ms;
  display: grid;
  place-items: center;
}

.cinema-seat-container:hover {
  background-color: rgb(192, 192, 192);
  cursor: pointer;
}

.cinema-seat:hover {
  background-color: rgb(192, 192, 192);
  cursor: pointer;
}
</style>
