import { ref, useAttrs } from 'vue';
import { defineStore } from 'pinia';
import { useCookies } from 'vue3-cookies';
import { useRouter } from 'vue-router';
export const useAuthStore = defineStore('auth', () => {
  const { cookies } = useCookies();
  const router = useRouter();
  const userData = ref([
    {
      username: 'admin',
      password: 'admin',
      type: 'admin',
    },
    {
      username: 'cashier',
      password: 'cashier',
      type: 'cashier'
    }
  ]);

  function login(loginData) {
    localStorage.removeItem('User')
    cookies.set('authentication', false);
    const user = userData.value.find(
      (user) => user.username === loginData.username.toLowerCase()
    );

    if (user?.password === loginData.password) {
      delete user.password;
      cookies.set('authentication', true, '1d');
      router.push({ name: 'ViewHome' });
      localStorage.setItem('User', JSON.stringify(user))
      return console.log('Logged in');
    }
    return console.log('Wrong username or password');
  }

  return { userData, login };
});
