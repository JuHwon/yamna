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
        const styles = getStyles(this.props.colors);
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

const getStyles = (colors) => StyleSheet.create({
    container: {
        backgroundColor: colors.get('BACKGORUND_COLOR')
    },
    navigationBar: {
        backgroundColor: colors.get('HEADER_COLOR'),
        borderStyle: 'solid',
        borderBottomColor: colors.get('NEUTRAL_COLOR'),
        borderBottomWidth: 1,
        ...Platform.select({
            android: {
                height: 40
            }
        })
    },
    title: {
        color: colors.get('FONT_COLOR'),
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


const mapStateToProps = ({ theme }) => ({
    colors: theme.get('colors')
});


export default connect(mapStateToProps)(YamnaApp);
