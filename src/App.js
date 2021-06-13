import HomePage from './pages/home';
import Login from './pages/login'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const REACT_APP_CLIENT_ID = 'd12ad17372654b8cb68c57aa07b5a427'
  const REACT_APP_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'
  const REACT_APP_REDIRECT_URL = 'https://localhost:3000/redirect/'


  const hash = window.location.hash.split('&')
  const token = hash[0].substring(14)

  const handleLogin = (evt) => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  }

  return (
    <Router>
      <div>
        {
          token ? <HomePage /> : <Login login={handleLogin} />
        }
      </div>
    </Router>
  );
}

export default App;