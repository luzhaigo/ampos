import {
  GET_NEWS,
  GET_NEWS_REQUEST,
  QUERY_NEWS,
} from './types';
import newApi from 'services/newsApi';

export const getNews = (_page) => (dispatch, getState) => {
  const store = getState();
  const page = _page || store.news.page;
  dispatch({
    type: GET_NEWS_REQUEST
  });
  dispatch({
    type: GET_NEWS,
    payload: newApi.get(`/top-headlines?category=general&page=${page}&pageSize=15${store.news.query ? `&q=${store.news.query}` : ''}`),
  });
};

export const queryNews = (query) => {
  return {
    type: QUERY_NEWS,
    query,
  }
}