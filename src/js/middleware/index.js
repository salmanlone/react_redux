import { ADD_ARTICLE } from "../constants/action-types";
import { foundBadWord } from "./../actions/index";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
      return function(action) {
        // do your stuff
        if (action.type === ADD_ARTICLE) {
          
          if (action.payload.title === "") {
            return dispatch(foundBadWord({
              errorMessage: "Title cannot be empty."
            }));
          }

          const foundWord = forbiddenWords.filter(word =>
            action.payload.title.includes(word)
          );

          if (foundWord.length) {
            return dispatch(foundBadWord(foundWord));
          }
        }
        return next(action);
      };
    };
  }