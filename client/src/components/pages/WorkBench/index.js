import React, { Component } from 'react';
  // Comment out to prevent warnings when needed they are here for easy access 
import { Row } from 'reactstrap';
import TextCard from '../../parts/TextCard';
import ResponseBlock from '../../parts/ResponseBlock';
// import API from '../../../utils/API';
// import SweetAlert from 'react-bootstrap-sweetalert';



/* What I am building today: 
  -
*/

const responseObj = { 
  Title: 'The Cable Guy',
  Year: '1996',
  Rated: 'PG-13',
  Released: '14 Jun 1996',
  Runtime: '96 min',
  Genre: 'Comedy, Drama, Thriller',
  Director: 'Ben Stiller',
  Writer: 'Lou Holtz Jr.',
  Actors: 'Jim Carrey, Matthew Broderick, Leslie Mann, Jack Black',
  Plot:
   'A lonely and mentally disturbed cable guy raised on television just wants a new friend, but his target, a designer, rejects him, with bad consequences.',
  Language: 'English, French',
  Country: 'USA',
  Awards: '3 wins & 1 nomination.',
  Poster:
   'https://m.media-amazon.com/images/M/MV5BMzE3ZTc5ZjctN2RhZS00NTljLWFkNzgtYWQ1ZjA2NTJmOWE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg',
  Ratings:
   [ { Source: 'Internet Movie Database', Value: '6.1/10' },
     { Source: 'Rotten Tomatoes', Value: '53%' },
     { Source: 'Metacritic', Value: '56/100' } ],
  Metascore: '56',
  imdbRating: '6.1',
  imdbVotes: '144,118',
  imdbID: 'tt0115798',
  Type: 'movie',
  DVD: '08 Aug 2000',
  BoxOffice: 'N/A',
  Production: 'Sony Pictures Home Entertainment',
  Website: 'N/A',
  Response: 'True' 
}

class WorkBench extends Component {

  constructor(props) {
    super(props);

    this.state={

    }
  }

  componentDidMount(){
    console.log("Mount state:", this.state);
  }

  componentDidUpdate(){
    console.log("Update state:", this.state);
  }

  // General handler for inputs thats value is to change the state
  // If state does not exsist it makes a state field with its name
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div style={styles.box} className="pt-5">
        <TextCard 
          className="mx-auto"
          title="Welcome to your workbench"
          subtitle="Use this to build components away from rest of app"
        >
          <h3 className="text-center">{this.state.input}</h3>
          <input className="form-control" name="input" type="text" onChange={this.handleInputChange}></input>
        </TextCard>

        <Row className="m-3">
          <ResponseBlock 
            data={responseObj}
          />
        </Row>

        
        
      </div>
    );
  }

}

const styles = {
  box: {
    backgroundColor: "#efee"
  }
}

export default WorkBench;