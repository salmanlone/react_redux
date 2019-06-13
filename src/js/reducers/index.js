// src/js/reducers/index.js

import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === FOUND_BAD_WORD) {
    if(action.payload.errorMessage !== undefined){
      alert(action.payload.errorMessage);
    }
    else{
      alert("Bad words are not allowed!");
    }
  }

  if (action.type === "DATA_LOADED") {
    debugger;
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;