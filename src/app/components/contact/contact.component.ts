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

  // Formspree emails
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
      this.sent = true;
    } else {
      console.log('Bad fields, not sending');
      this.err = true;
      this.sent = false;
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

  // Mailchimp subscriptions
  // subscribe() {
  //   let data = {
  //     email_address: this.email,
  //     status: 'subscribed'
  //   };
  //
  //   console.log('Subscribing:')
  //   console.log(data);
  //   this.contactService.emailSubscribe(data);
  //   this.email = '';
  // }
}
