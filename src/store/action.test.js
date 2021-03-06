import {ActionType, incrementStep, resetGame, incrementMistake} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist correct`, () => {
    expect(incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``
      },
      answers: [
        {
          artist: `correct`,
          picture: ``
        },
        {
          artist: `incorrect`,
          picture: ``
        },
        {
          artist: `incorrect-2`,
          picture: ``
        }
      ]
    }, {
      artist: `correct`,
      picture: ``
    })).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist incorrect`, () => {
    expect(incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``
      },
      answers: [
        {
          artist: `correct`,
          picture: ``
        },
        {
          artist: `incorrect`,
          picture: ``
        },
        {
          artist: `incorrect-2`,
          picture: ``
        }
      ]
    }, {
      artist: `incorrect`,
      picture: ``
    })).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre correct`, () => {
    expect(incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `rock`,
          src: ``

        },
        {
          genre: `jazz`,
          src: ``
        },
        {
          genre: `blues`,
          src: ``
        },
        {
          genre: `blues`,
          src: ``
        }
      ]
    }, [false, true, false, false])).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre incorrect`, () => {
    expect(incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `blues`,
          src: ``

        },
        {
          genre: `blues`,
          src: ``
        },
        {
          genre: `blues`,
          src: ``
        },
        {
          genre: `blues`,
          src: ``
        }
      ]
    }, [true, true, true, true])).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1
    });
  });

  it(`Action creator for reset game returns action with undefined payload`, () => {
    expect(resetGame()).toEqual({
      type: ActionType.RESET_GAME
    });
  });
});
