import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default () => (
    <View style={styles.container}>
        <Text>Welcome to Yamna!</Text>
        <Text>HOME SCREEN</Text>
        <Text onPress={Actions.editor} > Goto Editor </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
