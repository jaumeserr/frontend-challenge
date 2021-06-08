import styled from 'styled-components';
import Logo from '../assets/Spotify-logo.png'

const LoginPage = () => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    window.location = '';
  }

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
        <button onClick={handleLogin}>Authorize</button>
      </StyledLoginCard>
    </StyledLogin>
  )
}

export default LoginPage;