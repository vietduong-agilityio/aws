import { Book } from '@main-app/book/models/book.model';

export class Orders {
  id: string;
  book: Book;
  quantity: number;
  total: number;
}
