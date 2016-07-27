import React from 'react';
import {
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { updateNote } from '../Notes/actions';
import ViewContainer from '../../components/ViewContainer';
import MarkdownEditor from '../../components/MarkdownEditor';
import theme from '../../theme';

class NoteEditor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { note } = this.props;
        return (
            <ViewContainer style={styles.container}>
                <MarkdownEditor
                    placeholder="Type in your note here..."
                    style={styles.editor}
                    onChangeText={ this.onTextChange.bind(this) }
                    text={note.get('content')}/>
            </ViewContainer>
        );
    }

    onTextChange(text) {
        this.props.updateNote(this.props.note.set('content', text));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: theme.BACKGROUND_COLOR
    },
    text: {
        color: theme.FONT_COLOR
    },
    editor: {
        flex: 1
    }
});

const mapStateToProps = ({ notes }) => {
    const selectedNoteId = notes.get('selectedNote');
    return {
        note: notes.get('notes').find((note) => note.get('id') === selectedNoteId)
    };
};

const mapDispatchToProps = (dispatch) => ({
    updateNote: (note) => {
        dispatch(updateNote(note));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor);
