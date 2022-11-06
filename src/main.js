import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/base.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide('UNSPLASH_API', import.meta.env.VITE_UNSPLASH_ENDPOINT);
app.provide('UNSPLASH_ID', import.meta.env.VITE_UNSPLASH_ID);

app.mount('#app');
