import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
_url: string;
item: any;
color: any;
public caseDetails = {
  color : '#673ab7'
}
  constructor(private http: HttpClient) { 
    this.item = {
      'items': [
        {
          'mainImage': {
            'src': 'assets/culture.png'
          },
          'content': {
            'productName': 'Culture Booklet',
            'productFullDescription': 'Culture Booklet is a platform that brings you astonishing stuff about various beautiful and diverse cultures from different corners of the world. Culture Booklet also allows people to share their unique culture by posting pictures or videos and in return it offers $0.4 USD per every 1000 views on the particular post. It is platform to explore, share, earn & educate people. In short it’s a place to learn & earn.'
          },
          'link': 'culturebooklet',
          'isActive': true
        },
        {
          'mainImage': {
            'src': 'assets/demo.png',
            'imageLabel': null,
            'altText': '',
            'imageUrl': 'assets/demo.png'
          },
          'content': {
            'productName': 'ERP Demo',
            'productFullDescription': 'MFK Software ERP System is the most user friendly ERP application that can help you in taking care of your student data, teacher data, academic data, employee data, payroll, registration, admission, books, fees, mark sheet, report, library, attendance, notification, etc. at one place in the most easiest & safest way. It’s a multipurpose platform built with latest technologies that can handle school/colleges to universities management in an efficient way.'
          },
          'link': 'onlinedemo',
          'bundledProducts': null,
          'isActive': true
        },
        {
          'mainImage': {
            'src': 'assets/carrier.png'
          },
          'content': {
            'productName': 'Carrier',
            'productFullDescription': 'Software established in 1996, MFK Software began as a dream of a few friends who wanted to create a company with a difference – a company that focused on “strategic differentiation via technology” initiatives rather than routine IT operations. Today we are more than 50 experts across 20 countries. Together we form the global services division also.'
          },
          'link': 'carrier',
          'isActive': true
        }
      ]
    };
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId: string) {
    return _.findWhere(this.item.items, {productCode: userId });
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPets() {
    return this.http.get('https://dog.ceo/api/breed/hound/images');
  }
  getanimes() {
    return this.http.get('https://api.jikan.moe/v3/anime/1/characters_staff');
  }
  sendMail(url: string,data: { name: any; email: any; }){
    return this.http.post(url,data,{responseType: 'text'});
  }
  uploadFile(data: any): Observable<{}> {
    this._url = 'http://localhost:3000/uploadFile';
    return this.http.post(this._url, data,{responseType: 'text'});
       // .map(this.handleData);
}
      private handleData(res: Response) {
          let data = res.json();
          return data;
      }
      private handleError(error: Response | any) {
          return Observable.throw('API failed');
      }
}
