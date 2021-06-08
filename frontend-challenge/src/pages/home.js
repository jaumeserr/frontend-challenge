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
  min-width: 1200px;
  height: 1000px;
  background-color: white;
  box-shadow: 1px 1px 6px 2px rgba(0,0,0,0.1);
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