import styled from 'styled-components';
import Card from './Card'

const StyledListOfAlbums = styled.div`
  display: flex;
  width: 200px;
  overflow: scroll;
  background-color: red;
  /* margin: 20px 0 40px 0; */
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