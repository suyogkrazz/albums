import * as types from './types'

import musicList from '../services/musicListService'

export function fetchAlbums() {
    return (dispatch, getState) => {
        return musicList().then(resp => {
            dispatch(setAlbums({albums: resp}));
        }).catch( (ex) => {
            console.log(ex);
        });
    }
}

export function setAlbums({ albums }) {
    return {
        type: types.SET_ALBUMS,
        albums,
    }

}

export function setAlbumState(state) {
    return {
        type: types.SET_ALBUMS_STATE,
        state,
    }
}