import React from 'react';
import { mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import Search from 'components/Search';
import Root from 'Root';


let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><HashRouter><Search/></HashRouter></Root>);
});

it('has a search img', () => {
  expect(wrapper.find('img').length).toEqual(1);
});

describe('search input', () => {
  let input;
  beforeEach(() => {
    input = wrapper.find('input[placeholder="search"]');
  });
  it('has a input', () => {
    expect(input.length).toEqual(1);
  });

  it('can type some texts', () => {
    input.instance().value = 'model';

    expect(input.instance().value).toEqual('model');
  });
});
