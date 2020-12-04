import React from 'react';
import { Container } from "react-bootstrap";

function PrivacyPolicy() {
    return (
      <Container>
        <h1 style={{ textAlign:`center` }}>Privacy Policy</h1>
        <p>Last updated December 04, 2020</p>
        <p>I, Berkan Chelikhan, am committed to protecting your personal information and your right to privacy. When you create an account on the website www.watchthis.com (the "Website"), you are consenting to the collecting of your personal data, the type of personal data, reason for collection and how that data is used will be outlined in this document.</p>
        <p><strong>Personal data that is collected</strong></p>
        <p>When creating an account for this website, you will need to provide an email address, username and password for authentication. This data is saved once an account is created and cookies are used to facilitate the log in process. Once logged in, the IP address used for signing in is also recorded. Authenticated users of this website will be able to save a score from 0-10 for a film of their choice, and this personal opinion on a film will be visible to other users of the site and associated to your account.</p>
        <p><strong>Method used for data collection and security used</strong></p>
        <p>Personal information such as your email address, username and password used for creating an account will be stored using the Auth0 authentication service which provides secure data storage and the encryption of passwords, which means passwords used will not be visible to anyone. Access to user data stored on Auth0 is protected by a unique client and domain ID. More details about how Auth0 handles data storage can be found <a href="https://auth0.com/">here</a>. User film ratings are stored on a database hosted on MongoDB Atlas, the access of which is restricted with a username, password and unique URL.</p>
        <p><strong>Reasons for the collection</strong></p>
        <p>The purpose of collection of personal data is to enrich the user experience for this website by providing a personalised experience which is only possible with account creation for which an email, username and password is required. IP address of logins are recorded by Auth0 as a security measure to help prevent unauthorised access. The collection of score ratings given by users is also stored for the prupose of this data persisting on the website for when the website is revisited by users, and to further provide a personalised experience.</p>
        <p><strong>Third parties</strong></p> 
        <p>Your personal data is not shared or sold to any third parties, and is stored solely for the scope of providing an enriching user experience. Although Auth0 is used as an authentication service, the user information stored is protected behind an Auth0 account which is only accessible by myself.</p>
        <p>If you have any further queries or requests about your personal data, such as wishing to have any data permanently deleted, pleaase contact me at Berkan.c@hotmail.com.</p><br/>
      </Container>
    );
  }
  
  export default PrivacyPolicy;