// Import core and common modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import router modules
import { RouterModule } from '@angular/router';

// Import internal components
import { HeaderComponent } from './components/header/header.component';
import { PrimaryLayoutComponent } from './components/primary-layout/primary-layout.component';

const Modules: any = [CommonModule, RouterModule];

const Component: any = [HeaderComponent, PrimaryLayoutComponent];

@NgModule({
  imports: [...Modules],
  declarations: [...Component],
  exports: [...Component]
})
export class SharedModule {}
