import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // Corrected import

function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <h2>Controlled Component</h2>
      <RegistrationForm />

      <h2>Formik Component</h2>
      <FormikForm />
    </div>
  );
}

export default App;
