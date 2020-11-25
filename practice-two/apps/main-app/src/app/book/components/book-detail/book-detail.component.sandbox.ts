// import { Observable } from "rxjs/Observable";
// import { Book } from "@main-app/book/models/book.model";
// import { Http } from "@angular/http";
// import { HttpInterceptorService } from "@main-app/core/services/http-interceptor.service";
// import { BookService } from "./../../services/book.service";
// import { sandboxOf } from "angular-playground";
// import { BookDetailComponent } from "./book-detail.component";
// import { BookModule } from "@main-app/book/book.module";
// import { CoreModule } from "@main-app/core/core.module";
// import { OrdersService } from "@main-app/orders/services/orders.service";
// import { OrdersModule } from "@main-app/orders/orders.module";

// class MockBookService {
//   getBook(id) {
//     let book: Book = {
//       id: 'B01',
//       name: "Original Monthly Creatives Calendar",
//       price: 118,
//       img: "https://cdn.shopify.com/s/files/1/0177/2358/products/LL_Horiz-Orig_grande.jpg?v=1522598656",
//       des: "This is the first book",
//       color: "gray"
//     };

//     let books: Book[] = [];
//     books.push(book);

//     return Observable.of(books);
//   }
// }

// export default sandboxOf(BookDetailComponent, {imports: [BookModule, CoreModule, OrdersModule], declareComponent: false})
//   .add("asdasd", {
//     template: `<book-detail></book-detail>`,
//     providers: [
//       {
//         provide: BookService,
//         useClass: MockBookService
//       },
//       {
//         provide: HttpInterceptorService
//       },
//       {
//         provide: OrdersService
//       }
//     ]
// });
