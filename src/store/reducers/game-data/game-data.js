import {extend} from '../../../utils';
import {ActionType} from '../../action';
// import questions from '../../../mocks/questions';

const initialState = {
  // questions
  questions: []
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload
      });
  }

  return state;
};

export {gameData};
