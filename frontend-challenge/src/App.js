import './App.css';
import HomePage from './pages/home';
import Login from './pages/login'
import { BrowserRouter as Router, } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Login />
        <HomePage />
      </div>
    </Router>
  );
}

export default App;