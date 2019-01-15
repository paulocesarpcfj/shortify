import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Header from '../components/Header';
import Shortify from '../containers/Shortify';

it('renders without crashing', () => {
  shallow(<App />);
});

it('render children components without crashing', () => {
  const wrapper = mount(<App />);

  expect(wrapper.find(Header)).toHaveLength(1);
  expect(wrapper.find(Shortify)).toHaveLength(1);
});

