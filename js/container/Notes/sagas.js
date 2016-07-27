import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { ADD_NOTE, EDIT_NOTE } from './constants';
import { Actions } from 'react-native-router-flux';
import { ROUTE_EDITOR } from '../../constants';
import { selectNote } from './actions';

export function* watchAddNote() {
    yield* takeEvery(ADD_NOTE, navigateToEditView);
}

export function* watchEditNote() {
    yield* takeLatest(EDIT_NOTE, navigateToEditView);
}

export function* navigateToEditView(action) {
    const { note } = action.payload;
    yield put(selectNote(note));
    yield call(Actions[ROUTE_EDITOR], {
        title: note.get('title')
    });
}

// All sagas to be loaded
export default [
    watchAddNote,
    watchEditNote
];
