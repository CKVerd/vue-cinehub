<template>
  <div
    class="w-[100%] md:w-[105%] md:h-[350px] lg:h-[300px] xl:h-[500px] 2xl:h-[600px] h-[550px] group bg-white relative active:scale-[97%] transition-all duration-100 ease-linear"
    @click="click">
    <div
      class="z-1 w-full h-full bg-black group-hover:opacity-60 opacity-0 absolute transition-all duration-200 ease-linear"></div>
    <div
      class="absolute z-2 group-hover:flex flex-col w-full h-full hidden justify-center text-center items-center gap-2 group-hover:cursor-pointer">
      <h1 class="font-oswald text-white text-2xl underline">
        {{ `Cinema ${cinemaData.cinemaNum}` }}
      </h1>
      <h1 class="font-oswald text-white text-2xl">{{ cinemaData.title }}</h1>
      <h1 class="font-economica text-white text-xl">
        {{ `Adults: $${cinemaData.pricing.adult}` }}
      </h1>
      <h1 class="font-economica text-white text-xl">
        {{ `Children: $${cinemaData.pricing.children}` }}
      </h1>
    </div>
    <img
      :src="cinemaData.photoURL"
      class="object-cover w-full h-full z-0"
      alt="Movie Poster" />
  </div>
</template>

<script setup>
const props = defineProps({
  cinemaData: {
    type: Object,
    default: () => {},
  },
});
function click() {
  console.log('CLICKED');
  console.log('Cinema Data', props.cinemaData);
}
</script>
