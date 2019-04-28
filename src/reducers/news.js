import {
  GET_NEWS,
} from 'actions/types';

export default (state = {articles: [], page: 1}, action) => {
  switch (action.type) {
    case GET_NEWS:
      {
        return {
          ...state,
          articles: [...state.articles, ...action.payload.data.articles],
          page: state.page + 1,
        };
      }
    default:
      return state;
  }
};