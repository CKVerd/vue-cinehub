<template>
  <div class="bg-gray-900 w-full min-h-screen flex flex-col items-center py-12">
    <div class="flex flex-col md:w-2/3 w-10/12">
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

      <div class="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 mt-10 place-items-evenly gap-10">
        <CinemaCard />
        <CinemaCard />
        <CinemaCard />
        <CinemaCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import CinemaCard from '../components/CinemaCard.vue';
</script>
