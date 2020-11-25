import { sandboxOf } from "angular-playground";
import { BookImgComponent } from "./book-img.component";

export default sandboxOf(BookImgComponent)
  .add("Red Img", {
    template: `<book-img [bookImg]="bookImg" [classImg]="classImg"></book-img>`,
    context: {
      bookImg:
        "https://cdn.shopify.com/s/files/1/0177/2358/products/heritage_1024x1024.png?v=1498498871",
      classImg: "red-img"
    },
    styles: [`
      :host /deep/ img {
        background-color: red;
      }
    `]
  })
  .add("Black Img", {
    template: `<book-img [bookImg]="bookImg"></book-img>`,
    context: {
      bookImg:
        "https://cdn.shopify.com/s/files/1/0177/2358/products/heritage_1024x1024.png?v=1498498871",
    },
    styles: [`
      :host /deep/ img {
        background-color: #000;
      }
    `]
  });
