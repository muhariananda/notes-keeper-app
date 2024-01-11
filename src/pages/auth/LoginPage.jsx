import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import InputLogin from "./components/InputLogin";
import { login } from "../../utils/network-data";
import LocalContext from "../../contexts/LocaleContext";
import { auth } from "../../utils/locale";
import * as routePaths from "../../utils/routePaths";

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocalContext);

  const onLogin = async ({ email, password }) => {
    try {
      const { data } = await login({ email, password });
      loginSuccess(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="login-page">
      <h2>{auth[locale].loginTitle}</h2>
      <InputLogin login={onLogin} />
      <p>
        {auth[locale].loginText}{" "}
        <Link to={routePaths.REGISTER_PATH}>{auth[locale].loginAction}</Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
