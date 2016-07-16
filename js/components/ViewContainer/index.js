import React from 'react';

import {
    View,
    StatusBar,
    Platform,
    StyleSheet
} from 'react-native';
import theme from '../../theme';

const PlatformStatusBar = Platform.select({
    ios: () => (
        <StatusBar
            backgroundColor={theme.TITLEBAR_COLOR}
            barStyle={theme.IOS_BARSTYLE}/>
        ),
    android: () => (
        <StatusBar
            backgroundColor={theme.TITLEBAR_COLOR}/>
        )
});

class ViewContainer extends React.Component {
    render() {
        return (
            <View style={[styles.container, this.props.style || {}]}>
                <PlatformStatusBar />
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            android: {
                marginTop: 40
            },
            ios: {
                marginTop: 64
            }
        })
    }
});

export default ViewContainer;
