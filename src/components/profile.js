import React from "react";
import { Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

export const Profile = () => {
    const { user } = useAuth0();
    const { isAuthenticated } = useAuth0();
  return (
    <Container className="mb-5">
        {isAuthenticated ? <div><div>{user.picture}</div>
      <div>{user.name}</div>
      <div>{user.nickname}</div></div> : <div>Nothing here</div>}
      
    </Container>
  );
};

export default withAuthenticationRequired(Profile);