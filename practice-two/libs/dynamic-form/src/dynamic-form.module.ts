// Import core and common modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import internal service
import { QuestionControlService } from './service/question-control.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    QuestionControlService
  ]
})
export class DynamicFormModule {
}
