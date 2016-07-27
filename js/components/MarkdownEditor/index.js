import React, { PropTypes } from 'react';
import {
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

class MarkdownEditor extends React.Component {
    render() {

        const delimiter = /\n+/;

        // split string
        let _text = this.props.text;
        let token, index, parts = [];
        while (_text) {
            delimiter.lastIndex = 0;
            token = delimiter.exec(_text);
            if (token === null) {
                break;
            }
            index = token.index;
            if (token[0].length === 0) {
                index = 1;
            }
            parts.push(_text.substr(0, index));
            parts.push(token[0]);
            index = index + token[0].length;
            _text = _text.slice(index);
        }
        parts.push(_text);

        parts = parts.map(this.getMarkdownTags);

        return (
            <TextInput
                style={[styles.container, this.props.style || {}]}
                placeholder={this.props.placeholder || 'Type in your markdown here...'}
                onChangeText={this.onTextChange.bind(this)}
                multiline={true}>
                <Text>{parts}</Text>
            </TextInput>
        );
    }

    onTextChange(text) {
        this.props.onChangeText(text);
    }

    getMarkdownTags(text) {
        //TODO: impl markdown here
        if (/^# /.test(text)) {
            return <Text key={text} style={styles.h1}>{text}</Text>;
        } else {
            return text;
        }
    }
}

MarkdownEditor.propTypes = {
    placeholder: PropTypes.string,
    text: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    style: PropTypes.number // react-native StyleSheet
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        fontSize: 13,
        padding: 8,
        textAlignVertical: 'top'
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default MarkdownEditor;
