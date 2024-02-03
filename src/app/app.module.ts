  import { NgModule } from '@angular/core';
  import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
  import { HttpClientModule } from '@angular/common/http';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { ListArticlesComponent } from './list-articles/list-articles.component';

  import { NavbarComponent } from './navbar/navbar.component';
  import { AddArticleComponent } from './add-article/add-article.component';
  import { MatCardModule } from '@angular/material/card';
  import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
  import { FormsModule } from '@angular/forms';
  import { MatButtonModule } from '@angular/material/button';
  import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
  @NgModule({
    declarations: [
      AppComponent,
      ListArticlesComponent,
      NavbarComponent,
      AddArticleComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      MatCardModule,
      HttpClientModule,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
    ],
    providers: [
      provideClientHydration(),
      provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
