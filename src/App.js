import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom';
import Search from '../src/components/search';
import Home from '../src/components/home';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../src/components/login-button';
import LogoutButton from '../src/components/logout-button';

function App() {
  const { isAuthenticated , isLoading } = useAuth0();

  return (
    <div>
      <div className="main-body">
        <BrowserRouter>
        <div class="full-width">
        <Container>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link to='/'><i className="glyphicon glyphicon-home"></i></Link></Navbar.Brand>
        <Navbar.Brand><Link to='/search'>Add Rating</Link></Navbar.Brand>
        <Navbar.Brand><Link to='/profile'>My Ratings</Link></Navbar.Brand>
            <Nav className="log-btn">
            {isLoading ? <div></div> : (isAuthenticated ? <LogoutButton /> : <LoginButton />)}
    </Nav>
  </Navbar>
  </Container>
  </div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/film/:id' component={Search} />
            </Switch>
        </BrowserRouter>
      </div>
      <footer className="footer">

      </footer>
      </div>
  );
}

export default App;