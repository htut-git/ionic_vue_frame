import { createApp } from 'vue';
import App from './App.vue'
import router from './router';

import { IonContent, IonPage, IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
// import './css/app.css'
import './index.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
  
/* Theme variables */
import './theme/variables.css';
import store from './store';
import i18n from './lang/i18n';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(i18n)
  .use(store)
  .component('ion-page',IonPage)
  .component('ion-content',IonContent)
  
router.isReady().then(() => {
  app.mount('#app');
});