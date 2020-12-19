import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';

const AVATAR_URL = `https://avatars.dicebear.com/api/avataaars`;

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
  },
  answers: [
    {
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
    }
  ]
};

const noop = () => {};

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer
    .create(
        <ArtistQuestionScreen
          question={question}
          onAnswer={noop}
          renderPlayer={noop}
        >
          <React.Fragment />
        </ArtistQuestionScreen>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
