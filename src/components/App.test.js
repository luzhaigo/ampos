import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import Header from 'components/Header';
import Footer from 'components/Footer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App/>);
});

it('has a Header component', () => {
  expect(wrapper.find(Header).length).toEqual(1);
});

it('shows a Footer component', () => {
  expect(wrapper.find(Footer).length).toEqual(1);
});

// it('has an add order item button', () => {
//   expect(wrapper.find('.add_order').length).toEqual(1);
// });

// it('click add order item button, show modal', () => {
//   wrapper.find('.add_order').simulate('click');

//   wrapper.update();

//   expect(wrapper.find(Modal).length).toEqual(1);
// });