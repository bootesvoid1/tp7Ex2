import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
 providedIn: 'root'
})
export class BlogService {
 private apiUrl = 'http://localhost:3000/articles'; 

 constructor(private http: HttpClient) { }

 getArticles(): Observable<Article[]> {
 return this.http.get<Article[]>(this.apiUrl);
 }

 deleteArticle(id: number): Observable<any> {
 return this.http.delete(`${this.apiUrl}/${id}`);
 }

 updateArticle(id: number, article: Article): Observable<Article> {
 return this.http.put<Article>(`${this.apiUrl}/${id}`, article);
 }

 addArticle(article: Article): Observable<Article> {
 return this.http.post<Article>(this.apiUrl, article);
 }

 findById(id: number): Observable<Article> {
 return this.http.get<Article>(`${this.apiUrl}/${id}`);
 }
}
