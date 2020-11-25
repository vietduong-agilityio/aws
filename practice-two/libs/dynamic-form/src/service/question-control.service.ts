// Import core modules
import { Injectable } from '@angular/core';

// Import form elements
import { 
  FormControl, 
  FormGroup, 
  Validators 
} from '@angular/forms';

// Import internal elements
import { QuestionBase } from '../question/question-base';

@Injectable()
export class QuestionControlService {

  constructor() { }

  /**
   * Function to transfer the questions into a form group
   * @param questions List question to create form group
   */
  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.validator ? new FormControl(question.value || '', question.validator)
                                               : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
