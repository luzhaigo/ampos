import React from 'react';
import { shallow } from 'enzyme';
import Loading from 'components/Loading';


let wrapper;

beforeEach(() => {
  wrapper = shallow(<Loading/>);
});

it('has a img tag', () => {
  expect(wrapper.find('img').length).toEqual(1);
});

it('has a loading class', () => {
  expect(wrapper.find('.loading').length).toEqual(1);
});