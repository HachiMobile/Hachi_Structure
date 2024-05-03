import { MMKV } from 'react-native-mmkv'
import {STORAGE_CONFIG} from "@/shared/constant/value.const.ts";
import create from "zustand";
import {persist, StateStorage} from "zustand/middleware";

//https://levelup.gitconnected.com/stop-using-react-native-async-storage-fdbcc05a6de3
//https://docs.pmnd.rs/zustand/getting-started/comparison

//Implement React-Native MMKV storage with persist state (support sync)
//The combination of these two libraries makes it possible to persist the app's state, even after the app has been closed or restarted.

//Listeners with react-native-mmkv
// We can use React Native MMKV’s listener feature to track changes in the storage. This is useful to perform certain actions whenever a particular value in the storage changes.

export const appPersistStorage = new MMKV({
    id: STORAGE_CONFIG.id
})

export const zustandMMKVStorage: StateStorage = {

    setItem: (name: string, value) => {
        return appPersistStorage.set(name, value);
    },

    getItem: (name: string) => {
        const value = appPersistStorage.getString(name);
        return value ?? null;
    },

    removeItem: (name: string) => {
        return appPersistStorage.delete(name);
    },
};



export const useAppPersistStore = create<
    any, //TODO: Implement type for storage
    [["zustand/persist", any]] ////TODO: Implement type for storage
>(
    persist(
        (set, get) => ({}),
        {
            name: "app-persist-storage",
            getStorage: () => zustandMMKVStorage,
            serialize: (state) => JSON.stringify(state),
            deserialize: (state) => JSON.parse(state),
        },
    ),
);

