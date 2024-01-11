import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import InputLogin from "./components/InputLogin";
import { login } from "../../utils/network-data";

const LoginPage = ({ loginSuccess }) => {
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
      <h2>Selamat datang kembali, silahkan login untuk melanjutkan</h2>
      <InputLogin login={onLogin} />
      <p>
        Belum punya akun? <Link to="/register"> Daftar disni</Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
