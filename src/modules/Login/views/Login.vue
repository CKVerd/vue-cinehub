<template>
  <div
    class="w-full max-h-screen h-screen grid md:grid-cols-6 md:gap-x-4 p-2 grid-cols-1 gap-x-0 gap-y-4 bg-[#f8f8f8]">
    <div class="col-span-2 w-full flex justify-center items-center">
      <LoginForm class="mb-12" />
    </div>
    <div
      class="col-span-4 hidden md:block h-full w-full overflow-hidden rounded-xl relative">
      <div
        class="absolute top-0 z-1 bg-gradient-to-br from-[#170A1C] via-[#170A1C] to-[#0B7189] w-full h-full opacity-40 hover:opacity-0 transition-all duration-1000 ease-out">
        a
      </div>
      <img
        :src="bgImageUrl"
        alt="Cinema Image"
        class="h-full w-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';
import { ref, inject, onMounted } from 'vue';
const bgImageUrl = ref();
const UNSPLASH_API = inject('UNSPLASH_API');
const UNSPLASH_ID = inject('UNSPLASH_ID');
onMounted(() => {
  fetch(UNSPLASH_API + '/photos/random' + UNSPLASH_ID + '&query=cinema&count=1')
    .then((res) => res?.json())
    .then((data) => {
      bgImageUrl.value = data[0].urls.regular;
    })
    .catch((err) => {
      if (err) {
        bgImageUrl.value =
          'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
      }
    });
});
</script>
