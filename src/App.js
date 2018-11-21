import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {upgradeApp} from './reducers';
import {Accordion, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import DataLocation from './components/DataLocation';
import MarkerCapSection from './components/MarkerCapSection';
import ChangeTypeGrid from './components/ChangeTypeGrid';

class App extends Component {

    constructor( props ) {
        super(props);
        this.state = {activeIndex : 0};
        // initialize the store
        const store = createStore(upgradeApp);
    }

    handleClick = ( e, data ) => {
        this.setState( {activeIndex : data.index === this.state.activeIndex ? -1 : data.index} );
    }

    render() {
        return(
            <div>
                <header class="App-header">
                    <img src="http://www.fasttechnology.com/app_media/images/fastTechnologyLogo.png"/>
                    <h1>Upgrade Estimator</h1>
                </header>
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
                    <Accordion.Title active={this.state.activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Marker Cap Details
                    </Accordion.Title>
                    <Accordion.Content active={this.state.activeIndex === 2}>
                        <ChangeTypeGrid/>
                    </Accordion.Content>
                </Accordion>
            </div>
        );
    }

}

export default App;