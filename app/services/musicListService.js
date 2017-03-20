/**
 * Created by krazz on 3/20/17.
 */
import musicJson from '../assets/musicAlbums.json';
export default async function musicList() {
    // simulate an asynchronous operation
    try {
        return await Promise.resolve(musicJson);
    } catch(error) {
        throw error;
    }
}
