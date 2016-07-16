import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Notes from './container/Notes';
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
                <Scene key="home" component={Notes} title="All Notes" initial={true} />
                <Scene key="editor" component={NoteEditor}  />
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
        borderStyle: 'solid',
        borderBottomColor: NEUTRAL_COLOR,
        borderBottomWidth: 1,
        ...Platform.select({
            android: {
                height: 40
            }
        })
    },
    title: {
        color: FONT_COLOR,
        ...Platform.select({
            android:{
                marginTop: 2 // default: 10
            }
        })
    },
    leftButton: {
        ...Platform.select({
            top: 1
        })
    }
});


export default YamnaApp;
