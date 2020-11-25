// Import core modules
import { 
  Component, 
  OnInit, 
  Inject
} from '@angular/core';

// Import form elements
import {
  FormBuilder, 
  FormGroup, 
  Validators,
  FormControl
} from '@angular/forms';

// Import elements to navigate and get data from url
import { Router } from '@angular/router';

// Import app services
import { AppConfigService } from '@main-app/core/services/app-config.service';

// Import internal elements
import { UsersService } from '../../services/users.service';
import { Users } from '../../model/users.model';
import { QuestionService } from '../../services/question.service';

// Import external services
import { QuestionControlService } from '@libs/dynamic-form/src/service/question-control.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  questions: any[];

  // Declare a form group to group all of checkout form 
  // elements
  loginForm: FormGroup;

  // Message display when login information incorrect
  loginMessage: string = '';

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private questionControlService: QuestionControlService,
    private questionService: QuestionService
  ) { 
    this.questions = this.questionService.getQuestions();
  }

  ngOnInit() {
    this.loginForm = this.questionControlService.toFormGroup(this.questions);
  }

  /**
   * Handle when click submit on form
   * Check data and return an user infomation
   */
  onSubmit() {
    this.usersService.getUser(
      this.loginForm.get('Email').value, 
      this.loginForm.get('Password').value
    ).subscribe((res: Users) => {
        if (res[0] === undefined) {
          this.loginMessage = AppConfigService.defaultMessage.loginFail;
        } else {
          // Reset messgae
          this.loginMessage = '';

          // Send name of user login to update on header
          // this.usersService.sendUserName(res[0].name);
          this.usersService.setCurrentUser(res[0]);

          // Navigate to list book page
          this.router.navigate(['/book-list']);
        }
    })
  }
}
