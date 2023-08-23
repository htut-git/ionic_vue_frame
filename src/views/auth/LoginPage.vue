<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ExploreContainer>
                <div class="p-6">
                    <form @submit.prevent='login()'>
                        <h1
                            class="text-center p-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 via-purple-500">
                            {{ $t('login_page') }}</h1>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input v-model="loginForm.username" type="email" id="email" autocomplete="username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"
                                required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                password</label>
                            <input v-model="loginForm.password" type="password" id="password"
                                autocomplete="current-password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input id="remember" v-model="loginForm.remember" type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 
                                focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                                    dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800">
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                me</label>
                        </div>
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full 
                            sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                    <div class="mt-20 flex justify-around">
                        <router-link :to="{ name: 'home' }" class="text-red-500 ">Forget Password</router-link>
                        <span>OR</span>
                        <router-link :to="{ name: 'register' }" class="">Create Account</router-link>
                    </div>
                </div>
            </ExploreContainer>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import ExploreContainer from '@/components/ExploreContainer.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();

const loginForm = reactive({
    username: '',
    password: '',
    remember: false
})

const login = () => {
    console.log(loginForm);
    const token = '3k4jldfjsdnkjfsadjkasdfsdyu8u98u98';
    store.dispatch('ionicStorage', ['set', 'authToken', token]);
    store.dispatch('setAuthToken', token)
    router.push({ name: 'home' });
}
</script>

<style lang="scss" scoped></style>