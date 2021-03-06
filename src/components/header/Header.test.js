import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header Layout', () => {
  it('makes a snapshot', () => {
    const component = renderer.create(
      <Header />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

