import React, { PropTypes } from 'react';
import {
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import H1 from '../H1';
import H2 from '../H2';
import H3 from '../H3';
import Link from '../Link';

const h1Exp = /^# +.+/;
const h2Exp = /^## +.+/;
const h3Exp = /^### +.+/;
const linkExp = /\[.+\]\(.+\)/;

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

        parts = parts.map(this.getMarkdownTags.bind(this));

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
        if (h1Exp.test(text)) {
            return <H1 key={text}>{text}</H1>;
        }

        if (h2Exp.test(text)) {
            return <H2 key={text}>{text}</H2>;
        }

        if (h3Exp.test(text)) {
            return <H3 key={text}>{text}</H3>;
        }

        if (linkExp.test(text)) {
            return <Link key={text}>{text}</Link>;
        }

        return text;
    }
}

MarkdownEditor.propTypes = {
    placeholder: PropTypes.string,
    text: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    fontColor: PropTypes.string,
    highlightColor: PropTypes.string,
    neutralColor: PropTypes.string,
    style: PropTypes.number // react-native StyleSheet
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        fontSize: 13,
        padding: 8,
        textAlignVertical: 'top'
    }
});

export default MarkdownEditor;
