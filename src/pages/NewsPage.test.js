import React from 'react';
import { shallow } from 'enzyme';
import NewsPage from 'pages/NewsPage';
import NewsList from 'components/NewsList';
import LoadMoreButton from 'components/LoadMoreButton';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NewsPage/>);
});

it('has a NewsList component', () => {
  expect(wrapper.find(NewsList).length).toEqual(1);
});

it('has a LoadMoreButton component', () => {
  expect(wrapper.find(LoadMoreButton).length).toEqual(1);
});
