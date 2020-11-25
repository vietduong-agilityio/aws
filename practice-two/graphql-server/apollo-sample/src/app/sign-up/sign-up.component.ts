import { Component, OnInit } from '@angular/core';
// Import elements to create and validate Form
import {
  FormGroup, FormBuilder, Validators
} from '@angular/forms';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

const SignUp = gql`
  mutation SignUp($name: String!, $email: String!, $pass: String!) {
    signUp (name: $name, email: $email, pass: $pass) {
      id
      name
      email
    }
  }
`;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      pass: ['', Validators.required]
    });
  }

  onSubmit() {
    const name = this.signUpForm.value.name;
    const email = this.signUpForm.value.email;
    const pass = this.signUpForm.value.pass;

    this.apollo
      .mutate({
        mutation: SignUp,
        variables: {
          name: name,
          email: email,
          pass: pass
        }
      }).subscribe((result: any) => {
        this.router.navigate(['/verify'], {
          queryParams: {
            email: (result && result.data && result.data.signUp) ? result.data.signUp.email : ''
          }
        });
      });
  }

}
