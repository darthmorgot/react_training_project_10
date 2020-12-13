import React from 'react';
import renderer from 'react-test-renderer';
import Albums from './albums';

const albums = [
  {id: 11, title: `Night Songs`, year: 1986},
  {id: 22, title: `Long Cold Winter`, year: 1988},
  {id: 33, title: `Heartbreak Station`, year: 1990}
];
const band = `Cinderrela`;
const genre = `rock`;
const singer = `Carl Thomas Keifer`;

describe(`<Albums /> render`, () => {
  it(`renders correctly with full of information`, () => {
    const tree = renderer
      .create(<Albums
        albums={albums}
        band={band}
        genre={genre}
        singer={singer}
        onFavoritesButtonClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly without singer name`, () => {
    const tree = renderer
      .create(<Albums
        albums={albums}
        band={band}
        genre={genre}
        singer={singer}
        onFavoritesButtonClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
