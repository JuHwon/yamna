'ues strict';

import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
    Text,
    View,
    ListView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import ViewContainer from '../../components/ViewContainer';
import theme from '../../theme';

class Notes extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.notes)
        };
    }

    render() {
        return (
            <ViewContainer style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSeparator={this._renderSeperator}/>
            </ViewContainer>
        );
    }

    _renderRow(data, sectionId, rowId, highlightRow) {
        const description = data.content;
        return (
            <TouchableHighlight onPress={() => {
                    Actions.editor({
                        note: data,
                        title: data.title
                    });
                }}>
                <View style={styles.row}>
                    <Text style={[styles.h2, styles.link]}>
                        {data.title}
                    </Text>
                    <Text style={styles.text}>
                        {description}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    _renderSeperator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (rowID &&
            <View
                key={`${sectionID}-${rowID}`}
                style={styles.seperator}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.BACKGROUND_COLOR
    },
    row: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: theme.BACKGROUND_COLOR
    },
    seperator: {
        height: 1,
        backgroundColor: '#ccc'
    },
    h2: {
        fontWeight: 'bold',
        color: theme.FONT_COLOR
    },
    text: {
        color: theme.FONT_COLOR
    },
    link: {
        color: theme.ACCENT_COLOR
    }
});

const mapStateToProps = function(state) {
    return {
        notes: state.notes
    };
};

export default connect(mapStateToProps)(Notes);
