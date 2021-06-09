import styled from 'styled-components';

const StyledMusicPlayer = styled.div`
  background-color: #ffcc0080;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom-right-radius: 10px;
`

const MusicPlayer = () => {
  return(
    <StyledMusicPlayer>Music Player</StyledMusicPlayer>
  )
}

export default MusicPlayer;