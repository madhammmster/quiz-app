import { handleActions, createAction } from 'redux-actions';

const defaultState = {
    team: null
};

export const setTeam = createAction('SET_TEAM');


const TeamReducer = handleActions(
    {
        [setTeam]: (state, action) => (
            { ...state, team: action.payload }
        ),
    },
    defaultState
);

export default TeamReducer;

