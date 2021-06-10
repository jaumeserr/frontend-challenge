import styled from 'styled-components';
import Logo from '../assets/Spotify-logo.png'

const LoginPage = ({onclick}) => {
  const StyledLogin = styled.div`
    background-color: black;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const StyledLoginCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    img {
      width: 300px;
    }
    button {
      background-color: #2fd566;
      border: none;
      font-size: 20px;
      border-radius: 50px;
      padding: 10px 0;
      margin-top: 40px;
      cursor: pointer;
      color: white;
    }
  `
  
  return (
    <StyledLogin>
      <StyledLoginCard>
        <img src={Logo} alt="spotify"/>
        <button onClick={onclick}>Authorize</button>
      </StyledLoginCard>
    </StyledLogin>
  )
}

export default LoginPage;