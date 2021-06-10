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
  justify-content: center;
  padding: 50px;
  border-top-right-radius: 10px;
  @media (max-width: 414px) {
    align-items: center;
    text-align: center;
    padding: 30px;
  }
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