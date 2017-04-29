import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
