<template>
  <div class="p-5 flex flex-col">
    <span class="font-oswald text-3xl">Login</span>
    <span class="text-lg font-economica mt-1 text-slate-700"
      >Get started by logging in to your account</span
    >
    <form @submit="sendLogin">
      <div class="flex flex-col mt-4 gap-3">
        <input
          v-model="loginFormData.username"
          placeholder="Username"
          class="text-lg border-b-[1px] min-w-[300px] font-economica border-gray-500 placeholder-zinc-300 focus:outline-none p-2 tracking-wide" />
        <input
          v-model="loginFormData.password"
          type="password"
          placeholder="Password"
          class="text-lg border-b-[1px] font-economica border-gray-500 placeholder-zinc-300 focus:outline-none p-2 tracking-wide" />
        <input
          type="submit"
          value="Login"
          class="w-full rounded-full mt-5 p-2 bg-gradient-to-br from-[#170A1C] via-[#170A1C] to-[#0B7189] text-white font-economica tracking-wide hover:cursor-pointer hover:from-[#161616] hover:to-[#187d93] transition-all duration-100 ease-in-out active:scale-[0.97]" />
      </div>
    </form>

    <span class="text-lg font-economica mt-8 text-zinc-300 w-[70%]"
      >Forgot your password? Contact your system administrator to request
      access.
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/Auth';

const store = useAuthStore();
const loginFormData = ref({
  username: '',
  password: '',
});

function sendLogin(e) {
  e.preventDefault();
  store.login(loginFormData.value);
}
</script>
