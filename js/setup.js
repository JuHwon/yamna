import React, { Component } from 'react';
import YamnaApp from './YamnaApp';

function setup(): ReactClass {

    class Root extends Component {
        render() {
            return (
                <YamnaApp />
            );
        }
    }

    return Root;
}

export default setup;
