import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const InputLogin = ({ login }) => {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const handleLogin = () => login({ email, password });

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

InputLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

export default InputLogin;
