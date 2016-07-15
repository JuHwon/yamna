import React from 'react';

import {
    View,
    StatusBar,
    StyleSheet
} from 'react-native';
import theme from '../../theme';

class ViewContainer extends React.Component {
    render() {
        return (
            <View style={[styles.container, this.props.style || {}]}>
                <StatusBar
                    backgroundColor={theme.TITLEBAR_COLOR} />
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    }
});

export default ViewContainer;
