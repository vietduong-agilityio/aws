import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

const ProductList = gql`
  query ProductList {
    listProduct {
      id
      title
      price
    }
  }
`;

const Messages = gql`
  query Messages {
    messages {
      id
      text
      user {
        id
        name
        email
      }
    }
  }
`;

const CreateMessage = gql`
  mutation CreateMessage($text: String!) {
    createMessage(text: $text) {
      id
      text
      user {
        id
        name
      }
    }
  }
`;

const RemoveProduct = gql`
  mutation RemoveProduct($id: Int!) {
    removeProduct (id: $id)
  }
`;

const SubcribeMessage = gql`
  subscription MessageCreated {
    messageCreated {
      message {
        id
        text
        user {
          id
          name
        }
      }
    }
  }
`;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  productDelete: any;

  messages: any[] = [];

  @ViewChild('chatText') chatText: ElementRef;

  constructor(
    private router: Router,
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getMessages();
    this.subMessages();
  }

  subMessages() {
    this.apollo.subscribe({
      query: SubcribeMessage
    }).subscribe(result => {
      this.messages.push(result.data.messageCreated.message);
    });
  }

  createMessage(text) {
    this.apollo.mutate({
      mutation: CreateMessage,
      variables: {
        text: text
      }
    }).subscribe(result => {
      console.log('create msg', result.data);
    });
  }

  onChat(text: string) {
    this.createMessage(text);

    this.chatText.nativeElement.value = '';
  }

  getProducts() {
    this.apollo
      .watchQuery({
        query: ProductList,
        variables: {},
      })
      .valueChanges.subscribe((result: any) => {
        if (
          result &&
          result.data &&
          result.data.listProduct
        ) {
          this.products = result.data.listProduct;
        }
      });
  }

  getMessages() {
    this.apollo
      .watchQuery({
        query: Messages,
        variables: {},
      })
      .valueChanges.subscribe((result: any) => {
        if (
          result &&
          result.data &&
          result.data.messages
        ) {
          this.messages = result.data.messages;
        }
      });
  }

  onClick() {
    this.router.navigate(['/product-form']);
  }

  goToEdit(id: number) {
    this.router.navigate([`/product-form/${id}`]);
  }

  goToDelete(product) {
    this.productDelete = product;
  }

  removeProduct(id: number) {
    this.apollo
      .mutate({
        mutation: RemoveProduct,
        variables: {
          id: +id
        }
      }).subscribe((result: any) => {
        if (
          result &&
          result.data &&
          result.data.removeProduct
        ) {
          window.location.reload(true);
        }
      });
  }

}
