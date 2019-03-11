import React, {Component} from 'react';
import {Grid, Checkbox} from 'semantic-ui-react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loadCompanyList, toggleCompanyToPlot} from '../actions/Action';

class CompanyListGrid extends Component {

    constructor( props ) {
        super(props);

        //bind event handlers
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
    }

    handleCompanyChange(event, data) {
        if ( data.checked ) {
            // make an ajax call to get data for the selected data
            axios.get(process.env.REACT_APP_CUSTOMERDATA_URL+"/"+data.name)
            .then( res => {
                this.props.toggleCompanyToPlot(res.data);
            })
        }
    }

    componentDidMount() {
        // make an ajax call to get a list of companies
        axios.get(process.env.REACT_APP_CUSTOMERLIST_URL)
        .then( res => {
            this.props.loadCompanyList(res.data);
        });
    }

    render() {
        var checkboxlist = null;
        if ( this.props.companyList !== undefined ) {
            checkboxlist = this.props.companyList.map((company) =>
                <div><Checkbox label={company.name} name={company.code} onChange={this.handleCompanyChange}/><br/></div>
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

const mapDispatchToProps = {
    loadCompanyList,
    toggleCompanyToPlot
}

export default connect(mapStateToProps, mapDispatchToProps) (CompanyListGrid);