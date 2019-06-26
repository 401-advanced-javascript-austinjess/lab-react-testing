import React from 'react';
import Counter from './counter';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';

describe('The Counter Component', () => {
  it('IS ALIVE!!!', () => {
    let counter = mount(<Counter />);
    expect(counter.find('.count').text()).toBe('0');
  });

  it('can count up', () => {
    let counter = mount(<Counter />);
    counter.find('.up').simulate('click');
    expect(counter.state('count')).toEqual(1);
    counter.find('.up').simulate('click');
    expect(counter.state('count')).toEqual(2);
  });

  it('can count down', () => {
    let counter = mount(<Counter />);
    counter.find('.down').simulate('click');
    expect(counter.state('count')).toEqual(-1);
    counter.find('.down').simulate('click');
    expect(counter.state('count')).toEqual(-2);
  });

  it('displays proper polarity and value for the count element', () => {
    let counter = mount(<Counter />);
    expect(counter.find('.count.positive').exists()).toBeFalsy();
    expect(counter.find('.count.negative').exists()).toBeFalsy();
    // click up
    counter.find('.up').simulate('click');
    expect(counter.find('.count.positive').exists()).toBeTruthy();
    expect(counter.find('.count').text()).toBe('1');
  });
});
