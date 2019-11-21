import React, { Component } from 'react';
import TextCard from '../../parts/TextCard';
import GifSelector from '../../parts/GifSelector';
import API from '../../../utils/API';

import SweetAlert from 'react-bootstrap-sweetalert';

class GifFinder extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectCategory: "",
            selectRating: "",
            selectShowNum: "",
            pulledGifs: [],

            makeCategory: "",

            activeGif: "",
            modelInfo: "",
            title: "",
            text: "",
            show: false
        }
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    findGifSubmit = () => {
        
        let s = this.state;
        console.log("Check state on submit", s);

        if(s.selectCategory === "")this.setState({ selectCategory: "booty" });
        if(s.selectRating === "")this.setState({ selectRating: "R" });
        if(s.selectShowNum === "")this.setState({ selectShowNum: "5"  });

        API.searchGiphy({
            selectCategory: s.selectCategory,
            selectShowNum: s.selectShowNum
        })
        .then(res => {
            console.log("find Gif response", res);
            if(res.data.data){
                this.setState({ pulledGifs: res.data.data });
            }
        })
    }

    // Allows users to add a category to search params
    makeCategory = () => {
        console.log(this.state.makeCategory)
    }

    // Rather than changing the data on the image you just show a model of the running gif
    gifModel = image => {
        console.log("gif model argument", image);
        
        let text = (
          <div className="card" style={{borderColor:"none"}}>
            <img className="card-img" src={image.src} alt="activeGif" />
            <button type="button" onClick={() => this.saveGif(image.id)}>Save</button>
          </div>
        )
        // Update state to show model
        this.setState({
          title: "Selected GIF",
          modelInfo: text,
          show: true
        })
    }

    saveGif = (id) => {
        console.log("Save this gif by id", id);
        // This is where I will check if id is already in users saved gifs and if not it will save it to users saved gifs
    }


    render() {
        
        return (
            <div>
                <SweetAlert
                    show={this.state.show}
                    title={this.state.title}
                    onConfirm={() => this.setState({ show: false })}
                >
                    <div style={styles.sweetBox}>
                        {this.state.modelInfo}
                    </div>
                </SweetAlert>

                <TextCard 
                title="Look up fun Gifs"
                subtitle="Choose a category or make your own and choose filters to find the best one."
                >
                    <div style={styles.controlBox}>
                        <GifSelector 
                            handleInputChange={this.handleInputChange}
                            findGifSubmit={this.findGifSubmit}
                            customCats={["Custom cat 1", "Custom cat 2"]}
                        />

                        <form>
                            <label htmlFor="makeCategory">Make a category</label>
                            <input onChange={this.handleInputChange} type="text" id="makeCategory" name="makeCategory" />
                            <button className="btn btn-primary" type="button" onClick={this.makeCategory}>Submit Category</button>
                        </form>
                    </div>
                </TextCard>

                {this.state.pulledGifs.length ? (
                    <div className="row">
                        {this.state.pulledGifs.map(gif => {
                            let still = gif.images.fixed_height_still.url;
                            let animate = gif.images.fixed_height.url;
                            return(
                                <div key={gif.id} onClick={() => this.gifModel({src:animate, id:gif.id})} className="card col-lg-3 m-1">
                                    <img alt="gif" className="card-img" src={still} />
                                </div>
                            )
                        })}
                    </div>
                ) : (<p></p>)}

            </div>
        )
    }
}

const styles = {
    controlBox:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    sweetBox:{ 
        maxHeight: "100%", 
        minWidth: "50%", 
        overflow: "auto" 
    }
}

export default GifFinder;