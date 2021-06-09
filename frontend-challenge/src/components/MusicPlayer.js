import styled from 'styled-components'
import Play from '../iconComponents/Play'
import Forward from '../iconComponents/Forward'
import Backward from '../iconComponents/Backward'
import Heart from '../iconComponents/Heart'
import Random from '../iconComponents/Random'
import Volume from '../iconComponents/Volume'
import Dots from '../iconComponents/Dots'

const StyledMusicPlayer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 30px;
  border-bottom-right-radius: 10px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  font-weight: bold;
  box-shadow: 0 -5px 5px -5px #ddd;
`

const StyledPlayerSong = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
  .cover {
    width: 50px;
    height: 50px;
    background-color: #cecedc;
    border-radius: 5px;
    margin-right: 20px;
  }
  @media (max-width: 411px) {
    display: none
  }
`

const StyledPlayerControls = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  @media (max-width: 411px) {
    margin-right: 20px
  }
`

const StyledPlayerProgress = styled.div`
  background-color: #cecedc;
  height: 4px;
  display: flex;
  flex-grow: 1;
  @media (max-width: 411px) {
    width: 100%;
  }
`

const StyledPlayerOptions = styled.div`
  margin-left: 70px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 411px) {
    display: none
  }
`

const StyledPlayerOptionsResponsive = styled.div`
  display: none;
  @media (max-width: 411px) {
    display: block;
    margin-left: 20px;
  }
`

const MusicPlayer = () => {
  return(
    <StyledMusicPlayer>
      <StyledPlayerSong>
        <div className='cover'></div>
        <p>Nothing's playing</p>
      </StyledPlayerSong>
      <StyledPlayerControls> 
        <Backward color='#cecedc' width='20'/>
        <Play color='#5854d5' width='50px'/>
        <Forward color='#cecedc' width='20'/>
      </StyledPlayerControls>
      <StyledPlayerProgress></StyledPlayerProgress>
      <StyledPlayerOptions>
        <Heart color='#cecedc' width='20' />
        <Random color='#cecedc' width='20' />
        <Volume color='#cecedc' width='20' />
      </StyledPlayerOptions>
      <StyledPlayerOptionsResponsive>
        <Dots color='#cecedc' width='20' />
      </StyledPlayerOptionsResponsive>
    </StyledMusicPlayer>
  )
}

export default MusicPlayer;