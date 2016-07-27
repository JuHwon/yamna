import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    ROUTE_NOTES,
    ROUTE_EDITOR
} from './constants';
import Notes from './container/Notes';
import NoteEditor from './container/NoteEditor';

const RouterWithRedux = connect()(Router);

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
            <RouterWithRedux sceneStyle={styles.container}>
              <Scene
                key="root"
                navigationBarStyle={styles.navigationBar}
                titleStyle={styles.title}
                leftButtonStyle={styles.navigationButton}
                rightButtonStyle={styles.navigationButton}>
                <Scene key={ROUTE_NOTES} component={Notes} title="All Notes" initial={true} />
                <Scene key={ROUTE_EDITOR} component={NoteEditor} title="Note Editor" />
              </Scene>
            </RouterWithRedux>
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
    navigationButton: {
        ...Platform.select({
            android: {
                top: 1
            }
        })
    }
});


export default connect()(YamnaApp);
