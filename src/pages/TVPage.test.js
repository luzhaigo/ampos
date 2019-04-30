import React from 'react';
import { shallow } from 'enzyme';
import TVPage from 'pages/TVPage';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<TVPage/>);
});

it('has a text', () => {
  expect(wrapper.find('div').text()).toEqual('This is a TV page');
});