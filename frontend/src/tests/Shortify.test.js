import React from 'react';
import { shallow } from 'enzyme';
import Shortify from '../containers/Shortify';

it('renders without crashing', () => {
    const wrapper = shallow(<Shortify />);

    expect(wrapper.find('div')).toHaveLength(2);
});

it('render component with all properties filled', () => {
    const wrapper = shallow(<Shortify />);
    wrapper.setState({
        error: { message: 'An error occurred.' },
        shortenedURL: { shortUrl: 'http://www.google.com' }
    });

    expect(wrapper.find('div')).toHaveLength(5);
});

it('render error when its necessary', () => {
    const wrapper = shallow(<Shortify />);
    wrapper.setState({ error: { message: 'An error occurred.' }});

    expect(wrapper.find('.hasError')).toHaveLength(1);
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.find('.error').text()).toBe('An error occurred.');
});

it('render shortened link when its filled', () => {
    const wrapper = shallow(<Shortify />);
    wrapper.setState({ shortenedURL: { shortUrl: 'http://www.google.com' } });

    expect(wrapper.find('.result')).toHaveLength(1);
    expect(wrapper.find('a').text()).toBe('http://www.google.com');
    expect(wrapper.find('.copy').text()).toBe('COPY LINK');
});