import { handleActions, createAction } from 'redux-actions';

const defaultState = {
    id: null
};

export const setTeams = createAction('SET_TEAMS');


const TeamsReducer = handleActions(
    {
        [setTeams]: (state, action) => (
            { 
                ...state, 
                teams: action.payload
            }
        ),
    },
    defaultState
);

export default TeamsReducer;

