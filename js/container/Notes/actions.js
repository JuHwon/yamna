import {
    DELETE_NOTE
} from './constants';

export const deleteNote = (note) => {
    return {
        type: DELETE_NOTE,
        payload: note
    };
};
