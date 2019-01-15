import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('render component with properties title and subtitle', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find('div')).toHaveLength(3);

  expect(wrapper.find('div').at(0).props().className).toBe("header");
  expect(wrapper.find('div').at(1).props().className).toBe("title");
  expect(wrapper.find('div').at(2).props().className).toBe("subtitle");

  expect(wrapper.find('div').at(1).text()).toBe("Welcome to Shortify!");
  expect(wrapper.find('div').at(2).text()).toBe("Your URL shortener to make your links more friendly.");
});

