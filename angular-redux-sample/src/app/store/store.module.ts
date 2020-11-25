import { combineReducer } from '../app.reducer';
import { Store } from './store';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

export function storeFactory(reducer, initState) {
  return new Store(reducer, initState);
}

export function provideStore(reducer, initState) {
  return [
    {provide: Store, useFactory: () => storeFactory(reducer, initState)}
  ];
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StoreModule {
  static forRoot(reducer, initState): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: provideStore(reducer, initState)
    };
  }
}
