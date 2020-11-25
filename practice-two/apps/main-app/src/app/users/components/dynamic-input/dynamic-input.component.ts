// Import core modules
import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

// Import Form module
import { FormGroup } from '@angular/forms';
 
// Import internal elements
import { QuestionBase } from '@libs/dynamic-form/src/question/question-base';

@Component({
  selector: 'dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get nameControl() {
    return this.form.get(this.question.key);
  }

}
