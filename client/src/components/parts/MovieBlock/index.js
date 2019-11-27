import React from 'react';
import TextCard from "../TextCard";

const MovieBlock = props => {

    const actorsList = () =>{
        
        let actors = props.actors;
        console.log("actors list", actors)
        let list = <ul>{actors.forEach(actor => {
            console.log(actor);
            return <li>{actor}</li>
        })}</ul>;

        return list;
    }


    return(
        <TextCard
            title={props.title}
            subtitle={`Director: ${props.director}`}
        >

            <div className="card-img">
                <img alt="movie poster" src={props.poster} />
            </div>

            <div className="row">
                <div className="col-10">
                    Plot: {props.plot}
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <h5>Actors</h5>
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
                            <li>{`OMDB: ${props.ombdRating}`}</li>
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
    list: {listStyle:"none"}
};

export default MovieBlock;