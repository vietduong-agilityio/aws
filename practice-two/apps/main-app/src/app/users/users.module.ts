// Import core and common modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import form modules
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';

// Import environment config
import { environment } from '@env/environment';
import { UserLoginComponent } from './components/user-login/user-login.component';

// Import internal elements
import { UsersService } from './services/users.service';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { QuestionService } from './services/question.service';

// Import external modules
import { DynamicFormModule } from '@libs/dynamic-form/src/dynamic-form.module';

const Modules: any = [
  CommonModule,
  FormsModule, 
  ReactiveFormsModule ,
  DynamicFormModule
];

const Components: any = [
  UserLoginComponent,
  DynamicInputComponent
];

const Providers: any = [
  UsersService,
  QuestionService
];

@NgModule({
  imports: [
    ...Modules
  ],
  declarations: [
    ...Components,
  ],
  providers: [
    ...Providers
  ]
})
export class UsersModule {}
