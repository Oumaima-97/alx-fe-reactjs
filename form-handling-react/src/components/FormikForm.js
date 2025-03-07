// src/components/formikForm.tsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm: React.FC = () => {
  // Handle form submission
  const handleSubmit = (values: any) => {
    console.log('Form submitted:', values);
  };

  return (
    // Wrap the JSX in a single parent element (e.g., <div> or <React.Fragment>)
    <div>
      <h1>Registration Form</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
