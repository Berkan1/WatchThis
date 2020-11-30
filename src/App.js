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
  const { isAuthenticated , isLoading } = useAuth0();

  if(isLoading){
    return (<div></div>);
  }

  return (
    <div>
      <div className="main-body">
        <BrowserRouter>
        <div class="full-width">
        <Container>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"><i className="glyphicon glyphicon-home"></i></Navbar.Brand>
        <Navbar.Brand href="/profile">Add Rating</Navbar.Brand>
        <Navbar.Brand href="/profile">My Ratings</Navbar.Brand>
            <Nav className="log-btn">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  </Navbar>
  </Container>
  </div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
      </div>
      <footer className="footer">

      </footer>
      </div>
  );
}

export default App;