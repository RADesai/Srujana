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
  err: boolean;
  sent: boolean;

  constructor(private contactService: ContactUsService) {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
    this.err = false;
    this.sent = false;
  }

  emailUs() {
    let data = {
      Name: this.name,
      Email: this.email,
      Subject: this.subject,
      Message: this.message
    };

    if (this.fieldCheck()) {
      this.err = false;
      console.log('Sending');
      this.contactService.sendEmail(data);
      this.resetFields();
      // this.message = "Thanks for your message, we'll get back to you ASAP!"
      this.sent = true;
    } else {
      console.log('Bad fields, not sending');
      this.err = true;
    }

  }

  fieldCheck() {
    if (this.name !== '' && this.email !== '' && this.subject !== '' && this.message !== '') {
      return true;
    }
    return false;
  }

  resetFields() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
