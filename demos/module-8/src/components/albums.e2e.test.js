import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme';
import Albums from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const albums = [
  {id: 11, title: `Night Songs`, year: 1986},
  {id: 22, title: `Long Cold Winter`, year: 1988},
  {id: 33, title: `Heartbreak Station`, year: 1990}
];
const band = `Cinderrela`;
const genre = `rock`;
const singer = `Carl Thomas Keifer`;

test(`click on "Add to favorites" button`, () => {
  const onFavoritesButtonClick = jest.fn();
  const wrapper = shallow(
      <Albums
        albums={albums}
        band={band}
        genre={genre}
        singer={singer}
        onFavoritesButtonClick={onFavoritesButtonClick}
      />
  );

  wrapper.find(`button`).simulate(`click`);
  expect(onFavoritesButtonClick).toHaveBeenCalledTimes(1);
});
