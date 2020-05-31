/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DATA = createActionName('CHANGE_DATA');

export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');


// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDurationData = payload => ({payload, type: CHANGE_DATA});

export const addCheckedTag = payload => ({payload, type: ADD_TAG});

export const removeCheckedTag = payload => ({payload, type: REMOVE_TAG});
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case ADD_TAG:
      console.log(statePart.tags);
      return {
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload,
        ],
      };
    case REMOVE_TAG:
      
      return {
        ...statePart,
        tags:[
          ...statePart.tags.filter(tag => tag!= action.payload),
        ],
      };
    case CHANGE_DATA:
      console.log(statePart.duration);
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]:
          action.payload.value },
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
