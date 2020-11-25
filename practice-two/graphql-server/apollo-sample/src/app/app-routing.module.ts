import { ProductFormComponent } from './product-form/product-form.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyComponent } from './verify/verify.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'verify',
    component: VerifyComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product-form',
    component: ProductFormComponent
  },
  {
    path: 'product-form/:id',
    component: ProductFormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/signup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
