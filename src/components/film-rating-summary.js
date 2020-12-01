import React from 'react';
import { Rating } from '@material-ui/lab';
import { Link } from 'react-router-dom';

function FilmSummary(props) {
    const { imdbID, title, director, genre, poster, imdbRating, plot, runtime, year, rating, user} = props;
    var ratingClass = "bad-rating";
    if(rating > 7){
        ratingClass = "good-rating";
    }
    else if(rating > 4.5){
        ratingClass = "ok-rating";
    }

  return (
      <div>
            <div className="col-md-6 col-sm-6 col-xs-6 individual-film-padding">
            <img src={poster} alt={title} onError={(e)=>{e.target.onerror = null; e.target.src="/no-image.png"}} width="100%"></img>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
                <p><strong>Title: </strong>{title}</p>
                <p><strong>Year: </strong>{year}</p>
                {rating ? <p>Rated <span className={ratingClass}>{rating}</span> by {user}</p> : <div></div>}
                <Link to={`/film/${imdbID}`}>Rate this</Link>
                {//<Rating name="read-only" value={rating} max={10} precision={0.5} readOnly />
                }
            </div>
            </div>
  );
}

export default FilmSummary;