import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Le nom d'utilisateur est requis."),
    email: Yup.string().email("Email invalide").required("L'email est requis."),
    password: Yup.string().required("Le mot de passe est requis."),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched }) => (
        <Form>
          <div>
            <label htmlFor="username">Nom d'utilisateur:</label>
            <Field
              type="text"
              name="username"
              id="username"
            />
            <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              name="email"
              id="email"
            />
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Mot de passe:</label>
            <Field
              type="password"
              name="password"
              id="password"
            />
            <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
          </div>

          <button type="submit">S'inscrire</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
