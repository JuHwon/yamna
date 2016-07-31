import React from 'react';
import {
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { updateNote } from '../Notes/actions';
import ViewContainer from '../../components/ViewContainer';
import MarkdownEditor from '../../components/MarkdownEditor';

class NoteEditor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const styles = getStyles(this.props.colors);
        const { note } = this.props;
        return (
            <ViewContainer
                iosBarStyle={this.props.colors.get('IOS_BARSTYLE')}
                androidBarBgColor={this.props.colors.get('TITLEBAR_COLOR')}
                style={styles.container}>
                <MarkdownEditor
                    placeholder="Type in your note here..."
                    style={styles.editor}
                    fontColor={this.props.colors.get('FONT_COLOR')}
                    highlightColor={this.props.colors.get('ACCENT_COLOR')}
                    onChangeText={ this.onTextChange.bind(this) }
                    text={note.get('content')}/>
            </ViewContainer>
        );
    }

    onTextChange(text) {
        this.props.updateNote(this.props.note.set('content', text));
    }
}

const getStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: colors.get('BACKGROUND_COLOR')
    },
    editor: {
        flex: 1,
        color: colors.get('FONT_COLOR')
    }
});

const mapStateToProps = ({ notes, theme }) => {
    const selectedNoteId = notes.get('selectedNote');
    return {
        note: notes.get('notes').find((note) => note.get('id') === selectedNoteId),
        colors: theme.get('colors')
    };
};

const mapDispatchToProps = (dispatch) => ({
    updateNote: (note) => {
        dispatch(updateNote(note));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor);
