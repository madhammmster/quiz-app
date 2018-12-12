import { handleActions, createAction } from 'redux-actions';

const defaultState = {
    started: false,
    isFaderVisible: false
};

export const startApp = createAction('APP_START');
export const showFader = createAction('SHOW_FADER');
export const hideFader = createAction('HIDE_FADER');


const AppReducer = handleActions(
    {
        [startApp]: state => ({ ...state, started: true }),
        [showFader]: state => ({ ...state, isFaderVisible: true }),
        [hideFader]: state => ({ ...state, isFaderVisible: false })
    },
    defaultState
);

export default AppReducer;

