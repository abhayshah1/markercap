import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Accordion, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import DataLocation from './components/DataLocation';
import UpgradeLineChart from './components/UpgradeLineChart';
import MarkerCapSection from './components/MarkerCapSection';

class App extends Component {

    render() {
        return(
            <Accordion fluid styled>
                <Accordion.Title active={false} index={0} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Analyze Impact of Customization
                </Accordion.Title>
                <Accordion.Content active={false}>
                    <DataLocation dataLocation="Baseline Site Info"/>
                    <DataLocation dataLocation="Current Site Info"/>
                  <p>Hello</p>
                </Accordion.Content>
                <Accordion.Title active={true} index={1} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Review Marker Cap
                </Accordion.Title>
                <Accordion.Content active={true}>
                    <MarkerCapSection/>
                </Accordion.Content>
            </Accordion>
        );
    }

}

export default App;