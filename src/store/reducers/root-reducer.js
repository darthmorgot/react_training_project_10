import {combineReducers} from 'redux';
import {gameProcess} from '../reducers/game-process/game-process';
import {gameData} from '../reducers/game-data/game-data';

export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`
};

export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.GAME]: gameProcess
});
