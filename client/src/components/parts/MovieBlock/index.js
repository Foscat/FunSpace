import React from 'react';
import TextCard from "../TextCard";

const MovieBlock = props => {

    return(
        <TextCard
            className={props.className}
            title={props.title}
            subtitle={`Director: ${props.director}`}
            contentStyle={styles.movieContent}
        >

            <div className="card-img">
                <img alt="movie poster" src={props.poster} />
            </div>

            <div className="row">
                <div className="col-10">
                    
                    <div>
                        <p className="card-text">
                            Plot: {props.plot}
                        </p>
                    </div>

                    <div>
                        <h6>Relese Details</h6>
                        <ul>
                            <li>
                                Rating {props.rated}
                            </li>

                            <li>
                                Genre {props.genres.length ? (
                                    <ul>
                                        {props.genres.map(genre => {
                                            return <li key={genre}>{genre}</li>
                                        })}
                                    </ul>
                                ) : (<p>No genres listed</p>)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-6">
                    <h5 className="mx-auto">Actors</h5>
                    {props.actors.length ? (
                        <ul style={styles.list}>
                            {props.actors.map(actor => {
                                return <li key={actor}>{actor}</li>;
                            })}
                        </ul>
                    ) : (<p>No actors listed</p>)}
                </div>

                <div className="col-6">
                    <h5>Ratings</h5>
                    {props.ratings.length ? (
                        
                        <ul style={styles.list}>
                            {props.ratings.map(rating => {
                                return <li key={rating.Source}>{`${rating.Source}: ${rating.Value}`}</li>;
                            })}
                        </ul>
                    ) : (<p>No ratings listed</p>)}
                </div>


            </div>

        </TextCard>
    );
};

const styles = {
    list: {
        listStyle:"none"
    },
    movieContent: {
        margin: "0 auto"
    }
};

export default MovieBlock;