// Import core and common modules
import { NgModule } from '@angular/core';

// Import router module
import { RouterModule } from '@angular/router';

// Import internal components
import { BookComponent } from './book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

// Import external components
import { PrimaryLayoutComponent } from '@main-app/shared/components/primary-layout/primary-layout.component';

const Components: any = [
  BookComponent, 
  PrimaryLayoutComponent
];

export const ROUTES: any = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: 'book-list',
        component: BookComponent
      },
      {
        path: 'book-detail/:id',
        component: BookDetailComponent
      },
      {
        path: '',
        redirectTo: '/book-list',
        pathMatch: 'full'
      }
    ]
  }
];

const Modules: any = [
  RouterModule.forChild(ROUTES)
];

@NgModule({
  imports: [
    ...Modules
  ],
  declarations: [
    ...Components
  ]
})
export class BookRoutingModule {}
