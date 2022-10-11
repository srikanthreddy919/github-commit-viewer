import React, { useState } from "react";

const AuthForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    setFormData((current) => ({ ...current, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="token-input" className="form-label">
          Access Token
        </label>
        <input
          type="string"
          className="form-control"
          name="accessToken"
          id="token-input"
          aria-describedby="emailHelp"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
