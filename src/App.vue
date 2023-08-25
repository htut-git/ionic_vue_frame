<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { onMounted, onBeforeMount } from 'vue';
import { initFlowbite } from 'flowbite'
import store from '@/storage/store';

const storage = store();


onBeforeMount(() => {
  storage.ionicStorage(['get', 'theme']).then(response => {
    if (response == 'dark') {
      document.body.classList.toggle('dark', true);
    }
  })
})

onMounted(() => {
  initFlowbite();
})
</script>
