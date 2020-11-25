import { Action } from '../../interfaces/action';
import { Reducer } from '../../interfaces/reducer';
import { CounterState, initialCounter } from './counter-state';

export const counterReducer: Reducer<CounterState> = (state: CounterState = initialCounter, action: Action): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign(
        {},
        state,
        {
          counter: state.counter + 1
        }
      );

    case 'DECREMENT':
    return Object.assign(
      {},
      state,
      {
        counter: state.counter - 1
      }
    );

    case 'PLUS':
    return Object.assign(
      {},
      state,
      {
        counter: state.counter + action.payload
      }
    );

    default:
      return state;
  }
};
