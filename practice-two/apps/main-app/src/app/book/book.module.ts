// Import core and common modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import router modules
import { RouterModule } from '@angular/router';

// Import form module
import { FormsModule } from '@angular/forms';

// Import pagination module
import { NgxPaginationModule } from 'ngx-pagination';

// Import internal components
import { BookComponent } from './book.component';

// Import modules ngrx to manage state
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// Import material modules
import { MatGridListModule } from '@angular/material';

// Import bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import service, action
import { BookService } from './services/book.service';
import { BookActions } from './+state/actions/book.action';

// Import effect and reducer
import { BookEffect } from './+state/effects/book.effect';
import { bookReducer } from './+state/reducers/book.reducer';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookImgComponent } from './components/book-img/book-img.component';

const Modules: any = [
  CommonModule,
  RouterModule,
  FormsModule,
  NgxPaginationModule,
  StoreModule.forFeature('book', bookReducer),
  EffectsModule.forFeature([BookEffect]),
  BrowserAnimationsModule,
  MatGridListModule,
  NgbModule.forRoot()
];

const Components: any = [
  BookComponent, 
  BookDetailComponent,
  BookImgComponent
];

const Providers: any = [
  BookService, 
  BookActions
];

@NgModule({
  imports: [
    ...Modules
  ],
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components
  ],
  providers: [
    ...Providers
  ]
})
export class BookModule {}
