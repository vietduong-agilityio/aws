import { HttpModule } from '@angular/http';
import { BookService } from './app/book/services/book.service';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { PlaygroundModule } from "angular-playground";
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';
import { 
  ActivatedRoute, 
  Router, 
  RouterModule
} from '@angular/router';
import { BookModule } from './app/book/book.module';
import { BookRoutingModule } from "@main-app/book/book-routing.module";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPaginationModule } from "ngx-pagination";
import { MatGridListModule } from "@angular/material";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

PlaygroundModule.configure({
  selector: "app-root",
  overlay: false,
  modules: [
    // CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    RouterModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    HttpModule
    // BrowserAnimationsModule,
    // BookModule,
    // BookRoutingModule,

  ]
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
