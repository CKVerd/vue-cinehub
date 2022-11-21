<template>
  <div
    class="flex items-center group hover:cursor-pointer w-max"
    @click="router.push({ name: props.routeName })">
    <BackArrow class="group-hover:cursor-pointer" />
    <h1
      class="text-white text-xl ml-3 group-hover:underline group-hover:cursor-pointer">
      {{ props.componentName }}
    </h1>
  </div>
</template>

<script setup>
import BackArrow from './BackArrow.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  routeName: {
    type: String,
    required: true,
  },
  componentName: {
    type: String,
    required: true,
  },
});
const router = useRouter();
</script>
