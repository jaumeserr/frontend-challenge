import styled from 'styled-components';
import HeadingListAlbum from './HeadingListAlbum';

const StyledListAlbums = styled.section`
  height: 100%;
  padding: 20px;
`

const ListAlbums = () => {
  return(
    <StyledListAlbums>
      <HeadingListAlbum title='Released this week'/>
      <HeadingListAlbum title='Featured playlist'/>
      <HeadingListAlbum title='Browse'/>
    </StyledListAlbums>
  )
}

export default ListAlbums;