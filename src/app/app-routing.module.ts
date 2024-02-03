import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';

const routes: Routes = [
{ path: '', redirectTo: '/articles', pathMatch: 'full' },
{ path: 'articles', component: ListArticlesComponent },
{ path: 'add-article', component: AddArticleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
