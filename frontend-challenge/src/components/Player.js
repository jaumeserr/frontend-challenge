import styled from 'styled-components';
import Header from './Header';
import ListOfAlbums from './ListOfAlbums';
import MusicPlayer from './MusicPlayer';
import Navbar from './Navbar';
import PlayLists from './PlayLists';

const StyledPlayer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
`

const Player = () => {
  return(
    <StyledPlayer>
      <Navbar />
      <div>
        <Header />
        <PlayLists />
      </div>
    </StyledPlayer>
  )
}

export default Player;