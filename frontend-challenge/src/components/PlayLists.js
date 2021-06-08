import styled from 'styled-components';
import HeadingListAlbum from './HeadingListAlbum';
import ListOfAlbums from './ListOfAlbums';

const StyledPlayLists = styled.section`
  height: 100%;
  padding: 40px;
`

const PlayLists = () => {
  return(
    <StyledPlayLists>
      <HeadingListAlbum title='Released this week'/>
      <ListOfAlbums />
      <HeadingListAlbum title='Featured playlist'/>
      <ListOfAlbums />
      <HeadingListAlbum title='Browse'/>
      <ListOfAlbums />
    </StyledPlayLists>
  )
}

export default PlayLists;