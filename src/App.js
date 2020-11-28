import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom';
import Profile from '../src/components/profile';
import Test from '../src/components/test';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../src/components/login-button';
import LogoutButton from '../src/components/logout-button';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div className="main-body">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path='/' component={Test} />
              <Route exact path='/profile' component={Profile} />
            </Switch>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Nav className="justify-content-end">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Nav>
        </BrowserRouter>
      </div>
      <footer className="footer">
        This site was created for educational purposes using the API provided by <a href="https://www.thecocktaildb.com/api.php">TheCocktailDB</a>. Please support their site!
      </footer>
    </div>
  );
}

export default App;