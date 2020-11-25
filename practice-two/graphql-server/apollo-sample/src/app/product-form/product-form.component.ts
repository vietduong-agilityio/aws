import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import gql from 'graphql-tag';

const AddProduct = gql`
  mutation AddProduct($title: String!, $price: Int!) {
    addProduct (title: $title, price: $price) {
      id
      title
      price
    }
  }
`;

const UpdateProduct = gql`
  mutation UpdateProduct($id: Int!, $title: String!, $price: Int!) {
    updateProduct (id: $id, title: $title, price: $price) {
      id
      title
      price
    }
  }
`;

const GetProduct = gql`
  query GetProduct($id: Int!) {
    getProduct (id: $id) {
      id
      title
      price
    }
  }
`;

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  productId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private apollo: Apollo
  ) {
    this.productId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    if (this.productId) {
      this.apollo
      .watchQuery({
        query: GetProduct,
        variables: {
          id: this.productId
        },
      })
      .valueChanges.subscribe((result: any) => {
        if (
          result &&
          result.data &&
          result.data.getProduct
        ) {
          this.productForm = this.fb.group({
            title: [result.data.getProduct.title, Validators.required],
            price: [result.data.getProduct.price, Validators.required]
          });
        }
      });
    } else {
      this.productForm = this.fb.group({
        title: ['', Validators.required],
        price: ['', Validators.required]
      });
    }
  }

  onSubmit() {
    const title = this.productForm.value.title;
    const price = this.productForm.value.price;

    if (this.productId) {
      this.updateProduct(this.productId, title, price);
    } else {
      this.addProduct(title, price);
    }
  }

  addProduct(title: string, price: number) {
    this.apollo
      .mutate({
        mutation: AddProduct,
        variables: {
          title: title,
          price: price
        }
      }).subscribe((result: any) => {
        if (
          result &&
          result.data &&
          result.data.addProduct
        ) {
          this.router.navigateByUrl('/products');
        }
      });
  }

  updateProduct(id: number, title: string, price: number) {
    this.apollo
      .mutate({
        mutation: UpdateProduct,
        variables: {
          id: id,
          title: title,
          price: price
        }
      }).subscribe((result: any) => {
        if (
          result &&
          result.data &&
          result.data.updateProduct
        ) {
          this.router.navigateByUrl('/products');
        }
      });
  }
}
