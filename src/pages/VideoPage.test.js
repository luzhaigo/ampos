import React from 'react';
import { shallow } from 'enzyme';
import VideoPage from 'pages/VideoPage';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<VideoPage/>);
});

it('has a text', () => {
  expect(wrapper.find('div').text()).toEqual('This is a Video page');
});