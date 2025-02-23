import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import App from './App.vue';
import router from './router';
import { i18n } from './i18n';

import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import './assets/scss/main.scss';

const app = createApp(App)
  .use(IonicVue)
  .use(i18n)
  .use(router);
app.mount('#app');
