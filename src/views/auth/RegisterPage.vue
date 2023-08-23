<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ExploreContainer>
                <div class="p-6">
                    <form @submit.prevent=''>
                        <h1
                            class="text-center p-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 via-purple-500">
                            {{ $t('register_page') }}</h1>
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Name</label>
                            <input v-model="registerForm.name" type="text" id="name" autocomplete="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mg Mg"
                                required>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email Address</label>
                            <input v-model="registerForm.email" type="email" id="email" autocomplete="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@example.com" required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password</label>
                            <input v-model="registerForm.password" type="password" id="password"
                                autocomplete="current-password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                        <div class="mb-6">
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                Password</label>
                            <input v-model="registerForm.password" type="password" id="password"
                                autocomplete="current-password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full 
                            sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                    <div class="mt-20 flex justify-center">
                        <router-link :to="{ name: 'login' }" class="">Back to login</router-link>
                    </div>
                </div>
            </ExploreContainer>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import ExploreContainer from '@/components/ExploreContainer.vue';
import { reactive } from 'vue';

const registerForm = reactive({
    name: '',
    email: '',
    password: '',
})
</script>

<style lang="scss" scoped></style>