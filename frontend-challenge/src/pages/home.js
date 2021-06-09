import styled from 'styled-components';

import Player from '../components/Player';

const StyledHome = styled.main`
  border-radius: 10px;
  padding: 10px;
`

const HomePage = () => {
  return(
    <StyledHome>
      <Player />
    </StyledHome>
  )
}

export default HomePage;