import newsReducer, { initialState } from 'reducers/news';
import {
  GET_NEWS,
  GET_NEWS_REQUEST,
  QUERY_NEWS
} from 'actions/types';

it('handles actions of type GET_NEWS_REQUEST', () => {
  const action = {
    type: GET_NEWS_REQUEST,
  };

  const newState = newsReducer(initialState, action);

  expect(newState).toEqual({
    ...initialState,
    request: true,
    error: false,
  });
});

it('handles actions of type GET_NEWS', () => {
  const action = {
    type: GET_NEWS,
    payload: {
      data: {
        articles: [{a: 1}]
      }
    },
    error: false
  };

  const newState = newsReducer(initialState, action);

  expect(newState).toEqual({
    ...initialState,
    articles: [{a: 1}],
    page: initialState.page + 1,
    request: false,
    error: false,
  });
});

it('handles actions of type GET_NEWS with error', () => {
  const action = {
    type: GET_NEWS,
    error: true
  };

  const newState = newsReducer(initialState, action);

  expect(newState).toEqual({
    ...initialState,
    error: true,
    request: false,
  });
});

it('handles actions of type QUERY_NEWS', () => {
  const action = {
    type: QUERY_NEWS,
    query: 'hello',
  };

  const newState = newsReducer(initialState, action);

  expect(newState).toEqual({
    ...initialState,
    page: 1,
    articles: [],
    query: 'hello',
  });
});

it('handles action with unknown type', () => {
  const newState = newsReducer(initialState, {
    type: 'hi'
  });

  expect(newState).toEqual(initialState);
});