import React, {Component} from 'react';
import {Grid, Checkbox} from 'semantic-ui-react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loadCompanyList, toggleCompanyToPlot} from '../actions/Action';
import {upgradeApp} from '../reducers/Reducer';

class CompanyListGrid extends Component {

    constructor( props ) {
        super(props);
    }

    componentDidMount() {
        // make an ajax call to get a list of companies
        axios.get(process.env.REACT_APP_CUSTOMERLIST_URL)
        .then( res => {
            //this.setState( {companyList : res.data});
            this.props.dispatch(loadCompanyList(res.data));
        });
    }

    render() {
        var checkboxlist = null;
        if ( this.props.companyList !== undefined ) {
            checkboxlist = this.props.companyList.map((company) =>
                <div><Checkbox label={company.name}/><br/></div>
            );
        }
        return (
            <Grid container columns={1}>
                <Grid.Column>
                    {checkboxlist}
                </Grid.Column>
            </Grid>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        companyList : state.companyDeviationPlot.companyList
    }
}

export default connect(mapStateToProps) (CompanyListGrid);