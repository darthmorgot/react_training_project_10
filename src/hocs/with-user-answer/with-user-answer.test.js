import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withUserAnswer from './with-user-answer';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`
  },
  {
    src: `https://upload.wikimedia.org/wikipedia/commons/f/f0/A_War_Of_Shadows_by_Spelled_Moon.ogg`,
    genre: `blues`
  },
  {
    src: `https://upload.wikimedia.org/wikipedia/commons/8/8b/Himno_nacional_fineslandes.ogg`,
    genre: `jazz`
  },
  {
    src: `https://upload.wikimedia.org/wikipedia/commons/9/90/Sare_Jahan_Se_Acha_-_Music.ogg`,
    genre: `rock`
  }]
};

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const MockComponentWrapped = withUserAnswer(MockComponent);

it(`withUserAnswer is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        question={question}
        onAnswer={noop}
      >
        <React.Fragment />
      </MockComponentWrapped>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
