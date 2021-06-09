import styled from 'styled-components';
import { FaHeadphonesAlt, FaSearch, FaHeart, FaPlayCircle } from 'react-icons/fa';
import { IoMdList } from 'react-icons/io';
import Avatar from '../assets/img_avatar.png'
import Headphones from '../assets/headphones.svg'
import Search from '../assets/search.svg'
import Heart from '../assets/heart.svg'
import Play from '../assets/play.svg'
import List from '../assets/list.svg'

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #5854d5;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 200px;
  ul {
    padding-bottom: 30px;
  }
  svg {
    margin-right: 10px;
    @media (max-width: 411px) {
      margin-right: 0;
    }
  }
  @media (max-width: 411px) {
    width: 100px;
  }
`

const StyledAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  margin-bottom: 30px;
  img {
    width: 70px;
    border-radius: 50%;
    margin: 40px 0 10px 0;
    @media (max-width: 411px) {
      width: 50px;
    }
  }
  p {
    @media (max-width: 411px) {
      display: none;
    }
  }
`

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  img {
    width: 18px;
    margin-right: 10px;
    @media (max-width: 411px) {
      width: 22px;
      margin-right:0;
    }
  }
  @media (max-width: 411px) {
    justify-content: center;
  }
  &:hover{
    background-color: violet;
    background: linear-gradient(to right, #7976da, #5854d5);
  }
  span {
    @media (max-width: 411px) {
      display: none;
    }
  } 
`

const Navbar = () => {
  return(
    <StyledNavbar>
      <StyledAvatar>
        <img src={Avatar} alt='Avatar' />
        <p>Gaddex</p>
      </StyledAvatar>
      <ul>
        <StyledListItem>
          <img src={Headphones} /><span>Discover</span>
        </StyledListItem>
        <StyledListItem>
          <img src={Search} /><span>Search</span>
        </StyledListItem>
        <StyledListItem>
          <img src={Heart} /><span>Favourites</span>
        </StyledListItem>
        <StyledListItem>
        <img src={Play} /><span>Playlist</span>
        </StyledListItem>
        <StyledListItem>
        <img src={List} /><span>Charts</span>
        </StyledListItem>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;