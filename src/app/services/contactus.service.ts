import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactUsService {
  constructor(private http: Http) {
    // console.log('contact service initialized!');
  }

  sendEmail(data) {
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // Send email to formspree with data received from ContactComponent
    return this.http.post('https://formspree.io/srujanashow@gmail.com', data, options)
    .map((res: Response) => console.log('Res:',res))
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    .subscribe();
  }

  emailSubscribe(data) {
    // req body needs "email_address" and "status" keys
    let body = JSON.stringify(data);
    let user = 'SRUJANA_SHOW:8eac5fb5bb095fb4dd533417e7e7ba10-us15';
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Data-Type': 'json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://us15.api.mailchimp.com/3.0/lists/ad9449264b/members&c=?', data, options)
    .map((res: Response) => console.log('Res:',res))
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    .subscribe();
  }
}
