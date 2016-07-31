import React, { PropTypes } from 'react';

import {
    View,
    StatusBar,
    Platform,
    StyleSheet
} from 'react-native';

class ViewContainer extends React.Component {
    render() {
        return (
            <View style={[styles.container, this.props.style || {}]}>
                {this.renderStatusBar.call(this)}
                {this.props.children}
            </View>
        );
    }

    renderStatusBar() {
        const { iosBarStyle, androidBarBgColor } = this.props;
        return <StatusBar
                    barStyle={iosBarStyle}
                    backgroundColor={androidBarBgColor}/>;
    }
}

ViewContainer.propTypes = {
    iosBarStyle: PropTypes.string.isRequired,
    androidBarBgColor: PropTypes.string.isRequired
};

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
