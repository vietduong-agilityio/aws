import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const SignIn = gql`
  mutation SignIn($email: String!, $pass: String!) {
    signIn (email: $email, pass: $pass) {
      token
    }
  }
`;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmit() {
    const email = this.signInForm.value.email;
    const pass = this.signInForm.value.pass;

    this.apollo
      .mutate({
        mutation: SignIn,
        variables: {
          email: email,
          pass: pass
        }
      }).subscribe((result: any) => {
        if (
          result &&
          result.data &&
          result.data.signIn &&
          result.data.signIn.token
        ) {
          localStorage.setItem('token', result.data.signIn.token);

          this.router.navigate(['/products']);
        }
      });
  }

}
