import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const SERVICE_ID = 'service_iedebjs';
const TEMPLATE_ID = 'template_pyj4j4i';
const PUBLIC_KEY = 'SAKEvwkpe_8thaTW8';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [isSending, setIsSending] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      setIsSending(true);
      setSuccessMessage('');
      setErrorMessage('');

      const templateParams = {
        from_name: name,
        from_email: email,
        name: name,
        email: email,
        message: message
      };

      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSending(false);
          setSuccessMessage('Message sent successfully! I will get back to you soon. 😊');
          setName('');
          setEmail('');
          setMessage('');
          setTimeout(() => {
            setSuccessMessage('');
          }, 6000);
        },
        (error) => {
          console.log('FAILED...', error);
          setIsSending(false);
          setErrorMessage('Oops! Something went wrong. Please try again.');
        },
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Have a project in mind or an opportunity to discuss? I'd love to hear from you!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Tell me about your project, opportunity, or just say hello!"
              multiline
              rows={8}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <div className="form-bottom">
              <div className="form-bottom-message">
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </div>
              <div className="form-bottom-button">
                <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail} disabled={isSending}>
                  {isSending ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;