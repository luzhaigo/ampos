import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import Footer from 'components/Footer';


let wrapper;

beforeEach(() => {
  wrapper = mount(<HashRouter><Footer/></HashRouter>);
});

it('has a News anchor tag', () => {
  expect(wrapper.find('a.link[href="#/news"]').text()).toEqual('News');
});

it('has a Regions anchor tag', () => {
  expect(wrapper.find('a.link[href="#/regions"]').text()).toEqual('Regions');
});

it('has a Video anchor tag', () => {
  expect(wrapper.find('a.link[href="#/video"]').text()).toEqual('Video');
});

it('has a TV anchor tag', () => {
  expect(wrapper.find('a.link[href="#/tv"]').text()).toEqual('TV');
});

it('has a Copy right © AMPOS text', () => {
  expect(wrapper.find('div.footer>div').text()).toEqual('Copy right © AMPOS');
});