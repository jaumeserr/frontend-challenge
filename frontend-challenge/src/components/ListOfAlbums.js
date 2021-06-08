import styled from 'styled-components';

import { useEffect, useState } from 'react'
import newReleasesSongs from '../services/getSongs'
import Card from './Card'

const StyledListOfAlbums = styled.div`
  display: flex;
  width: 1000px;
  overflow: scroll;
  margin: 20px 0 40px 0;
`

const ListOfAlbums = () => {
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

  return(
    <StyledListOfAlbums>
      {
        albums && albums.map((album) => {
          return(
            <Card key={album.id} {...album} />
          )
        }
        )
      }
    </StyledListOfAlbums>
  );
}

export default ListOfAlbums;