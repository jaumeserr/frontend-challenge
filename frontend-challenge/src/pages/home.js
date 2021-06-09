import styled from 'styled-components';

import Header from '../components/Header';
import PlayLists from '../components/PlayLists';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
// import { Flex } from '../UI';

const StyledHome = styled.main`
  border-radius: 10px;
  padding: 10px;
`

const HomePage = () => {
  return(
    // <StyledHome>
    //   <Navbar />
    //   {/* <div>
    //     <Header />
    //     <PlayLists />
    //     <Player />
    //   </div> */}
    // </StyledHome>
    <StyledHome>
      <Player />
    </StyledHome>
  )
}

export default HomePage;