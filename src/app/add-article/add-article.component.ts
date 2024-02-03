import { Component, Inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Article } from '../models/article.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Import MatDialogRef and MAT_DIALOG_DATA

@Component({
 selector: 'app-add-article',
 templateUrl: './add-article.component.html',
 styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
 newArticle: Article;

 constructor(
    private blogService: BlogService,
    public dialogRef: MatDialogRef<AddArticleComponent>, // Inject MatDialogRef
    @Inject(MAT_DIALOG_DATA) public data: { article?: Article } // Inject MAT_DIALOG_DATA
 ) {
    // Initialize newArticle with the data passed to the dialog or create a new empty article
    this.newArticle = data.article ? data.article : new Article(0, '', '');
 }

 addArticle() {
    this.blogService.addArticle(this.newArticle).subscribe(
      response => {
        console.log('Article added successfully', response);
        // Close the dialog and optionally return the response
        this.dialogRef.close(response);
      },
      error => {
        console.error('Error adding article', error);
        // Optionally close the dialog with an error message
        this.dialogRef.close(null);
      }
    );
 }

 // Method to close the dialog without adding an article
 cancel() {
    this.dialogRef.close();
 }
}
