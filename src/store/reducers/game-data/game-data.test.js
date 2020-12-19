import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {gameData} from './game-data';
import {ActionType} from '../../action';
import {fetchQuestionList} from '../../api-actions';
import {APIRoute} from '../../../const';

const api = createAPI(() => {});

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

it(`Reducer without additional parameters should return initial state`, () => {
  expect(gameData(void 0, {})).toEqual({
    questions: []
  });
});

it(`Reducer should update questions by load questions`, () => {
  expect(gameData({
    questions: []
  }, {
    type: ActionType.LOAD_QUESTIONS,
    payload: questions
  })).toEqual({
    questions
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /questions`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = fetchQuestionList();

    apiMock
      .onGet(APIRoute.QUESTIONS)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_QUESTIONS,
          payload: [{fake: true}]
        });
      });
  });
});
