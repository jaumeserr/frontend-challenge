import styled from 'styled-components';
import Header from './Header';
import MusicPlayer from './MusicPlayer';
import Navbar from './Navbar';
import PlayLists from './PlayLists';

const StyledPlayer = styled.div`
  display: flex;
  border-radius: 10px;
  width: calc(100vw - 220px);
  box-shadow: 1px 1px 4px 3px rgba(0,0,0,0.15);
  background-color: white;
  @media (max-width: 414px) {
    width: 100%;
  }
`

const Player = () => {
  return(
    <StyledPlayer>
      <Navbar />
      <div style={{ position: 'relative' }}>
        <Header />
        <PlayLists />
        <MusicPlayer />
      </div>
    </StyledPlayer>
  )
}

export default Player;