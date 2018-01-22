import React, {Component} from 'react';
import {Grid,Select, Dropdown} from 'semantic-ui-react';
import UpgradeLineChart from './UpgradeLineChart';

const CompanyList = [
    {text: 'Farmers', value: 'FNWL', image: '../images/icon/Farmers-Insurance-Group-Logo-Icon.png'}   
]

class MarkerCapSection extends Component {

    render() {
        return (
            <div>
                <UpgradeLineChart/>
                <Dropdown placeholder='Company List' fluid selection options={CompanyList} />
            </div>
/*              <Grid container columns={2}>
                <Grid.column>
                    <UpgradeLineChart/>
                </Grid.column>
                <Grid.column>
                    <Dropdown placeholder='Company List' fluid selection options={CompanyList} />
                </Grid.column>
            </Grid> */
        );
    }

}

export default MarkerCapSection;