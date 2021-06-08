import { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeadingListAlbum from './HeadingListAlbum';
import ListOfAlbums from './ListOfAlbums';
import { getNewReleasedSongs, getFeaturedSongs, getCategories } from '../services/getSongs'

const StyledPlayLists = styled.section`
  padding: 40px;
  overflow-y: scroll;
`

const PlayLists = () => {
  const [released, setReleased] = useState()
  const [featured, setFeatured] = useState()
  const [categories, setCategories] = useState()


  const hash = window.location.hash.split('&')
  const token = hash[0].substring(14)
  console.log(token)

  const getSongs = async () => {
    const listReleased = await getNewReleasedSongs(token)
    setReleased(listReleased)
    const listFeatured = await getFeaturedSongs(token)
    setFeatured(listFeatured)
    const listCategories = await getCategories(token)
    setCategories(listCategories)
  }

  useEffect(() => {
    getSongs();
  }, []) 

  return(
    <StyledPlayLists>
      <HeadingListAlbum title='Released this week' />
      <ListOfAlbums albums={released} />
      <HeadingListAlbum title='Featured playlist' />
      <ListOfAlbums albums={featured} />
      <HeadingListAlbum title='Browse' />
      <ListOfAlbums albums={categories} />
    </StyledPlayLists>
  )
}

export default PlayLists;