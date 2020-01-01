import nanoid from 'nanoid';

export const ADD_PERSON = 'ADD_PERSON';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const UPDATE_FvILTER = 'UPDATE_FILTER';
export const CLEAR_DEVELOPERS = 'CLEAR_DEVELOPERS';

export const addPerson = person => {
    return {
        type: ADD_PERSON,
        person: {
            id: nanoid(),
            person,
            job: 'Developer'
        }
    }
}

export const updatePerson = (person, job) => {
    return {
        type: UPDATE_PERSON,
        person,
        job
    }
}

export const updateFilter = filter => {
    return {
        type: UPDATE_FILTER,
        filter
    }
}