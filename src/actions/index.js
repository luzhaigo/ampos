import {
  GET_NEWS,
  GET_NEWS_REQUEST,
} from './types';
import newApi from 'services/newsApi';

export const getNews = (page) => (dispatch) => {
  dispatch({
    type: GET_NEWS_REQUEST
  });
  dispatch({
    type: GET_NEWS,
    payload: newApi.get(`/top-headlines?category=general&page=${page}&pageSize=15`),
  });
};