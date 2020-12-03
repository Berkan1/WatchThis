import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Axios from 'axios';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import FilmSummary from './film-rating-summary';

export const UserRatings = (props) => {
    const [userRatings, setUserRatings] = useState([]);
    const { user } = useAuth0();

  useEffect(() => {
    Axios.get(`/films/${props.match.params.id}`).then(res => {
        setUserRatings(res.data);
    });
}, []);

  return (
    <Container>
        <h2>Film ratings for {props.match.params.id} are below. Click on a film to give it a new score.</h2>
      {userRatings.map(userRating => 
      <div className="col-md-4 col-sm-4 col-xs-12 film-padding">
        <FilmSummary 
          title={userRating.filmRatings[0].title}
          imdbID={userRating.filmRatings[0].imdbID}
          poster={userRating.filmRatings[0].poster}
          year={userRating.filmRatings[0].year}
          rating={userRating.rating}
      />
      </div>
        )}
    </Container>
  );
};

export default withAuthenticationRequired(UserRatings);