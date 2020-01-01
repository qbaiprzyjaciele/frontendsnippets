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
    persons: [],
    filter: VisibilityFilters.SHOW_ALL
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}