import styled from 'styled-components';
import backgroundImage from '../assets/background.jpg'
import { FaSun, FaMoon } from 'react-icons/fa'

const StyledHeader = styled.header`
  align-items: flex-end;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  padding: 30px 50px 30px 30px;
  width: 100%;
  border-top-right-radius: 10px;
`

const StyledSubtitle = styled.h2`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 25px;
`

const StyledSun = styled(FaSun)`
  color: ${props => props.color ? props.color : 'black'};
  margin: 0 10px;
`

const StyledMoon = styled(FaMoon)`
  color: ${props => props.color};
  margin: 0 0 0 10px;
`

const Header = () => {
  return(
    <StyledHeader>
      <h1>Your favourite tunes</h1>
      <StyledSubtitle>All <StyledSun color="yellow" /> and all <StyledMoon color="black"/></StyledSubtitle>
    </StyledHeader>
  )
}

export default Header;