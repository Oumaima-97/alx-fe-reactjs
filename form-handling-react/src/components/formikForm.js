import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function FormikForm() {
  return React.createElement(
    Formik,
    {
      initialValues: { username: "", email: "", password: "" },
      onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
    },
    React.createElement(
      Form,
      null,
      React.createElement("div", null,
        React.createElement("label", null, "Username:"),
        React.createElement(Field, { type: "text", name: "username" }),
        React.createElement(ErrorMessage, { name: "username", component: "p" })
      ),
      React.createElement("div", null,
        React.createElement("label", null, "Email:"),
        React.createElement(Field, { type: "email", name: "email" }),
        React.createElement(ErrorMessage, { name: "email", component: "p" })
      ),
      React.createElement("div", null,
        React.createElement("label", null, "Password:"),
        React.createElement(Field, { type: "password", name: "password" }),
        React.createElement(ErrorMessage, { name: "password", component: "p" })
      ),
      React.createElement("button", { type: "submit" }, "Register")
    )
  );
}

export default FormikForm;
