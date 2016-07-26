import { ActionConst } from 'react-native-router-flux';
import { addNote } from './container/Notes/actions';
import { ROUTE_NOTES } from './constants';

const initialState = {
  scene: {},
};

function getScene(action) {
  // do not create a new scene object here.
  // if you do, it will not affect the navigator
  switch (action.scene.sceneKey) {
    case ROUTE_NOTES:
      return Object.assign(action.scene, {
          rightTitle: 'Add',
          onRight: ({ dispatch }) => {
            dispatch(addNote());
          }
        });
    default:
      return action.scene;
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: getScene(action)
      };
    default:
      return state;
  }
}
