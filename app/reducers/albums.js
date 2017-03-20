import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const fetchedAlbums = createReducer({}, {
    [types.SET_ALBUMS](state, action) {
        let newState = {}
        action.albums.forEach((album,i) => {
            newState[i] = Object.assign({}, album, { i });
        });
        return newState;
    },

});