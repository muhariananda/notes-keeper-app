import React, { useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { auth } from "../../../utils/locale";
import LocaleContext from "../../../contexts/LocaleContext";

const InputLogin = ({ login }) => {
  const { locale } = useContext(LocaleContext);
  
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const handleLogin = () => login({ email, password });

  return (
    <div className="input-login">
      <label htmlFor="email">{auth[locale].emailLabel}</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label htmlFor="password">{auth[locale].passwordLabel}</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <button type="button" onClick={handleLogin}>
        {auth[locale].login}
      </button>
    </div>
  );
};

InputLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

export default InputLogin;
