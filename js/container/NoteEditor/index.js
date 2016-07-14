import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export default () => (
    <View style={styles.container}>
        <Text>Edit Notes with Yamna!</Text>
        <Text>NOTE EDITOR SCREEN</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
