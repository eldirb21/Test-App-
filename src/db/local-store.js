import AsyncStorage from "@react-native-async-storage/async-storage"

const localStore = {
    async insert(key, value) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) { }
    },
    async get(key) {
        try {
            var retrievedItem = await AsyncStorage.getItem(key);
            var item = JSON.parse(retrievedItem);
            return item;
        } catch (error) { }

    },
    async delete(key) {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) { }
    },
    async deleteAll() {
        try {
            await AsyncStorage.multiRemove()
        } catch (error) { }
    }
}
export default localStore