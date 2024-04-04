import AsyncStorage from "@react-native-async-storage/async-storage";

export default storageHelper = {
    async storeLocally  (key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('error :>> ', error);
        }

    },
     async readLocally (key) {
        try {
            const valueLocal = await AsyncStorage.getItem(key);
            console.log('valueLocal :>> ', valueLocal);
        } catch (error) {
            console.log('error :>> ', error);
        }
     }
    
};
