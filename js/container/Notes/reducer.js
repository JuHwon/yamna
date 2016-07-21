
import {
    DELETE_NOTE,
    ADD_NOTE
} from './constants';
import { fromJS } from 'immutable';
import uuid from 'node-uuid';

const initialState = fromJS([{
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
    }]);

const notes = ( state = initialState, action) => {
    switch (action.type) {
        case DELETE_NOTE:
            return state.filter((note) => !note.equals(action.payload));
        case ADD_NOTE:
            return state.push(fromJS({
                id: uuid.v4(),
                title: 'New Note',
                content: ''
            }));
        default:
            return state;
    }
};

export default notes;
