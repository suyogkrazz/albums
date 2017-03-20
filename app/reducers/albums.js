import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const fetchedAlbums = createReducer({}, {
    [types.SET_ALBUMS](state, action) {
        let newState = {}
        action.albums.forEach((album) => {
            let id = album.url
            newState[id] = Object.assign({}, album, { id });
        });
        return newState;
    },

});