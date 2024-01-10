import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const InputRegister = ({ register }) => {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [repassword, handleRepasswordChange] = useInput("");

  const handleRegister = () => {
    const isPasswordValid = password.length >= 6;
    const isPasswordMatch = password === repassword;

    if (!isPasswordValid) {
      alert("Password must contain at least 6 characters");
      return;
    }

    if (!isPasswordMatch) {
      alert("Password and password confirm must be same.");
      return;
    }

    register({ name, email, password });
  };

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        id="confirm-password"
        type="password"
        value={repassword}
        onChange={handleRepasswordChange}
        required
      />

      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default InputRegister;
