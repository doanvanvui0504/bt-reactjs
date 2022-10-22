import React from 'react';
import { Formik } from 'formik';

import './MailForm.css';

const MailForm = () => {
  const handleValidate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.message) {
      errors.message = 'Required';
    }

    return errors;
  };

  const IHandleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Library</h1>
      <Formik
        initialValues={{ email: '', title: '', message: '', myFile: '' }}
        validate={handleValidate}
        onSubmit={IHandleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label style={{ display: 'block' }}>To</label>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <h5 className='error-message'>{errors.email && touched.email && errors.email}</h5>
            </div>
            <div>
              <label style={{ display: 'block' }}>Title</label>

              <input
                type='text'
                name='title'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <h5 className='error-message'>{errors.title && touched.title && errors.title}</h5>
            </div>

            <div>
              <label style={{ display: 'block' }}>Message</label>
              <textarea
                name='message'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <h5 className='error-message'>
                {errors.message && touched.message && errors.message}
              </h5>
            </div>
            <div>
              <input
                type='file'
                name='myFile'
                onBlur={handleBlur}
                value={values.file}
                onChange={(event) => {
                  if (event.currentTarget.files) {
                    setFieldValue('myFile', event.currentTarget.files[0]);
                  }
                }}
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>

      <h1>List Book</h1>
    </div>
  );
};

export default MailForm;
