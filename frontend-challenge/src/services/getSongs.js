export default async function newReleasesSongs(token) {
  return await fetch('https://api.spotify.com/v1/browse/new-releases', {
    headers: {
      'Authorization': 'Bearer ' + token
    },
  })
  .then(response => response.json())
  .then(({albums}) => {
    const { items } = albums
    const itemsList = items.map((item) => {
      const { artists, href, id, images, name, uri } = item
      return { artists, href, id, images, name, uri }
    })
    return itemsList;
  });
}



// 'https://api.spotify.com/v1/browse/featured-playlists',
// 'https://api.spotify.com/v1/browse/categories',