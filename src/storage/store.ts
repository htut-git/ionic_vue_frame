import { defineStore } from "pinia";
import { Storage } from "@ionic/storage";
const store = defineStore('store', {
    state: () => ({
        appName: 'Ionic Auth',
        apiKey: '##################################'
    }),
    actions: {
        async ionicStorage(input: Array<any>) {
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