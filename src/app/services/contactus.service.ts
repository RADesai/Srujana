import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactUsService {
  constructor(private http: Http) {
    console.log('contact service initialized!');
  }

  sendEmail(data) {
    let body = JSON.stringify(data);
    console.log('data:', data);
    console.log('Email body:', body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://formspree.io/srujanashow@gmail.com', data, options)
    .map((res: Response) => console.log('Res:',res))
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    .subscribe();
  }

}
