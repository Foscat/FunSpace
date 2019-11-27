import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import API from '../../../utils/API';
import MovieBlock from '../../parts/MovieBlock';

class Events extends Component {

    constructor(props){
        super(props);

        this.state = {
          searchType: "",
          selectEventType: "",
          term: ""
        }
    }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
      if(name === "selectEventType"){
        switch (value) {
          case "Movies":
            this.setState({ searchType: "movie"  });
            break;

          case "Music":
            this.setState({ searchType: "song or album"  });
            break;

          case "Bands":
            this.setState({ searchType: "band"  });
            break;
        
          default:
            break;
        }
      }
    }

    seachEvents = () => {
      let s = this.state;
      if(s.selectEventType === "" || s.term === "")return alert("Please fill out all feilds before searching.");

      switch (s.selectEventType) {
        case "Movies":
          return API.searchForMovieInfo({term:s.term}).then(res => {
            console.log("Returned movie info response", res.data);
          }).catch(err => {
            console.error("There was a error with movie info request", err);
          });

        case "Music":
          return API.searchForMusicInfo(s.term).then(res => {
            console.log("Returned music info response", res.data);
          }).catch(err => {
            console.error("There was a error with music info request", err);
          });

        case "Bands":
          return API.searchForBandInfo(s.term).then(res => {
            console.log("Returned band info response", res.data);
          }).catch(err => {
            console.error("There was a error with band info request", err);
          });
      
        default:
          console.log("Hit the default in the switch");
          break;
      }
    }

    render() {
      if(this.props.loggedIn){
        return (
          <div>
              <h3>You are signed in and viewing the events page</h3>
          </div>
        )
      }
      else{
        return (
          <div className="m-3 pt-3">
              <Form>

                <FormGroup>
                  <Label for="searcType">What kind of info do you want?</Label>
                  <Input type="select" name="selectEventType" onChange={this.handleInputChange}>
                    <option>Movies</option>
                    <option>Bands</option>
                    <option>Music</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="term">Name of {this.state.searchType || "event"} you want info about</Label>
                  <Input type="text" name="term" onChange={this.handleInputChange} />
                </FormGroup>

                <Button onClick={() => this.seachEvents()} color="primary">Search</Button>
              </Form>


              <div className="row">

                <MovieBlock 
                  title="Movie test"
                  ombdRating="PG"
                  director="K-Fizzle"
                  actors={["Mary", "Joe", "Phil"]} 
                  poster="https://m.media-amazon.com/images/M/MV5BMzE3ZTc5ZjctN2RhZS00NTljLWFkNzgtYWQ1ZjA2NTJmOWE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"
                  ratings={[ { Source: 'Internet Movie Database', Value: '6.1/10' },{ Source: 'Rotten Tomatoes', Value: '53%' },{ Source: 'Metacritic', Value: '56/100' } ]}
                  plot="A lonely and mentally disturbed cable guy raised on television just wants a new friend, but his target, a designer, rejects him, with bad consequences."
                />
              </div>
          </div>
        )
      }

    }
}

export default Events;