import styled from 'styled-components';

import Header from '../components/Header';
import PlayLists from '../components/PlayLists';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import { Flex } from '../UI';

const StyledHome = styled.main`
  border-radius: 10px;
  margin: 20px;
  display: flex;
  width: calc(100% - 260px);
  height: 1000px;
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