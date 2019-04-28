import {
  GET_NEWS,
} from './types';
import newApi from 'services/newsApi';

export const getNews = (page) => {
  return {
    type: GET_NEWS,
    payload: newApi.get(`/top-headlines?category=general&page=${page}&pageSize=15`),
  }
};