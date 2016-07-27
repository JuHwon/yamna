import React, { Component } from 'react';
import { Provider } from 'react-redux';
import YamnaApp from './YamnaApp';
import configureStore from './store';
import { injectSagas } from './util/hooks';

function setup(): ReactClass {

    const initialState = {};
    const store = configureStore(initialState);
    injectSagas(store);

    class Root extends Component {
        render() {
            return (
                <Provider store={store} >
                    <YamnaApp />
                </Provider>
            );
        }
    }

    return Root;
}

export default setup;
