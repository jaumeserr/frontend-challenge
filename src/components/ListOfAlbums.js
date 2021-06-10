import styled from 'styled-components';
import Card from './Card'

const StyledListOfAlbums = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  margin-bottom: 70px;
  @media (max-width: 414px) {
    width: 230px;
    height: 220px;
    flex-direction: column;
    margin-bottom: 30px;
  }
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