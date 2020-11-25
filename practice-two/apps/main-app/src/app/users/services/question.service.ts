// Import core module
import { Injectable } from "@angular/core";

// Import internal element
import { QuestionBase } from "@libs/dynamic-form/src/question/question-base";
import { TextboxQuestion } from "@libs/dynamic-form/src/question/question-textbox";
import { Validators } from "@angular/forms";

@Injectable()
export class QuestionService {
  constructor() {}

  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: "Email",
        type: "email",
        validator: [Validators.required, (ctrl) => {
          if (!ctrl.value) {
            return null;
          };

          return Validators.email(ctrl);
        }],
        placeholder: "your email address",
        order: 1
      }),
      new TextboxQuestion({
        key: "Password",
        validator: [Validators.required, Validators.minLength(2)],
        type: "password",
        placeholder: "password",
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
