import React from 'react';
import { Text, StyleSheet } from 'react-native';

class Link extends React.Component {
	render() {
		return <Text style={styles.container} {...this.props} />
	}
}

const styles = StyleSheet.create({
	container: {
		color: 'blue'
	}
});

export default Link;