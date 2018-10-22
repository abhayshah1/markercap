import React, {Component} from 'react';
import {Grid,Select, Dropdown, Checkbox} from 'semantic-ui-react';
import DeviationLineChart from '../components/DeviationLineChart';
import CompanyListGrid from '../components/CompanyListGrid';


class MarkerCapSection extends Component {

    constructor(props) {
        super(props);
        this.state = {'companyID': 'None'};
        this.companyList = [];
    }

    componentDidMount() {
        // load the company list from the  server

    }

    handleChange = (event, data) => {
        this.setState({'companyID':data.value});
    }

    render() {
        return (
            <Grid container columns={2}>
                <Grid.Column>
                    <DeviationLineChart companyID={this.state.companyID}/>
                </Grid.Column>
                <Grid.Column>
                    <CompanyListGrid/>
                </Grid.Column>
            </Grid>
        );
    }

}

export default MarkerCapSection;