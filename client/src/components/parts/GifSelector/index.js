import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const GifSelector = props => {

    console.log(props.customCats)

    return(
        <Form>

            <FormGroup>
                <Label for="selectCategory">Category</Label>
                <Input type="select" name="selectCategory" id="selectCategory" onChange={props.handleInputChange}>
                    <option>Cats</option>
                    <option>Dogs</option>
                    <option>Yoga Pants</option>
                    <option>Dancing</option>
                    <option>Booty</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="selectRating">Rating</Label>
                <Input type="select" name="selectRating" id="selectRating" onChange={props.handleInputChange}>
                <option>PG</option>
                <option>PG-13</option>
                <option>R</option>
                <option>M</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="selectShowNum">How many gifs do you want?</Label>
                <Input type="select" name="selectShowNum" id="selectShowNum" onChange={props.handleInputChange}>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                </Input>
            </FormGroup>

            <Button onClick={props.findGifSubmit}>Submit</Button>

        </Form>
    )
};

export default GifSelector;