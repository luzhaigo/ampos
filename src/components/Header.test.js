import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import Header from 'components/Header';
import Root from 'Root';


let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><HashRouter><Header/></HashRouter></Root>);
});

it('has a Logo anchor tag', () => {
  expect(wrapper.find('a#logo').text()).toEqual('Logo');
});