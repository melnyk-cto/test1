import {ADD_ARTICLE, CHANGE_FOOTER} from "../constants/action-types";

const initialState = {
    articles: [],
    footer_show: false
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
      case ADD_ARTICLE:
          return Object.assign({}, state, {
              articles: state.articles.concat(action.payload)
          });
      case CHANGE_FOOTER:
          return
  }
};
export default rootReducer;