/**
 * Created by krazz on 3/21/17.
 */
import {AsyncStorage} from 'react-native';
const STATE_STORAGE_KEY = 'AlbumList';


/**
 * Saves provided state object to async storage
 *
 * @returns {Promise}
 */
export async function persist(state) {
    try {
        await AsyncStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error('Error persisting application state', e);
    }
}

/**
 * Reads state object from async storage
 *
 * @returns {Promise}
 */
export async function rehydrate() {
    try {
        const state = await AsyncStorage.getItem(STATE_STORAGE_KEY);
        return state
            ? JSON.parse(state)
            : null;
    } catch (e) {
        console.error('Error reading persisted application state', e);
        return null;
    }
}
