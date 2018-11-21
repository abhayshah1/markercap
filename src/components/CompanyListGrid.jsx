import React, {Component} from 'react';
import {Grid, Checkbox} from 'semantic-ui-react';
import axios from 'axios';

class CompanyListGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyList : []
        }
    }

    componentDidMount() {
        // make an ajax call to get a list of companies
        axios.get(process.env.REACT_APP_CUSTOMERLIST_URL)
        .then( res => {
            this.setState( {companyList : res.data});
        });
        console.log( store.getState() );
    }

    render() {
        var checkboxlist = this.state.companyList.map((company) =>
            <div><Checkbox label={company.name}/><br/></div>
        );
        return (
            <Grid container columns={1}>
                <Grid.Column>
                    {checkboxlist}
                </Grid.Column>
            </Grid>
        );
    }

}

export default CompanyListGrid;