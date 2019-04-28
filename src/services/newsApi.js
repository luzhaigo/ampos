import axios from 'axios';

export default axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': 'bf4bbd60085e4f13a94e4621e1407889',
  }
});