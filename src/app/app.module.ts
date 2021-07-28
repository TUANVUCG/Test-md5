import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookEditComponent} from './book/book-edit/book-edit.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookCreateComponent,
    BookListComponent,
    BookEditComponent,
    BookDetailComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
