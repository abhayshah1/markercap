import React, {Component} from 'react';
import {Grid,Select, Dropdown} from 'semantic-ui-react';
import UpgradeLineChart from '../components/UpgradeLineChart';

const CompanyList = [
    {text: 'All', value: 'ALL'},   
    {text: 'Farmers', value: 'FNWL'},
    {text: 'Symetra', value: 'SLIC'}
]

class MarkerCapSection extends Component {

    constructor(props) {
        super(props);
        this.state = {'companyID': 'ALL'};
    }

    handleChange = (event, data) => {
        this.setState({'companyID':data.value});
    }

    render() {
        return (
            <Grid container columns={3}>
                <Grid.Column>
                    <UpgradeLineChart companyID={this.state.companyID}/>
                </Grid.Column>
                <Grid.Column>
                    &nbsp;
                </Grid.Column>
                <Grid.Column>
                    <Dropdown placeholder='Company List' fluid selection options={CompanyList} onChange={this.handleChange}/>
                </Grid.Column>
            </Grid>
        );
    }

}

export default MarkerCapSection;