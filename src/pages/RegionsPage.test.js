import React from 'react';
import { shallow } from 'enzyme';
import RegionsPage from 'pages/RegionsPage';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<RegionsPage/>);
});

it('has a text', () => {
  expect(wrapper.find('div').text()).toEqual('This is a Regions page');
});
