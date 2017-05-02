import { Component } from '@angular/core';
import { ContactUsService } from '../../services/contactus.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  providers: [ContactUsService],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor(private contactService: ContactUsService) {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }

  emailUs() {
    let data = {
      Name: this.name,
      Email: this.email,
      Subject: this.subject,
      Message: this.message
    };

    this.contactService.sendEmail(data);
    this.resetFields();
    this.message = "Thanks for your message, we'll get back to you ASAP!"
  }

  resetFields() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
