import React from "react";
import { NavLink as RouterNavLink, HashRouter, Switch, Route } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';
import Profile from './profile';

const MainNav = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/:id' component={Profile} />
    </Switch>
</HashRouter>
);

const AuthNav = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Nav className="justify-content-end">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Nav>
    );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;