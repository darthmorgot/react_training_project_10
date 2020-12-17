import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AuthScreen} from './auth-screen';

Enzyme.confugure({
  adapter: new Adapter()
});

it(`Should replay button be pressed`, () => {
  const handleReplayButtonClick = jest.fn();

  const wrapper = shallow(
      <AuthScreen
        onReplayBattonClick={handleReplayButtonClick}
        onSubmit={() => {}}
      />
  );

  const replayButton = wrapper.find(`button.replay`);
  replayButton.simulate(`click`);

  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
});
