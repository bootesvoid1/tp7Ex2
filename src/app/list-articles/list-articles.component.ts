import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { AddArticleComponent } from '../add-article/add-article.component'; // Import AddArticleCompone
@Component({
 selector: 'app-list-articles',
 templateUrl: './list-articles.component.html',
 styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
 articles: Article[] = [];
 selectedArticle: Article | null = null;

 constructor(private blogService: BlogService ,public dialog: MatDialog // Inject MatDialog
 ) {}

 ngOnInit(): void {
   this.getArticles();

 }

 getArticles(): void {
  this.blogService.getArticles().subscribe((articles: Article[]) => {
    this.articles = articles;
  });
 }

 updateArticle(article: Article): void {
  // Open the dialog with AddArticleComponent and pass the article as data
  const dialogRef = this.dialog.open(AddArticleComponent, {
    width: '280px',
    height:'350px',
    data: { article: article } // Pass the article object as data
  });

  // Handle the result of the dialog
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Update the article if the dialog was closed with a result
      this.blogService.updateArticle(article.id, result).subscribe(() => {
        this.getArticles();
      });
    }
  });
}

 deleteArticle(articleId: number): void {
  this.blogService.deleteArticle(articleId).subscribe(() => {
    this.getArticles();
  });
 }

 addArticle(article: Article): void {
  this.blogService.addArticle(article).subscribe(() => {
    this.getArticles();
  });
 }
}
