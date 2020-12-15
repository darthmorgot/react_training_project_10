import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';

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

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer
    .create(
        <GenreQuestionScreen
          question={question}
          onAnswer={noop}
          renderPlayer={noop}
          onChange={noop}
          userAnswers={[false, false, false, false]}
        >
          <React.Fragment />
        </GenreQuestionScreen>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
