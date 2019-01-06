import React, {Component} from 'react';
import {Grid,Select, Dropdown, Checkbox} from 'semantic-ui-react';
import DeviationLineChart from '../components/DeviationLineChart';
import CompanyListGrid from '../components/CompanyListGrid';


class MarkerCapSection extends Component {

    constructor(props) {
        super(props);
    }


    handleChange = (event, data) => {
        this.setState({'companyID':data.value});
    }

    render() {
        return (
            <Grid container columns={2}>
                <Grid.Column>
                    <DeviationLineChart companyID={'NONE'}/>
                </Grid.Column>
                <Grid.Column>
                    <CompanyListGrid/>
                </Grid.Column>
            </Grid>
        );
    }

}

export default MarkerCapSection;