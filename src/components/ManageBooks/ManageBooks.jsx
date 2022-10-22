import React, { useState, useRef } from 'react';
import { Formik } from 'formik';

import './ManageBooks.css';

const ManageBooks = () => {
  const [listBook, setListBook] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [indexOfItemEdit, setIndexOfItemEdit] = useState(0);

  const inputTitleRef = useRef();
  const inputQuantityRef = useRef();

  const handleValidate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.quantity) {
      errors.quantity = 'Required';
    }

    return errors;
  };

  const handleEdit = (item, index) => {
    inputTitleRef.current.value = item.title;
    inputQuantityRef.current.value = item.quantity;
    setIsEdit(true);
    setIndexOfItemEdit(index);
  };

  const handleDelete = (index) => {
    setListBook((prev) => {
      const newListBook = [...prev];
      newListBook.splice(index, 1);

      return newListBook;
    });
  };

  const IHandleSubmit = (values) => {
    if (!isEdit) {
      setListBook((prev) => [...prev, values]);
    } else {
      setListBook(() => {
        listBook[indexOfItemEdit] = values;
        return listBook;
      });
      setIsEdit(false);
    }
    inputTitleRef.current.value = '';
    inputQuantityRef.current.value = '';
    inputTitleRef.current.focus();
  };

  return (
    <div>
      <h1>Library</h1>
      <Formik
        initialValues={{ title: '', quantity: '' }}
        validate={handleValidate}
        onSubmit={IHandleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label style={{ display: 'block' }}>Tiêu đề</label>
              <input
                ref={inputTitleRef}
                type='text'
                name='title'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <h5 className='error-message'>{errors.title && touched.title && errors.title}</h5>
            </div>
            <div>
              <label style={{ display: 'block' }}>Số lượng</label>

              <input
                ref={inputQuantityRef}
                type='number'
                name='quantity'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <h5 className='error-message'>
                {errors.quantity && touched.quantity && errors.quantity}
              </h5>
            </div>
            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>

      <h1>List Book</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listBook.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleEdit(item, index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
