import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useStore } from 'vuex';

export default async function isAuthenticated(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {

    const store = useStore();
    const data = await store.dispatch('ionicStorage', ['get', 'authToken']);
    store.dispatch('setAuthToken',data);
    if (data) {
        next();
    } else {
        next('/login');
    }
}