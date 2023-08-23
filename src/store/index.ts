import { createStore } from "vuex";
import { Storage } from "@ionic/storage";
const store = createStore({
    state() {
        return {
            appName: 'Ionic Auth',
            authToken: '',
        }
    },
    mutations: {

    },
    getters: {
        
    },
    actions: {

        async setAuthToken({ state }, value) {
            state.authToken = value;
        }
        ,
        async ionicStorage({ state }, input: Array<any>) {
            const ionicStorage = new Storage();
            await ionicStorage.create();
            const [type, key, value] = input;
            if (type == 'set') {
                const data = JSON.parse(JSON.stringify(value));
                const storeData = await ionicStorage.set(key, data);
                return storeData;
            } else if (type == 'get') {
                const storeData = await ionicStorage.get(key)
                return storeData;
            } else if (type == 'remove') {
                await ionicStorage.remove(key);
            }
        },
    }
})

export default store;