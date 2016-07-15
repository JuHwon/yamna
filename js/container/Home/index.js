import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
    Text,
    StyleSheet
} from 'react-native';

import ViewContainer from '../../components/ViewContainer';
import theme from '../../theme';

export default () => (
    <ViewContainer style={styles.container}>
        <Text style={styles.text}>Welcome to Yamna!</Text>
        <Text style={styles.text}>HOME SCREEN</Text>
        <Text onPress={Actions.editor} style={styles.link}> Goto Editor </Text>
    </ViewContainer>
);

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
    link: {
        color: theme.ACCENT_COLOR
    }
});
