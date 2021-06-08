import styled from 'styled-components';

import Header from '../components/Header';
import ListAlbums from '../components/ListAlbums';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import { Flex } from '../UI';

const StyledHome = styled.main`
  border-radius: 10px;
  margin: 10px;
  display: flex;
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
        <ListAlbums />
        <Player />
      </Flex>
    </StyledHome>
  )
}

export default HomePage;