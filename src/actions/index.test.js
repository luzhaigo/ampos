import {
  getNews,
  queryNews,
} from 'actions';
import {
  GET_NEWS,
  GET_NEWS_REQUEST,
  QUERY_NEWS
} from 'actions/types';

describe('queryNews', () => {
  it('has the correct type', () => {
    const action = queryNews();

    expect(action.type).toEqual(QUERY_NEWS);
  });

  it('has the correct payload', () => {
    const action = queryNews('q');

    expect(action).toEqual({
      type: QUERY_NEWS,
      query: 'q',
    });
  });
});

// describe('getNews', () => {
//   it('has the correct type', () => {
//     const action = getNews();

//     expect(action.type).toEqual(UPDATE_ORDER_ITEM);
//   });

//   it('has the correct payload', () => {
//     const action = updateOrderItemByIndex(0, {});

//     expect(action).toEqual({
//       type: UPDATE_ORDER_ITEM,
//       payload: {
//         index: 0,
//         item: {},
//       },
//     });
//   });
// });