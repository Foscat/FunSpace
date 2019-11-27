import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const SurveyFiller = props => {

    return(
        <FormGroup>
            <Label>{props.question}</Label>
            <Input type="select" name={props.name} onChange={props.handleInputChange}/>
                <option disabled selected value="null">Do you...</option>
                <option value="1">Strongly Disagree</option>
                <option value="2">Disagree</option>
                <option value="3">A Little if Both</option>
                <option value="4">Agree</option>
                <option value="5">Strongly Agree</option>
        </FormGroup>
    )

};




const styles = {

}

export default SurveyFiller;