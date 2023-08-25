<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ $tc('setting', 2) }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $tc('setting', 2) }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-list-header>{{ $t('appreance') }}</ion-list-header>
            <ion-list>
                <ion-item lines="full">
                    <ion-toggle @ion-change="toogleDarkTheme()" v-model="isDarkMode" justify="space-between">
                        {{ $t('dark_mode') }}</ion-toggle>
                </ion-item>
                <ion-item lines="full">
                    <ion-select :value="$i18n.locale" @ionChange="changeLanguage($event,)" :label="$t('language')"
                        :placeholder="$t('language')">
                        <ion-select-option v-for="locale  in $i18n.availableLocales" :key="`locale-${locale}`"
                            :value="locale">{{ $t(locale) }}</ion-select-option>
                    </ion-select>
                </ion-item>
            </ion-list>
            <ion-list-header>{{ $tc('account') }}</ion-list-header>
            <ion-list lines="full">
                <ion-item lines="full" ion-ripple-effect @click="logOutUser()">
                    <ion-icon slot="end" :icon="personCircle"></ion-icon>Profile
                </ion-item>
                <ion-item lines="full" ion-ripple-effect @click="logOutUser()" class="text-red-500">
                    <ion-icon slot="end" :icon="logOut"></ion-icon>{{ $t('logout') }}
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
export default {
    methods: {
        changeLanguage(e: any) {
            const lan = e.detail.value;
            this.$i18n.locale = lan;
            localStorage.setItem('language', lan)
        },
    }
}
</script>
  
<script setup lang="ts">
import {
    IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonToggle, IonIcon,
    IonListHeader, IonSelect, IonSelectOption
} from '@ionic/vue';
import { logOut, moon, personCircle, star } from 'ionicons/icons';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import store from '@/storage/store';

const isDarkMode = ref(false);
const storage = store();
const router = useRouter();

onMounted(() => {
    storage.ionicStorage(['get', 'theme']).then(response => {
        if (response == 'dark') {
            isDarkMode.value = true;
        }
    })
})

const toogleDarkTheme = () => {
    document.body.classList.toggle('dark', isDarkMode.value);
    if (isDarkMode.value) {
        storage.ionicStorage(['set', 'theme', 'dark'])
    } else {
        storage.ionicStorage(['set', 'theme', ''])
    }
}

const logOutUser = () => {
    //write logout process
    storage.ionicStorage(['remove', 'authToken']);
    router.push({ name: 'login' })
}
</script>
  