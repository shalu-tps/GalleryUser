import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userData;
  constructor(private http: HttpClient) { }

  public getUsers() {
       return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  public getAlbum() {
    return this.http.get(' https://jsonplaceholder.typicode.com/albums');
  }
  public getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
