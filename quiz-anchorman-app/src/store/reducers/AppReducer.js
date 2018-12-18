import { handleActions, createAction } from 'redux-actions';
import { AppStatus } from '../../utils/Enums';



const defaultState = {
    started: false,
    status: AppStatus.WAITING_FOR_QUESTION,
    isFaderVisible: false
};

export const startApp = createAction('APP_START');
export const setWaitingForQuestion = createAction(AppStatus.WAITING_FOR_QUESTION);
export const setWaitingForVote = createAction(AppStatus.WAITING_FOR_VOTE);
export const showFader = createAction('SHOW_FADER');
export const hideFader = createAction('HIDE_FADER');


const AppReducer = handleActions(
    {
        [startApp]: state => ({ ...state, started: true }),
        [showFader]: state => ({ ...state, isFaderVisible: true }),
        [hideFader]: state => ({ ...state, isFaderVisible: false }),
        [setWaitingForQuestion]: state => ({ ...state, status: AppStatus.WAITING_FOR_QUESTION }),
        [setWaitingForVote]: state => ({ ...state, status: AppStatus.WAITING_FOR_VOTE }), 
    },
    defaultState
);

export default AppReducer;

