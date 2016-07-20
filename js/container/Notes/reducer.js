
import { DELETE_NOTE } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS([{
        title: 'Note 1',
        content: 'This is an example Note.'
    }, {
        title: 'Note 2',
        content: 'This is another example note.'
    }, {
        title: 'ReactJS Books',
        content: 'A list of reactjs books.'
    }, {
        title: 'React Native Stuff',
        content: 'A list of useful React Native links.'
    }]);

const notes = ( state = initialState, action) => {
    switch (action.type) {
        case DELETE_NOTE:
            return state.filter((note) => note !== action.payload);
        default:
            return state;
    }
};

export default notes;
