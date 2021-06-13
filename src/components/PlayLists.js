import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'

import { getNewReleasedSongs, getFeaturedSongs, getCategories } from '../services/getSongs'
import HeadingListAlbum from './HeadingListAlbum';
import ListOfAlbums from './ListOfAlbums';

const StyledPlayLists = styled.section`
  padding: 40px;
  overflow: hidden;
  width: calc(100vw - 240px);
  background-color: white;
  border-bottom-right-radius: 10px;
  height: calc(100vh - 198px);
  overflow-y: scroll;
  @media (max-width: 414px) {
    width: 100%;
  }
`

const PlayLists = () => {
  const [released, setReleased] = useState()
  const [featured, setFeatured] = useState()
  const [categories, setCategories] = useState()
  const location = useLocation()

  const hash = location.hash.split('&')
  const token = hash[0].substring(14)

  const getSongs = async () => {
    const [listReleased, listFeatured, listCategories] = await Promise.all([getNewReleasedSongs(token),  getFeaturedSongs(token), getCategories(token)])
    setReleased(listReleased)
    setFeatured(listFeatured)
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