'ues strict';

import React from 'react';
import { connect } from 'react-redux';
import { is } from 'immutable';
import {
    Text,
    View,
    ListView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import ViewContainer from '../../components/ViewContainer';
import { deleteNote, editNote } from './actions';

class Notes extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => {
            return !is(r1, r2);
        }});
        let rowData = this._getRowData(this.props.notes, this.props.colors);
        this.state = {
            dataSource: ds.cloneWithRows(rowData)
        };
    }

    componentWillReceiveProps (nextProps) {
        if (!nextProps.notes.equals(this.props.notes) ||
            !nextProps.colors.equals(this.props.colors)) {
            let newData = this._getRowData(nextProps.notes, nextProps.colors);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(newData)
            });
        }
    }

    render() {
        const styles = getStyles(this.props.colors);
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
        const { removeNote } = this.props;
        removeNote(note);
    }

    _getRowData (notes, colors) {
        return notes.toArray().map((note) => note.set('colors', colors));
    }

    _renderRow(data, sectionId, rowId, highlightRow) {
        const styles = getStyles(this.props.colors);

        const description = data.get('content') || 'No Content.';
        const swipeButtons = [{
            text: 'Delete',
            type: 'primary',
            onPress: this.deleteNote.bind(this, data),
            backgroundColor: 'red'
        }];

        return (
            <Swipeout
                backgroundColor={this.props.colors.get('BACKGROUND_COLOR')}
                right={swipeButtons}
                autoClose={true}>
                <TouchableHighlight onPress={() => {
                        this.props.editNote(data);
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
        const styles = getStyles(this.props.colors);
        return (rowID &&
            <View
                key={`${sectionID}-${rowID}`}
                style={styles.seperator}
            />
        );
    }
}

const getStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.get('BACKGROUND_COLOR')
    },
    row: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.get('BACKGROUND_COLOR')
    },
    seperator: {
        height: 1,
        backgroundColor: '#ccc'
    },
    h2: {
        fontWeight: 'bold',
        color: colors.get('FONT_COLOR')
    },
    text: {
        color: colors.get('FONT_COLOR')
    },
    link: {
        color: colors.get('ACCENT_COLOR')
    }
});


const mapStateToProps = ({ notes, theme }) => ({
    notes: notes.get('notes'),
    colors: theme.get('colors')
});

const mapDispatchToProps = (dispatch) => ({
    removeNote: (note) => {
        dispatch(deleteNote(note));
    },
    editNote: (note) => {
        dispatch(editNote(note));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
