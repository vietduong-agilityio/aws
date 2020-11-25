// Import core modules
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

// Import Store to dispatch action
import { Store } from '@ngrx/store';

// Import Book Actions to call actions handle data
import { BookActions } from './+state/actions/book.action';
import { Book } from './models/book.model';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // List books to show on template
  books$: Book[] = [];

  page = 1;

  constructor(private store: Store<any>, private bookActions: BookActions, private cd: ChangeDetectorRef) {
    /**
     * Get list books from the store to display on the template
     */
    store.select('book').subscribe((res: Book[]) => {
      this.books$ = res;
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    // Dispatch action to load list book
    this.store.dispatch(this.bookActions.loadBooks(''));
  }
}
