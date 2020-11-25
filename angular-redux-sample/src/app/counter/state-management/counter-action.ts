import { Action} from '../../interfaces/action';

export const incrementCounter: Action = {
  type: 'INCREMENT'
};

export const decrementCounter: Action = {
  type: 'DECREMENT'
};

export const plusCounter: Action = {
  type: 'PLUS'
};
