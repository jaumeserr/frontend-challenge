
import { useEffect, useState } from 'react'
import newReleasesSongs from '../services/getSongs'

const LoginPage = () => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  }

  const [albums, setAlbums] = useState()

  const hash = window.location.hash.split('&')
  const token = hash[0].substring(14)
  console.log(token)

  const songs = async () => {
    const song = await newReleasesSongs(token)
    setAlbums(song)
  }
  
  useEffect(() => {
    songs()
  }, [])

  console.log(albums)
  
  return (
    <>
      <div>Login Page</div>
      {/* {
        albums.map((album) => console.log(album))
      } */}
      <button onClick={handleLogin}>Authorize</button>
    </>
  )
}

export default LoginPage;