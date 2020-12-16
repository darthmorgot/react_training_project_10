import React from 'react';
import renderer from 'react-test-renderer';
import {GameScreen} from './game-screen';
import {MAX_MISTAKE_COUNT} from '../../const';

const AVATAR_URL = `https://avatars.dicebear.com/api/avataaars`;
const questions = [
  {
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
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [{
      picture: `${AVATAR_URL}/JohnSnow.svg`,
      artist: `John Snow`
    },
    {
      picture: `${AVATAR_URL}/JackDaniels.svg`,
      artist: `Jack Daniels`
    },
    {
      picture: `${AVATAR_URL}/JimBeam.svg`,
      artist: `Jim Beam`
    }]
  }
];

const noop = () => {};

describe(`Render GameScreen`, () => {
  it(`Render GenreQuestionScreen`, () => {
    const tree = renderer
      .create(
          <GameScreen
            errorCount={MAX_MISTAKE_COUNT}
            step={0}
            mistakes={0}
            questions={questions}
            onUserAnswer={noop}
            resetGameAction={noop}
          />,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const tree = renderer
      .create(
          <GameScreen
            errorCount={MAX_MISTAKE_COUNT}
            step={1}
            mistakes={0}
            questions={questions}
            onUserAnswer={noop}
            resetGameAction={noop}
          />,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
