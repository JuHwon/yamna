import {
    DELETE_NOTE,
    ADD_NOTE
} from './constants';
import { fromJS } from 'immutable';
import uuid from 'uuid';

export const deleteNote = (note) => ({
    type: DELETE_NOTE,
    payload: note
});

export const addNote = () => ({
    type: ADD_NOTE,
    payload: fromJS({
        id: uuid.v4(),
        title: 'Untitled Note',
        content: ''
    })
});
