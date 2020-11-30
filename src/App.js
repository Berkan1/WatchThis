import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom';
import Profile from '../src/components/profile';
import Home from '../src/components/home';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../src/components/login-button';
import LogoutButton from '../src/components/logout-button';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Container>
      <div className="main-body">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Nav className="justify-content-end">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Nav>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
      </div>
      <footer className="footer">

      </footer>
    </Container>
  );
}

export default App;