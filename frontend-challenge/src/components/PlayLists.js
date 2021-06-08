import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'

import { getNewReleasedSongs, getFeaturedSongs, getCategories } from '../services/getSongs'
import HeadingListAlbum from './HeadingListAlbum';
import ListOfAlbums from './ListOfAlbums';

const StyledPlayLists = styled.section`
  padding: 40px;
  overflow-y: scroll;
`

const PlayLists = () => {
  const [released, setReleased] = useState()
  const [featured, setFeatured] = useState()
  const [categories, setCategories] = useState()
  const location = useLocation()

  const hash = location.hash.split('&')
  const token = hash[0].substring(14)

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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