import React, {Component} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';

class DataLocation extends Component {

    constructor(props) {
        super(props);
    }

    render (){
        return (
            <div>
                <h3 className ="ui block header">{this.props.dataLocation}</h3>
                <Form>
                    <Form.Field>
                        <label>8x Location</label>
                        <input/>
                    </Form.Field>
                </Form>
            </div>
        );
    }

}

export default DataLocation;