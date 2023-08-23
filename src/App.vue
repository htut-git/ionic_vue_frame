<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { onMounted, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { initFlowbite } from 'flowbite'

const store = useStore();


onBeforeMount(() => {
  store.dispatch('ionicStorage', ['get', 'theme']).then(response => {
    if (response == 'dark') {
      document.body.classList.toggle('dark', true);
    }
  })
})

onMounted(() => {
  initFlowbite();
})
</script>
