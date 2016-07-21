import {
    DELETE_NOTE,
    ADD_NOTE
} from './constants';

export const deleteNote = (note) => ({
    type: DELETE_NOTE,
    payload: note
});

export const addNote = () => ({
    type: ADD_NOTE
});

