import lightColors from './light';
import darkColors from './dark';
import { fromJS } from 'immutable';
import { TOGGLE_THEME } from './constants';

const initialState = fromJS({
	selectedTheme: 'light',
	colors: lightColors
});

const theme = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			let newColors = fromJS(lightColors);
			let newSelection = 'light';
			if (state.get('selectedTheme') === 'light') {
				newColors = fromJS(darkColors);
				newSelection = 'dark';
			}
			return state
				.set('colors', newColors)
				.set('selectedTheme', newSelection);
		default:
			return state;
	}
}

export default theme;