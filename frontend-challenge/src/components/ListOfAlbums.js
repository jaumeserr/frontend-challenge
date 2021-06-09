import styled from 'styled-components';
import Card from './Card'

const StyledListOfAlbums = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  margin-bottom:  0px;
  @media (max-width: 411px) {
    width: 230px;
    height: 220px;
    flex-direction: column;
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