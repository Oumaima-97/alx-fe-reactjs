import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Nom d'utilisateur requis"),
  email: Yup.string().email("Email invalide").required("Email requis"),
  password: Yup.string().min(6, "Le mot de passe doit contenir au moins 6 caractères").required("Mot de passe requis"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form submitted:", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Nom d'utilisateur</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label>Mot de passe</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            S'inscrire
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;