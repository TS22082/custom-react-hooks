import React from "react";
import { useForm } from "../util/useForm";

function Form() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange}></input>
      <input
        name="password"
        type="text"
        value={values.password}
        onChange={handleChange}
      ></input>
      <h3>{values.email}</h3>
      <h3>{values.password}</h3>
    </div>
  );
}

export default Form;
