// Import core and common modules
import { NgModule } from '@angular/core';

// Import router module
import { RouterModule } from '@angular/router';

// Import user login component
import { UserLoginComponent } from './components/user-login/user-login.component';

// Import external components
import { PrimaryLayoutComponent } from '@main-app/shared/components/primary-layout/primary-layout.component';

const Components: any = [
  UserLoginComponent,
  PrimaryLayoutComponent
];

export const ROUTES: any = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent
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
export class UsersRoutingModule {}
