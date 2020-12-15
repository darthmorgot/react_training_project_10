import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes';

describe(`Should Mistakes render correctly`, () => {
  it(`With one zero count`, () => {
    const tree = renderer
      .create(
          <Mistakes
            count={0}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshpt();
  });

  it(`With one one count`, () => {
    const tree = renderer
      .create(
          <Mistakes
            count={1}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshpt();
  });
});
