import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const VerifyUser = gql`
  mutation VerifyUser($email: String!, $code: String!) {
    verifyUser (email: $email, code: $code)
  }
`;

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  verifyForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private apollo: Apollo
  ) { }

  ngOnInit() {
    const email = this.route.snapshot.queryParams['email'];

    this.verifyForm = this.fb.group({
      email: [email, [
        Validators.required,
        Validators.email
      ]],
      code: ['', Validators.required]
    });
  }

  onSubmit() {
    const code = this.verifyForm.value.code;
    const email = this.verifyForm.value.email;

    this.apollo
      .mutate({
        mutation: VerifyUser,
        variables: {
          email: email,
          code: code
        }
      }).subscribe((result: any) => {
        this.router.navigate(['/signin']);
      });
  }

}
