import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './ContactForm.css';

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const ContactForm = () => {
  const handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.phone) {
      errors.phone = 'Required';
    }
    if (!values.message) {
      errors.message = 'Required';
    }
    return errors;
  };
  return (
    <div>
      <h1>Contact Form</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '', message: '' }}
        validate={handleValidate}
        onSubmit={(values) => {
          console.log(values);
          alert('Success');
        }}
      >
        <Form className='form-container'>
          <div className='form-item'>
            <label htmlFor='name'>Name</label>
            <Field name='name' type='text' placeholder='Enter your name' />
            <div className='error-message'>
              <ErrorMessage name='name' />
            </div>
          </div>

          <div className='form-item'>
            <label htmlFor='email'>Email</label>
            <Field name='email' type='email' placeholder='Enterr your email' />
            <div className='error-message'>
              <ErrorMessage name='email' />
            </div>
          </div>

          <div className='form-item'>
            <label htmlFor='phone'>Phone</label>
            <Field name='phone' type='number' placeholder='Enter your phone number' />
            <div className='error-message'>
              <ErrorMessage name='phone' />
            </div>
          </div>

          <div className='form-item'>
            <label htmlFor='message'>Phone</label>
            <Field name='message' type='text' as='textarea' placeholder='Enter your message' />
            <div className='error-message'>
              <ErrorMessage name='message' />
            </div>
          </div>

          <div>
            <button type='submit'>Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
