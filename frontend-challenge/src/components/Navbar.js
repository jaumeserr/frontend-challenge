import styled from 'styled-components';
import { FaHeadphonesAlt, FaSearch, FaHeart, FaPlayCircle } from 'react-icons/fa';
import { IoMdList } from 'react-icons/io';
import Avatar from '../assets/img_avatar.png'

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #5854d5;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 250px;
`

const StyledAvatar = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  img {
    width: 70px;
    border-radius: 50%;
    margin-bottom: 5px;
    @media (max-width: 320px) {
      width: 50px;
    } 
  }
`

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px 20px 20px 40px;
  color: white;
  font-weight: bold;
  width: 220px;
  @media (max-width: 320px) {
    padding: 20px;
  } 
  &:hover{
    background-color: violet;
    background: linear-gradient(to right, #7976da, #5854d5);
  }
  span {
    padding-left: 10px;
    @media (max-width: 320px) {
      display: none;
      padding-left: 0;
    }
  } 
`

const Navbar = () => {
  return(
    <StyledNavbar>
      <StyledAvatar>
        <img src={Avatar} alt='Avatar' />
        <p>Name</p>
      </StyledAvatar>
      <ul>
        <StyledListItem>
          <FaHeadphonesAlt /><span>Discover</span>
        </StyledListItem>
        <StyledListItem>
          <FaSearch /><span>Search</span>
        </StyledListItem>
        <StyledListItem>
          <FaHeart /><span>Favourites</span>
        </StyledListItem>
        <StyledListItem>
          <FaPlayCircle /><span>Playlist</span>
        </StyledListItem>
        <StyledListItem>
          <IoMdList /><span>Charts</span>
        </StyledListItem>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;