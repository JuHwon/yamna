import React from 'react';

import { View, StatusBar } from 'react-native';
import theme from '../../theme';

class ViewContainer extends React.Component {
    render() {
        return (
            <View style={this.props.style || {}}>
            <StatusBar
                backgroundColor={theme.TITLEBAR_COLOR} />
                {this.props.children}
            </View>
        );
    }
}

export default ViewContainer;
