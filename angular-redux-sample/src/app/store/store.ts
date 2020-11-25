import { Reducer } from '../interfaces/reducer';
import { Action } from '../interfaces/action';
import { logger } from '../effects/logger';
import {
  BehaviorSubject,
  Subject
} from 'rxjs';
import { scan } from 'rxjs/operators';

export class Store<T> extends BehaviorSubject<T> {
  private dispatcher: Subject<Action>;
  private newAction: Action;

  constructor(
    private reducer: Reducer<T>,
    initialState
  ) {
    super(initialState);

    this.dispatcher = new Subject<Action>();

    this.dispatcher.pipe(
      scan(
        (state: T, action: Action) => this.reducer(state, logger(state, action)),
        initialState
      )
    ).subscribe((state) => super.next(state));
  }

  get currentState(): T {
    return this.value;
  }

  /**
   * TODO: Find another way to select to specific data
   */
  select(state) {
    return new BehaviorSubject(this.value[state]);
  }

  dispatch(action: Action) {
    this.dispatcher.next(action);
  }
}
