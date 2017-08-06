import React, { Component } from 'react';
import axios from 'axios';
import DATA from '../assets/companyData.js';
import '../assets/contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sent: false,
      error: false
    };
  }

  handleChange(field, event) {
    this.setState(
      {
        [field]: event.target.value,
        sent: false,
        error: false
      }
    );
  }

  sendEmail() {
    console.log('Sending E-mail .. ..');
    console.log(`.. From: ${this.state.name}, ${this.state.email}`);
    console.log(`.. Subject: ${this.state.subject}`);
    console.log(`.. Message: ${this.state.message}`);

    // Send email to formspree with data received from ContactComponent
    let data = {
      Name: this.state.name,
      Email: this.state.email,
      Subject: this.state.subject,
      Message: this.state.message
    };
    let that = this;
    axios.post(
      `https://formspree.io/${DATA.email}`,
      data,
      { 'content-type': 'application/json'}
    )
    .then((response) => {
      console.log('RES:', response);
      that.setState({
        sent: true
      });
    })
    .catch(function (error) {
      console.log('ERR:', error);
      that.setState({
        error: true
      });
    });

    this.clearFields();
    console.log('Fields Cleared!');
  }

  clearFields() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    console.log('Fields Cleared!');
  }

  contactFieldValidation() {
    if (this.state.sent) {
      this.renderMessageSent();
    } else {
      if (this.state.err) {
        //return error message
        this.renderMessageNotSent();
      }
    }
      return;
  }

  renderMessageSent() {
    return (
      <div className="alert alert-success">
        <div>
          Thanks for your message, we'll get back to you ASAP!
        </div>
      </div>
    );
  }

  renderMessageNotSent() {
    return (
      <div className="alert alert-danger">
        <strong>*Please fill out the following fields:</strong>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-offset-4 col-md-4 text-center mailLink">
            <a href="http://eepurl.com/cPim9j">
              <img src="https://preview.ibb.co/ijZmYF/Mail_Link.png" alt="Subscribe to our Mailing List" className="img-rounded" />
            </a>
            <hr className="yellow" />
          </div>
        </div>

        <div className="row heading">
          <div className="col-md-5 col-md-offset-2 col-xs-12">
            <h2>CONTACT US</h2><hr className="orange" />
          </div>
          <div className="col-md-3 col-xs-12 text-right">
            <address>
              <strong>Srujana LLC</strong><br />
              srujanashow@gmail.com<br />
            <abbr title="Phone">P:</abbr> (973) 652-6607
            </address>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            { this.contactFieldValidation() }
            <form>
              <label>*Name:</label><br />
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange.bind(this, 'name')}
                name="name"
                placeholder="Ex -> Alan Smith" /><br /><br />
              <label>*Email:</label><br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange.bind(this, 'email')}
                name="email"
                placeholder="Ex -> alansmith@example.com" /><br /><br />
              <label>*Subject:</label><br />
              <input
                type="text"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                name="subject"
                placeholder="Ex -> Sponsorship Opportunities" /><br /><br />
              <label>*Message:</label><br />
              <textarea
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                name="message"
                rows="3"
                placeholder="Ex -> Please call me at +1 (555) 123-4567 regarding new venues!">
              </textarea><br />
              <hr className="yellow" />
              <div className="row">
                <div className="col-xs-6 text-left">
                  <div className="well well-sm text-center send" title="Submit Your Message!" onClick={ this.sendEmail.bind(this) }>
                    <span className="glyphicon glyphicon-send"></span>
                  </div>
                </div>
                <div className="col-xs-6 text-right">
                  <div className="well well-sm text-center clear" title="Reset Your Message!" onClick={ this.clearFields.bind(this) }>
                    <span className="glyphicon glyphicon-trash"></span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
