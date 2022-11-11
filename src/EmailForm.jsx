import React, { Fragment, PureComponent, Component } from "react";


//const DEFAULT_TEMPLATE_IMG = '/content/images/CS.jpg';
const sourceEmail = 'superpannah@gmail.com';


export default class PersonalizationComponent extends PureComponent {

  componentDidMount() {
    this.load();
  }

  constructor(props) {
    super(props);
    
    this.state = {
        emailForm: {
            recipient: "",
            subject: "",
            body: "",
            showImageSpinner: false,
            validationMessages: [],
          }
    };

    this.clearImageSpinner = () => {
      this.setState({ showImageSpinner: false });
    }
    

    var AWS = require("aws-sdk");
    AWS.config.update({
        accessKeyId: "AKIA2ZP4XPBPVAM7BG5J",
        secretAccessKey: "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",
        "region": "us-east-2"  
    })

    this.validateEmailForm = () => {
        let form = {...this.state.emailForm};
        let validationMessages = [];
        if(!form.subject || form.subject.length < 1){
            validationMessages.push({controlName: 'subject', message:'Subject is required!'});
        }
        if(!form.recipient || form.recipient.length < 1){
            validationMessages.push({controlName: 'recipient', message:'Recipient is required!'});
        }
        if(!form.body || form.body < 1){
            validationMessages.push({controlName: 'body', message:'Body is required!'})
        }

        return validationMessages;  
    }


    this.load = () => {
        //put whatever you want in here on page load
    }

    this.clear = () => {
        this.setState({
            emailForm: {
                recipient: "",
                subject: "",
                body: "",
                showImageSpinner: false,
                validationMessages: [],
              }
        });
    }

    this.submit = () => {
        let validationMessages = this.validateEmailForm();
        if(validationMessages.length > 0)
        {
            this.setState({emailForm: {...this.state.emailForm, validationMessages: validationMessages}} );  
        }
        else{
            
            try {
                var email = Email(this.state.emailForm)
                var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(email).promise();
                alert('Email Sent Successfully!')
                this.clear()
                return sendPromise;
            } catch (e) {
                console.log("Failed to send email.");
                return e;
            }
      }

    }

    this.handleEmailFormChange = (event, callback) => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            emailForm:{
                ...this.state.emailForm,
                [name]:value,
            },
        }, () => {
          if(callback){
            callback();
          }
        });
            

    }

    this.setEmailFormState = (emailForm, callback) => 
    {
        this.setState({
            emailForm: {
                ...this.state.emailForm,
                ...emailForm
            }
    }, () => callback());
    }
}


  //This is the actual form 
  render() {
    return (
      <Fragment>
<div className = 'form'>
  {/* Email Recipient */}
  <label htmlFor="recipient">To: </label>
  {/* <input type="email" id="recipient" name="recipient" /><br /><br /> */}
  <input
                id="recipient"
                name="recipient"
                value={this.state.emailForm.recipient}
                onChange={(event) => this.handleEmailFormChange(event)}
              />
                            <FieldValidationErrorMessageComponent
                controlName="recipient"
                errorMessages={this.state.emailForm.validationMessages || []}
              />
              <br /><br />
  {/* Subject */}
  <label htmlFor="subject">Subject: </label>
{/* <input type="text" id="subject" name="subject" /><br /><br /> */}
  <input
                id="subject"
                name="subject"
                value={this.state.emailForm.subject}
                onChange={(event) => this.handleEmailFormChange(event)}
              />
                            <FieldValidationErrorMessageComponent
                controlName="subject"
                errorMessages={this.state.emailForm.validationMessages || []}
              />
              <br /><br />
  {/* Email Body */}
  <label htmlFor="body">Message: </label>
  <textarea 
  id="body" 
  name="body" 
  value={this.state.emailForm.body} 
  rows="5" cols="33" 
  onChange={(event) => this.handleEmailFormChange(event)} />
                <FieldValidationErrorMessageComponent
                controlName="body"
                errorMessages={this.state.emailForm.validationMessages || []}
              />
  <br /><br />

  {/* Buttons */}
  <button id="sendEmail" onClick={()=>this.submit()}>Submit</button>
  <button id="cancel" onCancel={this.cancelForm}>Cancel</button>
</div>
</Fragment>
    );
}
  }

class FieldValidationErrorMessageComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let messages = (this.props.errorMessages || []).filter(m => m.controlName === this.props.controlName) ??'';

      return messages.length > 0
        && <ul className="parsley-errors-list filled">
          {messages.map((m, idx) => (<li key={idx} className="parsley-required">{m.message}</li>))}
        </ul>;
    }
};

const Email=(email)=>{
var params = {
    Destination: { /* required */
      ToAddresses: [
        email.recipient,
        /* more items */
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
         Charset: "UTF-8",
         Data: JSON.stringify(email.body)
        },
        Text: {
         Charset: "UTF-8",
         Data: JSON.stringify(email.body)
        }
       },
       Subject: {
        Charset: 'UTF-8',
        Data: JSON.stringify(email.subject)
       }
      },
    Source: sourceEmail, /* required */
    ReplyToAddresses: [
       'superpannah@gmail.com',
      /* more items */
    ],
  };
  return params;
}