import React from 'react';

import { Scene, Router } from 'react-native-router-flux';

import Home from './container/Home';
import NoteEditor from './container/NoteEditor';

class YamnaApp extends React.Component {
    render() {
        return (
            <Router>
              <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial={true} />
                <Scene key="editor" component={NoteEditor} title="Note Editor"/>
              </Scene>
            </Router>
        );
    }
}

export default YamnaApp;
