import nanoid from 'nanoid';

export const ADD_PERSON = 'ADD_PERSON';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

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
