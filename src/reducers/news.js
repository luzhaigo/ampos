import {
  GET_NEWS,
  GET_NEWS_REQUEST,
  QUERY_NEWS,
} from 'actions/types';

const initialState = {
  articles: [],
  page: 1,
  request: false,
  error: false,
  query: '',
}

export default (state = initialState, action) => {
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
    case QUERY_NEWS: {
      return {
        ...state,
        page: 1,
        articles: [],
        query: action.query,
      }
    }
    default:
      return state;
  }
};