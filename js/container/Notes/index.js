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

import { is } from 'immutable';

import Swipeout from 'react-native-swipeout';

import { deleteNote } from './actions';

import ViewContainer from '../../components/ViewContainer';
import theme from '../../theme';
const {
    BACKGROUND_COLOR,
    FONT_COLOR,
    ACCENT_COLOR
} = theme;

class Notes extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !is(r1, r2) });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.notes.toArray())
        };
    }

    componentWillReceiveProps (nextProps) {
        if (!nextProps.notes.equals(this.props.notes)) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.notes.toArray())
            });
        }
    }

    render() {
        return (
            <ViewContainer style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={this._renderSeperator.bind(this)}/>
            </ViewContainer>
        );
    }

    deleteNote(note) {
        const { dispatch } = this.props;
        dispatch(deleteNote(note));
    }

    _renderRow(data, sectionId, rowId, highlightRow) {
        const description = data.get('content');
        const swipeButtons = [{
            text: 'Delete',
            type: 'primary',
            onPress: this.deleteNote.bind(this, data),
            backgroundColor: 'red'
        }];

        return (
            <Swipeout
                backgroundColor={BACKGROUND_COLOR}
                right={swipeButtons}
                autoClose={true}>
                <TouchableHighlight onPress={() => {
                        Actions.editor({
                            note: data,
                            title: data.get('title')
                        });
                    }}>
                    <View style={styles.row}>
                        <Text style={[styles.h2, styles.link]}>
                            {data.get('title')}
                        </Text>
                        <Text style={styles.text}>
                            {description}
                        </Text>
                    </View>
                </TouchableHighlight>
            </Swipeout>
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
        backgroundColor: BACKGROUND_COLOR
    },
    row: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: BACKGROUND_COLOR
    },
    seperator: {
        height: 1,
        backgroundColor: '#ccc'
    },
    h2: {
        fontWeight: 'bold',
        color: FONT_COLOR
    },
    text: {
        color: FONT_COLOR
    },
    link: {
        color: ACCENT_COLOR
    }
});

const mapStateToProps = function(state) {
    return {
        notes: state.notes
    };
};

export default connect(mapStateToProps)(Notes);
