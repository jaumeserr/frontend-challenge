import HomePage from './pages/home';
import Login from './pages/login'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;

  const hash = window.location.hash.split('&')
  const token = hash[0].substring(14)

  const handleLogin = (evt) => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  }

  return (
    <Router>
      <div>
        {
          token ? <HomePage /> : <Login onclick={handleLogin} />
        }
      </div>
    </Router>
  );
}

export default App;