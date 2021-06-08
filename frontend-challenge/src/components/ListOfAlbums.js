import styled from 'styled-components';
import Card from './Card'

const StyledListOfAlbums = styled.div`
  display: flex;
  width: 1000px;
  overflow: scroll;
  margin: 20px 0 40px 0;
`

const ListOfAlbums = ({ albums }) => {
  return(
    <StyledListOfAlbums>
      {
        albums && albums.map((album) => <Card key={album.id} {...album} />)
      }
    </StyledListOfAlbums>
  );
}

export default ListOfAlbums;