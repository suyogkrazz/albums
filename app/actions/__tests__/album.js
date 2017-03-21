import * as actions from '../albums'
import * as types from '../types'

describe('actions', () => {
  it('should set albums', () => {
    const albums = [{"title":"Taylor Swift","artist":"Taylor Swift","url":"https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6","image":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"}]
    const expectedAction = {
      type: types.SET_ALBUMS,
      albums
    };
    expect(actions.setAlbums({albums:albums})).toEqual(expectedAction)
  })
})

