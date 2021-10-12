import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowsViewComponent } from './views/shows-view/shows-view.component';
import { ShowsTableComponent } from './components/shows-table/shows-table.component';
import { ShowsTableLineComponent } from './components/shows-table-line/shows-table-line.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SingleShowViewComponent } from './views/single-show-view/single-show-view.component';
import { CommentsCardsComponent } from './components/comments-cards/comments-cards.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { CommentShowFormComponent } from './components/comment-show-form/comment-show-form.component';
import { NewShowViewComponent } from './views/new-show-view/new-show-view.component';
import { EditShowViewComponent } from './views/edit-show-view/edit-show-view.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    ShowsViewComponent,
    ShowsTableComponent,
    ShowsTableLineComponent,
    AuthViewComponent,
    ErrorsFormComponent,
    HeaderComponent,
    SingleShowViewComponent,
    CommentsCardsComponent,
    CommentCardComponent,
    ErrorViewComponent,
    ShowFormComponent,
    NewShowViewComponent,
    EditShowViewComponent,
    CommentShowFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
