import React from 'react';
import { Text, StyleSheet } from 'react-native';

class H3 extends React.Component {
	render() {
		return <Text style={styles.container} {...this.props} />;
	}
}

const styles = StyleSheet.create({
	container: {
		fontWeight: 'bold',
		fontSize: 18
	}
});

export default H3;