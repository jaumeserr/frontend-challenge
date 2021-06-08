import styled from 'styled-components';

import Header from '../components/Header';
import PlayLists from '../components/PlayLists';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import { Flex } from '../UI';

const StyledHome = styled.main`
  border-radius: 10px;
  margin: 10px;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
`

const HomePage = () => {
  return(
    <StyledHome>
      <Navbar />
      <Flex>
        <Header />
        <PlayLists />
        <Player />
      </Flex>
    </StyledHome>
  )
}

export default HomePage;