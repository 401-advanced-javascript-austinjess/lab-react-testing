import React from 'react';
import Counter from './counter';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';

describe('The Counter Component', () => {
  it('IS ALIVE!!!', () => {
    let counter = mount(<Counter />);
    expect(counter.find('.count').text()).toBe('0');
  });
  it('matches snapshot without props', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('can count up', () => {
  //   let counter =
  // });

  it('can count down', () => {});
});
