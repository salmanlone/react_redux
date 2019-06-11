// src/js/reducers/index.js

import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === FOUND_BAD_WORD) {
    debugger;
    if(action.payload.errorMessage !== undefined){
      alert(action.payload.errorMessage);
    }
    else{
      alert("Bad words are not allowed!");
    }
  }

  return state;
}

export default rootReducer;