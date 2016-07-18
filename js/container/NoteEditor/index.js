import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import theme from '../../theme';

class NoteEditor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Edit Notes with Yamna!</Text>
                <Text style={styles.text}>Note: {this.props.note.title}</Text>
                <Text style={styles.text}>NOTE EDITOR SCREEN</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.BACKGROUND_COLOR
    },
    text: {
        color: theme.FONT_COLOR
    },
});

export default NoteEditor;
