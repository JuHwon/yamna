import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from './container/Home';
import NoteEditor from './container/NoteEditor';

import theme from './theme';
const {
    BACKGORUND_COLOR,
    HEADER_COLOR,
    FONT_COLOR,
    NEUTRAL_COLOR
} = theme;

class YamnaApp extends React.Component {
    render() {
        return (
            <Router sceneStyle={styles.container}>
              <Scene
                key="root"
                navigationBarStyle={styles.navigationBar}
                titleStyle={styles.title}
                leftButtonStyle={styles.leftButton}>
                <Scene key="home" component={Home} title="Home" initial={true} />
                <Scene key="editor" component={NoteEditor} title="Note Editor" />
              </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGORUND_COLOR
    },
    navigationBar: {
        backgroundColor: HEADER_COLOR,
        padding: 0,
        margin: 0,
        borderStyle: 'solid',
        borderBottomColor: NEUTRAL_COLOR,
        borderBottomWidth: 1,
        height: 40
    },
    title: {
        color: FONT_COLOR,
        margin: 0,
        padding: 0,
        marginTop: 2 // default: 10
    },
    leftButton: {
        top: 1
    }
});


export default YamnaApp;
