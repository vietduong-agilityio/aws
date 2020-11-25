import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const QueryUser = gql`
  query CurrentUserForProfile($filter: UserFilter!) {
    allUsers (filter: $filter) {
      id
      name
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  datas: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    // this.apollo
    //   .watchQuery({
    //     query: QueryUser,
    //     variables: {
    //       filter: {name: 'Ivan'}
    //     }
    //   })
    //   .valueChanges.subscribe((result: any) => {
    //     this.datas = result.data && result.data.allUsers;
    //     this.loading = result.loading;
    //     this.error = result.error;
    //   });
  }

  // onLogout() {
  //   localStorage.clear();
  // }
}
