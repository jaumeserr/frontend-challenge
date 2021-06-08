export async function getNewReleasedSongs(token) {
  try {
    const response = await fetch(`https://api.spotify.com/v1/browse/new-releases`, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
    })
    const data = await response.json()
    const { albums: {items} } = data
    const newAlbums = items.map((item) => {
      const { name, images, id } = item
      const image = images[1].url
      return { id, image, name };
    })
    return newAlbums;
  } catch (error) {
    console.log(error)
  }
}

export async function getFeaturedSongs(token) {
  try {
    const response = await fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
    })
    const data = await response.json()
    const { playlists: { items } } = data
    const playLists = items.map((item) => {
      const { id, images, name } = item
      const image = images[0].url
      return { id, image, name };
    })
    return playLists;
  } catch (error) {
    console.log(error)
  }
}

export async function getCategories(token) {
  try {
    const response = await fetch(`https://api.spotify.com/v1/browse/categories`, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
    })
    const data = await response.json()
    const { categories: { items } } = data
    const playLists = items.map((item) => {
      const { id, icons, name } = item
      const image = icons[0].url
      return { id, image, name };
    })
    return playLists;
  } catch (error) {
    console.log(error)
  }
}