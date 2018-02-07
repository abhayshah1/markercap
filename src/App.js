import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Accordion, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import DataLocation from './components/DataLocation';
import UpgradeLineChart from './components/UpgradeLineChart';
import MarkerCapSection from './components/MarkerCapSection';

class App extends Component {

    constructor( props ) {
        super(props);
        this.state = {activeIndex : 0};
    }

    handleClick = ( e, data ) => {
        this.setState( {activeIndex : data.index === this.state.activeIndex ? -1 : data.index} );
    }

    render() {
        return(
            <Accordion fluid styled>
                <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Analyze Impact of Customization
                </Accordion.Title>
                <Accordion.Content active={this.state.activeIndex === 0}>
                    <DataLocation dataLocation="Baseline Site Info"/>
                    <DataLocation dataLocation="Current Site Info"/>
                </Accordion.Content>
                <Accordion.Title active={this.state.activeIndex === 1} index={1} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Review Marker Cap
                </Accordion.Title>
                <Accordion.Content active={this.state.activeIndex === 1}>
                    <MarkerCapSection/>
                </Accordion.Content>
            </Accordion>
        );
    }

}

export default App;