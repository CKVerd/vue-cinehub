<template>
  <div
    class="w-full h-[100vh] grid md:grid-cols-6 md:gap-x-4 p-5 grid-cols-1 gap-x-0 gap-y-4">
    <div class="col-span-2 w-full flex justify-center items-center">
      <LoginForm class="mb-32" />
    </div>
    <div class="col-span-4 bg-green-50 hidden md:block"></div>
  </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';
</script>
