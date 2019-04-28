import {
  GET_NEWS,
  GET_NEWS_REQUEST,
} from 'actions/types';

export default (state = {articles: [], page: 1, request: false, error: false}, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST: {
      return {
        ...state,
        request: true,
        error: false,
      }
    }
    case GET_NEWS: {
      return {
        ...state,
        articles: [...state.articles, ...action.payload.data.articles],
        page: state.page + 1,
        request: false,
        error: !!action.error,
      };
    }
    default:
      return state;
  }
};