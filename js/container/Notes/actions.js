import {
    DELETE_NOTE,
    ADD_NOTE,
    EDIT_NOTE,
    UPDATE_NOTE,
    SELECT_NOTE
} from './constants';
import { fromJS } from 'immutable';
import uuid from 'uuid';

export const deleteNote = (note) => ({
    type: DELETE_NOTE,
    payload: { note }
});

export const addNote = () => ({
    type: ADD_NOTE,
    payload: {
        note: fromJS({
            id: uuid.v4(),
            title: 'Untitled Note',
            content: ''
        })
    }
});

export const editNote = (note) => ({
    type: EDIT_NOTE,
    payload: {
        note
    }
});

export const updateNote = (note) => ({
    type: UPDATE_NOTE,
    payload: {
        id: note.get('id'),
        note
    }
});

export const selectNote = (note) => ({
    type: SELECT_NOTE,
    payload: { note }
});
