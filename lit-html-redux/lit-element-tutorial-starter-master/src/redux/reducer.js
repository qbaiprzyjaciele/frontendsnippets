import {
    ADD_PERSON,
    UPDATE_FILTER,
    UPDATE_STATUS,
    CLEAR_DEVELOPERS
} from './actions.js';

export const VisibilityFilters = {
    SHOW_ALL:'All',
    SHOW_DEVELOPERS: 'Developer',
    SHOW_TESTERS: 'Tester'
};

const INITIAL_STATE = {
    persons: [{person:'Jan Mrągowski', job:'Developer'}],
    filter: VisibilityFilters.SHOW_ALL
};

export const reducer = (state = INITIAL_STATE, action) => {
    console.log(`reduce = state =${JSON.stringify(state)}`);
    switch(action.type) {
        default:
            return state;
    }
}