import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!username) newErrors.username = "Le nom d'utilisateur est requis.";
    if (!email) newErrors.email = "L'email est requis.";
    if (!password) newErrors.password = "Le mot de passe est requis.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("Form Submitted", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom d'utilisateur:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Mot de passe:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default RegistrationForm;
