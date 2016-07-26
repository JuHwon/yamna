import noteSagas from '../container/Notes/sagas';


export function injectSagas(store){
    noteSagas.map(store.runSaga);
}
