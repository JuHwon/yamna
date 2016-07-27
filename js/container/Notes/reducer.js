
import {
    DELETE_NOTE,
    ADD_NOTE,
    UPDATE_NOTE,
    SELECT_NOTE
} from './constants';
import { fromJS } from 'immutable';
import uuid from 'uuid';

const initialState = fromJS({
    selectedNote: undefined,
    notes: [{
        id: uuid.v4(),
        title: 'Note 1',
        content: 'This is an example Note.'
    }, {
        id: uuid.v4(),
        title: 'Note 2',
        content: 'This is another example note.'
    }, {
        id: uuid.v4(),
        title: 'ReactJS Books',
        content: 'A list of reactjs books.'
    }, {
        id: uuid.v4(),
        title: 'React Native Stuff',
        content: 'A list of useful React Native links.'
    }]
});

const notes = ( state = initialState, action) => {
    switch (action.type) {
        case DELETE_NOTE:
            return state.set('notes', state.get('notes').filter(
                (note) => !note.equals(action.payload.note)
            ));
        case ADD_NOTE:
            return state.set('notes', state.get('notes').push(action.payload.note));
        case UPDATE_NOTE:
            return state.set('notes', state.get('notes').map((note) =>
                    note.get('id') === action.payload.id ? action.payload.note : note
            ));
        case SELECT_NOTE:
            return state.set('selectedNote', action.payload.note.get('id'));
        default:
            return state;
    }
};

export default notes;
