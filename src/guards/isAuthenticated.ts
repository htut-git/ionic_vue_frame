import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import  store  from '@/storage/store';


export default async function isAuthenticated(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const storage = store();
    const data = await storage.ionicStorage(['get', 'authToken']);
    if (true) {
        next();
    } else {
        next('/login');
    }
}