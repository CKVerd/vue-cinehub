<template>
  <div
    class="w-[100%] md:h-[350px] lg:h-[300px] xl:h-[500px] h-[550px] group bg-white relative">
    <div
      class="z-1 w-full h-full bg-black group-hover:opacity-60 hover:cursor-pointer opacity-0 absolute transition-all duration-200 ease-linear"></div>
    <div
      class="absolute z-2 group-hover:flex flex-col w-full h-full hidden justify-center text-center items-center gap-2">
      <h1 class="font-oswald text-white text-2xl underline">Cinema 1</h1>
      <h1 class="font-oswald text-white text-2xl">Captain Marvel</h1>
      <h1 class="font-economica text-white text-xl">Adults: $14.99</h1>
      <h1 class="font-economica text-white text-xl">Children: $9.99</h1>
    </div>
    <img
      src="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg"
      class="object-cover w-full h-full z-0"
      alt="Movie Poster" />
  </div>
</template>
