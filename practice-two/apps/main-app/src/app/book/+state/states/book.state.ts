// Import model
import { Book } from './../../models/book.model';

// Define a type to return in reducer, this is a list of Book
// after handle actions
export type BookState = Book[];
