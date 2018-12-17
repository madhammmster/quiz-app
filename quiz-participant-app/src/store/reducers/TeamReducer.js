import { handleActions, createAction } from 'redux-actions';

const defaultState = {
    id: null
};

export const setTeam = createAction('SET_TEAM');


const TeamReducer = handleActions(
    {
        [setTeam]: (state, action) => (
            { 
                ...state, 
                id: action.payload.id,
                name: action.payload.name,
                firstParticipant: action.payload.firstParticipant,
                secondParticipant: action.payload.secondParticipant
            }
        ),
    },
    defaultState
);

export default TeamReducer;

