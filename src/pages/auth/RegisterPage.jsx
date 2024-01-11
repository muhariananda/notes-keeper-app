import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputRegister from "./components/InputRegister";
import { register } from "../../utils/network-data";
import LocalContext from "../../contexts/LocaleContext";
import { auth } from "../../utils/locale";
import * as routePaths from "../../utils/routePaths";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocalContext);

  const onRegisterHandler = async (user) => {
    try {
      const { error } = await register(user);
      if (!error) {
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="register-page">
      <h2>{auth[locale].registerTitle}</h2>
      <InputRegister register={onRegisterHandler} />
      <p>
        {auth[locale].registerText}{" "}
        <Link to={routePaths.LOGIN_PATH}>{auth[locale].registerAction}</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
