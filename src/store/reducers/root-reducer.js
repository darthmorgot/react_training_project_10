import {combineReducers} from 'redux';
import {gameProcess} from '../reducers/game-process/game-process';
import {gameData} from '../reducers/game-data/game-data';
import {user} from '../reducers/user/user';

export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.GAME]: gameProcess,
  [NameSpace.USER]: user
});
