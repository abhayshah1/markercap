import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import DataLocation from './components/DataLocation';

class App extends Component {

    render() {
        return(
            <div class="ui main text container">
                <h1 class="ui header">Customization Impact Analysis</h1>
                <DataLocation dataLocation="BaseLine Site Info"/>
                <DataLocation dataLocation="Current Site Info"/>
            </div>
        );
    }

}

export default App;